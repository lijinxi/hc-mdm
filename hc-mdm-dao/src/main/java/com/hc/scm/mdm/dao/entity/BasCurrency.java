package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 币别维护实体
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-10 17:15:25
 * @version 1.0.0
 */
public class BasCurrency {
    /**
     * 币别编号
     */
    private String currencyNo;

    /**
     * 币别名称
     */
    private String currencyName;

    /**
     * 币别符号
     */
    private String currencySymbol;

    /**
     * 是否显示符号(0=否 1=是)
     */
    private Integer isSymbolDisplay;

    /**
     * 显示格式
     */
    private String fomart;

    /**
     * 单价小数位数
     */
    private Integer priceDigits;

    /**
     * 金额小数位数
     */
    private Integer valueDigits;

    /**
     * 启用状态(0=未生效 1=启用)
     */
    private Integer enableFlag;

    /**
     * 排列序号
     */
    private Integer orderNo;

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
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #currencyNo}
     *
     * @return the value of bas_currency.currency_no
     */
    public String getCurrencyNo() {
        return currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyNo}
     * @param currencyNo the value for bas_currency.currency_no
     */
    public void setCurrencyNo(String currencyNo) {
        this.currencyNo = currencyNo;
    }

    /**
     * 
     * {@linkplain #currencyName}
     *
     * @return the value of bas_currency.currency_name
     */
    public String getCurrencyName() {
        return currencyName;
    }

    /**
     * 
     * {@linkplain #currencyName}
     * @param currencyName the value for bas_currency.currency_name
     */
    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    /**
     * 
     * {@linkplain #currencySymbol}
     *
     * @return the value of bas_currency.currency_symbol
     */
    public String getCurrencySymbol() {
        return currencySymbol;
    }

    /**
     * 
     * {@linkplain #currencySymbol}
     * @param currencySymbol the value for bas_currency.currency_symbol
     */
    public void setCurrencySymbol(String currencySymbol) {
        this.currencySymbol = currencySymbol;
    }

    /**
     * 
     * {@linkplain #isSymbolDisplay}
     *
     * @return the value of bas_currency.is_symbol_display
     */
    public Integer getIsSymbolDisplay() {
        return isSymbolDisplay;
    }

    /**
     * 
     * {@linkplain #isSymbolDisplay}
     * @param isSymbolDisplay the value for bas_currency.is_symbol_display
     */
    public void setIsSymbolDisplay(Integer isSymbolDisplay) {
        this.isSymbolDisplay = isSymbolDisplay;
    }

    /**
     * 
     * {@linkplain #fomart}
     *
     * @return the value of bas_currency.fomart
     */
    public String getFomart() {
        return fomart;
    }

    /**
     * 
     * {@linkplain #fomart}
     * @param fomart the value for bas_currency.fomart
     */
    public void setFomart(String fomart) {
        this.fomart = fomart;
    }

    /**
     * 
     * {@linkplain #priceDigits}
     *
     * @return the value of bas_currency.price_digits
     */
    public Integer getPriceDigits() {
        return priceDigits;
    }

    /**
     * 
     * {@linkplain #priceDigits}
     * @param priceDigits the value for bas_currency.price_digits
     */
    public void setPriceDigits(Integer priceDigits) {
        this.priceDigits = priceDigits;
    }

    /**
     * 
     * {@linkplain #valueDigits}
     *
     * @return the value of bas_currency.value_digits
     */
    public Integer getValueDigits() {
        return valueDigits;
    }

    /**
     * 
     * {@linkplain #valueDigits}
     * @param valueDigits the value for bas_currency.value_digits
     */
    public void setValueDigits(Integer valueDigits) {
        this.valueDigits = valueDigits;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of bas_currency.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for bas_currency.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bas_currency.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bas_currency.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bas_currency.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bas_currency.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bas_currency.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bas_currency.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bas_currency.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bas_currency.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bas_currency.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bas_currency.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bas_currency.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bas_currency.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}