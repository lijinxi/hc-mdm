package com.hc.scm.mdm.service.impl;

import java.util.List;

import com.hc.scm.common.annotation.ReadCacheAnnotation;
import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.cache.RedisClient;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.dal.BasDictDao;
import com.hc.scm.mdm.dao.entity.BasDict;
import com.hc.scm.mdm.dao.model.BasDictDtlComboModel;
import com.hc.scm.mdm.service.BasDictService;
import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
@Service("basDictService")
class BasDictServiceImpl extends BaseCrudServiceImpl implements BasDictService {
    @Resource
    private BasDictDao basDictDao;
    
    @Resource
    private RedisClient redisClient;
    
    protected final Logger logger = LoggerFactory.getLogger(BasDictServiceImpl.class);

    @Override
    public BaseCrudDao init() {
        return basDictDao;
    }

	@Override
	@ReadCacheAnnotation(assignCacheKey = SysConstans.REDIS_CACHE_BAS_DICT_COMBO+"+$(0)", remoteExpire = 7200)
	public List<BasDictDtlComboModel> getBasDictCombo(String dictCode)
			throws ServiceException {
		try {
			return basDictDao.selectBasDictCombo(dictCode);
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}
	
	@Override
	public <ModelType> int deleteById(ModelType modelType) throws ServiceException {
    	int ret = 0;
		try {
			ret = basDictDao.deleteById(modelType);
			this.delCacheBaseDictCombo(modelType);
			return ret;
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}
	
	public <ModelType> void delCacheBaseDictCombo(ModelType modelType){
    	BasDict model = (BasDict)modelType;
    	String cacheKey = SysConstans.REDIS_CACHE_BAS_DICT_COMBO + model.getDictCode();
		long temp = redisClient.delete(cacheKey);
		logger.info("删除缓存成功---Redis缓存:cacheKey---" + cacheKey + "---[" + temp + "]");
	}
}