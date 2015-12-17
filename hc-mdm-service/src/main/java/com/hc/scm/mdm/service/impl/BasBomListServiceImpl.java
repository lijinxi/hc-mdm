package com.hc.scm.mdm.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.dal.BasBomListDao;
import com.hc.scm.mdm.dao.dal.BasBomListSizeDao;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.entity.BasBomListSize;
import com.hc.scm.mdm.service.BasBomListService;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

class BasBomListOrderIndex{
	private Short orderNo;

	public Short getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(Short orderNo) {
		this.orderNo = orderNo;
	}
	public BasBomListOrderIndex(){
		orderNo=0;
	}
}
/**
 * Description: BOM物料清单实体Service实现
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:55:19
 * @version 1.0.0
 */
@Service("basBomListService")
class BasBomListServiceImpl extends BaseCrudServiceImpl implements BasBomListService {
    @Resource
    private BasBomListDao basBomListDao;
    
    @Resource
    private BasBomListSizeDao basBomListSizeDao;

    @Override
    public BaseCrudDao init() {
        return basBomListDao;
    }

    /**
     * 得到BOM清单，目前只处理resultMap里List只有一行数据的情况
     */
	@Override
	public <ModelType,SizeType> List<ModelType> getBomList(Map<String, Object> resultMap,List<SizeType> sizeList) throws ServiceException {
		if (resultMap==null){
			throw new ServiceException("当前的节点的resultMap不能为空！");
		}
		if (!(resultMap.get("list") instanceof ArrayList<?>)){
			throw new ServiceException("resultMap list类型有错误！");
		}
		
		List<ModelType> allList = new ArrayList<ModelType>();
		try {
			@SuppressWarnings("unchecked")
			List<ModelType> list = (List<ModelType>)resultMap.get("list");
			if (list.size()==1){
				//((BasBomList)list.get(0)).setIsLeaf((short) 1);
				getAllBomList(allList,sizeList,list);
			}
			if (sizeList!=null){
				resultMap.put("sizelist", sizeList);
			}
			return allList.size()>0 ? allList: list;
		} catch (Exception e) {
			throw new ServiceException(e.getMessage(),e);
		}
	}
	
	@Override
	public <ModelType> ModelType getEntityBomList(ModelType record) throws ServiceException {
		try {
			return basBomListDao.getEntityBomList(record);
		} catch (Exception e) {
			throw new ServiceException(e.getMessage(),e);
		}
	}

	/**
	 * 检查判断BOM头是否存在，存在返回1，不存在返回0
	 */
	@Override
	public <ModelType> int checkEntityBom(ModelType record) throws ServiceException{
		try {
			return basBomListDao.checkEntityBom(record);
		} catch (Exception e) {
			throw new ServiceException(e.getMessage(),e);
		}
	}
	
	/**
	 * 检查判断物料是否存在，存在返回1，不存在返回0
	 */
	@Override
	public <ModelType> int checkMaterial(ModelType record) throws ServiceException{
		try {
			return basBomListDao.checkMaterial(record);
		} catch (Exception e) {
			throw new ServiceException(e.getMessage(),e);
		}
	}
	
	/**
	 * 得到BOM所有allList明细清单
	 */
	@Override
	public <ModelType> void getAllBomList(List<ModelType> allList, List<ModelType> list){
		getAllBomList(allList,null,list);
	}

	/**
	 * 得到BOM所有allList明细清单和替代表sizeList清单
	 */
	@Override
	public <ModelType,SizeType> void getAllBomList(List<ModelType> allList, List<SizeType> sizeList,List<ModelType> list){
		getAllBomList(allList,sizeList,list,null);
	}
	
	/**
	 *得到BOM所有明细清单，如果传入一个ModelType，则在ModelType下增加Bom结构 
	 */
	@Override
	public <ModelType> void getAllBomList(List<ModelType> allList, List<ModelType> list,ModelType root){
		getAllBomList(allList,null,list,root);
	}
	
	/**
	 *得到BOM所有明细及替代表清单，如果传入一个ModelType，则在ModelType下增加Bom和替代表结构
	 */
	@Override
	public <ModelType,SizeType> void getAllBomList(List<ModelType> allList,List<SizeType> sizeList, List<ModelType> list,ModelType root){
		BasBomListOrderIndex orderIndex = new BasBomListOrderIndex();//取唯一的orderNo必须得使用引用类型用StringBuffer也可以
		getAllBomList(allList,sizeList,list, list.get(0),root,orderIndex);
	}	
	
	private <ModelType,SizeType> void getAllBomList(List<ModelType> allList, List<SizeType> sizeList, List<ModelType> list,ModelType parentModel,ModelType root,BasBomListOrderIndex orderIndex) {
		short rootOrderNo = 0;
		short maxOrderNo = 0;
		String rootBrandNo="";
		String rootMaterialNo="0";
		String rootBomPurpose="";
		if (root!=null){
			BasBomList basBomList = (BasBomList) root;
			rootOrderNo = basBomList.getOrderNo();
			maxOrderNo = basBomList.getMaxOrderNo();
			rootBrandNo = basBomList.getBrandNo();
			rootMaterialNo = basBomList.getMaterialNo();
			rootBomPurpose = basBomList.getBomPurpose();
		}
		for (ModelType model : list) {			
			BasBomList bomList =(BasBomList)model; 
			BasBomList parentBomList = (BasBomList)parentModel;		
				
			List<SizeType> bomListSize = null;
			if (sizeList!=null){
				bomListSize = basBomListSizeDao.findBomListSize(bomList);
			}
			orderIndex.setOrderNo((short) (orderIndex.getOrderNo()+1));
			bomList.setOrderNo((short) (orderIndex.getOrderNo()+maxOrderNo));
				
			bomList.setParentOrderNo(orderIndex.getOrderNo()>1 ? parentBomList.getOrderNo() : rootOrderNo);
			bomList.setParentBrandNo(orderIndex.getOrderNo()>1 ? parentBomList.getBrandNo() : rootBrandNo);
			bomList.setParentMaterialNo((orderIndex.getOrderNo()>1 ? parentBomList.getMaterialNo() : rootMaterialNo));
			bomList.setParentBomPurpose(orderIndex.getOrderNo()>1 ? parentBomList.getBomPurpose(): rootBomPurpose);
				
			if (bomListSize!=null){
				for(SizeType type : bomListSize){
					BasBomListSize size = (BasBomListSize) type;
					size.setOrderNo(bomList.getOrderNo());
					sizeList.add(type);
				}
			}
			
			allList.add(model);
			List<ModelType> temp = basBomListDao.findBomList(model);
			if (temp.size()>0){
				bomList.setLeaf("false");
				getAllBomList(allList,sizeList,temp,model,root,orderIndex);
			}else{
				bomList.setLeaf("true");
			}
		}
	}	
}