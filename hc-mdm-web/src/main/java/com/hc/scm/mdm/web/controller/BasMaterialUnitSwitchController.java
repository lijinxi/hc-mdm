package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasMaterialUnitSwitch;
import com.hc.scm.mdm.service.BasMaterialUnitSwitchService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:48:27
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_material_unit_switch")
public class BasMaterialUnitSwitchController extends BaseCrudController<BasMaterialUnitSwitch> {
    @Resource
    private BasMaterialUnitSwitchService basMaterialUnitSwitchService;

    @Override
    public BaseCrudService init() {
        return basMaterialUnitSwitchService;
    }
}