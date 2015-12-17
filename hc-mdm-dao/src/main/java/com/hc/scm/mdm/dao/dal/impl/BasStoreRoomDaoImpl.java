package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasStoreRoomDao;
import com.hc.scm.mdm.dao.mapper.BasStoreRoomMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */
@Service("basStoreRoomDao")
class BasStoreRoomDaoImpl extends BaseCrudDaoImpl implements BasStoreRoomDao {
    @Resource
    private BasStoreRoomMapper basStoreRoomMapper;

    @Override
    public BaseCrudMapper init() {
        return basStoreRoomMapper;
    }
}