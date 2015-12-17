/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_sizeController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbom.BasBomController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.basbom',
    onGridRowDblClick:function(view,record, tr, rowIndex, e){
    	var me=this;
    	var materialNo=record.data["materialNo"]; 
    	var brandNo=record.data["brandNo"]; 
    	var bomPurpose=record.data["bomPurpose"]; 
    	var isAllList=true;
    	var menuTree = me.lookupReference('menutree');
    	me.loadTree(menuTree,materialNo,brandNo,bomPurpose,isAllList);
    },
    onGrid1BeforeLoad:function(store,opt){
    	if(this.callParent(arguments)===false)return false;
    	if (this.lookupReference('menutree').store.getCount()==0) return false;
    },
    onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();
        if (!objs) return;
		var store = objs.mastergrid.store;
		var storesize=objs.grid1.store;
		var selLength=sm.selected.items.length;
		if (selLength==1) {
			if (sm.selected.items[0].data.leaf){
				return;
			}
			this.selectNode=sm.selected.items[0];
			var brandNo=sm.selected.items[0].data.brandNo;
			var materialNo=sm.selected.items[0].data.materialNo;
			var bomPurpose=sm.selected.items[0].data.bomPurpose;
			
			storesize.proxy.extraParams.brandNo = brandNo;
			storesize.proxy.extraParams.materialNo = materialNo;
			storesize.proxy.extraParams.bomPurpose = bomPurpose;
			storesize.reload();
			
			objs.grid1.view.refresh();
		}
	},
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},
    /**初始化按钮*/
    initToolbar: function (objList) {
    	this.callParent(arguments);
        var me = this;
        objList.btnAdd.setVisible(false);
        objList.btnPrint.setVisible(false);
        objList.btnExport.setVisible(false);
        objList.btnDelete.setVisible(false);
        objList.btnReset.setVisible(false);
        objList.btnCancel.setVisible(false);
        objList.btnSave.setVisible(false);
        objList.btnUndo.setVisible(false);
        objList.btnUndo.setVisible(false);
        objList.btnOther.setVisible(false);
        
        objList.commontoolsp1.setVisible(false);
        objList.commontoolsp2.setVisible(false);
        objList.commontoolsp3.setVisible(false);
        objList.commontoolsp4.setVisible(false);
        objList.commontoolsp5.setVisible(false);
        objList.commontoolsp6.setVisible(false);
    },
    //加载BOM树
    loadTree:function(tree,materialNo,brandNo,bomPurpose,isAllList){
    	var me = this;
		var store=tree.store;
		store.proxy.extraParams['materialNo'] = materialNo;
		store.proxy.extraParams['brandNo'] = brandNo;
		store.proxy.extraParams['bomPurpose'] = bomPurpose;
		store.proxy.extraParams['isAllList'] = isAllList;
		tree.store.root.data.expanded = true;
		store.load();
		tree.expandAll();  
    }
  });