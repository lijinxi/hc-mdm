package com.hc.scm.mdm.dao.entity;

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
public class BasSizeType {
    /**
     * 尺码类别编号(对应 size_type_no )
     */
    private String sizeTypeNo;

    /**
     * 尺码类别id(对应 size_type_id )
     */
    private Integer sizeTypeId;

    /**
     * 尺码类别编码(对应 size_type_code )
     */
    private String sizeTypeCode;

    /**
     * 尺码类别名称(对应 size_type_name )
     */
    private String sizeTypeName;

    /**
     * 排列序号(对应 order_no )
     */
    private Integer orderNo;

    /**
     * 启用状态(对应 status 0=未生效 1=启用 )
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
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bas_size_type.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bas_size_type.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeId}
     *
     * @return the value of bas_size_type.size_type_id
     */
    public Integer getSizeTypeId() {
        return sizeTypeId;
    }

    /**
     * 
     * {@linkplain #sizeTypeId}
     * @param sizeTypeId the value for bas_size_type.size_type_id
     */
    public void setSizeTypeId(Integer sizeTypeId) {
        this.sizeTypeId = sizeTypeId;
    }

    /**
     * 
     * {@linkplain #sizeTypeCode}
     *
     * @return the value of bas_size_type.size_type_code
     */
    public String getSizeTypeCode() {
        return sizeTypeCode;
    }

    /**
     * 
     * {@linkplain #sizeTypeCode}
     * @param sizeTypeCode the value for bas_size_type.size_type_code
     */
    public void setSizeTypeCode(String sizeTypeCode) {
        this.sizeTypeCode = sizeTypeCode;
    }

    /**
     * 
     * {@linkplain #sizeTypeName}
     *
     * @return the value of bas_size_type.size_type_name
     */
    public String getSizeTypeName() {
        return sizeTypeName;
    }

    /**
     * 
     * {@linkplain #sizeTypeName}
     * @param sizeTypeName the value for bas_size_type.size_type_name
     */
    public void setSizeTypeName(String sizeTypeName) {
        this.sizeTypeName = sizeTypeName;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_size_type.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_size_type.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_size_type.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_size_type.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_size_type.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_size_type.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_size_type.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_size_type.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_size_type.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_size_type.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_size_type.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_size_type.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_size_type.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_size_type.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}