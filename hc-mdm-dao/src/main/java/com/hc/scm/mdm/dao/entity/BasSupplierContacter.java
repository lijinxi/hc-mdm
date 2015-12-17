package com.hc.scm.mdm.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:51:25
 * @version 1.0.0
 */
public class BasSupplierContacter {
    /**
     * 联系人id
     */
    private Integer contacterId;

    /**
     * 供应商编号
     */
    private String supplierNo;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 联系人称呼(取数据字典 contacter_called)
     */
    private String contacterCalled;

    /**
     * 联系人姓名
     */
    private String contacterName;

    /**
     * 联系人部门(取数据字典 contacter_dept)
     */
    private String contacterDept;

    /**
     * 联系人职务(取数据字典 contacter_duty)
     */
    private String contacterDuty;

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
     * 是否默认联系人(0=否 1=是)
     */
    private Integer isDefault;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #contacterId}
     *
     * @return the value of bas_supplier_contacter.contacter_id
     */
    public Integer getContacterId() {
        return contacterId;
    }

    /**
     * 
     * {@linkplain #contacterId}
     * @param contacterId the value for bas_supplier_contacter.contacter_id
     */
    public void setContacterId(Integer contacterId) {
        this.contacterId = contacterId;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     *
     * @return the value of bas_supplier_contacter.supplier_no
     */
    public String getSupplierNo() {
        return supplierNo;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     * @param supplierNo the value for bas_supplier_contacter.supplier_no
     */
    public void setSupplierNo(String supplierNo) {
        this.supplierNo = supplierNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_supplier_contacter.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_supplier_contacter.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #contacterCalled}
     *
     * @return the value of bas_supplier_contacter.contacter_called
     */
    public String getContacterCalled() {
        return contacterCalled;
    }

    /**
     * 
     * {@linkplain #contacterCalled}
     * @param contacterCalled the value for bas_supplier_contacter.contacter_called
     */
    public void setContacterCalled(String contacterCalled) {
        this.contacterCalled = contacterCalled;
    }

    /**
     * 
     * {@linkplain #contacterName}
     *
     * @return the value of bas_supplier_contacter.contacter_name
     */
    public String getContacterName() {
        return contacterName;
    }

    /**
     * 
     * {@linkplain #contacterName}
     * @param contacterName the value for bas_supplier_contacter.contacter_name
     */
    public void setContacterName(String contacterName) {
        this.contacterName = contacterName;
    }

    /**
     * 
     * {@linkplain #contacterDept}
     *
     * @return the value of bas_supplier_contacter.contacter_dept
     */
    public String getContacterDept() {
        return contacterDept;
    }

    /**
     * 
     * {@linkplain #contacterDept}
     * @param contacterDept the value for bas_supplier_contacter.contacter_dept
     */
    public void setContacterDept(String contacterDept) {
        this.contacterDept = contacterDept;
    }

    /**
     * 
     * {@linkplain #contacterDuty}
     *
     * @return the value of bas_supplier_contacter.contacter_duty
     */
    public String getContacterDuty() {
        return contacterDuty;
    }

    /**
     * 
     * {@linkplain #contacterDuty}
     * @param contacterDuty the value for bas_supplier_contacter.contacter_duty
     */
    public void setContacterDuty(String contacterDuty) {
        this.contacterDuty = contacterDuty;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of bas_supplier_contacter.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for bas_supplier_contacter.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #phoneNo}
     *
     * @return the value of bas_supplier_contacter.phone_no
     */
    public String getPhoneNo() {
        return phoneNo;
    }

    /**
     * 
     * {@linkplain #phoneNo}
     * @param phoneNo the value for bas_supplier_contacter.phone_no
     */
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     *
     * @return the value of bas_supplier_contacter.fax_no
     */
    public String getFaxNo() {
        return faxNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     * @param faxNo the value for bas_supplier_contacter.fax_no
     */
    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }

    /**
     * 
     * {@linkplain #email}
     *
     * @return the value of bas_supplier_contacter.email
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     * {@linkplain #email}
     * @param email the value for bas_supplier_contacter.email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     * {@linkplain #isDefault}
     *
     * @return the value of bas_supplier_contacter.is_default
     */
    public Integer getIsDefault() {
        return isDefault;
    }

    /**
     * 
     * {@linkplain #isDefault}
     * @param isDefault the value for bas_supplier_contacter.is_default
     */
    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_supplier_contacter.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_supplier_contacter.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
    public BasSupplierContacter() {
	}    
    public BasSupplierContacter(String supplierNo) {
		this.supplierNo = supplierNo;
	}
}