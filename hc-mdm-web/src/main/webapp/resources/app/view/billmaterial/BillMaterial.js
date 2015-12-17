/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterial.BillMaterial', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billmaterial',
	requires: [
		'Hc_mdm.model.BillMaterial',
		'Hc_mdm.view.billmaterial.BillMaterialController',
		'Hc_mdm.view.billmaterial.BillMaterialModel'
	],
	controller: 'billmaterial',
	viewModel: {
		type: 'billmaterial'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
				{xtype: 'textfield',name: 'materialType',fieldLabel: '物料类型',hidden:true,value:3}
                          //{xtype: 'extcombox',name: 'materialType', fieldLabel: '物料类型',displayvalue:"0=成品/半成品",value:0,readOnly : true, hideTrigger : true,hidden:true},
						  //{xtype: 'textfield',name: 'billNo',fieldLabel: '单据编号',hidden:true}
						/*
						  {xtype: 'textfield',name: 'creator',fieldLabel: '建档人',hidden:true},
						  {xtype: 'textfield',name: 'auditor',fieldLabel: '审核人',hidden:true},
						  {
								xtype: 'bldatetime',
								fieldLabel: '建档时间',
								name: 'createFromTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'createToTime', // 被比较的输入框控件name
								compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
						  },{
								xtype: 'bldatetime',
								fieldLabel: '   到     ',
								name: 'createToTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'createFromTime', // 被比较的输入框控件name
								compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
						  },
						  {
								xtype: 'bldatetime',
								fieldLabel: '审核时间',
								name: 'auditFromTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'auditToTime', // 被比较的输入框控件name
								compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
							},{
								xtype: 'bldatetime',
								fieldLabel: '   到     ',
								name: 'auditToTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'auditFromTime', // 被比较的输入框控件name
								compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
							}
						  {xtype: 'extcombox',name: 'billStatus',fieldLabel: '单据状态',displayvalue:"0=编辑:1=审核",hidden:true}
						  */
						],
			gridColumns: [

				//{dataIndex: 'billNo', text: '单据号', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'maintainType', text: '维护类型', xtype:'bllookupedit',displayvalue:"0=新建:1=修改" },
				{dataIndex: 'materialType', text: '物料类型', xtype:'bllookupedit',displayvalue:"1=原料:2=半成品:3=成品"}
				/*{dataIndex: 'operator', text: '操作人', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'createTime', text: '建档时间',readOnly:true,width:140,hidden:true},
				{dataIndex: 'auditor', text: '审核人', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'auditTime', text: '审核时间',readOnly:true,width:140,hidden:true},
				{dataIndex: 'billStatus', text: '单据状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=编辑:1=审核",hidden:true},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false},hidden:true}
				*/
			],
			gridModel: 'Hc_mdm.model.BillMaterial',
			gridLoadUrl: Hc.mdmPath + 'bill_material/list.json',
			dtlName:'billmaterialdtl',
			showModel:'selftab'
		});
		me.callParent();
	}
});
