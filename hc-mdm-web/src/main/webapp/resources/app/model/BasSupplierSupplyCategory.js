/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplierSupplyCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.bassuppliersupplycategory',
     fields: [
         {name: 'lineId', text: '行id', type: 'int'},
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'categoryNo', text: '类别编号', type: 'string'},
         {name: 'purchaseType', text: '采购类型', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  
  });