package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasCity;
import com.hc.scm.mdm.service.BasCityService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:35
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_city")
public class BasCityController extends BaseCrudController<BasCity> {
    @Resource
    private BasCityService basCityService;

    @Override
    public BaseCrudService init() {
        return basCityService;
    }
}