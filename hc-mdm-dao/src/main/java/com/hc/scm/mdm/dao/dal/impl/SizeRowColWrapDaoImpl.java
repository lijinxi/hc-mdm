package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.SizeRowColWrapDao;
import com.hc.scm.mdm.dao.mapper.SizeRowColWrapMapper;
import com.hc.scm.common.model.MaterialSizeRowColWrapModel;
import com.hc.scm.common.model.SizeRowColWrapModel;

import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
@Repository("sizeRowColWrapDao")
class SizeRowColWrapDaoImpl extends BaseCrudDaoImpl implements SizeRowColWrapDao {
    @Resource
    private SizeRowColWrapMapper sizeRowColWrapMapper;

    @Override
    public BaseCrudMapper init() {
        return sizeRowColWrapMapper;
    }

	@Override
	public List<SizeRowColWrapModel> selectSizeRowColWrap(
			Map<String, Object> params) throws DaoException {
		return sizeRowColWrapMapper.selectSizeRowColWrap(params);
	}
	
	@Override
	public List<MaterialSizeRowColWrapModel> selectMaterialSizeRowColWrap(
			String materialNo) throws DaoException {
		return sizeRowColWrapMapper.selectMaterialSizeRowColWrap(materialNo);
	}

	@Override
	public List<MaterialSizeRowColWrapModel> selectMaterialSize(
			String materialNo) throws DaoException {
		// TODO Auto-generated method stub
		return sizeRowColWrapMapper.selectMaterialSize(materialNo);
	}
}