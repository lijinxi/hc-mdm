package com.hc.scm.mdm.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-05-08 09:34:20
 * @version 1.0.0
 */
public class LogDictDtl extends BasDictDtl{
	 /**
     * 日志流水号
     */
    private Integer logId;
    
    /**
     * 日志属性(a=新增 u=修改 d=删除)
     */
    private String logAttribute;

    /**
     * 日志时间(第一个timestamp会自动赋默认值)
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date logTime;

    /**
     * 日志记录人
     */
    private String logUser;

	public String getLogAttribute() {
		return logAttribute;
	}

	public void setLogAttribute(String logAttribute) {
		this.logAttribute = logAttribute;
	}

	public Date getLogTime() {
		return logTime;
	}

	public void setLogTime(Date logTime) {
		this.logTime = logTime;
	}

	public String getLogUser() {
		return logUser;
	}

	public void setLogUser(String logUser) {
		this.logUser = logUser;
	}

	public Integer getLogId() {
		return logId;
	}

	public void setLogId(Integer logId) {
		this.logId = logId;
	}
}