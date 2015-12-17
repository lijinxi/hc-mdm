/**
 * Description: 税种信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:51:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasTaxCategory', {
	extend : 'Ext.data.Model',
	alias : 'model.bastaxcategory',
	fields : [ {
		name : 'taxCategoryNo',
		text : '税种编号',
		type : 'string'
	}, {
		name : 'taxCategoryName',
		text : '税种名称',
		type : 'string'
	}, {
		name : 'currencyNo',
		text : '币别编号',
		type : 'string'
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
	}, ],
});