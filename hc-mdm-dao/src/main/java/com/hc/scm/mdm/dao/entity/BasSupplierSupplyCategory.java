package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */
public class BasSupplierSupplyCategory {
    /**
     * 
     */
    private Integer lineId;

    /**
     * 
     */
    private String supplierNo;

    /**
     * 
     */
    private String categoryNo;

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
     * {@linkplain #lineId}
     *
     * @return the value of bas_supplier_supply_category.line_id
     */
    public Integer getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bas_supplier_supply_category.line_id
     */
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     *
     * @return the value of bas_supplier_supply_category.supplier_no
     */
    public String getSupplierNo() {
        return supplierNo;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     * @param supplierNo the value for bas_supplier_supply_category.supplier_no
     */
    public void setSupplierNo(String supplierNo) {
        this.supplierNo = supplierNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     *
     * @return the value of bas_supplier_supply_category.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for bas_supplier_supply_category.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_supplier_supply_category.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_supplier_supply_category.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_supplier_supply_category.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_supplier_supply_category.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_supplier_supply_category.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_supplier_supply_category.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_supplier_supply_category.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_supplier_supply_category.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_supplier_supply_category.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_supplier_supply_category.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_supplier_supply_category.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_supplier_supply_category.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_supplier_supply_category.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_supplier_supply_category.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}