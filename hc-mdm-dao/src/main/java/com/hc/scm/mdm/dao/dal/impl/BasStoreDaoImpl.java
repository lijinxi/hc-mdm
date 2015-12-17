package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasStoreDao;
import com.hc.scm.mdm.dao.mapper.BasStoreMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
@Service("basStoreDao")
class BasStoreDaoImpl extends BaseCrudDaoImpl implements BasStoreDao {
    @Resource
    private BasStoreMapper basStoreMapper;

    @Override
    public BaseCrudMapper init() {
        return basStoreMapper;
    }
}