package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasBillTypeDao;
import com.hc.scm.mdm.dao.mapper.BasBillTypeMapper;
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
@Service("basBillTypeDao")
class BasBillTypeDaoImpl extends BaseCrudDaoImpl implements BasBillTypeDao {
    @Resource
    private BasBillTypeMapper basBillTypeMapper;

    @Override
    public BaseCrudMapper init() {
        return basBillTypeMapper;
    }
}