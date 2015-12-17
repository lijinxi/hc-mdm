/**
 * Description: 结算方式信息表(default) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 16:33:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentmethod.BasPaymentMethod', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.baspaymentmethod',
	requires : [ 'Hc_mdm.model.BasPaymentMethod',
			'Hc_mdm.view.baspaymentmethod.BasPaymentMethodController',
			'Hc_mdm.view.baspaymentmethod.BasPaymentMethodModel' ],
	controller : 'baspaymentmethod',
	viewModel : {
		type : 'baspaymentmethod'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '结算方式编号',
				name : 'paymentMethodNo'
			} ,{
				xtype : 'textfield',
				fieldLabel : '结算方式名称',
				name : 'paymentMethodName'
			}],

			gridModel : 'Hc_mdm.model.BasPaymentMethod',
			
			gridColumns : [ {
				dataIndex : 'paymentMethodNo',
				text : '结算方式编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'paymentMethodName',
				text : '结算方式名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
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
					xtype : 'comboyesno',
					allowBlank:false
				},
				renderer : 'renderYesNo'
			} ],
			
			gridPrimaryKey : 'paymentMethodNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_payment_method/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_payment_method/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_payment_method/do_export.json',
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
