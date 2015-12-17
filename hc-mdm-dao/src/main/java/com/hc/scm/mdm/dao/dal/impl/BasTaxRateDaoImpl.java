package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasTaxRateDao;
import com.hc.scm.mdm.dao.mapper.BasTaxRateMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:52:50
 * @version 1.0.0
 */
@Service("basTaxRateDao")
class BasTaxRateDaoImpl extends BaseCrudDaoImpl implements BasTaxRateDao {
    @Resource
    private BasTaxRateMapper basTaxRateMapper;

    @Override
    public BaseCrudMapper init() {
        return basTaxRateMapper;
    }
}