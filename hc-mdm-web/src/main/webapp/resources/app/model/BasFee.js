/**
 * Description: 费用信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 14:34:52
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasFee', {
	extend : 'Ext.data.Model',
	alias : 'model.basfee',
	fields : [ {
		name : 'feeNo',
		text : '费用编号',
		type : 'string',
		allowNull : true
	}, {
		name : 'feeName',
		text : '费用名称',
		type : 'string'
	}, {
		name : 'taxRateNo',
		text : '税率编号',
		type : 'string'
	}, {
		name : 'feeCategory',
		text : '费用分类(取自数据字典 fee_category )',
		type : 'string'
	}, {
		name : 'subjectNo',
		text : '科目编号',
		type : 'int'
	}, {
		name : 'orderNo',
		text : '排列序号',
		type : 'int'
	}, {
		name : 'enableFlag',
		text : '启用状态(0=禁用 1=启用)',
		type : 'int'
	}, {
		name : 'creator',
		text : '建档人',
		type : 'string'
	}, {
		name : 'createTime',
		text : '建档时间'
	}, {
		name : 'modifier',
		text : '修改人',
		type : 'string'
	}, {
		name : 'modifyTime',
		text : '修改时间'
	}, {
		name : 'remarks',
		text : '备注',
		type : 'string'
	}]
});