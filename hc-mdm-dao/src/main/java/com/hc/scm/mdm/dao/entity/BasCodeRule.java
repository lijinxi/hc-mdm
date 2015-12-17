package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 编码规则主表
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
public class BasCodeRule {
    /**
     * 编码规则编号
     */
    private String codeRuleNo;

    /**
     * 编码规则名称
     */
    private String codeRuleName;

    /**
     * 规则类型(1=单据规则 2=物料规则)
     */
    private Integer codeRuleType;

    /**
     * 允许手工编辑(0=不允许 1=允许)
     */
    private Integer allowManualEdit;

    /**
     * 保持连续编号(0=否 1=是)
     */
    private Integer keepContinuous;

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
     * {@linkplain #codeRuleNo}
     *
     * @return the value of bas_code_rule.code_rule_no
     */
    public String getCodeRuleNo() {
        return codeRuleNo;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     * @param codeRuleNo the value for bas_code_rule.code_rule_no
     */
    public void setCodeRuleNo(String codeRuleNo) {
        this.codeRuleNo = codeRuleNo;
    }

    /**
     * 
     * {@linkplain #codeRuleName}
     *
     * @return the value of bas_code_rule.code_rule_name
     */
    public String getCodeRuleName() {
        return codeRuleName;
    }

    /**
     * 
     * {@linkplain #codeRuleName}
     * @param codeRuleName the value for bas_code_rule.code_rule_name
     */
    public void setCodeRuleName(String codeRuleName) {
        this.codeRuleName = codeRuleName;
    }

    /**
     * 
     * {@linkplain #codeRuleType}
     *
     * @return the value of bas_code_rule.code_rule_type
     */
    public Integer getCodeRuleType() {
        return codeRuleType;
    }

    /**
     * 
     * {@linkplain #codeRuleType}
     * @param codeRuleType the value for bas_code_rule.code_rule_type
     */
    public void setCodeRuleType(Integer codeRuleType) {
        this.codeRuleType = codeRuleType;
    }

    /**
     * 
     * {@linkplain #allowManualEdit}
     *
     * @return the value of bas_code_rule.allow_manual_edit
     */
    public Integer getAllowManualEdit() {
        return allowManualEdit;
    }

    /**
     * 
     * {@linkplain #allowManualEdit}
     * @param allowManualEdit the value for bas_code_rule.allow_manual_edit
     */
    public void setAllowManualEdit(Integer allowManualEdit) {
        this.allowManualEdit = allowManualEdit;
    }

    /**
     * 
     * {@linkplain #keepContinuous}
     *
     * @return the value of bas_code_rule.keep_continuous
     */
    public Integer getKeepContinuous() {
        return keepContinuous;
    }

    /**
     * 
     * {@linkplain #keepContinuous}
     * @param keepContinuous the value for bas_code_rule.keep_continuous
     */
    public void setKeepContinuous(Integer keepContinuous) {
        this.keepContinuous = keepContinuous;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_code_rule.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_code_rule.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_code_rule.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_code_rule.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_code_rule.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_code_rule.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_code_rule.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_code_rule.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_code_rule.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_code_rule.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_code_rule.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_code_rule.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_code_rule.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_code_rule.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}