package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasStyleDao;
import com.hc.scm.mdm.service.BasStyleService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 17:25:26
 * @version 1.0.0
 */
@Service("basStyleService")
class BasStyleServiceImpl extends BaseCrudServiceImpl implements BasStyleService {
    @Resource
    private BasStyleDao basStyleDao;

    @Override
    public BaseCrudDao init() {
        return basStyleDao;
    }
}