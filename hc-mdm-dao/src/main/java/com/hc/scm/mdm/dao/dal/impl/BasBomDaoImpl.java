package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasBomDao;
import com.hc.scm.mdm.dao.entity.BasBom;
import com.hc.scm.mdm.dao.mapper.BasBomMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
@Repository("basBomDao")
class BasBomDaoImpl extends BaseCrudDaoImpl implements BasBomDao {
    @Resource
    private BasBomMapper basBomMapper;

    @Override
    public BaseCrudMapper init() {
        return basBomMapper;
    }
    
    /**
     * 得到BomId(根据传入的虚构的ModelType)
     */
	public <ModelType> Long getEntityBomId(ModelType record) throws DaoException{
		try {
			BasBom basBom = (BasBom) getEntityBom(record);
			return basBom==null  ? -1 : basBom.getBomId();
		} catch (Exception e) {
			throw new DaoException("BOM头是否存在出错了！",e);
		}
	}

	/**
	 * 得到Bom头实体(根据传入的虚构的ModelType
	 */
	@Override
	public <ModelType> ModelType getEntityBom(ModelType record) throws DaoException {
		try {
			return basBomMapper.getEntityBom(record);
		} catch (Exception e) {
			throw new DaoException("得到BOM实体出错了！",e);
		}
	}
	
	
}