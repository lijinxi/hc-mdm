/**
 * Description: 税率信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:52:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasTaxRate', {
	extend : 'Ext.data.Model',
	alias : 'model.bastaxrate',
	fields : [ {
		name : 'taxRateNo',
		text : '税率编号',
		type : 'string'
	}, {
		name : 'taxRateName',
		text : '税率名称',
		type : 'string'
	}, {
		name : 'taxRate',
		text : '税率(%)',
		type : 'number'
	}, {
		name : 'taxCategoryNo',
		text : '税种编号',
		type : 'string'
	}, {
		name : 'isAddedTax',
		text : '是否增值税(1=是 0=否)',
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
	}],
});