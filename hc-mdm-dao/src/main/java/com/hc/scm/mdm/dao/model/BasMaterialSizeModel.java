package com.hc.scm.mdm.dao.model;

import java.io.Serializable;

import com.hc.scm.common.model.BaseModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
public class BasMaterialSizeModel  extends BaseModel implements Serializable {
	
	private static final long serialVersionUID = 1L;

	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	public static void main(String[] args) {
		//System.out.println(generatorSimpleMapperXML(new BasMaterialModel(),null));
		//自定义的vo查询
		System.out.println(generatorSimpleMapperXML(new BasMaterialSizeModel(),"SelectListByVoBasMaterialSize"));
	}
	  /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 尺码编号
     */
    private String sizeNo;
    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 条码(产品货号+尺码=条码)
     */
    private String barcode;

	public String getMaterialNo() {
		return materialNo;
	}

	public void setMaterialNo(String materialNo) {
		this.materialNo = materialNo;
	}

	public String getSizeNo() {
		return sizeNo;
	}

	public void setSizeNo(String sizeNo) {
		this.sizeNo = sizeNo;
	}

	public Integer getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(Integer orderNo) {
		this.orderNo = orderNo;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}
	
}