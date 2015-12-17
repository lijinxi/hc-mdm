/**
 * Description: 款号store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasStyle',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStyle',

    model:'Hc_mdm.model.BasStyle',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_style/listAll.json'    
    }
});
