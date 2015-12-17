package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasSizeType;
import com.hc.scm.mdm.service.BasSizeTypeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_size_type")
public class BasSizeTypeController extends BaseCrudController<BasSizeType> {
    @Resource
    private BasSizeTypeService basSizeTypeService;

    @Override
    public BaseCrudService init() {
        return basSizeTypeService;
    }
}