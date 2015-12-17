package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.LogDictDao;
import com.hc.scm.mdm.dao.mapper.LogDictMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-08 09:34:19
 * @version 1.0.0
 */
@Repository("logDictDao")
class LogDictDaoImpl extends BaseCrudDaoImpl implements LogDictDao {
    @Resource
    private LogDictMapper logDictMapper;

    @Override
    public BaseCrudMapper init() {
        return logDictMapper;
    }
}