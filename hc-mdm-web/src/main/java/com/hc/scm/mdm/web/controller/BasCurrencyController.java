package com.hc.scm.mdm.web.controller;


import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasCurrency;
import com.hc.scm.mdm.service.BasCurrencyService;

import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 币别维护Controller
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:41:10
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_currency")
public class BasCurrencyController extends BaseCrudController<BasCurrency> {
    @Resource
    private BasCurrencyService basCurrencyService;

    @Override
    public BaseCrudService init() {
        return basCurrencyService;
    }
}