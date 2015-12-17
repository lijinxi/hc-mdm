/**
 * Description: 会计期间信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basaccountperiod.BasAccountPeriod', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basaccountperiod',
	requires: [
		'Hc_mdm.model.BasAccountPeriod',
		'Hc_mdm.view.basaccountperiod.BasAccountPeriodController',
		'Hc_mdm.view.basaccountperiod.BasAccountPeriodModel'
	],
	controller: 'basaccountperiod',
	viewModel: {
		type: 'basaccountperiod'
	},
	initComponent: function () {
		var me = this;

		Ext.apply(me, {
			searchItems: [
				{xtype: 'textfield', fieldLabel: '会计年月', name: 'accountYearMonth'}
			],

			gridColumns: [
				{dataIndex: 'accountYearMonth', text: '会计年月', editor: true},
				{dataIndex: 'beginDate', text: '开始日期', xtype:'datecolumn',editor:  true},
				{dataIndex: 'endDate', text: '结束日期',xtype:'datecolumn', editor: true},
				{dataIndex: 'orderNo', text: '排列序号', editor: true},
				{dataIndex: 'enableFlag', text: '启用状态(0=禁用 1=启用)', editor: true},
				{dataIndex: 'creator', text: '建档人'},
				{dataIndex: 'createTime', text: '建档时间'},
				{dataIndex: 'modifier', text: '修改人'},
				{dataIndex: 'modifyTime', text: '修改时间'},
				{dataIndex: 'remarks', text: '备注'}
			],
			gridModel: 'Hc_mdm.model.BasAccountPeriod',
			gridPrimaryKey: 'accountYearMonth',
			gridUnionKey: '',
			gridLoadUrl: Hc.mdmPath + 'bas_account_period/list.json',
			gridSaveUrl: Hc.mdmPath + 'bas_account_period/listsave.json',
			gridExportUrl: Hc.mdmPath + 'bas_account_period/do_export.json',
			gridImportUrl: Hc.mdmPath + 'bas_account_period/do_import.json'

		});

		me.callParent();
	}
});
