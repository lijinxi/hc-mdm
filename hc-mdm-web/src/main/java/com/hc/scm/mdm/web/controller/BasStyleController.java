package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasStyle;
import com.hc.scm.mdm.service.BasStyleService;
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
@RequestMapping("/bas_style")
public class BasStyleController extends BaseCrudController<BasStyle> {
    @Resource
    private BasStyleService basStyleService;

    @Override
    public BaseCrudService init() {
        return basStyleService;
    }
}