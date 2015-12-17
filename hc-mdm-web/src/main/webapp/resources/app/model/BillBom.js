/**
 * Description: bill_bom/bill_bom_list/bill_bom_list_size(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillBom', {
    extend: 'Ext.data.Model',
    alias: 'model.billbom',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'maintainType', text: '维护类型(1=修改2=用途转换3=状态变更)', type: 'int',allowNull:true},
         {name: 'materialNo', text: '物料编号(成品、半成品)', type: 'string'},
         {name: 'oldBrandNo', text: '老品牌', type: 'string',allowNull:true},
         {name: 'newBrandNo', text: '新品牌', type: 'string',allowNull:true},
         {name: 'oldBomPurpose', text: '原BOM用途(S2=开发 STD=标准)', type: 'string',allowNull:true},
         {name: 'newBomPurpose', text: '新BOM用途(STD=标准 SUB=委外 SPD=预测)', type: 'string',allowNull:true},
         {name: 'bomType', text: 'BOM分类(1=标准BOM 2=配置BOM)', type: 'int'},
         {name: 'versionNo', text: '版本序号(1->n)', type: 'int',allowNull:true},
         {name: 'bomStatus', text: 'BOM状态(0=编辑 1=审核 2=生效)', type: 'int',allowNull:true},
         {name: 'billStatus', text: '单据状态(0=编辑 1=审核)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},         
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });