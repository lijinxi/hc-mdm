package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasDivisionDao;
import com.hc.scm.mdm.service.BasDivisionService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-12 10:42:02
 * @version 1.0.0
 */
@Service("basDivisionService")
class BasDivisionServiceImpl extends BaseCrudServiceImpl implements BasDivisionService {
    @Resource
    private BasDivisionDao basDivisionDao;

    @Override
    public BaseCrudDao init() {
        return basDivisionDao;
    }
}