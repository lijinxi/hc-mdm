package com.hc.scm.mdm.dao.dal.impl;

import java.util.ArrayList;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BillBomListDao;
import com.hc.scm.mdm.dao.entity.BillBomList;
import com.hc.scm.mdm.dao.mapper.BillBomListMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: BOM维护单据明细Impl实现
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
@Repository("billBomListDao")
class BillBomListDaoImpl extends BaseCrudDaoImpl implements BillBomListDao {
    @Resource
    private BillBomListMapper billBomListMapper;

    @Override
    public BaseCrudMapper init() {
        return billBomListMapper;
    }
    
    public <ModelType> List<ModelType> selectByBillNo(ModelType record){
    	return  billBomListMapper.selectByBillNo(record);
    }
    
    public <ModelType> ModelType selectByBillOrderNo(ModelType record){
    	return billBomListMapper.selectByBillOrderNo(record);
    }

	@Override
	public <ModelType> List<ModelType> getParentOrderList(ModelType record) {
		return billBomListMapper.getParentOrderList(record);
	}

	@Override
	public <ModelType> int checkDoubleBom(ModelType record) {
		return billBomListMapper.checkDoubleBom(record);
	}

	/**
	 * 重写删除，默认删除下面所有节点的数据
	 */
	@Override
	public <ModelType> int deleteById(ModelType modelType) throws DaoException {
		return billBomListMapper.deleteByLindIds(getDeleteLineId(modelType));
	}

	/**
	 * 重写删除，默认删除下面所有节点的数据
	 */	
	@Override
	public <ModelType> int deleteByPrimarayKeyForModel(ModelType record) throws DaoException {
		return billBomListMapper.deleteByLindIds(getDeleteLineId(record));
	}
	
	private <ModelType> ArrayList<Long> getDeleteLineId(ModelType modelType){
		ArrayList<Long> deleteLineIds = new ArrayList<Long>();
		getDeleteLineId(deleteLineIds,modelType);
		return deleteLineIds;
	}
	
	private <ModelType> void getDeleteLineId(List<Long> deleteLineIds,ModelType modelType){
		List<ModelType> list = billBomListMapper.getSubOrderList(modelType);
		BillBomList bomList = (BillBomList) modelType;
		deleteLineIds.add(bomList.getLineId());
		for(ModelType model:list){
			getDeleteLineId(deleteLineIds,model);
		}
	}

	@Override
	public <ModelType> int modifyById(ModelType modelType) throws DaoException {
		BillBomList bomList = (BillBomList) modelType;
		bomList.setUpdateFlag((byte) 1);
		return super.modifyById(modelType);
	}
}