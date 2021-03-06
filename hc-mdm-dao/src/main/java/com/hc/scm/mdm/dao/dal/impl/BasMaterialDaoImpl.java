package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasMaterialDao;
import com.hc.scm.mdm.dao.mapper.BasMaterialMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
@Service("basMaterialDao")
class BasMaterialDaoImpl extends BaseCrudDaoImpl implements BasMaterialDao {
    @Resource
    private BasMaterialMapper basMaterialMapper;

    @Override
    public BaseCrudMapper init() {
        return basMaterialMapper;
    }
}