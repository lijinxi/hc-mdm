package com.hc.scm.mdm.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 收付款维护实体
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:54
 * @version 1.0.0
 */
public class BasPaymentClause {
    /**
     * 收付款条件编号
     */
    private String paymentClauseNo;

    /**
     * 收付款条件名称
     */
    private String paymentClauseName;

    /**
     * 收付款条件类型(1=付款 2=收款)
     */
    private String paymentClauseType;

    /**
     * 信用天数
     */
    private Integer creditDays;

    /**
     * 优惠天数
     */
    private Integer preferentialDays;

    /**
     * 到期日计算方式(数据字典 待初始化)
     */
    private String dueDateMethod;

    /**
     * 优惠率/金额
     */
    private BigDecimal preferentialRate;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 优惠方式
     */
    private String preferentialWay;

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
     * {@linkplain #paymentClauseNo}
     *
     * @return the value of bas_payment_clause.payment_clause_no
     */
    public String getPaymentClauseNo() {
        return paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseNo}
     * @param paymentClauseNo the value for bas_payment_clause.payment_clause_no
     */
    public void setPaymentClauseNo(String paymentClauseNo) {
        this.paymentClauseNo = paymentClauseNo;
    }

    /**
     * 
     * {@linkplain #paymentClauseName}
     *
     * @return the value of bas_payment_clause.payment_clause_name
     */
    public String getPaymentClauseName() {
        return paymentClauseName;
    }

    /**
     * 
     * {@linkplain #paymentClauseName}
     * @param paymentClauseName the value for bas_payment_clause.payment_clause_name
     */
    public void setPaymentClauseName(String paymentClauseName) {
        this.paymentClauseName = paymentClauseName;
    }

    /**
     * 
     * {@linkplain #paymentClauseType}
     *
     * @return the value of bas_payment_clause.payment_clause_type
     */
    public String getPaymentClauseType() {
        return paymentClauseType;
    }

    /**
     * 
     * {@linkplain #paymentClauseType}
     * @param paymentClauseType the value for bas_payment_clause.payment_clause_type
     */
    public void setPaymentClauseType(String paymentClauseType) {
        this.paymentClauseType = paymentClauseType;
    }

    /**
     * 
     * {@linkplain #creditDays}
     *
     * @return the value of bas_payment_clause.credit_days
     */
    public Integer getCreditDays() {
        return creditDays;
    }

    /**
     * 
     * {@linkplain #creditDays}
     * @param creditDays the value for bas_payment_clause.credit_days
     */
    public void setCreditDays(Integer creditDays) {
        this.creditDays = creditDays;
    }

    /**
     * 
     * {@linkplain #preferentialDays}
     *
     * @return the value of bas_payment_clause.preferential_days
     */
    public Integer getPreferentialDays() {
        return preferentialDays;
    }

    /**
     * 
     * {@linkplain #preferentialDays}
     * @param preferentialDays the value for bas_payment_clause.preferential_days
     */
    public void setPreferentialDays(Integer preferentialDays) {
        this.preferentialDays = preferentialDays;
    }

    /**
     * 
     * {@linkplain #dueDateMethod}
     *
     * @return the value of bas_payment_clause.due_date_method
     */
    public String getDueDateMethod() {
        return dueDateMethod;
    }

    /**
     * 
     * {@linkplain #dueDateMethod}
     * @param dueDateMethod the value for bas_payment_clause.due_date_method
     */
    public void setDueDateMethod(String dueDateMethod) {
        this.dueDateMethod = dueDateMethod;
    }

    /**
     * 
     * {@linkplain #preferentialRate}
     *
     * @return the value of bas_payment_clause.preferential_rate
     */
    public BigDecimal getPreferentialRate() {
        return preferentialRate;
    }

    /**
     * 
     * {@linkplain #preferentialRate}
     * @param preferentialRate the value for bas_payment_clause.preferential_rate
     */
    public void setPreferentialRate(BigDecimal preferentialRate) {
        this.preferentialRate = preferentialRate;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_payment_clause.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_payment_clause.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #preferentialWay}
     *
     * @return the value of bas_payment_clause.preferential_way
     */
    public String getPreferentialWay() {
        return preferentialWay;
    }

    /**
     * 
     * {@linkplain #preferentialWay}
     * @param preferentialWay the value for bas_payment_clause.preferential_way
     */
    public void setPreferentialWay(String preferentialWay) {
        this.preferentialWay = preferentialWay;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_payment_clause.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_payment_clause.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_payment_clause.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_payment_clause.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_payment_clause.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_payment_clause.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_payment_clause.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_payment_clause.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_payment_clause.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_payment_clause.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_payment_clause.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_payment_clause.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}