package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BillBom;
import com.hc.scm.mdm.service.BillBomService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: BOM维护单据头Controller
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bill_bom")
public class BillBomController extends BaseCrudController<BillBom> {
    @Resource
    private BillBomService billBomService;

    @Override
    public BaseCrudService init() {
        return billBomService;
    }
}