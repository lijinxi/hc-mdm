package com.hc.scm.mdm.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
public class BasMajorKey {
    /**
     * 
     */
    private String categoryNo;

    /**
     * 
     */
    private Integer materialType;

    /**
     * 
     * {@linkplain #categoryNo}
     *
     * @return the value of bas_major.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for bas_major.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #materialType}
     *
     * @return the value of bas_major.material_type
     */
    public Integer getMaterialType() {
        return materialType;
    }

    /**
     * 
     * {@linkplain #materialType}
     * @param materialType the value for bas_major.material_type
     */
    public void setMaterialType(Integer materialType) {
        this.materialType = materialType;
    }
}