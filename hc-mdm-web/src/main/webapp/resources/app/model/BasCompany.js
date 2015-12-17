/**
 * Description: 公司信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:24:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCompany', {
    extend: 'Ext.data.Model',
    alias: 'model.bascompany',
     fields: [
         {name: 'companyNo', text: '公司编号', type: 'string'},
         {name: 'companyName', text: '公司名称', type: 'string'},
         {name: 'companyType', text: '公司类型(0=法人组织 1=利润中心)', type: 'int',defaultValue:1},
         {name: 'companyForm', text: '公司形态(数据字典 company_form )', type: 'string',defaultValue:'公司'},
         {name: 'regionNo', text: '地区编号', type: 'string'},
         {name: 'bankName', text: '开户银行', type: 'string'},
         {name: 'bankAccountCode', text: '银行账号', type: 'string'},
         {name: 'bankAccountName', text: '银行账户名', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'taxpayingNo', text: '税务登记号', type: 'string'},
         {name: 'taxLevel', text: '纳税级别(0=一般纳税人 1=小规模纳税人)', type: 'int'},
         {name: 'legalPerson', text: '法人代表', type: 'string'},
         {name: 'certificateCode', text: '营业证号', type: 'string'},
         {name: 'faxNo', text: '传真号', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'postCode', text: '邮政编码', type: 'string'},
         {name: 'provinceNo', text: '行政省编号', type: 'string'},
         {name: 'cityNo', text: '行政市编号', type: 'string'},
         {name: 'countyNo', text: '行政县编号', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'businessFunctions', text: '业务职能(2的倍数，每一位代表一项)', type: 'int'},
         {name: 'dataSource', text: '数据来源(0=主数据 1=工厂)', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });