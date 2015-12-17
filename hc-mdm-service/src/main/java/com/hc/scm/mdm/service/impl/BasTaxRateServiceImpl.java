package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasTaxRateDao;
import com.hc.scm.mdm.service.BasTaxRateService;
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
@Service("basTaxRateService")
class BasTaxRateServiceImpl extends BaseCrudServiceImpl implements BasTaxRateService {
    @Resource
    private BasTaxRateDao basTaxRateDao;

    @Override
    public BaseCrudDao init() {
        return basTaxRateDao;
    }
}