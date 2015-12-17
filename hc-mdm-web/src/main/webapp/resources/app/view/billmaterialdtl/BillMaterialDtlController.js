/**
 * Description: 物料单据表
 * bill_material/bill_material_dtl/bill_material_sizeController All rights
 * Reserved, Designed ByHc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 *
 * @author: zhuyuanh
 * @date: 2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialdtl.BillMaterialDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.billmaterialdtl',
    gridEditingList: [],
    init: function () {
        this.callParent(arguments);
        var me = this,
            objlist = me.getObjList(),
            form = objlist['commonbill'],
            record = form.getRecord();
        if (objlist['mastergrid']) {
            objlist['mastergrid'].store.on('update', me.onBillGridDataChange, me);
            objlist['mastergrid'].store.on('datachanged', me.onBillGridDataChange, me);
        }

        //码组选择控制
        me.lookupReference('sizeTypeNo').on('beforequery', function () {
            var hasSizes = me.lookupReference('grid2').store.count();
            if (hasSizes > 0) {
                Hc.alert('请先删除[尺码明细]再更换码组');
            }
            return (hasSizes == 0)
        });

        //初始加载,全部设置只读
        me.setComponentReadOnly('tabpanel', true);
        if (me.lookupReference('brandNo')) { //品牌事件
            me.lookupReference('brandNo').on('select', 'onChangeBrandNo', me);
        }

        //款号
        me.gridEditingList = [];

        //初始化
        //objlist['mastergrid'].readOnly = true;
        me.lookupReference('btnOther1').setText('批量尺码');
        me.lookupReference('btnOther1').setHidden(false);

        if (!record) return;
        record.set('materialType', '3');
    },
//复制记录
    beforeCopy:function(newObj){
        var me = this;
        var maintainType = me.lookupReference('maintainType').getValue();
        if(maintainType == 1){
            Hc.alert('维护类型为【修改】状态，不允许复制!');
            return false;
        }
        //申请物料编码
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
            method: 'GET',
            params: {
                billtypeNo: '12401002'
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0") {
                    var materialNo = result.sheetIdCode;
                    newObj.set('materialNo', materialNo);
                    newObj.set('materialCode', '待编码');

                    //处理序号
                    if (me.workObject.hasOrderNo) {
                        var ds = me.workObject.store,
                            orderNo = (ds.max('orderNo') || 0) + 1;
                        newObj.set('orderNo', orderNo);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '申请物料编号失败!');
                    return false;
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
        return true;
    },
    /**
     * 导入配码
     * @param btn
     */
    onBtnOther1: function (btn) {
        var me = this;

        var store = me.lookupReference('grid2').store;
        var materialNo = me.lookupReference('materialNo').value;
        var model = store.model;
        var sizeTypeNoValue = me.lookupReference('sizeTypeNo').value;
        var billNo = me.getObjList()['commonbill'].getRecord().get('billNo');

        if (Ext.isEmpty(sizeTypeNoValue)) {
            Hc.alert('请先输入码组!');
            return;
        }
        if(store.getCount() > 0){
            Hc.alert('尺码明细已经存在尺码，不允许导入!');
            return;
        }

        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_size/listAll.json',
            method: 'GET',
            params: {
                sizeTypeNo: sizeTypeNoValue
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;

                    for (var i = 0; i < vRec.length; i++) {
                        var data = model.create(vRec[i]);
                        data.set('_flag', 'A');
                        data.set('sizeNo', vRec[i].sizeNo);
                        data.set('barcode', vRec[i].sizeNo);
                        data.set('materialNo', materialNo);
                        data.set('billNo', billNo);
                        store.add(data);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '没有找到码组为【' + sizeTypeNoValue + '】的信息!');
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
    },
    //新单
    onBtnBillNewClick: function (btn){
        var me = this;
        me.callParent(arguments);

        me.lookupReference('btnOther1').setDisabled(false); //批量审批
        me.lookupReference('materialType').setValue('3');
    },

    /**
     * 设置控件是否只读
     * @param component 控件本身
     * @param isReadOny 是否只读
     */
    setComponentReadOnly: function (componentName, isReadOny) {
        var me = this;
        if(!me.lookupReference(componentName) || !me.lookupReference(componentName).query){
            return;
        }
        var list = me.lookupReference(componentName).query('textfield,numberfield,datefield,combo');
        var billStatus = me.lookupReference('billStatus').value;
        if (billStatus && billStatus == '20') { //单据审核，则只读
            me.lookupReference('btnOther1').setDisabled(true);
            me.lookupReference('materialNo').setReadOnly(true);
            me.lookupReference('maintainType').setReadOnly(true);
            return;
        }
        Ext.each(list, function (cmp) {
            if (cmp.name == 'currencyNo' || cmp.name == 'specialCode' || cmp.name == 'modelNo') {
                cmp.setReadOnly(true);
            } else {
                cmp.setReadOnly(isReadOny);
            }

        });
    },
    /*从写保存之后方法*/
    afterSave: function (result, options) {
        var me = this;
        me.callParent(arguments);
        //me.lookupReference('grid2').view.refresh();
        me.setComponentReadOnly('tabpanel', true);
    },

    //品牌带出特征码
    onChangeBrandNo: function (obj, newval) {
        this.setSpecialCodeValue(null, null);
    },

    //面板大类联动小类
    onChangeParentCategoryNo: function (obj, newval) {
        var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
        var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
        var categoryNoCom = this.lookupReference('categoryNo');
        if (parentCategoryNo) {
            categoryNoCom.setValue('');
            //通过parentCategoryCode找到parentCategoryId
            var index = parentCategoryNoCom.store.findBy(function (record, id) {
                return record.get('categoryNo') == parentCategoryNo;
            });
            var record = parentCategoryNoCom.store.getAt(index);
            var parentCategoryId = record.get('categoryNo');

            categoryNoCom.store.proxy.extraParams['categoryNo'] = parentCategoryId;
            categoryNoCom.store.load();
        }
    },

    onChangeCategory: function (obj, newval, oldval) {
        var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
        if (!parentCategoryNo) {
            obj.setValue('');
            Ext.Msg.alert('提示', '请先选择大类');
            return false;
        }
    },

    //面板型体联动款号
    onChangeModelNo: function (obj, newval) {
        var modelNo = this.lookupReference('modelNo').getValue();
        var styleNoCom = this.lookupReference('styleNo');
        if (modelNo) {
            styleNoCom.setValue('');
            styleNoCom.store.proxy.extraParams['modelNo'] = modelNo;
            styleNoCom.store.load();
            //所选网格的款号也致空
            var row = this.lookupReference('mastergrid').getSelection()[0];
            row.set('styleNo', '')
        }
    },

    onChangeStyleNo: function (obj, newval, oldval) {
        var modelNo = this.lookupReference('modelNo').getValue();
        if (!modelNo) {
            obj.setValue('');
            //所选网格的款号也致空
            var row = this.lookupReference('mastergrid').getSelection()[0];
            row.set('styleNo', '');
            Ext.Msg.alert('提示', '请先选择型体');
            return false;
        }
    },

    /* grid编辑之前(联动控制) */
    onGridBeforeEdit: function (sender, e) {
        if (this.gridCannotEditKeyField(e) === false) return false;
        //大类联动小类
        if (e.field == 'categoryNo') {
            var record = e.record;
            var newparentCategoryNo = record.get('parentCategoryNo');
            var categoryNo = record.get('categoryNo');
            if (newparentCategoryNo == '') {
                Ext.Msg.alert('提示', '请先选择大类');
                return false;
            }
            else {
                var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
                //通过parentCategoryCode找到parentCategoryId
                var ind = parentCategoryNoCom.store.findBy(function (record, id) {
                    return record.get('categoryNo') == newparentCategoryNo;
                });
                var rec = parentCategoryNoCom.store.getAt(ind);
                var newparentCategoryId = rec.get('categoryId');

                var store = e.column.getEditor().store;
                var oldparentCategoryId = store.proxy.extraParams['parentCategoryId'];

                //通过parentCategoryId找到parentCategoryCode
                var index = parentCategoryNoCom.store.findBy(function (record, id) {
                    return record.get('categoryId') == oldparentCategoryId;
                });
                var record = parentCategoryNoCom.store.getAt(index);
                var oldparentCategoryNo = null;
                if (record) {
                    oldparentCategoryNo = record.get('categoryNo');
                }
                store.proxy.extraParams.parentCategoryId = newparentCategoryId;
                store.on("load", function () {
                    e.column.getEditor().setValue(categoryNo);
                });
                store.load();
            }
        }

        //型体联动款号
        if (e.field == 'styleNo') {
            var record = e.record;
            var newmodelNo = record.get('modelNo');
            var styleNo = record.get('styleNo');
            if (newmodelNo == '') {
                Ext.Msg.alert('提示', '请先选择型体');
                return false;
            }
            else {
                var store = e.column.getEditor().store;
                var oldmodelNo = store.proxy.extraParams['modelNo'];
                if (newmodelNo != oldmodelNo) {
                    store.proxy.extraParams.modelNo = newmodelNo;
                    store.on("load", function () {
                        e.column.getEditor().setValue(styleNo);
                    });
                    store.load();
                }
            }
        }

    },

    /*新增单据
     onBtnBillNewClick: function (btn) {
     var me=this;
     me.callParent(arguments);
     //me.lookupReference('materialType').setValue(0);
     },*/

    /*保存按钮状态
     gridDataChanged: function (store, grid)
     {
     var me=this;
     me.callParent(arguments);
     me.lookupReference('btnBillSave').setDisabled(me.lookupReference('btnSave').disabled);
     },*/

    /*控制主从输入*/
    initAddData: function (newobj) {
        var me = this,
            objlist = me.getObjList(),
            obj = me.workObject;

        //调用父类initAddData方法，产生序列号
        if (me.callParent(arguments) === false) return false;

        if (me.lookupReference('maintainType').getValue() == '') {
            Hc.alert('请先选择[维护类型]');
            return false;
        }

        if (obj.viewModelKey == "mastergrid" && me.gridEditingList.length > 0) {
            Hc.alert('有一笔数据正在编辑，不能新增主表记录');
            return false;
        }
        me.lookupReference('maintainType').setReadOnly(true);
        if (obj.viewModelKey == "mastergrid") {
            var maintainType = me.lookupReference('maintainType').value;
            if (maintainType == 1) {
                return;
            }
            Ext.Ajax.request({
                url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
                method: 'GET',
                params: {
                    billtypeNo: '12400503'
                },
                success: function (response) {
                    var result = JSON.parse(response.responseText);
                    if (result.result.resultCode == "0") {
                        var materialNo = result.sheetIdCode;
                        newobj.set('materialNo', materialNo);
                        newobj.set('materialCode', '待编码');
                        newobj.set('currencyNo', 'RMB');//默认币别-人民币
                    } else {
                        newobj.set('materialCode', '待编码');
                        Ext.MessageBox.alert('提示', '申请物料编号失败!');
                    }
                },
                failure: function (response, opt) {
                    Ext.MessageBox.show({
                        title: '错误提示',
                        msg: response.responseText,
                        height: 300,
                        width: 400
                    });
                }
            });
        }
        if (obj.supGrid) {
            var item = objlist[obj.supGrid].getSelection()[0];
            if (!item) {
                Hc.alert('主表没有选中记录时，从表不能新增记录');
                return false;
            }
            if (!item.phantom) {
                var idField = objlist[obj.supGrid].primaryKey;
                newobj.set(idField, item.get(idField));
            }
            newobj.set('materialNo', item.get('materialNo'));
        }
    },

    /*grid更新数据时*/
    onBillGridDataChange: function (store) {
        var me = this,
            reference = 'mastergrid',
            idx = me.getDirtyIndex(store);
        if (idx > -1) {
            Ext.Array.include(me.gridEditingList, reference);
        } else {
            Ext.Array.remove(me.gridEditingList, reference);
        }
    },

    /*选择变化之后*/
    onGridSelectionChange: function (sender, e, index, eOpts) {
        var me = this;
        me.callParent(arguments);

        if (me.lookupReference('mastergrid').getSelection() && me.lookupReference('mastergrid').getSelection().length > 0) {
            me.setComponentReadOnly('tabpanel', false); //设置控件不只读
            //查询配码信息

            var billStatus = me.lookupReference('billStatus').value;
            if(billStatus < 20){
                me.lookupReference('materialNo').setReadOnly(me.lookupReference('maintainType').getValue() == "0");
            }
        }
        else {
            me.setComponentReadOnly('tabpanel', true);
        }
        if (me.lookupReference('mastergrid').store.getCount() <= 0) {
            me.lookupReference('maintainType').setReadOnly(false);
        }else{
            me.lookupReference('maintainType').setReadOnly(true);
        }
    },
    
    onGrid2BeforeLoad:function(store,ops){
		if(this.callParent(arguments)===false) return false;
		var row= this.lookupReference('mastergrid').getSelection()[0];
		if(row){
			store.proxy.extraParams['materialNo']=	row.get('materialNo');
		}
	},
    /**
     * 获取配码明细
     */
    getSizeNos: function () {
        var me = this,
            grid = me.getObjList()['grid2'],
            store = grid.store,
            model = store.model;
        var sizeTypeNo = me.lookupReference('sizeTypeNo').value;

        //加载配码
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bill_material_size/listAll.json',
            method: 'GET',
            params: {
                basSizeType: sizeTypeNo
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;

                    for (var i = 0; i < vRec.length; i++) {
                        var _materialModel = model.create(vRec[i]);
                        store.add(_materialModel);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '配码明细加载不正确!');
                }
            },
            failure: function (response) {
                Hc.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 500
                });
            }
        });
    },

    beforeSave : function(params){
        var me  = this;
        me.callParent(arguments);
        if (!(me.getObj('editMaterialInfo').isValid())) return false;

        var store = me.getObjList()['mastergrid'].store;
        var isValSucc = true;
        //处理待编码规则
        for(var i = 0 ; i < store.getCount(); i++){
            var materialCode = store.getAt(i).get('materialCode');
            var advicePrice = store.getAt(i).get('advicePrice');
            var developTimes = store.getAt(i).get('developmentTimes');
            if(advicePrice < 0){
                isValSucc = false;
                Hc.alert('参考单价必须大于零!');
                break;
            }else if(developTimes < 0){
                isValSucc = false;
                Hc.alert('开发次数必须大于零!');
                break;
            }

            if(materialCode == '待编码'){
                var materialNo = store.getAt(i).get('materialNo');
                store.getAt(i).set('materialCode',materialNo);
            }
        }
        if(isValSucc == false){
            return false;
        }
        //尺码判断
        var grid2Store = me.getObjList()['grid2'].store,
            sizeTypeStore = me.lookupReference('sizeTypeNo').store,
            sizeTypeNo = me.lookupReference('sizeTypeNo').getValue(),
            sizeTypeModel = sizeTypeStore.getAt(sizeTypeStore.findExact('sizeTypeNo',sizeTypeNo));

        if(sizeTypeModel && sizeTypeModel.get('sizeTypeName') == '无尺码'){
            return true;
        }else{
            if(grid2Store.getCount() <= 0){
                Hc.alert('请录入尺码明细!');
                return false;
            }
        }
        return true;
    },

    /* grid编辑之后 */
    onGridAfterEdit: function (editor, e) {
        var me = this;
        //验证输入的是否所选码组下的配码
        if (e.field == 'productCode') {
            onProdTxtAfterEdit(null, null);
        }
        //品牌带出特征码
        if (e.field == 'brandNo') {
            me.setSpecialCodeValue(editor, e)
        }
        //大类联动小类
        if (e.field == 'parentCategoryNo') {
            var oldparentCategoryNo = e.originalValue;
            var newparentCategoryNo = e.value;
            if (oldparentCategoryNo != newparentCategoryNo) {
                var record = e.record;
                record.set('categoryNo', '');
            }

        }
        //型体联动款号
        if (e.field == 'modelNo') {
            var oldmodelNo = e.originalValue;
            var newmodelNo = e.value;
            if (oldmodelNo != newmodelNo) {
                var record = e.record;
                record.set('styleNo', '');
            }

        }
        this.checkKeyValue(e);
    },

    setSpecialCodeValue: function (editor, obj) {
        var store = Ext.create('Hc_Common.store.Base', {
            fields: ["brandCategory", "brandCname", "brandCode", "brandNo", "specialCode"],
            proxy: {
                url: Hc.mdmPath + "bas_brand/listAll.json"
            }
        });
        if (obj == null) {
            store.proxy.extraParams['brandNo'] = this.lookupReference('brandNo').getValue();
            store.reload({
                scope: this,
                callback: function (recs, oper, suc) {
                    if (recs.length > 0) {
                        this.lookupReference('specialCode').setValue(recs[0].data['specialCode']);
                        var row = this.lookupReference('mastergrid').getSelection()[0];
                        row.set('specialCode', recs[0].data['specialCode'])
                    }
                }
            });
        }
        else {
            var record = obj.record;
            var row = this.lookupReference('mastergrid').getSelection()[0];
            store.proxy.extraParams['brandNo'] = record.get('brandNo');
            store.reload({
                scope: this,
                callback: function (recs, oper, suc) {
                    if (recs.length > 0) {
                        record.set('specialCode', recs[0].data['specialCode']);
                    }
                    else {
                        record.set('brandNo', "");
                        record.set('specialCode', "");
                        Hc.alert("不存在此品牌");
                        return;
                    }
                }
            });
        }
    },

    /**
     * 验证配码是否存在
     * @param editor
     * @param obj
     */
    onGrid2AfterEdit: function (editor, obj) {
        var me = this;
        if (obj.field == 'sizeNo') {
            var oldSizeNo = obj.originalValue,
                newSizeNo = obj.value;

            if (newSizeNo) {
                me.checkSizeNo(oldSizeNo, newSizeNo, obj);
                return;
            }
        }
        this.checkKeyValue(obj);
    },

    /**
     * 网格数据加载
     * @param store
     * @param records
     * @param isOk
     * @param options
     */
    onGridLoaded: function (store, records, isOk, options){
        var me = this,
            store = me.getObjList()['mastergrid'].store;
        me.callParent(arguments);

        if(store && store.getCount() > 0){
            me.lookupReference('maintainType').setReadOnly(true);
        }else{
            me.lookupReference('maintainType').setReadOnly(false);
        }
    },
    /**
     * 验证配码
     * @param oldSizeNo 配码旧值
     * @param strSizeNo 配码新值
     * @param obj 对象
     */
    checkSizeNo: function (oldSizeNo, strSizeNo, obj) {
        var slRecord = obj.record;
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_size/listAll.json',
            method: 'GET',
            params: {
                sizeNo: strSizeNo
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;
                    slRecord.set('barcode', strSizeNo);
                } else {
                    slRecord.set('sizeNo', oldSizeNo);
                    Ext.MessageBox.alert('提示', '尺码不存在!');
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
    }
});