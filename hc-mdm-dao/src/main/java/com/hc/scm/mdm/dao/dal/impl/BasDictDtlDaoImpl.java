package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BasDictDtlDao;
import com.hc.scm.mdm.dao.mapper.BasDictDtlMapper;
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
@Service("basDictDtlDao")
class BasDictDtlDaoImpl extends BaseCrudDaoImpl implements BasDictDtlDao {
    @Resource
    private BasDictDtlMapper basDictDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return basDictDtlMapper;
    }
}