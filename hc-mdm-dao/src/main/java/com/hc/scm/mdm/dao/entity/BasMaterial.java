package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
public class BasMaterial {
    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 物料编码
     */
    private String materialCode;

    /**
     * 国际条码
     */
    private String barcodeEan;

    /**
     * 物料名称
     */
    private String materialName;

    /**
     * 规格型号
     */
    private String specifications;

    /**
     * 旧物料编码(旧系统编码或者重新编号的情况)
     */
    private String oldCode;

    /**
     * 存货类别(取数据字典 inventory_category)
     */
    private String inventoryCategory;

    /**
     * 物料属性(数据字典)
     */
    private String materialSource;

    /**
     * 税率编号(数据字典)
     */
    private String taxRateNo;

    /**
     * 税分类(取数据字典 tax_category)
     */
    private String taxCategory;

    /**
     * 码组(取bas_size_type)
     */
    private String sizeTypeNo;

    /**
     * 允许销售(0=否 1=是)
     */
    private Byte allowSale;

    /**
     * 允许委外(0=否 1=是)
     */
    private Byte allowDelegate;

    /**
     * 允许采购(0=否 1=是)
     */
    private Byte allowPurchase;

    /**
     * 允许生产(0=否 1=是)
     */
    private Byte allowProduce;

    /**
     * 物料状态(0=模版 1=释放)
     */
    private Byte materialStatus;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Byte enableFlag;

    /**
     * 编码规则(取bas_code_rule)
     */
    private String codeRuleNo;

    /**
     * 参考单价
     */
    private String advicePrice;

    /**
     * 币别编号(取bas_currency表)
     */
    private String currencyNo;

    /**
     * 年季(取数据字典 season_no )
     */
    private String seasonNo;

    /**
     * 小类(取categroy到小类)
     */
    private String categoryNo;

    /**
     * 型体
     */
    private String modelNo;

    /**
     * 款号
     */
    private String styleNo;

    /**
     * 客户产品货号
     */
    private String productCode;

    /**
     * 制造商
     */
    private String manufacturer;

    /**
     * 品牌编号(取bas_brand)
     */
    private String brandNo;

    /**
     * 开发次数
     */
    private Byte developmentTimes;

    /**
     * 衬里/内垫-外底(对应 outer_bottom )
     */
    private String outerBottom;

    /**
     * 风格
     */
    private String style;

    /**
     * 销售渠道(销售类型 0=零售 1=电商)
     */
    private Byte salesChannels;

    /**
     * 帮面材料
     */
    private String vampMaterial;

    /**
     * 颜色(取bas_color)
     */
    private String colorNo;

    /**
     * 男/女鞋(F=女 M=男)
     */
    private String genderType;

    /**
     * 系列(数据字典  )
     */
    private String series;

    /**
     * 是否参加订货会(0=否 1=是)
     */
    private Byte joinOrderMetting;

    /**
     * 材质类别(数据字典)
     */
    private String textures;

    /**
     * 基本单位(取bas_unit表)
     */
    private String normalUnit;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 物料类型(0=成品/半成品 1=原料)
     */
    private Integer materialType;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 最后修改人
     */
    private String modifier;

    /**
     * 最后修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;
    
    private Integer ifQc;
    
    
    /**********************************************************/
    /**********************************************************/
    private String parentCategoryNo;
    
    public String getParentCategoryNo() {
        return parentCategoryNo;
    }
    
    public void setParentCategoryNo(String parentCategoryNo) {
        this.parentCategoryNo = parentCategoryNo;
    }
    
    
    private String specialCode;
    
    public String getSpecialCode() {
        return specialCode;
    }
    
    public void setSpecialCode(String specialCode) {
        this.specialCode = specialCode;
    }
    
    
    private String lining;
    
    public String getLining() {
        return lining;
    }
    
    public void setLining(String lining) {
        this.lining = lining;
    }
    
    private String insoles;
    
    public String getInsoles() {
        return insoles;
    }
    
    public void setInsoles(String insoles) {
        this.insoles = insoles;
    }
    
    private String purchaseUnit;
    
    public String getPurchaseUnit() {
        return purchaseUnit;
    }
    
    public void setPurchaseUnit(String purchaseUnit) {
        this.purchaseUnit = purchaseUnit;
    }
    
    
    private String purchaseGroup;
    
