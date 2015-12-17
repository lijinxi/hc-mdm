/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-15 18:24:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplycategory.BasSupplyCategoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bassupplycategory',
    
    // 网格列编辑后
	onGridAfterEdit : function(editor, e) {
	    var me = this;
	    store = me.lookupReference('mastergrid').store;
	    if (e.field == 'categoryName' && e.value != ''
	            && e.value != null) {
	        for (var i = 0; i < store.totalCount; i++) {
	            if (e.rowIdx == i)
	                continue;
	            var model = store.getAt(i);
	            if (model.get('categoryName') == e.value) {
	                Hc.alert("类别名称不能重复");
	                e.record.set('categoryName', '');
	                return;
	            }
	        }
	    }
	}
  });