package com.hc.scm.mdm.dao.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import com.hc.scm.common.model.BaseModel;

/**
 * Description: BOM物料清单实体
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
public class BasBomListModel  extends BaseModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	public static void main(String[] args) {
		System.out.println(generatorSimpleMapperXML(new BasBomListModel(),null));
		//自定义的vo查询
		//System.out.println(generatorSimpleMapperXML(new ItgModuleListModel(),"baseSelectListXXXXXXByVo"));
	}
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * BOMID
     */
    private Long bomId;

    /**
     * 序号
     */
    private Short orderNo;

    
    /**
     * 品牌
     */
    private String brandNo;
    
    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)
     */
    private String bomPurpose;

    /**
     * 用量(分子)
     */
    private BigDecimal dosageNumerator;

    /**
     * 用量(分母)
     */
    private BigDecimal dosageDenominator;

    /**
     * 用途(产品设计材料类别编号)
     */
    private String pdTypeNo;

    /**
     * 预设仓库(仓库编号)
     */
    private String storeNo;

    /**
     * 是否虚拟件(0=否 1=是)
     */
    private Byte isVirtual;
    
    
    private List<Object> basBomListSizeModelList;
    
	public Long getLineId() {
		return lineId;
	}

	public void setLineId(Long lineId) {
		this.lineId = lineId;
	}

	public Long getBomId() {
		return bomId;
	}

	public void setBomId(Long bomId) {
		this.bomId = bomId;
	}

	public Short getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(Short orderNo) {
		this.orderNo = orderNo;
	}

	public String getBrandNo() {
		return brandNo;
	}

	public void setBrandNo(String brandNo) {
		this.brandNo = brandNo;
	}

	public String getMaterialNo() {
		return materialNo;
	}

	public void setMaterialNo(String materialNo) {
		this.materialNo = materialNo;
	}

	public String getBomPurpose() {
		return bomPurpose;
	}

	public void setBomPurpose(String bomPurpose) {
		this.bomPurpose = bomPurpose;
	}

	public BigDecimal getDosageNumerator() {
		return dosageNumerator;
	}

	public void setDosageNumerator(BigDecimal dosageNumerator) {
		this.dosageNumerator = dosageNumerator;
	}

	public BigDecimal getDosageDenominator() {
		return dosageDenominator;
	}

	public void setDosageDenominator(BigDecimal dosageDenominator) {
		this.dosageDenominator = dosageDenominator;
	}

	public String getPdTypeNo() {
		return pdTypeNo;
	}

	public void setPdTypeNo(String pdTypeNo) {
		this.pdTypeNo = pdTypeNo;
	}

	public String getStoreNo() {
		return storeNo;
	}

	public void setStoreNo(String storeNo) {
		this.storeNo = storeNo;
	}

	public Byte getIsVirtual() {
		return isVirtual;
	}

	public void setIsVirtual(Byte isVirtual) {
		this.isVirtual = isVirtual;
	}

	public List<Object> getBasBomListSizeModelList() {
		return basBomListSizeModelList;
	}

	public void setBasBomListSizeModelList(
			List<Object> basBomListSizeModelList) {
		this.basBomListSizeModelList = basBomListSizeModelList;
	}
	
}