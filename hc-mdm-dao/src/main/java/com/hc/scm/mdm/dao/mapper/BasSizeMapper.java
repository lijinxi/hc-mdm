package com.hc.scm.mdm.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
public interface BasSizeMapper extends BaseCrudMapper {
	public <ModelType> String selectBySizeTypeOrderNo(ModelType record);
}