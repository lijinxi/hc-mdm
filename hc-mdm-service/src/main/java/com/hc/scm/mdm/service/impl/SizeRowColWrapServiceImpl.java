package com.hc.scm.mdm.service.impl;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.dal.SizeRowColWrapDao;
import com.hc.scm.common.model.MaterialSizeRowColWrapModel;
import com.hc.scm.common.model.SizeRowColWrapModel;
import com.hc.scm.mdm.service.SizeRowColWrapService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
@Service("sizeRowColWrapService")
class SizeRowColWrapServiceImpl extends BaseCrudServiceImpl implements SizeRowColWrapService {
    @Resource
    private SizeRowColWrapDao sizeRowColWrapDao;

    @Override
    public BaseCrudDao init() {
        return sizeRowColWrapDao;
    }

	@Override
	public List<SizeRowColWrapModel> getSizeRowColWrap(
			Map<String, Object> params) throws ServiceException {
		return sizeRowColWrapDao.selectSizeRowColWrap(params);
	}

	@Override
	public List<MaterialSizeRowColWrapModel> getMaterialSizeRowColWrap(
			String materialNo) throws ServiceException {
		return sizeRowColWrapDao.selectMaterialSizeRowColWrap(materialNo);
	}

	@Override
	public List<MaterialSizeRowColWrapModel> getMaterialSize(String materialNo)
			throws ServiceException {
		return sizeRowColWrapDao.selectMaterialSize(materialNo);
	}
}