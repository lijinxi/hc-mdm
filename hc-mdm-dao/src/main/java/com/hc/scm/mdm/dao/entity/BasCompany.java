package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:24:30
 * @version 1.0.0
 */
public class BasCompany {
    /**
     * 公司编号
     */
    private String companyNo;

    /**
     * 公司名称
     */
    private String companyName;

    /**
     * 公司类型(1=法人组织 1=利润中心)
     */
    private Integer companyType;

    /**
     * 公司形态(数据字典 company_form )
     */
    private String companyForm;

    /**
     * 地区编号
     */
    private String regionNo;

    /**
     * 开户银行
     */
    private String bankName;

    /**
     * 银行账号
     */
    private String bankAccountCode;

    /**
     * 银行账户名
     */
    private String bankAccountName;

    /**
     * 联系人
     */
    private String contacter;

    /**
     * 手机号码
     */
    private String mobileNo;

    /**
     * 税务登记号
     */
    private String taxpayingNo;

    /**
     * 纳税级别(0=一般纳税人 1=小规模纳税人)
     */
    private Integer taxLevel;

    /**
     * 法人代表
     */
    private String legalPerson;

    /**
     * 营业证号
     */
    private String certificateCode;

    /**
     * 传真号
     */
    private String faxNo;

    /**
     * 电子邮箱
     */
    private String email;

    /**
     * 邮政编码
     */
    private String postCode;

    /**
     * 行政省编号
     */
    private String provinceNo;

    /**
     * 行政市编号
     */
    private String cityNo;

    /**
     * 行政县编号
     */
    private String countyNo;

    /**
     * 联系地址
     */
    private String contactAddress;

    /**
     * 业务职能(2的倍数，每一位代表一项)
     */
    private Integer businessFunctions;

