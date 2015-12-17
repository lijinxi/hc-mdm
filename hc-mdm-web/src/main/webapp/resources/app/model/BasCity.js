/**
 * Description: 行政市信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCity', {
    extend: 'Ext.data.Model',
    alias: 'model.bascity',
     fields: [
         {name: 'cityNo', text: '行政市编号', type: 'string'},
         {name: 'cityName', text: '行政市名称', type: 'string'},
         {name: 'cityLname', text: '行政市详细名称', type: 'string'},
         {name: 'cityOpcode', text: '行政市特征码(3位字母或数字,同省下不可以重复)', type: 'string',defaultValue:'---'},
         {name: 'provinceNo', text: '所属行政省编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });