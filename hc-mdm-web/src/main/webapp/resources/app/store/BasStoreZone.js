/**
 * Description: 公用仓区store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-29 
 */
Ext.define('Hc_mdm.store.BasStoreZone',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStoreZone',

    model:'Hc_mdm.model.BasStoreZone',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store_zone/listAll.json'    
    }
});