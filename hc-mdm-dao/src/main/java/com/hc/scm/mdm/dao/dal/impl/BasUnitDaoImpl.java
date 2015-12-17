package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasUnitDao;
import com.hc.scm.mdm.dao.mapper.BasUnitMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 计量单位Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:41:10
 * @version 1.0.0
 */
@Service("basUnitDao")
class BasUnitDaoImpl extends BaseCrudDaoImpl implements BasUnitDao {
    @Resource
    private BasUnitMapper basUnitMapper;

    @Override
    public BaseCrudMapper init() {
        return basUnitMapper;
    }
}