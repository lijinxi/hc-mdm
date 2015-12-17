/**
 * Description: 国家信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: lucheng
 * @date: 2015-03-16 15:16:04
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascountry.BasCountry', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.bascountry',
	requires : [ 'Hc_mdm.model.BasCountry',
	             'Hc_mdm.view.bascountry.BasCountryController',
	             'Hc_mdm.view.bascountry.BasCountryModel' ],
	             controller : 'bascountry',
	             viewModel : {
	            	 type : 'bascountry'
	             },
	             initComponent : function() {
	            	 var me = this;

	            	 Ext.apply(me, {
	            		 searchItems : [ {
	            			 xtype : 'textfield',
	            			 fieldLabel : '国家编号',
	            			 name : 'countryNo'
	            		 }, {
	            			 xtype : 'textfield',
	            			 fieldLabel : '国家名称',
	            			 name : 'countryName'
	            		 }, {
	            			 xtype : 'extcombox',
	            			 fieldLabel : '币别',
	            			 name : 'currencyNo',
	            			 displayvalue : Hc.mdmPath + 'bas_currency/list.json',
	            			 displaymember : 'currencyName',
	            			 valuemember : 'currencyNo'
	            		 } ],
	            		 gridModel : 'Hc_mdm.model.BasCountry',
	            		 gridColumns : [ {
	            			 dataIndex : 'countryNo',
	            			 text : '国家编号',
	            			 editor : {
	            				 allowBlank : false,
	            				 maxLength : 10,
	            				 enforceMaxLength : true,
	            				 regex : /^[0-9a-zA-Z]+$/, // 只能输入字母、数字或者字母数字组合
	            				 regexText : '请输入字母或数字'
	            			 }
	            		 }, {
	            			 dataIndex : 'countryName',
	            			 text : '国家名称',
	            			 editor : {
	            				 allowBlank : false,
	            				 maxLength : 20,
	            				 enforceMaxLength : true
	            			 }
	            		 }, {
	            			 dataIndex : 'currencyNo',
	            			 text : '币别',
	            			 editor : {
	            				 allowBlank : false,
	            				 maxLength : 10,
	            				 enforceMaxLength : true
	            			 },
	            			 xtype : 'bllookupedit',
	            			 displayvalue : Hc.mdmPath + 'bas_currency/list.json',
	            			 displaymember : 'currencyName',
	            			 valuemember : 'currencyNo'
	            		 }, {
	            			 dataIndex : 'orderNo',
	            			 text : '排列序号',
	            			 editor : {
	            				 allowBlank : true,
	            				 xtype : 'numberfield'
	            			 }
	            		 }, {
	            			 dataIndex : 'enableFlag',
	            			 text : '启用状态',
	            			 editor : {
	            				 allowBlank : false,
	            				 xtype : 'combouseflag',
	            				 maxLength : 11,
	            				 enforceMaxLength : true
	            			 },
	            			 renderer : 'renderUseFlag'
	            		 }

	            		 ],
	            		 gridPrimaryKey : 'countryNo',
	            		 gridUnionKey : '',

	            		 gridLoadUrl : Hc.mdmPath + 'bas_country/list.json',
	            		 gridSaveUrl : Hc.mdmPath + 'bas_country/batchOperate.json',
	            		 gridExportUrl : Hc.mdmPath + 'bas_country/do_export.json',
	            		 gridImportUrl : '',

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
