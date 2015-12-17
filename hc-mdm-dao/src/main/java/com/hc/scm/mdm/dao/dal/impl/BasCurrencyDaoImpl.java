package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCurrencyDao;
import com.hc.scm.mdm.dao.mapper.BasCurrencyMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 币别维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:41:10
 * @version 1.0.0
 */
@Service("basCurrencyDao")
class BasCurrencyDaoImpl extends BaseCrudDaoImpl implements BasCurrencyDao {
    @Resource
    private BasCurrencyMapper basCurrencyMapper;

    @Override
    public BaseCrudMapper init() {
        return basCurrencyMapper;
    }
}