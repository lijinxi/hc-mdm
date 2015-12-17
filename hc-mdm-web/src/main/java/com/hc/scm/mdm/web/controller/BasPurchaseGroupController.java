package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasPurchaseGroup;
import com.hc.scm.mdm.service.BasPurchaseGroupService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_purchase_group")
public class BasPurchaseGroupController extends BaseCrudController<BasPurchaseGroup> {
    @Resource
    private BasPurchaseGroupService basPurchaseGroupService;

    @Override
    public BaseCrudService init() {
        return basPurchaseGroupService;
    }
}