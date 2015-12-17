package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasUnitDao;
import com.hc.scm.mdm.service.BasUnitService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 计量单位Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:41:10
 * @version 1.0.0
 */
@Service("basUnitService")
class BasUnitServiceImpl extends BaseCrudServiceImpl implements BasUnitService {
    @Resource
    private BasUnitDao basUnitDao;

    @Override
    public BaseCrudDao init() {
        return basUnitDao;
    }
}