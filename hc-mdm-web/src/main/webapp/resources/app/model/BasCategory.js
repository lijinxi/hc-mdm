/**
 * Description: 类别信息表(来源于集团主数据 pro_category )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.bascategory',
     fields: [
         {name: 'categoryId', text: '类别id', type: 'int'},
         {name: 'categoryNo', text: '类别编号', type: 'string'},
         {name: 'categoryName', text: '类别名称', type: 'string'},
         {name: 'specialCode', text: '特征码', type: 'string'},
         {name: 'parentCategoryId', text: '上级类别', type: 'int'},
         {name: 'levelNo', text: '类别级别', type: 'int'},
         {name: 'searchCode', text: '类别路径', type: 'string'},
         {name: 'affiliation', text: '本部编码', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
    idProperty: 'categoryId',
    identifier: 'negative'
  });