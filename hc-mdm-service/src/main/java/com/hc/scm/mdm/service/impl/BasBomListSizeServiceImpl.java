package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasBomListSizeDao;
import com.hc.scm.mdm.service.BasBomListSizeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-10 10:19:54
 * @version 1.0.0
 */
@Service("basBomListSizeService")
class BasBomListSizeServiceImpl extends BaseCrudServiceImpl implements BasBomListSizeService {
    @Resource
    private BasBomListSizeDao basBomListSizeDao;

    @Override
    public BaseCrudDao init() {
        return basBomListSizeDao;
    }
}