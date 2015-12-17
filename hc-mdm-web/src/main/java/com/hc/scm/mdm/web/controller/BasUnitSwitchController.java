package com.hc.scm.mdm.web.controller;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasUnit;
import com.hc.scm.mdm.dao.entity.BasUnitSwitch;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.service.BasUnitSwitchService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_unit_switch")
public class BasUnitSwitchController extends BaseCrudController<BasUnitSwitch> {
    @Resource
    private BasUnitSwitchService basUnitSwitchService;

    @Override
    public BaseCrudService init() {
        return basUnitSwitchService;
    }
}