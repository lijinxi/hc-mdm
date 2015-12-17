package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasBomListDao;
import com.hc.scm.mdm.dao.mapper.BasBomListMapper;
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
@Repository("basBomListDao")
class BasBomListDaoImpl extends BaseCrudDaoImpl implements BasBomListDao {
    @Resource
    private BasBomListMapper basBomListMapper;

    @Override
    public BaseCrudMapper init() {
        return basBomListMapper;
    }

	@Override
	public <ModelType> List<ModelType> findBomList(ModelType record) throws DaoException {
		try {
			return basBomListMapper.findBomList(record);
		} catch (Exception e) {
			throw new DaoException("查找BOM清单出错了！",e);
		}
	}

	/**
	 * 检查BOM头是否存在，不使BasBom的selectCount，单独来判断
	 */
	@Override
	public <ModelType> int checkEntityBom(ModelType record) throws DaoException{
		try {
			String check =  basBomListMapper.checkEntityBom(record);
			return check==null ? -1 : Integer.parseInt(check);
		} catch (Exception e) {
			throw new DaoException("检查BOM头是否存在出错了！",e);
		}
	}
	
	@Override
	public <ModelType> ModelType getEntityBomList(ModelType record) throws DaoException {
		try {
			return  basBomListMapper.getEntityBomList(record);
		} catch (Exception e) {
			throw new DaoException("得到BOM List出错了！",e);
		}
	}

	/**
	 * 检查物料是否存在，由于物料表可能查询条件使用的是like，不使用它里面的selectCount，单独来判断
	 */
	@Override
	public <ModelType> int checkMaterial(ModelType record) throws DaoException{
		try {
			return basBomListMapper.checkMaterial(record);
		} catch (Exception e) {
			throw new DaoException("检查物料是否存在出错了！",e);
		}
	}
	
	/**
	 * 删除BOM清单，条件按BasBom.bomId
	 */
	public <ModelType> int deleteBasBomListByBasBom(ModelType record) throws DaoException{
		try {
			return basBomListMapper.deleteBasBomListByBasBom(record);
		} catch (Exception e) {
			throw new DaoException("删除Bom清单出错了！",e);
		}
	}
}