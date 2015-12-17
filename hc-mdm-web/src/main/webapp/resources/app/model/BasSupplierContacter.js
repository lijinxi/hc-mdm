/**
 * Description: 供应商联系人信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplierContacter', {
    extend: 'Ext.data.Model',
    alias: 'model.bassuppliercontacter',
     fields: [
         {name: 'contacterId', text: '联系人id', type: 'int'},
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'contacterCalled', text: '联系人称呼(取数据字典 contacter_called)', type: 'string'},
         {name: 'contacterName', text: '联系人姓名', type: 'string'},
         {name: 'contacterDept', text: '联系人部门(取数据字典 contacter_dept)', type: 'string'},
         {name: 'contacterDuty', text: '联系人职务(取数据字典 contacter_duty)', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'phoneNo', text: '电话号码', type: 'string'},
         {name: 'faxNo', text: '传真号码', type: 'string'},
         {name: 'email', text: '邮件地址', type: 'string'},
         {name: 'isDefault', text: '是否默认联系人(0=否 1=是)', type: 'int'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });