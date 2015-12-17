package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasColorDao;
import com.hc.scm.mdm.dao.mapper.BasColorMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
@Service("basColorDao")
class BasColorDaoImpl extends BaseCrudDaoImpl implements BasColorDao {
    @Resource
    private BasColorMapper basColorMapper;

    @Override
    public BaseCrudMapper init() {
        return basColorMapper;
    }
}