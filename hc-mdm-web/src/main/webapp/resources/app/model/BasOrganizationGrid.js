/**
 * Description: 组织试图-grid(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-01 14:40:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasOrganizationGrid', {
    extend: 'Ext.data.Model',
    alias: 'model.BasOrganizationGrid',
     fields: [
         {name: 'orgNo', text: '编号', type: 'string'},
         {name: 'orgName', text: '名称', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });