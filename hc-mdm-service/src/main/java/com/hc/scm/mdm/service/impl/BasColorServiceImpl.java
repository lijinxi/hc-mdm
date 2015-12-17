package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasColorDao;
import com.hc.scm.mdm.service.BasColorService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
@Service("basColorService")
class BasColorServiceImpl extends BaseCrudServiceImpl implements BasColorService {
    @Resource
    private BasColorDao basColorDao;
    @Override
    public BaseCrudDao init() {
        return basColorDao;
    }
}