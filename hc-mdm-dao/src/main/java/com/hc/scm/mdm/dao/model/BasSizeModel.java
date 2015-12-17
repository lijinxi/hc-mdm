package com.hc.scm.mdm.dao.model;

import java.io.Serializable;

import com.hc.scm.common.model.BaseModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
public class BasSizeModel extends BaseModel implements Serializable {
	
	private static final long serialVersionUID = 1L;

	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	public static void main(String[] args) {
		System.out.println(generatorSimpleMapperXML(new BasSizeModel(),null));
		//自定义的vo查询
		//System.out.println(generatorSimpleMapperXML(new BasMaterialSizeModel(),"SelectListByVoBasMaterialSize"));
	}
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
     * 备注(对应 remarks )
     */
    private String remarks;

	public String getSizeNo() {
		return sizeNo;
	}

	public void setSizeNo(String sizeNo) {
		this.sizeNo = sizeNo;
	}

	public Integer getSizeId() {
		return sizeId;
	}

	public void setSizeId(Integer sizeId) {
		this.sizeId = sizeId;
	}

	public String getSizeCode() {
		return sizeCode;
	}

	public void setSizeCode(String sizeCode) {
		this.sizeCode = sizeCode;
	}

	public String getSizeName() {
		return sizeName;
	}

	public void setSizeName(String sizeName) {
		this.sizeName = sizeName;
	}

	public String getSizeTypeNo() {
		return sizeTypeNo;
	}

	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}

	public Integer getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(Integer orderNo) {
		this.orderNo = orderNo;
	}

	public Integer getEnableFlag() {
		return enableFlag;
	}

	public void setEnableFlag(Integer enableFlag) {
		this.enableFlag = enableFlag;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
}