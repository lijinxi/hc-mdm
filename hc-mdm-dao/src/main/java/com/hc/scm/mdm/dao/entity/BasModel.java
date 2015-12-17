package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     hc.hc@author:     he.xy
 * @date:  2015-04-14 17:25:26
 * @version 1.0.0
 */
public class BasModel {
    /**
     * 
     */
    private Integer modelId;

    /**
     * 
     */
    private String modelNo;

    /**
     * 
     */
    private String modelName;

    /**
     * 
     */
    private Integer orderNo;

    /**
     * 
     */
    private Integer enableFlag;

    /**
     * 
     */
    private String creator;

    /**
     * 
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 
     */
    private String modifier;

    /**
     * 
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 
     */
    private String remarks;

    /**
     * 
     * {@linkplain #modelId}
     *
     * @return the value of bas_model.model_id
     */
    public Integer getModelId() {
        return modelId;
    }

    /**
     * 
     * {@linkplain #modelId}
     * @param modelId the value for bas_model.model_id
     */
    public void setModelId(Integer modelId) {
        this.modelId = modelId;
    }

    /**
     * 
     * {@linkplain #modelNo}
     *
     * @return the value of bas_model.model_no
     */
    public String getModelNo() {
        return modelNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     * @param modelNo the value for bas_model.model_no
     */
    public void setModelNo(String modelNo) {
        this.modelNo = modelNo;
    }

    /**
     * 
     * {@linkplain #modelName}
     *
     * @return the value of bas_model.model_name
     */
    public String getModelName() {
        return modelName;
    }

    /**
     * 
     * {@linkplain #modelName}
     * @param modelName the value for bas_model.model_name
     */
    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_model.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_model.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_model.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_model.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_model.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_model.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_model.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_model.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_model.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_model.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_model.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_model.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_model.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_model.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}