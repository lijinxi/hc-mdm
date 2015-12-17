package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasProvinceDao;
import com.hc.scm.mdm.dao.mapper.BasProvinceMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 省份维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:46:24
 * @version 1.0.0
 */
@Service("basProvinceDao")
class BasProvinceDaoImpl extends BaseCrudDaoImpl implements BasProvinceDao {
    @Resource
    private BasProvinceMapper basProvinceMapper;

    @Override
    public BaseCrudMapper init() {
        return basProvinceMapper;
    }
}