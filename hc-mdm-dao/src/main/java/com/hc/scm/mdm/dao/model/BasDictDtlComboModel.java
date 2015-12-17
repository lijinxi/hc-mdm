package com.hc.scm.mdm.dao.model;

import java.io.Serializable;

public class BasDictDtlComboModel implements Serializable{

	/**
	 * 使用redis缓存，必须要序列化，
	 */
	private static final long serialVersionUID = -494506804473892084L;
	
	/**
     * 字典编码ID
     */
    private String dictId;
    
	/**
     * 明细编码
     */
    private String itemCode;

    /**
     * 明细名称
     */
    private String itemName;
    
    private String displayName;

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

	public String getDictId() {
		return dictId;
	}

	public void setDictId(String dictId) {
		this.dictId = dictId;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}
}
