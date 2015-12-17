package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasFactory;
import com.hc.scm.mdm.service.BasFactoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:07
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_factory")
public class BasFactoryController extends BaseCrudController<BasFactory> {
    @Resource
    private BasFactoryService basFactoryService;

    @Override
    public BaseCrudService init() {
        return basFactoryService;
    }
}