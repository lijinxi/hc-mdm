/**
 * Description: 会计期间信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasAccountPeriod', {
    extend: 'Ext.data.Model',
    alias: 'model.basaccountperiod',
    fields: [
        {name: 'accountYearMonth', text: '会计年月', type: 'string'},
        {name: 'beginDate', text: '开始日期', type: 'string'},
        {name: 'endDate', text: '结束日期', type: 'string'},
        {name: 'orderNo', text: '排列序号', type: 'string'},
        {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'string'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间', type: 'string'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间', type: 'string'},
        {name: 'remarks', text: '备注', type: 'string'}
    ]
});