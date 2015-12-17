package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasMajorDao;
import com.hc.scm.mdm.service.BasMajorService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
@Service("basMajorService")
class BasMajorServiceImpl extends BaseCrudServiceImpl implements BasMajorService {
    @Resource
    private BasMajorDao basMajorDao;

    @Override
    public BaseCrudDao init() {
        return basMajorDao;
    }
}