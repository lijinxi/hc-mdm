package com.hc.scm.mdm.dao.model;

import java.io.Serializable;
import java.util.List;

import com.hc.scm.common.model.BaseModel;

/**
 * 
 * Description: 物料及尺码对象
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-4-13上午11:15:38
 */
public class BasMaterialModel extends BaseModel implements Serializable {
	
	private static final long serialVersionUID = 1L;

	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	public static void main(String[] args) {
		System.out.println(generatorSimpleMapperXML(new BasMaterialModel(),null));
		//自定义的vo查询
		//System.out.println(generatorSimpleMapperXML(new ItgModuleListModel(),"baseSelectListXXXXXXByVo"));
	}
    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 物料编码
     */
    private String materialCode;

    /**
     * 国际条码
     */
    private String barcodeEan;

    /**
     * 物料名称
     */
    private String materialName;

    /**
     * 规格型号
     */
    private String specifications;

    /**
     * 物料属性(数据字典)
     */
    private String materialSource;


    /**
     * 码组(取bas_size_type)
     */
    private String sizeTypeNo;


    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Byte enableFlag;

    /**
     * 编码规则(取bas_code_rule)
     */
    private String codeRuleNo;

    /**
     * 参考单价
     */
    private String advicePrice;

    /**
     * 币别编号(取bas_currency表)
     */
    private String currencyNo;


    /**
     * 制造商
     */
    private String manufacturer;

    /**
     * 品牌编号(取bas_brand)
     */
    private String brandNo;


    /**
     * 物料类型(0=成品/半成品 1=原料)
     */
    private Integer materialType;
    
    /**
     * Object的类型为：BasMaterialSizeModel
     */
    private List<Object> basMaterialSizeList;
    
    private Integer ifQc;

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

	public String getBarcodeEan() {
		return barcodeEan;
	}

	public void setBarcodeEan(String barcodeEan) {
		this.barcodeEan = barcodeEan;
	}

	public String getMaterialName() {
		return materialName;
	}

	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}

	public String getSpecifications() {
		return specifications;
	}

	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}

	public String getMaterialSource() {
		return materialSource;
	}

	public void setMaterialSource(String materialSource) {
		this.materialSource = materialSource;
	}

	public String getSizeTypeNo() {
		return sizeTypeNo;
	}

	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}

	public Byte getEnableFlag() {
		return enableFlag;
	}

	public void setEnableFlag(Byte enableFlag) {
		this.enableFlag = enableFlag;
	}

	public String getCodeRuleNo() {
		return codeRuleNo;
	}

	public void setCodeRuleNo(String codeRuleNo) {
		this.codeRuleNo = codeRuleNo;
	}

	public String getAdvicePrice() {
		return advicePrice;
	}

	public void setAdvicePrice(String advicePrice) {
		this.advicePrice = advicePrice;
	}

	public String getCurrencyNo() {
		return currencyNo;
	}

	public void setCurrencyNo(String currencyNo) {
		this.currencyNo = currencyNo;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getBrandNo() {
		return brandNo;
	}

	public void setBrandNo(String brandNo) {
		this.brandNo = brandNo;
	}

	public Integer getMaterialType() {
		return materialType;
	}

	public void setMaterialType(Integer materialType) {
		this.materialType = materialType;
	}

	public List<Object> getBasMaterialSizeList() {
		return basMaterialSizeList;
	}

	public void setBasMaterialSizeList(List<Object> basMaterialSizeList) {
		this.basMaterialSizeList = basMaterialSizeList;
	}

	public Integer getIfQc() {
		return ifQc;
	}

	public void setIfQc(Integer ifQc) {
		this.ifQc = ifQc;
	}
    
}