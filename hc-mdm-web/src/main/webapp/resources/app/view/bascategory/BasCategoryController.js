/**
 * Description: 类别信息表(来源于集团主数据 pro_category )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascategory.BasCategoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascategory',
    	
	init:function() {

		var me = this,
        objList = me.getObjList();

        if (!objList) return;

        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }

		me.callParent(arguments);
		
		//隐藏基类按钮和处理自定义按钮
		objList.btnSearch.setVisible(false);
		objList.btnReset.setVisible(false);
		objList.btnCopy.setVisible(false);
		objList.btnEdit.setVisible(false);
		objList.btnOther1.setVisible(true);
		objList.btnOther1.setText('刷新树');
		objList.btnOther1.setGlyph(Hc.Icon.btnRefresh);
	},
	  /*
	   * 重新刷新树的根节点
	   */
	  onRefreshTree:function(){
		    var me = this;
		    var tree = me.lookupReference('menutree');
		    var storeTree = tree.store;
		    
			storeTree.proxy.extraParams.parentCategoryId = 0;
			storeTree.load();
	   		delete storeTree.proxy.extraParams['parentCategoryId'];
	   		
	   		//如果重新刷新树的根节点则清空网格里的数据
	   		var objs = me.getObjList();
			var storeGrid = objs.mastergrid.store;
			delete storeGrid.proxy.extraParams['parentCategoryId'];
			storeGrid.proxy.extraParams.parentCategoryId = 0;
			storeGrid.load();
	  },
	/*
	 * 树节点选择改变
	 */
	onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();

        if (!objs) return;
        
		store = objs.mastergrid.store,
		
		selLength=sm.selected.items.length;
		
		if (selLength==1) {
			var categoryId=sm.selected.items[0].data.categoryId;
			store.proxy.extraParams.parentCategoryId = categoryId;
		}else{
			//store.proxy.extraParams.parentCategoryId = -1;
		}
		
		store.reload();
		
		if (this.canDelete() && objs.btnDelete) {
			objs.btnDelete.setDisabled(selections.length === 0);
		}
		if (this.canPrint() && objs.btnPrint) {
			objs.btnPrint.setDisabled(selections.length === 0);
		}
		if (this.canEdit() && objs.btnEdit) {
			objs.btnEdit.setDisabled(selections.length === 0);
		}
	},
	
	/*
	 * 树节点展开后
	 */
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},

	/*
	 * 新增给网格父类别给默认值
	 */
    initAddData: function (newObj) {
		var me = this,
        tree = me.lookupReference('menutree');
		
		if (!tree.selection) {
			Hc.alert("请先选择一个树节点再增加！");
			return false;
		}
		
		var categoryId = tree.selection.data.categoryId;
		var levelNo = tree.selection.data.levelNo;
		newObj.data.parentCategoryId = categoryId;
		newObj.data.levelNo = levelNo+1;
		newObj.data.enableFlag = 1;
		
    	
    }, 
    
    /* 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识*/
    onBtnDeleteClick: function (btn) {
        var obj = this.workObject,
            store = obj.getStore(),
            delflag = false,
            items = obj.getSelection();

        if (items.length < 1) return;
        if (obj.isReadOnly)return;
        if (this.checkDelete(items) === false) return;
        Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
                store.remove(record);
            } else {
                if (obj.isCanDelete) {
                	var category_no = record.get('categoryNo');
                	Ext.Ajax.request({            
           		     		url: Hc.mdmPath+'bas_category/checkDelete.json',
           		     	   async:false,
           		     		params: {       
           		     			categoryNo:category_no             
           		     		},    
           		     success: function(response, options) {    
           		    	var result=response.responseText;
           		    	if (result!=""){
           		    		Hc.alert(result);
           		    	}else{
                            record.set('_flag', 'D');
                            delflag = true;
           		    	}
           		    }       
           		}); 
                } else {
                    Hc.alert('此网格的数据不能删除');
                    return false;
                }
            }
        });
        if (delflag) {
            obj.view.refresh();
        }
    },
    
    /*
     * 增加删除判断
     */
   /* checkDelete: function (items) {
    	var obj = this.workObject,
    	delflag = false;
    	Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
                
            } else {
                if (obj.isCanDelete) {
                	var category_no = record.get('categoryNo');
                	Ext.Ajax.request({            
           		     		url: Hc.mdmPath+'bas_category/checkDelete.json',
           		     	   async:false,
           		     		params: {       
           		     			categoryNo:category_no             
           		     		},    
           		     success: function(response, options) {    
           		    	var result=response.responseText;
           		    	if (result!=""){
           		    		Hc.alert(result);
           		    		return false;
           		    	}
           		    }       
           		}); 
                } else {
                    Hc.alert('此网格的数据不能删除');
                    return false;
                }
            }
        });
    },*/
    
    /*
     * 数据保存后
     */
	afterSave:function(result,options) {
			var me = this;
			 me.callParent(arguments);
			 
	        var objs = me.getObjList();
			
	        if (!objs) return;
			
	        var tree = me.lookupReference('menutree'),
	        storeTree = tree.store,
	        storeGrid = objs.mastergrid.store;
			
	        var selNode = tree.selection;
			if (!selNode) return;

			var isLoad = 0;
			var childNodes = selNode.childNodes;
			for(j=0;j<childNodes.length;j++){
				var cNode = childNodes[j];
				if (cNode.data.expanded==true){
					isLoad=1;
					break;
				}
			}

			if (isLoad===1){
				me.onRefreshTree();
			}else{
				storeTree.reload();
			}
	  },
	  /*
	   * 刷新树按钮
	   */
	  onBtnOther1:function(btn){
		  this.onRefreshTree();
	  }
  });