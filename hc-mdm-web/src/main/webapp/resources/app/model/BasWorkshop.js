/**
 * Description: 工作中心(车间)信息表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:24
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasWorkshop', {
    extend: 'Ext.data.Model',
    alias: 'model.basworkshop',
     fields: [
         {name: 'workshopNo', text: '工作中心编号', type: 'string'},
         {name: 'workshopName', text: '工作中心名称', type: 'string'},
         {name: 'companyNo', text: '公司', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'workshopType', text: '工作中心类型(数据字典 workshop_type )', type: 'string'},
         {name: 'workshopLeader', text: '工作中心负责人', type: 'string'},
         {name: 'deptNo', text: '部门编号(对应HR部门)', type: 'int',allowNull:true},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });