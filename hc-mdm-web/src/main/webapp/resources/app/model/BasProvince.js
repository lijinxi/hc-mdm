/**
 * Description: 行政省信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:56:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasProvince', {
    extend: 'Ext.data.Model',
    alias: 'model.basprovince',
     fields: [
         {name: 'provinceNo', text: '行政省编号', type: 'string'},
         {name: 'provinceName', text: '行政省名称', type: 'string'},
         {name: 'provinceLname', text: '行政省详细名称', type: 'string'},
         {name: 'provinceOpcode', text: '行政省特征码', type: 'string'},
         {name: 'countryNo', text: '国家编号', type: 'string'},
         {name: 'directControlled', text: '是否直辖市', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });