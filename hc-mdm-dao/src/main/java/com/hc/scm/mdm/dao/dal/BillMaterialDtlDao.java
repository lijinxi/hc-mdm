package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.dao.entity.BasCategory;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
public interface BillMaterialDtlDao extends BaseCrudDao {
	public List<BasCategory> getParentCategory(Integer parentCategoryId) throws DaoException;
	public List<BasCategory> getCategory(String categoryNo) throws DaoException;
}