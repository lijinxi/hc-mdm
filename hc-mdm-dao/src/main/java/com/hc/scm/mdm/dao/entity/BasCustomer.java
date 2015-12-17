package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-18 08:59:16
 * @version 1.0.0
 */
public class BasCustomer {
    /**
     * 
     */
    private String customerNo;

    /**
     * 
     */
    private Integer customerId;

    /**
     * 
     */
    private String customerCode;

    /**
     * 
     */
    private String customerName;

    /**
     * 
     */
    private String customerLname;
    /**
     * 
     */
    private String customerType;

    /**
     * 
     */
    private String customerLevel;

    /**
     * 
     */
    private String customerGroup;

    /**
     * 
     */
    private String regionNo;

    /**
     * 
     */
    private String settlementCompany;

    /**
     * 
     */
    private String bankName;

    /**
     * 
     */
    private String bankAccountCode;

    /**
     * 
     */
    private String bankAccountName;

    /**
     * 
     */
    private String taxpayingNo;

    /**
     * 
     */
    private String contacter;

    /**
     * 
     */
    private String mobileNo;

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    private String provinceNo;

    /**
     * 
     */
    private String contactAddress;

    /**
     * 
     */
    private String currencyNo;

    /**
     * 
     */
    private String paymentClauseNo;

    /**
     * 
     */
    private String paymentMethodNo;

    /**
     * 
     */
    private Integer combineBill;

    /**
     * 
     */
    private Integer summaryBill;

    /**
     * 
     */
    private Integer independentBill;

    /**
     * 
     */
    private Integer exchangeRateType;

    /**
     * 
     */
    
    private String taxRateNo;

