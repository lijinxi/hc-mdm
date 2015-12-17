package com.hc.scm.mdm.dao.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: BOM维护单据明细映射
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public interface BillBomListMapper extends BaseCrudMapper {
	public <ModelType> List<ModelType> selectByBillNo(ModelType record);
	public <ModelType> ModelType selectByBillOrderNo(ModelType record);
	public <ModelType> List<ModelType> getParentOrderList(ModelType record);
	public <ModelType> List<ModelType> getSubOrderList(ModelType record);
	public int deleteByLindIds(@Param("lineIds")ArrayList<Long> lineIds);
	public <ModelType> int checkDoubleBom(ModelType record);
}