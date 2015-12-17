package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasModelDao;
import com.hc.scm.mdm.dao.mapper.BasModelMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 17:25:26
 * @version 1.0.0
 */
@Repository("basModelDao")
class BasModelDaoImpl extends BaseCrudDaoImpl implements BasModelDao {
    @Resource
    private BasModelMapper basModelMapper;

    @Override
    public BaseCrudMapper init() {
        return basModelMapper;
    }
}