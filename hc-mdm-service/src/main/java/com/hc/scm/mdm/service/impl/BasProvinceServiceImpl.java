package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasProvinceDao;
import com.hc.scm.mdm.service.BasProvinceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 省份维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:46:24
 * @version 1.0.0
 */
@Service("basProvinceService")
class BasProvinceServiceImpl extends BaseCrudServiceImpl implements BasProvinceService {
    @Resource
    private BasProvinceDao basProvinceDao;

    @Override
    public BaseCrudDao init() {
        return basProvinceDao;
    }
}