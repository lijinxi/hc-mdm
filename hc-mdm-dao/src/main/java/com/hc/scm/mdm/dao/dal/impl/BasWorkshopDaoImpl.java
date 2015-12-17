package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasWorkshopDao;
import com.hc.scm.mdm.dao.mapper.BasWorkshopMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:23
 * @version 1.0.0
 */
@Repository("basWorkshopDao")
class BasWorkshopDaoImpl extends BaseCrudDaoImpl implements BasWorkshopDao {
    @Resource
    private BasWorkshopMapper basWorkshopMapper;

    @Override
    public BaseCrudMapper init() {
        return basWorkshopMapper;
    }
}