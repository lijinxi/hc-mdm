package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
public class BasCategory {
    /**
     * 类别编号(对应 category_no )
     */
    private String categoryNo;

    /**
     * 类别id(对应 category_id )
     */
    private Integer categoryId;

    /**
     * 类别名称(对应 category_name )
     */
    private String categoryName;

    /**
     * 特征码(对应 special_code )
     */
    private String specialCode;

    /**
     * 上级类别id(对应 parent_category_id )
     */
    private Integer parentCategoryId;

    /**
     * 类别级别(对应 category_level )
     */
    private Integer levelNo;

    /**
     * 类别路径(对应 category_path )
     */
    private String searchCode;

    /**
     * 本部编码(对应 affiliation 鞋类、体育、童鞋、龙浩 )
     */
    private String affiliation;

    /**
     * 排列序号(对应 order_no )
     */
    private Integer orderNo;

    /**
     * 启用状态(对应 status 0=未生效 1=启用 2=作废 )
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
     * {@linkplain #categoryNo}
     *
     * @return the value of bas_category.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for bas_category.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryId}
     *
     * @return the value of bas_category.category_id
     */
    public Integer getCategoryId() {
        return categoryId;
    }

    /**
     * 
     * {@linkplain #categoryId}
     * @param categoryId the value for bas_category.category_id
     */
    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    /**
     * 
     * {@linkplain #categoryName}
     *
     * @return the value of bas_category.category_name
     */
    public String getCategoryName() {
        return categoryName;
    }

    /**
     * 
     * {@linkplain #categoryName}
     * @param categoryName the value for bas_category.category_name
     */
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    /**
     * 
     * {@linkplain #specialCode}
     *
     * @return the value of bas_category.special_code
     */
    public String getSpecialCode() {
        return specialCode;
    }

    /**
     * 
     * {@linkplain #specialCode}
     * @param specialCode the value for bas_category.special_code
     */
    public void setSpecialCode(String specialCode) {
        this.specialCode = specialCode;
    }

    /**
     * 
     * {@linkplain #parentCategoryId}
     *
     * @return the value of bas_category.parent_category_id
     */
    public Integer getParentCategoryId() {
        return parentCategoryId;
    }

    /**
     * 
     * {@linkplain #parentCategoryId}
     * @param parentCategoryId the value for bas_category.parent_category_id
     */
    public void setParentCategoryId(Integer parentCategoryId) {
        this.parentCategoryId = parentCategoryId;
    }

    /**
     * 
     * {@linkplain #levelNo}
     *
     * @return the value of bas_category.level_no
     */
    public Integer getLevelNo() {
        return levelNo;
    }

    /**
     * 
     * {@linkplain #levelNo}
     * @param levelNo the value for bas_category.level_no
     */
    public void setLevelNo(Integer levelNo) {
        this.levelNo = levelNo;
    }

    /**
     * 
     * {@linkplain #searchCode}
     *
     * @return the value of bas_category.search_code
     */
    public String getSearchCode() {
        return searchCode;
    }

    /**
     * 
     * {@linkplain #searchCode}
     * @param searchCode the value for bas_category.search_code
     */
    public void setSearchCode(String searchCode) {
        this.searchCode = searchCode;
    }

    /**
     * 
     * {@linkplain #affiliation}
     *
     * @return the value of bas_category.affiliation
     */
    public String getAffiliation() {
        return affiliation;
    }

    /**
     * 
     * {@linkplain #affiliation}
     * @param affiliation the value for bas_category.affiliation
     */
    public void setAffiliation(String affiliation) {
        this.affiliation = affiliation;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_category.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_category.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_category.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_category.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_category.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_category.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_category.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_category.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_category.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_category.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_category.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_category.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_category.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_category.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}