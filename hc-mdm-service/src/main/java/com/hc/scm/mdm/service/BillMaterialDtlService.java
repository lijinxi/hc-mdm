package com.hc.scm.mdm.service;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
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
public interface BillMaterialDtlService extends BaseCrudService {
	public List<BasCategory> getParentCategory(Integer parentCategoryId) throws ServiceException;
	public List<BasCategory> getCategory(String categoryNo) throws ServiceException;
}