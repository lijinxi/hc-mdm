/**
 * Description: 公用库区store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-30 
 */
Ext.define('Hc_mdm.store.BasStoreRoom',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStoreRoom',

    model:'Hc_mdm.model.BasStoreRoom',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store_room/listAll.json'    
    }
});