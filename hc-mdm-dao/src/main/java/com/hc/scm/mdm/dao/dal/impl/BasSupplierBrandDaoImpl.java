package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasSupplierBrandDao;
import com.hc.scm.mdm.dao.mapper.BasSupplierBrandMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
@Service("basSupplierBrandDao")
class BasSupplierBrandDaoImpl extends BaseCrudDaoImpl implements BasSupplierBrandDao {
    @Resource
    private BasSupplierBrandMapper basSupplierBrandMapper;

    @Override
    public BaseCrudMapper init() {
        return basSupplierBrandMapper;
    }
}