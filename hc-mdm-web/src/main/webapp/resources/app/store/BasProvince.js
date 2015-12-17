/**
 * Description: 公用行政省store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-30 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.store.BasProvince',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasProvince',

    model:'Hc_mdm.model.BasProvince',
    proxy: {
        url: Hc.mdmPath+'bas_province/listAll.json?enableFlag=1'    
    }
});
