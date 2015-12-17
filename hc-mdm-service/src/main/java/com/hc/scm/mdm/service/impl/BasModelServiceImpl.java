package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasModelDao;
import com.hc.scm.mdm.service.BasModelService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 17:25:26
 * @version 1.0.0
 */
@Service("basModelService")
class BasModelServiceImpl extends BaseCrudServiceImpl implements BasModelService {
    @Resource
    private BasModelDao basModelDao;

    @Override
    public BaseCrudDao init() {
        return basModelDao;
    }
}