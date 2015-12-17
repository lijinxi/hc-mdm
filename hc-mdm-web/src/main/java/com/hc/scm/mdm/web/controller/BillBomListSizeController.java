package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BillBomListSize;
import com.hc.scm.mdm.service.BillBomListSizeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 15:49:20
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bill_bom_list_size")
public class BillBomListSizeController extends BaseCrudController<BillBomListSize> {
    @Resource
    private BillBomListSizeService billBomListSizeService;

    @Override
    public BaseCrudService init() {
        return billBomListSizeService;
    }
}