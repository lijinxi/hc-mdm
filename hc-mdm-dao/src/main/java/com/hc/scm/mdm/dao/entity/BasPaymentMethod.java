package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-16 16:33:59
 * @version 1.0.0
 */
public class BasPaymentMethod {
    /**
     * 结算方式编号
     */
    private String paymentMethodNo;

    /**
     * 结算方式名称
     */
    private String paymentMethodName;

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
     * {@linkplain #paymentMethodNo}
     *
     * @return the value of bas_payment_method.payment_method_no
     */
    public String getPaymentMethodNo() {
        return paymentMethodNo;
    }

    /**
     * 
     * {@linkplain #paymentMethodNo}
     * @param paymentMethodNo the value for bas_payment_method.payment_method_no
     */
    public void setPaymentMethodNo(String paymentMethodNo) {
        this.paymentMethodNo = paymentMethodNo;
    }

    /**
     * 
     * {@linkplain #paymentMethodName}
     *
     * @return the value of bas_payment_method.payment_method_name
     */
    public String getPaymentMethodName() {
        return paymentMethodName;
    }

    /**
     * 
     * {@linkplain #paymentMethodName}
     * @param paymentMethodName the value for bas_payment_method.payment_method_name
     */
    public void setPaymentMethodName(String paymentMethodName) {
        this.paymentMethodName = paymentMethodName;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_payment_method.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_payment_method.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_payment_method.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_payment_method.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_payment_method.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_payment_method.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_payment_method.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_payment_method.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_payment_method.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_payment_method.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_payment_method.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_payment_method.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_payment_method.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_payment_method.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}