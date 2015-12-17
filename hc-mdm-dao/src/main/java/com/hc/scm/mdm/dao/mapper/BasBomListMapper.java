package com.hc.scm.mdm.dao.mapper;

import java.util.List;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: BOM物料清单实体映射
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
public interface BasBomListMapper extends BaseCrudMapper {
	public <ModelType> List<ModelType> findBomList(ModelType record);
	public <ModelType> String checkEntityBom(ModelType record);
	public <ModelType> int checkMaterial(ModelType record);
	public <ModelType> int deleteBasBomListByBasBom(ModelType record); 
	public <ModelType> ModelType getEntityBomList(ModelType record);//参数的ModelType是个虚构的
}