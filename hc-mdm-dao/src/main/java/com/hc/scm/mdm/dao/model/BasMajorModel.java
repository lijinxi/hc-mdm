package com.hc.scm.mdm.dao.model;

import java.util.Date;

import com.hc.scm.common.model.BaseModel;

public class BasMajorModel extends BaseModel{
	
	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	public static void main(String[] args) {
		System.out.println(generatorSimpleMapperXML(new BasMajorModel(),null));
		//自定义的vo查询
		//System.out.println(generatorSimpleMapperXML(new BlPurchaseSiModel(),"baseSelectListXXXXXXByVo"));
	}

	/**
     * 
     */
    private Integer orderNo;

    /**
     * 
     */
    private String creator;

    /**
     * 
     */
    private Date createTime;

    /**
     * 
     */
    private String modifier;

    /**
     * 
     */
    private Date modifyTime;

    /**
     * 
     */
    private String remarks;
	/**
     * 
     */
    private String categoryNo;
    
    private String categoryName;

    private Integer categoryId;
    /**
     * 
     */
    private Integer materialType;

	public Integer getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(Integer orderNo) {
		this.orderNo = orderNo;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getModifier() {
		return modifier;
	}

	public void setModifier(String modifier) {
		this.modifier = modifier;
	}

	public Date getModifyTime() {
		return modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getCategoryNo() {
		return categoryNo;
	}

	public void setCategoryNo(String categoryNo) {
		this.categoryNo = categoryNo;
	}

	public Integer getMaterialType() {
		return materialType;
	}

	public void setMaterialType(Integer materialType) {
		this.materialType = materialType;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

}
