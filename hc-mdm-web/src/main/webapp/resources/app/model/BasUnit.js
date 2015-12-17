/**
 * Description: 计量单位信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-14 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasUnit', {
    extend: 'Ext.data.Model',
    alias: 'model.basunit',
    fields: [
         {name: 'unitNo', text: '单位编号', type: 'string'},
         {name: 'unitName', text: '单位名称', type: 'string'},
         {name: 'specification', text: '规格', type: 'string'},
         {name: 'decimalDigits', text: '小数位数', type: 'int'},
         {name: 'flagMaterial', text: '物料单位标志', type: 'int'},
         {name: 'flagPurchase', text: '采购单位标志', type: 'int'},
         {name: 'flagBom', text: 'BOM单位标志', type: 'int'},
         {name: 'flagDeliver', text: '发运单位标志', type: 'int'},
         {name: 'flagQuality', text: '质检单位标志', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });

