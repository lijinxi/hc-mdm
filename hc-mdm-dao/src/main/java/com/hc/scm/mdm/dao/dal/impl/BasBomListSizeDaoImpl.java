package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasBomListSizeDao;
import com.hc.scm.mdm.dao.entity.BasBom;
import com.hc.scm.mdm.dao.entity.BasBomList;
import com.hc.scm.mdm.dao.mapper.BasBomListSizeMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-10 10:19:54
 * @version 1.0.0
 */
@Repository("basBomListSizeDao")
class BasBomListSizeDaoImpl extends BaseCrudDaoImpl implements BasBomListSizeDao {
    @Resource
    private BasBomListSizeMapper basBomListSizeMapper;

    @Override
    public BaseCrudMapper init() {
        return basBomListSizeMapper;
    }
    
    @Override
    public <ModelType> List<ModelType> findBomListSize(BasBomList record) throws DaoException{
    	try {
    		return basBomListSizeMapper.findBomListSize(record);
		} catch (Exception e) {
			throw new DaoException("得到物料替代表出错了！",e);
		}
    }
    
	/**
	 * 删除BOM清单，条件按BasBom.bomId
	 */
	public <ModelType> int deleteBasBomListSizeByBasBom(BasBom record) throws DaoException{
		try {
			return basBomListSizeMapper.deleteBasBomListSizeByBasBom(record);
		} catch (Exception e) {
			throw new DaoException("删除物料替代表出错了！",e);
		}
	}
    
}