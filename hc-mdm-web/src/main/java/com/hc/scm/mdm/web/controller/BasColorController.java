package com.hc.scm.mdm.web.controller;


import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasColor;
import com.hc.scm.mdm.service.BasColorService;

import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_color")
public class BasColorController extends BaseCrudController<BasColor> {
    @Resource
    private BasColorService basColorService;

    @Override
    public BaseCrudService init() {
        return basColorService;
    }
}