package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasTaxCategoryDao;
import com.hc.scm.mdm.service.BasTaxCategoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:51:57
 * @version 1.0.0
 */
@Service("basTaxCatagoryService")
class BasTaxCategoryServiceImpl extends BaseCrudServiceImpl implements BasTaxCategoryService {
    @Resource
    private BasTaxCategoryDao basTaxCatagoryDao;

    @Override
    public BaseCrudDao init() {
        return basTaxCatagoryDao;
    }
}