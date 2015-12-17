package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;

/**
 * Description: BOM维护单据明细Dao
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public interface BillBomListDao extends BaseCrudDao {
	public <ModelType> List<ModelType> selectByBillNo(ModelType record);
	public <ModelType> ModelType selectByBillOrderNo(ModelType record);
	public <ModelType> List<ModelType> getParentOrderList(ModelType record);
	public <ModelType> int checkDoubleBom(ModelType record);
}