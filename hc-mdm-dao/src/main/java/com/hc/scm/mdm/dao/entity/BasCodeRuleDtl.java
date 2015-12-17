package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 编码规则从表
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
public class BasCodeRuleDtl {
    /**
     * 编码规则明细ID
     */
    private Integer codeRuleId;

    /**
     * 编码规则编号
     */
    private String codeRuleNo;

    /**
     * 编码开始位置
     */
    private Integer codeBeginPosition;

    /**
     * 编码结束位置
     */
    private Integer codeEndPosition;

    /**
     * 字符长度(结束位置-开始位置+1)
     */
    private Integer charLength;

    /**
     * 编码类型(1=常量 2=取日期 3=取字段 4=流水号 5=手工录入)
     */
    private Integer codeType;

    /**
     * 常量值(当编码类型为1时可维护)
     */
    private String constValue;

    /**
     * 日期格式化值(当编码类型为2时可维护)
     */
    private String dateFormatValue;

    /**
     * 字段值(当编码类型为3时可维护，为字段的列名)
     */
    private String fieldValue;

    /**
     * 字段截取开始位置
     */
    private Integer cutBeginPosition;

    /**
     * 字段截取结束位置
     */
    private Integer cutEndPosition;

    /**
     * 当前流水日期(当编码类型为4时可维护)
     */
    private Date currentSerialDate;

    /**
     * 当前流水号(当编码类型为4时可维护)
     */
    private Integer currentSerialNo;

    /**
     * 重置方式(当编码类型为4时可维护 0=永不重置 1=按天重置 2=按月重置 3=按年重置)
     */
    private Integer resetMode;

