/**
 * Description: 收款条件信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPaymentClauseSK', {
    extend: 'Ext.data.Model',
    alias: 'model.baspaymentclausesk',
     fields: [
         {name: 'paymentClauseNo', text: '收款条件编号', type: 'string'},
         {name: 'paymentClauseName', text: '收款条件名称', type: 'string'},
         {name: 'paymentClauseType', text: '收款条件类型', type: 'string', defaultValue:'2',hidden:true},
         {name: 'creditDays', text: '信用天数', type: 'int'},
         {name: 'preferentialDays', text: '优惠天数', type: 'int'},
         {name: 'dueDateMethod', text: '到期日计算方式', type: 'string'},
         {name: 'preferentialRate', text: '优惠率/金额', type: 'number'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'preferentialWay', text: '优惠方式', type: 'string'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });