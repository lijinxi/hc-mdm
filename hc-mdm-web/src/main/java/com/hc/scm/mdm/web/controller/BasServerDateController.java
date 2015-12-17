package com.hc.scm.mdm.web.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.service.BasServerDateService;

@Controller
@RequestMapping("/bas_server_date")
public class BasServerDateController {
	
	@Resource
	private  BasServerDateService basServerDateService;
	
	/**
	 * 获取服务器时间
	 * @param req
	 * @param model
	 * @return
	 */
	@RequestMapping("/getServerDate.json")
	@ResponseBody
	public Map<String, Object> getServerDate(HttpServletRequest req) {
		// TODO Auto-generated method stub
		ResultModel resultModel =new ResultModel();
		Map<String, Object> retMap = new HashMap<String, Object>();
		retMap.put("ServerDate", basServerDateService.getServerDate() ==null ? new Date():basServerDateService.getServerDate());
		retMap.put("result", resultModel);
		return retMap;
	}
	
}
