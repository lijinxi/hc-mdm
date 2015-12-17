package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasStoreChannelDao;
import com.hc.scm.mdm.dao.mapper.BasStoreChannelMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 */
@Service("basStoreChannelDao")
class BasStoreChannelDaoImpl extends BaseCrudDaoImpl implements BasStoreChannelDao {
    @Resource
    private BasStoreChannelMapper basStoreChannelMapper;

    @Override
    public BaseCrudMapper init() {
        return basStoreChannelMapper;
    }
}