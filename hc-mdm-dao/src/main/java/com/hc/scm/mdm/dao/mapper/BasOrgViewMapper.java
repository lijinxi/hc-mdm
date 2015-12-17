package com.hc.scm.mdm.dao.mapper;

import java.util.List;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.model.BasOrgViewModel;



/**
 * Description: 
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-4-1 下午1:42:28
 * @version 1.0.0
 */
public interface BasOrgViewMapper extends BaseCrudMapper{
	
	public List<BasOrgViewModel> selectDivision();
	public List<BasOrgViewModel> selectFactory();
	public List<BasOrgViewModel> selectDivFac();
	public List<BasOrgViewModel> selectFacDiv();
	public List<BasOrgViewModel> selectStoreAndWorkshop();
	

}
