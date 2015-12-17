package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasSupplierContacterDao;
import com.hc.scm.mdm.dao.entity.BasSupplierContacter;
import com.hc.scm.mdm.dao.mapper.BasSupplierContacterMapper;
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
@Service("basSupplierContacterDao")
class BasSupplierContacterDaoImpl extends BaseCrudDaoImpl implements BasSupplierContacterDao {
    @Resource
    private BasSupplierContacterMapper basSupplierContacterMapper;

    @Override
    public BaseCrudMapper init() {
        return basSupplierContacterMapper;
    }
    
	/**
	 * 检查BOM头是否存在，不使BasBom的selectCount，单独来判断
	 */
	@Override
	public <ModelType> int checkContacter(ModelType record) throws DaoException{
		try {
			return basSupplierContacterMapper.checkContacter(record);
		} catch (Exception e) {
			throw new DaoException("检查BOM头是否存在出错了！",e);
		}
	}

	@Override
	public int modeifyIsDefault(String supplierNo) {
		return basSupplierContacterMapper.modeifyIsDefault(supplierNo);
	}

	@Override
	public <ModelType> int add(ModelType modelType) throws DaoException {
		BasSupplierContacter contacter = (BasSupplierContacter)modelType;
		if (contacter.getIsDefault()==1){
			basSupplierContacterMapper.modeifyIsDefault(contacter.getSupplierNo());
		}
		return super.add(modelType);
	}

	@Override
	public <ModelType> int modifyById(ModelType modelType) throws DaoException {
		BasSupplierContacter contacter = (BasSupplierContacter)modelType;
		if (contacter.getIsDefault()==1){
			basSupplierContacterMapper.modeifyIsDefault(contacter.getSupplierNo());
		}
		return super.modifyById(modelType);
	}
	
	
	
	
}