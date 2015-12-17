/**
 * Description: 编码规则配置表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascoderule.BasCodeRuleController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.bascoderule',
    init:function(){
        var me = this,
            objList= me.getObjList();
        me.callParent(arguments);
        //objList.grid1.on('beforeedit','onGrid1BeforeEdit',me);
    },
  //新增事件
    initAddData: function (newObj) {
    	var me = this;
    	me.callParent(arguments);
		newObj.data.codeType = 1;
		newObj.data.enableFlag = 1;
    },
    onGrid1BeforeEdit:function(editor, obj)
    {
    	//增加编辑前控制
		if(obj.field == 'constValue') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '1') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'dateFormatValue') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '2') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'fieldValue') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '3') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'currentSerialDate') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '4') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'currentSerialNo') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '4') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'resetMode') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '4') { 
				return true; 
			}
			else{
				return false;
			}
		}
    },
    onGrid1AfterEdit:function(editor, obj)
    {
    	if(obj.field == 'codeBeginPosition') {
			var record = obj.record;
			var codeBeginPosition = record.get('codeBeginPosition');
			var codeEndPosition = record.get('codeEndPosition');
			var charLength=codeEndPosition-codeBeginPosition+1;
			record.set("charLength",charLength);
		}
		if(obj.field == 'codeEndPosition') {
			var record = obj.record;
			var codeBeginPosition = record.get('codeBeginPosition');
			var codeEndPosition = record.get('codeEndPosition');
			var charLength=codeEndPosition-codeBeginPosition+1;
			if (charLength<0){
				Hc.alert("结束位置不能小于开始位置!");
				console.dir(obj);
			}else{
				record.set("charLength",charLength);
			}
		}
    }
  });