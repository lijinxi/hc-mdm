package com.hc.scm.mdm.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.exception.ValidException;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.entity.BillBomList;
import com.hc.scm.mdm.service.BasBomListService;
import com.hc.scm.mdm.service.BillBomListService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: BOM维护单据明细Controller
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bill_bom_list")
public class BillBomListController extends BaseCrudController<BillBomList> {
	@Resource
    private BillBomListService billBomListService;
    
    @Resource
    private BasBomListService basBomListService;

    @Override
    public BaseCrudService init() {
        return billBomListService;
    }
    
    /*
	 * 得到单据BOM清单，传入单据编号，序号参数，如果url传递参数isAllList=true则展开所有单据BOM层级得到全部清单
	 */
	@RequestMapping("/getBomList.json")
	@ResponseBody
	public Map<String, Object> getBomList(HttpServletRequest req, Model model) throws Exception {
		Map<String, Object> resultMap = listByPage(req, model);
		String isAllList = StringUtils.isEmpty(req.getParameter("isAllList")) ? "false" : String.valueOf(req.getParameter("isAllList"));
		if (isAllList.equalsIgnoreCase("true")) {
			//展开所有的单据Bom清单
			billBomListService.getBomList(resultMap);
		}
		return resultMap;
	}
	
	/**
	 * 检查物料编号是否存在，接受参数materialNo(这里没有用basMaterialService的selectCount)
	 * @return 检查存在返回1，异常情况或错误都将返回0
	 */
	@RequestMapping("/checkMaterial.json")
	@ResponseBody
	public int checkMaterial(HttpServletRequest req, Model model){
		try {
			if(StringUtils.isEmpty(req.getParameter("materialNo"))){
				return 0;
			}
			String materialNo = String.valueOf(req.getParameter("materialNo"));
			return basBomListService.checkMaterial(new BasBomList(materialNo));
		} catch (Exception e) {
			return 0;
		}
	}
	
	/**
	 * 验证能否引入Bom或增加Bom的判断
	 * @return 允许返回空字符，否则返回对应的提示信息
	 */
	@RequestMapping("/checkImportBillBom.json")
	@ResponseBody
	public String CheckImportBillBom(HttpServletRequest req, Model model) throws Exception{
		if(StringUtils.isEmpty(req.getParameter("maintainType")) ||
		   StringUtils.isEmpty(req.getParameter("oldBrandNo")) ||
		   StringUtils.isEmpty(req.getParameter("materialNo")) ||
		   StringUtils.isEmpty(req.getParameter("oldBomPurpose"))){
			return "传参不正确（维护类型，原品牌，物料编号，原用途为必输项！）";
		}
		String maintainType = String.valueOf(req.getParameter("maintainType"));
		String oldBrandNo = String.valueOf(req.getParameter("oldBrandNo"));
		String materialNo = String.valueOf(req.getParameter("materialNo"));
		String oldBomPurpose = String.valueOf(req.getParameter("oldBomPurpose"));
		String newBomPurpose="";
		if (!StringUtils.isEmpty(req.getParameter("newBomPurpose"))){
			newBomPurpose=String.valueOf(req.getParameter("newBomPurpose"));
		}
		String newBrandNo="";
		if (!StringUtils.isEmpty(req.getParameter("newBrandNo"))){
			newBrandNo=String.valueOf(req.getParameter("newBrandNo"));
		}
		String billNo="";
		if (!StringUtils.isEmpty(req.getParameter("billNo"))){
			billNo=String.valueOf(req.getParameter("billNo"));
		}
		String orderNo="0";
		if (!StringUtils.isEmpty(req.getParameter("orderNo"))){
			orderNo=String.valueOf(req.getParameter("orderNo"));
		}
		return billBomListService.CheckImportBillBom(maintainType, oldBrandNo, materialNo, oldBomPurpose, newBomPurpose, newBrandNo, billNo, orderNo);
	}
	
	/*
	 * 从实体BOM清单中引入到单据BOM（测试用，直接返回从BOM实表得到的详细清单List<>）
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("/testImportBillBom.json")
	@ResponseBody
	public <ModelType> List<ModelType> testImportBillBom(HttpServletRequest req, Model model) throws Exception{
/*			if(StringUtils.isEmpty(req.getParameter("maintainType"))){
				throw new Exception("引入BOM，维护类型不能为空！");
			}
			String maintainType = String.valueOf(req.getParameter("maintainType"));*/
			if(StringUtils.isEmpty(req.getParameter("oldBrandNo"))){
				throw new Exception("引入BOM，原品牌不能为空！");
			}
			String brandNo = String.valueOf(req.getParameter("oldBrandNo"));
			
			if(StringUtils.isEmpty(req.getParameter("materialNo"))){
				throw new Exception("引入BOM，物料编码不能为空！");
			}
			String materialNo = String.valueOf(req.getParameter("materialNo"));
			
			if(StringUtils.isEmpty(req.getParameter("oldBomPurpose"))){
				throw new Exception("引入BOM，原用途不能为空！");
			}
			String bomPurpose = String.valueOf(req.getParameter("oldBomPurpose"));
			
