package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasAccountPeriod;
import com.hc.scm.mdm.service.BasAccountPeriodService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_account_period")
public class BasAccountPeriodController extends BaseCrudController<BasAccountPeriod> {
    @Resource
    private BasAccountPeriodService basAccountPeriodService;

    @Override
    public BaseCrudService init() {
        return basAccountPeriodService;
    }
}