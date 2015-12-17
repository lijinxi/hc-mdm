/**
 * Description: 供应商联系人信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliercontacter.BasSupplierContacterController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bassuppliercontacter',
    
    init: function (){
		var me = this;
		 me.callParent(arguments);
    },
    checkKeyValue:function(e){
		var me = this;
		 me.callParent(arguments);
		 var a=e;
		 var b=0;
    },
    onGridAfterEdit:function(editor, obj)
    {
		var me = this;
		 me.callParent(arguments);
    	if(obj.field == 'isDefault') {
			var record = obj.record;
			var isDefault = record.get('isDefault');
			var supplierNo = record.get('supplierNo');
			var contacterId = record.get('contacterId');
			if (isDefault==1){
            	Ext.Ajax.request({            
   		     		url: Hc.mdmPath+'bas_supplier_contacter/checkIsDefault.json',
   		     	    async:false,
   		     		params: {       
   		     			supplierNo:category_no
   		     		},    
   		     		success: function(response, options) {    
   		     			var result=response.responseText;
   		     			if (result!="0"){
   		     				Hc.alert(result);
   		     				//record.set('isDefault')
   		     			}
   		     		}
            	});
			}
    	}
    }
  });