    /**
     * 补位符
     */
    private String padChar;

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
     * {@linkplain #codeRuleId}
     *
     * @return the value of bas_code_rule_dtl.code_rule_id
     */
    public Integer getCodeRuleId() {
        return codeRuleId;
    }

    /**
     * 
     * {@linkplain #codeRuleId}
     * @param codeRuleId the value for bas_code_rule_dtl.code_rule_id
     */
    public void setCodeRuleId(Integer codeRuleId) {
        this.codeRuleId = codeRuleId;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     *
     * @return the value of bas_code_rule_dtl.code_rule_no
     */
    public String getCodeRuleNo() {
        return codeRuleNo;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     * @param codeRuleNo the value for bas_code_rule_dtl.code_rule_no
     */
    public void setCodeRuleNo(String codeRuleNo) {
        this.codeRuleNo = codeRuleNo;
    }

    /**
     * 
     * {@linkplain #codeBeginPosition}
     *
     * @return the value of bas_code_rule_dtl.code_begin_position
     */
    public Integer getCodeBeginPosition() {
        return codeBeginPosition;
    }

    /**
     * 
     * {@linkplain #codeBeginPosition}
     * @param codeBeginPosition the value for bas_code_rule_dtl.code_begin_position
     */
    public void setCodeBeginPosition(Integer codeBeginPosition) {
        this.codeBeginPosition = codeBeginPosition;
    }

    /**
     * 
     * {@linkplain #codeEndPosition}
     *
     * @return the value of bas_code_rule_dtl.code_end_position
     */
    public Integer getCodeEndPosition() {
        return codeEndPosition;
    }

    /**
     * 
     * {@linkplain #codeEndPosition}
     * @param codeEndPosition the value for bas_code_rule_dtl.code_end_position
     */
    public void setCodeEndPosition(Integer codeEndPosition) {
        this.codeEndPosition = codeEndPosition;
    }

    /**
     * 
     * {@linkplain #charLength}
     *
     * @return the value of bas_code_rule_dtl.char_length
     */
    public Integer getCharLength() {
        return charLength;
    }

    /**
     * 
     * {@linkplain #charLength}
     * @param charLength the value for bas_code_rule_dtl.char_length
     */
    public void setCharLength(Integer charLength) {
        this.charLength = charLength;
    }

    /**
     * 
     * {@linkplain #codeType}
     *
     * @return the value of bas_code_rule_dtl.code_type
     */
    public Integer getCodeType() {
        return codeType;
    }

    /**
     * 
     * {@linkplain #codeType}
     * @param codeType the value for bas_code_rule_dtl.code_type
     */
    public void setCodeType(Integer codeType) {
        this.codeType = codeType;
    }

    /**
     * 
     * {@linkplain #constValue}
     *
     * @return the value of bas_code_rule_dtl.const_value
     */
    public String getConstValue() {
        return constValue;
    }

    /**
     * 
     * {@linkplain #constValue}
     * @param constValue the value for bas_code_rule_dtl.const_value
     */
    public void setConstValue(String constValue) {
        this.constValue = constValue;
    }

    /**
     * 
     * {@linkplain #dateFormatValue}
     *
     * @return the value of bas_code_rule_dtl.date_format_value
     */
    public String getDateFormatValue() {
        return dateFormatValue;
    }

    /**
     * 
     * {@linkplain #dateFormatValue}
     * @param dateFormatValue the value for bas_code_rule_dtl.date_format_value
     */
    public void setDateFormatValue(String dateFormatValue) {
        this.dateFormatValue = dateFormatValue;
    }

    /**
     * 
     * {@linkplain #fieldValue}
     *
     * @return the value of bas_code_rule_dtl.field_value
     */
    public String getFieldValue() {
        return fieldValue;
    }

    /**
     * 
     * {@linkplain #fieldValue}
     * @param fieldValue the value for bas_code_rule_dtl.field_value
     */
    public void setFieldValue(String fieldValue) {
        this.fieldValue = fieldValue;
    }

    /**
     * 
     * {@linkplain #cutBeginPosition}
     *
     * @return the value of bas_code_rule_dtl.cut_begin_position
     */
    public Integer getCutBeginPosition() {
        return cutBeginPosition;
    }

    /**
     * 
     * {@linkplain #cutBeginPosition}
     * @param cutBeginPosition the value for bas_code_rule_dtl.cut_begin_position
     */
    public void setCutBeginPosition(Integer cutBeginPosition) {
        this.cutBeginPosition = cutBeginPosition;
    }

    /**
     * 
     * {@linkplain #cutEndPosition}
     *
     * @return the value of bas_code_rule_dtl.cut_end_position
     */
    public Integer getCutEndPosition() {
        return cutEndPosition;
    }

    /**
     * 
     * {@linkplain #cutEndPosition}
     * @param cutEndPosition the value for bas_code_rule_dtl.cut_end_position
     */
    public void setCutEndPosition(Integer cutEndPosition) {
        this.cutEndPosition = cutEndPosition;
    }

    /**
     * 
     * {@linkplain #currentSerialDate}
     *
     * @return the value of bas_code_rule_dtl.current_serial_date
     */
    public Date getCurrentSerialDate() {
        return currentSerialDate;
    }

    /**
     * 
     * {@linkplain #currentSerialDate}
     * @param currentSerialDate the value for bas_code_rule_dtl.current_serial_date
     */
    public void setCurrentSerialDate(Date currentSerialDate) {
        this.currentSerialDate = currentSerialDate;
    }

    /**
     * 
     * {@linkplain #currentSerialNo}
     *
     * @return the value of bas_code_rule_dtl.current_serial_no
     */
    public Integer getCurrentSerialNo() {
        return currentSerialNo;
    }

    /**
     * 
     * {@linkplain #currentSerialNo}
     * @param currentSerialNo the value for bas_code_rule_dtl.current_serial_no
     */
    public void setCurrentSerialNo(Integer currentSerialNo) {
        this.currentSerialNo = currentSerialNo;
    }

    /**
     * 
     * {@linkplain #resetMode}
     *
     * @return the value of bas_code_rule_dtl.reset_mode
     */
    public Integer getResetMode() {
        return resetMode;
    }

    /**
     * 
     * {@linkplain #resetMode}
     * @param resetMode the value for bas_code_rule_dtl.reset_mode
     */
    public void setResetMode(Integer resetMode) {
        this.resetMode = resetMode;
    }

    /**
     * 
     * {@linkplain #padChar}
     *
     * @return the value of bas_code_rule_dtl.pad_char
     */
    public String getPadChar() {
        return padChar;
    }

    /**
     * 
     * {@linkplain #padChar}
     * @param padChar the value for bas_code_rule_dtl.pad_char
     */
    public void setPadChar(String padChar) {
        this.padChar = padChar;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_code_rule_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_code_rule_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_code_rule_dtl.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_code_rule_dtl.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_code_rule_dtl.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_code_rule_dtl.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_code_rule_dtl.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_code_rule_dtl.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_code_rule_dtl.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_code_rule_dtl.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_code_rule_dtl.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_code_rule_dtl.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_code_rule_dtl.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_code_rule_dtl.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}