package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
public class BasBrand {
    /**
     * 品牌编号(对应 brand_detail_no )
     */
    private String brandNo;

    /**
     * 品牌id(对应 brand_detail_id )
     */
    private Integer brandId;

    /**
     * 品牌编码(对应 brand_detail_code )
     */
    private String brandCode;

    /**
     * 品牌英文名(对应 brand_detail_ename )
     */
    private String brandEname;

    /**
     * 品牌中文名(对应 brand_detail_cname )
     */
    private String brandCname;

    /**
     * 品牌类别(对应 brand_category_no )
     */
    private String brandCategory;

    /**
     * 品牌部编号(对应 brand_no )
     */
    private String brandUpperNo;

    /**
     * 特征码(对应 special_code )
     */
    private String specialCode;

    /**
     * 本部编码(对应 affiliation 鞋类、体育、童鞋、龙浩 )
     */
    private String affiliation;

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
     * {@linkplain #brandNo}
     *
     * @return the value of bas_brand.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bas_brand.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #brandId}
     *
     * @return the value of bas_brand.brand_id
     */
    public Integer getBrandId() {
        return brandId;
    }

    /**
     * 
     * {@linkplain #brandId}
     * @param brandId the value for bas_brand.brand_id
     */
    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    /**
     * 
     * {@linkplain #brandCode}
     *
     * @return the value of bas_brand.brand_code
     */
    public String getBrandCode() {
        return brandCode;
    }

    /**
     * 
     * {@linkplain #brandCode}
     * @param brandCode the value for bas_brand.brand_code
     */
    public void setBrandCode(String brandCode) {
        this.brandCode = brandCode;
    }

    /**
     * 
     * {@linkplain #brandEname}
     *
     * @return the value of bas_brand.brand_ename
     */
    public String getBrandEname() {
        return brandEname;
    }

    /**
     * 
     * {@linkplain #brandEname}
     * @param brandEname the value for bas_brand.brand_ename
     */
    public void setBrandEname(String brandEname) {
        this.brandEname = brandEname;
    }

    /**
     * 
     * {@linkplain #brandCname}
     *
     * @return the value of bas_brand.brand_cname
     */
    public String getBrandCname() {
        return brandCname;
    }

    /**
     * 
     * {@linkplain #brandCname}
     * @param brandCname the value for bas_brand.brand_cname
     */
    public void setBrandCname(String brandCname) {
        this.brandCname = brandCname;
    }

    /**
     * 
     * {@linkplain #brandCategory}
     *
     * @return the value of bas_brand.brand_category
     */
    public String getBrandCategory() {
        return brandCategory;
    }

    /**
     * 
     * {@linkplain #brandCategory}
     * @param brandCategory the value for bas_brand.brand_category
     */
    public void setBrandCategory(String brandCategory) {
        this.brandCategory = brandCategory;
    }

    /**
     * 
     * {@linkplain #brandUpperNo}
     *
     * @return the value of bas_brand.brand_upper_no
     */
    public String getBrandUpperNo() {
        return brandUpperNo;
    }

    /**
     * 
     * {@linkplain #brandUpperNo}
     * @param brandUpperNo the value for bas_brand.brand_upper_no
     */
    public void setBrandUpperNo(String brandUpperNo) {
        this.brandUpperNo = brandUpperNo;
    }

    /**
     * 
     * {@linkplain #specialCode}
     *
     * @return the value of bas_brand.special_code
     */
    public String getSpecialCode() {
        return specialCode;
    }

    /**
     * 
     * {@linkplain #specialCode}
     * @param specialCode the value for bas_brand.special_code
     */
    public void setSpecialCode(String specialCode) {
        this.specialCode = specialCode;
    }

    /**
     * 
     * {@linkplain #affiliation}
     *
     * @return the value of bas_brand.affiliation
     */
    public String getAffiliation() {
        return affiliation;
    }

    /**
     * 
     * {@linkplain #affiliation}
     * @param affiliation the value for bas_brand.affiliation
     */
    public void setAffiliation(String affiliation) {
        this.affiliation = affiliation;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_brand.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_brand.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_brand.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_brand.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_brand.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_brand.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_brand.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_brand.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_brand.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_brand.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_brand.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_brand.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_brand.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_brand.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}