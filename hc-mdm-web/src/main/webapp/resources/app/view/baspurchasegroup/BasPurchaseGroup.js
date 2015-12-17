/**
 * Description: 采购组(default) All rights Reserved, Designed By Hc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: user
 * @date: 2015-05-05 08:44:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspurchasegroup.BasPurchaseGroup', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.baspurchasegroup',
	requires : ['Hc_mdm.model.BasPurchaseGroup',
			'Hc_mdm.view.baspurchasegroup.BasPurchaseGroupController',
			'Hc_mdm.view.baspurchasegroup.BasPurchaseGroupModel'],
	controller : 'baspurchasegroup',
	viewModel : {
		type : 'baspurchasegroup'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			searchItems : [{
				xtype : 'textfield',
				fieldLabel : '采购组编号',
				name : 'purchaseGroupNo'
			}, {
				xtype : 'textfield',
				fieldLabel : '采购组名',
				name : 'purchaseGroupName'
			}],
			gridModel : 'Hc_mdm.model.BasPurchaseGroup',
			gridColumns : [
				 {dataIndex: 'purchaseGroupNo', text: '采购组编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'purchaseGroupName', text: '采购组名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         /*{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},*/
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
				}/*,
		         {dataIndex: 'creator', text: '建档人', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'modifier', text: '修改人', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'remarks', text: '备注', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}}*/
			],
			gridPrimaryKey : 'purchaseGroupNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath + 'bas_purchase_group/list.json',
			gridSaveUrl : Hc.mdmPath
					+ 'bas_purchase_group/batchOperate.json',
			gridExportUrl : Hc.mdmPath + 'bas_purchase_group/do_export.json',
			gridImportUrl : '',

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
