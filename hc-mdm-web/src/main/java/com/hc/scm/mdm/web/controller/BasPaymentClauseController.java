package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasPaymentClause;
import com.hc.scm.mdm.service.BasPaymentClauseService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 付款条件维护Controller
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_payment_clause")
public class BasPaymentClauseController extends BaseCrudController<BasPaymentClause> {
    @Resource
    private BasPaymentClauseService basPaymentClauseService;

    @Override
    public BaseCrudService init() {
        return basPaymentClauseService;
    }
}