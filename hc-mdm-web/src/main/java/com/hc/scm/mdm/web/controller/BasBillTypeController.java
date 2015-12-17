package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasBillType;
import com.hc.scm.mdm.service.BasBillTypeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_bill_type")
public class BasBillTypeController extends BaseCrudController<BasBillType> {
    @Resource
    private BasBillTypeService basBillTypeService;

    @Override
    public BaseCrudService init() {
        return basBillTypeService;
    }
}