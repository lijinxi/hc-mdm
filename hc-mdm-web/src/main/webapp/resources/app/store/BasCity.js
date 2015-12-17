/**
 * Description: 公用行政市store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-30 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.store.BasCity',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCity',

    model:'Hc_mdm.model.BasCity',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_city/listAll.json?enableFlag=1'    
    }
});
