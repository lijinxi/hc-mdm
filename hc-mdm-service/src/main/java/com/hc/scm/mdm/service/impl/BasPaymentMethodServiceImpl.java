package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasPaymentMethodDao;
import com.hc.scm.mdm.service.BasPaymentMethodService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-16 16:33:59
 * @version 1.0.0
 */
@Service("basPaymentMethodService")
class BasPaymentMethodServiceImpl extends BaseCrudServiceImpl implements BasPaymentMethodService {
    @Resource
    private BasPaymentMethodDao basPaymentMethodDao;

    @Override
    public BaseCrudDao init() {
        return basPaymentMethodDao;
    }
}