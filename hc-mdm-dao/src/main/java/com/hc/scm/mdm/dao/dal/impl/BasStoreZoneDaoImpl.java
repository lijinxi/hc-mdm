package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasStoreZoneDao;
import com.hc.scm.mdm.dao.mapper.BasStoreZoneMapper;
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
@Service("basStoreZoneDao")
class BasStoreZoneDaoImpl extends BaseCrudDaoImpl implements BasStoreZoneDao {
    @Resource
    private BasStoreZoneMapper basStoreZoneMapper;

    @Override
    public BaseCrudMapper init() {
        return basStoreZoneMapper;
    }
}