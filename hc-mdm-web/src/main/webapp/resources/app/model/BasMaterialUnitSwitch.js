/**
 * Description: 物料单位转换表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:55:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMaterialUnitSwitch', {
    extend: 'Ext.data.Model',
    alias: 'model.basmaterialunitswitch',
     fields: [
         {name: 'switchId', text: '转换编号', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'unitNoA', text: 'a单位编号', type: 'string'},
         {name: 'unitNoB', text: 'b单位编号', type: 'string'},
         {name: 'qtyA', text: 'a单位数量', type: 'float'},
         {name: 'qtyB', text: 'b单位数量', type: 'float'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:'1'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
   
  });