package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasSupplierDao;
import com.hc.scm.mdm.dao.entity.BasSupplierContacter;
import com.hc.scm.mdm.dao.mapper.BasSupplierContacterMapper;
import com.hc.scm.mdm.dao.mapper.BasSupplierMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
@Service("basSupplierDao")
class BasSupplierDaoImpl extends BaseCrudDaoImpl implements BasSupplierDao {
    @Resource
    private BasSupplierMapper basSupplierMapper;
    
    @Resource
    private BasSupplierContacterMapper  basSupplierContacterMapper;

    @Override
    public BaseCrudMapper init() {
        return basSupplierMapper;
    }

	@Override
	public int checkContacter(String no) {
		return basSupplierMapper.checkContacter(no);
	}
	
	
    
    
}