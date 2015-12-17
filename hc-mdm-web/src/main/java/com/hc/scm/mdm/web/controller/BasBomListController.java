package com.hc.scm.mdm.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.exception.ValidException;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.entity.BasBomListSize;
import com.hc.scm.mdm.dao.model.BasBomListModel;
import com.hc.scm.mdm.service.BasBomListService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

/**
 * Description: BOM物料清单实体表Controller
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_bom_list")
public class BasBomListController extends BaseCrudController<BasBomList> {
	@Resource
	private BasBomListService basBomListService;

	@Override
	public BaseCrudService init() {
		return basBomListService;
	}
	
	/*
	 * 得到实表BOM清单，传入品牌，物料编码，BOM用途 参数，
	 * 如果url传递参数isAllList=true则展开所有BOM层级得到全部清单
	 */
	@RequestMapping("/getBomList.json")
	@ResponseBody
	public Map<String, Object> getBomList(HttpServletRequest req, Model model) throws Exception {
		if(StringUtils.isEmpty(req.getParameter("brandNo")) ||
		   StringUtils.isEmpty(req.getParameter("materialNo")) ||
		   StringUtils.isEmpty(req.getParameter("bomPurpose"))){
		   throw new Exception( "传参不正确（品牌，物料编号，用途为必输项！）");
		}

		Map<String, Object> resultMap = listByPage(req, model);
		String isAllList = StringUtils.isEmpty(req.getParameter("isAllList")) ? "false" : String.valueOf(req.getParameter("isAllList"));
		if (isAllList.equalsIgnoreCase("true")) {
			
			//展开所有的Bom清单
			List<BasBomListSize> sizeList = new ArrayList<BasBomListSize>();
			List<BasBomList> allList = basBomListService.getBomList(resultMap,sizeList);
			
			//重新处理分页(此种情况不考虑分页处理)
			if (resultMap.containsKey("totalCount")){
				resultMap.remove("totalCount");
			}
	        resultMap.put("list",allList); 
		}
		return resultMap;
	}
	
	@RequestMapping("/listSizeVo.json")
    @ResponseBody
    public Map<String,Object> listVoByPage(HttpServletRequest req, Model model) throws Exception {
        Map<String, Object> resultMap =new HashMap<String, Object>();
        ResultModel resultModel =new ResultModel();
        String mapperClassType =getModelMapperName(req);
        String selectVoName =req.getParameter("selectVoName");
        if(StringUtils.isEmpty(mapperClassType)){
			throw new ValidException("参数错误。[mapperClassType]");
		}
        if(StringUtils.isEmpty(selectVoName) || !"SelectListByVoBasBomListSize".equals(selectVoName)){
 			throw new ValidException("必须传入参数selectVoName=SelectListByVoBasBomListSize");
 		}
		if(StringUtils.isEmpty(req.getParameter("brandNo")) ||
		   StringUtils.isEmpty(req.getParameter("materialNo")) ||
		   StringUtils.isEmpty(req.getParameter("bomPurpose"))){
			throw new Exception("打横Bom实替代表，必须传入brandNo品牌，materialNo物料编号，bomPurpose用途参数！");
		}
		String brandNo = String.valueOf(req.getParameter("brandNo"));
		String materialNo = String.valueOf(req.getParameter("materialNo"));
		String bomPurpose = String.valueOf(req.getParameter("bomPurpose"));

        if(StringUtils.isNotEmpty(selectVoName)&& "SelectListByVoBasBomListSize".equals(selectVoName)){   	
        	//得到打横的头
        	resultMap.put("headlist", getVoList(mapperClassType,brandNo,materialNo,bomPurpose,selectVoName+"Head"));
     
        	//得到替代表打横数据 
        	resultMap.put("list", getVoList(mapperClassType,brandNo,materialNo,bomPurpose,selectVoName+"Data"));
        }
       
		resultMap.put("result", resultModel);
        return resultMap;
    }
	
	/**
	 * 返回打横数据
	 * @return
	 */
	private List<Object> getVoList(String mapperClassType,String brandNo,String materialNo,String bomPurpose,String voName){
		List<Object> volist=new ArrayList<>();
		if(StringUtils.isNotEmpty(brandNo) && StringUtils.isNotEmpty(materialNo) && StringUtils.isNotEmpty(bomPurpose)){
			Map<String, Object> params = new HashMap<String,Object>();
			params.put("mapperClassType", mapperClassType); //"BasBomListMapper"
			params.put("brandNo", brandNo);
			params.put("materialNo", materialNo);
			params.put("bomPurpose", bomPurpose);
			params.put("selectVoName", voName);
			volist = basBomListService.findVoByPage(null, null, null, params);
		}
    	return volist;
	}
	
}