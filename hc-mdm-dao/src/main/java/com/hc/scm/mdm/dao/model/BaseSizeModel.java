package com.hc.scm.mdm.dao.model;

import com.hc.scm.common.model.RowColWrapModel;

/**
 * 码组对应的尺码横排
 * Description: 
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      lucheng
 * Createdate:  2015-4-22下午1:54:15
 */
public class BaseSizeModel extends RowColWrapModel {
	
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