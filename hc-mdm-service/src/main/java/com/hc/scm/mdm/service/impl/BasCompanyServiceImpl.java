package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCompanyDao;
import com.hc.scm.mdm.service.BasCompanyService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-12 10:42:02
 * @version 1.0.0
 */
@Service("basCompanyService")
class BasCompanyServiceImpl extends BaseCrudServiceImpl implements BasCompanyService {
    @Resource
    private BasCompanyDao basCompanyDao;

    @Override
    public BaseCrudDao init() {
        return basCompanyDao;
    }
}