package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasPaymentClauseDao;
import com.hc.scm.mdm.dao.mapper.BasPaymentClauseMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 收付款条件维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
@Service("basPaymentClauseDao")
class BasPaymentClauseDaoImpl extends BaseCrudDaoImpl implements BasPaymentClauseDao {
    @Resource
    private BasPaymentClauseMapper basPaymentClauseMapper;

    @Override
    public BaseCrudMapper init() {
        return basPaymentClauseMapper;
    }
}