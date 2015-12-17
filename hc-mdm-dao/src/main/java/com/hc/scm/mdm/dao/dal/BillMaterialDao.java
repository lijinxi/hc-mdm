package com.hc.scm.mdm.dao.dal;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:00
 * @version 1.0.0
 */
public interface BillMaterialDao extends BaseCrudDao {
	public <ModelType> int audit(ModelType modelType,Object maintainType,Object materialType) throws DaoException;
}