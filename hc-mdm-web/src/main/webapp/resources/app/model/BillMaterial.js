/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillMaterial', {
    extend: 'Ext.data.Model',
    alias: 'model.billmaterial',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'maintainType', text: '维护类型(0=新建 1=修改)', type: 'int'},
         {name: 'materialType', text: '物料类型(0=成品/半成品 1=原料)', type: 'int'},
         {name: 'operator', text: '操作人', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'billStatus', text: '单据状态', type: 'int',defaultValue:'10'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });