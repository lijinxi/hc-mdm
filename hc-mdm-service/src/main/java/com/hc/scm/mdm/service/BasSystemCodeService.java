
package com.hc.scm.mdm.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.entity.BasCodeRuleDtl;
/**
 * 
 * Description: 
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      tan.bin
 * Createdate:  2015-4-01
 */
public interface BasSystemCodeService extends BaseCrudService {
	public String getSystemSheetid (Map<String,Object> parmMpa);
	public String getSystemSheetid (String billTypeNo);
}
