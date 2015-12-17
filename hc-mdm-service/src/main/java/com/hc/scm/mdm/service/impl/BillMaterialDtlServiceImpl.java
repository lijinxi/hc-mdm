package com.hc.scm.mdm.service.impl;

import java.util.List;

import com.hc.scm.common.annotation.ReadCacheAnnotation;
import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.dal.BillMaterialDtlDao;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.service.BillMaterialDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.hc.scm.mdm.dao.entity.BasCategory;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
@Service("billMaterialDtlService")
class BillMaterialDtlServiceImpl extends BaseCrudServiceImpl implements BillMaterialDtlService {
    @Resource
    private BillMaterialDtlDao billMaterialDtlDao;

    @Override
    public BaseCrudDao init() {
        return billMaterialDtlDao;
    }
    
	@Override
	public List<BasCategory> getParentCategory(Integer parentCategoryId)
			throws ServiceException {
		try {
			return billMaterialDtlDao.getParentCategory(parentCategoryId);
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}    
	
	@Override
	public List<BasCategory> getCategory(String categoryNo)
			throws ServiceException {
		try {
			return billMaterialDtlDao.getCategory(categoryNo);
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}
}