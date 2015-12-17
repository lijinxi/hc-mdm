package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:00
 * @version 1.0.0
 */
public class BillMaterial {
    /**
     * 单据号
     */
    private String billNo;

    /**
     * 维护类型(0=新建 1=修改)
     */
    private Integer maintainType;

    /**
     * 物料类型(0=成品/半成品 1=原料)
     */
    private Integer materialType;

    /**
     * 操作人
     */
    private String operator;

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
     * 审核人
     */
    private String auditor;

    /**
     * 审核时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date auditTime;

    /**
     * 单据状态(0=编辑 1=审核)
     */
    private Byte billStatus;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bill_material.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bill_material.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #maintainType}
     *
     * @return the value of bill_material.maintain_type
     */
    public Integer getMaintainType() {
        return maintainType;
    }

    /**
     * 
     * {@linkplain #maintainType}
     * @param maintainType the value for bill_material.maintain_type
     */
    public void setMaintainType(Integer maintainType) {
        this.maintainType = maintainType;
    }

    /**
     * 
     * {@linkplain #materialType}
     *
     * @return the value of bill_material.material_type
     */
    public Integer getMaterialType() {
        return materialType;
    }

    /**
     * 
     * {@linkplain #materialType}
     * @param materialType the value for bill_material.material_type
     */
    public void setMaterialType(Integer materialType) {
        this.materialType = materialType;
    }

    /**
     * 
     * {@linkplain #operator}
     *
     * @return the value of bill_material.operator
     */
    public String getOperator() {
        return operator;
    }

    /**
     * 
     * {@linkplain #operator}
     * @param operator the value for bill_material.operator
     */
    public void setOperator(String operator) {
        this.operator = operator;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bill_material.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bill_material.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bill_material.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bill_material.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bill_material.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bill_material.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bill_material.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bill_material.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of bill_material.bill_status
     */
    public Byte getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for bill_material.bill_status
     */
    public void setBillStatus(Byte billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bill_material.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bill_material.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}