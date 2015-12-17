/**
 * Description: 事业部信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:26:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDivision', {
    extend: 'Ext.data.Model',
    alias: 'model.basdivision',
     fields: [
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'divisionName', text: '事业部名称', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'faxNo', text: '传真号', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'postCode', text: '邮政编码', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });