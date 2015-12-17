package com.hc.scm.mdm.service;

import java.util.Date;

import com.hc.scm.common.base.service.BaseCrudService;


/**
 * Description: 获取服务器时间
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     tan.bin
 * @date:  2015-04-25 17:41:10
 * @version 1.0.0
 */
public interface BasServerDateService extends BaseCrudService {
	public Date getServerDate();
}
