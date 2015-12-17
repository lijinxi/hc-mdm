package com.hc.scm.mdm.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:52:50
 * @version 1.0.0
 */
public class BasTaxRate {
    /**
     * 税率编号
     */
    private String taxRateNo;

    /**
     * 税率名称
     */
    private String taxRateName;

    /**
     * 税率(%)
     */
    private BigDecimal taxRate;

    /**
     * 税种编号
     */
    private String taxCategoryNo;

    /**
     * 是否增值税(1=是 0=否)
     */
    private Integer isAddedTax;

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
     * {@linkplain #taxRateNo}
     *
     * @return the value of bas_tax_rate.tax_rate_no
     */
    public String getTaxRateNo() {
        return taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     * @param taxRateNo the value for bas_tax_rate.tax_rate_no
     */
    public void setTaxRateNo(String taxRateNo) {
        this.taxRateNo = taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxRateName}
     *
     * @return the value of bas_tax_rate.tax_rate_name
     */
    public String getTaxRateName() {
        return taxRateName;
    }

    /**
     * 
     * {@linkplain #taxRateName}
     * @param taxRateName the value for bas_tax_rate.tax_rate_name
     */
    public void setTaxRateName(String taxRateName) {
        this.taxRateName = taxRateName;
    }

    /**
     * 
     * {@linkplain #taxRate}
     *
     * @return the value of bas_tax_rate.tax_rate
     */
    public BigDecimal getTaxRate() {
        return taxRate;
    }

    /**
     * 
     * {@linkplain #taxRate}
     * @param taxRate the value for bas_tax_rate.tax_rate
     */
    public void setTaxRate(BigDecimal taxRate) {
        this.taxRate = taxRate;
    }

    /**
     * 
     * {@linkplain #taxCategoryNo}
     *
     * @return the value of bas_tax_rate.tax_category_no
     */
    public String getTaxCategoryNo() {
        return taxCategoryNo;
    }

    /**
     * 
     * {@linkplain #taxCategoryNo}
     * @param taxCategoryNo the value for bas_tax_rate.tax_category_no
     */
    public void setTaxCategoryNo(String taxCategoryNo) {
        this.taxCategoryNo = taxCategoryNo;
    }

    /**
     * 
     * {@linkplain #isAddedTax}
     *
     * @return the value of bas_tax_rate.is_added_tax
     */
    public Integer getIsAddedTax() {
        return isAddedTax;
    }

    /**
     * 
     * {@linkplain #isAddedTax}
     * @param isAddedTax the value for bas_tax_rate.is_added_tax
     */
    public void setIsAddedTax(Integer isAddedTax) {
        this.isAddedTax = isAddedTax;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_tax_rate.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_tax_rate.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_tax_rate.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_tax_rate.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_tax_rate.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_tax_rate.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_tax_rate.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_tax_rate.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_tax_rate.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_tax_rate.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_tax_rate.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_tax_rate.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_tax_rate.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_tax_rate.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}