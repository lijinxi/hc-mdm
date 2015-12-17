package com.hc.scm.mdm.service;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
public interface BasDictService extends BaseCrudService {
	public List<BasDictDtlComboModel> getBasDictCombo(String dictCode) throws ServiceException;
}