package com.hc.scm.mdm.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
public class BasDeliveryPoint {
    /**
     * 送货地点编号(对应 storage_no )
     */
    private String pointNo;

    /**
     * 送货地点ID(对应 storage_id )
     */
    private Integer pointId;

    /**
     * 送货地点编码(对应 storage_code )
     */
    private String pointCode;

    /**
     * 送货地点名称(对应 storage_name )
     */
    private String pointName;

    /**
     * 行政省编号(对应 province_no )
     */
    private String provinceNo;

    /**
     * 行政市编号(对应 city_no )
     */
    private String cityNo;

    /**
     * 行政县编号(对应 county_no )
     */
    private String countyNo;

    /**
     * 地区编码(对应 region_no )
     */
    private String regionNo;

    /**
     * 经营城市编号(对应 business_city_no )
     */
    private String businessCityNo;

    /**
     * 仓库类型(对应 storage_type )
     */
    private String storageType;

    /**
     * 仓库级别(对应 storage_level )
     */
    private String storageLevel;

    /**
     * 总面积(对应 area_total )
     */
    private BigDecimal areaTotal;

    /**
     * 联系人(对应 contact )
     */
    private String contacter;

    /**
     * 电话(对应 telno )
     */
    private String phoneNo;

    /**
     * 手机(对应 mobile_phone )
     */
    private String mobileNo;

    /**
     * 联系地址(对应 address )
     */
    private String contactAddress;

    /**
     * 排列序号(对应 order_no )
     */
    private Integer orderNo;

    /**
     * 状态(对应 status 0=未生效 1=启用 2=作废 )
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
     * 修改人(对应 editor )
     */
    private String modifier;

    /**
     * 修改时间(对应 edittm )
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注(对应 remarks )
     */
    private String remarks;

    /**
     * 
     * {@linkplain #pointNo}
     *
     * @return the value of bas_delivery_point.point_no
     */
    public String getPointNo() {
        return pointNo;
    }

    /**
     * 
     * {@linkplain #pointNo}
     * @param pointNo the value for bas_delivery_point.point_no
     */
    public void setPointNo(String pointNo) {
        this.pointNo = pointNo;
    }

    /**
     * 
     * {@linkplain #pointId}
     *
     * @return the value of bas_delivery_point.point_id
     */
    public Integer getPointId() {
        return pointId;
    }

    /**
     * 
     * {@linkplain #pointId}
     * @param pointId the value for bas_delivery_point.point_id
     */
    public void setPointId(Integer pointId) {
        this.pointId = pointId;
    }

    /**
     * 
     * {@linkplain #pointCode}
     *
     * @return the value of bas_delivery_point.point_code
     */
    public String getPointCode() {
        return pointCode;
    }

    /**
     * 
     * {@linkplain #pointCode}
     * @param pointCode the value for bas_delivery_point.point_code
     */
    public void setPointCode(String pointCode) {
        this.pointCode = pointCode;
    }

    /**
     * 
     * {@linkplain #pointName}
     *
     * @return the value of bas_delivery_point.point_name
     */
    public String getPointName() {
        return pointName;
    }

