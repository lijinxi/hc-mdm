package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCodeRuleDao;
import com.hc.scm.mdm.dao.mapper.BasCodeRuleMapper;
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
@Service("basCodeRuleDao")
class BasCodeRuleDaoImpl extends BaseCrudDaoImpl implements BasCodeRuleDao {
    @Resource
    private BasCodeRuleMapper basCodeRuleMapper;

    @Override
    public BaseCrudMapper init() {
        return basCodeRuleMapper;
    }
}