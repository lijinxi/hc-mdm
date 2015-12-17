/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbomlist.BasBomList', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbomlist',
	requires: [
		'Hc_mdm.model.BasBomList',
		'Hc_mdm.view.basbomlist.BasBomListController',
		'Hc_mdm.view.basbomlist.BasBomListModel'
	],
	controller: 'basbomlist',
	viewModel: {
		type: 'basbomlist'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
			        {xtype : 'textfield',fieldLabel : '品牌',width : 200,labelAlign : 'right',labelWidth : 100,padding : 5,name : 'brandNo'},
					{xtype : 'textfield',fieldLabel : '物料编号',width : 200,labelAlign : 'right',labelWidth : 100,padding : 5,name : 'materialNo'},
					{xtype : 'extcombox',fieldLabel : 'BOM用途',labelAlign : 'right',labelWidth : 100,padding : 5,width : 200,name : 'bomPurpose',displayvalue : "S2=开发:STD=标准"}
							],
			gridModel: 'Hc_mdm.model.BasBomList',
			gridColumns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'bomId', text: 'BOMID', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '序号', editor: {allowBlank: false}},
				{dataIndex: 'brandNo', text: '品牌', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '物料编号', editor: {allowBlank: false}},
				{dataIndex: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', editor: {allowBlank: false}},
				{dataIndex: 'dosageNumerator', text: '用量(分子)', editor: {allowBlank: false}},
				{dataIndex: 'dosageDenominator', text: '用量(分母)', editor: {allowBlank: false}},
				{dataIndex: 'pdTypeNo', text: '用途(产品设计材料类别编号)', editor: {allowBlank: false}},
				{dataIndex: 'storeNo', text: '预设仓库(仓库编号)', editor: {allowBlank: false}},
				{dataIndex: 'isVirtual', text: '是否虚拟件(0=否 1=是)', editor: {allowBlank: false}},
			],
			gridPrimaryKey: 'lineId',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath+'bas_bom_list/getBomList.json',
			//gridLoadUrl: Hc.mdmPath+'bas_bom_list/getBomList.json?isAllList=true',
			//gridLoadUrl: Hc.mdmPath+'bas_bom_list/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_bom_list/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_bom_list/do_export.json',
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
