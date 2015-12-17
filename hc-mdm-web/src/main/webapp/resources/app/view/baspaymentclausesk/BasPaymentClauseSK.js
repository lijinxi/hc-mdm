/**
 * Description: 收款条件信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSK', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.baspaymentclausesk',
	requires: [
		'Hc_mdm.model.BasPaymentClauseSK',
		'Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSKController',
		'Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSKModel'
	],
	controller: 'baspaymentclausesk',
	viewModel: {
		type: 'baspaymentclausesk'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '收款条件编号',
				name: 'paymentClauseNo'
			},
			{
				xtype: 'textfield',
				fieldLabel: '收款条件名称',
				name: 'paymentClauseName'
			}],
			gridModel: 'Hc_mdm.model.BasPaymentClauseSK',
			gridColumns: [
							{
								dataIndex: 'paymentClauseNo', 
								text: '收款条件编号', 
								editor: 
								{
									allowBlank: false,maxLength:10,enforceMaxLength:true,
									regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
									regexText:'请输入字母或数字'
									}
							},
							{dataIndex: 'paymentClauseName', text: '收款条件名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{xtype:'gridcolumn',dataIndex:'paymentClauseType',text:'收款条件类型',hidden:true,hideable:false,editor:{allowBlank:false}},
							{dataIndex: 'creditDays', text: '信用天数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'preferentialDays', text: '优惠天数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{
								dataIndex: 'dueDateMethod',
								text: '到期日计算方式', 
								editor: 
								{
									allowBlank: true,maxLength:20,enforceMaxLength:true
								},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=due_date_method',
								displaymember:'itemName',
								valuemember:'itemCode'
									
							},
							{dataIndex: 'preferentialRate', text: '优惠率/金额', editor: {allowBlank: true,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
							{
								dataIndex: 'preferentialWay', 
								text: '优惠方式', 
								editor: 
								{
									allowBlank: true,maxLength:20,enforceMaxLength:true
								},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=preferential_way',
								displaymember:'itemName',
								valuemember:'itemCode'
							},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {xtype: 'comboyesno',maxLength:11,enforceMaxLength:true,allowBlank:false}, renderer: 'renderYesNo'}
						],
						
						gridPrimaryKey: 'paymentClauseNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_payment_clause/list.json?paymentClauseType=2',
						gridSaveUrl:  Hc.mdmPath+'bas_payment_clause/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_payment_clause/do_export.json',
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
