/**
 * Description: 单据类型表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbilltype.BasBillType', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbilltype',
	requires: [
	           'Hc_mdm.model.BasBillType',	       
	           'Hc_mdm.view.basbilltype.BasBillTypeController',
	           'Hc_mdm.view.basbilltype.BasBillTypeModel'
	           ],
	           controller: 'basbilltype',
	           viewModel: {
	        	   type: 'basbilltype'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   //添加查询条件
	        	   Ext.apply(me, {
	        		   searchItems: [{
	        			   xtype : 'textfield',
	        			   fieldLabel : '单据类型编号', 
	        			   name : 'billTypeNo'
	        		   },
	        		   {
	        			   xtype:'textfield',
	        			   fieldLabel:'单据类型名称',
	        			   name:'billTypeName'
	        		   },
	        		   {
	        			   fieldLabel : '单据分组',
	        			   name : 'billGroup',
	        			   xtype:'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=bill_group',
	        			   displaymember:'itemName',
	        			   valuemember:'itemCode'
	        		   }
	        		   ],

	        		   gridModel: 'Hc_mdm.model.BasBillType',
	        		   gridColumns: [
	        		                 {dataIndex: 'billTypeNo', text: '单据类型编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
	        		                 {dataIndex: 'billTypeName', text: '单据类型名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
	        		                 {dataIndex: 'codeRuleNo', text: '编码规则编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
	        		                 {
	        		                	 dataIndex : 'billGroup',
	        		                	 text : '单据分组',
	        		                	 xtype:'bllookupedit',
	        		                	 editable:false,
	        		                	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=bill_group',
	        		                	 displaymember:'itemName',
	        		                	 valuemember:'itemCode'
	        		                 },
	        		                 {dataIndex: 'orderNo', 
	        		                	 text: '排列序号', 
	        		                	 editor: {allowBlank: true,
	        		                		 xtype : 'numberfield'}
	        		                 },
	        		                 {
	        		                	 dataIndex : 'enableFlag',
	        		                	 text : '启用状态',
	        		                	 renderer : 'renderUseFlag',
	        		                	 editor : {
	        		                		 allowBlank : false,
	        		                		 xtype : 'combouseflag',
	        		                		 maxLength:30,
	        		                		 enforceMaxLength:true
	        		                	 }   
	        		                 }
	        		                 ],

	        		                 gridPrimaryKey: 'billTypeNo',
	        		                 gridUnionKey: '',

	        		                 gridLoadUrl: Hc.mdmPath+'bas_bill_type/list.json',
	        		                 gridSaveUrl: Hc.mdmPath+'bas_bill_type/batchOperate.json',
	        		                 gridExportUrl: Hc.mdmPath+'bas_bill_type/do_export.json',
	        		                 gridImportUrl: ''
	        		                 
	        		                 

	        	   });
	        	   me.callParent();	        	   
	           }
});
