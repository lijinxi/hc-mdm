package com.hc.scm.mdm.dao.mapper;

import java.util.List;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.entity.BasCodeRuleDtl;

import org.apache.ibatis.annotations.Param;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     tanbin
 * @date:  2015-04-06
 * @version 1.0.0
 */
public interface BasSystemCodeMapper extends BaseCrudMapper{
	
	public List<BasCodeRuleDtl>  selectBasCodeRuleDtlList(@Param("billTypeNo") String billTypeNo);
	
}
