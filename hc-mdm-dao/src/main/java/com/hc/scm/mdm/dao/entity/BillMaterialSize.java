package com.hc.scm.mdm.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
public class BillMaterialSize {
    /**
     * 行id(主键、隐藏)
     */
    private Long lineId;

    /**
     * 单据号
     */
    private String billNo;

    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 尺码编号
     */
    private String sizeNo;

    /**
     * 条码(产品货号+尺码=条码)
     */
    private String barcode;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bill_material_size.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bill_material_size.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bill_material_size.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bill_material_size.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bill_material_size.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bill_material_size.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bill_material_size.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bill_material_size.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bill_material_size.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bill_material_size.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #barcode}
     *
     * @return the value of bill_material_size.barcode
     */
    public String getBarcode() {
        return barcode;
    }

    /**
     * 
     * {@linkplain #barcode}
     * @param barcode the value for bill_material_size.barcode
     */
    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }
}