/**
 * Description: 物料单据表 --->半成品bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @update: 	Qiang Liu
 * @content:  物料优化
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialhalf.BillMaterialHalf', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billmaterialhalf',
	requires: [
		'Hc_mdm.model.BillMaterial',
		'Hc_mdm.view.billmaterialhalf.BillMaterialHalfController',
		'Hc_mdm.view.billmaterialhalf.BillMaterialHalfModel'
	],
	controller: 'billmaterialhalf',
	viewModel: {
		type: 'billmaterialhalf'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
				{xtype: 'textfield',name: 'materialType',fieldLabel: '物料类型',hidden:true,value:2}
			],
			gridColumns: [
				{dataIndex: 'maintainType', text: '维护类型', xtype:'bllookupedit',displayvalue:"0=新建:1=修改" },
				{dataIndex: 'materialType', text: '物料类型', xtype:'bllookupedit',displayvalue:"1=原料:2=半成品:3=成品"}
			],
			gridModel: 'Hc_mdm.model.BillMaterial',
			gridLoadUrl: Hc.mdmPath + 'bill_material/list.json',
			dtlName:'billmaterialhalfdtl',
			showModel:'selftab'
		});
		me.callParent();
	}
});
