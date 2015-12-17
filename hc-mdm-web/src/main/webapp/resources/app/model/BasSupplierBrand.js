/**
 * Description: 供应商使用品牌(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-31 14:31:22
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplierBrand', {
    extend: 'Ext.data.Model',
    alias: 'model.bassupplierbrand',
     fields: [
         {name: 'brandId', text: '使用组织id', type: 'int'},
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]  
  });