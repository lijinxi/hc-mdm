package com.hc.scm.mdm.dao.dal.impl;

import java.lang.reflect.*;
import java.util.ArrayList;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BillBomListSizeDao;
import com.hc.scm.mdm.dao.entity.BasSize;
import com.hc.scm.mdm.dao.entity.BillBomListSize;
import com.hc.scm.mdm.dao.mapper.BasSizeMapper;
import com.hc.scm.mdm.dao.mapper.BillBomListSizeMapper;
import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-14 15:49:20
 * @version 1.0.0
 */
@Repository("billBomListSizeDao")
class BillBomListSizeDaoImpl extends BaseCrudDaoImpl implements BillBomListSizeDao {
    @Resource
    private BillBomListSizeMapper billBomListSizeMapper;

    @Resource
    private BasSizeMapper basSizeMapper;
    
    @Override
    public BaseCrudMapper init() {
        return billBomListSizeMapper;
    }

	@Override
	public <ModelType> List<ModelType> selectByBillNo(ModelType record) {
		return billBomListSizeMapper.selectByBillNo(record);
	}

	/**
	 * 临时重写，保存打横的数据
	 */
	/*@Override
	public <ModelType> int add(ModelType modelType) throws DaoException {
		BillBomListSize bomListSize = (BillBomListSize) modelType;
		if (bomListSize.getConvertToSizeNo()==0){
			return super.add(bomListSize);
		}
		int count=0;
		String sizeNo="";
		try {
			Class<?> cls = modelType.getClass();
			for(Method method:cls.getMethods()){
				for(int i=1;i<=20;i++){
					if (method.getName().equalsIgnoreCase("getF"+String.valueOf(i))){
						 Object obj = method.invoke(modelType);
						 if (obj!=null){
							 String sizeValue = String.valueOf(obj);
							 if (StringUtils.isNoneBlank(sizeValue)){
							 	 if (StringUtils.isEmpty(sizeNo)){
							 		 BasSize basSize = new BasSize();
							 		 basSize.setSizeTypeNo(bomListSize.getSizeTypeNo());
							 		 int orderNo = bomListSize.getOrderNo();
							 		 basSize.setOrderNo(orderNo);
							 		 String strSizeNo=basSizeMapper.selectBySizeTypeOrderNo(basSize);
							 		 if (strSizeNo==null || StringUtils.isEmpty(strSizeNo)){
							 			 break;
							 		 }else{
							 			sizeNo = strSizeNo;
							 		 }
							 	 }
							 	 bomListSize.setSizeNo(sizeNo);
							 	 bomListSize.setSizeValue(sizeValue);
							 	 count+=super.add(bomListSize);
							 }
						 }
					}
				}
			}
			return count;
		} catch (Exception e) {
			throw new DaoException("增加出错了"+e.getMessage(),e);
		}
	}

	@Override
	public <ModelType> int modifyById(ModelType modelType) throws DaoException {
		//return super.modifyById(modelType);
		super.deleteByPrimarayKeyForModel(modelType);
		return this.add(modelType);
	}	*/
}