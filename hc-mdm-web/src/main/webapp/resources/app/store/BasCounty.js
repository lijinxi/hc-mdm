/**
 * Description: 公用行政县store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-30 14:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.store.BasCounty',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCounty',

    model:'Hc_mdm.model.BasCounty',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_county/listAll.json?enableFlag=1'    
    }
});
