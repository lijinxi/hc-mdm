package com.hc.scm.mdm.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.NodeUtils;
import com.hc.scm.mdm.dao.dal.BasBomDao;
import com.hc.scm.mdm.dao.dal.BillBomDao;
import com.hc.scm.mdm.dao.dal.BillBomListDao;
import com.hc.scm.mdm.dao.dal.BillBomListSizeDao;
import com.hc.scm.mdm.dao.entity.BasBom;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.entity.BasBomListSize;
import com.hc.scm.mdm.dao.entity.BillBom;
import com.hc.scm.mdm.dao.entity.BillBomList;
import com.hc.scm.mdm.dao.entity.BillBomListSize;
import com.hc.scm.mdm.service.BasBomListService;
import com.hc.scm.mdm.service.BasBomService;
import com.hc.scm.mdm.service.BasSystemCodeService;
import com.hc.scm.mdm.service.BillBomListService;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Description: BOM维护单据头服务明细实现
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
@Service("billBomListService")
class BillBomListServiceImpl extends BaseCrudServiceImpl implements BillBomListService {
	@Resource
    private BillBomListDao billBomListDao;
    
    @Resource
    private BillBomDao billBomDao;
   
    @Resource
    private BillBomListSizeDao billBomListSizeDao;
    
    @Resource 
    private BasBomDao basBomDao;
    
    @Resource
    private BasBomService basBomService;
    
    @Resource
    private BasBomListService basBomListService;
    
    @Resource
    private BasSystemCodeService basSystemCodeService;
    
    @Override
    public BaseCrudDao init() {
        return billBomListDao;
    }
    
