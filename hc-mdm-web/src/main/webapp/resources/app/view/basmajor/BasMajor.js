/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmajor.BasMajor', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basmajor',
	requires: [
		'Hc_mdm.model.BasMajor',
		'Hc_mdm.view.basmajor.BasMajorController',
		'Hc_mdm.view.basmajor.BasMajorModel'
	],
	controller: 'basmajor',
	viewModel: {
		type: 'basmajor'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'categoryNo', text: '', editor: {allowBlank: false}},
				{dataIndex: 'materialType', text: '', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_major/listsave.json'
		});
		me.callParent();
	}
});
