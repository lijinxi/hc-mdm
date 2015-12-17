package com.hc.scm.mdm.service.impl;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.dal.BasCategoryDao;
import com.hc.scm.mdm.dao.entity.BasCategory;
import com.hc.scm.mdm.service.BasCategoryService;
import com.hc.scm.mdm.service.BasSystemCodeService;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 类别维护Service实现
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
@Service("basCategoryService")
class BasCategoryServiceImpl extends BaseCrudServiceImpl implements BasCategoryService {
    @Resource
    private BasCategoryDao basCategoryDao;

    @Resource
    private BasSystemCodeService basSystemCodeService;
    
    @Override
    public BaseCrudDao init() {
        return basCategoryDao;
    }

	@Override
	public <ModelType> int add(ModelType modelType) throws ServiceException {
		try {
			//赋值流水号
			String categoryNo = basSystemCodeService.getSystemSheetid("CA");
			BasCategory basCategory = (BasCategory)modelType;
			if (categoryNo==null || categoryNo.isEmpty()){
				throw new ServiceException("请检查是否有配置CA的流水号！");
			}
			basCategory.setCategoryNo(categoryNo);
			//新增数据
			super.add(modelType);
			//更新类别路径
			return basCategoryDao.updateSearchCode(modelType);
			
		} catch (Exception e) {
			throw new ServiceException("获取CA的流水号出错了！");
		}
	}

	/**
	 * 删除检查，允许删除的话则返回空，否则返回对应的提示信息
	 */
	@Override
	public <ModelType> String checkDeleteCategory(String categoryNo) throws ServiceException {
		try {
			if (basCategoryDao.getSubCategoryCount(categoryNo)>0){
				return "该类别存在子类别，不允许删除！";
			}
			String firstCategoryNo = basCategoryDao.checkCategoryNo(categoryNo);
			if (firstCategoryNo==null || firstCategoryNo.isEmpty()){
				return "";
			}else{
				return "该类别已经被引用了不允许删除！";
			}
		} catch (Exception e) {
			throw new ServiceException("检查删除出错\r\n"+e.getMessage(),e);
		}
	}
	/**
	 * 获取物料大类
	 */
	@Override
	public List<BasCategory> getCategory(Map<String,Object> params)throws ServiceException {
		try{
			return basCategoryDao.getCategory(params);
		}catch(Exception e){
			throw new ServiceException("获取物料类别出错"+e.getMessage(),e);
		}		
		
	}
}