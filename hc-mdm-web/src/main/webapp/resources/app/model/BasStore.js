/**
 * Description: 仓库信息表(来源于M3 MITWHL)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStore', {
    extend: 'Ext.data.Model',
    alias: 'model.basstore',
     fields: [
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'storeName', text: '仓库名称', type: 'string'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'storeType', text: '仓库类型(仓库属性 取数据字典 store_type)', type: 'string'},
         {name: 'isMaster', text: '是否主仓(0=否 1=是)', type: 'int',defaultValue:1},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });