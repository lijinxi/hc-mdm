package com.hc.scm.mdm.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.MaterialSizeRowColWrapModel;
import com.hc.scm.common.model.SizeRowColWrapModel;

/**
 * Description: 
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
public interface SizeRowColWrapService extends BaseCrudService {
	public List<SizeRowColWrapModel> getSizeRowColWrap(Map<String, Object> params) throws ServiceException;
	public List<MaterialSizeRowColWrapModel> getMaterialSizeRowColWrap(String materialNo) throws ServiceException;
	public List<MaterialSizeRowColWrapModel> getMaterialSize(String materialNo) throws ServiceException;
}