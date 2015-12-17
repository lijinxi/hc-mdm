package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.mdm.dao.dal.BillMaterialSizeDao;
import com.hc.scm.mdm.service.BillMaterialSizeService;
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
@Service("billMaterialSizeService")
class BillMaterialSizeServiceImpl extends BaseCrudServiceImpl implements BillMaterialSizeService {
    @Resource
    private BillMaterialSizeDao billMaterialSizeDao;

    @Override
    public BaseCrudDao init() {
        return billMaterialSizeDao;
    }
}