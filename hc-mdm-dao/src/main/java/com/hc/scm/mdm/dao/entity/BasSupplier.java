package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
public class BasSupplier {
    /**
     * 供应商编号
     */
    private String supplierNo;

    /**
     * 供应商名称
     */
    private String supplierName;

    /**
     * 供应商简称
     */
    private String supplierSname;

    /**
     * 供应商地址
     */
    private String supplierAddress;

    /**
     * 国家代码
     */
    private String countryNo;

    /**
     * 省编号
     */
    private String provinceNo;

    /**
     * 邮政编码
     */
    private String postcodeNo;

    /**
     * 手机号码
     */
    private String mobileNo;

    /**
     * 电话号码
     */
    private String phoneNo;

    /**
     * 传真号码
     */
    private String faxNo;

    /**
     * 邮件地址
     */
    private String email;

    /**
     * 公司网站
     */
    private String website;

    /**
     * 供应商类型(取数据字典 supplier_type)
     */
    private String supplierType;

    /**
     * 供应商状态(取数据字典 supplier_status)
     */
    private String supplierStatus;

    /**
     * 厂商类别(取数据字典 factory_type)
     */
    private String factoryType;

    /**
     * 是否限定品牌(0=否 1=是)
     */
    private Integer fixInDivision;

    /**
     * 订单币种(币别编号)
     */
    private String currencyNo;

    /**
     * 付款条件(bas_payment_clause)
     */
    private String paymentClauseNo;

    /**
     * 付款方式(bas_payment_method)
     */
    private String paymentMethodNo;

    /**
     * 税务登记号
     */
    private String taxpayingNo;

    /**
     * 增值税登记号
     */
    private String addRateNo;

    /**
     * 发票类型(取自数据字典 invoice_type)
     */
    private String invoiceType;

    /**
     * 默认税率(bas_tax_rate)
     */
    private String taxRateNo;

    /**
     * 财务信函地址
     */
    private String financeAddress;

