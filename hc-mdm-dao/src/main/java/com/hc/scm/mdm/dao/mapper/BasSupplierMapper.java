package com.hc.scm.mdm.dao.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.model.BasSupplierMaxOrderNoModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
public interface BasSupplierMapper extends BaseCrudMapper {
	public int checkContacter(@Param("no")String no);
	public BasSupplierMaxOrderNoModel SelectOneModelByVoBasMaxOrderNo(@Param("params") Map<String,Object>params);
}