    /**
     * 
     * {@linkplain #pointName}
     * @param pointName the value for bas_delivery_point.point_name
     */
    public void setPointName(String pointName) {
        this.pointName = pointName;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     *
     * @return the value of bas_delivery_point.province_no
     */
    public String getProvinceNo() {
        return provinceNo;
    }

    /**
     * 
     * {@linkplain #provinceNo}
     * @param provinceNo the value for bas_delivery_point.province_no
     */
    public void setProvinceNo(String provinceNo) {
        this.provinceNo = provinceNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     *
     * @return the value of bas_delivery_point.city_no
     */
    public String getCityNo() {
        return cityNo;
    }

    /**
     * 
     * {@linkplain #cityNo}
     * @param cityNo the value for bas_delivery_point.city_no
     */
    public void setCityNo(String cityNo) {
        this.cityNo = cityNo;
    }

    /**
     * 
     * {@linkplain #countyNo}
     *
     * @return the value of bas_delivery_point.county_no
     */
    public String getCountyNo() {
        return countyNo;
    }

    /**
     * 
     * {@linkplain #countyNo}
     * @param countyNo the value for bas_delivery_point.county_no
     */
    public void setCountyNo(String countyNo) {
        this.countyNo = countyNo;
    }

    /**
     * 
     * {@linkplain #regionNo}
     *
     * @return the value of bas_delivery_point.region_no
     */
    public String getRegionNo() {
        return regionNo;
    }

    /**
     * 
     * {@linkplain #regionNo}
     * @param regionNo the value for bas_delivery_point.region_no
     */
    public void setRegionNo(String regionNo) {
        this.regionNo = regionNo;
    }

    /**
     * 
     * {@linkplain #businessCityNo}
     *
     * @return the value of bas_delivery_point.business_city_no
     */
    public String getBusinessCityNo() {
        return businessCityNo;
    }

    /**
     * 
     * {@linkplain #businessCityNo}
     * @param businessCityNo the value for bas_delivery_point.business_city_no
     */
    public void setBusinessCityNo(String businessCityNo) {
        this.businessCityNo = businessCityNo;
    }

    /**
     * 
     * {@linkplain #storageType}
     *
     * @return the value of bas_delivery_point.storage_type
     */
    public String getStorageType() {
        return storageType;
    }

    /**
     * 
     * {@linkplain #storageType}
     * @param storageType the value for bas_delivery_point.storage_type
     */
    public void setStorageType(String storageType) {
        this.storageType = storageType;
    }

    /**
     * 
     * {@linkplain #storageLevel}
     *
     * @return the value of bas_delivery_point.storage_level
     */
    public String getStorageLevel() {
        return storageLevel;
    }

    /**
     * 
     * {@linkplain #storageLevel}
     * @param storageLevel the value for bas_delivery_point.storage_level
     */
    public void setStorageLevel(String storageLevel) {
        this.storageLevel = storageLevel;
    }

    /**
     * 
     * {@linkplain #areaTotal}
     *
     * @return the value of bas_delivery_point.area_total
     */
    public BigDecimal getAreaTotal() {
        return areaTotal;
    }

    /**
     * 
     * {@linkplain #areaTotal}
     * @param areaTotal the value for bas_delivery_point.area_total
     */
    public void setAreaTotal(BigDecimal areaTotal) {
        this.areaTotal = areaTotal;
    }

    /**
     * 
     * {@linkplain #contacter}
     *
     * @return the value of bas_delivery_point.contacter
     */
    public String getContacter() {
        return contacter;
    }

    /**
     * 
     * {@linkplain #contacter}
     * @param contacter the value for bas_delivery_point.contacter
     */
    public void setContacter(String contacter) {
        this.contacter = contacter;
    }

    /**
     * 
     * {@linkplain #phoneNo}
     *
     * @return the value of bas_delivery_point.phone_no
     */
    public String getPhoneNo() {
        return phoneNo;
    }

    /**
     * 
     * {@linkplain #phoneNo}
     * @param phoneNo the value for bas_delivery_point.phone_no
     */
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of bas_delivery_point.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for bas_delivery_point.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     *
     * @return the value of bas_delivery_point.contact_address
     */
    public String getContactAddress() {
        return contactAddress;
    }

    /**
     * 
     * {@linkplain #contactAddress}
     * @param contactAddress the value for bas_delivery_point.contact_address
     */
    public void setContactAddress(String contactAddress) {
        this.contactAddress = contactAddress;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_delivery_point.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_delivery_point.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_delivery_point.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_delivery_point.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_delivery_point.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_delivery_point.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_delivery_point.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_delivery_point.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_delivery_point.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_delivery_point.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_delivery_point.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_delivery_point.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_delivery_point.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_delivery_point.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}