    /**
     * 国家
     */
    private String countryNo;
	/**
     * 语言
     */
    private String language;
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
     * {@linkplain #customerNo}
     *
     * @return the value of bas_customer.customer_no
     */
    public String getCustomerNo() {
        return customerNo;
    }

    /**
     * 
     * {@linkplain #customerNo}
     * @param customerNo the value for bas_customer.customer_no
     */
    public void setCustomerNo(String customerNo) {
        this.customerNo = customerNo;
    }

    /**
     * 
     * {@linkplain #customerId}
     *
     * @return the value of bas_customer.customer_id
     */
    public Integer getCustomerId() {
        return customerId;
    }

    /**
     * 
     * {@linkplain #customerId}
     * @param customerId the value for bas_customer.customer_id
     */
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    /**
     * 
     * {@linkplain #customerCode}
     *
     * @return the value of bas_customer.customer_code
     */
    public String getCustomerCode() {
        return customerCode;
    }

    /**
     * 
     * {@linkplain #customerCode}
     * @param customerCode the value for bas_customer.customer_code
     */
    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    /**
     * 
     * {@linkplain #customerName}
     *
     * @return the value of bas_customer.customer_name
     */
    public String getCustomerName() {
        return customerName;
    }

    /**
     * 
     * {@linkplain #customerName}
     * @param customerName the value for bas_customer.customer_name
     */
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    /**
     * 
     * {@linkplain #customerLname}
     *
     * @return the value of bas_customer.customer_lname
     */
    public String getCustomerLname() {
        return customerLname;
    }

    /**
     * 
     * {@linkplain #customerLname}
     * @param customerLname the value for bas_customer.customer_lname
     */
    public void setCustomerLname(String customerLname) {
        this.customerLname = customerLname;
    }

    /**
     * 
     * {@linkplain #customerType}
     *
     * @return the value of bas_customer.customer_type
     */
    public String getCustomerType() {
        return customerType;
    }

    /**
     * 
     * {@linkplain #customerType}
     * @param customerType the value for bas_customer.customer_type
     */
    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    /**
     * 
     * {@linkplain #customerLevel}
     *
     * @return the value of bas_customer.customer_level
     */
    public String getCustomerLevel() {
        return customerLevel;
    }

    /**
     * 
     * {@linkplain #customerLevel}
     * @param customerLevel the value for bas_customer.customer_level
     */
    public void setCustomerLevel(String customerLevel) {
        this.customerLevel = customerLevel;
    }

    /**
     * 
     * {@linkplain #customerGroup}
     *
     * @return the value of bas_customer.customer_group
     */
    public String getCustomerGroup() {
        return customerGroup;
    }

    /**
     * 
     * {@linkplain #customerGroup}
     * @param customerGroup the value for bas_customer.customer_group
     */
    public void setCustomerGroup(String customerGroup) {
        this.customerGroup = customerGroup;
    }

    /**
     * 
     * {@linkplain #regionNo}
     *
     * @return the value of bas_customer.region_no
     */
    public String getRegionNo() {
        return regionNo;
    }

    /**
     * 
     * {@linkplain #regionNo}
     * @param regionNo the value for bas_customer.region_no
     */
    public void setRegionNo(String regionNo) {
        this.regionNo = regionNo;
    }


    /**
     * 
     * {@linkplain #settlementCompany}
     *
     * @return the value of bas_customer.settlement_company
     */
    public String getSettlementCompany() {
        return settlementCompany;
    }

    /**
     * 
     * {@linkplain #settlementCompany}
     * @param settlementCompany the value for bas_customer.settlement_company
     */
    public void setSettlementCompany(String settlementCompany) {
        this.settlementCompany = settlementCompany;
    }

    /**
     * 
     * {@linkplain #bankName}
     *
     * @return the value of bas_customer.bank_name
     */
    public String getBankName() {
        return bankName;
    }

    /**
     * 
     * {@linkplain #bankName}
     * @param bankName the value for bas_customer.bank_name
     */
    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    /**
     * 
     * {@linkplain #bankAccountCode}
     *
     * @return the value of bas_customer.bank_account_code
     */
    public String getBankAccountCode() {
        return bankAccountCode;
    }

    /**
     * 
     * {@linkplain #bankAccountCode}
     * @param bankAccountCode the value for bas_customer.bank_account_code
     */
    public void setBankAccountCode(String bankAccountCode) {
        this.bankAccountCode = bankAccountCode;
    }

    /**
     * 
     * {@linkplain #bankAccountName}
     *
     * @return the value of bas_customer.bank_account_name
     */
    public String getBankAccountName() {
        return bankAccountName;
    }

    /**
     * 
     * {@linkplain #bankAccountName}
     * @param bankAccountName the value for bas_customer.bank_account_name
     */
    public void setBankAccountName(String bankAccountName) {
        this.bankAccountName = bankAccountName;
    }

    /**
     * 
     * {@linkplain #taxpayingNo}
     *
     * @return the value of bas_customer.taxpaying_no
     */
    public String getTaxpayingNo() {
        return taxpayingNo;
    }

    /**
     * 
     * {@linkplain #taxpayingNo}
     * @param taxpayingNo the value for bas_customer.taxpaying_no
     */
    public void setTaxpayingNo(String taxpayingNo) {
        this.taxpayingNo = taxpayingNo;
    }

    /**
     * 
     * {@linkplain #contacter}
     *
     * @return the value of bas_customer.contacter
     */
    public String getContacter() {
        return contacter;
    }

    /**
     * 
     * {@linkplain #contacter}
     * @param contacter the value for bas_customer.contacter
     */
    public void setContacter(String contacter) {
        this.contacter = contacter;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of bas_customer.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for bas_customer.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     *
     * @return the value of bas_customer.fax_no
     */

    /**
     * 
     * {@linkplain #email}
     *
     * @return the value of bas_customer.email
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     * {@linkplain #email}
     * @param email the value for bas_customer.email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     *
     * @return the value of bas_customer.province_no
     */
    public String getProvinceNo() {
        return provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     * @param provinceNo the value for bas_customer.province_no
     */
    public void setProvinceNo(String provinceNo) {
        this.provinceNo = provinceNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     *
     * @return the value of bas_customer.city_no
     */

    /**
     * 
     * {@linkplain #countyNo}
     *
     * @return the value of bas_customer.county_no
     */
    /**
     * 
     * {@linkplain #contactAddress}
     *
     * @return the value of bas_customer.contact_address
     */
    public String getContactAddress() {
        return contactAddress;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     * @param contactAddress the value for bas_customer.contact_address
     */
    public void setContactAddress(String contactAddress) {
        this.contactAddress = contactAddress;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of bas_customer.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for bas_customer.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     *
     * @return the value of bas_customer.payment_clause_no
     */
    public String getPaymentClauseNo() {
        return paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     * @param paymentClauseNo the value for bas_customer.payment_clause_no
     */
    public void setPaymentClauseNo(String paymentClauseNo) {
        this.paymentClauseNo = paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentMethodNo}
     *
     * @return the value of bas_customer.payment_method_no
     */
    public String getPaymentMethodNo() {
        return paymentMethodNo;
    }

    /**
     * 
     * {@linkplain #paymentMethodNo}
     * @param paymentMethodNo the value for bas_customer.payment_method_no
     */
    public void setPaymentMethodNo(String paymentMethodNo) {
        this.paymentMethodNo = paymentMethodNo;
    }

    /**
     * 
     * {@linkplain #combineBill}
     *
     * @return the value of bas_customer.combine_bill
     */
    public Integer getCombineBill() {
        return combineBill;
    }

    /**
     * 
     * {@linkplain #combineBill}
     * @param combineBill the value for bas_customer.combine_bill
     */
    public void setCombineBill(Integer combineBill) {
        this.combineBill = combineBill;
    }

    /**
     * 
     * {@linkplain #summaryBill}
     *
     * @return the value of bas_customer.summary_bill
     */
    public Integer getSummaryBill() {
        return summaryBill;
    }

    /**
     * 
     * {@linkplain #summaryBill}
     * @param summaryBill the value for bas_customer.summary_bill
     */
    public void setSummaryBill(Integer summaryBill) {
        this.summaryBill = summaryBill;
    }

    /**
     * 
     * {@linkplain #independentBill}
     *
     * @return the value of bas_customer.independent_bill
     */
    public Integer getIndependentBill() {
        return independentBill;
    }

    /**
     * 
     * {@linkplain #independentBill}
     * @param independentBill the value for bas_customer.independent_bill
     */
    public void setIndependentBill(Integer independentBill) {
        this.independentBill = independentBill;
    }

    /**
     * 
     * {@linkplain #exchangeRateType}
     *
     * @return the value of bas_customer.exchange_rate_type
     */
    public Integer getExchangeRateType() {
        return exchangeRateType;
    }

    /**
     * 
     * {@linkplain #exchangeRateType}
     * @param exchangeRateType the value for bas_customer.exchange_rate_type
     */
    public void setExchangeRateType(Integer exchangeRateType) {
        this.exchangeRateType = exchangeRateType;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     *
     * @return the value of bas_customer.tax_rate_no
     */
    public String getTaxRateNo() {
        return taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     * @param taxRateNo the value for bas_customer.tax_rate_no
     */
    
    public void setTaxRateNo(String taxRateNo) {
        this.taxRateNo = taxRateNo;
    }
    
    
    public String getCountryNo() {
		return countryNo;
	}

	public void setCountryNo(String countryNo) {
		this.countryNo = countryNo;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	} 
    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_customer.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_customer.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_customer.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_customer.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_customer.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_customer.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_customer.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_customer.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_customer.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_customer.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_customer.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_customer.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_customer.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_customer.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}