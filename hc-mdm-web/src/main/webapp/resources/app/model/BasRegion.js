/**
 * Description: 地区信息表(来源于集团主数据 org_organ_region )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 18:09:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasRegion', {
    extend: 'Ext.data.Model',
    alias: 'model.basregion',
     fields: [
         {name: 'regionId', text: '地区ID', type: 'int'},
         {name: 'regionNo', text: '地区编号', type: 'string'},
         {name: 'regionCode', text: '地区编码', type: 'string'},
         {name: 'regionName', text: '地区名称', type: 'string'},
         {name: 'countryNo', text: '国家编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用 2=作废)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });