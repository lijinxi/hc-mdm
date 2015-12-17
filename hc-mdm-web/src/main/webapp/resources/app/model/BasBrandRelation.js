/**
 * Description: 品牌关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBrandRelation', {
    extend: 'Ext.data.Model',
    alias: 'model.basbrandrelation',
     fields: [
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'companyNo', text: '公司编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
    
  });