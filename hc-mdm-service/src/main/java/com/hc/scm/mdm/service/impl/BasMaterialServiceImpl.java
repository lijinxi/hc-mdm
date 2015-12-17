package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasMaterialDao;
import com.hc.scm.mdm.service.BasMaterialService;
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
@Service("basMaterialService")
class BasMaterialServiceImpl extends BaseCrudServiceImpl implements BasMaterialService {
    @Resource
    private BasMaterialDao basMaterialDao;

    @Override
    public BaseCrudDao init() {
        return basMaterialDao;
    }
}