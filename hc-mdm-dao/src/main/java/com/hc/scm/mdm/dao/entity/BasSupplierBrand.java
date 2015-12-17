package com.hc.scm.mdm.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
public class BasSupplierBrand {
    /**
     * 使用组织id
     */
    private Integer brandId;

    /**
     * 供应商编号
     */
    private String supplierNo;

    /**
     * 品牌编号
     */
    private String brandNo;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #brandId}
     *
     * @return the value of bas_supplier_brand.brand_id
     */
    public Integer getBrandId() {
        return brandId;
    }

    /**
     * 
     * {@linkplain #brandId}
     * @param brandId the value for bas_supplier_brand.brand_id
     */
    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     *
     * @return the value of bas_supplier_brand.supplier_no
     */
    public String getSupplierNo() {
        return supplierNo;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     * @param supplierNo the value for bas_supplier_brand.supplier_no
     */
    public void setSupplierNo(String supplierNo) {
        this.supplierNo = supplierNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bas_supplier_brand.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bas_supplier_brand.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_supplier_brand.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_supplier_brand.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_supplier_brand.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_supplier_brand.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}