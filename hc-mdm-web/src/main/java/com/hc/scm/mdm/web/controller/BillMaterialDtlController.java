package com.hc.scm.mdm.web.controller;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BillMaterialDtl;
import com.hc.scm.mdm.dao.entity.BasCategory;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.service.BillMaterialDtlService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bill_material_dtl")
public class BillMaterialDtlController extends BaseCrudController<BillMaterialDtl> {
    @Resource
    private BillMaterialDtlService billMaterialDtlService;

    @Override
    public BaseCrudService init() {
        return billMaterialDtlService;
    }
    
    @RequestMapping("/getParentCategory.json")
    @ResponseBody
    public List<BasCategory> getParentCategory(HttpServletRequest req, Integer parentCategoryId){
    	List<BasCategory> list = billMaterialDtlService.getParentCategory(parentCategoryId);
    	return list;
    }    
    
    @RequestMapping("/getCategory.json")
    @ResponseBody
    public List<BasCategory> getCategory(HttpServletRequest req, String categoryNo){
    	List<BasCategory> list = billMaterialDtlService.getCategory(categoryNo);
    	return list;
    }      
}