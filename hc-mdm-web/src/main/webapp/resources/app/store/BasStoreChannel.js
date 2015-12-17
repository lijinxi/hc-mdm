/**
 * Description: 公用通道store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-30 
 */
Ext.define('Hc_mdm.store.BasStoreChannel',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStoreChannel',

    model:'Hc_mdm.model.BasStoreChannel',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store_channel/listAll.json'    
    }
});