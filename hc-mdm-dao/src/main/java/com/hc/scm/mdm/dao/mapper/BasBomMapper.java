package com.hc.scm.mdm.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
public interface BasBomMapper extends BaseCrudMapper {
	public <ModelType> ModelType getEntityBom(ModelType record);//参数的ModelType是个虚构的
}