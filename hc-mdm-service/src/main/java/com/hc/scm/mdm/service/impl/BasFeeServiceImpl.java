package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasFeeDao;
import com.hc.scm.mdm.service.BasFeeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 费用项目维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
@Service("basFeeService")
class BasFeeServiceImpl extends BaseCrudServiceImpl implements BasFeeService {
    @Resource
    private BasFeeDao basFeeDao;

    @Override
    public BaseCrudDao init() {
        return basFeeDao;
    }
}