package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 费用项目维护实体
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
public class BasFee {
    /**
     * 费用编号
     */
    private String feeNo;

    /**
     * 费用名称
     */
    private String feeName;

    /**
     * 税率编号
     */
    private String taxRateNo;

    /**
     * 费用分类(取自数据字典 fee_category )
     */
    private String feeCategory;

    /**
     * 科目编号
     */
    private Integer subjectNo;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

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
     * {@linkplain #feeNo}
     *
     * @return the value of bas_fee.fee_no
     */
    public String getFeeNo() {
        return feeNo;
    }

    /**
     * 
     * {@linkplain #feeNo}
     * @param feeNo the value for bas_fee.fee_no
     */
    public void setFeeNo(String feeNo) {
        this.feeNo = feeNo;
    }

    /**
     * 
     * {@linkplain #feeName}
     *
     * @return the value of bas_fee.fee_name
     */
    public String getFeeName() {
        return feeName;
    }

    /**
     * 
     * {@linkplain #feeName}
     * @param feeName the value for bas_fee.fee_name
     */
    public void setFeeName(String feeName) {
        this.feeName = feeName;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     *
     * @return the value of bas_fee.tax_rate_no
     */
    public String getTaxRateNo() {
        return taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     * @param taxRateNo the value for bas_fee.tax_rate_no
     */
    public void setTaxRateNo(String taxRateNo) {
        this.taxRateNo = taxRateNo;
    }

    /**
     * 
     * {@linkplain #feeCategory}
     *
     * @return the value of bas_fee.fee_category
     */
    public String getFeeCategory() {
        return feeCategory;
    }

    /**
     * 
     * {@linkplain #feeCategory}
     * @param feeCategory the value for bas_fee.fee_category
     */
    public void setFeeCategory(String feeCategory) {
        this.feeCategory = feeCategory;
    }

    /**
     * 
     * {@linkplain #subjectNo}
     *
     * @return the value of bas_fee.subject_no
     */
    public Integer getSubjectNo() {
        return subjectNo;
    }

    /**
     * 
     * {@linkplain #subjectNo}
     * @param subjectNo the value for bas_fee.subject_no
     */
    public void setSubjectNo(Integer subjectNo) {
        this.subjectNo = subjectNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_fee.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_fee.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_fee.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_fee.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_fee.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_fee.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_fee.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_fee.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_fee.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_fee.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_fee.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_fee.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_fee.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_fee.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}