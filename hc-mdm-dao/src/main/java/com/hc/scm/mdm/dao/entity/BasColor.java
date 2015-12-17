package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
public class BasColor {
    /**
     * 颜色编号(对应 color_no )
     */
    private String colorNo;

    /**
     * 颜色id(对应 color_id )
     */
    private Integer colorId;

    /**
     * 颜色编码(对应 color_code )
     */
    private String colorCode;

    /**
     * 颜色名称(对应 color_name )
     */
    private String colorName;

    /**
     * 色系编码(对应 color_series_no )
     */
    private String colorSeriesCode;

    /**
     * 色系名称(对应 color_series_name )
     */
    private String colorSeriesName;

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
     * {@linkplain #colorNo}
     *
     * @return the value of bas_color.color_no
     */
    public String getColorNo() {
        return colorNo;
    }

    /**
     * 
     * {@linkplain #colorNo}
     * @param colorNo the value for bas_color.color_no
     */
    public void setColorNo(String colorNo) {
        this.colorNo = colorNo;
    }

    /**
     * 
     * {@linkplain #colorId}
     *
     * @return the value of bas_color.color_id
     */
    public Integer getColorId() {
        return colorId;
    }

    /**
     * 
     * {@linkplain #colorId}
     * @param colorId the value for bas_color.color_id
     */
    public void setColorId(Integer colorId) {
        this.colorId = colorId;
    }

    /**
     * 
     * {@linkplain #colorCode}
     *
     * @return the value of bas_color.color_code
     */
    public String getColorCode() {
        return colorCode;
    }

    /**
     * 
     * {@linkplain #colorCode}
     * @param colorCode the value for bas_color.color_code
     */
    public void setColorCode(String colorCode) {
        this.colorCode = colorCode;
    }

    /**
     * 
     * {@linkplain #colorName}
     *
     * @return the value of bas_color.color_name
     */
    public String getColorName() {
        return colorName;
    }

    /**
     * 
     * {@linkplain #colorName}
     * @param colorName the value for bas_color.color_name
     */
    public void setColorName(String colorName) {
        this.colorName = colorName;
    }

    /**
     * 
     * {@linkplain #colorSeriesCode}
     *
     * @return the value of bas_color.color_series_code
     */
    public String getColorSeriesCode() {
        return colorSeriesCode;
    }

    /**
     * 
     * {@linkplain #colorSeriesCode}
     * @param colorSeriesCode the value for bas_color.color_series_code
     */
    public void setColorSeriesCode(String colorSeriesCode) {
        this.colorSeriesCode = colorSeriesCode;
    }

    /**
     * 
     * {@linkplain #colorSeriesName}
     *
     * @return the value of bas_color.color_series_name
     */
    public String getColorSeriesName() {
        return colorSeriesName;
    }

    /**
     * 
     * {@linkplain #colorSeriesName}
     * @param colorSeriesName the value for bas_color.color_series_name
     */
    public void setColorSeriesName(String colorSeriesName) {
        this.colorSeriesName = colorSeriesName;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_color.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_color.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_color.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_color.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_color.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_color.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_color.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_color.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_color.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_color.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_color.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_color.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_color.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_color.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}