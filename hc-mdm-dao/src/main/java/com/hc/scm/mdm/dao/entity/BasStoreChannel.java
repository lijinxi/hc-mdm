package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 */
public class BasStoreChannel {
	
    /**
     * 自增主键
     */
    private Integer lineId;
	
    /**
     * 通道编号
     */
    private String channelNo;

    /**
     * 通道名称
     */
    private String channelName;

    /**
     * 仓库
     */
    private String storeNo;
    
    /**
     * 仓区
     */
    private String zoneNo;
    
    /**
     * 库区编号
     */
    private String roomNo;
    
    /**
     * 库区名称
     */
    private String roomName;

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
     * {@linkplain #lineId}
     *
     * @return the value of bas_store_channel.line_id
     */
    public Integer getLineId() {
        return lineId;
    }
    
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }
    
    /**
     * 
     * {@linkplain #channelNo}
     *
     * @return the value of bas_store_channel.channel_no
     */
    public String getChannelNo() {
        return channelNo;
    }

    /**
     * 
     * {@linkplain #channelNo}
     * @param channelNo the value for bas_store_channel.channel_no
     */
    public void setChannelNo(String channelNo) {
        this.channelNo = channelNo;
    }

    /**
     * 
     * {@linkplain #channelName}
     *
     * @return the value of bas_store_channel.channel_name
     */
    public String getChannelName() {
        return channelName;
    }

    /**
     * 
     * {@linkplain #channelName}
     * @param channelName the value for bas_store_channel.channel_name
     */
    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    /**
     * 
     * {@linkplain #channelName}
     *
     * @return the value of bas_store_channel.channel_name
     */
    public String getStoreNo() {
        return storeNo;
    }
    
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }
    
    /**
     * 
     * {@linkplain #channelName}
     *
     * @return the value of bas_store_channel.channel_name
     */
    public String getZoneNo() {
        return zoneNo;
    }
    
    public void setZoneNo(String zoneNo) {
        this.zoneNo = zoneNo;
    }
    
    
    /**
     * 
     * {@linkplain #roomNo}
     *
     * @return the value of bas_store_channel.room_no
     */
    public String getRoomNo() {
        return roomNo;
    }

    /**
     * 
     * {@linkplain #roomNo}
     * @param roomNo the value for bas_store_channel.room_no
     */
    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }
    
    /**
     * 
     * {@linkplain #roomName}
     *
     * @return the value of bas_store_room.roomName
     */
    public String getRoomName() {
        return roomName;
    }

    /**
     * 
     * {@linkplain #roomName}
     * @param roomName the value for bas_store_room.roomName
     */
    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_store_channel.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_store_channel.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_store_channel.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_store_channel.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_store_channel.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_store_channel.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_store_channel.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_store_channel.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_store_channel.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_store_channel.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_store_channel.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_store_channel.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_store_channel.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_store_channel.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}