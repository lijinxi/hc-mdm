package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasCodeRuleDtlDao;
import com.hc.scm.mdm.dao.mapper.BasCodeRuleDtlMapper;
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
@Service("basCodeRuleDtlDao")
class BasCodeRuleDtlDaoImpl extends BaseCrudDaoImpl implements BasCodeRuleDtlDao {
    @Resource
    private BasCodeRuleDtlMapper basCodeRuleDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return basCodeRuleDtlMapper;
    }
}