    public <ModelType> Map<String, Object> importBillBom(int maintainType,
    		String billNo,String orderNo,String newBomPurpose,String newBrandNo,
    		SystemUser user,BasBomList importBomList) throws ServiceException{
    	Map<String, Object> resultMap = new HashMap<String, Object>();		
		
    	//验证要引入的BOM在实表BOM头和物料里是否存在（提供新的url交由前端调用）
		
    	//引入BOM生成一张新的单
    	BasBomList root = null;
		String newBillNo = billNo;
		if (StringUtils.isEmpty(billNo)){
			newBillNo = basSystemCodeService.getSystemSheetid("BOM");
		}else{
			//根据billNo和orderNo找到一个根节点
			BillBomList billRoot = billBomListDao.selectByBillOrderNo(new BillBomList(billNo,Short.parseShort(orderNo)));
			root = new BasBomList(billRoot.getBrandNo(),billRoot.getMaterialNo(),billRoot.getBomPurpose());
			root.setOrderNo(billRoot.getOrderNo());
			root.setMaxOrderNo(billRoot.getMaxOrderNo());
		}
		if (StringUtils.isEmpty(newBillNo)){
			throw new ServiceException("没有生成单据号，请检查单据类型BOM！");
		}
		
		
		//复制一份BOM结构处理
		importBomList.setPdTypeNo("");
		importBomList.setIsVirtual((byte) 0);
		BillBom billBom = doGetAllBomList(maintainType,user,newBillNo,newBomPurpose,newBrandNo,importBomList,root);
	
		List<BillBomList> resultList = new ArrayList<BillBomList>();
		BillBomList result = new BillBomList(newBillNo,(short)1,importBomList.getBrandNo(),importBomList.getMaterialNo(),importBomList.getBomPurpose());
		if (billBom!=null){
			result.setBomStatus(billBom.getBomStatus());
			result.setVersionNo(billBom.getVersionNo());
		}
		resultList.add(result);
		resultMap.put("list", resultList);
		return resultMap;
    }
    /**
	 * 处理从实表BOM结构复制到单据BOM结构逻辑
	 * @param req
	 * @param importBomList
	 * @return 单据头
	 */
	private BillBom doGetAllBomList(int maintainType,SystemUser user,String billNo,String newBomPurpose,String newBrandNo,BasBomList importBomList,BasBomList root) {
		//从BOM实表得到物料明细清单
		List<BasBomList> allList = new ArrayList<BasBomList>();
		List<BasBomList> list = new ArrayList<BasBomList>();
		List<BasBomListSize> sizeList = new ArrayList<BasBomListSize>();
		list.add(importBomList);
		basBomListService.getAllBomList(allList,sizeList,list,root);
		BasBom basBom = basBomDao.getEntityBom(new BasBom(importBomList.getBrandNo(),importBomList.getMaterialNo(),importBomList.getBomPurpose()));
	
		//通过实体BOM结构生成单据BOM结构
		if (allList.size()>0)
		{
			List<BillBom> listBillBom = new ArrayList<BillBom>();
			List<BillBomList> listBillBomList = new ArrayList<BillBomList>();
			List<BillBomListSize> listBillBomListSize = new ArrayList<BillBomListSize>();
			for(BasBomList basListBom:allList){
				//创建单据头bill_bom
				if (root==null && listBillBom.size()==0){
					BillBom billBom = new BillBom();
					billBom.setBillNo(billNo);
					billBom.setCreator(user==null ? "系统管理员" : user.getUserName()); //创建人
					billBom.setCreateTime(new Date());
					
					billBom.setMaintainType(maintainType); //默认修改(1=修改2=用途转换3=状态变更)',
					billBom.setOldBrandNo(basListBom.getBrandNo());
					billBom.setMaterialNo(basListBom.getMaterialNo());
					billBom.setOldBomPurpose(basListBom.getBomPurpose());
					billBom.setBomType(basBom==null ? 1 : basBom.getBomType()); //BOM分类(1=标准BOM 2=配置BOM)
					billBom.setVersionNo(basBom==null ? 1 : basBom.getVersionNo()+1);
					billBom.setBomStatus(basBom==null ? 0 : basBom.getBomStatus()); // 'BOM状态(0=编辑 1=审核 2=生效)'
					if (!StringUtils.isEmpty(newBomPurpose)){
						billBom.setNewBomPurpose(newBomPurpose);
					}
					if (!StringUtils.isEmpty(newBrandNo)){
						billBom.setNewBrandNo(newBrandNo);
					}
					listBillBom.add(billBom);
				}
				//创建单据明细bill_bom_list
				BillBomList billBomList = new BillBomList();
				billBomList.setBillNo(billNo);
				billBomList.setBrandNo(basListBom.getBrandNo());
				billBomList.setMaterialNo(basListBom.getMaterialNo());
				billBomList.setBomPurpose(basListBom.getBomPurpose());
				billBomList.setDosageNumerator(basListBom.getDosageNumerator());
				billBomList.setDosageDenominator(basListBom.getDosageDenominator());
				billBomList.setOrderNo(basListBom.getOrderNo()); //节点
				billBomList.setParentOrderNo(basListBom.getParentOrderNo()); //父级节点
				billBomList.setPdTypeNo(basListBom.getPdTypeNo());
				billBomList.setStoreNo(basListBom.getStoreNo());
				billBomList.setIsVirtual(basListBom.getIsVirtual()); //是否虚拟件(0=否 1=是)
				billBomList.setUpdateFlag((byte) 0.); //修改标识(0=否 1=是)
				listBillBomList.add(billBomList);
				//创建物料替代表bill_bom_list_size
				List<BasBomListSize> bomListSize = getBomListSize(sizeList,basListBom);
				if (bomListSize!=null){
					for(BasBomListSize listSize : bomListSize){
						BillBomListSize billBomListSize = new BillBomListSize();
						billBomListSize.setBillNo(billNo);
						billBomListSize.setOrderNo(listSize.getOrderNo());
						billBomListSize.setSizeValue(listSize.getNewSizeNo());
						billBomListSize.setNewSizeTypeNo(listSize.getNewSizeTypeNo());
						billBomListSize.setSizeNo(listSize.getOldSizeNo());
						billBomListSize.setSizeTypeNo(listSize.getOldSizeTypeNo());
						//billBomListSize.setConvertToSizeNo((byte) 0);
						listBillBomListSize.add(billBomListSize);
					}
				}
			}
			//保存插入单据头和单据明细
			saveImportBillData(listBillBom, listBillBomList,listBillBomListSize);
			
			//返回单据头信息
			if (listBillBom.size()==1){
				return listBillBom.get(0);
			}
		}
		return null;
	}

