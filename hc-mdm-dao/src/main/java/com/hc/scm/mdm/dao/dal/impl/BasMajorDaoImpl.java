package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasMajorDao;
import com.hc.scm.mdm.dao.mapper.BasMajorMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
@Repository("basMajorDao")
class BasMajorDaoImpl extends BaseCrudDaoImpl implements BasMajorDao {
    @Resource
    private BasMajorMapper basMajorMapper;

    @Override
    public BaseCrudMapper init() {
        return basMajorMapper;
    }
}