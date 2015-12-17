package com.hc.scm.mdm.dao.entity;

import com.hc.scm.common.model.RowColWrapModel;

/**
 * Description: 尺码横排-前端尺码横排的编辑model
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-06 11:46:48
 * @version 1.0.0
 */
public class SizeRowColWrap extends RowColWrapModel{
	
	/**
	 * 序列化
	 */
	private static final long serialVersionUID = 1L;
	/**
     * 尺码类别编号
     */
    private String sizeTypeNo;

	public String getSizeTypeNo() {
		return sizeTypeNo;
	}

	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}
    
}