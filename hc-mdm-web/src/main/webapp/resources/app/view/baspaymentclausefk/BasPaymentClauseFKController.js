/**
 * Description: 收款条件信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentclausefk.BasPaymentClauseFKController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.baspaymentclausefk',
    
    onGridAfterEdit: function (editor, e) {
		var me = this;
        if (e.field == 'preferentialDays') {
        	var record = e.record;
        	var preferentialdays = record.get('preferentialDays');
        	var creditdays = record.get('creditDays');
            
            if (preferentialdays > creditdays) {
            	Ext.MessageBox.alert('提示', '优惠天数不能大于信用天数');
            	record.set('preferentialDays','');
				 return;
            }
            else return;
        }
        
   }
  });