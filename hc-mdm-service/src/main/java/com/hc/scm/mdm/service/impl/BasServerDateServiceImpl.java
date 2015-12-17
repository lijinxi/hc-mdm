package com.hc.scm.mdm.service.impl;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.utils.DateUtil;
import com.hc.scm.mdm.service.BasServerDateService;


@Service("basServerDateService")
public class BasServerDateServiceImpl   extends BaseCrudServiceImpl implements BasServerDateService {
	
	@Override
	public BaseCrudDao init() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Date getServerDate() {
		// TODO Auto-generated method stub
		return DateUtil.getCurrentDateTime();
	}

}
