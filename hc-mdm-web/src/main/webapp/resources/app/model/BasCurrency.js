/**
 * Description: 币别信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 15:29:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCurrency', {
    extend: 'Ext.data.Model',
    alias: 'model.bascurrency',
     fields: [
         {name: 'currencyNo', text: '币别编号', type: 'string'},
         {name: 'currencyName', text: '币别名称', type: 'string'},
         {name: 'currencySymbol', text: '币别符号', type: 'string'},
         {name: 'isSymbolDisplay', text: '是否显示符号(0=否 1=是)', type: 'int'},
         {name: 'fomart', text: '显示格式', type: 'string'},
         {name: 'priceDigits', text: '单价小数位数', type: 'int'},
         {name: 'valueDigits', text: '金额小数位数', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });