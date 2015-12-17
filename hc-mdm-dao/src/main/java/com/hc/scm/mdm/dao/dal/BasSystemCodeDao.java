package com.hc.scm.mdm.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.entity.BasCodeRuleDtl;


public interface BasSystemCodeDao extends BaseCrudDao  {
	public List<BasCodeRuleDtl>  selectBasCodeRuleDtlList(String billtypeno) throws DaoException;
}
