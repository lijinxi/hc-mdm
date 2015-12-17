/**
 * Description: 小类store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasCategory',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCategory',

    model:'Hc_mdm.model.BasCategory',
    proxy: {
        url: Hc.mdmPath+'bill_material_dtl/getCategory.json'  
    }
});
