package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasPurchaseGroupDao;
import com.hc.scm.mdm.dao.mapper.BasPurchaseGroupMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */
@Repository("basPurchaseGroupDao")
class BasPurchaseGroupDaoImpl extends BaseCrudDaoImpl implements BasPurchaseGroupDao {
    @Resource
    private BasPurchaseGroupMapper basPurchaseGroupMapper;

    @Override
    public BaseCrudMapper init() {
        return basPurchaseGroupMapper;
    }
}