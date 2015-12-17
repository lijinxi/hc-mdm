package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasStoreDao;
import com.hc.scm.mdm.service.BasStoreService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
@Service("basStoreService")
class BasStoreServiceImpl extends BaseCrudServiceImpl implements BasStoreService {
    @Resource
    private BasStoreDao basStoreDao;

    @Override
    public BaseCrudDao init() {
        return basStoreDao;
    }
}