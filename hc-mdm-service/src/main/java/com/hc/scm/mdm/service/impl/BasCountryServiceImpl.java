package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCountryDao;
import com.hc.scm.mdm.service.BasCountryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 国家维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:16:04
 * @version 1.0.0
 */
@Service("basCountryService")
class BasCountryServiceImpl extends BaseCrudServiceImpl implements BasCountryService {
    @Resource
    private BasCountryDao basCountryDao;

    @Override
    public BaseCrudDao init() {
        return basCountryDao;
    }
}