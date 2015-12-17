package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasSupplierSupplyCategoryDao;
import com.hc.scm.mdm.service.BasSupplierSupplyCategoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:36:57
 * @version 1.0.0
 */
@Service("basSupplierSupplyCategoryService")
class BasSupplierSupplyCategoryServiceImpl extends BaseCrudServiceImpl implements BasSupplierSupplyCategoryService {
    @Resource
    private BasSupplierSupplyCategoryDao basSupplierSupplyCategoryDao;

    @Override
    public BaseCrudDao init() {
        return basSupplierSupplyCategoryDao;
    }
}