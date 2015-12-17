/**
 * Description: 仓区信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorezone.BasStoreZone', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstorezone',
	requires: [
		'Hc_mdm.model.BasStoreZone',
		'Hc_mdm.view.basstorezone.BasStoreZoneController',
		'Hc_mdm.view.basstorezone.BasStoreZoneModel'
	],
	controller: 'basstorezone',
	viewModel: {
		type: 'basstorezone'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
				xtype : 'textfield',
				fieldLabel : '仓区编号',
				name : 'zoneNo'
		},{
			xtype : 'textfield',
			fieldLabel : '仓区名称',
			name : 'zoneName'
		},{
			xtype:'extcombox',
			fieldLabel:'仓库',
			name:'storeNo',
			displayvalue:Hc.mdmPath+'bas_store/list.json',
    		displaymember:'storeName',
    		valuemember:'storeNo'
		}
		],
		gridModel: 'Hc_mdm.model.BasStoreZone',
		gridColumns: [
						{dataIndex: 'zoneNo', text: '仓区编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
						{dataIndex: 'zoneName', text: '仓区名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
						{
							dataIndex: 'storeNo', text: '仓库', 
							xtype:'bllookupedit',
							displayvalue:Hc.mdmPath+'bas_store/list.json',
				    		displaymember:'storeName',
				    		valuemember:'storeNo',
				    		editor: {allowBlank: false}
						},
						{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
						{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false,xtype : 'combouseflag',maxLength:11,enforceMaxLength:true},renderer : 'renderUseFlag'}
					],
					gridPrimaryKey: 'lineId',
					gridUnionKey: 'storeNo,zoneNo',
					
					gridLoadUrl: Hc.mdmPath+'bas_store_zone/list.json',
					gridSaveUrl: Hc.mdmPath+'bas_store_zone/batchOperate.json',
					gridExportUrl: Hc.mdmPath+'bas_store_zone/do_export.json',
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
