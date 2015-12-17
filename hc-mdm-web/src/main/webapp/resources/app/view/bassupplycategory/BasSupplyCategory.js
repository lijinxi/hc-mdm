/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-15 18:24:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplycategory.BasSupplyCategory', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassupplycategory',
	requires: [
		'Hc_mdm.model.BasSupplyCategory',
		'Hc_mdm.view.bassupplycategory.BasSupplyCategoryController',
		'Hc_mdm.view.bassupplycategory.BasSupplyCategoryModel'
	],
	controller: 'bassupplycategory',
	viewModel: {
		type: 'bassupplycategory'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
			        	{
			        		xtype: 'textfield',
			        		fieldLabel: '类别编号',
			        		name: 'categoryNo'
			        	}, {
			        		xtype: 'textfield',
			        		fieldLabel: '类别名称',
			        		name: 'categoryName'
			        	},{
			        		/*fieldLabel : '采购类型',
			        		name : 'purchaseType',
			        		xtype:'extcombox',
			        		displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
			        		displaymember:'purchaseType',
			        		valuemember:'categoryNo',*/
			        		
			        		name : 'purchaseType',
							xtype : 'extcombox',
							fieldLabel : '采购类型',
							displayvalue : Hc.mdmPath
									+ 'bas_dict/getbasdictcombo.json?dictCode=purchase_type',
							displaymember : 'itemName',
							valuemember : 'itemCode'
			        	}
			        ],
	
		gridModel: 'Hc_mdm.model.BasSupplyCategory',
		gridColumns: [
		              {dataIndex: 'categoryNo', text: '类别编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
		              {dataIndex: 'categoryName', text: '类别名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		              {
		              	 /*dataIndex: 'purchaseType', 
		              	 text: '采购类型', 
		              	 editor: {allowBlank: false}*/
		              	 dataIndex : 'purchaseType',
	                	 text : '采购类型',
	                	 editor: 
	                	 {
	                		 allowBlank: false,maxLength:10,enforceMaxLength:true
	                	 },
	                	 xtype:'bllookupedit',
	                	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=purchase_type',
	                	 displaymember:'itemName',
	                	 valuemember:'itemCode'
		              },
		              {dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
		              {
		              	 dataIndex : 'enableFlag',
						 text : '启用状态',
						 xtype : 'bllookupedit',
						 editor : {
							 allowBlank : false
						 },
						 displayvalue : "0=禁用:1=启用"}
		             ],
			gridPrimaryKey: 'categoryNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath+'bas_supply_category/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_supply_category/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_supply_category/do_export.json',
			gridImportUrl: Hc.mdmPath+'',

			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});
		me.callParent();
	}
});
