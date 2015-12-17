package com.hc.scm.mdm.dao.dal;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.entity.BasCategory;

/**
 * Description: 类别维护Dao
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
public interface BasCategoryDao extends BaseCrudDao {
	public <ModelType> int updateSearchCode(ModelType record) throws DaoException;
	public <ModelType> int getSubCategoryCount(String categoryNo) throws DaoException;
	public <ModelType> String checkCategoryNo(String categoryNo) throws DaoException;
	//public List<BasCategory> getCategory(String categoryNo) throws DaoException;
	public List<BasCategory> getCategory(Map<String,Object> params) throws DaoException;
	
}