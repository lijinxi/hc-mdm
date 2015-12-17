package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCityDao;
import com.hc.scm.mdm.service.BasCityService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:35
 * @version 1.0.0
 */
@Service("basCityService")
class BasCityServiceImpl extends BaseCrudServiceImpl implements BasCityService {
    @Resource
    private BasCityDao basCityDao;

    @Override
    public BaseCrudDao init() {
        return basCityDao;
    }
}