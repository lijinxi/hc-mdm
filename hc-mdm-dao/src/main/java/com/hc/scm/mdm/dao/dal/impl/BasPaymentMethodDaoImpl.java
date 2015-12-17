package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasPaymentMethodDao;
import com.hc.scm.mdm.dao.mapper.BasPaymentMethodMapper;
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
@Service("basPaymentMethodDao")
class BasPaymentMethodDaoImpl extends BaseCrudDaoImpl implements BasPaymentMethodDao {
    @Resource
    private BasPaymentMethodMapper basPaymentMethodMapper;

    @Override
    public BaseCrudMapper init() {
        return basPaymentMethodMapper;
    }
}