/**
 * Description: 物料单据表-->成品 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialdtl.BillMaterialDtl', {
    extend: 'Hc_Common.view.BaseBillDetailPage',
    alias: 'widget.billmaterialdtl',
    requires: [
        'Hc_mdm.model.BillMaterial',
        'Hc_mdm.model.BillMaterialSize',
        'Hc_mdm.model.BillMaterialDtl',
        'Hc_mdm.view.billmaterialdtl.BillMaterialDtlController',
        'Hc_mdm.view.billmaterialdtl.BillMaterialDtlModel'
    ],
    controller: 'billmaterialdtl',
    viewModel: {
        type: 'billmaterialdtl'
    },

    initComponent: function () {
        var me = this,
        //型体联动款号
           // modelEStore = Ext.create('Hc_mdm.store.BasModel'),
            //modelGStore = Ext.create('Hc_mdm.store.BasModel'),
            //styleEStore = Ext.create('Hc_mdm.store.BasStyle'),
            //styleGStore = Ext.create('Hc_mdm.store.BasStyle'),
        //大类联动小类
            parentCategoryEStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            parentCategoryGStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            categoryEStore = Ext.create('Hc_mdm.store.BasCategory'),
            categoryGStore = Ext.create('Hc_mdm.store.BasCategory');
            parentCategoryEStore.proxy.extraParams['materialType'] = 3;
            parentCategoryGStore.proxy.extraParams['materialType'] = 3;

        Ext.apply(me, {
            billType: '124005',
            billItems: [
                //{name: 'billNo',bind:{value:'{billRow.billNo}'},reference : 'abillNo', xtype: 'textfield', fieldLabel: '单据编号',editable:false},
                {
                    name: 'maintainType', bind: {value: '{billRow.maintainType}'}, reference: 'maintainType',
                    xtype: 'extcombox', fieldLabel: '维护类型', displayvalue: "0=新建:1=修改", emptyText: "请选择",
                    allowBlank:false
                },
                {
                    name: 'materialType',
                    bind: {value: '{billRow.materialType}'},
                    reference: 'materialType',
                    xtype: 'extcombox',
                    fieldLabel: '物料类型',
                    displayvalue: "1=原料:2=半成品:3=成品",
                    canInput: false
                },
                {
                    name: 'billStatus',
                    bind: {value: '{billRow.billStatus}'},
                    xtype: 'extcombox',
                    allowBlank: false,
                    fieldLabel: '单据状态',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=bill_status',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    hidden: true,
                    reference: 'billStatus'
                },
                {name: 'remarks', bind: {value: '{billRow.remarks}'}, xtype: 'textfield', fieldLabel: '备注'}
            ],
            billLoadUrl: Hc.mdmPath + 'bill_material/list.json',
            billSaveUrl: Hc.mdmPath + 'bill_material/saveMasterCustomerList.json',
            billAuditUrl: Hc.mdmPath + 'bill_material/audit.json',
            billExportUrl: Hc.mdmPath + 'bill_material/do_export.json',
            billModel: 'Hc_mdm.model.BillMaterial',
            billSubGrid: ['mastergrid', 'grid2'],
            editStatus:10,

            gridColumns: [
                //{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false,editable:false},hidden:true},
                //{dataIndex: 'billNo', text: '单据号', editor: {allowBlank: true},hidden:true},
                {dataIndex: 'lineId', text: '行id', editor: {allowBlank: false}, hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'materialCode', text: '物料编码'},
                {
                    dataIndex: 'materialName', text: '物料名称', hidden: false,
                    width: 140
                },
                {dataIndex: 'barcodeEan', text: '国际条码', editor: {allowBlank: true}, hidden: true},
                {
                    dataIndex: 'brandNo', text: '品牌',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                    displaymember: 'brandEname',
                    valuemember: 'brandNo',
                    readOnly: true
                },
                {dataIndex: 'specialCode', text: '特征码'},
                {
                    dataIndex: 'sizeTypeNo', text: '码组',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json',
                    displaymember: 'sizeTypeName',
                    valuemember: 'sizeTypeNo',
                    hidden: false, readOnly: true
                },
                {
                    dataIndex: 'parentCategoryNo', text: '大类',
                    xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bill_material_dtl/getParentCategory.json?type=NO',
                    estore: parentCategoryEStore,
                    gstore: parentCategoryGStore,
                    displaymember: 'categoryName',
                    valuemember: 'categoryNo',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'categoryNo', text: '小类',
                    xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bill_material_dtl/getCategory.json?type=NO',
                    estore: categoryEStore,
                    gstore: categoryGStore,
                    displaymember: 'categoryName',
                    valuemember: 'categoryNo',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'colorNo', text: '颜色',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_color/listAll.json',
                    displaymember: 'colorName',
                    valuemember: 'colorCode',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'seasonNo', text: '年季',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'modelNo', text: '型体'
                   // xtype:'textfield'
                    //xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bas_model/listAll.json',
                    //estore: modelEStore,
                    //gstore: modelGStore,
                    //displaymember: 'modelName',
                    //valuemember: 'modelNo',
                    //hidden: false,
                    //readOnly: true
                },
                {
                    dataIndex: 'styleNo', text: '款号'
                    //xtype:'textfield'
                    //xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bas_style/listAll.json',
                    //estore: styleEStore,
                    //gstore: styleGStore,
                    //displaymember: 'styleName',
                    //valuemember: 'styleNo',
                    //readOnly: true
                },
                {
                    dataIndex: 'normalUnit', text: '基本单位',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    hidden: false,
                    readOnly: true
                },
                /*{
                 dataIndex: 'supplyCategoryNo', text: '供货类别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_supply_category/listAll.json',
                 displaymember: 'categoryName',
                 valuemember: 'categoryNo',
                 editor: {allowBlank: true}, hidden: true
                 },*/

                //{dataIndex: 'specifications', text: '规格型号', editor: {allowBlank: true}, hidden: true},
                {dataIndex: 'oldCode', text: '旧物料编码'},
                /*{
                 dataIndex: 'inventoryCategory', text: '存货类别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/
                {
                    dataIndex: 'materialSource', text: '物料属性',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=material_source',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    readOnly: true
                },
                {
                    dataIndex: 'taxRateNo', text: '税率',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                    displaymember: 'taxRateName',
                    valuemember: 'taxRateNo',
                    readOnly: true
                },
                /*{
                 dataIndex: 'taxCategory', text: '税种',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_tax_category/listAll.json',
                 displaymember: 'taxCategoryName',
                 valuemember: 'taxCategoryNo',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'allowSale',
                 text: '允许销售',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'allowDelegate',
                 text: '允许委外',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'allowPurchase',
                 text: '允许采购',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'allowProduce',
                 text: '允许生产',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'materialStatus',
                 text: '物料状态',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=模板:1=释放",
                 hidden: true
                 },
                 {
                 dataIndex: 'enableFlag',
                 text: '启用状态',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'codeRuleNo', text: '编码规则',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo',
                 editor: {allowBlank: false}, hidden: true
                 },*/
                {dataIndex: 'advicePrice', text: '参考单价', editor: {allowBlank: false}, hidden: true},
                {
                    dataIndex: 'currencyNo', text: '币别',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                    displaymember: 'currencyName',
                    valuemember: 'currencyNo',
                    editor: {allowBlank: false}, hidden: true
                },
                {dataIndex: 'productCode', text: '客户产品货号'},
                /*{
                 dataIndex: 'manufacturer', text: '制造商',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/
                //{dataIndex: 'developmentTimes', text: '开发次数', editor: {allowBlank: false}, hidden: true},
                /*{
                 dataIndex: 'lining', text: '里料',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=lining',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {dataIndex: 'insoles', text: '衬里/内垫', editor: {allowBlank: true}, hidden: true},
                 {dataIndex: 'outerBottom', text: '外底', editor: {allowBlank: true}, hidden: true},
                 {
                 dataIndex: 'style', text: '风格',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=style',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'salesChannels', text: '销售类型',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: false}, hidden: true
                 },
                 {dataIndex: 'vampMaterial', text: '帮面材料', editor: {allowBlank: true}, hidden: true},
                 {
                 dataIndex: 'genderType',
                 text: '男/女鞋',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "F=女:M=男",
                 hidden: true
                 },
                 {
                 dataIndex: 'series', text: '系列',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=series',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'joinOrderMetting',
                 text: '是否参加订货会',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'textures', text: '材质类别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=textures',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: false}, hidden: true
                 },

                 {
                 dataIndex: 'purchaseUnit', text: '采购单位',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                 displaymember: 'unitName',
                 valuemember: 'unitNo',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'purchaseGroup', text: '采购组',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=purchaseGroup',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/

                {dataIndex: 'remarks', text: '备注', width: 140}
            ],
            gridPrimaryKey: 'lineId',
            gridModel: 'Hc_mdm.model.BillMaterialDtl',
            gridSubGrid: ['grid2'],
            gridLoadUrl: Hc.mdmPath + 'bill_material_dtl/list.json',

            //码组
            grid2Columns: [
                {dataIndex: 'lineId', text: '行id', editor: {allowBlank: true}, hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'sizeNo', text: '尺码', width: 140, editor: {allowBlank: false}},
                {dataIndex: 'barcode', text: '条码', width: 140, hidden: true}
            ],
            grid2Model: 'Hc_mdm.model.BillMaterialSize',
            grid2SupGrid: 'mastergrid',
            grid2PrimaryKey: 'lineId',
            grid2LoadUrl: Hc.mdmPath + 'bill_material_size/list.json',
            grid2UnionKey:'materialNo,sizeNo'
        });

        var editMaterialInfo = {
            //title : '物料明细',
            xtype: 'form',
            reference: 'editMaterialInfo',
            //layout:{type:'table',columns:4,align:'center'},
            layout: {type: 'table', columns: 4},
            //defaults:{ labelAlign:'right',labelWidth:100,width:250,pading:5,margin:5},
            defaults: {labelAlign: 'right', labelWidth: 80, width: '100%'},
            collapsible: false,
            border: false,

            items: [
                {
                    xtype: 'textfield', fieldLabel: '行id',
                    bind: {value: '{gridRow.lineId}'}, hidden: true
                },
                {
                    xtype: 'searchhelpfield', reference: 'materialNo', fieldLabel: '物料ID',
                    bind: {value: '{gridRow.materialNo}'}, allowBlank: false,
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字', maxLength: 20,
                    enforceMaxLength: true, name: 'materialNo',
                    isAutoLoad:false,
                    url: Hc.mdmPath + "bas_material/list.json?materialType=1",
                    otherFields: 'materialNo,materialCode,barcodeEan,materialName,specifications,oldCode,' +
                    'inventoryCategory,materialSource,taxRateNo,taxCategory,sizeTypeNo,allowSale,' +
                    'allowDelegate,allowPurchase,allowProduce,materialStatus,enableFlag,codeRuleNo,' +
                    'advicePrice,currencyNo,seasonNo,parentCategoryNo,categoryNo,modelNo,styleNo,' +
                    'productCode,manufacturer,brandNo,developmentTimes,lining,insoles,outerBottom,' +
                    'style,salesChannels,vampMaterial,colorNo,genderType,series,joinOrderMetting,' +
                    'textures,normalUnit,orderNo,remarks,specialCode,ifQc',
                    gridColumns: [
                        {
                            dataIndex: 'materialNo',
                            text: '物料ID',
                            width: 140
                        }, {
                            dataIndex: 'materialCode',
                            text: '物料编码'
                        }, {
                            dataIndex: 'materialName',
                            text: '物料名称',
                            width: 200
                        }
                    ],
                    searchItems: [
                        {name: 'materialNo', fieldLabel: '物料ID'},
                        {name: 'materialCode', fieldLabel: '物料编码'},
                        {name: 'materialName', fieldLabel: '物料名称'}
                    ],
                    winTitle: '选择物料',
                    winWidth: 480,
                    winHigh: 550
                },
                {
                    xtype: 'textfield',
                    reference: 'materialCode',
                    fieldLabel: '物料编码',
                    bind: {value: '{gridRow.materialCode}'},
                    allowBlank: false,
                    emptyText: '待编码',
                    name: 'materialCode'
                },
                {
                    xtype: 'textfield', reference: 'materialName', fieldLabel: '物料名称',
                    bind: {value: '{gridRow.materialName}'}, allowBlank: false,
                    colspan: 2, enforceMaxLength: true
                },
                {
                    xtype: 'textfield', reference: 'barcodeEan', fieldLabel: '国际条码',
                    bind: {value: '{gridRow.barcodeEan}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'brandNo', fieldLabel: '品牌',
                    displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                    displaymember: 'brandEname',
                    valuemember: 'brandNo',
                    bind: {value: '{gridRow.brandNo}'}, allowBlank: false
                },
                {
                    fieldLabel: '特征码', canInput: false, xtype: 'textfield',
                    bind: {value: '{gridRow.specialCode}'}, reference: 'specialCode',
                    canInput: false, name: 'specialCode'
                },
                {
                    xtype: 'extcombox', reference: 'sizeTypeNo', fieldLabel: '码组',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json',
                    displaymember: 'sizeTypeName',
                    valuemember: 'sizeTypeNo',
                    bind: {value: '{gridRow.sizeTypeNo}'}, allowBlank: false
                },
                {
                    xtype: 'combo',
                    fieldLabel: '大类',
                    name: 'parentCategoryNo',
                    reference: 'parentCategoryNo',
                    editable: false,
                    displayField: 'categoryName',
                    valueField: 'categoryNo',
                    store: parentCategoryEStore,
                    renderer: function (value) {
                        var index = parentCategoryEStore.findExact('categoryNo', value);
                        return index > -1 ? parentCategoryEStore.getAt(index).data.categoryName : value;
                    },
                    listeners: {
                        'select': 'onChangeParentCategoryNo'
                    },
                    bind: {value: '{gridRow.parentCategoryNo}'}, allowBlank: false
                },
                {
                    xtype: 'combo',
                    fieldLabel: '小类',
                    name: 'categoryNo',
                    reference: 'categoryNo',
                    editable: false,
                    displayField: 'categoryName',
                    valueField: 'categoryNo',
                    emptyText: "请先选择大类",
                    store: {
                        type: 'basestore',
                        fields: ['categoryNo', 'categoryName'],
                        proxy: {
                            url: Hc.mdmPath + 'bill_material_dtl/getCategory.json'
                        },
                        autoLoad: true,
                        listeners: {
                            beforequery: function () {
                                if (!me.lookupReference('parentCategoryNo').getValue()) {
                                    Ext.Msg.alert('提示', '请先选择大类');
                                    return false
                                }
                            }
                        }

                    },
                    listeners: {
                        'select': 'onChangeCategory'
                    },
                    bind: {value: '{gridRow.categoryNo}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'colorNo', fieldLabel: '颜色',
                    displayvalue: Hc.mdmPath + 'bas_color/listAll.json',
                    displaymember: 'colorName',
                    valuemember: 'colorCode',
                    bind: {value: '{gridRow.colorNo}'},
                    allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'seasonNo', fieldLabel: '年季',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.seasonNo}'}, allowBlank: false
                },
                {
                    xtype: 'searchhelpfield',
                    fieldLabel: '款号',
                    name: 'styleNo',
                    reference: 'styleNo',
                    url: Hc.mdmPath + 'bas_style/list.json',
                    otherFields: 'modelNo',
                    reference: 'styleNo',
                    isAutoLoad:false,
                    gridColumns: [
                        {
                            dataIndex: 'styleNo',
                            text: '款号编号',
                            flex:0.5
                        }, {
                            dataIndex: 'styleName',
                            text: '款号名称',
                            flex:0.5
                        }
                    ],
                    searchItems: [
                        {name: 'styleNo', fieldLabel: '款号编号'},
                        {name: 'styleName', fieldLabel: '款号名称'}
                    ],
                    winTitle: '选择款号',
                    winWidth: 480,
                    winHigh: 550,
                    bind: {value: '{gridRow.styleNo}'}, allowBlank: false
                }
                /*{
                 xtype : 'combo',
                 fieldLabel : '款号',
                 name : 'styleNo',
                 reference: 'styleNo',
                 editable:false,
                 displayField:'styleName',
                 valueField:'styleNo',
                 emptyText:"请先选择型体",
                 store:{
                 type:'basestore',
                 fields:['styleNo','styleName'],
                 proxy:{
                 url:Hc.mdmPath+'bas_style/listAll.json'
                 },
                 autoLoad: true,
                 listeners:{
                 beforequery:function(){
                 if(!me.lookupReference('modelNo').getValue()){
                 Ext.Msg.alert('提示','请先选择型体');
                 return false
                 }}
                 }

                 },
                 listeners:{
                 'select': 'onChangeStyleNo'
                 },
                 bind : {value : '{gridRow.styleNo}'},allowBlank:false
                 }*/,
                /*{
                    xtype: 'combo',
                    fieldLabel: '型体',
                    name: 'modelNo',
                    reference: 'modelNo',
                    editable: false,
                    displayField: 'modelName',
                    valueField: 'modelNo',
                    store: modelEStore,
                    renderer: function (value) {
                        var index = modelEStore.findExact('modelNo', value);
                        return index > -1 ? modelEStore.getAt(index).data.modelName : value;
                    },
                    bind: {value: '{gridRow.modelNo}'}, allowBlank: false
                },*/
                {
                    xtype: 'textfield',
                    fieldLabel: '型体',
                    name: 'modelNo',
                    reference: 'modelNo',
                    bind: {value: '{gridRow.modelNo}'},
                    allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'lining', fieldLabel: '里料',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=lining',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.lining}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'manufacturer', fieldLabel: '制造商',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.manufacturer}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'genderType', fieldLabel: '男/女鞋',
                    bind: {value: '{gridRow.genderType}'}, displayvalue: "F=女:M=男", allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'style', fieldLabel: '风格',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=style',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.style}'}, allowBlank: false
                },

                {
                    xtype: 'extcombox', reference: 'series', fieldLabel: '系列',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=series',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.series}'}, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'vampMaterial', fieldLabel: '帮面材料',
                    bind: {value: '{gridRow.vampMaterial}'},
                    maxLength: 255, enforceMaxLength: true, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'insoles', fieldLabel: '衬里/内垫',
                    bind: {value: '{gridRow.insoles}'}, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'outerBottom', fieldLabel: '外底',
                    bind: {value: '{gridRow.outerBottom}'},
                    maxLength: 40, enforceMaxLength: true, allowBlank: false
                },

                {
                    xtype: 'extcombox', reference: 'textures', fieldLabel: '材质类别',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=textures',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.textures}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'salesChannels', fieldLabel: '销售类型',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.salesChannels}'}, allowBlank: false,
                    name: 'salesChannels'
                },
                {
                    xtype: 'textfield', reference: 'productCode', fieldLabel: '客户产品货号',
                    bind: {value: '{gridRow.productCode}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true, allowBlank: true
                },
                {
                    xtype: 'extcombox', reference: 'normalUnit', fieldLabel: '基本单位',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    bind: {value: '{gridRow.normalUnit}'}, allowBlank: false
                },

                {
                    xtype: 'extcombox', reference: 'materialSource', fieldLabel: '物料属性',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=material_source',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.materialSource}'}, allowBlank: false
                },
                {
                    xtype: 'numberfield', reference: 'advicePrice', fieldLabel: '参考单价',
                    bind: {value: '{gridRow.advicePrice}'}, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'specifications', fieldLabel: '规格型号',
                    bind: {value: '{gridRow.specifications}'}, allowBlank: true,
                    maxLength: 30,
                    enforceMaxLength: true
                },
                {
                    xtype: 'extcombox', reference: 'taxRateNo', fieldLabel: '税率',
                    displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                    displaymember: 'taxRateName',
                    valuemember: 'taxRateNo',
                    bind: {value: '{gridRow.taxRateNo}'}, allowBlank: false
                },

                {
                    xtype: 'textfield', reference: 'oldCode', fieldLabel: '旧物料编码', bind: {value: '{gridRow.oldCode}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入30位字母或数字',
                    maxLength: 30,
                    enforceMaxLength: true
                },
                {
                    xtype: 'numberfield', reference: 'developmentTimes', fieldLabel: '开发次数',
                    bind: {value: '{gridRow.developmentTimes}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'currencyNo', fieldLabel: '币别',
                    displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                    displaymember: 'currencyName',
                    valuemember: 'currencyNo',
                    bind: {value: '{gridRow.currencyNo}'},
                    canInput: false,
                    name: 'currencyNo'
                },
                /*
                 {
                 xtype: 'extcombox', reference: 'codeRuleNo', fieldLabel: '编码规则', allowBlank: false,
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo',
                 bind: {value: '{gridRow.codeRuleNo}'}
                 },*/
                /*{
                 xtype : 'textfield',reference:'orderNo',fieldLabel : '排列序号',
                 bind : {value : '{gridRow.orderNo}'},allowBlank:false,editable:false,
                 maxLength : 11,
                 enforceMaxLength : true
                 },*/

                /*
                 {xtype : 'extcombox',reference:'supplyCategoryNo',fieldLabel : '供货类别',
                 displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
                 displaymember:'categoryName',
                 valuemember:'categoryNo',
                 bind : {value : '{gridRow.supplyCategoryNo}'}},*/
                /*
                 {xtype : 'extcombox',reference : 'inventoryCategory',fieldLabel : '存货类别',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.inventoryCategory}'},hidden:true},
                 {xtype : 'extcombox',reference : 'taxCategory',fieldLabel : '税种',
                 displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
                 displaymember:'taxCategoryName',
                 valuemember:'taxCategoryNo',
                 bind : {value : '{gridRow.taxCategory}'},hidden:true},*/
                /*{xtype : 'checkbox',reference:'allowSale',fieldLabel : '允许销售',bind : {value : '{gridRow.allowSale}'}},
                 {xtype : 'checkbox',reference:'allowDelegate',fieldLabel : '允许委外',bind : {value : '{gridRow.allowDelegate}'}},//
                 {xtype : 'checkbox',reference:'allowPurchase',fieldLabel : '允许采购',bind : {value : '{gridRow.allowPurchase}'}},
                 {xtype : 'checkbox',reference:'allowProduce',fieldLabel : '允许生产',bind : {value : '{gridRow.allowProduce}'}},
                 {xtype : 'checkbox',reference:'materialStatus',fieldLabel : '物料状态',bind : {value : '{gridRow.materialStatus}'}},
                 {xtype : 'checkbox',reference:'enableFlag',fieldLabel : '启用状态',bind : {value : '{gridRow.enableFlag}'}},*/
                /*{name: 'allowSale',bind:{value:'{gridRow.allowSale}'},reference : 'allowSale', xtype: 'extcombox', fieldLabel: '允许销售',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'allowDelegate',bind:{value:'{gridRow.allowDelegate}'},reference : 'allowDelegate', xtype: 'extcombox', fieldLabel: '允许委外',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'allowPurchase',bind:{value:'{gridRow.allowPurchase}'},reference : 'allowPurchase', xtype: 'extcombox', fieldLabel: '允许采购',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'allowProduce',bind:{value:'{gridRow.allowProduce}'},reference : 'allowProduce', xtype: 'extcombox', fieldLabel: '允许生产',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'materialStatus',bind:{value:'{gridRow.materialStatus}'},reference : 'materialStatus', xtype: 'extcombox', fieldLabel: '物料状态',displayvalue:"0=模板:1=释放",allowBlank:false,hidden:true},
                 {name: 'enableFlag',bind:{value:'{gridRow.enableFlag}'},reference : 'enableFlag', xtype: 'extcombox', fieldLabel: '启用状态',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 */
                //{xtype : 'checkbox',reference:'joinOrderMetting',fieldLabel : '是否参加订货会',bind : {value : '{gridRow.joinOrderMetting}'}},
                //{name: 'joinOrderMetting',bind:{value:'{gridRow.joinOrderMetting}'},reference : 'joinOrderMetting', xtype: 'extcombox', fieldLabel: '是否参加订货会',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},

                /*{xtype : 'extcombox',reference:'purchaseUnit',fieldLabel : '采购单位',
                 displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
                 displaymember:'unitName',
                 valuemember:'unitNo',
                 bind : {value : '{gridRow.purchaseUnit}'}},
                 {xtype : 'extcombox',reference : 'purchaseGroup',fieldLabel : '采购组',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=purchaseGroup',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.purchaseGroup}'},hidden:true},*/

                {
                    xtype: 'textfield', reference: 'remarks', fieldLabel: '备注', bind: {value: '{gridRow.remarks}'},
                    maxLength: 60, colspan: 3,
                    enforceMaxLength: true
                }
            ]
        };
        editMaterialInfo.layout.columns = 4;

        var bottomtabpanel = {
            xtype: "tabpanel",
            reference: "tabpanel",
            region: 'south',
            height: 280,
            split: true,
            autoDestroy: true,
            tabPosition: 'top',
            autoScroll: true,
            border: false,
            items: [
                {
                    layout: 'fit', index: 0, items: [editMaterialInfo], title: '物料明细',
                    autoScroll: true, border: 0, bodyPadding: 3
                },
                {layout: 'fit', index: 1, items: [me.grid2], title: '尺码明细', autoScroll: true, border: 0}
            ]
        };
        me.otherItems = [bottomtabpanel];

        me.callParent();
    }
});
