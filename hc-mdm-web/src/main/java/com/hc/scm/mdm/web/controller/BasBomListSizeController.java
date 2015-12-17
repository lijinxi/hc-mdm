package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasBomListSize;
import com.hc.scm.mdm.service.BasBomListSizeService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-10 10:19:54
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_bom_list_size")
public class BasBomListSizeController extends BaseCrudController<BasBomListSize> {
    @Resource
    private BasBomListSizeService basBomListSizeService;

    @Override
    public BaseCrudService init() {
        return basBomListSizeService;
    }
}