package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasDeliveryPointDao;
import com.hc.scm.mdm.dao.mapper.BasDeliveryPointMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
@Repository("basDeliveryPointDao")
class BasDeliveryPointDaoImpl extends BaseCrudDaoImpl implements BasDeliveryPointDao {
    @Resource
    private BasDeliveryPointMapper basDeliveryPointMapper;

    @Override
    public BaseCrudMapper init() {
        return basDeliveryPointMapper;
    }
}