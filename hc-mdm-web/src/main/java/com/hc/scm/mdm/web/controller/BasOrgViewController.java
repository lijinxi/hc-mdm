package com.hc.scm.mdm.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.model.TreeModel;
import com.hc.scm.mdm.dao.model.BasOrgGridModel;
import com.hc.scm.mdm.service.BasOrgViewService;


@Controller
@RequestMapping("bas_org_view")
public class BasOrgViewController extends BaseCrudController<BasOrgGridModel>{
	
	@Resource
	BasOrgViewService basOrgViewService;
	
	@Override
	protected BaseCrudService init() {
		return basOrgViewService;
	}
	
	@RequestMapping("/getOrgViewTree.json")
	@ResponseBody
	public Object getOrgViewTree(String Type1){
		
		int type = Integer.valueOf(Type1);
		
		List<TreeModel> tree = basOrgViewService.getOrgViewTree(type);
		Map<String , Object> map = new HashMap<String,Object>();
		map.put("children", tree);
		return map;
	}

	
}
