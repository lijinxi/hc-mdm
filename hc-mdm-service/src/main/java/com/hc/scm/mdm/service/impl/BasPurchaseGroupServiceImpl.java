package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasPurchaseGroupDao;
import com.hc.scm.mdm.service.BasPurchaseGroupService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */
@Service("basPurchaseGroupService")
class BasPurchaseGroupServiceImpl extends BaseCrudServiceImpl implements BasPurchaseGroupService {
    @Resource
    private BasPurchaseGroupDao basPurchaseGroupDao;

    @Override
    public BaseCrudDao init() {
        return basPurchaseGroupDao;
    }
}