package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCustomerDao;
import com.hc.scm.mdm.dao.mapper.BasCustomerMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 08:32:43
 * @version 1.0.0
 */
@Service("basCustomerDao")
class BasCustomerDaoImpl extends BaseCrudDaoImpl implements BasCustomerDao {
    @Resource
    private BasCustomerMapper basCustomerMapper;

    @Override
    public BaseCrudMapper init() {
        return basCustomerMapper;
    }
}