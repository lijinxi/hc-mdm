package com.hc.scm.mdm.dao.dal.impl;


import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasUnitSwitchDao;
import com.hc.scm.mdm.dao.mapper.BasUnitSwitchMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
@Repository("basUnitSwitchDao")
class BasUnitSwitchDaoImpl extends BaseCrudDaoImpl implements BasUnitSwitchDao {
    @Resource
    private BasUnitSwitchMapper basUnitSwitchMapper;

    @Override
    public BaseCrudMapper init() {
        return basUnitSwitchMapper;
    }

}