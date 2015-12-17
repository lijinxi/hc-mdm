/**
 * Description: 通道信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorechannel.BasStoreChannel', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstorechannel',
	requires: [
		'Hc_mdm.model.BasStoreChannel',
		'Hc_mdm.view.basstorechannel.BasStoreChannelController',
		'Hc_mdm.view.basstorechannel.BasStoreChannelModel'
	],
	controller: 'basstorechannel',
	viewModel: {
		type: 'basstorechannel'
	},
	initComponent: function () {
		var me= this;
		storeEStore = Ext.create('Hc_mdm.store.BasStore'),
		storeGStore = Ext.create('Hc_mdm.store.BasStore'),
        zoneEStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        zoneGStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        roomEStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
        roomGStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '通道编号',
				name : 'channelNo'
			},{
				xtype : 'textfield',
				fieldLabel : '通道名称',
				name : 'channelName'
			},{
				xtype : 'textfield',
				fieldLabel : '库区编号',
				name : 'roomNo'
			},{
				xtype : 'textfield',
				fieldLabel : '库区名称',
				name : 'roomName'
			} ],

			gridModel : 'Hc_mdm.model.BasStoreChannel',
			
			gridColumns: [
				{dataIndex: 'channelNo', text: '通道编号',
					editor: {allowBlank: false},
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true},
				{dataIndex: 'channelName', text: '通道名称',
						editor: {allowBlank: false},
						maxLength : 30,
						enforceMaxLength : true},
				{
					dataIndex: 'storeNo', 
					text: '仓库',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store/list.json',
					estore: storeEStore,
					gstore: storeGStore,
		    		displaymember:'storeName',
		    		valuemember:'storeNo'
				},
				{
					dataIndex: 'zoneNo',
					text: '仓区',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_zone/list.json',
					estore: zoneEStore,
					gstore: zoneGStore,
		    		displaymember:'zoneName',
		    		valuemember:'zoneNo'
				},
				{dataIndex: 'roomNo', text: '库区编号', 
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_room/listAll.json',
					estore: roomEStore,
					gstore: roomGStore,
		    		displaymember:'roomNo',
		    		valuemember:'roomNo',
		    		editor: {allowBlank: false}
				},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"}			],
			
			gridPrimaryKey : 'lineId',
			gridUnionKey : 'storeNo,zoneNo,roomNo,channelNo',

			gridLoadUrl : Hc.mdmPath+'bas_store_channel/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_store_channel/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_store_channel/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});
