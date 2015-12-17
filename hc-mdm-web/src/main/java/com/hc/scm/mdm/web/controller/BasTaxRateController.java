package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasTaxRate;
import com.hc.scm.mdm.service.BasTaxRateService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:52:50
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_tax_rate")
public class BasTaxRateController extends BaseCrudController<BasTaxRate> {
    @Resource
    private BasTaxRateService basTaxRateService;

    @Override
    public BaseCrudService init() {
        return basTaxRateService;
    }
}