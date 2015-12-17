package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BillBomDao;
import com.hc.scm.mdm.dao.mapper.BillBomMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: BOM维护单据头Impl实现
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
@Repository("billBomDao")
class BillBomDaoImpl extends BaseCrudDaoImpl implements BillBomDao {
    @Resource
    private BillBomMapper billBomMapper;

    @Override
    public BaseCrudMapper init() {
        return billBomMapper;
    }

	@Override
	public <ModelType> int checkBillNoExists(ModelType record) {
		return billBomMapper.checkBillNoExists(record);
	}
}