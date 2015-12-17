/**
 * Description: 供应商联系人信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliercontacter.BasSupplierContacter', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassuppliercontacter',
	requires: [
		'Hc_mdm.model.BasSupplierContacter',
		'Hc_mdm.view.bassuppliercontacter.BasSupplierContacterController',
		'Hc_mdm.view.bassuppliercontacter.BasSupplierContacterModel'
	],
	controller: 'bassuppliercontacter',
	viewModel: {
		type: 'bassuppliercontacter'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: [{
				xtype: 'combo',
				width:'250',
				editable:false,
				triggerAction: 'all',
				fieldLabel: '所属项目编码',
				name: 'projectCode',
				displayField: 'projectName',
				valueField: 'projectCode',
				store: {
					type: 'itgproject',
					autoLoad: true
				}
			}]
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'contacterId', text: '联系人id', editor: {allowBlank: false}},
				{dataIndex: 'supplierNo', text: '供应商编号', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false}},
				{dataIndex: 'contacterCalled', text: '联系人称呼(取数据字典 contacter_called)', editor: {allowBlank: false}},
				{dataIndex: 'contacterName', text: '联系人姓名', editor: {allowBlank: false}},
				{dataIndex: 'contacterDept', text: '联系人部门(取数据字典 contacter_dept)', editor: {allowBlank: false}},
				{dataIndex: 'contacterDuty', text: '联系人职务(取数据字典 contacter_duty)', editor: {allowBlank: false}},
				{dataIndex: 'mobileNo', text: '手机号码', editor: {allowBlank: false}},
				{dataIndex: 'phoneNo', text: '电话号码', editor: {allowBlank: false}},
				{dataIndex: 'faxNo', text: '传真号码', editor: {allowBlank: false}},
				{dataIndex: 'email', text: '邮件地址', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_supplier_contacter/listsave.json'
		});
		me.callParent();
	}
});
