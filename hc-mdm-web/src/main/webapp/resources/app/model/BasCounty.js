/**
 * Description: 行政县信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:43
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCounty', {
    extend: 'Ext.data.Model',
    alias: 'model.bascounty',
     fields: [
         {name: 'countyNo', text: '行政县编号', type: 'string'},
         {name: 'countyName', text: '行政县名称', type: 'string'},
         {name: 'countyLname', text: '行政县详细名称', type: 'string'},
         {name: 'countyOpcode', text: '行政县特征码(2位字母或数字,同城市下不可以重复)', type: 'string'},
         {name: 'cityNo', text: '所属行政市编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });