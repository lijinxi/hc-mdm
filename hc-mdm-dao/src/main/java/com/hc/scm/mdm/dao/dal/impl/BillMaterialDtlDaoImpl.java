package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BillMaterialDtlDao;
import com.hc.scm.mdm.dao.entity.BasCategory;
import com.hc.scm.mdm.dao.mapper.BillMaterialDtlMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
@Service("billMaterialDtlDao")
class BillMaterialDtlDaoImpl extends BaseCrudDaoImpl implements BillMaterialDtlDao {
    @Resource
    private BillMaterialDtlMapper billMaterialDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return billMaterialDtlMapper;
    }
    
	@Override
	public List<BasCategory> getParentCategory(Integer parentCategoryId) {
		try {
			return billMaterialDtlMapper.getParentCategory(parentCategoryId);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
	
	@Override
	public List<BasCategory> getCategory(String categoryNo) {
		try {
			return billMaterialDtlMapper.getCategory(categoryNo);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
}