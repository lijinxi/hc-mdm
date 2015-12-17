package com.hc.scm.mdm.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.entity.BasCategory;

/**
 * Description: 类别维护映射
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
public interface BasCategoryMapper extends BaseCrudMapper {
	public <ModelType> String selectInsertCategoryNo(ModelType record);
	public <ModelType> int updateSearchCode(ModelType record);
	public <ModelType> String selectSearchCode(ModelType record);
	public <ModelType> int deleteBySearchCode(ModelType record);
	public <ModelType> int getSubCategoryCount(String categoryNo);
	public <ModelType> String checkCategoryNo(String categoryNo);
	public List<BasCategory> getCategory(@Param("params")  Map<String, Object> params);
}