package com.hc.scm.mdm.service;

import com.hc.scm.common.base.service.BaseCrudService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
public interface BasBomService extends BaseCrudService {
	public <ModelType> ModelType getEntityBom(ModelType record);
}