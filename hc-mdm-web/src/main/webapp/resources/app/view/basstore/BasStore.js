/**
 * Description: 仓库信息表(来源于M3 MITWHL)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstore.BasStore', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstore',
	requires: [
		'Hc_mdm.model.BasStore',
		'Hc_mdm.view.basstore.BasStoreController',
		'Hc_mdm.view.basstore.BasStoreModel'
	],
	controller: 'basstore',
	viewModel: {
		type: 'basstore'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '仓库编号',
				name: 'storeNo'
			},{
				xtype: 'textfield',
				fieldLabel: '仓库名称',
				name: 'storeName'
			}
			],
			gridModel: 'Hc_mdm.model.BasStore',
			gridColumns: [
							{dataIndex: 'storeNo', text: '仓库编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'storeName', text: '仓库名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
							{
								dataIndex: 'brandNo', 
								text: '品牌', 
								editor:{
										allowBlank:false
									},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_brand/list.json',
					    		displaymember:'brandCname',
					    		valuemember:'brandNo'
							},
							{
								dataIndex: 'factoryNo', 
								text: '厂区', 
								editor:{allowBlank:false},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_factory/list.json',
					    		displaymember:'factoryName',
					    		valuemember:'factoryNo'
							},
							{
								dataIndex: 'divisionNo',
								text: '事业部', 
								editor:{allowBlank:false},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_division/list.json',
					    		displaymember:'divisionName',
					    		valuemember:'divisionNo'
							},
							{dataIndex: 'storeType', text: '仓库类型',
								editor:{allowBlank:false},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=store_type',
								displaymember:'itemName',
								valuemember:'itemCode'},					
							{
								dataIndex: 'isMaster', 
								text: '是否主仓', 
								editor: {
										allowBlank: false,
										xtype : 'comboyesno',
										maxLength:11,enforceMaxLength:true
										},
									renderer : 'renderYesNo'},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false,xtype : 'combouseflag',maxLength:11,enforceMaxLength:true},renderer : 'renderUseFlag'},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}}
						],
						gridPrimaryKey: 'storeNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_store/list.json',
						gridSaveUrl:  Hc.mdmPath+'bas_store/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_store/do_export.json',
						gridImportUrl: '',

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
