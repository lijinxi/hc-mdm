package com.hc.scm.mdm.dao.entity;

import com.hc.scm.common.model.RowColWrapModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-14 15:49:20
 * @version 1.0.0
 */
public class BillBomListSize extends RowColWrapModel {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 单据号
     */
    private String billNo;

    /**
     * 物料序号
     */
    private Short orderNo;

    /**
     * 码组(表头物料的码组)
     */
    private String sizeTypeNo;

    /**
     * 对应码组(物料清单表物料的码组)
     */
    private String newSizeTypeNo;

    /**
     * 尺码编号(表头码组编号)
     */
    private String sizeNo;

    /**
     * 对应尺码编号(物料清单表物料的码组)
     */
    private String sizeValue;

	private String materialNo;
	private String materialCode;
	private String materialName;
	//private Byte convertToSizeNo;
    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bill_bom_list_size.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bill_bom_list_size.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bill_bom_list_size.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bill_bom_list_size.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bill_bom_list_size.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bill_bom_list_size.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #oldSizeTypeNo}
     *
     * @return the value of bill_bom_list_size.old_size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #oldSizeTypeNo}
     * @param oldSizeTypeNo the value for bill_bom_list_size.old_size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #newSizeTypeNo}
     *
     * @return the value of bill_bom_list_size.new_size_type_no
     */
    public String getNewSizeTypeNo() {
        return newSizeTypeNo;
    }

    /**
     * 
     * {@linkplain #newSizeTypeNo}
     * @param newSizeTypeNo the value for bill_bom_list_size.new_size_type_no
     */
    public void setNewSizeTypeNo(String newSizeTypeNo) {
        this.newSizeTypeNo = newSizeTypeNo;
    }

    /**
     * 
     * {@linkplain #oldSizeNo}
     *
     * @return the value of bill_bom_list_size.old_size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #oldSizeNo}
     * @param oldSizeNo the value for bill_bom_list_size.old_size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #newSizeNo}
     *
     * @return the value of bill_bom_list_size.new_size_no
     */
    public String getSizeValue() {
        return sizeValue;
    }

    /**
     * 
     * {@linkplain #newSizeNo}
     * @param newSizeNo the value for bill_bom_list_size.new_size_no
     */
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
	
/*	public Byte getConvertToSizeNo() {
		return convertToSizeNo;
	}

	public void setConvertToSizeNo(Byte convertToSizeNo) {
		this.convertToSizeNo = convertToSizeNo;
	}*/

	public BillBomListSize() {
		//convertToSizeNo=1;
	}

	public BillBomListSize(String billNo) {
		this();
		this.billNo = billNo;
	}
}