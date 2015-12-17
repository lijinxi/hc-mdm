/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-13 18:25:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStyle', {
    extend: 'Ext.data.Model',
    alias: 'model.basstyle',
     fields: [
         {name: 'styleId', text: '款号id', type: 'int'},
         {name: 'modelNo', text: '形体编码', type: 'string'},
         {name: 'styleNo', text: '款号编码', type: 'string'},
         {name: 'styleName', text: '款号名称', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]    
  });