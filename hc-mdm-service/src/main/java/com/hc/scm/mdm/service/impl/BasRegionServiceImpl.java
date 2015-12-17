package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.service.BasRegionService;
import com.hc.scm.mdm.dao.dal.BasRegionDao;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 17:13:47
 * @version 1.0.0
 */
@Service("basRegionService")
class BasRegionServiceImpl extends BaseCrudServiceImpl implements BasRegionService {
    @Resource
    private BasRegionDao basRegionDao;

    @Override
    public BaseCrudDao init() {
        return basRegionDao;
    }
}