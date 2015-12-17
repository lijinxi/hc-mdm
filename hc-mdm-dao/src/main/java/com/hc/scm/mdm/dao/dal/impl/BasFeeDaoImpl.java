package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasFeeDao;
import com.hc.scm.mdm.dao.mapper.BasFeeMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 费用项目维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
@Service("basFeeDao")
class BasFeeDaoImpl extends BaseCrudDaoImpl implements BasFeeDao {
    @Resource
    private BasFeeMapper basFeeMapper;

    @Override
    public BaseCrudMapper init() {
        return basFeeMapper;
    }
}