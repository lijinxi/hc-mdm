package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasBrandRelationDao;
import com.hc.scm.mdm.service.BasBrandRelationService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
@Service("basBrandRelationService")
class BasBrandRelationServiceImpl extends BaseCrudServiceImpl implements BasBrandRelationService {
    @Resource
    private BasBrandRelationDao basBrandRelationDao;

    @Override
    public BaseCrudDao init() {
        return basBrandRelationDao;
    }
}