    public String getPurchaseGroup() {
        return purchaseGroup;
    }
    
    public void setPurchaseGroup(String purchaseGroup) {
        this.purchaseGroup = purchaseGroup;
    }
    
    private String supplyCategoryNo;
    
    public String getSupplyCategoryNo() {
        return supplyCategoryNo;
    }
    
    public void setSupplyCategoryNo(String supplyCategoryNo) {
        this.supplyCategoryNo = supplyCategoryNo;
    }
    
    

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bas_material.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bas_material.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #materialCode}
     *
     * @return the value of bas_material.material_code
     */
    public String getMaterialCode() {
        return materialCode;
    }

    /**
     * 
     * {@linkplain #materialCode}
     * @param materialCode the value for bas_material.material_code
     */
    public void setMaterialCode(String materialCode) {
        this.materialCode = materialCode;
    }

    /**
     * 
     * {@linkplain #barcodeEan}
     *
     * @return the value of bas_material.barcode_ean
     */
    public String getBarcodeEan() {
        return barcodeEan;
    }

    /**
     * 
     * {@linkplain #barcodeEan}
     * @param barcodeEan the value for bas_material.barcode_ean
     */
    public void setBarcodeEan(String barcodeEan) {
        this.barcodeEan = barcodeEan;
    }

    /**
     * 
     * {@linkplain #materialName}
     *
     * @return the value of bas_material.material_name
     */
    public String getMaterialName() {
        return materialName;
    }

    /**
     * 
     * {@linkplain #materialName}
     * @param materialName the value for bas_material.material_name
     */
    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    /**
     * 
     * {@linkplain #specifications}
     *
     * @return the value of bas_material.specifications
     */
    public String getSpecifications() {
        return specifications;
    }

