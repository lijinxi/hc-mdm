package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasSupplyCategoryDao;
import com.hc.scm.mdm.service.BasSupplyCategoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-15 16:18:21
 * @version 1.0.0
 */
@Service("basSupplyCategoryService")
class BasSupplyCategoryServiceImpl extends BaseCrudServiceImpl implements BasSupplyCategoryService {
    @Resource
    private BasSupplyCategoryDao basSupplyCategoryDao;

    @Override
    public BaseCrudDao init() {
        return basSupplyCategoryDao;
    }
}