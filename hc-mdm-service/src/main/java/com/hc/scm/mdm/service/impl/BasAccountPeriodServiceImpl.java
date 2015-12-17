package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasAccountPeriodDao;
import com.hc.scm.mdm.service.BasAccountPeriodService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
@Service("basAccountPeriodService")
class BasAccountPeriodServiceImpl extends BaseCrudServiceImpl implements BasAccountPeriodService {
    @Resource
    private BasAccountPeriodDao basAccountPeriodDao;

    @Override
    public BaseCrudDao init() {
        return basAccountPeriodDao;
    }
}