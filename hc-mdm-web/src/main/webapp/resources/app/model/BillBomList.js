/**
 * Description: BOM单据物料清单表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillBomList', {
    extend: 'Ext.data.Model',
    alias: 'model.billbomlist',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'lineId', text: '行id(主键、隐藏)', type: 'int'},
         {name: 'orderNo', text: '序号', type: 'int',allowNull:true},
         {name: 'parentOrderNo', text: '上层序号', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'materialCode', text: '物料编号', type: 'string'},
         {name: 'materialName', text: '物料编号', type: 'string'},
         {name: 'sizeTypeNo', text: '物料编号', type: 'string'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string'},
         {name: 'dosageNumerator', text: '用量(分子)', type: 'number'},
         {name: 'dosageDenominator', text: '用量(分母)', type: 'number'},
         {name: 'pdTypeNo', text: '用途(产品设计材料类别编号)', type: 'string'},
         {name: 'storeNo', text: '预设仓库(仓库编号)', type: 'string'},
         {name: 'isVirtual', text: '是否虚拟件(0=否 1=是)', type: 'int'},
         {name: 'updateFlag', text: '修改标识(0=否 1=是)', type: 'int'},
         {name: 'replaceFlag',type: 'string'}
         ],
         idProperty: 'orderNo',
         identifier: 'negative'
  });