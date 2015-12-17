package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasStyleDao;
import com.hc.scm.mdm.dao.mapper.BasStyleMapper;
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
@Repository("basStyleDao")
class BasStyleDaoImpl extends BaseCrudDaoImpl implements BasStyleDao {
    @Resource
    private BasStyleMapper basStyleMapper;

    @Override
    public BaseCrudMapper init() {
        return basStyleMapper;
    }
}