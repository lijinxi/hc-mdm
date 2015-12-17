package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;

/**
 * Description: BOM物料结构明细Dao
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
public interface BasBomListDao extends BaseCrudDao {
	public <ModelType> List<ModelType> findBomList(ModelType record) throws DaoException;
	public <ModelType> int checkEntityBom(ModelType record) throws DaoException;
	public <ModelType> int checkMaterial(ModelType record) throws DaoException;
	public <ModelType> int deleteBasBomListByBasBom(ModelType record) throws DaoException;
	public <ModelType> ModelType getEntityBomList(ModelType record) throws DaoException;
}