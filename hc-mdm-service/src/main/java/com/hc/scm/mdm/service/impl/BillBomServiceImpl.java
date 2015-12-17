package com.hc.scm.mdm.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.mdm.dao.dal.BasBomDao;
import com.hc.scm.mdm.dao.dal.BasBomListDao;
import com.hc.scm.mdm.dao.dal.BasBomListSizeDao;
import com.hc.scm.mdm.dao.dal.BillBomDao;
import com.hc.scm.mdm.dao.entity.BasBom;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.entity.BasBomListSize;
import com.hc.scm.mdm.dao.entity.BillBom;
import com.hc.scm.mdm.dao.entity.BillBomList;
import com.hc.scm.mdm.dao.entity.BillBomListSize;
import com.hc.scm.mdm.service.BillBomListService;
import com.hc.scm.mdm.service.BillBomListSizeService;
import com.hc.scm.mdm.service.BillBomService;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * BOM状态枚举
 * Description:增加描述 
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-4-10 上午10:45:16
 * @version 1.0.0
 */
enum BomStatusEnum{
	//0=编辑 1=审核 2=生效
	Edit((byte)0),
	Audit((byte)1),
	Activate((byte)2);
	
	private byte bomStatus;
	
	BomStatusEnum(byte bomStatus){
		this.bomStatus = bomStatus;
	}
	
	public byte getBomStatus(){
		return bomStatus;
	}
}

/**
 * BOM单据维护类型枚举 
 * Description:增加描述 
 * All rights Reserved, Designed Byhchcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-4-10 上午9:35:46
 * @version 1.0.0
 */
enum MaintainTypeEnum{
	//'维护类型(1=修改2=用途转换3=状态变更4=品牌转换)',
	Modifier(1),
	ConvertPurpose(2),
	ChangeStatus(3),
	ConvertBrand(4);
	
	private int maintainType;
	MaintainTypeEnum(int maintainType){
		this.maintainType = maintainType;
	}
	
	public int getMaintainType(){
		return maintainType;
	}
}

