package com.hc.scm.mdm.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.mdm.dao.entity.BasSupplier;
import com.hc.scm.mdm.dao.entity.BasSupplierContacter;
import com.hc.scm.mdm.service.BasSupplierService;
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
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_supplier")
public class BasSupplierController extends BaseCrudController<BasSupplier> {
    @Resource
    private BasSupplierService basSupplierService;

    @Override
    public BaseCrudService init() {
        return basSupplierService;
    }
    
    /**
	 * 判断是否联系人
	 * @return 检查存在返回1，异常情况或错误都将返回0
	 */
    @RequestMapping("/checkIsDefault.json")
	@ResponseBody
	public int checkIsDefault (HttpServletRequest req, Model mode){
    	try{ 
    		String supplierNo = String.valueOf(req.getParameter("supplierNo"));
    		//String contacterId = String.valueOf(req.getParameter("contacterId"));\
    		return basSupplierService.checkContacter(supplierNo);
    		//return basSupplierService.checkContacter(new BasSupplierContacter(supplierNo));
    	}
    	catch(Exception ex){
    		return 0;
    	}
    }
}