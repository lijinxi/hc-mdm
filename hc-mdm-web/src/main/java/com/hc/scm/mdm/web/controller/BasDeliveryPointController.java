package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasDeliveryPoint;
import com.hc.scm.mdm.service.BasDeliveryPointService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_delivery_point")
public class BasDeliveryPointController extends BaseCrudController<BasDeliveryPoint> {
    @Resource
    private BasDeliveryPointService basDeliveryPointService;

    @Override
    public BaseCrudService init() {
        return basDeliveryPointService;
    }
}