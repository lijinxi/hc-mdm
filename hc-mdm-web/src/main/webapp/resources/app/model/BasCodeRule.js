/**
 * Description: 编码规则配置表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCodeRule', {
    extend: 'Ext.data.Model',
    alias: 'model.bascoderule',
     fields: [
         {name: 'codeRuleNo', text: '编码规则编号', type: 'string'},
         {name: 'codeRuleName', text: '编码规则名称', type: 'string'},
         {name: 'codeRuleType', text: '规则类型', type: 'int'},
         {name: 'allowManualEdit', text: '允许手工编辑', type: 'int'},
         {name: 'keepContinuous', text: '保持连续编号', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });