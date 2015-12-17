/**
 * Description: 储位信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreCell', {
    extend: 'Ext.data.Model',
    alias: 'model.basstorecell',
     fields: [
         {name: 'lineId', text: 'ID主键', type: 'int'},
         {name: 'cellNo', text: '储位编号', type: 'string'},
         {name: 'cellCode', text: '储位编码', type: 'string'},
         {name: 'cellName', text: '储位名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},
         {name: 'roomNo', text: '库区编号', type: 'string'},
         {name: 'channelNo', text: '通道编号', type: 'string'},
         {name: 'categoryNo', text: '物料大类(类别编号)', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });