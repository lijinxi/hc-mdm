package com.hc.scm.mdm.dao.entity;

import java.math.BigDecimal;

/**
 * Description: BOM物料清单实体
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
public class BasBomList {
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
     * 上级序号（虚字段）
     */
    private Short parentOrderNo;
    
    /**
     * 品牌
     */
    private String brandNo;
    
    /**
     * 上级品牌（虚字段）
     */
    private String parentBrandNo;
    
    /**
     * 物料编号
     */
    private String materialNo;
    /**
     * 上级物料编号（虚字段）
     */
    private String parentMaterialNo;
    
    /**
     * BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)
     */
    private String bomPurpose;
    
    /**
     * 上级BOM用途（虚字段）
     */
    private String parentBomPurpose;

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

    /**
     * 虚拟字段，最大的orderNo
     */
    private Short maxOrderNo;
    
    /**
     * 虚拟字段，对应单据物料明细清单
     */
    private Short billOrderNo;
    
    private Short isLeaf;
    private String leaf;
    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bas_bom_list.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bas_bom_list.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #bomId}
     *
     * @return the value of bas_bom_list.bom_id
     */
    public Long getBomId() {
        return bomId;
    }

    /**
     * 
     * {@linkplain #bomId}
     * @param bomId the value for bas_bom_list.bom_id
     */
    public void setBomId(Long bomId) {
        this.bomId = bomId;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_bom_list.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_bom_list.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bas_bom_list.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bas_bom_list.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bas_bom_list.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bas_bom_list.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     *
     * @return the value of bas_bom_list.bom_purpose
     */
    public String getBomPurpose() {
        return bomPurpose;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     * @param bomPurpose the value for bas_bom_list.bom_purpose
     */
    public void setBomPurpose(String bomPurpose) {
        this.bomPurpose = bomPurpose;
    }

    /**
     * 
     * {@linkplain #dosageNumerator}
     *
     * @return the value of bas_bom_list.dosage_numerator
     */
    public BigDecimal getDosageNumerator() {
        return dosageNumerator;
    }

    /**
     * 
     * {@linkplain #dosageNumerator}
     * @param dosageNumerator the value for bas_bom_list.dosage_numerator
     */
    public void setDosageNumerator(BigDecimal dosageNumerator) {
        this.dosageNumerator = dosageNumerator;
    }

    /**
     * 
     * {@linkplain #dosageDenominator}
     *
     * @return the value of bas_bom_list.dosage_denominator
     */
    public BigDecimal getDosageDenominator() {
        return dosageDenominator;
    }

    /**
     * 
     * {@linkplain #dosageDenominator}
     * @param dosageDenominator the value for bas_bom_list.dosage_denominator
     */
    public void setDosageDenominator(BigDecimal dosageDenominator) {
        this.dosageDenominator = dosageDenominator;
    }

    /**
     * 
     * {@linkplain #pdTypeNo}
     *
     * @return the value of bas_bom_list.pd_type_no
     */
    public String getPdTypeNo() {
        return pdTypeNo;
    }

    /**
     * 
     * {@linkplain #pdTypeNo}
     * @param pdTypeNo the value for bas_bom_list.pd_type_no
     */
    public void setPdTypeNo(String pdTypeNo) {
        this.pdTypeNo = pdTypeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bas_bom_list.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bas_bom_list.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #isVirtual}
     *
     * @return the value of bas_bom_list.is_virtual
     */
    public Byte getIsVirtual() {
        return isVirtual;
    }

    /**
     * 
     * {@linkplain #isVirtual}
     * @param isVirtual the value for bas_bom_list.is_virtual
     */
    public void setIsVirtual(Byte isVirtual) {
        this.isVirtual = isVirtual;
    }
    
    
    
    public Short getParentOrderNo() {
		return parentOrderNo;
	}

	public void setParentOrderNo(Short parentOrderNo) {
		this.parentOrderNo = parentOrderNo;
	}

	public String getParentBrandNo() {
		return parentBrandNo;
	}

	public void setParentBrandNo(String parentBrandNo) {
		this.parentBrandNo = parentBrandNo;
	}

	public String getParentMaterialNo() {
		return parentMaterialNo;
	}

	public void setParentMaterialNo(String parentMaterialNo) {
		this.parentMaterialNo = parentMaterialNo;
	}

	public String getParentBomPurpose() {
		return parentBomPurpose;
	}

	public void setParentBomPurpose(String parentBomPurpose) {
		this.parentBomPurpose = parentBomPurpose;
	}

	public Short getMaxOrderNo() {
		return maxOrderNo;
	}

	public void setMaxOrderNo(Short maxOrderNo) {
		this.maxOrderNo = maxOrderNo;
	}

	public Short getBillOrderNo() {
		return billOrderNo;
	}

	public void setBillOrderNo(Short billOrderNo) {
		this.billOrderNo = billOrderNo;
	}

	public Short getIsLeaf() {
		return isLeaf;
	}

	public void setIsLeaf(Short isLeaf) {
		this.isLeaf = isLeaf;
	}

	public String getLeaf() {
		return leaf;
	}

	public void setLeaf(String leaf) {
		this.leaf = leaf;
	}

	public BasBomList(){
		this.isLeaf=0;
    }
    
    public BasBomList(String materialNo) {
    	this.isLeaf=0;
    	this.materialNo = materialNo;
	}
    
    public BasBomList(String brandNo, String materialNo, String bomPurpose) {
    	this.isLeaf=0;
		this.brandNo = brandNo;
		this.materialNo = materialNo;
		this.bomPurpose = bomPurpose;
	}
}