/**
 * Description: BOM维护单据头服务实现
 * All rights Reserved, Designed By hc
 *hcright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
@Service("billBomService")
class BillBomServiceImpl extends BaseCrudServiceImpl implements BillBomService {
    @Resource
    private BillBomDao billBomDao;
    
    @Resource
    private BillBomListService billBomListService;
    
    @Resource
    private BillBomListSizeService billBomListSizeService;
    
    @Resource
    private BasBomDao basBomDao;
    
    @Resource
    private BasBomListDao basBomListDao;
    
    @Resource
    private BasBomListSizeDao basBomListSizeDao;
    
    @Override
    public BaseCrudDao init() {
        return billBomDao;
    }

    /**
     * 审核BOM单据(调整将所有逻辑写在一个方法里，不然事务将有问题)
     */
    @Transactional(propagation = Propagation.REQUIRED,rollbackFor=ServiceException.class)
	@Override
	public <ModelType> void audit(List<ModelType> auditModelList, SystemUser systemUser) {
		if (auditModelList != null && auditModelList.size() > 0) {
			try {
				for (ModelType model : auditModelList) {
					BillBom billBom = (BillBom) model;
					//得到维护类型
					MaintainTypeEnum maintainType = getMaintainType(billBom.getMaintainType());
					//得到所有单据明细的BOM物料及替代表清单					
					List<BillBomList> billBomList = billBomListService.selectByBillNo(new BillBomList(billBom.getBillNo(), (short) 0));
					List<BillBomListSize> billBomListSize = billBomListSizeService.selectByBillNo(new BillBomListSize(billBom.getBillNo()));
					
					//审核前验证替代表
					String checkResult = doBeforeAudit(billBomList, null,billBomListSize);
					if (checkResult!=null){
						throw new ServiceException(checkResult);
					}
					
					//更改单据头表（单据状态、审核人、审核时间）的值
					billBom.setBillStatus((byte) 1);
					billBom.setAuditor(systemUser==null ? "系统管理员" : systemUser.getUserName());
					billBom.setAuditTime(new Date());
					
					//将修改的Bom单据头提交到后台修改
					billBomDao.modifyById(billBom);
					
					//审核单据逻辑处理（单据结构至实表结构）					
					if (maintainType==MaintainTypeEnum.Modifier){
						//doAuditModifyToEntityBom(billBom,billBomList,billBomListSize);
						//维护类型为修改时审核逻辑
						List<BillBomList> subBillBomList=null;
				    	for(BillBomList bomList:billBomList){
				    		//转换成实Bom头表
				    		BasBom basBom = doToBasBom(billBom,bomList);
				    		
				    		//找bomList下面的子节点
				    		subBillBomList = getSubBillBomList(billBomList,bomList);
				    		    		
				    		//检查是否存在Bom实表
							Long bomId = basBomDao.getEntityBomId(basBom);
							
							//如果存在Bom实表，则修改它们的结构
							if (bomId>=0){
								//设定实体的bomId
								basBom.setBomId(bomId);
								
								//提交Bom头实表到后台修改
								basBomDao.modifyById(basBom);
								
								//删除Bom物料明细替代实表的所有结构数据
								basBomListSizeDao.deleteBasBomListSizeByBasBom(basBom);
								
								//删除Bom物料明细实表的所有结构数据
								basBomListDao.deleteBasBomListByBasBom(basBom);
							}else{
								if (subBillBomList!=null && subBillBomList.size()>0){
									//在Bom头实表增加一行数据
									basBomDao.add(basBom);
								}
							}
							//转换增加实表Bom物料及替代表清单
							addBasBomList(subBillBomList,billBomListSize,basBom);
				    	}
					}
					if (maintainType==MaintainTypeEnum.ConvertPurpose){
						//doAuditConvertPurposeToEntityBom(billBom,billBomList,billBomListSize);
						//维护类型为用途转换时(Bom结构不允许修改)审核逻辑
						List<BillBomList> subBillBomList = null;
						for (BillBomList bomList : billBomList) {
							//转换成实Bom头表
							BasBom basBom = doToBasBom(billBom, bomList);

							//找bomList下面的子节点
							subBillBomList = getSubBillBomList(billBomList, bomList);

							//如果存在实表的BOM结构则复制一份新的			
							Long bomId = basBomDao.getEntityBomId(basBom);
							if (bomId>=0) {
								//修改Bom头实表 版本号、修改人、修改时间、备注
								basBom.setVersionNo(1); //版本号从1开始
								basBom.setBomPurpose(billBom.getNewBomPurpose());//将新用途写到BOM实表里面去
								basBom.setBomStatus(BomStatusEnum.Audit.getBomStatus()); //BOM状态1审核变成2生效

								//先增加一行Bom实表头
								basBomDao.add(basBom);

								//转换增加实表Bom物料及替代表清单
								addBasBomList(subBillBomList,billBomListSize,basBom);
							}
						}
					}
					if (maintainType==MaintainTypeEnum.ChangeStatus){
						//doAuditChangeStatusToEntityBom(billBom,billBomList,billBomListSize);
						//维护类型为状态变更时(Bom结构不允许修改)审核逻辑
						for (BillBomList bomList : billBomList) {
							//只更新BOM头的对应的实表Bom状态
							if (billBom.getOldBrandNo().equals(bomList.getBrandNo()) &&
								billBom.getMaterialNo().equals(bomList.getMaterialNo()) &&
								billBom.getOldBomPurpose().equals(bomList.getBomPurpose()))
							{
								//转换成实Bom头表
								BasBom basBom = doToBasBom(billBom, bomList);

								//如果存在实表的BOM结构则复制一份新的
								Long bomId = basBomDao.getEntityBomId(basBom);
								if (bomId>=0){
									//设定实体的bomId
									basBom.setBomId(bomId);
								
									//BOM状态：0编辑状态变成审核状态，1审核状态变成编辑状态
								
									if (basBom.getBomStatus()==BomStatusEnum.Edit.getBomStatus()){
										basBom.setBomStatus(BomStatusEnum.Audit.getBomStatus());
									}else{
										basBom.setBomStatus(BomStatusEnum.Edit.getBomStatus());
									}
								
									//修改
									basBomDao.modifyById(basBom);
								}
							}
						}
					}
					if (maintainType==MaintainTypeEnum.ConvertBrand){
						//doAuditConvertBrandToEntityBom(billBom,billBomList,billBomListSize);
						//维护类型为品牌转换时(Bom结构不允许修改)审核逻辑
						List<BillBomList> subBillBomList = null;
						for (BillBomList bomList : billBomList) {
							//转换成实Bom头表
							BasBom basBom = doToBasBom(billBom, bomList);

							//找bomList下面的子节点
							subBillBomList = getSubBillBomList(billBomList, bomList);

							//如果存在实表的BOM结构则复制一份新的
							Long bomId = basBomDao.getEntityBomId(basBom);
							if (bomId>=0) {
								//修改Bom头实表 版本号、修改人、修改时间、备注
								basBom.setVersionNo(1); //版本号从1开始
								basBom.setBrandNo(billBom.getNewBrandNo());//将新用途写到BOM实表里面去

								//先增加一行Bom实表头
								basBomDao.add(basBom);

								//转换增加实表Bom物料及替代表清单
								addBasBomList(subBillBomList,billBomListSize,basBom);
							}
						}
					}
				}
			} catch (Exception e) {
					throw new ServiceException("审核BOM出错了，原因："+e.getMessage());
			}
		}
	}
	
	private MaintainTypeEnum getMaintainType(int maintainType){
		for(MaintainTypeEnum type : MaintainTypeEnum.values()){
			if (type.getMaintainType()==maintainType){
				return type;
			}
		}
		throw new ServiceException("BOM维护类型不支持");
	}
	
	/**
	 * 转换增加实表Bom物料及替代表清单
	 * @param subBillBomList
	 * @param basBom
	 */
	public void addBasBomList(List<BillBomList> subBillBomList,List<BillBomListSize>billBomListSize,BasBom basBom){
		if (subBillBomList != null && subBillBomList.size() > 0) {
			List<BasBomList> basBomList = doToBasBomList(subBillBomList);
			for (BasBomList bom : basBomList) {
				bom.setBomId(basBom.getBomId());
				bom.setBomPurpose(basBom.getBomPurpose());
				basBomListDao.add(bom);
				
				//处理替代表
				if (bom!=basBomList.get(0)){
					List<BasBomListSize> subBasBomListSize = getSubBasBomListSize(billBomListSize,basBom.getBomId(),bom);
					if (subBasBomListSize!=null){
						for(BasBomListSize size : subBasBomListSize){
							basBomListSizeDao.add(size);
						}
					}
				}
			}
		}
	}	
    
    private BasBom doToBasBom(BillBom billBom,BillBomList bomList){
    	BasBom basBom = new BasBom();
    	//初始化
    	basBom.setBrandNo(bomList.getBrandNo());
    	basBom.setMaterialNo(bomList.getMaterialNo());
    	basBom.setBomType(billBom.getBomType());
    	basBom.setBomPurpose(bomList.getBomPurpose());
		basBom.setVersionNo(billBom.getVersionNo()); 
		basBom.setBomStatus(billBom.getBomStatus());
		basBom.setModifier(billBom.getModifier());
		basBom.setModifyTime(billBom.getModifyTime());
		basBom.setRemarks(billBom.getRemarks());
    	return basBom;
    }
    
    private List<BasBomList> doToBasBomList(List<BillBomList> billBomList){
    	List<BasBomList> listBasBom = new ArrayList<BasBomList>();
    	short orderNo=1;
    	for(BillBomList bom:billBomList){
    		 BasBomList bomList = new BasBomList();
    		//初始化
    		 bomList.setOrderNo(orderNo++);
    		 bomList.setBrandNo(bom.getBrandNo());
    		 bomList.setMaterialNo(bom.getMaterialNo());
    		 bomList.setBomPurpose(bom.getBomPurpose());
    		 bomList.setDosageDenominator(bom.getDosageDenominator());
    		 bomList.setDosageNumerator(bom.getDosageNumerator());
    		 bomList.setPdTypeNo(bom.getPdTypeNo());
    		 bomList.setStoreNo(bom.getStoreNo());
    		 bomList.setIsVirtual(bom.getIsVirtual());
    		 bomList.setBillOrderNo(bom.getOrderNo());//设置虚拟字段供处理替代表使用
    		 listBasBom.add(bomList);
    	}
    	return listBasBom;
    }
    
    private List<BillBomList> getSubBillBomList(List<BillBomList> billBomList,BillBomList bomList){
    	return getSubBillBomList(billBomList,bomList,true);
    }
    
    private List<BillBomList> getSubBillBomList(List<BillBomList> billBomList,BillBomList bomList,Boolean addHead){
    	List<BillBomList> subBillBomList = null;
    	for(BillBomList bom : billBomList){
    		if (bom.getParentOrderNo().equals(bomList.getOrderNo())){
    			if (subBillBomList==null){
    				subBillBomList = new ArrayList<BillBomList>();
    				if (addHead==true){
    					subBillBomList.add(bomList);
    				}
    			}
    			subBillBomList.add(bom);
    		}
    	}
    	return subBillBomList;
    }
    
    private List<BasBomListSize> getSubBasBomListSize(List<BillBomListSize> billBomListSize, Long bomId, BasBomList bomList) {
    	List<BasBomListSize> subBasBomListSize = null;
    	for(BillBomListSize bomSize : billBomListSize){
    		if (bomSize.getOrderNo().equals(bomList.getBillOrderNo())){
    			if (subBasBomListSize==null){
    				subBasBomListSize = new ArrayList<BasBomListSize>();
    			}
    			BasBomListSize bomListSize = new BasBomListSize();
    			bomListSize.setBomId(bomId);
    			bomListSize.setOrderNo(bomList.getOrderNo());
    			bomListSize.setNewSizeNo(bomSize.getSizeValue());
    			bomListSize.setNewSizeTypeNo(bomSize.getNewSizeTypeNo());
    			bomListSize.setOldSizeNo(bomSize.getSizeNo());
    			bomListSize.setOldSizeTypeNo(bomSize.getSizeTypeNo());
    			subBasBomListSize.add(bomListSize);
    		}
    	}
    	return subBasBomListSize;
	}
    
    
    private String doBeforeAudit(List<BillBomList> allBomList,List<BillBomList> billBomList,List<BillBomListSize> billBomListSize){
    	if (billBomList==null){
    		billBomList = allBomList;
    	}
    	for(BillBomList bomList:billBomList){
    		List<BillBomList> subBomList = getSubBillBomList(allBomList,bomList,false);
    		if (subBomList!=null){
    			String checkResult = doCheckBillBomListSize(bomList,getDiffSubBomList(bomList,subBomList),billBomListSize);
    			if (checkResult!=null){
    				return checkResult;
    			}else{
    				return doBeforeAudit(allBomList,subBomList,billBomListSize);
    			}
    		}
    	}
    	return null;
    }
    
    private List<BillBomList> getDiffSubBomList(BillBomList bomList, List<BillBomList> subBomList) {
		if (subBomList!=null){
			List<BillBomList> diffBomList = null;
			for(BillBomList list:subBomList){
				if (!list.getSizeTypeNo().equals(bomList.getSizeTypeNo())){
					if (diffBomList==null){
						diffBomList = new ArrayList<BillBomList>();
					}
					diffBomList.add(list);
				}
			}
			return diffBomList;
		}
		return null;
	}

	private String doCheckBillBomListSize(BillBomList parentBom,List<BillBomList> billBomList,List<BillBomListSize> billBomListSize){
		if (billBomList==null){
			return null;
		}
    	for(BillBomList bomList:billBomList){
    		Boolean exists = false;
    		for(BillBomListSize bomListSize:billBomListSize){
    			if (bomList.getOrderNo()==bomListSize.getOrderNo()){
    				exists = true;
    				break;
    			}
    		}
    		if (!exists){
    			return parentBom.getMaterialCode()+" 下的 "+bomList.getMaterialCode()+"，没有维护替代不允许审核！";
    		}
    	}
    	return null;
    }
}