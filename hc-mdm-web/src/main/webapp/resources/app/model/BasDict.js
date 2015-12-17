/**
 * Description: 数据字典主表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDict', {
    extend: 'Ext.data.Model',
    alias: 'model.basdict',
    fields: [
        {name: 'dictId', text: 'Id', type: 'string'},
        {name: 'dictCode', text: '字典编号', type: 'string'},
        {name: 'dictName', text: '字典名称', type: 'string'},
        {name: 'appNo', text: '应用代号', type: 'int'},
        {name: 'dictLevel', text: '层级', type: 'int'},
        {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间', type: 'string'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间', type: 'string'},
        {name: 'remarks', text: '备注', type: 'string'}
    ]
});