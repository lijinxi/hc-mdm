package com.hc.scm.mdm.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.dao.model.BillMatMaxOrderNoModel;
import com.hc.scm.mdm.dao.model.BillMatSizeMaxOrderNoModel;
import com.hc.scm.mdm.dao.entity.BasStyle;
import com.hc.scm.mdm.dao.entity.BasSize;
import com.hc.scm.mdm.dao.entity.BasCategory;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
public interface BillMaterialDtlMapper extends BaseCrudMapper {
	public BillMatMaxOrderNoModel SelectOneModelByVoBillMatMaxOrderNo(@Param("params")  Map<String, Object> params);
	public BillMatSizeMaxOrderNoModel SelectOneModelByVoBillMatSizeMaxOrderNo(@Param("params")  Map<String, Object> params);
	public BasStyle SelectOneModelByVoBillMatFromStyle(@Param("params")  Map<String, Object> params);
	public BasSize SelectOneModelByVoBillMatFromSize(@Param("params")  Map<String, Object> params);
	
	//大类、小类 
	public List<BasCategory> getParentCategory(Integer parentCategoryId);
	public List<BasCategory> getCategory(String parentCategoryId);
	//大类
	//public BasCategory SelectOneModelByVoBillMatFromParentCategory(@Param("params")  Map<String, Object> params);
	//小类
	//public BasCategory SelectOneModelByVoBillMatFromCategory(@Param("params")  Map<String, Object> params);
	
	
}