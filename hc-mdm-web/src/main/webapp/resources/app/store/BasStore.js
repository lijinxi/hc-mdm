/**
 * Description: 公用仓库store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-29 
 */
Ext.define('Hc_mdm.store.BasStore',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStore',

    model:'Hc_mdm.model.BasStore',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store/listAll.json'    
    }
});