package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCompanyDao;
import com.hc.scm.mdm.dao.mapper.BasCompanyMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-12 10:42:02
 * @version 1.0.0
 */
@Service("basCompanyDao")
class BasCompanyDaoImpl extends BaseCrudDaoImpl implements BasCompanyDao {
    @Resource
    private BasCompanyMapper basCompanyMapper;

    @Override
    public BaseCrudMapper init() {
        return basCompanyMapper;
    }
}