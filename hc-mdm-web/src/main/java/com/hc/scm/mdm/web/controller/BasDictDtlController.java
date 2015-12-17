package com.hc.scm.mdm.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.utils.ExcelUtils;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.dao.entity.BasDictDtl;
import com.hc.scm.mdm.service.BasDictDtlService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_dict_dtl")
public class BasDictDtlController extends BaseCrudController<BasDictDtl> {
    @Resource
    private BasDictDtlService basDictDtlService;

    @Override
    public BaseCrudService init() {
        return basDictDtlService;
    }
    

    
}