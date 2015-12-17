/**
 * Description: 仓区信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreZone', {
    extend: 'Ext.data.Model',
    alias: 'model.basstorezone',
     fields: [
         {name: 'lineId', text: '自增主键', type: 'int'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},
         {name: 'zoneName', text: '仓区名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });