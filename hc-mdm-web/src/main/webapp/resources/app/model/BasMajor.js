/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMajor', {
    extend: 'Ext.data.Model',
    alias: 'model.basmajor',
     fields: [
         {name: 'categoryNo', text: '', type: 'string'},
         {name: 'categoryId', text: '', type: 'int'},
         {name: 'categoryName', text: '', type: 'string'},
         {name: 'materialType', text: '', type: 'int'},
         {name: 'orderNo', text: '', type: 'int'},
         {name: 'creator', text: '', type: 'string'},
         {name: 'createTime', text: '', type: 'string'},
         {name: 'modifier', text: '', type: 'string'},
         {name: 'modifyTime', text: '', type: 'date'},
         {name: 'remarks', text: '', type: 'string'}
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });