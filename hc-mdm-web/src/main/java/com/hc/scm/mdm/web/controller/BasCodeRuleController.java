package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasCodeRule;
import com.hc.scm.mdm.service.BasCodeRuleService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 编码规则主表
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_code_rule")
public class BasCodeRuleController extends BaseCrudController<BasCodeRule> {
    @Resource
    private BasCodeRuleService basCodeRuleService;

    @Override
    public BaseCrudService init() {
        return basCodeRuleService;
    }
}