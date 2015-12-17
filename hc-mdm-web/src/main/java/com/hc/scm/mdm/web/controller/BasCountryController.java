package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasCountry;
import com.hc.scm.mdm.service.BasCountryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 国家维护Controller
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:16:04
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_country")
public class BasCountryController extends BaseCrudController<BasCountry> {
    @Resource
    private BasCountryService basCountryService;

    @Override
    public BaseCrudService init() {
        return basCountryService;
    }
}