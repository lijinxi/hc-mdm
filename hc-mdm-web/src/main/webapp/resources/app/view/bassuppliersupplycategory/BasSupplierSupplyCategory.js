/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliersupplycategory.BasSupplierSupplyCategory', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassuppliersupplycategory',
	requires: [
		'Hc_mdm.model.BasSupplierSupplyCategory',
		'Hc_mdm.view.bassuppliersupplycategory.BasSupplierSupplyCategoryController',
		'Hc_mdm.view.bassuppliersupplycategory.BasSupplierSupplyCategoryModel'
	],
	controller: 'bassuppliersupplycategory',
	viewModel: {
		type: 'bassuppliersupplycategory'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id', editor: {allowBlank: false}},
				{dataIndex: 'supplierNo', text: '供应商编号', editor: {allowBlank: false}},
				{dataIndex: 'categoryNo', text: '类别编号', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_supplier_supply_category/listsave.json'
		});
		me.callParent();
	}
});
