/**
 * Description: 尺码类别信息表(来源于集团主数据 pro_size_attribute )(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSizeType', {
    extend: 'Ext.data.Model',
    alias: 'model.bassizetype',
     fields: [
         {name: 'sizeTypeId', text: '尺码类别id(对应 size_type_id )', type: 'int'},
         {name: 'sizeTypeNo', text: '尺码类别编号(对应 size_type_no )', type: 'string'},
         {name: 'sizeTypeCode', text: '尺码类别编码(对应 size_type_code )', type: 'string'},
         {name: 'sizeTypeName', text: '尺码类别名称(对应 size_type_name )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'}
         ]
});