			List<ModelType> allList = new ArrayList<ModelType>();
			List<ModelType> list = new ArrayList<ModelType>();
			list.add((ModelType) new BasBomList(brandNo,materialNo,bomPurpose));
			
			basBomListService.getAllBomList(allList, list);
			return allList;
	}
	
	/*
	 * 从实体BOM清单中引入到单据BOM
	 */
	@RequestMapping("/importBillBom.json")
	@ResponseBody
	public <ModelType> Map<String, Object> importBillBom(HttpServletRequest req, Model model) throws Exception{
			if(StringUtils.isEmpty(req.getParameter("maintainType"))){
				throw new Exception("引入BOM，维护类型不能为空！");
			}
			String maintainType = String.valueOf(req.getParameter("maintainType"));			
			if(StringUtils.isEmpty(req.getParameter("oldBrandNo"))){
				throw new Exception("引入BOM，原品牌不能为空！");
			}
			String brandNo = String.valueOf(req.getParameter("oldBrandNo"));
			
			if(StringUtils.isEmpty(req.getParameter("materialNo"))){
				throw new Exception("引入BOM，物料编号不能为空！");
			}
			String materialNo = String.valueOf(req.getParameter("materialNo"));
			
			if(StringUtils.isEmpty(req.getParameter("oldBomPurpose"))){
				throw new Exception("引入BOM，原用途不能为空！");
			}
			String bomPurpose = String.valueOf(req.getParameter("oldBomPurpose"));
			String newBomPurpose = StringUtils.isEmpty(req.getParameter("newBomPurpose")) ? "" : String.valueOf(req.getParameter("newBomPurpose"));
			String newBrandNo = StringUtils.isEmpty(req.getParameter("newBrandNo")) ? "" : String.valueOf(req.getParameter("newBrandNo"));
			
			String billNo="";
			String orderNo="0";
			//接受在某个成品或成品下增加子结构
			if(!StringUtils.isEmpty(req.getParameter("billNo")) && !StringUtils.isEmpty(req.getParameter("orderNo"))){
				billNo = String.valueOf(req.getParameter("billNo"));
				orderNo = String.valueOf(req.getParameter("orderNo"));
			}
			return billBomListService.importBillBom(Integer.parseInt(maintainType),billNo,orderNo,newBomPurpose,newBrandNo,getCurrentUser(req),new BasBomList(brandNo,materialNo,bomPurpose));
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
        if(StringUtils.isEmpty(selectVoName) || !"SelectListByVoBillBomListSize".equals(selectVoName)){
 			throw new ValidException("必须传入参数selectVoName=SelectListByVoBillBomListSize");
 		}
		if(StringUtils.isEmpty(req.getParameter("billNo")) ||
			StringUtils.isEmpty(req.getParameter("orderNo"))){
			throw new Exception("打横Bom单据替代表，必需传入单据编号和树节点物料序号参数！");
		}
		String billNo = String.valueOf(req.getParameter("billNo"));
		String orderNo = String.valueOf(req.getParameter("orderNo"));

        if(StringUtils.isNotEmpty(selectVoName)&& "SelectListByVoBillBomListSize".equals(selectVoName)){   	
        	//得到打横的头
        	List<Object> headList = getVoList(mapperClassType,billNo,Short.parseShort(orderNo),selectVoName+"Head");
        	resultMap.put("headlist", headList);
        	//resultMap.put("usedList", headList);
     
        	//得到替代表打横数据 
        	resultMap.put("list", getVoList(mapperClassType,billNo,Short.parseShort(orderNo),selectVoName+"Data"));
        }
       
		resultMap.put("result", resultModel);
        return resultMap;
    }
	
	/**
	 * 返回打横数据
	 * @return
	 */
	private List<Object> getVoList(String mapperClassType,String billNo,Short orderNo,String voName){
		List<Object> volist=new ArrayList<>();
		if(billNo!=null){
			Map<String, Object> params = new HashMap<String,Object>();
			params.put("mapperClassType", mapperClassType); //"BillBomListMapper"
			params.put("billNo", billNo);
			params.put("orderNo", orderNo);
			params.put("selectVoName", voName);
			volist = billBomListService.findVoByPage(null, null, null, params);
		}
    	return volist;
	}
	
	@RequestMapping("/checkBillOrderNo.json")
    @ResponseBody
    public int checkBillOrderNo(HttpServletRequest req, Model model) throws Exception {
		if(StringUtils.isEmpty(req.getParameter("billNo")) || StringUtils.isEmpty(req.getParameter("orderNo"))){
				throw new Exception("参数错误，必需传入单据编号billNo和物料序号orderNo！");
		}
		String billNo = String.valueOf(req.getParameter("billNo"));
		Short orderNo=0;
		try {
			orderNo = Short.parseShort(String.valueOf(req.getParameter("orderNo")));
		} catch (NumberFormatException e) {
			throw new Exception("请输入一个0 ~ 32767的序号！");
		}
		return billBomListService.checkBillOrderNo(billNo, orderNo);
	}
}