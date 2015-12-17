package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 15:49:20
 * @version 1.0.0
 */
public interface BillBomListSizeDao extends BaseCrudDao {
	public <ModelType> List<ModelType> selectByBillNo(ModelType record);
}