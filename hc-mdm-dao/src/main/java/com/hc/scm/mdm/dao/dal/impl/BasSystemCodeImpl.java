package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasSystemCodeDao;
import com.hc.scm.mdm.dao.entity.BasCodeRuleDtl;
import com.hc.scm.mdm.dao.mapper.BasSystemCodeMapper;

@Repository("BasSystemCodeDao")
public class BasSystemCodeImpl extends BaseCrudDaoImpl implements BasSystemCodeDao {
	
	@Resource
    private BasSystemCodeMapper baseSystemCodeMapper;
	
	@Override
	public BaseCrudMapper init() {
		// TODO Auto-generated method stub
		return baseSystemCodeMapper;
	}

	@Override
	public List<BasCodeRuleDtl> selectBasCodeRuleDtlList(String billTypeNo
			) throws DaoException {
		// TODO Auto-generated method stub
		return baseSystemCodeMapper.selectBasCodeRuleDtlList(billTypeNo);
	}

}