    /**
     * 
     * {@linkplain #specifications}
     * @param specifications the value for bas_material.specifications
     */
    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }

    /**
     * 
     * {@linkplain #oldCode}
     *
     * @return the value of bas_material.old_code
     */
    public String getOldCode() {
        return oldCode;
    }

    /**
     * 
     * {@linkplain #oldCode}
     * @param oldCode the value for bas_material.old_code
     */
    public void setOldCode(String oldCode) {
        this.oldCode = oldCode;
    }

    /**
     * 
     * {@linkplain #inventoryCategory}
     *
     * @return the value of bas_material.inventory_category
     */
    public String getInventoryCategory() {
        return inventoryCategory;
    }

    /**
     * 
     * {@linkplain #inventoryCategory}
     * @param inventoryCategory the value for bas_material.inventory_category
     */
    public void setInventoryCategory(String inventoryCategory) {
        this.inventoryCategory = inventoryCategory;
    }

    /**
     * 
     * {@linkplain #materialSource}
     *
     * @return the value of bas_material.material_source
     */
    public String getMaterialSource() {
        return materialSource;
    }

    /**
     * 
     * {@linkplain #materialSource}
     * @param materialSource the value for bas_material.material_source
     */
    public void setMaterialSource(String materialSource) {
        this.materialSource = materialSource;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     *
     * @return the value of bas_material.tax_rate_no
     */
    public String getTaxRateNo() {
        return taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxRateNo}
     * @param taxRateNo the value for bas_material.tax_rate_no
     */
    public void setTaxRateNo(String taxRateNo) {
        this.taxRateNo = taxRateNo;
    }

    /**
     * 
     * {@linkplain #taxCategory}
     *
     * @return the value of bas_material.tax_category
     */
    public String getTaxCategory() {
        return taxCategory;
    }

    /**
     * 
     * {@linkplain #taxCategory}
     * @param taxCategory the value for bas_material.tax_category
     */
    public void setTaxCategory(String taxCategory) {
        this.taxCategory = taxCategory;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bas_material.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bas_material.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #allowSale}
     *
     * @return the value of bas_material.allow_sale
     */
    public Byte getAllowSale() {
        return allowSale;
    }

    /**
     * 
     * {@linkplain #allowSale}
     * @param allowSale the value for bas_material.allow_sale
     */
    public void setAllowSale(Byte allowSale) {
        this.allowSale = allowSale;
    }

    /**
     * 
     * {@linkplain #allowDelegate}
     *
     * @return the value of bas_material.allow_delegate
     */
    public Byte getAllowDelegate() {
        return allowDelegate;
    }

    /**
     * 
     * {@linkplain #allowDelegate}
     * @param allowDelegate the value for bas_material.allow_delegate
     */
    public void setAllowDelegate(Byte allowDelegate) {
        this.allowDelegate = allowDelegate;
    }

    /**
     * 
     * {@linkplain #allowPurchase}
     *
     * @return the value of bas_material.allow_purchase
     */
    public Byte getAllowPurchase() {
        return allowPurchase;
    }

    /**
     * 
     * {@linkplain #allowPurchase}
     * @param allowPurchase the value for bas_material.allow_purchase
     */
    public void setAllowPurchase(Byte allowPurchase) {
        this.allowPurchase = allowPurchase;
    }

    /**
     * 
     * {@linkplain #allowProduce}
     *
     * @return the value of bas_material.allow_produce
     */
    public Byte getAllowProduce() {
        return allowProduce;
    }

    /**
     * 
     * {@linkplain #allowProduce}
     * @param allowProduce the value for bas_material.allow_produce
     */
    public void setAllowProduce(Byte allowProduce) {
        this.allowProduce = allowProduce;
    }

    /**
     * 
     * {@linkplain #materialStatus}
     *
     * @return the value of bas_material.material_status
     */
    public Byte getMaterialStatus() {
        return materialStatus;
    }

    /**
     * 
     * {@linkplain #materialStatus}
     * @param materialStatus the value for bas_material.material_status
     */
    public void setMaterialStatus(Byte materialStatus) {
        this.materialStatus = materialStatus;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_material.enable_flag
     */
    public Byte getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_material.enable_flag
     */
    public void setEnableFlag(Byte enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     *
     * @return the value of bas_material.code_rule_no
     */
    public String getCodeRuleNo() {
        return codeRuleNo;
    }

    /**
     * 
     * {@linkplain #codeRuleNo}
     * @param codeRuleNo the value for bas_material.code_rule_no
     */
    public void setCodeRuleNo(String codeRuleNo) {
        this.codeRuleNo = codeRuleNo;
    }

    /**
     * 
     * {@linkplain #advicePrice}
     *
     * @return the value of bas_material.advice_price
     */
    public String getAdvicePrice() {
        return advicePrice;
    }

    /**
     * 
     * {@linkplain #advicePrice}
     * @param advicePrice the value for bas_material.advice_price
     */
    public void setAdvicePrice(String advicePrice) {
        this.advicePrice = advicePrice;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of bas_material.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for bas_material.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #seasonNo}
     *
     * @return the value of bas_material.season_no
     */
    public String getSeasonNo() {
        return seasonNo;
    }

    /**
     * 
     * {@linkplain #seasonNo}
     * @param seasonNo the value for bas_material.season_no
     */
    public void setSeasonNo(String seasonNo) {
        this.seasonNo = seasonNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     *
     * @return the value of bas_material.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for bas_material.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     *
     * @return the value of bas_material.model_no
     */
    public String getModelNo() {
        return modelNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     * @param modelNo the value for bas_material.model_no
     */
    public void setModelNo(String modelNo) {
        this.modelNo = modelNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     *
     * @return the value of bas_material.style_no
     */
    public String getStyleNo() {
        return styleNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     * @param styleNo the value for bas_material.style_no
     */
    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    /**
     * 
     * {@linkplain #productCode}
     *
     * @return the value of bas_material.product_code
     */
    public String getProductCode() {
        return productCode;
    }

    /**
     * 
     * {@linkplain #productCode}
     * @param productCode the value for bas_material.product_code
     */
    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    /**
     * 
     * {@linkplain #manufacturer}
     *
     * @return the value of bas_material.manufacturer
     */
    public String getManufacturer() {
        return manufacturer;
    }

    /**
     * 
     * {@linkplain #manufacturer}
     * @param manufacturer the value for bas_material.manufacturer
     */
    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bas_material.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bas_material.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #developmentTimes}
     *
     * @return the value of bas_material.development_times
     */
    public Byte getDevelopmentTimes() {
        return developmentTimes;
    }

    /**
     * 
     * {@linkplain #developmentTimes}
     * @param developmentTimes the value for bas_material.development_times
     */
    public void setDevelopmentTimes(Byte developmentTimes) {
        this.developmentTimes = developmentTimes;
    }

    /**
     * 
     * {@linkplain #outerBottom}
     *
     * @return the value of bas_material.outer_bottom
     */
    public String getOuterBottom() {
        return outerBottom;
    }

    /**
     * 
     * {@linkplain #outerBottom}
     * @param outerBottom the value for bas_material.outer_bottom
     */
    public void setOuterBottom(String outerBottom) {
        this.outerBottom = outerBottom;
    }

    /**
     * 
     * {@linkplain #style}
     *
     * @return the value of bas_material.style
     */
    public String getStyle() {
        return style;
    }

    /**
     * 
     * {@linkplain #style}
     * @param style the value for bas_material.style
     */
    public void setStyle(String style) {
        this.style = style;
    }

    /**
     * 
     * {@linkplain #salesChannels}
     *
     * @return the value of bas_material.sales_channels
     */
    public Byte getSalesChannels() {
        return salesChannels;
    }

    /**
     * 
     * {@linkplain #salesChannels}
     * @param salesChannels the value for bas_material.sales_channels
     */
    public void setSalesChannels(Byte salesChannels) {
        this.salesChannels = salesChannels;
    }

    /**
     * 
     * {@linkplain #vampMaterial}
     *
     * @return the value of bas_material.vamp_material
     */
    public String getVampMaterial() {
        return vampMaterial;
    }

    /**
     * 
     * {@linkplain #vampMaterial}
     * @param vampMaterial the value for bas_material.vamp_material
     */
    public void setVampMaterial(String vampMaterial) {
        this.vampMaterial = vampMaterial;
    }

    /**
     * 
     * {@linkplain #colorNo}
     *
     * @return the value of bas_material.color_no
     */
    public String getColorNo() {
        return colorNo;
    }

    /**
     * 
     * {@linkplain #colorNo}
     * @param colorNo the value for bas_material.color_no
     */
    public void setColorNo(String colorNo) {
        this.colorNo = colorNo;
    }

    /**
     * 
     * {@linkplain #genderType}
     *
     * @return the value of bas_material.gender_type
     */
    public String getGenderType() {
        return genderType;
    }

    /**
     * 
     * {@linkplain #genderType}
     * @param genderType the value for bas_material.gender_type
     */
    public void setGenderType(String genderType) {
        this.genderType = genderType;
    }

    /**
     * 
     * {@linkplain #series}
     *
     * @return the value of bas_material.series
     */
    public String getSeries() {
        return series;
    }

    /**
     * 
     * {@linkplain #series}
     * @param series the value for bas_material.series
     */
    public void setSeries(String series) {
        this.series = series;
    }

    /**
     * 
     * {@linkplain #joinOrderMetting}
     *
     * @return the value of bas_material.join_order_metting
     */
    public Byte getJoinOrderMetting() {
        return joinOrderMetting;
    }

    /**
     * 
     * {@linkplain #joinOrderMetting}
     * @param joinOrderMetting the value for bas_material.join_order_metting
     */
    public void setJoinOrderMetting(Byte joinOrderMetting) {
        this.joinOrderMetting = joinOrderMetting;
    }

    /**
     * 
     * {@linkplain #textures}
     *
     * @return the value of bas_material.textures
     */
    public String getTextures() {
        return textures;
    }

    /**
     * 
     * {@linkplain #textures}
     * @param textures the value for bas_material.textures
     */
    public void setTextures(String textures) {
        this.textures = textures;
    }

    /**
     * 
     * {@linkplain #normalUnit}
     *
     * @return the value of bas_material.normal_unit
     */
    public String getNormalUnit() {
        return normalUnit;
    }

    /**
     * 
     * {@linkplain #normalUnit}
     * @param normalUnit the value for bas_material.normal_unit
     */
    public void setNormalUnit(String normalUnit) {
        this.normalUnit = normalUnit;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_material.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_material.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #materialType}
     *
     * @return the value of bas_material.material_type
     */
    public Integer getMaterialType() {
        return materialType;
    }

    /**
     * 
     * {@linkplain #materialType}
     * @param materialType the value for bas_material.material_type
     */
    public void setMaterialType(Integer materialType) {
        this.materialType = materialType;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_material.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_material.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_material.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_material.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_material.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_material.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_material.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_material.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_material.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_material.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

	public Integer getIfQc() {
		return ifQc;
	}

	public void setIfQc(Integer ifQc) {
		this.ifQc = ifQc;
	}
    
}