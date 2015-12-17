package com.hc.scm.mdm.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
public class BasUnitSwitch {
    /**
     * 转换编号
     */
    private Integer switchId;

    /**
     * a单位编号
     */
    private String unitNoA;

    /**
     * b单位编号
     */
    private String unitNoB;

    /**
     * a单位数量
     */
    private BigDecimal qtyA;

    /**
     * b单位数量
     */
    private BigDecimal qtyB;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 启用状态(0=未生效 1=启用)
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
     * {@linkplain #switchId}
     *
     * @return the value of bas_unit_switch.switch_no
     */
    public Integer getSwitchId() {
        return switchId;
    }

    /**
     * 
     * {@linkplain #switchId}
     * @param switchId the value for bas_unit_switch.switch_no
     */
    public void setSwitchId(Integer switchId) {
        this.switchId = switchId;
    }

    /**
     * 
     * {@linkplain #unitNoA}
     *
     * @return the value of bas_unit_switch.unit_no_a
     */
    public String getUnitNoA() {
        return unitNoA;
    }

    /**
     * 
     * {@linkplain #unitNoA}
     * @param unitNoA the value for bas_unit_switch.unit_no_a
     */
    public void setUnitNoA(String unitNoA) {
        this.unitNoA = unitNoA;
    }

    /**
     * 
     * {@linkplain #unitNoB}
     *
     * @return the value of bas_unit_switch.unit_no_b
     */
    public String getUnitNoB() {
        return unitNoB;
    }

    /**
     * 
     * {@linkplain #unitNoB}
     * @param unitNoB the value for bas_unit_switch.unit_no_b
     */
    public void setUnitNoB(String unitNoB) {
        this.unitNoB = unitNoB;
    }

    /**
     * 
     * {@linkplain #qtyA}
     *
     * @return the value of bas_unit_switch.qty_a
     */
    public BigDecimal getQtyA() {
        return qtyA;
    }

    /**
     * 
     * {@linkplain #qtyA}
     * @param qtyA the value for bas_unit_switch.qty_a
     */
    public void setQtyA(BigDecimal qtyA) {
        this.qtyA = qtyA;
    }

    /**
     * 
     * {@linkplain #qtyB}
     *
     * @return the value of bas_unit_switch.qty_b
     */
    public BigDecimal getQtyB() {
        return qtyB;
    }

    /**
     * 
     * {@linkplain #qtyB}
     * @param qtyB the value for bas_unit_switch.qty_b
     */
    public void setQtyB(BigDecimal qtyB) {
        this.qtyB = qtyB;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_unit_switch.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_unit_switch.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_unit_switch.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_unit_switch.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_unit_switch.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_unit_switch.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_unit_switch.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_unit_switch.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_unit_switch.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_unit_switch.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_unit_switch.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_unit_switch.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_unit_switch.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_unit_switch.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}