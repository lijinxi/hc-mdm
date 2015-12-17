/**
 * Description: 品牌信息表(来源于集团主数据 org_organ_brand、org_organ_brand_detail )(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbrand.BasBrand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbrand',
	requires: [
		'Hc_mdm.model.BasBrand',
		'Hc_mdm.view.basbrand.BasBrandController',
		'Hc_mdm.view.basbrand.BasBrandModel'
	],
	controller: 'basbrand',
	viewModel: {
		type: 'basbrand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
					xtype : 'textfield',
					fieldLabel : '品牌编号',
					name : 'brandNo'
			},
			{
				xtype : 'textfield',
				fieldLabel : '品牌部编号',
				name : 'brandUpperNo'
			},
			{
				xtype : 'textfield',
				fieldLabel : '品牌中文名',
				name : 'brandCname'
			},
			{
				xtype : 'textfield',
				fieldLabel : '特征码',
				name : 'specialCode'
			}],
			gridModel: 'Hc_mdm.model.BasBrand',
			gridColumns: [
				{
					dataIndex: 'brandNo', text: '品牌编号', 
					editor: {allowBlank: false,maxLength:20,enforceMaxLength:true,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入字母或数字'
						}
				},
				{dataIndex: 'brandEname', text: '品牌英文名', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'brandCname', text: '品牌中文名', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'brandUpperNo', text: '品牌部编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
				{dataIndex: 'specialCode', text: '特征码', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
				//{dataIndex: 'enableFlag', text: '是否启用', editor: {allowBlank: false,xtype : 'comboyesno'},renderer : 'renderYesNo'},
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
			gridPrimaryKey: 'brandNo',
			gridUnionKey: '',
			
			gridLoadUrl: Hc.mdmPath+'bas_brand/list.json',
			gridSaveUrl: Hc.mdmPath+'bas_brand/batchOperate.json',
			gridExportUrl: Hc.mdmPath+'bas_brand/do_export.json',
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
