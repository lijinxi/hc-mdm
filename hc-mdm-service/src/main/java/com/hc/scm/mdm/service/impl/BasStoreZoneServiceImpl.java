package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasStoreZoneDao;
import com.hc.scm.mdm.service.BasStoreZoneService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */
@Service("basStoreZoneService")
class BasStoreZoneServiceImpl extends BaseCrudServiceImpl implements BasStoreZoneService {
    @Resource
    private BasStoreZoneDao basStoreZoneDao;

    @Override
    public BaseCrudDao init() {
        return basStoreZoneDao;
    }
}