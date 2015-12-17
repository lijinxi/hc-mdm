package com.hc.scm.mdm.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.entity.BillBom;
import com.hc.scm.mdm.dao.entity.BillBomList;
import com.hc.scm.mdm.dao.entity.BillBomListSize;

/**
 * Description: BOM维护单据明细服务
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public interface BillBomListService extends BaseCrudService {
    public  int saveImportBillData(List<BillBom> listBillBom,List<BillBomList> listBillBomList,List<BillBomListSize> listBillBomListSize) throws ServiceException;
    public <ModelType> Map<String, Object> importBillBom(int maintainType,
    		String billNo,String orderNo,String newBomPurpose,String newBrandNo,
    		SystemUser user,BasBomList importBomList) throws ServiceException;
    public Map<String, Object> getBomList(Map<String, Object> resultMap) throws ServiceException;
    public List<BillBomList> getBomList(List<BillBomList> list) throws ServiceException;
    public <ModelType> List<ModelType> selectByBillNo(ModelType record);
    public String CheckImportBillBom(String maintainType,String oldBrandNo,String materialNo,String oldBomPurpose,
    		String newBomPurpose,String newBrandNo,String billNo,String orderNo) throws ServiceException;
    public int checkBillOrderNo(String billNo,Short orderNo) throws ServiceException;
}