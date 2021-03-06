package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasBrand;
import com.hc.scm.mdm.service.BasBrandService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:40:08
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_brand")
public class BasBrandController extends BaseCrudController<BasBrand> {
    @Resource
    private BasBrandService basBrandService;

    @Override
    public BaseCrudService init() {
        return basBrandService;
    }
}