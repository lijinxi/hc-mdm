package com.hc.scm.mdm.dao.dal;


import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
public interface BasSupplierContacterDao extends BaseCrudDao {
	public  <ModelType> int checkContacter(ModelType record) throws DaoException;
	public int modeifyIsDefault(String supplierNo);
}