/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdict.BasDictController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.basdict',

    init: function () {
        var me = this;
        me.callParent();
    },
	
	initAddData: function (newObj) {
	    var me = this,
	        objlist = me.getObjList(),
	        obj = me.workObject;
	
	    if (obj.isMaster && me.editingList.length > 0) {
	        Hc.alert('有一笔数据正在编辑，不能新增主表记录');
	        return false;
	    }
	    if (obj.supGrid) {
	        var item = objlist[obj.supGrid].getSelection()[0];
	        if (!item) {
	            Hc.alert('主表没有选中记录时，从表不能新增记录');
	            return false;
	        }
	        if (!item.phantom) {
	            var idField = objlist[obj.supGrid].primaryKey;
	            newObj.set(idField, item.get(idField));
	            newObj.set('dictCode', item.get('dictCode'));
	        }
	    }
	}
});