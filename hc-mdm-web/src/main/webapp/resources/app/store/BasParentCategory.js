/**
 * Description: 大类store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasParentCategory',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasParentCategory',

    model:'Hc_mdm.model.BasCategory',
    proxy: {
        //url: Hc.mdmPath+'bill_material_dtl/getParentCategory.json?levelNo=1'
        //url:Hc.mdmPath + 'bas_category/listAll.json?parentCategoryId=1'
    	url:Hc.mdmPath + 'bas_major/listvo.json'
    }
});
