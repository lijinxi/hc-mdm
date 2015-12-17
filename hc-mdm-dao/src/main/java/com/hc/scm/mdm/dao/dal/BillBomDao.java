package com.hc.scm.mdm.dao.dal;

import com.hc.scm.common.base.dal.BaseCrudDao;

/**
 * Description: BOM维护单据头Dao
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public interface BillBomDao extends BaseCrudDao {
	public <ModelType> int checkBillNoExists(ModelType record);
}