package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:35
 * @version 1.0.0
 */
public class BasCity {
    /**
     * 行政市编号
     */
    private String cityNo;

    /**
     * 行政市名称
     */
    private String cityName;

    /**
     * 行政市详细名称
     */
    private String cityLname;

    /**
     * 行政市特征码(3位字母或数字,同省下不可以重复)
     */
    private String cityOpcode;

    /**
     * 所属行政省编号
     */
    private String provinceNo;

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
     * {@linkplain #cityNo}
     *
     * @return the value of bas_city.city_no
     */
    public String getCityNo() {
        return cityNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     * @param cityNo the value for bas_city.city_no
     */
    public void setCityNo(String cityNo) {
        this.cityNo = cityNo;
    }

    /**
     * 
     * {@linkplain #cityName}
     *
     * @return the value of bas_city.city_name
     */
    public String getCityName() {
        return cityName;
    }

    /**
     * 
     * {@linkplain #cityName}
     * @param cityName the value for bas_city.city_name
     */
    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    /**
     * 
     * {@linkplain #cityLname}
     *
     * @return the value of bas_city.city_lname
     */
    public String getCityLname() {
        return cityLname;
    }

    /**
     * 
     * {@linkplain #cityLname}
     * @param cityLname the value for bas_city.city_lname
     */
    public void setCityLname(String cityLname) {
        this.cityLname = cityLname;
    }

    /**
     * 
     * {@linkplain #cityOpcode}
     *
     * @return the value of bas_city.city_opcode
     */
    public String getCityOpcode() {
        return cityOpcode;
    }

    /**
     * 
     * {@linkplain #cityOpcode}
     * @param cityOpcode the value for bas_city.city_opcode
     */
    public void setCityOpcode(String cityOpcode) {
        this.cityOpcode = cityOpcode;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     *
     * @return the value of bas_city.province_no
     */
    public String getProvinceNo() {
        return provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     * @param provinceNo the value for bas_city.province_no
     */
    public void setProvinceNo(String provinceNo) {
        this.provinceNo = provinceNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_city.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_city.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_city.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_city.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_city.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_city.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_city.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_city.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_city.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_city.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_city.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_city.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_city.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_city.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}