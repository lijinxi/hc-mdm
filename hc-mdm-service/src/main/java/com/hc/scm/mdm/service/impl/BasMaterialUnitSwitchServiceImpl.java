package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasMaterialUnitSwitchDao;
import com.hc.scm.mdm.service.BasMaterialUnitSwitchService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:48:27
 * @version 1.0.0
 */
@Service("basMaterialUnitSwitchService")
class BasMaterialUnitSwitchServiceImpl extends BaseCrudServiceImpl implements BasMaterialUnitSwitchService {
    @Resource
    private BasMaterialUnitSwitchDao basMaterialUnitSwitchDao;

    @Override
    public BaseCrudDao init() {
        return basMaterialUnitSwitchDao;
    }
}