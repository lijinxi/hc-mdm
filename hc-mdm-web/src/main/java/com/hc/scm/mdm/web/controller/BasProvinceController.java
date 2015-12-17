package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasProvince;
import com.hc.scm.mdm.service.BasProvinceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 省份维护Controller
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:46:24
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_province")
public class BasProvinceController extends BaseCrudController<BasProvince> {
    @Resource
    private BasProvinceService basProvinceService;

    @Override
    public BaseCrudService init() {
        return basProvinceService;
    }
}