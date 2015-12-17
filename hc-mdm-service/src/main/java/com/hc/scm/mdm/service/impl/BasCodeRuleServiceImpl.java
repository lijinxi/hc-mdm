package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCodeRuleDao;
import com.hc.scm.mdm.service.BasCodeRuleService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 编码规则从表
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
@Service("basCodeRuleService")
class BasCodeRuleServiceImpl extends BaseCrudServiceImpl implements BasCodeRuleService {
    @Resource
    private BasCodeRuleDao basCodeRuleDao;

    @Override
    public BaseCrudDao init() {
        return basCodeRuleDao;
    }
}