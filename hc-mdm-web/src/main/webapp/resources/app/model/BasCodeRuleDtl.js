/**
 * Description: 编码规则配置明细表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCodeRuleDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.bascoderuledtl',
     fields: [
         {name: 'codeRuleId', text: '编码规则明细ID', type: 'int'},
         {name: 'codeRuleNo', text: '编码规则编号', type: 'string'},
         {name: 'codeBeginPosition', text: '编码开始位置', type: 'int'},
         {name: 'codeEndPosition', text: '编码结束位置', type: 'int'},
         {name: 'charLength', text: '字符长度', type: 'int'},
         {name: 'codeType', text: '编码类型', type: 'int'},
         {name: 'constValue', text: '常量值', type: 'string'},
         {name: 'dateFormatValue', text: '日期格式化值', type: 'string'},
         {name: 'fieldValue', text: '字段值', type: 'string'},
         {name: 'cutBeginPosition', text: '字段截取开始位置', type: 'int'},
         {name: 'cutEndPosition', text: '字段截取结束位置', type: 'int'},
         {name: 'currentSerialDate', text: '当前流水日期', type: 'date'},
         {name: 'currentSerialNo', text: '当前流水号', type: 'int'},
         {name: 'resetMode', text: '重置方式', type: 'int'},
         {name: 'padChar', text: '补位符', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
         idProperty: 'orderNo',
         identifier: 'sequential'
  });