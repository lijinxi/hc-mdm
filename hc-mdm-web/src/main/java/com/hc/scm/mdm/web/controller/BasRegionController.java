package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasRegion;
import com.hc.scm.mdm.service.BasRegionService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 17:13:47
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_region")
public class BasRegionController extends BaseCrudController<BasRegion> {
    @Resource
    private BasRegionService basRegionService;

    @Override
    public BaseCrudService init() {
        return basRegionService;
    }
}