	/**
	 * 保存转换的数据到单据表，返回影响总行数
	 */
	@Transactional(propagation = Propagation.REQUIRED,rollbackFor=ServiceException.class)
    public  int saveImportBillData(List<BillBom> listBillBom,List<BillBomList> listBillBomList,List<BillBomListSize> listBillBomListSize) throws ServiceException{
       try {
			int count=0;
			count+=saveList(listBillBom,new BillBom(),billBomDao); //增加单据主表bill_bom
			count+=saveList(listBillBomList,new BillBomList(),billBomListDao); //增加单据从表bill_bom_list
			count+=saveList(listBillBomListSize,new BillBomListSize(),billBomListSizeDao); //增加单据替代表bill_bom_list_size
			return count;
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
    }
    
    public <ModelBom> int saveList(List<ModelBom> list,ModelBom model,BaseCrudDao basDao){
		if(null!=list&&list.size()>0){
			for (ModelBom modelType : list) {
				basDao.add(modelType);
			}
		}
		return list.size();
    }

	@Override
	public Map<String, Object> getBomList(Map<String, Object> resultMap) throws ServiceException {
		try {
			NodeUtils<BillBomList> nodeHelper = new NodeUtils<BillBomList>(this,new String[] {"billNo","orderNo"});
			nodeHelper.getAllNodes(resultMap);	
			return resultMap;
		} catch (Exception e) {
			throw new ServiceException("展开所有单据Bom结构出错了！\r\n"+e.getMessage());
		}
	}

	@Override
	public List<BillBomList> getBomList(List<BillBomList> list) throws ServiceException {
		try {
			NodeUtils<BillBomList> nodeHelper = new NodeUtils<BillBomList>(this,new String[] {"billNo","orderNo"});
			return nodeHelper.getAllNodes(list);
		} catch (Exception e) {
			throw new ServiceException("展开所有单据Bom结构出错了！\r\n"+e.getMessage());
		}
	}

	@Override
	public <ModelType> List<ModelType> selectByBillNo(ModelType record) {
		return billBomListDao.selectByBillNo(record);
	}
	
    private List<BasBomListSize> getBomListSize(List<BasBomListSize> sizeList, BasBomList basListBom) {
    	List<BasBomListSize> list = null;
    	for(BasBomListSize size : sizeList){
    		if (basListBom.getBomId()==size.getBomId() && basListBom.getOrderNo().equals(size.getOrderNo())){
    			if (list==null){
    				list = new ArrayList<BasBomListSize>();
    			}
    			list.add(size);
    		}
    	}
    	return list;
	}

    /**
     * 检查是否能引入Bom，能引入则返回空字符，不能则返回对应的提示信息
     */
	@Override
	public String CheckImportBillBom(String maintainType,String oldBrandNo,String materialNo,String oldBomPurpose,
			String newBomPurpose,String newBrandNo,String billNo,String orderNo) throws ServiceException{
		String checkResult="";
		Short orderno = Short.parseShort(orderNo);
		if (!StringUtils.isEmpty(billNo) && orderno>0){					
			//检查当前挂的节点是否为父节点的数据（避免死循环）
			//采用数据库查询一层一层判断
			/*List<BillBomList> bomList = billBomListDao.getParentOrderList(new BillBomList(billNo,orderno));
			checkResult = checkParentOrderList(bomList,new BillBomList(oldBrandNo,materialNo,oldBomPurpose));*/
			
			//一次把单据明细查询出来，java里做判断
			List<BillBomList> allBomList = billBomListDao.selectByBillNo(new BillBomList(billNo));
						
			//自己不能挂自己
			BillBomList bom = getBom(allBomList,orderno);
			if (bom.getBrandNo().equals(oldBrandNo) &&
			    bom.getMaterialNo().equals(materialNo) &&
			    bom.getBomPurpose().equals(oldBomPurpose)){
				return "自己不能挂自己结构！";
			}
			
			//不能挂上级
			BillBomList checkBom = new BillBomList(oldBrandNo,materialNo,oldBomPurpose);
			checkBom.setBillNo(billNo);
			checkResult = checkParentOrderList(allBomList,orderno,checkBom);
			if (!StringUtils.isEmpty(checkResult)){
				return checkResult;
			}
			
			//同一结构不允许在一张单里出现重复挂的情况
			int count = billBomListDao.checkDoubleBom(checkBom);
			if (count>0){
				return "一套结构不能重复出现多次！";
			}
		}else{
			//引入新Bom时逻辑
			BillBom billBom = new BillBom();
			int mType = Integer.parseInt(maintainType);
			billBom.setMaintainType(mType);
			billBom.setOldBrandNo(oldBrandNo);
			billBom.setMaterialNo(materialNo);
			billBom.setOldBomPurpose(oldBomPurpose);
			if (!StringUtils.isEmpty(newBomPurpose)){
				billBom.setNewBomPurpose(newBomPurpose);
			}
			if (!StringUtils.isEmpty(newBrandNo)){
				billBom.setNewBrandNo(newBrandNo);
			}
			//检查相同类型的单据是否存在
			int count=billBomDao.checkBillNoExists(billBom);
			if (count>0){
				return "已存在"+count+"张相同条件未审核的单，请先完结！";
			}
			
			//判断对应维护类型是否符合条件引入
			if (mType==MaintainTypeEnum.Modifier.getMaintainType()){
				checkResult = checkBomForModifier(new BasBom(oldBrandNo,materialNo,oldBomPurpose));
			}
			if (mType==MaintainTypeEnum.ConvertPurpose.getMaintainType()){
				checkResult = checkBomForConvertPurpose(new BasBom(oldBrandNo,materialNo,oldBomPurpose),
						new BasBom(oldBrandNo,materialNo,newBomPurpose));
			}
			if (mType==MaintainTypeEnum.ChangeStatus.getMaintainType()){
				checkResult = checkBomForChangeStatus(new BasBom(oldBrandNo,materialNo,oldBomPurpose));
			}
			if (mType==MaintainTypeEnum.ConvertBrand.getMaintainType()){
				checkResult = checkBomForConvertBrand(new BasBom(oldBrandNo,materialNo,oldBomPurpose),
						new BasBom(newBrandNo,materialNo,oldBomPurpose));	
			}
			if (!StringUtils.isEmpty(checkResult)){
				return checkResult;
			}
		}
		return "";
	}

	private BillBomList getBom(List<BillBomList> allBomList,Short orderNo){
		for(BillBomList bom:allBomList){
			if (bom.getOrderNo()==orderNo){
				return bom;
			}
		}
		return null;
	}
	
	private String checkParentOrderList(List<BillBomList> allBomList,Short orderNo,BillBomList activateBom){
		BillBomList curBom = getBom(allBomList,orderNo);
		if (curBom==null){
			return "检查数据有异常！";
		}
		Short parentOrderNo = curBom.getParentOrderNo();
		List<BillBomList> temp = null;
		for(BillBomList bom:allBomList){
			if (bom.getOrderNo()==parentOrderNo){
				if (temp==null){
					temp = new ArrayList<BillBomList>();
				}
				temp.add(bom);
			}
		}
		if (temp!=null){
			for(BillBomList bom:temp){
				if (bom.getBrandNo().equals(activateBom.getBrandNo()) &&
						bom.getMaterialNo().equals(activateBom.getMaterialNo()) &&
						bom.getBomPurpose().equals(activateBom.getBomPurpose())){
						return "上级已经挂了该结构，不允许重复！";
					}				
			}
			for(BillBomList bom:temp){
				return checkParentOrderList(allBomList,bom.getOrderNo(),activateBom);
			}
		}
		return "";
	}
	
	@SuppressWarnings("unused")
	private String checkParentOrderList(List<BillBomList> bomList,BillBomList activateBom){
		for(BillBomList bom : bomList){
			if (bom.getBrandNo().equals(activateBom.getBrandNo()) &&
				bom.getMaterialNo().equals(activateBom.getMaterialNo()) &&
				bom.getBomPurpose().equals(activateBom.getBomPurpose())){
				return "上级已经挂了该结构，不允许重复！";
			}
		}
		for(BillBomList bom : bomList){
			List<BillBomList> temp = billBomListDao.getParentOrderList(bom);
			return checkParentOrderList(temp,activateBom);
		}
		return "";
	}
	
	private String checkBomForModifier(BasBom oldBasBom){
		try {
			BasBom basBom = basBomService.getEntityBom(oldBasBom);
			if (basBom!=null){
				Byte bomStatus = basBom.getBomStatus();
				if (bomStatus==0 || bomStatus==2){ //BOM状态为0编辑和2生效时才能修改
					return "";
				}else{
					return "原Bom状态不为编辑或生效，才能做修改！"; 
				}
			}else{
				return "原Bom结构没有找到！";
			}
		} catch (Exception e) {
			return "验证维护类型为修改时，系统出错了！";
		}
	}
	
	private String checkBomForConvertPurpose(BasBom oldBasBom,BasBom newPurposeBasBom){
		try {
			if (StringUtils.isEmpty(newPurposeBasBom.getBomPurpose())){
				return "用途转换时，新用途不能为空！";
			}
			BasBom basOldBom = basBomService.getEntityBom(oldBasBom);
			if (basOldBom!=null){
				Byte bomStatus = basOldBom.getBomStatus();
				if (bomStatus==1){//BOM状态为1时才能做用途转换
					//验证新用途是否存在
					BasBom basNewBom = basBomService.getEntityBom(newPurposeBasBom);
					if (basNewBom!=null){
						return "新用途的Bom结构已存在！";
					}else{
						return "";
					}
				}else{
					return "原Bom的状态不为审核，不能做用途转换！"; 
				}
			}else{
				return "原Bom结构没有找到！";
			}
		}catch(Exception e){
			return "验证维护类型为用途转换时，系统出错了！";
		}
	}
	
	private String checkBomForChangeStatus(BasBom oldBasBom){
		try {
			BasBom basOldBom = basBomService.getEntityBom(oldBasBom);
			if (basOldBom!=null){
				Byte bomStatus = basOldBom.getBomStatus();
				if (bomStatus==0 || bomStatus==1){//BOM状态为0或1时才能做用状态变更
					return ""; 
				}else{
					return "原Bom的状态不为编辑或审核，不能做状态变更！";  //状态不为0编辑 1审核时则返回-2
				}
			}else{
				return "原Bom结构没有找到！";
			}
		} catch (Exception e) {
			return "验证维护类型为状态变更时，系统出错了！";
		}
	}
	
	private String checkBomForConvertBrand(BasBom oldBasBom,BasBom newBrandBasBom){
		try {
			if (StringUtils.isEmpty(newBrandBasBom.getBrandNo())){
				return "品牌转换时，新品牌不能为空！";
			}
			BasBom basOldBom = basBomService.getEntityBom(oldBasBom);
			if (basOldBom==null){
				return "原Bom结构没有找到！";//只要老品牌的BOM存在都允许
			}
			//如果老的验证通过，则验证新品牌的BOM是否存在
			BasBom basNewBom = basBomService.getEntityBom(newBrandBasBom);
			if (basNewBom!=null){
				return "新品牌的Bom结构已存在！";
			}
			return "";
		} catch (Exception e) {
			return "验证维护类型为品牌转换时，系统出错了！";
		}
	}

	@Override
	public int checkBillOrderNo(String billNo, Short orderNo) throws ServiceException {
		try {
			BillBomList bomList = billBomListDao.selectByBillOrderNo(new BillBomList(billNo,orderNo));
			return bomList==null ? 0 : 1;
		} catch (Exception e) {
			throw new ServiceException("检查单据序号出错了"+e.getMessage(),e);
		}
	}	
}