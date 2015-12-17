package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasSupplierBrand;
import com.hc.scm.mdm.service.BasSupplierBrandService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_supplier_brand")
public class BasSupplierBrandController extends BaseCrudController<BasSupplierBrand> {
    @Resource
    private BasSupplierBrandService basSupplierBrandService;

    @Override
    public BaseCrudService init() {
        return basSupplierBrandService;
    }
}