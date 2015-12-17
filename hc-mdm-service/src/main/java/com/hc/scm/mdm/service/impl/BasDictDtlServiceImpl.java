package com.hc.scm.mdm.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.cache.RedisClient;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.mdm.dao.dal.BasDictDtlDao;
import com.hc.scm.mdm.service.BasDictDtlService;
import javax.annotation.Resource;

import org.apache.commons.lang3.time.StopWatch;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.hc.scm.mdm.dao.entity.BasDictDtl;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
@Service("basDictDtlService")
class BasDictDtlServiceImpl extends BaseCrudServiceImpl implements BasDictDtlService {
    @Resource
    private BasDictDtlDao basDictDtlDao;
    
    @Resource
    private RedisClient redisClient;
    
    protected final  Logger logger = LoggerFactory.getLogger(BasDictDtlServiceImpl.class);

    @Override
    public BaseCrudDao init() {
        return basDictDtlDao;
    }
    
    @Override
	public <ModelType> int deleteById(ModelType modelType) throws ServiceException {
    	int ret = 0;
		try {
			ret = basDictDtlDao.deleteById(modelType);
			this.delCacheBaseDictCombo(modelType);
			return ret;
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}

	@Override
	public <ModelType> int add(ModelType modelType) throws ServiceException {
		int ret = 0;
		try {
			ret = basDictDtlDao.add(modelType);
			this.delCacheBaseDictCombo(modelType);
			return ret;
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}
	
	@Override
	public <ModelType> int modifyById(ModelType modelType) throws ServiceException {
		int ret = 0;
		try {
			ret = basDictDtlDao.modifyById(modelType);
			this.delCacheBaseDictCombo(modelType);
			return ret;
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}
	
	public <ModelType> void delCacheBaseDictCombo(ModelType modelType){
		StopWatch clock = new StopWatch();
		clock.start(); // 计时开始
		
    	BasDictDtl model = (BasDictDtl)modelType;
    	String cacheKey = SysConstans.REDIS_CACHE_BAS_DICT_COMBO + model.getDictCode();
    	Object result = redisClient.get(cacheKey);
    	logger.info("读取缓存---Redis缓存:cacheKey---" + cacheKey + "---waiting：" + clock.getTime() + "ms." 
    			+ " ---result：" + (result==null ? "null" : result.toString()));
    	if(result != null) {
    		long temp = redisClient.delete(cacheKey);
    		logger.info("删除缓存---Redis缓存:cacheKey---" + cacheKey + "---[" + temp + "]---waiting：" + clock.getTime() + "ms.");
    	};
	}
}