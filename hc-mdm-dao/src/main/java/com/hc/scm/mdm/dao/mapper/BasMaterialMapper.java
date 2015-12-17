package com.hc.scm.mdm.dao.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.model.BasMeteralInfoModel;


/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @xiug: tanbin
 * @date  2015-04-21
 * @version 1.0.0
 */
public interface BasMaterialMapper extends BaseCrudMapper {
	
	public BasMeteralInfoModel SelectOneModelByVoBasMeteralInfo(@Param("params")  Map<String, Object> params);
}