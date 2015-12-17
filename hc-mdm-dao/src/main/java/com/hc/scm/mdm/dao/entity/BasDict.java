package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.t
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
public class BasDict {
    /**
     * 字典id
     */
    private Integer dictId;

    /**
     * 字典编码
     */
    private String dictCode;

    /**
     * 字典名称
     */
    private String dictName;

    /**
     * 所属应用编号
     */	
    private Integer appNo;

    /**
     * 字典级别(0=系统级 1=客户级)
     */
    private Integer dictLevel;

    /**
     * 启用状态(0=禁用 1=启用)
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
     * {@linkplain #dictId}
     *
     * @return the value of bas_dict.dict_id
     */
    public Integer getDictId() {
        return dictId;
    }

    /**
     * 
     * {@linkplain #dictId}
     * @param dictId the value for bas_dict.dict_id
     */
    public void setDictId(Integer dictId) {
        this.dictId = dictId;
    }

    /**
     * 
     * {@linkplain #dictCode}
     *
     * @return the value of bas_dict.dict_code
     */
    public String getDictCode() {
        return dictCode;
    }

    /**
     * 
     * {@linkplain #dictCode}
     * @param dictCode the value for bas_dict.dict_code
     */
    public void setDictCode(String dictCode) {
        this.dictCode = dictCode;
    }

    /**
     * 
     * {@linkplain #dictName}
     *
     * @return the value of bas_dict.dict_name
     */
    public String getDictName() {
        return dictName;
    }

    /**
     * 
     * {@linkplain #dictName}
     * @param dictName the value for bas_dict.dict_name
     */
    public void setDictName(String dictName) {
        this.dictName = dictName;
    }

    /**
     * 
     * {@linkplain #appNo}
     *
     * @return the value of bas_dict.app_no
     */
    public Integer getAppNo() {
        return appNo;
    }

    /**
     * 
     * {@linkplain #appNo}
     * @param appNo the value for bas_dict.app_no
     */
    public void setAppNo(Integer appNo) {
        this.appNo = appNo;
    }

    /**
     * 
     * {@linkplain #dictLevel}
     *
     * @return the value of bas_dict.dict_level
     */
    public Integer getDictLevel() {
        return dictLevel;
    }

    /**
     * 
     * {@linkplain #dictLevel}
     * @param dictLevel the value for bas_dict.dict_level
     */
    public void setDictLevel(Integer dictLevel) {
        this.dictLevel = dictLevel;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_dict.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_dict.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_dict.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_dict.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_dict.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_dict.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_dict.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_dict.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_dict.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_dict.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_dict.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_dict.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_dict.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_dict.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}