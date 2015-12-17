package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasOrgViewDao;
import com.hc.scm.mdm.dao.mapper.BasOrgViewMapper;
import com.hc.scm.mdm.dao.model.BasOrgViewModel;


/**
 * Description: 
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-4-1 下午2:37:00
 * @version 1.0.0
 */
@Repository("basOrgViewDao")
public class BasOrgViewDaoImpl extends BaseCrudDaoImpl implements BasOrgViewDao{

	@Resource
	BasOrgViewMapper basOrgViewMapper;
	
	@Override
	public BaseCrudMapper init() {
		return basOrgViewMapper;
	}
	
	@Override
	public List<BasOrgViewModel> getDivision() throws DaoException {
		return basOrgViewMapper.selectDivision();
	}

	@Override
	public List<BasOrgViewModel> getFactory() throws DaoException {
		return basOrgViewMapper.selectFactory();
	}

	@Override
	public List<BasOrgViewModel> getDivFac() throws DaoException {
		return basOrgViewMapper.selectDivFac();
	}

	@Override
	public List<BasOrgViewModel> getFacDiv() throws DaoException {
		return basOrgViewMapper.selectFacDiv();
	}

	@Override
	public List<BasOrgViewModel> getStoreAndWorkshop() throws DaoException {
		return basOrgViewMapper.selectStoreAndWorkshop();
	}


}
