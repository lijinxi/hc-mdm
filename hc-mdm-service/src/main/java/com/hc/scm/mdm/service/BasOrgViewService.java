package com.hc.scm.mdm.service;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.TreeModel;


/**
 * Description: 
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-4-1 下午2:37:23
 * @version 1.0.0
 */
public interface BasOrgViewService extends BaseCrudService{
	
	public List<TreeModel> getOrgViewTree(int type) throws ServiceException;
	
	

}
