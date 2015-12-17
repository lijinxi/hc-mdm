package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasDivision;
import com.hc.scm.mdm.service.BasDivisionService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-12 10:42:02
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_division")
public class BasDivisionController extends BaseCrudController<BasDivision> {
    @Resource
    private BasDivisionService basDivisionService;

    @Override
    public BaseCrudService init() {
        return basDivisionService;
    }
}