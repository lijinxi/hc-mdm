package com.hc.scm.mdm.dao.model;

import java.io.Serializable;
/**
 * Description: 公共数据字典-combobox对象
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-18 09:43:20
 * @version 1.0.0
 */
public class BasDictComboModel implements Serializable{
	/**
	 * 使用redis缓存，必须要序列化，
	 */
	private static final long serialVersionUID = 7618098624169860759L;
	
	/**
     * 字典id
     */
    private Integer dictId;
    
	/**
     * 字典编码
     */
    private String dictCode;

	/**
     * 字典名称
     */
    private String dictName;
    
    /**
     * 所属应用编号
     */
    private Integer appNo;
    
    /**
     * 明细编码
     */
    private String itemCode;

    /**
     * 明细名称
     */
    private String itemName;
    
    /**
     * 默认显示名称
     */
    private String displayName;
    
    /**
     * 字典明细
     */
    //private List<BaseDictDtlComboModel> dtl;
    
    public String getDictCode() {
		return dictCode;
	}

	public void setDictCode(String dictCode) {
		this.dictCode = dictCode;
	}

	public String getDictName() {
		return dictName;
	}

	public void setDictName(String dictName) {
		this.dictName = dictName;
	}

	public Integer getAppNo() {
		return appNo;
	}

	public void setAppNo(Integer appNo) {
		this.appNo = appNo;
	}

	/*public List<BaseDictDtlComboModel> getDtl() {
		return dtl;
	}

	public void setDtl(List<BaseDictDtlComboModel> dtl) {
		this.dtl = dtl;
	}*/
    
    public Integer getDictId() {
		return dictId;
	}

	public void setDictId(Integer dictId) {
		this.dictId = dictId;
	}

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

}
