/**
 * Description: 送货地点表(来源于集团主数据仓库表 org_storage )(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDeliveryPoint', {
    extend: 'Ext.data.Model',
    alias: 'model.basdeliverypoint',
     fields: [
         {name: 'pointId', text: '送货地点ID(对应 storage_id )', type: 'int'},
         {name: 'pointNo', text: '送货地点编号(对应 storage_no )', type: 'string'},
         {name: 'pointCode', text: '送货地点编码(对应 storage_code )', type: 'string'},
         {name: 'pointName', text: '送货地点名称(对应 storage_name )', type: 'string'},
         {name: 'provinceNo', text: '行政省编号(对应 province_no )', type: 'string'},
         {name: 'cityNo', text: '行政市编号(对应 city_no )', type: 'string'},
         {name: 'countyNo', text: '行政县编号(对应 county_no )', type: 'string'},
         {name: 'regionNo', text: '地区编码(对应 region_no )', type: 'string'},
         {name: 'businessCityNo', text: '经营城市编号(对应 business_city_no )', type: 'string'},
         {name: 'storageType', text: '仓库类型(对应 storage_type )', type: 'string'},
         {name: 'storageLevel', text: '仓库级别(对应 storage_level )', type: 'string'},
         {name: 'areaTotal', text: '总面积(对应 area_total )', type: 'number'},
         {name: 'contacter', text: '联系人(对应 contact )', type: 'string'},
         {name: 'phoneNo', text: '电话(对应 telno )', type: 'string'},
         {name: 'mobileNo', text: '手机(对应 mobile_phone )', type: 'string'},
         {name: 'contactAddress', text: '联系地址(对应 address )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 2=作废 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'},
         ]
  });