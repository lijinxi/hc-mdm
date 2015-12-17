package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCountyDao;
import com.hc.scm.mdm.service.BasCountyService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:42
 * @version 1.0.0
 */
@Service("basCountyService")
class BasCountyServiceImpl extends BaseCrudServiceImpl implements BasCountyService {
    @Resource
    private BasCountyDao basCountyDao;

    @Override
    public BaseCrudDao init() {
        return basCountyDao;
    }
}