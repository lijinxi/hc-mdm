/**
 * Description: 供应商使用品牌(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-31 14:31:22
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplierbrand.BasSupplierBrand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassupplierbrand',
	requires: [
		'Hc_mdm.model.BasSupplierBrand',
		'Hc_mdm.view.bassupplierbrand.BasSupplierBrandController',
		'Hc_mdm.view.bassupplierbrand.BasSupplierBrandModel'
	],
	controller: 'bassupplierbrand',
	viewModel: {
		type: 'bassupplierbrand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'brandId', text: '使用组织id', editor: {allowBlank: false}},
				{dataIndex: 'supplierNo', text: '供应商编号', editor: {allowBlank: false}},
				{dataIndex: 'brandNo', text: '品牌编号', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_supplier_brand/listsave.json'
		});
		me.callParent();
	}
});
