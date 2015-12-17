package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
public interface BasDictDao extends BaseCrudDao {
	public List<BasDictDtlComboModel> selectBasDictCombo(String dictCode) throws DaoException;
}