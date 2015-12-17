/**
 * Description: 税种信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:51:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bastaxcategory.BasTaxCategory', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.bastaxcategory',
	requires : [ 'Hc_mdm.model.BasTaxCategory',
			'Hc_mdm.view.bastaxcategory.BasTaxCategoryController',
			'Hc_mdm.view.bastaxcategory.BasTaxCategoryModel' ],
	controller : 'bastaxcategory',
	viewModel : {
		type : 'bastaxcategory'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			
			searchItems : [ {
				xtype: 'textfield',
				fieldLabel: '税种编号',
				name: 'taxCategoryNo'
			} ,{
				xtype: 'textfield',
				fieldLabel: '税种名称',
				name: 'taxCategoryName'
			},{
   			 fieldLabel : '币别',
			 name : 'currencyNo',
    			 xtype:'extcombox',
    		 displayvalue:Hc.mdmPath+'bas_currency/list.json?enableFlag=1',
			 displaymember:'currencyName',
			 valuemember:'currencyNo'
		 }
			],

			gridModel : 'Hc_mdm.model.BasTaxCategory',
			
			gridColumns : [ {
				dataIndex : 'taxCategoryNo',
				text : '税种编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxCategoryName',
				text : '税种名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
				
			}, {
				dataIndex : 'currencyNo',
				text : '币别',
				editor : {
					allowBlank : false
				},
				xtype:'bllookupedit',
				displayvalue:Hc.mdmPath+'bas_currency/list.json?enableFlag=1',
				displaymember:'currencyName',
				valuemember:'currencyNo'
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
			
			gridPrimaryKey : 'taxCategoryNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_tax_category/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_tax_category/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_tax_category/do_export.json',
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
