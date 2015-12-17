package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: BOM头实体
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
public class BasBom {
    /**
     * BOMID
     */
    private Long bomId;

    /**
     * BOM品牌
     */
    private String brandNo;
    
    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * BOM分类(1=标准BOM 2=配置BOM)
     */
    private Byte bomType;

    /**
     * BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)
     */
    private String bomPurpose;

    /**
     * 版本序号(1->n)
     */
    private Integer versionNo;

    /**
     * BOM状态(0=编辑 1=审核 2=生效)
     */
    private Byte bomStatus;

    /**
     * 最后修改人
     */
    private String modifier;

    /**
     * 最后修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    private String materialCode;
    private String materialName;
    /**
     * 
     * {@linkplain #bomId}
     *
     * @return the value of bas_bom.bom_id
     */
    public Long getBomId() {
        return bomId;
    }

    /**
     * 
     * {@linkplain #bomId}
     * @param bomId the value for bas_bom.bom_id
     */
    public void setBomId(Long bomId) {
        this.bomId = bomId;
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
     * @return the value of bas_bom.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bas_bom.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #bomType}
     *
     * @return the value of bas_bom.bom_type
     */
    public Byte getBomType() {
        return bomType;
    }

    /**
     * 
     * {@linkplain #bomType}
     * @param bomType the value for bas_bom.bom_type
     */
    public void setBomType(Byte bomType) {
        this.bomType = bomType;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     *
     * @return the value of bas_bom.bom_purpose
     */
    public String getBomPurpose() {
        return bomPurpose;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     * @param bomPurpose the value for bas_bom.bom_purpose
     */
    public void setBomPurpose(String bomPurpose) {
        this.bomPurpose = bomPurpose;
    }

    /**
     * 
     * {@linkplain #versionNo}
     *
     * @return the value of bas_bom.version_no
     */
    public Integer getVersionNo() {
        return versionNo;
    }

    /**
     * 
     * {@linkplain #versionNo}
     * @param versionNo the value for bas_bom.version_no
     */
    public void setVersionNo(Integer versionNo) {
        this.versionNo = versionNo;
    }

    /**
     * 
     * {@linkplain #bomStatus}
     *
     * @return the value of bas_bom.bom_status
     */
    public Byte getBomStatus() {
        return bomStatus;
    }

    /**
     * 
     * {@linkplain #bomStatus}
     * @param bomStatus the value for bas_bom.bom_status
     */
    public void setBomStatus(Byte bomStatus) {
        this.bomStatus = bomStatus;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_bom.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_bom.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_bom.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_bom.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_bom.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_bom.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
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

	public BasBom() {
		super();
	}

	public BasBom(String brandNo, String materialNo, String bomPurpose) {
		super();
		this.brandNo = brandNo;
		this.materialNo = materialNo;
		this.bomPurpose = bomPurpose;
	}
}