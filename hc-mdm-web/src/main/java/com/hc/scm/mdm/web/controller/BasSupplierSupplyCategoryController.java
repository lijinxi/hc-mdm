package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasSupplierSupplyCategory;
import com.hc.scm.mdm.service.BasSupplierSupplyCategoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:36:57
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_supplier_supply_category")
public class BasSupplierSupplyCategoryController extends BaseCrudController<BasSupplierSupplyCategory> {
    @Resource
    private BasSupplierSupplyCategoryService basSupplierSupplyCategoryService;

    @Override
    public BaseCrudService init() {
        return basSupplierSupplyCategoryService;
    }
}