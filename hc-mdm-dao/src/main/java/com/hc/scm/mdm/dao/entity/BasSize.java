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
public class BasSize {
    /**
     * 尺码编号(对应 size_no )
     */
    private String sizeNo;

    /**
     * 尺码id(对应 size_id )
     */
    private Integer sizeId;

    /**
     * 尺码编码(对应 size_code )
     */
    private String sizeCode;

    /**
     * 尺码名称(对应 size_name )
     */
    private String sizeName;

    /**
     * 尺码类别编号(对应 size_type_no )
     */
    private String sizeTypeNo;

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
     * {@linkplain #sizeNo}
     *
     * @return the value of bas_size.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bas_size.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeId}
     *
     * @return the value of bas_size.size_id
     */
    public Integer getSizeId() {
        return sizeId;
    }

    /**
     * 
     * {@linkplain #sizeId}
     * @param sizeId the value for bas_size.size_id
     */
    public void setSizeId(Integer sizeId) {
        this.sizeId = sizeId;
    }

    /**
     * 
     * {@linkplain #sizeCode}
     *
     * @return the value of bas_size.size_code
     */
    public String getSizeCode() {
        return sizeCode;
    }

    /**
     * 
     * {@linkplain #sizeCode}
     * @param sizeCode the value for bas_size.size_code
     */
    public void setSizeCode(String sizeCode) {
        this.sizeCode = sizeCode;
    }

    /**
     * 
     * {@linkplain #sizeName}
     *
     * @return the value of bas_size.size_name
     */
    public String getSizeName() {
        return sizeName;
    }

    /**
     * 
     * {@linkplain #sizeName}
     * @param sizeName the value for bas_size.size_name
     */
    public void setSizeName(String sizeName) {
        this.sizeName = sizeName;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bas_size.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bas_size.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_size.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_size.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_size.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_size.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_size.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_size.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_size.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_size.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_size.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_size.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_size.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_size.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_size.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_size.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}