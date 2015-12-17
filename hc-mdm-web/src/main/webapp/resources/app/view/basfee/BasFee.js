/**
 * Description: 费用信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 14:34:52
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basfee.BasFee', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.basfee',
	requires : [ 'Hc_mdm.model.BasFee',
			'Hc_mdm.view.basfee.BasFeeController',
			'Hc_mdm.view.basfee.BasFeeModel' ],
	controller : 'basfee',
	viewModel : {
		type : 'basfee'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {

			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '费用编号',
				name : 'feeNo'
			},{
				xtype : 'textfield',
				fieldLabel : '费用名称',
				name : 'feeName'
			}],

			gridModel : 'Hc_mdm.model.BasFee',

			gridColumns : [ {
				dataIndex : 'feeNo',
				text : '费用编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入20位字母或数字',
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'feeName',
				text : '费用名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxRateNo',
				text : '税率名称',
				editor:{allowBlank:false},
				xtype:'bllookupedit',
				displayvalue:Hc.mdmPath+'bas_tax_rate/list.json',
				displaymember:'taxRateName',
				valuemember:'taxRateNo'
			}, {
				dataIndex : 'feeCategory',
				text : '费用分类',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'subjectNo',
				text : '科目编号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'orderNo',
				text : '排列序号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'enableFlag',
				text : '启用状态',
				editor : {
					allowBlank:false,
					xtype : 'comboyesno'
				},
				renderer : 'renderYesNo'
			} ],

			gridPrimaryKey : 'feeNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_fee/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_fee/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_fee/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

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
