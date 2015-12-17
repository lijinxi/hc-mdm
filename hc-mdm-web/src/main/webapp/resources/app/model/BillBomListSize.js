/**
 * Description: BOM尺码替代表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      yu.jh
 * Createdate:  2015年4月23日上午11:22:26
 *
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 * 2015年4月23日     	yu.jh
 */
Ext.define('Hc_mdm.model.BillBomListSize', {
    extend: 'Hc_Common.model.MaterialSize',
    alias: 'model.billbomlistsize',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'orderNo', text: '序号', type: 'int'},
		 {name: 'materialNo', text: '物料编号', type: 'string'},
		 {name: 'materialCode', text: '物料编码', type: 'string'},
		 {name: 'materialName', text: '物料名称', type: 'string'},
		 {name: 'newSizeTypeNo', text: '清单码组', type: 'string'},
         {name: 'sizeTypeNo', text: '表头码组', type: 'string'},
         {name: 'oldSizeNo', text: '表头码编号', type: 'string'},
         {name: 'newSizeNo', text: '清单码编号', type: 'string'}
         ]
  });