    /**
     * 最近发票日期
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date lastInvoiceDate;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 启用状态(0=未生效 1=启用)
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
     * {@linkplain #supplierNo}
     *
     * @return the value of bas_supplier.supplier_no
     */
    public String getSupplierNo() {
        return supplierNo;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     * @param supplierNo the value for bas_supplier.supplier_no
     */
    public void setSupplierNo(String supplierNo) {
        this.supplierNo = supplierNo;
    }

    /**
     * 
     * {@linkplain #supplierName}
     *
     * @return the value of bas_supplier.supplier_name
     */
    public String getSupplierName() {
        return supplierName;
    }

    /**
     * 
     * {@linkplain #supplierName}
     * @param supplierName the value for bas_supplier.supplier_name
     */
    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    /**
     * 
     * {@linkplain #supplierSname}
     *
     * @return the value of bas_supplier.supplier_sname
     */
    public String getSupplierSname() {
        return supplierSname;
    }

    /**
     * 
     * {@linkplain #supplierSname}
     * @param supplierSname the value for bas_supplier.supplier_sname
     */
    public void setSupplierSname(String supplierSname) {
        this.supplierSname = supplierSname;
    }

    /**
     * 
     * {@linkplain #supplierAddress}
     *
     * @return the value of bas_supplier.supplier_address
     */
    public String getSupplierAddress() {
        return supplierAddress;
    }

    /**
     * 
     * {@linkplain #supplierAddress}
     * @param supplierAddress the value for bas_supplier.supplier_address
     */
    public void setSupplierAddress(String supplierAddress) {
        this.supplierAddress = supplierAddress;
    }

    /**
     * 
     * {@linkplain #countryNo}
     *
     * @return the value of bas_supplier.country_no
     */
    public String getCountryNo() {
        return countryNo;
    }

    /**
     * 
     * {@linkplain #countryNo}
     * @param countryNo the value for bas_supplier.country_no
     */
    public void setCountryNo(String countryNo) {
        this.countryNo = countryNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     *
     * @return the value of bas_supplier.province_no
     */
    public String getProvinceNo() {
        return provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     * @param provinceNo the value for bas_supplier.province_no
     */
    public void setProvinceNo(String provinceNo) {
        this.provinceNo = provinceNo;
    }

    /**
     * 
     * {@linkplain #postcodeNo}
     *
     * @return the value of bas_supplier.postcode_no
     */
    public String getPostcodeNo() {
        return postcodeNo;
    }

    /**
     * 
     * {@linkplain #postcodeNo}
     * @param postcodeNo the value for bas_supplier.postcode_no
     */
    public void setPostcodeNo(String postcodeNo) {
        this.postcodeNo = postcodeNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of bas_supplier.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for bas_supplier.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #phoneNo}
     *
     * @return the value of bas_supplier.phone_no
     */
    public String getPhoneNo() {
        return phoneNo;
    }

    /**
     * 
     * {@linkplain #phoneNo}
     * @param phoneNo the value for bas_supplier.phone_no
     */
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     *
     * @return the value of bas_supplier.fax_no
     */
    public String getFaxNo() {
        return faxNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     * @param faxNo the value for bas_supplier.fax_no
     */
    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }

    /**
     * 
     * {@linkplain #email}
     *
     * @return the value of bas_supplier.email
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     * {@linkplain #email}
     * @param email the value for bas_supplier.email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     * {@linkplain #website}
     *
     * @return the value of bas_supplier.website
     */
    public String getWebsite() {
        return website;
    }

    /**
     * 
     * {@linkplain #website}
     * @param website the value for bas_supplier.website
     */
    public void setWebsite(String website) {
        this.website = website;
    }

    /**
     * 
     * {@linkplain #supplierType}
     *
     * @return the value of bas_supplier.supplier_type
     */
    public String getSupplierType() {
        return supplierType;
    }

    /**
     * 
     * {@linkplain #supplierType}
     * @param supplierType the value for bas_supplier.supplier_type
     */
    public void setSupplierType(String supplierType) {
        this.supplierType = supplierType;
    }

    /**
     * 
     * {@linkplain #supplierStatus}
     *
     * @return the value of bas_supplier.supplier_status
     */
    public String getSupplierStatus() {
        return supplierStatus;
    }

    /**
     * 
     * {@linkplain #supplierStatus}
     * @param supplierStatus the value for bas_supplier.supplier_status
     */
    public void setSupplierStatus(String supplierStatus) {
        this.supplierStatus = supplierStatus;
    }

    /**
     * 
     * {@linkplain #factoryType}
     *
     * @return the value of bas_supplier.factory_type
     */
    public String getFactoryType() {
        return factoryType;
    }

    /**
     * 
     * {@linkplain #factoryType}
     * @param factoryType the value for bas_supplier.factory_type
     */
    public void setFactoryType(String factoryType) {
        this.factoryType = factoryType;
    }

    /**
     * 
     * {@linkplain #fixInDivision}
     *
     * @return the value of bas_supplier.fix_in_division
     */
    public Integer getFixInDivision() {
        return fixInDivision;
    }

    /**
     * 
     * {@linkplain #fixInDivision}
     * @param fixInDivision the value for bas_supplier.fix_in_division
     */
    public void setFixInDivision(Integer fixInDivision) {
        this.fixInDivision = fixInDivision;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of bas_supplier.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for bas_supplier.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     *
     * @return the value of bas_supplier.payment_clause_no
     */
    public String getPaymentClauseNo() {
        return paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     * @param paymentClauseNo the value for bas_supplier.payment_clause_no
     */
    public void setPaymentClauseNo(String paymentClauseNo) {
        this.paymentClauseNo = paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentMethodNo}
     *
     * @return the value of bas_supplier.payment_method_no
     */
    public String getPaymentMethodNo() {
        return paymentMethodNo;
    }

    /**
     * 
     * {@linkplain #paymentMethodNo}
     * @param paymentMethodNo the value for bas_supplier.payment_method_no
     */
    public void setPaymentMethodNo(String paymentMethodNo) {
        this.paymentMethodNo = paymentMethodNo;
    }

    /**
     * 
     * {@linkplain #taxpayingNo}
     *
     * @return the value of bas_supplier.taxpaying_no
     */
    public String getTaxpayingNo() {
        return taxpayingNo;
    }

    /**
     * 
     * {@linkplain #taxpayingNo}
     * @param taxpayingNo the value for bas_supplier.taxpaying_no
     */
    public void setTaxpayingNo(String taxpayingNo) {
        this.taxpayingNo = taxpayingNo;
    }

    /**
     * 
     * {@linkplain #addRateNo}
     *
     * @return the value of bas_supplier.add_rate_no
     */
    public String getAddRateNo() {
        return addRateNo;
    }

    /**
     * 
     * {@linkplain #addRateNo}
     * @param addRateNo the value for bas_supplier.add_rate_no
     */
    public void setAddRateNo(String addRateNo) {
        this.addRateNo = addRateNo;
    }

    /**
     * 
     * {@linkplain #invoiceType}
     *
     * @return the value of bas_supplier.invoice_type
     */
    public String getInvoiceType() {
        return invoiceType;
    }

    /**
     * 
     * {@linkplain #invoiceType}
     * @param invoiceType the value for bas_supplier.invoice_type
     */
    public void setInvoiceType(String invoiceType) {
        this.invoiceType = invoiceType;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     *
     * @return the value of bas_supplier.tax_rate_no
     */
    public String getTaxRateNo() {
        return taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     * @param taxRateNo the value for bas_supplier.tax_rate_no
     */
    public void setTaxRateNo(String taxRateNo) {
        this.taxRateNo = taxRateNo;
    }

    /**
     * 
     * {@linkplain #financeAddress}
     *
     * @return the value of bas_supplier.finance_address
     */
    public String getFinanceAddress() {
        return financeAddress;
    }

    /**
     * 
     * {@linkplain #financeAddress}
     * @param financeAddress the value for bas_supplier.finance_address
     */
    public void setFinanceAddress(String financeAddress) {
        this.financeAddress = financeAddress;
    }

    /**
     * 
     * {@linkplain #lastInvoiceDate}
     *
     * @return the value of bas_supplier.last_invoice_date
     */
    public Date getLastInvoiceDate() {
        return lastInvoiceDate;
    }

    /**
     * 
     * {@linkplain #lastInvoiceDate}
     * @param lastInvoiceDate the value for bas_supplier.last_invoice_date
     */
    public void setLastInvoiceDate(Date lastInvoiceDate) {
        this.lastInvoiceDate = lastInvoiceDate;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_supplier.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_supplier.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_supplier.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_supplier.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_supplier.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_supplier.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_supplier.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_supplier.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_supplier.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_supplier.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_supplier.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_supplier.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_supplier.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_supplier.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}