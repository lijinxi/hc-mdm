package com.hc.scm.mdm.web.controller;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasDict;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.service.BasDictService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
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
@RequestMapping("/bas_dict")
public class BasDictController extends BaseCrudController<BasDict> {
    @Resource
    private BasDictService basDictService;

    @Override
    public BaseCrudService init() {
        return basDictService;
    }
    
    /**
     * 获取用户菜单，包括权限值，url
     * @param req
     * @param model
     * @return
     */
    @RequestMapping("/getbasdictcombo.json")
    @ResponseBody
    public List<BasDictDtlComboModel> getBasDictCombo(HttpServletRequest req, String dictCode){
    	List<BasDictDtlComboModel> list = basDictService.getBasDictCombo(dictCode);
    	return list;
    }
    
}