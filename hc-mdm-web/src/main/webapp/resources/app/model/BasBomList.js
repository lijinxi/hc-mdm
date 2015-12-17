/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBomList', {
    extend: 'Ext.data.Model',
    alias: 'model.basbomlist',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'bomId', text: 'BOMID', type: 'int'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'materialNo', text: '', type: 'string'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string',allowNull:true},
         {name: 'dosageNumerator', text: '用量(分子)', type: 'float',allowNull:true},
         {name: 'dosageDenominator', text: '用量(分母)', type: 'float',allowNull:true},
         {name: 'pdTypeNo', text: '用途(产品设计材料类别编号)', type: 'string',allowNull:true},
         {name: 'storeNo', text: '预设仓库(仓库编号)', type: 'string',allowNull:true},
         {name: 'isVirtual', text: '是否虚拟件(0=否 1=是)', type: 'int',allowNull:true}
         ],
         idProperty: 'orderNo',
         identifier: 'negative'
  });