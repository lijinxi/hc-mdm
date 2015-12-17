package com.hc.scm.mdm.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.model.MaterialSizeRowColWrapModel;
import com.hc.scm.common.model.SizeRowColWrapModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
public interface SizeRowColWrapMapper extends BaseCrudMapper {
	public List<SizeRowColWrapModel> selectSizeRowColWrap(@Param("params")Map<String, Object> params);
	public List<MaterialSizeRowColWrapModel> selectMaterialSizeRowColWrap(@Param("materialNo")String materialNo);
	public List<MaterialSizeRowColWrapModel> selectMaterialSize(@Param("materialNo")String materialNo);
}