package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasStoreCellDao;
import com.hc.scm.mdm.dao.mapper.BasStoreCellMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:05
 * @version 1.0.0
 */
@Service("basStoreCellDao")
class BasStoreCellDaoImpl extends BaseCrudDaoImpl implements BasStoreCellDao {
    @Resource
    private BasStoreCellMapper basStoreCellMapper;

    @Override
    public BaseCrudMapper init() {
        return basStoreCellMapper;
    }
}