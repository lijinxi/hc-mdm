/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basmajor.BasMajorModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basmajor',
    stores: {
    	commonstore:{
   			model:'Hc_mdm.model.BasMajor',
    		proxy: {
    		url: Hc.IntegPath + 'rest/bas_major/list.json'
    		}
   		 }
    }
  });