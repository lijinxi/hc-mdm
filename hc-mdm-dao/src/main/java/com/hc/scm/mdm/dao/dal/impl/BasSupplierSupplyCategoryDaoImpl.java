package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasSupplierSupplyCategoryDao;
import com.hc.scm.mdm.dao.mapper.BasSupplierSupplyCategoryMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:36:57
 * @version 1.0.0
 */
@Repository("basSupplierSupplyCategoryDao")
class BasSupplierSupplyCategoryDaoImpl extends BaseCrudDaoImpl implements BasSupplierSupplyCategoryDao {
    @Resource
    private BasSupplierSupplyCategoryMapper basSupplierSupplyCategoryMapper;

    @Override
    public BaseCrudMapper init() {
        return basSupplierSupplyCategoryMapper;
    }
}