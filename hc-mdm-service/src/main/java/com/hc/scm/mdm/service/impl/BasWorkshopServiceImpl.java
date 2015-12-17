package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasWorkshopDao;
import com.hc.scm.mdm.service.BasWorkshopService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:23
 * @version 1.0.0
 */
@Service("basWorkshopService")
class BasWorkshopServiceImpl extends BaseCrudServiceImpl implements BasWorkshopService {
    @Resource
    private BasWorkshopDao basWorkshopDao;

    @Override
    public BaseCrudDao init() {
        return basWorkshopDao;
    }
}