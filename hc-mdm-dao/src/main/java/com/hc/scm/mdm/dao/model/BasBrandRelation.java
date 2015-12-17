package com.hc.scm.mdm.dao.model;

import java.io.Serializable;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;
import com.hc.scm.common.model.BaseModel;

/**
 * Description: 品牌与事业部
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     tanbin
 * @date:  2015-04-16
 * @version 1.0.0
 */
public class BasBrandRelation extends BaseModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
	public static void main(String[] args) {
		
		//System.out.println(generatorSimpleMapperXML(new BasBrandRelation(),null));
		//自定义的vo查询
		System.out.println(generatorSimpleMapperXML(new BasBrandRelation(),"SelectListByVoBasBrandRelation"));
	}
	
	private String brandNo;
	private String brandCname;
	public String getBrandCname() {
		return brandCname;
	}
	public void setBrandCname(String brandCname) {
		this.brandCname = brandCname;
	}

	private String divisionNo;
	private String divisionName;
	/*
	 * 品牌编号
	 */
	public String getBrandNo() {
		return brandNo;
	}
	public void setBrandNo(String brandNo) {
		this.brandNo = brandNo;
	}

	
	/*
	 * 事业部编号
	 */
	public String getDivisionNo() {
		return divisionNo;
	}
	public void setDivisionNo(String divisionNo) {
		this.divisionNo = divisionNo;
	}
	/*
	 * 事业部名称
	 */
	public String getDivisionName() {
		return divisionName;
	}
	public void setDivisionName(String divisionName) {
		this.divisionName = divisionName;
	}


}
