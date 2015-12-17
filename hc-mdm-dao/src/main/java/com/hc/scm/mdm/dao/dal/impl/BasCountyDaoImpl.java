package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCountyDao;
import com.hc.scm.mdm.dao.mapper.BasCountyMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:42
 * @version 1.0.0
 */
@Service("basCountyDao")
class BasCountyDaoImpl extends BaseCrudDaoImpl implements BasCountyDao {
    @Resource
    private BasCountyMapper basCountyMapper;

    @Override
    public BaseCrudMapper init() {
        return basCountyMapper;
    }
}