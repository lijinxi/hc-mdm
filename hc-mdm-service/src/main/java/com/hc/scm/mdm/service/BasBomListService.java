package com.hc.scm.mdm.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;

/**
 * Description: BOM物料清单Service
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
public interface BasBomListService extends BaseCrudService {
	public <ModelType,SizeType> List<ModelType> getBomList(Map<String, Object> resultMap,List<SizeType> sizeList) throws ServiceException;
	public <ModelType> void getAllBomList(List<ModelType> allList, List<ModelType> list);
	public <ModelType,SizeType> void getAllBomList(List<ModelType> allList, List<SizeType> sizeList,List<ModelType> list);
	public <ModelType> void getAllBomList(List<ModelType> allList, List<ModelType> list,ModelType root);
	public <ModelType,SizeType> void getAllBomList(List<ModelType> allList,List<SizeType> sizeList, List<ModelType> list,ModelType root);
	public <ModelType> int checkEntityBom(ModelType record) throws ServiceException;
	public <ModelType> int checkMaterial(ModelType record) throws ServiceException;
	public <ModelType> ModelType getEntityBomList(ModelType record) throws ServiceException;
}