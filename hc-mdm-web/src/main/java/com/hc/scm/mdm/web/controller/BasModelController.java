package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasModel;
import com.hc.scm.mdm.service.BasModelService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 17:25:26
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_model")
public class BasModelController extends BaseCrudController<BasModel> {
    @Resource
    private BasModelService basModelService;

    @Override
    public BaseCrudService init() {
        return basModelService;
    }
}