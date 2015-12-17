/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasColor', {
    extend: 'Ext.data.Model',
    alias: 'model.bascolor',

     fields: [
         {name: 'colorId', text: '颜色id(对应 color_id )', type: 'int'},
         {name: 'colorNo', text: '颜色编号(对应 color_no )', type: 'string'},
         {name: 'colorCode', text: '颜色编码(对应 color_code )', type: 'string'},
         {name: 'colorName', text: '颜色名称(对应 color_name )', type: 'string'},
         {name: 'colorSeriesCode', text: '色系编码(对应 color_series_no )', type: 'string'},
         {name: 'colorSeriesName', text: '色系名称(对应 color_series_name )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'},
         ]
  });