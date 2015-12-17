package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCustomerDao;
import com.hc.scm.mdm.service.BasCustomerService;
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
@Service("basCustomerService")
class BasCustomerServiceImpl extends BaseCrudServiceImpl implements BasCustomerService {
    @Resource
    private BasCustomerDao basCustomerDao;

    @Override
    public BaseCrudDao init() {
        return basCustomerDao;
    }
}