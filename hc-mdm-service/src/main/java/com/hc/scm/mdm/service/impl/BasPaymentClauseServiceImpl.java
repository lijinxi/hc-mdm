package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasPaymentClauseDao;
import com.hc.scm.mdm.service.BasPaymentClauseService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 付款条件维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
@Service("basPaymentClauseService")
class BasPaymentClauseServiceImpl extends BaseCrudServiceImpl implements BasPaymentClauseService {
    @Resource
    private BasPaymentClauseDao basPaymentClauseDao;

    @Override
    public BaseCrudDao init() {
        return basPaymentClauseDao;
    }
}