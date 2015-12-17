package com.hc.scm.mdm.web.controller;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasCategory;
import com.hc.scm.mdm.service.BasCategoryService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_category")
public class BasCategoryController extends BaseCrudController<BasCategory> {
    @Resource
    private BasCategoryService basCategoryService;

    @Override
    public BaseCrudService init() {
        return basCategoryService;
    }
    
    @RequestMapping("/checkDelete.json")
    @ResponseBody
    public String checkDeleteCategory(HttpServletRequest req, Model model) throws Exception{
		if(StringUtils.isEmpty(req.getParameter("categoryNo"))){
			throw new Exception("没有得到当前网格行的类别编号！");
		}
		String categoryNo = String.valueOf(req.getParameter("categoryNo"));
    	return basCategoryService.checkDeleteCategory(categoryNo);
    }
    
    @RequestMapping("/listCategory.json")
    @ResponseBody
    public List<BasCategory> getCategory(HttpServletRequest req, Model model) throws Exception{
    	if(StringUtils.isEmpty(req.getParameter("type"))){
    		throw new Exception("必须传入一个参数type=0表示小类，=1表示大类");
    	}
    	//String type = String.valueOf(req.getParameter("type"));
    	Map<String, Object> params = builderParams(req, model);
    	List<BasCategory> list =basCategoryService.getCategory(params);
    	return list;
    }
}