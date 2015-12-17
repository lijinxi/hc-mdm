/**
 * Description: 单据类型表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBillType', {
    extend: 'Ext.data.Model',
    alias: 'model.basbilltype',
     fields: [
         {name: 'billTypeNo', text: '单据类型编号', type: 'string'},
         {name: 'billTypeName', text: '单据类型名称', type: 'string'},
         {name: 'codeRuleNo', text: '编码规则编号', type: 'string'},
         {name: 'billGroup', text: '单据分组(取自数据字典 bill_group )', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });