package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.LogDictDtlDao;
import com.hc.scm.mdm.service.LogDictDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-08 09:34:20
 * @version 1.0.0
 */
@Service("logDictDtlService")
class LogDictDtlServiceImpl extends BaseCrudServiceImpl implements LogDictDtlService {
    @Resource
    private LogDictDtlDao logDictDtlDao;

    @Override
    public BaseCrudDao init() {
        return logDictDtlDao;
    }
}