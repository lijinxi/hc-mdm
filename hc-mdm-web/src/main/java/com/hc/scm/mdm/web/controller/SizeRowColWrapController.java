package com.hc.scm.mdm.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.dao.entity.SizeRowColWrap;
import com.hc.scm.common.model.MaterialSizeRowColWrapModel;
import com.hc.scm.common.model.SizeInfoModel;
import com.hc.scm.common.model.SizeRowColWrapModel;
import com.hc.scm.mdm.service.SizeRowColWrapService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import com.hc.scm.common.utils.CommonUtil;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
@Controller
@RequestMapping("/size_row_col_wrap")
public class SizeRowColWrapController extends BaseCrudController<SizeRowColWrap> {
    @Resource
    private SizeRowColWrapService sizeRowColWrapService;

    @Override
    public BaseCrudService init() {
        return sizeRowColWrapService;
    }
    
    /**
     * 根据尺码类型或者物料获取所有尺码横排信息    包括该物料所拥有尺码 ；该物料尺码类型下所有尺码
     * @param req
     * @param model
     * @return
     */
    @RequestMapping("/getSizeRowColWrap.json")
    @ResponseBody
    public Map<String, Object> getSizeRowColWrap(HttpServletRequest req, Model model)  throws Exception{
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	ResultModel resultModel =new ResultModel();
    	List<MaterialSizeRowColWrapModel> usedlist = null;
    	List<SizeRowColWrapModel> headlist = null;
    	Map<String, Object> params = this.builderParams(req, model);
    	
    	//准备参数   转换格式"A1,B1,B3"为"'A1','B1','B3'"
    	String materialNo = null;
        if(params.get("materialNo") !=null){
        	materialNo = "'" + params.get("materialNo").toString().replaceAll(",", "','") + "'";
        	params.put("materialNo", materialNo);
 		}
        if(params.get("sizeTypeNo")!=null){
			params.put("sizeTypeNo", "'"
					+ params.get("sizeTypeNo").toString()
							.replaceAll(",", "','") + "'");
 		}
        //查询
        usedlist = sizeRowColWrapService.getMaterialSize(materialNo);
    	if(usedlist != null && usedlist.size() > 0){
    		for(MaterialSizeRowColWrapModel used : usedlist){//TODO:使用指定model
	    		String sizeType = used.getSizeTypeNo();	//获取物料尺码中的sizeTypeNo
	    		headlist = sizeRowColWrapService.getSizeRowColWrap(params);
	    		Map<String, SizeRowColWrapModel> headlistMap = new HashMap<String, SizeRowColWrapModel>();
	    		for(SizeRowColWrapModel temp : headlist ){
	 		    	headlistMap.put(temp.getSizeTypeNo(), temp);
	 		    }
	    		SizeRowColWrapModel headModel = headlistMap.get(sizeType);	//获取物料尺码sizeTypeNo横排对象
	    		List<SizeInfoModel> sizeInfo = used.getSizeInfo();
	    		for(SizeInfoModel vo : sizeInfo){
	    			for(int i=1; i<=SysConstans.MAX_ROWCOLWRAP_SIZE; i++){
	    				Object[] getArgs = new Object[]{};
	        			String getFiledName = "getF" + i;
	        			String headSizeNo = (String) CommonUtil.invokeMethod(headModel, getFiledName, getArgs);
						if(vo.getSizeNo().equals(headSizeNo)){
							String content = vo.getSizeName().toString();//TODO:尺码横排需展示的数量，根据绑定字段自定义
							if (content != null) {
								Object[] setArgs=new Object[]{content};	
								String setFiledName = "setF" + i;
								CommonUtil.invokeMethod(used, setFiledName, setArgs);
							 }
							break;
	        			}
	    			}
	    		}
    		}
    	}
    	//结果装载
    	resultMap.put("usedlist", usedlist);//该物料所拥有尺码
    	resultMap.put("headlist", headlist);//该物料尺码类型下所有尺码
    	resultMap.put("result", resultModel);
    	return resultMap;
    }
    
    /**
     * 根据尺码类型或者物料获取所有尺码横排信息    包括该物料所拥有尺码 ；该物料尺码类型下所有尺码
     * @param req
     * @param model
     * @return
     */
    @RequestMapping("/getSizeRowColWrap2.json")
    @ResponseBody
    public Map<String, Object> getSizeRowColWrap2(HttpServletRequest req, Model model){
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	ResultModel resultModel = new ResultModel();
    	List<SizeRowColWrapModel> headlist = null;
    	List<MaterialSizeRowColWrapModel> usedlist = null;
    	Map<String, Object> params = this.builderParams(req, model);
    	
    	//准备参数   转换格式"A1,B1,B3"为"'A1','B1','B3'"
    	String materialNo = null;
        if(params.get("materialNo") !=null){
        	materialNo = "'" + params.get("materialNo").toString().replaceAll(",", "','") + "'";
        	params.put("materialNo", materialNo);
 		}
        if(params.get("sizeTypeNo")!=null){
			params.put("sizeTypeNo", "'"
					+ params.get("sizeTypeNo").toString()
							.replaceAll(",", "','") + "'");
 		}
        //查询
    	usedlist = sizeRowColWrapService.getMaterialSizeRowColWrap(materialNo);
    	if(usedlist != null && usedlist.size() > 0){
    		 headlist = sizeRowColWrapService.getSizeRowColWrap(params);
    	}
    	//结果装载
    	resultMap.put("usedlist", usedlist);//该物料所拥有尺码
    	resultMap.put("headlist", headlist);//该物料尺码类型下所有尺码
    	resultMap.put("result", resultModel);
    	return resultMap;
    }
    
    /**
     * 根据物料编码获取所有当前物料所拥有的尺码横排信息
     * @param req
     * @param model
     * @return
     */
    @RequestMapping("/getMaterialSizeRowColWrap.json")
    @ResponseBody
    public List<MaterialSizeRowColWrapModel> getMaterialSizeRowColWrap(HttpServletRequest req, String materialNo){
    	List<MaterialSizeRowColWrapModel> list = sizeRowColWrapService.getMaterialSizeRowColWrap(materialNo);
    	return list;
    }
    
}