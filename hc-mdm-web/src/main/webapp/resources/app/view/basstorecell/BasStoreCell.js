/**
 * Description: 储位信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorecell.BasStoreCell', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstorecell',
	requires: [
		'Hc_mdm.model.BasStoreCell',
		'Hc_mdm.view.basstorecell.BasStoreCellController',
		'Hc_mdm.view.basstorecell.BasStoreCellModel'
	],
	controller: 'basstorecell',
	viewModel: {
		type: 'basstorecell'
	},
	initComponent: function () {
		var me= this;
		storeEStore = Ext.create('Hc_mdm.store.BasStore'),
		storeGStore = Ext.create('Hc_mdm.store.BasStore'),
        zoneEStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        zoneGStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        roomEStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
        roomGStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
        channelEStore = Ext.create('Hc_mdm.store.BasStoreChannel'),
        channelGStore = Ext.create('Hc_mdm.store.BasStoreChannel'),
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '储位编号',
				name : 'cellNo'
			},{
				xtype : 'textfield',
				fieldLabel : '储位名称',
				name : 'cellName'
			},{
				xtype : 'textfield',
				fieldLabel : '通道编号',
				name : 'channelNo'
			},{
				xtype : 'textfield',
				fieldLabel : '通道名称',
				name : 'channelName'
			} ],

			gridModel : 'Hc_mdm.model.BasStoreCell',
			
			gridColumns: [
				{dataIndex: 'cellNo', text: '储位编号', 
					editor: {allowBlank: false,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入10位字母或数字',
						maxLength : 10,
						enforceMaxLength : true}},
				{dataIndex:'cellCode',text:'储位编码',
							editor: {allowBlank: false,
								regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
								regexText:'请输入5位字母或数字',
								maxLength : 5,
								enforceMaxLength : true}
				},
				{dataIndex: 'cellName', text: '储位名称',
						editor: {allowBlank: false},
						maxLength : 30,
						enforceMaxLength : true},
				{dataIndex:'storeNo',text:'仓库',	
						editor:{allowBlank:false							
						},
						xtype:'bllookupedit',
						//displayvalue:Hc.mdmPath+'bas_store/list.json',
						estore: storeEStore,
						gstore: storeGStore,
			    		displaymember:'storeName',
			    		valuemember:'storeNo'
				},
				{
					dataIndex:'zoneNo',text:'仓区',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_zone/list.json',
					estore: zoneEStore,
					gstore: zoneGStore,
		    		displaymember:'zoneName',
		    		valuemember:'zoneNo'
				},
				{
					dataIndex:'roomNo',text:'库区',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_room/list.json',
					estore: roomEStore,
					gstore: roomGStore,
		    		displaymember:'roomName',
		    		valuemember:'roomNo'
				},
				{dataIndex: 'channelNo', text: '通道编号',
							//editor: {allowBlank: false},
							//regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
							//regexText:'请输入10位字母或数字',
							//maxLength : 10,
							//enforceMaxLength : true
					xtype:'bllookupedit',
					estore: channelEStore,
					gstore: channelGStore,
		    		displaymember:'channelNo',
		    		valuemember:'channelNo'
				},
				//获取物料大类			
				{dataIndex: 'categoryNo', text: '物料大类', 
							 editor: {allowBlank: false},
							xtype:'bllookupedit',	
							displayvalue:Hc.mdmPath+'bas_category/listCategory.json?type=1',
				    		displaymember:'categoryName',
				    		valuemember:'categoryNo'
							},			
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"}
				
			],
			
			gridPrimaryKey : 'lineId',
			gridUnionKey : 'storeNo,cellNo',

			gridLoadUrl : Hc.mdmPath+'bas_store_cell/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_store_cell/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_store_cell/do_export.json',
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
