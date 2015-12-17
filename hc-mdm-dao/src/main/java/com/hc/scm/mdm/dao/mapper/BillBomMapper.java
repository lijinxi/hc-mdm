package com.hc.scm.mdm.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: BOM维护单据头映射
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public interface BillBomMapper extends BaseCrudMapper {
	public <ModelType> int checkBillNoExists(ModelType record);
}