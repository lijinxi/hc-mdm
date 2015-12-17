/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_size(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBom', {
    extend: 'Ext.data.Model',
    alias: 'model.basbom',
     fields: [
         {name: 'bomId', text: 'BOMID', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'bomType', text: 'BOM分类(1=标准BOM 2=配置BOM)', type: 'int'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string'},
         {name: 'versionNo', text: '版本序号(1->n)', type: 'int'},
         {name: 'bomStatus', text: 'BOM状态(0=编辑 1=审核 2=生效)', type: 'int'},
         {name: 'modifier', text: '最后修改人', type: 'string'},
         {name: 'modifyTime', text: '最后修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'brandNo', text: '品牌', type: 'string'}
         ]
  });