/**
 * Description: 供应商信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-23 15:10:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplier.BasSupplierController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.bassupplier',
    
    init: function(){
    	var me=this;
    	me.callParent();
    	me.setComponentReadOnly('tabpanel',true);
    },
    
    /**
     * 设置控件是否只读
     * @param {} list
     * @param {} isReadOnly
     */
    setComponentReadOnly: function(components,isReadOnly){
    	var me=this,
    	list = me.lookupReference(components).query('textfield,numberfield,datefield,combo');
    	Ext.each(list,function(component){
    		if(component.dataIndex!='creator' && component.dataIndex!='createTime' 
    			&& component.dataIndex!='modifier' && component.dataIndex!='modifyTime'
    			&& component.dataIndex!='supplierNo'){
    			component.setReadOnly(isReadOnly);
    		}
    	});
    },
    /*选择变化之后*/
    onGridSelectionChange: function (sender, e, index, eOpts) {
    	var me =this;
    	me.callParent(arguments);
        if (me.lookupReference('mastergrid').getSelection()&&me.lookupReference('mastergrid').getSelection().length>0)
        {
			me.setComponentReadOnly('tabpanel',false);
        }
        else
        {
			me.setComponentReadOnly('tabpanel',true);
        }
    },
    //查询前，删除从表记录
    onBtnSearchClick: function (btn) {
        var me = this;
        me.callParent(arguments);
    },
    
    gridSelectionChange: function (sender,e) {
		var me = this;
		 me.callParent(arguments);
		 var editPanelSupplierNo = me.lookupReference('editpanelsupplierno');
		 if (editPanelSupplierNo){
			 var selection = sender.selectionStart;
			 if(selection){
			 if (!selection.phantom){
				 editPanelSupplierNo.setReadOnly(true);
			 }else{
				 editPanelSupplierNo.setReadOnly(false);
			 }
		 }
		 }
    },
    checkKeyValue:function(e){
		var me = this;
		 me.callParent(arguments);
		 if(e.field == 'isDefault') {
				var record = e.record;
				var isDefault = record.get('isDefault');
				var _supplierNo = record.get('supplierNo');
				var contacterId = record.get('contacterId');
				if (isDefault==1){
	            	Ext.Ajax.request({            
	   		     		url: Hc.mdmPath+'bas_supplier/checkIsDefault.json',
	   		     	    async:false,
	   		     		params: {       
	   		     			supplierNo:_supplierNo
	   		     		},    
	   		     		success: function(response, options) {    
	   		     			var result=response.responseText;
	   		     			if (result!="0"){
	   		     				//Hc.alert(result);
	   		     				//record.set('isDefault')
	   		     			}
	   		     		}
	            	});
				}
	    	}
		 if(e.field=='categoryNo'){
			 //var me = this,
			 var grid = me.workObject,
			 store = grid.store,
			 datas = store.getData();	    	

			 var record = e.record;
			 var categoryNo = record.get('categoryNo');
			 var sameCount=0;
			 for(var i=0;i<(datas.length);i++){
				 if(categoryNo==datas.items[i].get('categoryNo')){
					 sameCount++;	
				 }
			 }
			 if(sameCount>=2){
				 Ext.Msg.alert("错误","类别不能重复");
				 record.set('categoryNo','');
				 return;
			 }
		 }


		 if(e.field=='brandNo'){
			 //var me = this,
			 var grid = me.workObject,
			 store = grid.store,
			 datas = store.getData();	    	

			 var record = e.record;
			 var brandNo = record.get('brandNo');
			 var sameCount=0;
			 for(var i=0;i<(datas.length);i++){
				 if(brandNo==datas.items[i].get('brandNo')){
					 sameCount++;	
				 }
			 }
			 if(sameCount>=2){
				 Ext.Msg.alert("错误","品牌编号不能重复");
				 record.set('brandNo','');
				 return;
			 }
		 }
		 
		
		 if(e.field=='contacterName'){
			 //var me = this,
			 var grid = me.workObject,
			 store = grid.store,
			 datas = store.getData();	    	

			 var record = e.record;
			 var orderNo = record.get('orderNo');
			 var sameCount=0;
			 for(var i=0;i<(datas.length);i++){
				 if(orderNo==datas.items[i].get('orderNo')){
					 sameCount++;	
				 }
			 }
			 if(sameCount>=2){
				 Ext.Msg.alert("错误","排列序号不能重复");
				 record.set('brandNo','');
				 return;
			 }
		 }
    },
    /*initAddData: function(newObj){
    	var me = this;
        if (me.workObject.hasOrderNo) {
            var ds = me.workObject.store,
                orderNo = (ds.max('orderNo') || 0) + 1;
            newObj.set('orderNo', orderNo);
        }
        me.callParent(arguments);
        return true;
    }*/
    /* 新增数据时，初始化数据对象*/
