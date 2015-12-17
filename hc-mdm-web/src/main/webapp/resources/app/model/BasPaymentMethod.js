/**
 * Description: 结算方式信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 16:33:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPaymentMethod', {
	extend : 'Ext.data.Model',
	alias : 'model.baspaymentmethod',
	fields : [ {
		name : 'paymentMethodNo',
		text : '结算方式编号',
		type : 'string',
		allowNull : true
	}, {
		name : 'paymentMethodName',
		text : '结算方式名称',
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
	}]
});