package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:07
 * @version 1.0.0
 */
public class BasFactory {
    /**
     * 厂区编号
     */
    private String factoryNo;

    /**
     * 厂区名称
     */
    private String factoryName;

    /**
     * 联系人
     */
    private String contacter;

    /**
     * 手机号码
     */
    private String mobileNo;

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
     * 联系地址
     */
    private String contactAddress;

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
     * {@linkplain #factoryNo}
     *
     * @return the value of bas_factory.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for bas_factory.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryName}
     *
     * @return the value of bas_factory.factory_name
     */
    public String getFactoryName() {
        return factoryName;
    }

    /**
     * 
     * {@linkplain #factoryName}
     * @param factoryName the value for bas_factory.factory_name
     */
    public void setFactoryName(String factoryName) {
        this.factoryName = factoryName;
    }

    /**
     * 
     * {@linkplain #contacter}
     *
     * @return the value of bas_factory.contacter
     */
    public String getContacter() {
        return contacter;
    }

    /**
     * 
     * {@linkplain #contacter}
     * @param contacter the value for bas_factory.contacter
     */
    public void setContacter(String contacter) {
        this.contacter = contacter;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of bas_factory.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for bas_factory.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     *
     * @return the value of bas_factory.fax_no
     */
    public String getFaxNo() {
        return faxNo;
    }

    /**
     * 
     * {@linkplain #faxNo}
     * @param faxNo the value for bas_factory.fax_no
     */
    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }

    /**
     * 
     * {@linkplain #email}
     *
     * @return the value of bas_factory.email
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     * {@linkplain #email}
     * @param email the value for bas_factory.email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     * {@linkplain #postCode}
     *
     * @return the value of bas_factory.post_code
     */
    public String getPostCode() {
        return postCode;
    }

    /**
     * 
     * {@linkplain #postCode}
     * @param postCode the value for bas_factory.post_code
     */
    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     *
     * @return the value of bas_factory.contact_address
     */
    public String getContactAddress() {
        return contactAddress;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     * @param contactAddress the value for bas_factory.contact_address
     */
    public void setContactAddress(String contactAddress) {
        this.contactAddress = contactAddress;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_factory.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_factory.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_factory.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_factory.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_factory.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_factory.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_factory.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_factory.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_factory.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_factory.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_factory.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_factory.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_factory.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_factory.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}