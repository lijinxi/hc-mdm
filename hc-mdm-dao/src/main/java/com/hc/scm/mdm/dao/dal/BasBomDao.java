package com.hc.scm.mdm.dao.dal;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
public interface BasBomDao extends BaseCrudDao {
	public <ModelType> Long getEntityBomId(ModelType record) throws DaoException;
	public <ModelType> ModelType getEntityBom(ModelType record)  throws DaoException;
}