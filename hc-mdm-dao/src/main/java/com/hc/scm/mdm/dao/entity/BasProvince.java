package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 省份维护实体
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:46:24
 * @version 1.0.0
 */
public class BasProvince {
    /**
     * 行政省编号
     */
    private String provinceNo;

    /**
     * 行政省名称
     */
    private String provinceName;

    /**
     * 行政省详细名称
     */
    private String provinceLname;

    /**
     * 行政省特征码(2位字母或数字,可以重复)
     */
    private String provinceOpcode;

    /**
     * 国家编号
     */
    private String countryNo;

    /**
     * 是否直辖市(0=否 1=是)
     */
    private Integer directControlled;

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
     * {@linkplain #provinceNo}
     *
     * @return the value of bas_province.province_no
     */
    public String getProvinceNo() {
        return provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     * @param provinceNo the value for bas_province.province_no
     */
    public void setProvinceNo(String provinceNo) {
        this.provinceNo = provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceName}
     *
     * @return the value of bas_province.province_name
     */
    public String getProvinceName() {
        return provinceName;
    }

    /**
     * 
     * {@linkplain #provinceName}
     * @param provinceName the value for bas_province.province_name
     */
    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    /**
     * 
     * {@linkplain #provinceLname}
     *
     * @return the value of bas_province.province_lname
     */
    public String getProvinceLname() {
        return provinceLname;
    }

    /**
     * 
     * {@linkplain #provinceLname}
     * @param provinceLname the value for bas_province.province_lname
     */
    public void setProvinceLname(String provinceLname) {
        this.provinceLname = provinceLname;
    }

    /**
     * 
     * {@linkplain #provinceOpcode}
     *
     * @return the value of bas_province.province_opcode
     */
    public String getProvinceOpcode() {
        return provinceOpcode;
    }

    /**
     * 
     * {@linkplain #provinceOpcode}
     * @param provinceOpcode the value for bas_province.province_opcode
     */
    public void setProvinceOpcode(String provinceOpcode) {
        this.provinceOpcode = provinceOpcode;
    }

    /**
     * 
     * {@linkplain #countryNo}
     *
     * @return the value of bas_province.country_no
     */
    public String getCountryNo() {
        return countryNo;
    }

    /**
     * 
     * {@linkplain #countryNo}
     * @param countryNo the value for bas_province.country_no
     */
    public void setCountryNo(String countryNo) {
        this.countryNo = countryNo;
    }

    /**
     * 
     * {@linkplain #directControlled}
     *
     * @return the value of bas_province.direct_controlled
     */
    public Integer getDirectControlled() {
        return directControlled;
    }

    /**
     * 
     * {@linkplain #directControlled}
     * @param directControlled the value for bas_province.direct_controlled
     */
    public void setDirectControlled(Integer directControlled) {
        this.directControlled = directControlled;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_province.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_province.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_province.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_province.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_province.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_province.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_province.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_province.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_province.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_province.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_province.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_province.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_province.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_province.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}