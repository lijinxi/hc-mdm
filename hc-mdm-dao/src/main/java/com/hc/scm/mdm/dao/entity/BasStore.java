package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
public class BasStore {
    /**
     * 仓库编号
     */
    private String storeNo;

    /**
     * 仓库名称
     */
    private String storeName;

    /**
     * 品牌编号
     */
    private String brandNo;

    /**
     * 厂区编号
     */
    private String factoryNo;

    /**
     * 事业部编号
     */
    private String divisionNo;

    /**
     * 仓库类型(仓库属性 取数据字典 store_type)
     */
    private String storeType;
    
    /**
     * 是否主仓(0=否1=是)
     */
    private Integer isMaster;

    /**
     * 启用状态(0=未生效 1=启用)
     */
    private Integer enableFlag;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bas_store.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bas_store.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #storeName}
     *
     * @return the value of bas_store.store_name
     */
    public String getStoreName() {
        return storeName;
    }

    /**
     * 
     * {@linkplain #storeName}
     * @param storeName the value for bas_store.store_name
     */
    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bas_store.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bas_store.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of bas_store.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for bas_store.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bas_store.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bas_store.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #storeType}
     *
     * @return the value of bas_store.store_type
     */
    public String getStoreType() {
        return storeType;
    }


    /**
     * 
     * {@linkplain #storeType}
     * @param storeType the value for bas_store.store_type
     */
    public void setStoreType(String storeType) {
        this.storeType = storeType;
    }
    
    /**
     * 
     * {@linkplain #isMaster}
     *
     * @return the value of bas_store.is_master
     */
    public Integer getIsMaster() {
        return isMaster;
    }
    
    /**
     * 
     * {@linkplain #isMaster}
     * @param storeType the value for bas_store.is_master
     */
    public void setIsMaster(Integer isMaster) {
        this.isMaster = isMaster;
    }
    
    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_store.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_store.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_store.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_store.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_store.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_store.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_store.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_store.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_store.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_store.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_store.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_store.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_store.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_store.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}