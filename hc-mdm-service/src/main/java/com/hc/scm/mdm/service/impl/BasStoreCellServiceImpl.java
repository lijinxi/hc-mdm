package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasStoreCellDao;
import com.hc.scm.mdm.service.BasStoreCellService;
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
@Service("basStoreCellService")
class BasStoreCellServiceImpl extends BaseCrudServiceImpl implements BasStoreCellService {
    @Resource
    private BasStoreCellDao basStoreCellDao;

    @Override
    public BaseCrudDao init() {
        return basStoreCellDao;
    }
}