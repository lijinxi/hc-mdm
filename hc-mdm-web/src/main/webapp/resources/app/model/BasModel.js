/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-13 09:48:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasModel', {
    extend: 'Ext.data.Model',
    alias: 'model.basmodel',
     fields: [
         {name: 'modelId', text: '型体id', type: 'string'},
         {name: 'modelNo', text: '型体编码', type: 'string'},
         {name: 'modelName', text: '型体名称', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  
  });