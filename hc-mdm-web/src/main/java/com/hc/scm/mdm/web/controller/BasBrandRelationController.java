package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasBrandRelation;
import com.hc.scm.mdm.service.BasBrandRelationService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_brand_relation")
public class BasBrandRelationController extends BaseCrudController<BasBrandRelation> {
    @Resource
    private BasBrandRelationService basBrandRelationService;

    @Override
    public BaseCrudService init() {
        return basBrandRelationService;
    }
}