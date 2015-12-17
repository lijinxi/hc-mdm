/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-18 08:59:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCustomer', {
    extend: 'Ext.data.Model',
    alias: 'model.bascustomer',
     fields: [
         {name: 'customerNo', text: '客户编号', type: 'string'},
         {name: 'customerCode', text: '客户编码', type: 'string'},
         {name: 'customerName', text: '客户简称', type: 'string'},
         {name: 'customerLname', text: '客户全称', type: 'string'},
         {name: 'customerType', text: '客户类型', type: 'string'},
         {name: 'customerLevel', text: '客户等级', type: 'string'},
         {name: 'customerGroup', text: '客户群组', type: 'string'},
         {name: 'regionNo', text: '地区编码', type: 'string'},
         {name: 'managingCityNo', text: '管理城市编码', type: 'string'},
         {name: 'bankName', text: '开户银行', type: 'string'},
         {name: 'bankAccountCode', text: '银行账号', type: 'string'},
         {name: 'bankAccountName', text: '银行账户名', type: 'string'},
         {name: 'taxpayingNo', text: '税务登记号', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'provinceNo', text: '行政省编号', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'currencyNo', text: '币别', type: 'string'},
         {name: 'paymentClauseNo', text: '收款条件编号', type: 'string'},
         {name: 'paymentMethodNo', text: '结算方式编号', type: 'string'},
         {name: 'combineBill', text: '合并发票(0=是 1=否)', type: 'int'},
         {name: 'summaryBill', text: '汇总开票(1=同一订单 2=同一付款人)', type: 'int',defaultValue:1},
         {name: 'independentBill', text: '独立发票(0=不 1=每个地址 2=每个发货通知)', type: 'int'},
         {name: 'exchangeRateType', text: '汇率类型(1=通用费率)', type: 'int',defaultValue:1},
         {name: 'taxRateNo', text: '增值税(数据取bas_tax_rate表，通过字段is_added_tax是否增值税区别)', type: 'string'},
         {name: 'countryNo', text: '国家', type: 'string'},
         {name: 'language', text: '语言', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 2=作废 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });