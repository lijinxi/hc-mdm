package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasZone;
import com.hc.scm.mdm.service.BasZoneService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 库区维护Controller
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:55
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_zone")
public class BasZoneController extends BaseCrudController<BasZone> {
    @Resource
    private BasZoneService basZoneService;

    @Override
    public BaseCrudService init() {
        return basZoneService;
    }
}