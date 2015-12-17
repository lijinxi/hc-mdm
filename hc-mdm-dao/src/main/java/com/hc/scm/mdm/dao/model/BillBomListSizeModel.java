package com.hc.scm.mdm.dao.model;

import com.hc.scm.common.model.RowColWrapModel;


/**
 * Description: BOM物料替代表打横Model
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-22 11:56:26
 * @version 1.0.0
 */
public class BillBomListSizeModel  extends RowColWrapModel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String billNo;
	private Short orderNo;
	private String sizeTypeNo;
	private String newSizeTypeNo;
	private String sizeNo;
	private String sizeValue;
	private String materialNo;
	private String materialCode;
	private String materialName;
	
	public String getBillNo() {
		return billNo;
	}
	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}
	public Short getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(Short orderNo) {
		this.orderNo = orderNo;
	}
	public String getSizeTypeNo() {
		return sizeTypeNo;
	}
	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}
	public String getNewSizeTypeNo() {
		return newSizeTypeNo;
	}
	public void setNewSizeTypeNo(String newSizeTypeNo) {
		this.newSizeTypeNo = newSizeTypeNo;
	}
	public String getSizeNo() {
		return sizeNo;
	}
	public void setSizeNo(String sizeNo) {
		this.sizeNo = sizeNo;
	}
	public String getSizeValue() {
		return sizeValue;
	}
	public void setSizeValue(String sizeValue) {
		this.sizeValue = sizeValue;
	}
	public String getMaterialNo() {
		return materialNo;
	}
	public void setMaterialNo(String materialNo) {
		this.materialNo = materialNo;
	}
	public String getMaterialCode() {
		return materialCode;
	}
	public void setMaterialCode(String materialCode) {
		this.materialCode = materialCode;
	}
	public String getMaterialName() {
		return materialName;
	}
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
}