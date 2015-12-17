package com.hc.scm.mdm.dao.entity;

import java.util.Date;

/**
 * Description: 库位维护实体
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 09:23:55
 * @version 1.0.0
 */
public class BasPlace {
    /**
     * 库位编号
     */
    private String placeNo;

    /**
     * 库位名称
     */
    private String placeName;

    /**
     * 仓库编号
     */
    private String storeNo;

    /**
     * 库区编号
     */
    private String zoneNo;

    /**
     * 库位类型(数据字典 place_type )
     */
    private String placeType;

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
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #placeNo}
     *
     * @return the value of bas_place.place_no
     */
    public String getPlaceNo() {
        return placeNo;
    }

    /**
     * 
     * {@linkplain #placeNo}
     * @param placeNo the value for bas_place.place_no
     */
    public void setPlaceNo(String placeNo) {
        this.placeNo = placeNo;
    }

    /**
     * 
     * {@linkplain #placeName}
     *
     * @return the value of bas_place.place_name
     */
    public String getPlaceName() {
        return placeName;
    }

    /**
     * 
     * {@linkplain #placeName}
     * @param placeName the value for bas_place.place_name
     */
    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bas_place.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bas_place.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #zoneNo}
     *
     * @return the value of bas_place.zone_no
     */
    public String getZoneNo() {
        return zoneNo;
    }

    /**
     * 
     * {@linkplain #zoneNo}
     * @param zoneNo the value for bas_place.zone_no
     */
    public void setZoneNo(String zoneNo) {
        this.zoneNo = zoneNo;
    }

    /**
     * 
     * {@linkplain #placeType}
     *
     * @return the value of bas_place.place_type
     */
    public String getPlaceType() {
        return placeType;
    }

    /**
     * 
     * {@linkplain #placeType}
     * @param placeType the value for bas_place.place_type
     */
    public void setPlaceType(String placeType) {
        this.placeType = placeType;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_place.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_place.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_place.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_place.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_place.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_place.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_place.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_place.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_place.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_place.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_place.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_place.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_place.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_place.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}