/**
 * Description: 品牌信息表(来源于集团主数据 org_organ_brand、org_organ_brand_detail )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBrand', {
    extend: 'Ext.data.Model',
    alias: 'model.basbrand',
     fields: [
         {name: 'brandId', text: '品牌id', type: 'int'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'brandCode', text: '品牌编码', type: 'string'},
         {name: 'brandEname', text: '品牌英文名', type: 'string'},
         {name: 'brandCname', text: '品牌中文名', type: 'string'},
         {name: 'brandCategory', text: '品牌类别', type: 'string'},
         {name: 'brandUpperNo', text: '品牌部编号', type: 'string'},
         {name: 'specialCode', text: '特征码', type: 'string'},
         {name: 'affiliation', text: '本部编码', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });