package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasDictDao;
import com.hc.scm.mdm.dao.mapper.BasDictMapper;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
@Service("basDictDao")
class BasDictDaoImpl extends BaseCrudDaoImpl implements BasDictDao {
    @Resource
    private BasDictMapper basDictMapper;

    @Override
    public BaseCrudMapper init() {
        return basDictMapper;
    }

	@Override
	public List<BasDictDtlComboModel> selectBasDictCombo(String dictCode) {
		try {
			return basDictMapper.selectBasDictCombo(dictCode);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
}