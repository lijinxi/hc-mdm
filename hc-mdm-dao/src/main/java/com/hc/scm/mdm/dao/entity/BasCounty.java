package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:42
 * @version 1.0.0
 */
public class BasCounty {
    /**
     * 行政县编号
     */
    private String countyNo;

    /**
     * 行政县名称
     */
    private String countyName;

    /**
     * 行政县详细名称
     */
    private String countyLname;

    /**
     * 行政县特征码(2位字母或数字,同城市下不可以重复)
     */
    private String countyOpcode;

    /**
     * 所属行政市编号
     */
    private String cityNo;

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
     * {@linkplain #countyNo}
     *
     * @return the value of bas_county.county_no
     */
    public String getCountyNo() {
        return countyNo;
    }

    /**
     * 
     * {@linkplain #countyNo}
     * @param countyNo the value for bas_county.county_no
     */
    public void setCountyNo(String countyNo) {
        this.countyNo = countyNo;
    }

    /**
     * 
     * {@linkplain #countyName}
     *
     * @return the value of bas_county.county_name
     */
    public String getCountyName() {
        return countyName;
    }

    /**
     * 
     * {@linkplain #countyName}
     * @param countyName the value for bas_county.county_name
     */
    public void setCountyName(String countyName) {
        this.countyName = countyName;
    }

    /**
     * 
     * {@linkplain #countyLname}
     *
     * @return the value of bas_county.county_lname
     */
    public String getCountyLname() {
        return countyLname;
    }

    /**
     * 
     * {@linkplain #countyLname}
     * @param countyLname the value for bas_county.county_lname
     */
    public void setCountyLname(String countyLname) {
        this.countyLname = countyLname;
    }

    /**
     * 
     * {@linkplain #countyOpcode}
     *
     * @return the value of bas_county.county_opcode
     */
    public String getCountyOpcode() {
        return countyOpcode;
    }

    /**
     * 
     * {@linkplain #countyOpcode}
     * @param countyOpcode the value for bas_county.county_opcode
     */
    public void setCountyOpcode(String countyOpcode) {
        this.countyOpcode = countyOpcode;
    }

    /**
     * 
     * {@linkplain #cityNo}
     *
     * @return the value of bas_county.city_no
     */
    public String getCityNo() {
        return cityNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     * @param cityNo the value for bas_county.city_no
     */
    public void setCityNo(String cityNo) {
        this.cityNo = cityNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_county.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_county.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_county.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_county.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_county.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_county.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_county.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_county.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_county.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_county.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_county.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_county.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_county.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_county.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}