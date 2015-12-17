package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasAccountPeriodDao;
import com.hc.scm.mdm.dao.mapper.BasAccountPeriodMapper;
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
@Service("basAccountPeriodDao")
class BasAccountPeriodDaoImpl extends BaseCrudDaoImpl implements BasAccountPeriodDao {
    @Resource
    private BasAccountPeriodMapper basAccountPeriodMapper;

    @Override
    public BaseCrudMapper init() {
        return basAccountPeriodMapper;
    }
}