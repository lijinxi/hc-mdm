package com.hc.scm.mdm.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.dao.entity.BasCodeRuleDtl;
import com.hc.scm.mdm.service.BasSystemCodeService;



/**
 * Description: 生成单据编号
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     tanbin
 * @date:  2015-04-06
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_system_code")
public class BasSystemCodeController extends BaseCrudController<BasCodeRuleDtl> {
	 @Resource
	 private BasSystemCodeService basSystemCodeService;
	 
	 @Override
	 public BaseCrudService init() {
	    return basSystemCodeService;
	 }
	 
	/**
	 * 获取单据编号
	 * @param req
	 * @param model
	 * @return
	 */
	@RequestMapping("/getSheetIdCode.json")
	@ResponseBody
	public Map<String, Object> getSystemSheetid(HttpServletRequest req, Model model){
		ResultModel resultModel =new ResultModel();
		Map<String, Object> retMap = new HashMap<String, Object>();
		Map<String, Object> parmMap = new HashMap<String, Object>();
	
		String billtypeNo =req.getParameter("billtypeNo");//返回单据类别
		String detail =req.getParameter("detail");//返回字段集合
		String  SheetIdCode="";
		if(billtypeNo!=""&& billtypeNo!=null){
			
			parmMap.put("billtypeNo",billtypeNo);
			parmMap.put("detail", detail!=""&&detail!=null?detail:"");
			SheetIdCode= basSystemCodeService.getSystemSheetid(parmMap);

		}else{
			resultModel.setMsg("单据类型为空!");
			resultModel.setResultCode("-1");
		}
		retMap.put("sheetIdCode", SheetIdCode);
		retMap.put("result", resultModel);
		return retMap;
	}
}
