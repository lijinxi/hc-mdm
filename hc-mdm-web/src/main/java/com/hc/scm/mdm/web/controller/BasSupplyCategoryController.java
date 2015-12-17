package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasSupplyCategory;
import com.hc.scm.mdm.service.BasSupplyCategoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-15 16:18:21
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_supply_category")
public class BasSupplyCategoryController extends BaseCrudController<BasSupplyCategory> {
    @Resource
    private BasSupplyCategoryService basSupplyCategoryService;

    @Override
    public BaseCrudService init() {
        return basSupplyCategoryService;
    }
}