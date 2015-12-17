package com.hc.scm.mdm.dao.entity;

import java.math.BigDecimal;

/**
 * Description: BOM维护单据明细实体
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public class BillBomList {
    /**
     * 行id(主键、隐藏)
     */
    private Long lineId;

	/**
     * 单据号
     */
    private String billNo;

    /**
     * 序号
     */
    private Short orderNo;

    /**
     * 上层序号
     */
    private Short parentOrderNo;

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

    /**
     * 修改标识(0=否 1=是)
     */
    private Byte updateFlag;
    
    /**
     * 物料编码
     */
    private String materialCode;
    
    /**
     * 物料名称
     */
    private String materialName;
    
    /**
     * 码组
     */
    private String sizeTypeNo;
    
    /**
     * 款号
     */
    private String styleNo;
    
    /**
     * 替代标志1表示跟父级相同，0表示跟父级不相同
     */
    private Short replaceFlag;
    /**
     * 最大序号
     */
    private Short maxOrderNo;

    private Byte bomStatus;
 
    private Integer versionNo;
    
    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bill_bom_list.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bill_bom_list.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bill_bom_list.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bill_bom_list.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bill_bom_list.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bill_bom_list.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #parentOrderNo}
     *
     * @return the value of bill_bom_list.parent_order_no
     */
    public Short getParentOrderNo() {
        return parentOrderNo;
    }

    /**
     * 
     * {@linkplain #parentOrderNo}
     * @param parentOrderNo the value for bill_bom_list.parent_order_no
     */
    public void setParentOrderNo(Short parentOrderNo) {
        this.parentOrderNo = parentOrderNo;
    }

    public String getBrandNo() {
		return brandNo;
	}

	public void setBrandNo(String brandNo) {
		this.brandNo = brandNo;
	}
	
    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bill_bom_list.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bill_bom_list.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

	/**
     * 
     * {@linkplain #bomPurpose}
     *
     * @return the value of bill_bom_list.bom_purpose
     */
    public String getBomPurpose() {
        return bomPurpose;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     * @param bomPurpose the value for bill_bom_list.bom_purpose
     */
    public void setBomPurpose(String bomPurpose) {
        this.bomPurpose = bomPurpose;
    }

    /**
     * 
     * {@linkplain #dosageNumerator}
     *
     * @return the value of bill_bom_list.dosage_numerator
     */
    public BigDecimal getDosageNumerator() {
        return dosageNumerator;
    }

    /**
     * 
     * {@linkplain #dosageNumerator}
     * @param dosageNumerator the value for bill_bom_list.dosage_numerator
     */
    public void setDosageNumerator(BigDecimal dosageNumerator) {
        this.dosageNumerator = dosageNumerator;
    }

    /**
     * 
     * {@linkplain #dosageDenominator}
     *
     * @return the value of bill_bom_list.dosage_denominator
     */
    public BigDecimal getDosageDenominator() {
        return dosageDenominator;
    }

    /**
     * 
     * {@linkplain #dosageDenominator}
     * @param dosageDenominator the value for bill_bom_list.dosage_denominator
     */
    public void setDosageDenominator(BigDecimal dosageDenominator) {
        this.dosageDenominator = dosageDenominator;
    }

    /**
     * 
     * {@linkplain #pdTypeNo}
     *
     * @return the value of bill_bom_list.pd_type_no
     */
    public String getPdTypeNo() {
        return pdTypeNo;
    }

    /**
     * 
     * {@linkplain #pdTypeNo}
     * @param pdTypeNo the value for bill_bom_list.pd_type_no
     */
    public void setPdTypeNo(String pdTypeNo) {
        this.pdTypeNo = pdTypeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bill_bom_list.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bill_bom_list.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #isVirtual}
     *
     * @return the value of bill_bom_list.is_virtual
     */
    public Byte getIsVirtual() {
        return isVirtual;
    }

    /**
     * 
     * {@linkplain #isVirtual}
     * @param isVirtual the value for bill_bom_list.is_virtual
     */
    public void setIsVirtual(Byte isVirtual) {
        this.isVirtual = isVirtual;
    }

    /**
     * 
     * {@linkplain #updateFlag}
     *
     * @return the value of bill_bom_list.update_flag
     */
    public Byte getUpdateFlag() {
        return updateFlag;
    }

    /**
     * 
     * {@linkplain #updateFlag}
     * @param updateFlag the value for bill_bom_list.update_flag
     */
    public void setUpdateFlag(Byte updateFlag) {
        this.updateFlag = updateFlag;
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

	public String getSizeTypeNo() {
		return sizeTypeNo;
	}

	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}

	public String getStyleNo() {
		return styleNo;
	}

	public void setStyleNo(String styleNo) {
		this.styleNo = styleNo;
	}
	
	public Short getReplaceFlag() {
		return replaceFlag;
	}

	public void setReplaceFlag(Short replaceFlag) {
		this.replaceFlag = replaceFlag;
	}

	public Short getMaxOrderNo() {
		return maxOrderNo;
	}

	public void setMaxOrderNo(Short maxOrderNo) {
		this.maxOrderNo = maxOrderNo;
	}
	
	public Byte getBomStatus() {
		return bomStatus;
	}

	public void setBomStatus(Byte bomStatus) {
		this.bomStatus = bomStatus;
	}
	
	public Integer getVersionNo() {
		return versionNo;
	}

	public void setVersionNo(Integer versionNo) {
		this.versionNo = versionNo;
	}

	public BillBomList() {
		super();
	}

    public BillBomList(String billNo){
		super();
		this.billNo = billNo;	
    }
    
    public BillBomList(String billNo, Short orderNo){
		super();
		this.billNo = billNo;
		this.orderNo = orderNo;    	
    }

	public BillBomList(String brandNo, String materialNo, String bomPurpose) {
		super();
		this.brandNo = brandNo;
		this.materialNo = materialNo;
		this.bomPurpose = bomPurpose;
	}  
	
	public BillBomList(String billNo, Short orderNo, String brandNo, String materialNo, String bomPurpose) {
		super();
		this.billNo = billNo;
		this.orderNo = orderNo;
		this.brandNo = brandNo;
		this.materialNo = materialNo;
		this.bomPurpose = bomPurpose;
	}    
}