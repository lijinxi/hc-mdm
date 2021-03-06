package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasBrandRelationDao;
import com.hc.scm.mdm.dao.mapper.BasBrandRelationMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
@Service("basBrandRelationDao")
class BasBrandRelationDaoImpl extends BaseCrudDaoImpl implements BasBrandRelationDao {
    @Resource
    private BasBrandRelationMapper basBrandRelationMapper;

    @Override
    public BaseCrudMapper init() {
        return basBrandRelationMapper;
    }
}