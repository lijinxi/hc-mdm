package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasStore;
import com.hc.scm.mdm.service.BasStoreService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_store")
public class BasStoreController extends BaseCrudController<BasStore> {
    @Resource
    private BasStoreService basStoreService;

    @Override
    public BaseCrudService init() {
        return basStoreService;
    }
}