package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
public class BasBillType {
    /**
     * 单据类型编号
     */
    private String billTypeNo;

    /**
     * 单据类型名称
     */
    private String billTypeName;

    /**
     * 编码规则编号
     */
    private String codeRuleNo;

    /**
     * 单据分组(取自数据字典 bill_group )
     */
    private String billGroup;

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
     * {@linkplain #billTypeNo}
     *
     * @return the value of bas_bill_type.bill_type_no
     */
    public String getBillTypeNo() {
        return billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     * @param billTypeNo the value for bas_bill_type.bill_type_no
     */
    public void setBillTypeNo(String billTypeNo) {
        this.billTypeNo = billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeName}
     *
     * @return the value of bas_bill_type.bill_type_name
     */
    public String getBillTypeName() {
        return billTypeName;
    }

    /**
     * 
     * {@linkplain #billTypeName}
     * @param billTypeName the value for bas_bill_type.bill_type_name
     */
    public void setBillTypeName(String billTypeName) {
        this.billTypeName = billTypeName;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     *
     * @return the value of bas_bill_type.code_rule_no
     */
    public String getCodeRuleNo() {
        return codeRuleNo;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     * @param codeRuleNo the value for bas_bill_type.code_rule_no
     */
    public void setCodeRuleNo(String codeRuleNo) {
        this.codeRuleNo = codeRuleNo;
    }

    /**
     * 
     * {@linkplain #billGroup}
     *
     * @return the value of bas_bill_type.bill_group
     */
    public String getBillGroup() {
        return billGroup;
    }

    /**
     * 
     * {@linkplain #billGroup}
     * @param billGroup the value for bas_bill_type.bill_group
     */
    public void setBillGroup(String billGroup) {
        this.billGroup = billGroup;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_bill_type.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_bill_type.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_bill_type.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_bill_type.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_bill_type.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_bill_type.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_bill_type.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_bill_type.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_bill_type.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_bill_type.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_bill_type.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_bill_type.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_bill_type.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_bill_type.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}