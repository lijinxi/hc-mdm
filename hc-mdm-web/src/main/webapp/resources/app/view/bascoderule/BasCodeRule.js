/**
 * Description: 编码规则配置表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascoderule.BasCodeRule', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.bascoderule',
	requires: [
		'Hc_mdm.model.BasCodeRule',
		'Hc_mdm.model.BasCodeRuleDtl',
		'Hc_mdm.view.bascoderule.BasCodeRuleController',
		'Hc_mdm.view.bascoderule.BasCodeRuleModel'
	],
	controller: 'bascoderule',
	viewModel: {
		type: 'bascoderule'
	},
	isAutoLoad: false,
	searchItems:[
	      			{xtype: 'textfield', fieldLabel: '编码规则编号', name: 'codeRuleNo'},
	      			{xtype: 'textfield', fieldLabel: '编码规则名称', name: 'codeRuleName'}
	      		],
  	gridColumns:[
					{dataIndex: 'codeRuleNo', text: '编码规则编号', editor: {allowBlank: false,maxLength : 10,enforceMaxLength : true}},
					{dataIndex: 'codeRuleName', text: '编码规则名称', editor: {allowBlank: false,maxLength : 30,enforceMaxLength : true},width:150},
					{dataIndex: 'codeRuleType', text: '规则类型', editor: {allowBlank: false}},
					{dataIndex: 'allowManualEdit', text: '允许手工编辑', xtype:"bllookupedit",displayvalue:"0=不允许:1=允许"},
					{dataIndex: 'keepContinuous', text: '保持连续编号', xtype:"bllookupedit",displayvalue:"0=否:1=是"},
					{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
					{dataIndex: 'enableFlag', text: '启用状态',editor: {allowBlank: false},xtype:"gridcombouseflag"}
				],
	gridModel: 'Hc_mdm.model.BasCodeRule',
	gridPrimaryKey: 'codeRuleNo',
	gridSubGrid:['grid1'],
	gridLoadUrl : Hc.mdmPath+'bas_code_rule/list.json',
	gridSaveUrl : Hc.mdmPath+'bas_code_rule/saveMasterCustomerList.json',
	gridExportUrl : Hc.mdmPath+'bas_code_rule/do_export.json',

	grid1Columns:[
	              {dataIndex: 'codeRuleId', text: '编码规则明细ID',editor: {allowBlank: false},hidden:true},
	              {dataIndex: 'codeRuleNo', text: '编码规则编号',editor: {allowBlank: false,maxLength : 10,enforceMaxLength : true},hidden:true},
	              {dataIndex: 'codeBeginPosition', text: '编码开始位置',editor: {allowBlank: false}},
	              {dataIndex: 'codeEndPosition', text: '编码结束位置',editor: {allowBlank: false}},
	              {dataIndex: 'charLength', text: '字符长度'},
	              {dataIndex: 'codeType', text: '编码类型',xtype:"bllookupedit",displayvalue:"1=常量:2=取日期:3=取字段:4=流水号:5=手工录入"},
	              {dataIndex: 'constValue', text: '常量值',editor: {editable: true,maxLength : 10,enforceMaxLength : true}},
	              {dataIndex: 'dateFormatValue', text: '日期格式化值',editor: {editable: true,maxLength : 10,enforceMaxLength : true}},
	              {dataIndex: 'fieldValue', text: '字段值',editor: {editable: true,maxLength : 30,enforceMaxLength : true}},
	              {dataIndex: 'cutBeginPosition', text: '字段截取开始位置',editor: {allowBlank: true}},
	              {dataIndex: 'cutEndPosition', text: '字段截取结束位置',editor: {allowBlank: true}},
	              {dataIndex: 'currentSerialDate', text: '当前流水日期',editor: {allowBlank: true}},
	              {dataIndex: 'currentSerialNo', text: '当前流水号',editor: {allowBlank: true}},
	              {dataIndex: 'resetMode', text: '重置方式',xtype:"bllookupedit",displayvalue:"0=永不重置:1=按天重置:2=按月重置:3=按年重置"},
	              {dataIndex: 'padChar', text: '补位符',editor: {allowBlank: true}},
	              {dataIndex: 'orderNo', text: '排列序号',editor: {allowBlank: true}},
	              {dataIndex: 'enableFlag', text: '启用状态',editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"},
	              {dataIndex: 'creator', text: '建档人'},
	              {dataIndex: 'createTime', text: '建档时间',xtype: 'datecolumn',format:'Y-m-d H:m:s'},
	              {dataIndex: 'modifier', text: '修改人'},
	              {dataIndex: 'modifyTime', text: '修改时间',xtype: 'datecolumn',format:'Y-m-d H:m:s'}
	       		],
   	grid1Model: 'Hc_mdm.model.BasCodeRuleDtl',
   	grid1PrimaryKey:'codeRuleId',
   	grid1SupGrid:'mastergrid',
	grid1LoadUrl : Hc.mdmPath+'bas_code_rule_dtl/list.json',
	grid1ExportUrl : Hc.mdmPath+'bas_code_rule_dtl/do_export.json',  	
	initComponent: function () {
		var me = this;
		me.callParent();
	}
});
