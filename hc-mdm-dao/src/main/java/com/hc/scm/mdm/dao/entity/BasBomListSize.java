package com.hc.scm.mdm.dao.entity;

/**
 * Description: BOM物料清单size
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-10 10:19:54
 * @version 1.0.0
 */
public class BasBomListSize {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * BOMID
     */
    private Long bomId;

    /**
     * 物料序号
     */
    private Short orderNo;

    /**
     * 码组(表头物料的码组)
     */
    private String oldSizeTypeNo;

    /**
     * 对应码组(物料清单表物料的码组)
     */
    private String newSizeTypeNo;

    /**
     * 尺码编号(表头码组编号)
     */
    private String oldSizeNo;

    /**
     * 对应尺码编号(物料清单表物料的码组)
     */
    private String newSizeNo;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bas_bom_list_size.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bas_bom_list_size.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #bomId}
     *
     * @return the value of bas_bom_list_size.bom_id
     */
    public Long getBomId() {
        return bomId;
    }

    /**
     * 
     * {@linkplain #bomId}
     * @param bomId the value for bas_bom_list_size.bom_id
     */
    public void setBomId(Long bomId) {
        this.bomId = bomId;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_bom_list_size.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_bom_list_size.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #oldSizeTypeNo}
     *
     * @return the value of bas_bom_list_size.old_size_type_no
     */
    public String getOldSizeTypeNo() {
        return oldSizeTypeNo;
    }

    /**
     * 
     * {@linkplain #oldSizeTypeNo}
     * @param oldSizeTypeNo the value for bas_bom_list_size.old_size_type_no
     */
    public void setOldSizeTypeNo(String oldSizeTypeNo) {
        this.oldSizeTypeNo = oldSizeTypeNo;
    }

    /**
     * 
     * {@linkplain #newSizeTypeNo}
     *
     * @return the value of bas_bom_list_size.new_size_type_no
     */
    public String getNewSizeTypeNo() {
        return newSizeTypeNo;
    }

    /**
     * 
     * {@linkplain #newSizeTypeNo}
     * @param newSizeTypeNo the value for bas_bom_list_size.new_size_type_no
     */
    public void setNewSizeTypeNo(String newSizeTypeNo) {
        this.newSizeTypeNo = newSizeTypeNo;
    }

    /**
     * 
     * {@linkplain #oldSizeNo}
     *
     * @return the value of bas_bom_list_size.old_size_no
     */
    public String getOldSizeNo() {
        return oldSizeNo;
    }

    /**
     * 
     * {@linkplain #oldSizeNo}
     * @param oldSizeNo the value for bas_bom_list_size.old_size_no
     */
    public void setOldSizeNo(String oldSizeNo) {
        this.oldSizeNo = oldSizeNo;
    }

    /**
     * 
     * {@linkplain #newSizeNo}
     *
     * @return the value of bas_bom_list_size.new_size_no
     */
    public String getNewSizeNo() {
        return newSizeNo;
    }

    /**
     * 
     * {@linkplain #newSizeNo}
     * @param newSizeNo the value for bas_bom_list_size.new_size_no
     */
    public void setNewSizeNo(String newSizeNo) {
        this.newSizeNo = newSizeNo;
    }
}