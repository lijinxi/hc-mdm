package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasPlaceDao;
import com.hc.scm.mdm.service.BasPlaceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 库位维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:55
 * @version 1.0.0
 */
@Service("basPlaceService")
class BasPlaceServiceImpl extends BaseCrudServiceImpl implements BasPlaceService {
    @Resource
    private BasPlaceDao basPlaceDao;

    @Override
    public BaseCrudDao init() {
        return basPlaceDao;
    }
}