package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasCodeRuleDtlDao;
import com.hc.scm.mdm.service.BasCodeRuleDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 编码规则主表
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
@Service("basCodeRuleDtlService")
class BasCodeRuleDtlServiceImpl extends BaseCrudServiceImpl implements BasCodeRuleDtlService {
    @Resource
    private BasCodeRuleDtlDao basCodeRuleDtlDao;

    @Override
    public BaseCrudDao init() {
        return basCodeRuleDtlDao;
    }
}