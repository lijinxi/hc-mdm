package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasBillTypeDao;
import com.hc.scm.mdm.service.BasBillTypeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
@Service("basBillTypeService")
class BasBillTypeServiceImpl extends BaseCrudServiceImpl implements BasBillTypeService {
    @Resource
    private BasBillTypeDao basBillTypeDao;

    @Override
    public BaseCrudDao init() {
        return basBillTypeDao;
    }
}