/**
 * Description: 行政省信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:56:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basprovince.BasProvince', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basprovince',
	requires: [
		'Hc_mdm.model.BasProvince',
		'Hc_mdm.view.basprovince.BasProvinceController',
		'Hc_mdm.view.basprovince.BasProvinceModel'
	],
	controller: 'basprovince',
	viewModel: {
		type: 'basprovince'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '行政省编号',
				name: 'provinceNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '行政省名称',
				name: 'provinceName'
			},{
				xtype: 'textfield',
				fieldLabel: '行政省特征码',
				name: 'provinceOpcode'						
			}
			],
			gridModel: 'Hc_mdm.model.BasProvince',
			gridColumns: [
							{dataIndex: 'provinceNo', text: '行政省编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'provinceName', text: '行政省名称', editor: {allowBlank: false,maxLength:15,enforceMaxLength:true}},
							{dataIndex: 'provinceLname', text: '行政省详细名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
							{dataIndex: 'provinceOpcode', text: '行政省特征码', editor: {allowBlank: false,maxLength:2,enforceMaxLength:true}},
							{
								dataIndex: 'countryNo', 
								text: '国家编号', 
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_country/list.json',
					    		displaymember:'countryName',
					    		valuemember:'countryNo'	
							},
							{dataIndex: 'directControlled', text: '是否直辖市', editor: {xtype: 'comboyesno',maxLength:11,enforceMaxLength:true}, renderer: 'renderYesNo'},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank:false,xtype: 'combouseflag',maxLength:11,enforceMaxLength:true}, renderer: 'renderUseFlag'}
						],
						gridPrimaryKey: 'provinceNo',
						gridUnionKey: 'provinceName',

						gridLoadUrl:  Hc.mdmPath+'bas_province/list.json',
						gridSaveUrl:  Hc.mdmPath+'bas_province/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_province/do_export.json',
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
