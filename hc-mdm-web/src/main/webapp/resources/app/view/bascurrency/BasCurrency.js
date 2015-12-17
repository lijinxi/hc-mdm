/**
 * Description: 币别信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 15:29:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascurrency.BasCurrency', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bascurrency',
	requires: [
		'Hc_mdm.model.BasCurrency',
		'Hc_mdm.view.bascurrency.BasCurrencyController',
		'Hc_mdm.view.bascurrency.BasCurrencyModel'
	],
	controller: 'bascurrency',
	viewModel: {
		type: 'bascurrency'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '币别编号',
				name: 'currencyNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '币别名称',
				name: 'currencyName'
			}
			],
			gridModel: 'Hc_mdm.model.BasCurrency',
			gridColumns: [
							{
								dataIndex: 'currencyNo',text: '币别编号', 
								editor: {allowBlank: false,maxLength:10,enforceMaxLength:true,
									regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
									regexText:'请输入字母或数字',
									}
							},
							{dataIndex: 'currencyName', text: '币别名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'currencySymbol', text: '币别符号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{
								dataIndex: 'isSymbolDisplay', 
								text: '是否显示符号', 
								editor: 
								{
									allowBlank: false,xtype: 'comboyesno',maxLength:11,enforceMaxLength:true
								},renderer: 'renderYesNo'
							},
							{dataIndex: 'fomart', text: '显示格式', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'priceDigits', text: '单价小数位数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'valueDigits', text: '金额小数位数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false,xtype: 'combouseflag',maxLength:11,enforceMaxLength:true},renderer: 'renderUseFlag'},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}}
						],
						gridPrimaryKey: 'currencyNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_currency/list.json',
						gridSaveUrl:  Hc.mdmPath+'bas_currency/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_currency/do_export.json',
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