    /**
     * 数据来源(0=主数据 1=工厂)
     */
    private Integer dataSource;

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
     * {@linkplain #companyNo}
     *
     * @return the value of bas_company.company_no
     */
    public String getCompanyNo() {
        return companyNo;
    }

    /**
     * 
     * {@linkplain #companyNo}
     * @param companyNo the value for bas_company.company_no
     */
    public void setCompanyNo(String companyNo) {
        this.companyNo = companyNo;
    }

    /**
     * 
     * {@linkplain #companyName}
     *
     * @return the value of bas_company.company_name
     */
    public String getCompanyName() {
        return companyName;
    }

    /**
     * 
     * {@linkplain #companyName}
     * @param companyName the value for bas_company.company_name
     */
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    /**
     * 
     * {@linkplain #companyType}
     *
     * @return the value of bas_company.company_type
     */
    public Integer getCompanyType() {
        return companyType;
    }

    /**
     * 
     * {@linkplain #companyType}
     * @param companyType the value for bas_company.company_type
     */
    public void setCompanyType(Integer companyType) {
        this.companyType = companyType;
    }

    /**
     * 
     * {@linkplain #companyForm}
     *
     * @return the value of bas_company.company_form
     */
    public String getCompanyForm() {
        return companyForm;
    }

    /**
     * 
     * {@linkplain #companyForm}
     * @param companyForm the value for bas_company.company_form
     */
    public void setCompanyForm(String companyForm) {
        this.companyForm = companyForm;
    }

    /**
     * 
     * {@linkplain #regionNo}
     *
     * @return the value of bas_company.region_no
     */
    public String getRegionNo() {
        return regionNo;
    }

    /**
     * 
     * {@linkplain #regionNo}
     * @param regionNo the value for bas_company.region_no
     */
    public void setRegionNo(String regionNo) {
        this.regionNo = regionNo;
    }

    /**
     * 
     * {@linkplain #bankName}
     *
     * @return the value of bas_company.bank_name
     */
    public String getBankName() {
        return bankName;
    }

    /**
     * 
     * {@linkplain #bankName}
     * @param bankName the value for bas_company.bank_name
     */
    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    /**
     * 
     * {@linkplain #bankAccountCode}
     *
     * @return the value of bas_company.bank_account_code
     */
    public String getBankAccountCode() {
        return bankAccountCode;
    }

    /**
     * 
     * {@linkplain #bankAccountCode}
     * @param bankAccountCode the value for bas_company.bank_account_code
     */
    public void setBankAccountCode(String bankAccountCode) {
        this.bankAccountCode = bankAccountCode;
    }

    /**
     * 
     * {@linkplain #bankAccountName}
     *
     * @return the value of bas_company.bank_account_name
     */
    public String getBankAccountName() {
        return bankAccountName;
    }

    /**
     * 
     * {@linkplain #bankAccountName}
     * @param bankAccountName the value for bas_company.bank_account_name
     */
    public void setBankAccountName(String bankAccountName) {
        this.bankAccountName = bankAccountName;
    }

    /**
     * 
     * {@linkplain #contacter}
     *
     * @return the value of bas_company.contacter
     */
    public String getContacter() {
        return contacter;
    }

    /**
     * 
     * {@linkplain #contacter}
     * @param contacter the value for bas_company.contacter
     */
    public void setContacter(String contacter) {
        this.contacter = contacter;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of bas_company.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for bas_company.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #taxpayingNo}
     *
     * @return the value of bas_company.taxpaying_no
     */
    public String getTaxpayingNo() {
        return taxpayingNo;
    }

    /**
     * 
     * {@linkplain #taxpayingNo}
     * @param taxpayingNo the value for bas_company.taxpaying_no
     */
    public void setTaxpayingNo(String taxpayingNo) {
        this.taxpayingNo = taxpayingNo;
    }

    /**
     * 
     * {@linkplain #taxLevel}
     *
     * @return the value of bas_company.tax_level
     */
    public Integer getTaxLevel() {
        return taxLevel;
    }

    /**
     * 
     * {@linkplain #taxLevel}
     * @param taxLevel the value for bas_company.tax_level
     */
    public void setTaxLevel(Integer taxLevel) {
        this.taxLevel = taxLevel;
    }

    /**
     * 
     * {@linkplain #legalPerson}
     *
     * @return the value of bas_company.legal_person
     */
    public String getLegalPerson() {
        return legalPerson;
    }

    /**
     * 
     * {@linkplain #legalPerson}
     * @param legalPerson the value for bas_company.legal_person
     */
    public void setLegalPerson(String legalPerson) {
        this.legalPerson = legalPerson;
    }

    /**
     * 
     * {@linkplain #certificateCode}
     *
     * @return the value of bas_company.certificate_code
     */
    public String getCertificateCode() {
        return certificateCode;
    }

    /**
     * 
     * {@linkplain #certificateCode}
     * @param certificateCode the value for bas_company.certificate_code
     */
    public void setCertificateCode(String certificateCode) {
        this.certificateCode = certificateCode;
    }

    /**
     * 
     * {@linkplain #faxNo}
     *
     * @return the value of bas_company.fax_no
     */
    public String getFaxNo() {
        return faxNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     * @param faxNo the value for bas_company.fax_no
     */
    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }

    /**
     * 
     * {@linkplain #email}
     *
     * @return the value of bas_company.email
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     * {@linkplain #email}
     * @param email the value for bas_company.email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     * {@linkplain #postCode}
     *
     * @return the value of bas_company.post_code
     */
    public String getPostCode() {
        return postCode;
    }

    /**
     * 
     * {@linkplain #postCode}
     * @param postCode the value for bas_company.post_code
     */
    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     *
     * @return the value of bas_company.province_no
     */
    public String getProvinceNo() {
        return provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     * @param provinceNo the value for bas_company.province_no
     */
    public void setProvinceNo(String provinceNo) {
        this.provinceNo = provinceNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     *
     * @return the value of bas_company.city_no
     */
    public String getCityNo() {
        return cityNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     * @param cityNo the value for bas_company.city_no
     */
    public void setCityNo(String cityNo) {
        this.cityNo = cityNo;
    }

    /**
     * 
     * {@linkplain #countyNo}
     *
     * @return the value of bas_company.county_no
     */
    public String getCountyNo() {
        return countyNo;
    }

    /**
     * 
     * {@linkplain #countyNo}
     * @param countyNo the value for bas_company.county_no
     */
    public void setCountyNo(String countyNo) {
        this.countyNo = countyNo;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     *
     * @return the value of bas_company.contact_address
     */
    public String getContactAddress() {
        return contactAddress;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     * @param contactAddress the value for bas_company.contact_address
     */
    public void setContactAddress(String contactAddress) {
        this.contactAddress = contactAddress;
    }

    /**
     * 
     * {@linkplain #businessFunctions}
     *
     * @return the value of bas_company.business_functions
     */
    public Integer getBusinessFunctions() {
        return businessFunctions;
    }

    /**
     * 
     * {@linkplain #businessFunctions}
     * @param businessFunctions the value for bas_company.business_functions
     */
    public void setBusinessFunctions(Integer businessFunctions) {
        this.businessFunctions = businessFunctions;
    }

    /**
     * 
     * {@linkplain #dataSource}
     *
     * @return the value of bas_company.data_source
     */
    public Integer getDataSource() {
        return dataSource;
    }

    /**
     * 
     * {@linkplain #dataSource}
     * @param dataSource the value for bas_company.data_source
     */
    public void setDataSource(Integer dataSource) {
        this.dataSource = dataSource;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_company.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_company.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_company.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_company.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_company.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_company.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_company.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_company.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_company.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_company.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_company.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_company.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_company.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_company.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}