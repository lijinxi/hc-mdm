package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasSupplyCategoryDao;
import com.hc.scm.mdm.dao.mapper.BasSupplyCategoryMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-15 16:18:21
 * @version 1.0.0
 */
@Repository("basSupplyCategoryDao")
class BasSupplyCategoryDaoImpl extends BaseCrudDaoImpl implements BasSupplyCategoryDao {
    @Resource
    private BasSupplyCategoryMapper basSupplyCategoryMapper;

    @Override
    public BaseCrudMapper init() {
        return basSupplyCategoryMapper;
    }
}