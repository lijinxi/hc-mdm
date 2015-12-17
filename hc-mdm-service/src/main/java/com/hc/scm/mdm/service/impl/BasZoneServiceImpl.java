package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasZoneDao;
import com.hc.scm.mdm.service.BasZoneService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 库区维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:55
 * @version 1.0.0
 */
@Service("basZoneService")
class BasZoneServiceImpl extends BaseCrudServiceImpl implements BasZoneService {
    @Resource
    private BasZoneDao basZoneDao;

    @Override
    public BaseCrudDao init() {
        return basZoneDao;
    }
}