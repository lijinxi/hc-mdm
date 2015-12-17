/**
 * Description: 公用国家store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-15 
 */
Ext.define('Hc_mdm.store.BasCountry',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCountry',

    model:'Hc_mdm.model.BasCountry',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_country/listAll.json?enableFlag=1'    
    }
});
