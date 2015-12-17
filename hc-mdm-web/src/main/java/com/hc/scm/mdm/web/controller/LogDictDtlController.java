package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.LogDictDtl;
import com.hc.scm.mdm.service.LogDictDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-08 09:34:20
 * @version 1.0.0
 */
@Controller
@RequestMapping("/log_dict_dtl")
public class LogDictDtlController extends BaseCrudController<LogDictDtl> {
    @Resource
    private LogDictDtlService logDictDtlService;

    @Override
    public BaseCrudService init() {
        return logDictDtlService;
    }
}