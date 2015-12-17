package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasFactoryDao;
import com.hc.scm.mdm.service.BasFactoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:07
 * @version 1.0.0
 */
@Service("basFactoryService")
class BasFactoryServiceImpl extends BaseCrudServiceImpl implements BasFactoryService {
    @Resource
    private BasFactoryDao basFactoryDao;

    @Override
    public BaseCrudDao init() {
        return basFactoryDao;
    }
}