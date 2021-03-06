/**
 * Description: 公司信息表Controller All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 *  * 2015年4月6日
 * 
 * @date: 2015-03-16 10:24:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascompany.BasCompanyController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascompany',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.lookupReference('cityCombo').setReadOnly(true);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    //查询面板联动
    onChangeprovinceNo: function(obj, newval) {
        var provinceComboNo = this.lookupReference('provinceCombo').getValue();
        var cityCombo = this.lookupReference('cityCombo');
        if (provinceComboNo) {
            cityCombo.setValue('');
            cityCombo.setReadOnly(false);
            cityCombo.store.proxy.extraParams['provinceNo'] = provinceComboNo;
            cityCombo.store.load();
        } else {
            cityCombo.setReadOnly(true);
            cityCombo.setValue('');
        }
    },
    onChangecityNo: function(obj, newval, oldval) {
        var provinceComboNo = this.lookupReference('provinceCombo').getValue();
        if (!provinceComboNo) {
            obj.setValue('');
            return false;
        }
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'cityNo') {
            var record = e.record;
            var newProvinceNo = record.get('provinceNo');
            var cityno = record.get('cityNo');
            if (newProvinceNo == '') {
                Ext.Msg.alert('提示', '请先选择省份');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldProvinceNo = store.proxy.extraParams['provinceNo'];
                if (newProvinceNo != oldProvinceNo) {
                    store.proxy.extraParams.provinceNo = newProvinceNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(cityno);
                    });
                    store.load();
                }
            }

        }
        if (e.field == 'countyNo') {
            var record = e.record;
            var provinceNo = record.get('provinceNo');
            var newCityNo = record.get('cityNo');
            var countyno = record.get('countyNo');
            if (provinceNo == '' && newCityNo == '') {
                Ext.Msg.alert('提示', '请先选择省份、城市');
                return false;

            }
            if (provinceNo == '') {
                Ext.Msg.alert('提示', '请先选择省份');
                return false;
            } else if (newCityNo == '') {
                Ext.Msg.alert('提示', '请先选择城市');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldCityNo = store.proxy.extraParams['cityNo'];
                if (newCityNo != oldCityNo) {
                    store.proxy.extraParams.cityNo = newCityNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(countyno);
                    });
                    store.load();
                }
            }

        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'provinceNo') {
            var oldProvinceNo = e.originalValue;
            var newProvinceNo = e.value;
            if (oldProvinceNo != newProvinceNo) {
                var record = e.record;
                record.set('cityNo', '');
                record.set('countyNo', '');
            }

        }

        if (e.field == 'cityNo') {
            var oldcityNo = e.originalValue;
            var newcityNo = e.value;
            if (newcityNo != oldcityNo) {
                var record = e.record;
                record.set('countyNo', '');
            }

        }
    }
});