package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasStoreRoomDao;
import com.hc.scm.mdm.service.BasStoreRoomService;
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
@Service("basStoreRoomService")
class BasStoreRoomServiceImpl extends BaseCrudServiceImpl implements BasStoreRoomService {
    @Resource
    private BasStoreRoomDao basStoreRoomDao;

    @Override
    public BaseCrudDao init() {
        return basStoreRoomDao;
    }
}