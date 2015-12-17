package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BasBomDao;
import com.hc.scm.mdm.service.BasBomService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
@Service("basBomService")
class BasBomServiceImpl extends BaseCrudServiceImpl implements BasBomService {
    @Resource
    private BasBomDao basBomDao;

    @Override
    public BaseCrudDao init() {
        return basBomDao;
    }

	@Override
	public <ModelType> ModelType getEntityBom(ModelType record) {
		return basBomDao.getEntityBom(record);
	}
}