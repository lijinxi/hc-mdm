package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */
public class BasStoreRoom {
	
	 /**
     * 主键
     */
    private Integer lineId;
	
    /**
     * 库区编号
     */
    private String roomNo;

    /**
     * 库区名称
     */
    private String roomName;

    /**
     * 仓区编号
     */
    private String zoneNo;
    
    /**
     * 仓库名称
     */
    private String storeNo;

    /**
     * 库区类型(数据字典 room_type )
     */
    private String roomType;

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
     * {@linkplain #roomNo}
     *
     * @return the value of bas_store_room.room_no
     */
    public Integer getLineId() {
        return lineId;
    }
    
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }
    
    /**
     * 
     * {@linkplain #roomNo}
     *
     * @return the value of bas_store_room.room_no
     */
    public String getRoomNo() {
        return roomNo;
    }

    /**
     * 
     * {@linkplain #roomNo}
     * @param roomNo the value for bas_store_room.room_no
     */
    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    /**
     * 
     * {@linkplain #roomName}
     *
     * @return the value of bas_store_room.room_name
     */
    public String getRoomName() {
        return roomName;
    }

    /**
     * 
     * {@linkplain #roomName}
     * @param roomName the value for bas_store_room.room_name
     */
    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    /**
     * 
     * {@linkplain #zoneNo}
     *
     * @return the value of bas_store_room.zone_no
     */
    public String getZoneNo() {
        return zoneNo;
    }

    /**
     * 
     * {@linkplain #zoneNo}
     * @param zoneNo the value for bas_store_room.zone_no
     */
    public void setZoneNo(String zoneNo) {
        this.zoneNo = zoneNo;
    }
    
    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bas_store_room.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param zoneName the value for bas_store_room.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #roomType}
     *
     * @return the value of bas_store_room.room_type
     */
    public String getRoomType() {
        return roomType;
    }

    /**
     * 
     * {@linkplain #roomType}
     * @param roomType the value for bas_store_room.room_type
     */
    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_store_room.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_store_room.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_store_room.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_store_room.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_store_room.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_store_room.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_store_room.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_store_room.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_store_room.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_store_room.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_store_room.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_store_room.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_store_room.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_store_room.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}