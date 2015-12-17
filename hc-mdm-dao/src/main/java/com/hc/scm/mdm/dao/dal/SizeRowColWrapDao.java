package com.hc.scm.mdm.dao.dal;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.model.MaterialSizeRowColWrapModel;
import com.hc.scm.common.model.SizeRowColWrapModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
public interface SizeRowColWrapDao extends BaseCrudDao {
	public List<SizeRowColWrapModel> selectSizeRowColWrap(Map<String, Object> params) throws DaoException;
	public List<MaterialSizeRowColWrapModel> selectMaterialSizeRowColWrap(String materialNo) throws DaoException;
	public List<MaterialSizeRowColWrapModel> selectMaterialSize(String materialNo) throws DaoException;
}