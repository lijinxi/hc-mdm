package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasBrandDao;
import com.hc.scm.mdm.service.BasBrandService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
@Service("basBrandService")
class BasBrandServiceImpl extends BaseCrudServiceImpl implements BasBrandService {
    @Resource
    private BasBrandDao basBrandDao;

    @Override
    public BaseCrudDao init() {
        return basBrandDao;
    }
}