package com.hc.scm.mdm.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BillMaterialDao;
import com.hc.scm.mdm.dao.mapper.BasMaterialSizeMapper;
import com.hc.scm.mdm.dao.mapper.BillMaterialDtlMapper;
import com.hc.scm.mdm.dao.mapper.BillMaterialMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:00
 * @version 1.0.0
 */
@Service("billMaterialDao")
class BillMaterialDaoImpl extends BaseCrudDaoImpl implements BillMaterialDao {
    @Resource
    private BillMaterialMapper billMaterialMapper;
    
//    @Resource
//    private BillMaterialDtlMapper billMaterialDtlMapper;
//    
//    @Resource
//    private BasMaterialMapper basMaterialMapper;
//    
//    @Resource
//    private BasMaterialSizeMapper basMaterialSizeMapper;

    @Override
    public BaseCrudMapper init() {
        return billMaterialMapper;
    }
    
	@Override
	public <ModelType> int audit(ModelType modelType,Object maintainType,Object materialType) throws DaoException {
		try {
			billMaterialMapper.auditBillMaterial(modelType);
			if(Integer.parseInt(maintainType.toString()) == 0)//新建
			{
				billMaterialMapper.auditNewBasMaterial(modelType);
				billMaterialMapper.auditNewBasMaterialSize(modelType);

				billMaterialMapper.auditNewBasBom(modelType);
				//billMaterialMapper.auditNewBasBomList(modelType);
			}
			else if(Integer.parseInt(maintainType.toString()) == 1)//修改
			{
				billMaterialMapper.auditUpdateBasMaterial(modelType);
				billMaterialMapper.auditDeleteBasMaterialSize(modelType);
				billMaterialMapper.auditNewBasMaterialSize(modelType);
			}
			
			return 20;
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
}