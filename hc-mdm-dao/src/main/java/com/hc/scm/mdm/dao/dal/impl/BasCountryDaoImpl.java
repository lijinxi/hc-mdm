package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCountryDao;
import com.hc.scm.mdm.dao.mapper.BasCountryMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 国家维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:16:04
 * @version 1.0.0
 */
@Service("basCountryDao")
class BasCountryDaoImpl extends BaseCrudDaoImpl implements BasCountryDao {
    @Resource
    private BasCountryMapper basCountryMapper;

    @Override
    public BaseCrudMapper init() {
        return basCountryMapper;
    }
}