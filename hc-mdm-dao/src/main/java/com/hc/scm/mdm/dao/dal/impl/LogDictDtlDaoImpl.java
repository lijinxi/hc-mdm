package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.LogDictDtlDao;
import com.hc.scm.mdm.dao.mapper.LogDictDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-08 09:34:20
 * @version 1.0.0
 */
@Repository("logDictDtlDao")
class LogDictDtlDaoImpl extends BaseCrudDaoImpl implements LogDictDtlDao {
    @Resource
    private LogDictDtlMapper logDictDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return logDictDtlMapper;
    }
}