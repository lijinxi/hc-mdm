package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasDeliveryPointDao;
import com.hc.scm.mdm.service.BasDeliveryPointService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
@Service("basDeliveryPointService")
class BasDeliveryPointServiceImpl extends BaseCrudServiceImpl implements BasDeliveryPointService {
    @Resource
    private BasDeliveryPointDao basDeliveryPointDao;

    @Override
    public BaseCrudDao init() {
        return basDeliveryPointDao;
    }
}