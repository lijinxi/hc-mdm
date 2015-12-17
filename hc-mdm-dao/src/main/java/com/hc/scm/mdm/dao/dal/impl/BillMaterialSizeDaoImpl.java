package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.mdm.dao.dal.BillMaterialSizeDao;
import com.hc.scm.mdm.dao.mapper.BillMaterialSizeMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
@Service("billMaterialSizeDao")
class BillMaterialSizeDaoImpl extends BaseCrudDaoImpl implements BillMaterialSizeDao {
    @Resource
    private BillMaterialSizeMapper billMaterialSizeMapper;

    @Override
    public BaseCrudMapper init() {
        return billMaterialSizeMapper;
    }
}