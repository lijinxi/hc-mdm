/**
 * Description: bill_bom/bill_bom_list/bill_bom_list_size(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbom.BillBom', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billbom',
	requires: [
		'Hc_mdm.model.BillBom',
		'Hc_mdm.view.billbom.BillBomController',
		'Hc_mdm.view.billbom.BillBomModel'
	],
	controller: 'billbom',
	viewModel: {
		type: 'billbom'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
							{xtype : 'extcombox',fieldLabel : '维护类型',name : 'maintainType',displayvalue : "1=修改:2=用途转换:3=状态变更:4=品牌转换"},
							{xtype : 'extcombox',fieldLabel : '原品牌',name : 'oldBrandNo',displayvalue:Hc.mdmPath+'bas_brand/listAll.json',displaymember:'brandCname',valuemember:'brandNo'},
							{xtype : 'textfield',fieldLabel : '物料编码',name : 'materialCode'},
							{xtype : 'extcombox',fieldLabel : '原BOM用途',name : 'oldBomPurpose',displayvalue : "S2=开发:STD=标准"}
						],
			gridColumns: [
				{dataIndex: 'billNo', text: '单据编号'},
				{dataIndex: 'maintainType', text: '维护类型',xtype : "bllookupedit",displayvalue : "1=修改:2=用途转换:3=状态变更:4=品牌转换"},
				{dataIndex: 'materialNo', text: '物料编号'},
				{dataIndex: 'oldBomPurpose', text: '原BOM用途',xtype : "bllookupedit",displayvalue : "S2=开发:STD=标准"},
				{dataIndex: 'newBomPurpose', text: '新BOM用途',xtype : "bllookupedit",displayvalue : "STD=标准:SUB=委外:SPD=预测"},
				{
					dataIndex: 'oldBrandNo', 
					text: '原品牌',
					xtype:"bllookupedit",
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo'
				},
				{
					dataIndex: 'newBrandNo', 
					text: '新品牌',
					xtype:"bllookupedit",
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo'
				},
				{dataIndex: 'bomType', text: 'BOM分类',xtype : "bllookupedit",displayvalue : "1=标准BOM:2=配置BOM"},
				{dataIndex: 'versionNo', text: '版本序号'},
				{dataIndex: 'bomStatus', text: 'BOM状态',xtype : "bllookupedit",displayvalue : "0=编辑:1=审核:2=生效"},
				{dataIndex: 'operator', text: '操作人'},
				{dataIndex: 'creator', text: '建档人'},
				{dataIndex: 'createTime', text: '建档时间',width:140},
				{dataIndex: 'auditor', text: '审核人'},
				{dataIndex: 'auditTime', text: '审核时间',width:140},
				{dataIndex: 'billStatus', text: '单据状态',xtype : "bllookupedit",displayvalue : "0=编辑:1=审核"},
				{dataIndex: 'remarks', text: '备注'}
			],
			gridModel: 'Hc_mdm.model.BillBom',
			gridLoadUrl: Hc.mdmPath + 'bill_bom/list.json',
			dtlName:'billbomlist',
		   	gridHasMark:false,
		   	gridHasCreator:false,
		   	gridHasModifier:false,
		   	gridHasAuditor:false,
			showModel:'selftab'
		});
		me.callParent();
	}
});
