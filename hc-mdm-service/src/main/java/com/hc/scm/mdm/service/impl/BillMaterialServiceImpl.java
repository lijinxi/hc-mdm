package com.hc.scm.mdm.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.mdm.dao.entity.BillMaterialSize;
import org.apache.commons.lang3.StringUtils;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSON;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.model.CustomerRequest;
import com.hc.scm.common.model.MasterRequest;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.BillUtils;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.SpringComponent;
import com.hc.scm.mdm.dao.dal.BillMaterialDao;
import com.hc.scm.mdm.service.BasSystemCodeService;
import com.hc.scm.mdm.service.BillMaterialService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.hc.scm.mdm.dao.entity.BillMaterialDtl;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:00
 * @version 1.0.0
 */
@Service("billMaterialService")
class BillMaterialServiceImpl extends BaseCrudServiceImpl implements BillMaterialService {
	
    @Resource
    private BillMaterialDao billMaterialDao;
    
    @Resource
    private BasSystemCodeService basSystemCodeService;

    @Override
    public BaseCrudDao init() {
        return billMaterialDao;
    }
    
    @SuppressWarnings({ "static-access","rawtypes" })
	@Override
	@Transactional(propagation=Propagation.REQUIRED)
	public <ModelType> Object	saveMasterCustomerList(ModelType modelType,List<CustomerRequest> listData
			,SystemUser systemUser,String modelClassName,MasterRequest masterRequest) throws Exception{
		Date date=new Date();
		Object masterId = null;
		Object masterId2 = null;
		if(StringUtils.isNotBlank(masterRequest.getOperateType()) &&modelType!=null){
			if( masterRequest.getOperateType().equals(SysConstans.INSERTED_TYPE)){//主表新增
				if(StringUtils.isNotBlank(masterRequest.getBillType())){//生成单据
					String billNo= BillUtils.getBillNo(masterRequest.getBillType(), masterRequest.getMasterJson());
					BillUtils.setBillNoAndCreator(modelType, modelType.getClass(), systemUser, date,billNo);
				}else{
					CommonUtil.setEntityDefaultField(modelType, 0, systemUser, modelType.getClass(), date);
				}
				billMaterialDao.add(modelType);
				masterId=CommonUtil.getFieldValue(modelType, masterRequest.getIdFieldName(), modelType.getClass());//获得主表主键的值
			}else if(masterRequest.getOperateType().equals(SysConstans.UPDATED_TYPE)){//主表修改
				CommonUtil.setEntityDefaultField(modelType, 1, systemUser, modelType.getClass(),date);
				billMaterialDao.modifyById(modelType);
			}else if(masterRequest.getOperateType().equals(SysConstans.DELETED_TYPE)){//主表删除
				billMaterialDao.deleteById(modelType);
			}
		}
		if(listData==null)return masterId;
		Class<?> customerClazz;
		String masterNameAllPath;
		BaseCrudDao baseCrudDaoCustomer;
		List listCustomerInsert;
		List listCustomerUpdate;
		List listCustomerDelete;
		
		for(CustomerRequest mcr:listData){//遍历不同从表
			masterNameAllPath=modelClassName+"."+CommonUtil.changeFirstCharUporLow(mcr.getCustomerName(), 0);
			customerClazz= this.getClass().getClassLoader().getClass().forName(masterNameAllPath);//获得从表对象
			String customerNameDao=CommonUtil.changeFirstCharUporLow(mcr.getCustomerName(), 1)+"Dao";
			baseCrudDaoCustomer=(BaseCrudDao)SpringComponent.getBean(customerNameDao);

			if(StringUtils.isNotBlank(mcr.getInsertlist())){//从表新增
				listCustomerInsert = JSON.parseArray(mcr.getInsertlist(), customerClazz);//解析从表数据
				for(Object cus : listCustomerInsert){

					if(cus instanceof BillMaterialDtl){
						BillMaterialDtl tmp = (BillMaterialDtl) cus;
						CommonUtil.setEntityDefaultField(cus, 0, systemUser,customerClazz,date);//设置时间与编辑人
						//自动生成物料编号
						/*
						String materialNo = basSystemCodeService.getSystemSheetid("MaterialNo");
						if (StringUtils.isBlank(materialNo)){
							throw new ServiceException("请检查是否有配置MaterialNo的流水号！");
						}
						CommonUtil.setFieldValue(cus, "materialNo", customerClazz, materialNo);
						masterId2 = materialNo;
						*/
						/*
						Object codeRuleNo= CommonUtil.getFieldValue(cus,"codeRuleNo",customerClazz);
						Map<String, Object> parmMap = new HashMap<String, Object>();
						String billtypeNo =codeRuleNo.toString();
						String detail= JSON.toJSONString(tmp);

						String  materialCode="";
						if(billtypeNo != "" && billtypeNo != null){

							parmMap.put("billtypeNo",billtypeNo);
							parmMap.put("detail", detail!="" &&detail!=null ? detail:"");
							materialCode= basSystemCodeService.getSystemSheetid(parmMap);
						}
						if (StringUtils.isBlank(materialCode)){
							throw new ServiceException("请检查是否有配置"+codeRuleNo+"的流水号！");
						}
						CommonUtil.setFieldValue(cus, "materialCode", customerClazz, materialCode);
						*/
					}

					if( masterRequest.getOperateType().equals(SysConstans.INSERTED_TYPE)){//主表新增才设置主键，主表不是新增从表关联主表id从前台设
						CommonUtil.setFieldValue(cus, masterRequest.getIdFieldName(), customerClazz, masterId);//设置主表的主键
					}
					baseCrudDaoCustomer.add(cus);
				}
			}
			if(StringUtils.isNotBlank(mcr.getUpdatelist())){//从表修改
				listCustomerUpdate= JSON.parseArray(mcr.getUpdatelist(), customerClazz);//解析从表数据
				for(Object cus:listCustomerUpdate){
					CommonUtil.setEntityDefaultField(cus, 1, systemUser,customerClazz,date);//设置时间与编辑人
					baseCrudDaoCustomer.modifyById(cus);
				}
			}
			if(StringUtils.isNotBlank(mcr.getDeletelist())){///从表删除
				listCustomerDelete= JSON.parseArray(mcr.getDeletelist(), customerClazz);//解析从表数据
				if(masterRequest.getOperateType().equals(SysConstans.DELETED_TYPE)){//主表删除
					for(Object cus:listCustomerDelete){
						baseCrudDaoCustomer.deleteByPrimarayKeyForModel(cus);
					}
				}else{
					for(Object cus:listCustomerDelete){
						baseCrudDaoCustomer.deleteById(cus);
					}
				}
			}
			
			
		}
		if(masterId2!=null){
			masterId=(masterId==null?"":masterId.toString())+","+masterId2.toString();
		}
		return masterId;
	}

    
	@Override
	@Transactional(propagation = Propagation.REQUIRED,rollbackFor=ServiceException.class)
	public <ModelType>  void audit(List<ModelType> auditModelList ,SystemUser systemUser){
		Date date=new Date();
		List<ModelType> list=auditModelList;
		if(list !=null && list.size() > 0 ){
			ModelType modelType=list.get(0);
			CommonUtil.setFieldValue(modelType, "auditor", modelType.getClass(), systemUser.getUserName());
			CommonUtil.setFieldValue(modelType, "auditTime", modelType.getClass(), date);
			CommonUtil.setFieldValue(modelType, "billStatus",modelType.getClass(),"100");

			//获取维护类型0=新建:1=修改
			Object maintainType=CommonUtil.getFieldValue(modelType, "maintainType", modelType.getClass());
			//获取物料类型0=成品/半成品:1=物料
			Object materialType=CommonUtil.getFieldValue(modelType, "materialType", modelType.getClass());
			this.billMaterialDao.audit(modelType,maintainType,materialType);
		}
	}
}