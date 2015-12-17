/**
 * Description: 物料尺码表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMaterialSize', {
    extend: 'Ext.data.Model',
    alias: 'model.basmaterialsize',
     fields: [
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'barcode', text: '条码(产品货号+尺码=条码)', type: 'string'}
         ]
  });