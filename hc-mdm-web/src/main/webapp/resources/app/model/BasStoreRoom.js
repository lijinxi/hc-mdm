/**
 * Description: 库区信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreRoom', {
    extend: 'Ext.data.Model',
    alias: 'model.basstoreroom',
     fields: [
         {name: 'lineId', text: '自增主键', type: 'int'},
         {name: 'roomNo', text: '库区编号', type: 'string'},
         {name: 'roomName', text: '库区名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},
         {name: 'roomType', text: '库区类型(数据字典 room_type )', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });