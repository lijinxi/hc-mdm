/**
 * Description: 供应商信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-23 15:10:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplier', {
    extend: 'Ext.data.Model',
    alias: 'model.bassupplier',
     fields: [
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'supplierName', text: '供应商名称', type: 'string'},
         {name: 'supplierSname', text: '供应商简称', type: 'string'},
         {name: 'supplierAddress', text: '供应商地址', type: 'string'},
         {name: 'countryNo', text: '国家代码', type: 'string'},
         {name: 'provinceNo', text: '省编号', type: 'string'},
         {name: 'postcodeNo', text: '邮政编码', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'phoneNo', text: '电话号码', type: 'string'},
         {name: 'faxNo', text: '传真号码', type: 'string'},
         {name: 'email', text: '邮件地址', type: 'string'},
         {name: 'website', text: '公司网站', type: 'string'},
         {name: 'supplierType', text: '供应商类型(供应商状态 supplier_type)', type: 'string'},
         {name: 'supplierStatus', text: '供应商状态(供应商状态 supplier_status)', type: 'string'},
         {name: 'factoryType', text: '厂商类别(取数据字典factory_type)', type: 'string'},
         {name: 'fixInDivision', text: '固定使用组织(0=否 1=是)', type: 'int'},
         {name: 'currencyNo', text: '订单币种(币别编号)', type: 'string'},
         {name: 'paymentClauseNo', text: '付款条件(bas_payment_clause)', type: 'string'},
         {name: 'paymentMethodNo', text: '付款方式(bas_payment_method)', type: 'string'},
         {name: 'taxpayingNo', text: '税务登记号', type: 'string'},
         {name: 'addRateNo', text: '增值税登记号', type: 'string'},
         {name: 'invoiceType', text: '发票类型(取自数据字典 invoice_type)', type: 'string'},
         {name: 'taxRateNo', text: '默认税率(bas_tax_rate)', type: 'string'},
         {name: 'financeAddress', text: '财务信函地址', type: 'string'},
         {name: 'lastInvoiceDate', text: '最近发票日期', type: 'date'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });