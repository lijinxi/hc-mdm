package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasFactoryDao;
import com.hc.scm.mdm.dao.mapper.BasFactoryMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:07
 * @version 1.0.0
 */
@Service("basFactoryDao")
class BasFactoryDaoImpl extends BaseCrudDaoImpl implements BasFactoryDao {
    @Resource
    private BasFactoryMapper basFactoryMapper;

    @Override
    public BaseCrudMapper init() {
        return basFactoryMapper;
    }
}