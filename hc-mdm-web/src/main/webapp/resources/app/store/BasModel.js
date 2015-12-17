/**
 * Description: 型体store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasModel',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasModel',

    model:'Hc_mdm.model.BasModel',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_model/listAll.json'    
    }
});
