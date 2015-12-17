/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-18 08:59:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascustomer.BasCustomerController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascustomer',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.lookupReference('provinceCombo').setReadOnly(true);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    //查询面板联动
    onChangecountryNo: function(obj, newval) {
        var countryComboNo = this.lookupReference('countryCombo').getValue();
        var provinceCombo = this.lookupReference('provinceCombo');
        if (countryComboNo) {
            provinceCombo.setValue('');
            provinceCombo.setReadOnly(false);
            provinceCombo.store.proxy.extraParams['countryNo'] = countryComboNo;
            provinceCombo.store.load();
        } else {
            provinceCombo.setReadOnly(true);
            provinceCombo.setValue('');
        }
    },

    onChangeprovinceNo: function(obj, newval, oldval) {
        var countryComboNo = this.lookupReference('countryCombo').getValue();
        if (!countryComboNo) {
            obj.setValue('');
            return false;
        }
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'provinceNo') {
            var record = e.record;
            var newcountryNo = record.get('countryNo');
            var provinceNo = record.get('provinceNo');
            if (newcountryNo == '') {
                Ext.Msg.alert('提示', '请先选择国家');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldcountryNo = store.proxy.extraParams['countryNo'];
                if (newcountryNo != oldcountryNo) {
                    store.proxy.extraParams.countryNo = newcountryNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(provinceNo);
                    });
                    store.load();
                }
            }

        }

        if (e.field == 'paymentClauseNo') {
            var store = e.column.getEditor().store;
            store.proxy.extraParams.paymentClauseType = 2;
            store.load();
        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;

        if (e.field == 'countryNo') {
            var oldcountryNo = e.originalValue;
            var newcountryNo = e.value;
            if (oldcountryNo != newcountryNo) {
                var record = e.record;
                record.set('provinceNo', '');
            }

        }
    }
});