package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.model.BasOrgViewModel;


/**
 * Description: 
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-4-1 下午2:37:11
 * @version 1.0.0
 */
public interface BasOrgViewDao extends BaseCrudDao{
	
	public List<BasOrgViewModel> getDivision() throws DaoException;
	public List<BasOrgViewModel> getFactory() throws DaoException;
	public List<BasOrgViewModel> getDivFac() throws DaoException;
	public List<BasOrgViewModel> getFacDiv() throws DaoException;
	public List<BasOrgViewModel> getStoreAndWorkshop() throws DaoException;
	

}
