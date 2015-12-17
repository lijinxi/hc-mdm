/**
 * Description: 物料单位转换表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Wangjc
 * @date:  2015-03-31 13:55:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitch', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basmaterialunitswitch',
	requires: [
		'Hc_mdm.model.BasMaterialUnitSwitch',
		'Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitchController',
		'Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitchModel'
	],
	controller: 'basmaterialunitswitch',
	viewModel: {
		type: 'basmaterialunitswitch'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '物料编号',
				name: 'materialNo'
			}],
			gridModel: 'Hc_mdm.model.BasMaterialUnitSwitch',
			gridColumns: [
							{dataIndex: 'switchId', text: '转换编号', editor: {allowBlank: false,xtype:'numberfield', maxLength:11,enforceMaxLength:true},hidden:false},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype:'numberfield', maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'materialNo', text: '物料编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'unitNoA', text: 'a单位编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'unitNoB', text: 'b单位编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'qtyA', text: 'a单位数量', editor: {allowBlank: false,xtype:'numberfield', maxLength:12,enforceMaxLength:true}},
							{dataIndex: 'qtyB', text: 'b单位数量', editor: {allowBlank: false,xtype:'numberfield', maxLength:12,enforceMaxLength:true}},
							 {
								dataIndex : 'enableFlag',
								text : '启用状态',
								editor : {
									allowBlank:false,
									xtype : 'comboyesno'
								},
								renderer : 'renderYesNo'
					     },
							
			],
			gridPrimaryKey: 'switchId',
			gridUnionKey: '',

			gridLoadUrl:  Hc.mdmPath+'bas_material_unit_switch/list.json?',
			gridSaveUrl:  Hc.mdmPath+'bas_material_unit_switch/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_material_unit_switch/do_export.json',
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
