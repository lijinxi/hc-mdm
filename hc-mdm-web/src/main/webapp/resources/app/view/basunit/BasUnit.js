/**
 * Description: 计量单位信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-14 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basunit.BasUnit', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basunit',
	requires: [
		'Hc_mdm.model.BasUnit',
		'Hc_mdm.view.basunit.BasUnitController',
		'Hc_mdm.view.basunit.BasUnitModel'
	],
	controller: 'basunit',
	viewModel: {
		type: 'basunit'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {

			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '单位编号',
				name: 'unitNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '单位名称',
				name: 'unitName'
			},{
				xtype: 'bldatetime',
				fieldLabel: '建档时间',
				name: 'createFromTime'
				//vtype:'compareTo',     //数据验证方式，compareTo
				//compareTo:'createToTime', // 被比较的输入框控件name
				//compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
				//compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
			},{
				xtype: 'bldatetime',
				fieldLabel: '   到     ',
				name: 'createToTime',
				vtype:'compareTo',     //数据验证方式，compareTo
				compareTo:'createFromTime', // 被比较的输入框控件name
				compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
				compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
			}
			],

			gridModel: 'Hc_mdm.model.BasUnit',
			gridColumns: [
							{dataIndex: 'unitNo', text: '单位编号', editor: {allowBlank: false,maxLength : 10,enforceMaxLength : true}},
							{dataIndex: 'unitName', text: '单位名称', editor: {allowBlank: false,maxLength : 20,enforceMaxLength : true}},
							{dataIndex: 'specification', text: '规格', editor: {allowBlank: false,maxLength : 20,enforceMaxLength : true}},
							{dataIndex: 'decimalDigits', text: '小数位数', editor: {allowBlank: false}},
							{dataIndex: 'flagMaterial', text: '物料单位标志', editor: {allowBlank: true}, xtype : 'gridcomboyesno'},
							{dataIndex: 'flagPurchase', text: '采购单位标志', editor: {allowBlank: true},xtype : 'gridcomboyesno'},
							{dataIndex: 'flagBom', text: 'BOM单位标志',editor: {allowBlank: true},xtype : 'gridcomboyesno'},
							{dataIndex: 'flagDeliver', text: '发运单位标志',editor: {allowBlank: true}, xtype : 'gridcomboyesno'},
							{dataIndex: 'flagQuality', text: '质检单位标志', editor: {allowBlank: true},xtype : 'gridcomboyesno'},
							{dataIndex: 'enableFlag', text: '启用状态',editor: {allowBlank: false},xtype:"gridcombouseflag"},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}}
						],
			gridPrimaryKey: 'unitNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath+'bas_unit/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_unit/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_unit/do_export.json',
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
