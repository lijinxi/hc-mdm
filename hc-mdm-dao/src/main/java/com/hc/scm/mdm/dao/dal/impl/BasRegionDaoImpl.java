package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasRegionDao;
import com.hc.scm.mdm.dao.mapper.BasRegionMapper;
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
@Service("basRegionDao")
class BasRegionDaoImpl extends BaseCrudDaoImpl implements BasRegionDao {
    @Resource
    private BasRegionMapper basRegionMapper;

    @Override
    public BaseCrudMapper init() {
        return basRegionMapper;
    }
}