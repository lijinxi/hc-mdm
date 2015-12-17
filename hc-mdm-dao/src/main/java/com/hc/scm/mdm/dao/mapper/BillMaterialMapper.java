package com.hc.scm.mdm.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:00
 * @version 1.0.0
 */
public interface BillMaterialMapper extends BaseCrudMapper {
	public <ModelType> int auditBillMaterial(ModelType record);
	public <ModelType> int auditNewBasMaterial(ModelType record);
	public <ModelType> int auditNewBasMaterialSize(ModelType record);
	public <ModelType> int auditUpdateBasMaterial(ModelType record);
	public <ModelType> int auditDeleteBasMaterialSize(ModelType record);
	public <ModelType> int auditNewBasBom(ModelType record);
	public <ModelType> int auditNewBasBomList(ModelType record);
}