/*    initAddData: function (newObj) {
    	 var me = this,
         grid = me.workObject,
         store = grid.store,
         datas = store.getData();
    	 me.callParent(arguments);
   	   	 
    	 if(grid.reference=='grid2'){	 
    	 var maxOrderNo=0;
    	 for(var i=0;i<datas.length;i++){
    		 var orderNo = datas.items[i].get('orderNo');    		    		 
    		 if (orderNo>=maxOrderNo){
    			 maxOrderNo=orderNo;
    		 }
    	 }    	 
    	 newObj.set('orderNo',maxOrderNo+1);
    	 }
    	
    	var me = this;
    	var grid = me.workObject,
    	store = grid.store,
    	griddatas = store.getData();
    	me.callParent(arguments);
    	if(grid.reference=='grid2'){

    		var gridMaxOrderNo=0;//界面最大序列号
    		for(var i=0;i<griddatas.length;i++){
    			var orderNo = griddatas.items[i].get('orderNo');    		    		 
    			if (orderNo>=gridMaxOrderNo){
    				gridMaxOrderNo=orderNo;
    			}
    		}    	 

    	/*	var datas=newObj.getData();
    		var supplierNo=datas.supplierNo;
    		var url =Hc.mdmPath + 'bas_supplier/getvo.json?selectVoName=SelectOneModelByVoBasMaxOrderNo&mapperClassType=BasSupplierMapper';
    		url+='&supplierNo='+supplierNo;
    		this.callServer({
    			url:url,    			
    			success:function(response){
    				var ob = Ext.decode(response.responseText);
    				console.dir("返回值1111"+ob);
    				if(ob.entity !=null){
    					var maxOrderNo=parseInt(ob.entity.orderNo);//后台最大序列号
    					if(maxOrderNo<=gridMaxOrderNo){
    						maxOrderNo=gridMaxOrderNo
    					}
    					var nowOrderNo=maxOrderNo+1;
    					newObj.set('orderNo',nowOrderNo);
    				}else{

    					record.set('materialNo', 0);
    				}
    			}  		 			
    		});
    	}
    }*/
 
    //网格列编辑后
    onGrid3AfterEdit: function (editor, e) {
		var me = this;
        if (e.field == 'categoryNo') {
            var oldCategoryNo = e.originalValue;
            var newCategoryNo = e.value;
            if (oldCategoryNo != newCategoryNo) {
                var record = e.record;
                Ext.Ajax.request({
                    url: Hc.mdmPath + 'bas_supply_category/list.json',
                    params: {             
                    	categoryNo : e.value
                    },
                    method: 'GET',
                    success: function (response) {
                        var result = JSON.parse(response.responseText);
                        if (result.result.resultCode == "0" && result.list.length > 0) {
                            for(var i = 0 ; i < result.list.length ;i++){
		                        var vRec = result.list[0];
		                        record.set('purchaseType', vRec.purchaseType);
		                    }
                        } else {
                            record.set('materialNo', oldMaterialNo);
                            Ext.MessageBox.alert('提示', '没有找到物料编号为【' + newMaterialNo + '】的信息');
                        }
                    },
                    failure: function (response, opts) {
                        Ext.MessageBox.show({
                            title: '错误提示',
                            msg: response.responseText,
                            height: 300,
                            width: 400
                        });
                    }
                });
            }
        } 
        
        
        this.checkKeyValue(e);
        
        
    }
  });