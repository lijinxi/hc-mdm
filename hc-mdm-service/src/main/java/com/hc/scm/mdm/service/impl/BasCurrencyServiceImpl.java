package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCurrencyDao;
import com.hc.scm.mdm.service.BasCurrencyService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 币别维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:41:10
 * @version 1.0.0
 */
@Service("basCurrencyService")
class BasCurrencyServiceImpl extends BaseCrudServiceImpl implements BasCurrencyService {
    @Resource
    private BasCurrencyDao basCurrencyDao;

    @Override
    public BaseCrudDao init() {
        return basCurrencyDao;
    }
}