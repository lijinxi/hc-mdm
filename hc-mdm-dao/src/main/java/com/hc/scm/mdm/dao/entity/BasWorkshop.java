package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:23
 * @version 1.0.0
 */
public class BasWorkshop {
    /**
     * 工作中心编号
     */
    private String workshopNo;

    /**
     * 工作中心名称
     */
    private String workshopName;

    /**
     * 公司
     */
    private String companyNo;

    /**
     * 厂区编号
     */
    private String factoryNo;

    /**
     * 事业部编号
     */
    private String divisionNo;

    /**
     * 工作中心类型(数据字典 workshop_type )
     */
    private String workshopType;

    /**
     * 工作中心负责人
     */
    private String workshopLeader;

    /**
     * 部门编号(对应HR部门)
     */
    private Integer deptNo;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 启用状态(0=未生效 1=启用)
     */
    private Integer enableFlag;

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
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;
    
    
    /*
     * 部门名称
     */
    
    private String deptName;
    public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	/**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of bas_workshop.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for bas_workshop.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopName}
     *
     * @return the value of bas_workshop.workshop_name
     */
    public String getWorkshopName() {
        return workshopName;
    }

    /**
     * 
     * {@linkplain #workshopName}
     * @param workshopName the value for bas_workshop.workshop_name
     */
    public void setWorkshopName(String workshopName) {
        this.workshopName = workshopName;
    }

    /**
     * 
     * {@linkplain #companyNo}
     *
     * @return the value of bas_workshop.company_no
     */
    public String getCompanyNo() {
        return companyNo;
    }

    /**
     * 
     * {@linkplain #companyNo}
     * @param companyNo the value for bas_workshop.company_no
     */
    public void setCompanyNo(String companyNo) {
        this.companyNo = companyNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of bas_workshop.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for bas_workshop.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bas_workshop.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bas_workshop.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #workshopType}
     *
     * @return the value of bas_workshop.workshop_type
     */
    public String getWorkshopType() {
        return workshopType;
    }

    /**
     * 
     * {@linkplain #workshopType}
     * @param workshopType the value for bas_workshop.workshop_type
     */
    public void setWorkshopType(String workshopType) {
        this.workshopType = workshopType;
    }

    /**
     * 
     * {@linkplain #workshopLeader}
     *
     * @return the value of bas_workshop.workshop_leader
     */
    public String getWorkshopLeader() {
        return workshopLeader;
    }

    /**
     * 
     * {@linkplain #workshopLeader}
     * @param workshopLeader the value for bas_workshop.workshop_leader
     */
    public void setWorkshopLeader(String workshopLeader) {
        this.workshopLeader = workshopLeader;
    }

    /**
     * 
     * {@linkplain #deptNo}
     *
     * @return the value of bas_workshop.dept_no
     */
    public Integer getDeptNo() {
        return deptNo;
    }

    /**
     * 
     * {@linkplain #deptNo}
     * @param deptNo the value for bas_workshop.dept_no
     */
    public void setDeptNo(Integer deptNo) {
        this.deptNo = deptNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_workshop.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_workshop.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_workshop.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_workshop.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_workshop.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_workshop.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_workshop.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_workshop.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_workshop.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_workshop.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_workshop.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_workshop.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_workshop.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_workshop.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}