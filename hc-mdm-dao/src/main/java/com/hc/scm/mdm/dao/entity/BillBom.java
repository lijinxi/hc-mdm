package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: BOM维护单据实体
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:27:33
 * @version 1.0.0
 */
public class BillBom {
    /**
     * 单据号
     */
    private String billNo;

    /**
     * 维护类型(1=修改2=用途转换3=状态变更)
     */
    private Integer maintainType;

    /**
     * 原品牌
     */
    private String oldBrandNo;
    
    /**
     * 新品牌
     */
    private String newBrandNo;    
    /**
     * 物料编号(成品、半成品)
     */
    private String materialNo;

    /**
     * 原BOM用途(S2=开发 STD=标准)
     */
    private String oldBomPurpose;

    /**
     * 新BOM用途(STD=标准 SUB=委外 SPD=预测)
     */
    private String newBomPurpose;

    /**
     * BOM分类(1=标准BOM 2=配置BOM)
     */
    private Byte bomType;

    /**
     * 版本序号(1->n)
     */
    private Integer versionNo;

    /**
     * BOM状态(0=编辑 1=审核 2=生效)
     */
    private Byte bomStatus;

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
     * 修改人
     */
    private String modifier;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime; 

    /**
     * 审核人
     */
    private String auditor;

    /**
     * 审核时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date auditTime;
    
	/**
     * 单据状态(0=编辑 1=审核)
     */
    private Byte billStatus;

    /**
     * 备注
     */
    private String remarks;
    
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
    /*
     * 物料表的码组
     */
    //private String sizetypeNo;
    
    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bill_bom.bill_no
     */    
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bill_bom.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #maintainType}
     *
     * @return the value of bill_bom.maintain_type
     */
    public Integer getMaintainType() {
        return maintainType;
    }

    /**
     * 
     * {@linkplain #maintainType}
     * @param maintainType the value for bill_bom.maintain_type
     */
    public void setMaintainType(Integer maintainType) {
        this.maintainType = maintainType;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bill_bom.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bill_bom.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #oldBomPurpose}
     *
     * @return the value of bill_bom.old_bom_purpose
     */
    public String getOldBomPurpose() {
        return oldBomPurpose;
    }

    /**
     * 
     * {@linkplain #oldBomPurpose}
     * @param oldBomPurpose the value for bill_bom.old_bom_purpose
     */
    public void setOldBomPurpose(String oldBomPurpose) {
        this.oldBomPurpose = oldBomPurpose;
    }

    /**
     * 
     * {@linkplain #newBomPurpose}
     *
     * @return the value of bill_bom.new_bom_purpose
     */
    public String getNewBomPurpose() {
        return newBomPurpose;
    }

    /**
     * 
     * {@linkplain #newBomPurpose}
     * @param newBomPurpose the value for bill_bom.new_bom_purpose
     */
    public void setNewBomPurpose(String newBomPurpose) {
        this.newBomPurpose = newBomPurpose;
    }

    /**
     * 
     * {@linkplain #bomType}
     *
     * @return the value of bill_bom.bom_type
     */
    public Byte getBomType() {
        return bomType;
    }

    /**
     * 
     * {@linkplain #bomType}
     * @param bomType the value for bill_bom.bom_type
     */
    public void setBomType(Byte bomType) {
        this.bomType = bomType;
    }

    /**
     * 
     * {@linkplain #versionNo}
     *
     * @return the value of bill_bom.version_no
     */
    public Integer getVersionNo() {
        return versionNo;
    }

    /**
     * 
     * {@linkplain #versionNo}
     * @param versionNo the value for bill_bom.version_no
     */
    public void setVersionNo(Integer versionNo) {
        this.versionNo = versionNo;
    }

    /**
     * 
     * {@linkplain #bomStatus}
     *
     * @return the value of bill_bom.bom_status
     */
    public Byte getBomStatus() {
        return bomStatus;
    }

    /**
     * 
     * {@linkplain #bomStatus}
     * @param bomStatus the value for bill_bom.bom_status
     */
    public void setBomStatus(Byte bomStatus) {
        this.bomStatus = bomStatus;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bill_bom.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bill_bom.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bill_bom.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bill_bom.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bill_bom.auditor
     */
    public String getAuditor() {
        return auditor;
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
    
	/**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bill_bom.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }
    
    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bill_bom.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bill_bom.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of bill_bom.bill_status
     */
    public Byte getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for bill_bom.bill_status
     */
    public void setBillStatus(Byte billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bill_bom.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bill_bom.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

	public String getOldBrandNo() {
		return oldBrandNo;
	}

	public void setOldBrandNo(String oldBrandNo) {
		this.oldBrandNo = oldBrandNo;
	}
	
	public String getNewBrandNo() {
		return newBrandNo;
	}

	public void setNewBrandNo(String newBrandNo) {
		this.newBrandNo = newBrandNo;
	}

	//以下为物料表字段
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
}