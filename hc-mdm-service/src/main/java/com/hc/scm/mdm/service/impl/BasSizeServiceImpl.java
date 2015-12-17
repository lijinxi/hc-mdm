package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasSizeDao;
import com.hc.scm.mdm.service.BasSizeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
@Service("basSizeService")
class BasSizeServiceImpl extends BaseCrudServiceImpl implements BasSizeService {
    @Resource
    private BasSizeDao basSizeDao;

    @Override
    public BaseCrudDao init() {
        return basSizeDao;
    }
}