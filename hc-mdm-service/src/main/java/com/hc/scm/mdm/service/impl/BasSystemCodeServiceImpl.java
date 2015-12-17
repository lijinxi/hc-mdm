
package com.hc.scm.mdm.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.DateUtil;
import com.hc.scm.mdm.dao.dal.BasSystemCodeDao;
import com.hc.scm.mdm.dao.entity.BasBillType;
import com.hc.scm.mdm.dao.entity.BasCodeRuleDtl;
import com.hc.scm.mdm.service.BasSystemCodeService;



import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
/**
 * Description: 
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      tan.bin
 * Createdate:  2015-4-1下午2:03:34
 */
@Service("basSystemCodeService")
class BasSystemCodeServiceImpl extends BaseCrudServiceImpl implements BasSystemCodeService {

	 @Resource
	 private BasSystemCodeDao  basSystemCodeDao;	
	 
	 @Override
	 public BaseCrudDao init() {
		// TODO Auto-generated method stub
		return basSystemCodeDao;
	 }
	 
	 /*
	  * 获取字段值
	  */
	 public String getfieldvalue(String filelValue,Integer cut_begin_position,
		 Integer cut_end_position,Integer char_length,String ParmValue){
		 
		 String newFileValeu="";
		 if(JSON.parseObject(ParmValue).keySet().contains(filelValue)){
			 
			 newFileValeu=JSON.parseObject(ParmValue).getString(filelValue);//字段值
			 newFileValeu=newFileValeu.substring(cut_begin_position-1,cut_end_position);//截取
			 if(newFileValeu.length()!=char_length){//截取长度必须等于设置字符
				 newFileValeu="";
			 }
		 }
		 return newFileValeu;
	 }
	 /*
	  * 获取流水号
	  */
	 public String getSerial(Integer codeRuleId,Integer current_serial_no,Integer reset_mode,
			 String pad_char,Integer char_length,Date current_serial_date){
		 
		 Integer newCurrent_Serial_no=1;//新流水号
		 String  newSerial_no="";
		 
		 Date new_Serial_date = DateUtil.getCurrentDateTime();//新流水时间
		 
		 if(reset_mode==0){//永不重置
			 newCurrent_Serial_no=current_serial_no+1;
		 }
		 
		 if(reset_mode==1){//按天重置
			 if(DateUtil.diffDate(new_Serial_date,current_serial_date)>0){
				 newCurrent_Serial_no=1;
			 }else{
				 newCurrent_Serial_no=current_serial_no+1;
			 }
		 }
		 
		 if(reset_mode==2){//按月重置

			//先判当前年
			 if(DateUtil.getYear(new_Serial_date)-DateUtil.getYear(current_serial_date)>0){
				 
				 newCurrent_Serial_no=1;//直接重置
				 
			 }else{
				 
				 if(DateUtil.getMonth(new_Serial_date)-DateUtil.getMonth(current_serial_date)>0){
					 newCurrent_Serial_no=1;
				 }else{
					 newCurrent_Serial_no=current_serial_no+1;
				 }
			 }
			
		 }
		 
		 if(reset_mode==3){//按年重置
			 if(DateUtil.getYear(new_Serial_date)-DateUtil.getYear(current_serial_date)>0){
				 newCurrent_Serial_no=1;
			 }else{
				 newCurrent_Serial_no=current_serial_no+1;
			 }
		 }
		 
		//计算需要补位
		 if(char_length>=newCurrent_Serial_no.toString().length()){
			 //需要补的位数
			 for(int i=0;i<char_length-newCurrent_Serial_no.toString().length();i++){
				 newSerial_no+=pad_char;
			 }
			 newSerial_no += newCurrent_Serial_no.toString();
		 }
		 
		 //将流水和流水日期更新至数据库
		 BasCodeRuleDtl codeRuleDtl = new BasCodeRuleDtl();
		 codeRuleDtl.setCodeRuleId(codeRuleId);
		 codeRuleDtl.setCurrentSerialDate(new_Serial_date);
		 codeRuleDtl.setCurrentSerialNo(newCurrent_Serial_no);
		 
		 basSystemCodeDao.modifyById(codeRuleDtl);
		 return newSerial_no;
	 }
	 
	 
	 @Override
	 @Transactional(propagation = Propagation.REQUIRED,rollbackFor=Exception.class)
	 public String getSystemSheetid (Map<String,Object> parmMpa)
			 throws ServiceException{
		 
		 String billTypeNo = parmMpa.get("billtypeNo").toString();//单据类别
		 String detial	   = parmMpa.get("detail").toString();//字段集合
		 
		 List<BasCodeRuleDtl> list=basSystemCodeDao.selectBasCodeRuleDtlList(billTypeNo);	 
		 Integer code_rule_id;//主键
		 
		 Integer code_type=1;//编码类型
		 Integer char_length=0;//字符
		 Integer code_begin_position=0;//开始位置
		 Integer code_end_position=0;//结束位置
		 Integer cut_begin_position=1;//字符开始位置
		 Integer cut_end_position=1;//字符结束位置
		 String const_value="";//常量值
		 String date_format_value="yyyyMMdd";//日期格式化
		 String field_value="";//字段值
		 Date current_serial_date=new Date();//当前流水号日期
		 Integer current_serial_no=1;//当前流水号
		 Integer reset_mode=0;//流水号重置方式
		 String pad_char="0";//补位符
		 
		 String SheetCode="";//生成的单据编码
		 int endposition=0;//记录结束位置
		 for(BasCodeRuleDtl bascode : list){
			 code_type=bascode.getCodeType();
			 const_value=bascode.getConstValue();
			 field_value=bascode.getFieldValue();
			 char_length=bascode.getCharLength();
			 code_begin_position=bascode.getCodeBeginPosition();

			 cut_begin_position=bascode.getCutBeginPosition();
			 cut_end_position=bascode.getCutEndPosition();
			 
			 current_serial_date =bascode.getCurrentSerialDate();
			 current_serial_no=bascode.getCurrentSerialNo();
			 reset_mode=bascode.getResetMode();
			 pad_char=bascode.getPadChar();
			 code_rule_id=bascode.getCodeRuleId();
			 
			 
			 //第n个编码位置{
			 if(code_begin_position==endposition+1){//取常量
				 
				 if(code_type==1){
					 if(char_length==const_value.length()){
						 SheetCode+=const_value;
					 }
				 }if(code_type==2){//取日期
					 
					 SheetCode+=DateUtil.formatDateByFormat(new Date(),bascode.getDateFormatValue()).substring(0, char_length); 
					 
				 }if(code_type==3){//取字段
					 
					 if(null !=detial && !"".equals(detial) && !"".equals(field_value.trim())){
						 SheetCode+=getfieldvalue(field_value,cut_begin_position,
								  cut_end_position,char_length,detial);
					 }

				 }if(code_type==4){//取流水
					 
					 SheetCode+=getSerial(code_rule_id,current_serial_no,reset_mode,pad_char,char_length,current_serial_date);
				 }
				 endposition=bascode.getCodeEndPosition();//记录结束位置
			 }
			 /*
			 //第n个编码位置
			int c2=endposition+1;
			if(code_begin_position==c2){//取常量
			 
			 if(code_type==1){
				 if(char_length==const_value.length()){
					 SheetCode+=const_value;
				 }
			 }if(code_type==2){//取日期
				 
				 SheetCode+=DateUtil.formatDateByFormat(new Date(),bascode.getDateFormatValue()); 
				 
			 }if(code_type==3){//取字段
					 
					//SheetCode+=field_value.substring(cut_begin_position-1, cut_end_position);
				 }
			 if(code_type==4){//取流水
				 SheetCode+=getSerial(code_rule_id,current_serial_no,reset_mode,pad_char,char_length,current_serial_date);
			 }
				endposition=bascode.getCodeEndPosition();//记录结束位置
				continue; 
			}
			*/
		 }
		 return SheetCode;
	 }

	@Override
	public String getSystemSheetid(String billtypeNo) {
		// TODO Auto-generated method stub
		Map<String,Object> parmMpa = new HashMap<String,Object>();
		parmMpa.put("billtypeNo", billtypeNo);
		parmMpa.put("detail", "");
		return getSystemSheetid(parmMpa);
	}
	 


}
