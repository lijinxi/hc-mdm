/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmat.BillMat', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billmat',
	requires: [
		'Hc_mdm.model.BillMaterial',
		'Hc_mdm.view.billmat.BillMatController',
		'Hc_mdm.view.billmat.BillMatModel'
	],
	controller: 'billmat',
	viewModel: {
		type: 'billmat'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
				{xtype: 'textfield',name: 'materialType',fieldLabel: '物料类型',hidden:true,value:1}
			],
			gridColumns: [
				{
					dataIndex: 'maintainType', text: '维护类型',
					xtype:'bllookupedit',displayvalue:"0=新建:1=修改"
				},
				{
					dataIndex: 'materialType', text: '物料类型',
					xtype:'bllookupedit',displayvalue:"1=原料:2=半成品:3=成品"
				}
			],
			gridModel: 'Hc_mdm.model.BillMaterial',
			gridLoadUrl: Hc.mdmPath + 'bill_material/list.json',
			dtlName:'billmatdtl',
			showModel:'selftab'
		});
		me.callParent();
	}
});
