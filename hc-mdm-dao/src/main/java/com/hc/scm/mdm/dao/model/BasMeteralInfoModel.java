package com.hc.scm.mdm.dao.model;

import com.hc.scm.mdm.dao.entity.BasMaterial;

public class BasMeteralInfoModel  extends BasMaterial {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	//	public static void main(String[] args) {
	//		System.out.println(generatorSimpleMapperXML(new BasMeteralInfoModel(),null));
	//		//自定义的vo查询
	//		//System.out.println(generatorSimpleMapperXML(new BasMaterialSizeModel(),"SelectListByVoBasMaterialSize"));
	//	}
	
	/*
	 *类别名称(取到小类)
	 */
	private String categoryName;
	/*
	 * 计量名称
	 */
	private String unitName;
	
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	private String sizeName;
	public String getSizeName() {
		return sizeName;
	}
	public void setSizeName(String sizeName) {
		this.sizeName = sizeName;
	}
	private String sizeNo;

	public String getSizeNo() {
		return sizeNo;
	}
	public void setSizeNo(String sizeNo) {
		this.sizeNo = sizeNo;
	}
}
