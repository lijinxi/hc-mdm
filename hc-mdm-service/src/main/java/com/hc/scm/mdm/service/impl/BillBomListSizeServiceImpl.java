package com.hc.scm.mdm.service.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BillBomListSizeDao;
import com.hc.scm.mdm.service.BillBomListSizeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-14 15:49:20
 * @version 1.0.0
 */
@Service("billBomListSizeService")
class BillBomListSizeServiceImpl extends BaseCrudServiceImpl implements BillBomListSizeService {
    @Resource
    private BillBomListSizeDao billBomListSizeDao;

    @Override
    public BaseCrudDao init() {
        return billBomListSizeDao;
    }

	@Override
	public <ModelType> List<ModelType> selectByBillNo(ModelType record) {
		return billBomListSizeDao.selectByBillNo(record);
	}
    
    
}