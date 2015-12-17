package com.hc.scm.mdm.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.entity.BasCategory;

/**
 * Description: 类别维护服务
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
public interface BasCategoryService extends BaseCrudService {
	public <ModelType> String checkDeleteCategory(String categoryNo) throws ServiceException;
	public List<BasCategory> getCategory(Map<String,Object> params) throws ServiceException;
}