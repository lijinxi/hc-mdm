package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BillMaterial;
import com.hc.scm.mdm.service.BillMaterialService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:00
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bill_material")
public class BillMaterialController extends BaseCrudController<BillMaterial> {
    @Resource
    private BillMaterialService billMaterialService;

    @Override
    public BaseCrudService init() {
        return billMaterialService;
    }
}