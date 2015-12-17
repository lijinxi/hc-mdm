package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasPlaceDao;
import com.hc.scm.mdm.dao.mapper.BasPlaceMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 库位维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:55
 * @version 1.0.0
 */
@Service("basPlaceDao")
class BasPlaceDaoImpl extends BaseCrudDaoImpl implements BasPlaceDao {
    @Resource
    private BasPlaceMapper basPlaceMapper;

    @Override
    public BaseCrudMapper init() {
        return basPlaceMapper;
    }
}