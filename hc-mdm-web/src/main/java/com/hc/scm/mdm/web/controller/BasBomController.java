package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasBom;
import com.hc.scm.mdm.service.BasBomService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_bom")
public class BasBomController extends BaseCrudController<BasBom> {
    @Resource
    private BasBomService basBomService;

    @Override
    public BaseCrudService init() {
        return basBomService;
    }
}