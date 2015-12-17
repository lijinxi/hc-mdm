/**
 * Description: 采购组(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPurchaseGroup', {
    extend: 'Ext.data.Model',
    alias: 'model.baspurchasegroup',
     fields: [
         {name: 'purchaseGroupNo', text: '采购组编号', type: 'string'},
         {name: 'purchaseGroupName', text: '采购组名称', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });