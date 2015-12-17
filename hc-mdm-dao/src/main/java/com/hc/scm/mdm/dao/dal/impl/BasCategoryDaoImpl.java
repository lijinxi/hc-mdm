package com.hc.scm.mdm.dao.dal.impl;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.mdm.dao.dal.BasCategoryDao;
import com.hc.scm.mdm.dao.entity.BasCategory;
import com.hc.scm.mdm.dao.mapper.BasCategoryMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 类别维护Dao实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
@Service("basCategoryDao")
class BasCategoryDaoImpl extends BaseCrudDaoImpl implements BasCategoryDao {
    @Resource
    private BasCategoryMapper basCategoryMapper;

    @Override
    public BaseCrudMapper init() {
        return basCategoryMapper;
    }
    
    @Override
    public <ModelType> int updateSearchCode(ModelType record) throws DaoException{
    	try {
			return basCategoryMapper.updateSearchCode(record);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
    }
    
    @Override
	public <ModelType> int getSubCategoryCount(String categoryNo) throws DaoException{
		try {
			return basCategoryMapper.getSubCategoryCount(categoryNo);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
	
    @Override
	public <ModelType> String checkCategoryNo(String categoryNo) throws DaoException{
		try {
			return basCategoryMapper.checkCategoryNo(categoryNo);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
    
    @Override
	public List<BasCategory> getCategory(Map<String,Object> params) {
		try {
			return basCategoryMapper.getCategory(params);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
    /*
     * 替换基类Dao保存方法，保存按规则生成Category_No
     * 由于是自增字段所以生成后同时更新Search_Code
     */
/*	@Override
	public <ModelType> int add(ModelType modelType) throws DaoException {
		try {
			String categoryNo = basCategoryMapper.selectInsertCategoryNo(modelType);
			BasCategory basCategory = (BasCategory)modelType;
			int count=0;
			if (basCategory instanceof BasCategory && !categoryNo.isEmpty()){
				basCategory.setCategoryNo(categoryNo);
				count = basCategoryMapper.insert(modelType);
				count = basCategoryMapper.updateSearchCode(modelType);
			}else{
				throw new DaoException("增加数据出错了！" + (categoryNo.isEmpty() ? "没有得到类别编号。" : ""));
			}
			return count;
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}*/
	
	/*
	 * 此方法根据search_code删除节点下面所有的子节点
	 */
/*	@Override
	public <ModelType> int deleteById(ModelType modelType) throws DaoException {
		try {
			return basCategoryMapper.deleteBySearchCode(modelType);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}*/
}