package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasTaxCategoryDao;
import com.hc.scm.mdm.dao.mapper.BasTaxCategoryMapper;
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
@Service("basTaxCatagoryDao")
class BasTaxCategoryDaoImpl extends BaseCrudDaoImpl implements BasTaxCategoryDao {
    @Resource
    private BasTaxCategoryMapper basTaxCatagoryMapper;

    @Override
    public BaseCrudMapper init() {
        return basTaxCatagoryMapper;
    }
}