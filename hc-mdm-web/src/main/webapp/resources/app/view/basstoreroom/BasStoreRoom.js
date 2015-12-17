/**
 * Description: 库区信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstoreroom.BasStoreRoom', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstoreroom',
	requires: [
		'Hc_mdm.model.BasStoreRoom',
		'Hc_mdm.view.basstoreroom.BasStoreRoomController',
		'Hc_mdm.view.basstoreroom.BasStoreRoomModel'
	],
	controller: 'basstoreroom',
	viewModel: {
		type: 'basstoreroom'
	},
	initComponent: function () {
		var me= this;
		storeEStore = Ext.create('Hc_mdm.store.BasStore'),
		storeGStore = Ext.create('Hc_mdm.store.BasStore'),
        zoneEStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        zoneGStore = Ext.create('Hc_mdm.store.BasStoreZone'),
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '库区编号',
				name : 'roomNo'
			},{
				xtype : 'textfield',
				fieldLabel : '库区名称',
				name : 'roomName'
			},{
				xtype : 'textfield',
				fieldLabel : '仓区编号',
				name : 'zoneNo'
			},{
				xtype : 'textfield',
				fieldLabel : '仓区名称',
				name : 'zoneName'
			}, ],

			gridModel : 'Hc_mdm.model.BasStoreRoom',
			
			gridColumns: [
				{dataIndex: 'roomNo', text: '库区编号', 
					editor: {allowBlank: false,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入10位字母或数字',
						maxLength : 10,
						enforceMaxLength : true}
				},
				{dataIndex: 'roomName', text: '库区名称',
						editor: {allowBlank: false,
							maxLength : 30,
							enforceMaxLength : true}
				},
				{dataIndex:'storeNo',text:'仓库',
						editor:{allowBlank:false},
						xtype:'bllookupedit',
						//displayvalue:Hc.mdmPath+'bas_store/list.json',
						estore: storeEStore,
						gstore: storeGStore,
			    		displaymember:'storeName',
			    		valuemember:'storeNo'
				},
				
				{dataIndex: 'zoneNo', text: '仓区',
						editor: {allowBlank: false,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入10位字母或数字',
						maxLength : 10,
						enforceMaxLength : true},
						xtype:'bllookupedit',
						//displayvalue:Hc.mdmPath+'bas_store_zone/list.json',
						estore: zoneEStore,
						gstore: zoneGStore,
			    		displaymember:'zoneName',
			    		valuemember:'zoneNo'
				},
				/*{dataIndex: 'zoneName', text: '仓区名称',
								editor:{
									maxLength : 20,
									enforceMaxLength : true}
				},*/
				{dataIndex: 'roomType', text: '库区类型',
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=room_type',
					displaymember:'itemName',
					valuemember:'itemCode',
					editor:{allowBlank:false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"}
			],
			
			gridPrimaryKey : 'lineId',
			gridUnionKey : 'storeNo,zoneNo,roomNo',

			gridLoadUrl : Hc.mdmPath+'bas_store_room/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_store_room/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_store_room/do_export.json',
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
