package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasCustomer;
import com.hc.scm.mdm.service.BasCustomerService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 08:32:43
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_customer")
public class BasCustomerController extends BaseCrudController<BasCustomer> {
    @Resource
    private BasCustomerService basCustomerService;

    @Override
    public BaseCrudService init() {
        return basCustomerService;
    }
}