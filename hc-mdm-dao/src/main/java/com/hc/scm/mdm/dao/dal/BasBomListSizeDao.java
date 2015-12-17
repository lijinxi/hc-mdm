package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.entity.BasBom;
import com.hc.scm.mdm.dao.entity.BasBomList;

/**
 * Description: BOM物料替代表Dao
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-10 10:19:54
 * @version 1.0.0
 */
public interface BasBomListSizeDao extends BaseCrudDao {
	public <ModelType> List<ModelType> findBomListSize(BasBomList record) throws DaoException;
	public <ModelType> int deleteBasBomListSizeByBasBom(BasBom record) throws DaoException;
}