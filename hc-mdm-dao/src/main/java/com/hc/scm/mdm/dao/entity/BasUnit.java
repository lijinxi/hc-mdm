package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 计量单位维护实体
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:15:25
 * @version 1.0.0
 */
public class BasUnit {
    /**
     * 单位编号
     */
    private String unitNo;

    /**
     * 单位名称
     */
    private String unitName;

    /**
     * 规格
     */
    private String specification;

    /**
     * 小数位数
     */
    private Integer decimalDigits;

    /**
     * 物料单位标志(0=否 1=是)
     */
    private Integer flagMaterial;

    /**
     * 采购单位标志(0=否 1=是)
     */
    private Integer flagPurchase;

    /**
     * BOM单位标志(0=否 1=是)
     */
    private Integer flagBom;

    /**
     * 发运单位标志(0=否 1=是)
     */
    private Integer flagDeliver;

    /**
     * 质检单位标志(0=否 1=是)
     */
    private Integer flagQuality;

    /**
     * 启用状态(0=未生效 1=启用)
     */
    private Integer enableFlag;

    /**
     * 排列序号
     */
    private Integer orderNo;

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
     * {@linkplain #unitNo}
     *
     * @return the value of bas_unit.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for bas_unit.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #unitName}
     *
     * @return the value of bas_unit.unit_name
     */
    public String getUnitName() {
        return unitName;
    }

    /**
     * 
     * {@linkplain #unitName}
     * @param unitName the value for bas_unit.unit_name
     */
    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    /**
     * 
     * {@linkplain #specification}
     *
     * @return the value of bas_unit.specification
     */
    public String getSpecification() {
        return specification;
    }

    /**
     * 
     * {@linkplain #specification}
     * @param specification the value for bas_unit.specification
     */
    public void setSpecification(String specification) {
        this.specification = specification;
    }

    /**
     * 
     * {@linkplain #decimalDigits}
     *
     * @return the value of bas_unit.decimal_digits
     */
    public Integer getDecimalDigits() {
        return decimalDigits;
    }

    /**
     * 
     * {@linkplain #decimalDigits}
     * @param decimalDigits the value for bas_unit.decimal_digits
     */
    public void setDecimalDigits(Integer decimalDigits) {
        this.decimalDigits = decimalDigits;
    }

    /**
     * 
     * {@linkplain #flagMaterial}
     *
     * @return the value of bas_unit.flag_material
     */
    public Integer getFlagMaterial() {
        return flagMaterial;
    }

    /**
     * 
     * {@linkplain #flagMaterial}
     * @param flagMaterial the value for bas_unit.flag_material
     */
    public void setFlagMaterial(Integer flagMaterial) {
        this.flagMaterial = flagMaterial;
    }

    /**
     * 
     * {@linkplain #flagPurchase}
     *
     * @return the value of bas_unit.flag_purchase
     */
    public Integer getFlagPurchase() {
        return flagPurchase;
    }

    /**
     * 
     * {@linkplain #flagPurchase}
     * @param flagPurchase the value for bas_unit.flag_purchase
     */
    public void setFlagPurchase(Integer flagPurchase) {
        this.flagPurchase = flagPurchase;
    }

    /**
     * 
     * {@linkplain #flagBom}
     *
     * @return the value of bas_unit.flag_bom
     */
    public Integer getFlagBom() {
        return flagBom;
    }

    /**
     * 
     * {@linkplain #flagBom}
     * @param flagBom the value for bas_unit.flag_bom
     */
    public void setFlagBom(Integer flagBom) {
        this.flagBom = flagBom;
    }

    /**
     * 
     * {@linkplain #flagDeliver}
     *
     * @return the value of bas_unit.flag_deliver
     */
    public Integer getFlagDeliver() {
        return flagDeliver;
    }

    /**
     * 
     * {@linkplain #flagDeliver}
     * @param flagDeliver the value for bas_unit.flag_deliver
     */
    public void setFlagDeliver(Integer flagDeliver) {
        this.flagDeliver = flagDeliver;
    }

    /**
     * 
     * {@linkplain #flagQuality}
     *
     * @return the value of bas_unit.flag_quality
     */
    public Integer getFlagQuality() {
        return flagQuality;
    }

    /**
     * 
     * {@linkplain #flagQuality}
     * @param flagQuality the value for bas_unit.flag_quality
     */
    public void setFlagQuality(Integer flagQuality) {
        this.flagQuality = flagQuality;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_unit.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_unit.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_unit.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_unit.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_unit.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_unit.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_unit.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_unit.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_unit.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_unit.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_unit.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_unit.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_unit.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_unit.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}