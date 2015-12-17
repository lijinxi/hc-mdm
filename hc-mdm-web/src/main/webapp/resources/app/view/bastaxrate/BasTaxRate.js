/**
 * Description: 税率信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:52:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bastaxrate.BasTaxRate', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.bastaxrate',
	requires : [ 'Hc_mdm.model.BasTaxRate',
			'Hc_mdm.view.bastaxrate.BasTaxRateController',
			'Hc_mdm.view.bastaxrate.BasTaxRateModel' ],
	controller : 'bastaxrate',
	viewModel : {
		type : 'bastaxrate'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {

			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '税率编号',
				name : 'taxRateNo'
			} ,{
				xtype : 'textfield',
				fieldLabel : '税率名称',
				name : 'taxRateName'
			}],

			gridModel : 'Hc_mdm.model.BasTaxRate',

			gridColumns : [ {
				dataIndex : 'taxRateNo',
				text : '税率编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxRateName',
				text : '税率名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxRate',
				text : '税率(%)',
				editor : {
					allowBlank : false
				}
			}, {
				dataIndex : 'taxCategoryNo',
				text : '税种',
				editor : {
					allowBlank : false
				},
				xtype:'bllookupedit',
				displayvalue:Hc.mdmPath+'bas_tax_category/list.json?enableFlag=1',
				displaymember:'taxCategoryName',
				valuemember:'taxCategoryNo'
			}, {
				dataIndex : 'isAddedTax',
				text : '是否增值税',
				editor : {
					allowBlank:false,
					xtype : 'comboyesno'
				},
				renderer : 'renderYesNo'
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
			}],

			gridPrimaryKey : 'taxRateNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_tax_rate/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_tax_rate/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_tax_rate/do_export.json',
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
