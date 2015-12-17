/**
 * Description: BOM单据物料清单表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbomlist.BillBomListController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.billbomlist',
    selectNode:null,
    myMask:null,
    init:function(){
        var me = this,objList= me.getObjList();
        me.callParent(arguments);
        me.setInit(me);
        //维护类型
        var maintainType=me.lookupReference('maintainType');
        maintainType.on("change",me.onChangeMaintainType,me);
    },
    setInit:function(me){
    	 if (me.view.billNo!=null&&me.view.billNo!=""){
         	me.setBomHeadReadOnly(me,true);
         }
     	//BOM状态
         var bomStatus=me.lookupReference('bomStatus');
         bomStatus.setDisabled(true);
         
         var versionNo=me.lookupReference('versionNo');
         versionNo.setDisabled(true);
         
         var materialCode=me.lookupReference('materialCode');
         materialCode.setDisabled(true);
         
         var materialName=me.lookupReference('materialName');
         materialName.setDisabled(true);
         
         var sizeTypeNo=me.lookupReference('sizeTypeNo');
         sizeTypeNo.setDisabled(true);
         
         //新品牌
         var newBrandNo=me.lookupReference('newBrandNo');
         newBrandNo.setDisabled(true);
         if (me.newbrandno==null){
         	newBrandNo.setValue(null);
         }

         //新BOM用途
         var newBomPurpose=this.lookupReference('newBomPurpose');
         newBomPurpose.setDisabled(true);
         if (me.newbompurpose==null){
         	newBomPurpose.setValue(null);
         }
    },
    setBtnStatus:function(me){
        var objlist= me.getObjList();
    	var maintainType=me.getConValue("maintainType");
    	if (maintainType=="1"){
    		objlist.btnDelete.setDisabled(false);
    	}else{
    		objlist.btnDelete.setDisabled(true);
    	}
    },
    /**网格选择中时，控制按钮可用状态、控制从表加载、给viewModel绑定数据*/
    gridSelectionChange: function (sender, e) {
        this.callParent(arguments);
        this.setBtnStatus(this);
    },
    /*更改单据页面控件状态*/
    setPageStatus:function(objlist) {
    	this.callParent(arguments);
    	this.setBtnStatus(this);
    },
    /**网格数据更新事件，控制按钮可用状态、更新网络编辑状态、更新页面编辑对象列表*/
    gridDataChanged: function (store, grid) {
    	this.callParent(arguments);
    	this.setBtnStatus(this);
    },
    onChangeBomStatus:function(me, newValue, oldValue, eOpts){
    	var form=this;
    	var objlist= form.getObjList();
    	var maintainType=form.getConValue("maintainType");

    	if (maintainType=="1"){
    		if (newValue=="1"){
    			objlist.btnAdd.setDisabled(true);
    			objlist.btnDelete.setDisabled(true);
    			objlist.btnOther1.setDisabled(true);
    			objlist.btnOther2.setDisabled(true);
    			objlist.btnBillSave.setDisabled(true);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);

    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);

    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);
    	        
	        	newBrandNo.setValue(null);
	        	newBomPurpose.setValue(null);
    		}
    		else{
    			objlist.btnAdd.setDisabled(false);
    			objlist.btnDelete.setDisabled(false);
    			objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(false);
    			objlist.btnBillSave.setDisabled(false);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);
    	        
    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);
    	        
    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);
    	        
    	        newBrandNo.setValue(null);
    	        newBomPurpose.setValue(null);
    		}
    	}
    	else if(maintainType=="2"){
    		objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(false);
	        
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        newBrandNo.setValue(null);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
	        
		}else if(maintainType=="4"){
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(false);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        newBomPurpose.setValue(null);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
		}else{
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
			//新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
	        
	        newBrandNo.setValue(null);
	        newBomPurpose.setValue(null);
		}
    },
    onChangeMaintainType:function(me, newValue, oldValue, eOpts){
    	var form=this;
    	var objlist= form.getObjList();
    	
    	if (form.view.billNo!=null&&form.view.billNo!=""){
    		if (newValue!="1"){
    			objlist.btnAdd.setDisabled(true);
    			objlist.btnDelete.setDisabled(true);
    			objlist.btnOther1.setDisabled(true);
    			objlist.btnOther2.setDisabled(true);
    			objlist.btnBillSave.setDisabled(true);
    		}else{
    			objlist.btnAdd.setDisabled(false);
    			objlist.btnDelete.setDisabled(false);
    			//objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(false);
    			objlist.btnBillSave.setDisabled(false);
    		}
        	return;
        }

    	var bomStatus=form.getConValue("bomStatus");
    	if (newValue=="1"){
    		if (bomStatus=="1"){
    			objlist.btnAdd.setDisabled(true);
    			objlist.btnDelete.setDisabled(true);
    			objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(true);
    			objlist.btnBillSave.setDisabled(true);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);

    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);
    	        
    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);
    	        
    	        newBrandNo.setValue(null);
    	        newBomPurpose.setValue(null);
    		}
    		else{
    			objlist.btnAdd.setDisabled(false);
    			objlist.btnDelete.setDisabled(false);
    			objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(false);
    			objlist.btnBillSave.setDisabled(false);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);
    	        
    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);
    	        
    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);

	        	newBrandNo.setValue(null);
	        	newBomPurpose.setValue(null);
    		}
    	}
    	else if(newValue=="2"){
    		objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(false);
	        
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        newBrandNo.setValue(null);

	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);

		}else if(newValue=="4"){
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(false);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        newBomPurpose.setValue(null);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
		}else{
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
			//新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
	        
	        newBrandNo.setValue(null);
	        newBomPurpose.setValue(null);
		}
    },
    onCheckMaterialNo:function(obj, event, eOpts){
    	var materialNo=obj.getValue().trim();
    	var me =this;
    	me.myMask = new Ext.LoadMask({
    	    msg    : "正在查询物料["+materialNo+"]是否存在...",
    	    target : me.getView()
    	});
    	me.myMask.show();
    	Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkMaterial.json',    //请求地址    
    		     //提交参数组       
    		     params: {       
    		    	 materialNo:materialNo             
    		     }, 
    		     //成功时回调       
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	me.myMask.hide();
    		    	var result=response.responseText;
    		    	if (result=="0"){
    		    		Hc.alert("物料编码:["+materialNo+"]不存在!");
    		    		obj.setValue("");
    		    	}
    		    }       
    		});
    },
    onBtnSaveClick: function (btn) {
    	this.callParent(arguments);
    	var me=this;
		var form = me.getObj('commonbill')
		var con=Hc.getField(form, "billNo");
    	me.view.billNo=con.getValue();
    },
    onBindData:function(billNo){
    	var me=this;
    	this.callParent(arguments);
    	if (billNo!=""){
        	var store=this.lookupReference('menutree').store;
        	store.proxy.extraParams['billNo'] = billNo;
        	store.root.data.expanded = true;
        	store.load({
			    scope: this,
			    callback: function(records, operation, success) {
			    	if (this.selectNode!=null){
				    	var tree = this.lookupReference('menutree');
				    	tree.expandNode(this.selectNode);
						tree.getSelectionModel().select(this.selectNode);
			    	}
			    }
			});
    	}else{
        	var form = me.getObj('commonbill')
    		var con=Hc.getField(form, "billNo");
        	con.setValue("");
        	var maintainType = this.lookupReference("maintainType");
        	maintainType.setValue(1);
        	var tree = this.lookupReference('menutree');
        	var root=tree.getRootNode();
        	root.removeAll();
        	me.setNewBillStatus(me);
    	}
    },
    //新增事件
    initAddData: function (newObj) {
    	this.callParent(arguments);
		var me = this,tree = me.lookupReference('menutree');
		var obj = me.workObject;
		if (!tree.selection) {
			Hc.alert("请先选择一个成品或半成品再增加！");
			return false;
		}
		if (obj.viewModelKey=="mastergrid"){
			var orderNo = tree.selection.data.orderNo;
			var billNo= tree.selection.data.billNo;
			var brandNo=tree.selection.data.brandNo;
			var bomPurpose=tree.selection.data.bomPurpose;
			newObj.data.parentOrderNo = orderNo;
			newObj.data.brandNo = brandNo;
			newObj.data.bomPurpose = bomPurpose;
			newObj.data.billNo = billNo;
			newObj.data.orderNo=-1;
		}
    }, 
    onGrid1BeforeLoad:function(store,opt){
    	if(this.callParent(arguments)===false)return false;
    	
    	if (this.lookupReference('menutree').store.getCount()==0) return false;
    	if (this.selectNode==null) return false;
    	//if (this.lookupReference('menutree').getSelection().length==0) return false;
    },
    onGridBeforeLoad:function(store,opt){
    	if(this.callParent(arguments)===false)return false;
    	
    	if (this.lookupReference('menutree').store.getCount()==0) return false;
    	if (this.selectNode==null) return false;
    	//if (this.lookupReference('menutree').getSelection().length==0) return false;
    },
	setCommonToobar:function(objlist) {
		if (!objlist || objlist.length < 1)return;
        objlist.btnSearch.setVisible(false);
        objlist.btnExport.setVisible(false);
        objlist.btnPrint.setVisible(false);
        objlist.btnOther.setVisible(false);
        objlist.btnSave.setVisible(false);
        
        objlist.btnAdd.setVisible(true);
        objlist.btnAdd.setText('增加物料');
        objlist.btnAdd.setDisabled(true);
        
        objlist.btnDelete.setText('删除物料/替代表');
        objlist.btnDelete.setVisible(true);
        objlist.btnDelete.setDisabled(true);
        
		objlist.btnOther1.setVisible(true);
		objlist.btnOther1.setText('引入BOM');
		objlist.btnOther1.setDisabled(true);
		
		objlist.btnOther2.setVisible(true);
		objlist.btnOther2.setText('增加半成品BOM');
		objlist.btnOther2.setDisabled(true);
		
		objlist.btnOther3.setVisible(true);
		objlist.btnOther3.setText('生成替代表');
		objlist.btnOther3.setDisabled(false);

        for (var i = 3; i < 7; i ++) {
            var sp = objlist['commontoolsp'+i];
            if (sp) {
                sp.setVisible(false);
            }
        }
    },
    onBtnBillNewClick:function(btn){
    	this.callParent(arguments);
    	var me=this;

    },
    //新单时控制哪些可以输入
    setNewBillStatus:function(me){
    	var materialNo = me.lookupReference("materialNo");
    	var maintainType = me.lookupReference("maintainType");
    	var oldBomPurpose = me.lookupReference("oldBomPurpose");
    	var oldBrandNo = me.lookupReference("oldBrandNo");
    	var remarks=me.lookupReference("remarks");
    	
    	materialNo.setDisabled(false);
    	maintainType.setDisabled(false);
    	oldBomPurpose.setDisabled(false);
    	oldBrandNo.setDisabled(false);
    	remarks.setDisabled(false);
    },
    //保存前把保存状态置为更新
    beforeSave: function (data) {
    	this.callParent(arguments);
    	if (data.operateType=="inserted"){
    		data.operateType="updated";
    	}
    	return true;
    },
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},
    onBtnOther1:function(btn){
    	this.callParent(arguments);
    	var me = this;
    	if (!this.getBillItems("materialNo","","请选择物料编码")){
    		return;
    	}
    	if (!this.getBillItems("oldBomPurpose",null,"请选择老BOM用途")){
    		return;
    	}
    	if (!this.getBillItems("oldBrandNo",null,"请选择老品牌")){
    		return;
    	}
    	if (!this.getBillItems("maintainType",null,"请选择维护类型")){
    		return;
    	}
    	
    	var materialNo=this.getConValue("materialNo");
    	var maintainType=this.getConValue("maintainType");
    	var bomStatus=this.getConValue("bomStatus");
    	var newBomPurpose=this.getConValue("newBomPurpose");
    	var newBrandNo=this.getConValue("newBrandNo");
    	var oldBomPurpose=this.getConValue("oldBomPurpose");
    	var oldBrandNo=this.getConValue("oldBrandNo");
    	var oldBomPurposeText=this.getConText("oldBomPurpose");
    	var oldBrandNoText=this.getConText("oldBrandNo");

    	me.myMask = new Ext.LoadMask({
    	    msg    : "正在校验物料["+materialNo+"]BOM数据",
    	    target : me.getView()
    	});
    	me.myMask.show();

		Ext.Ajax.request({            
  		     url: Hc.mdmPath+'bill_bom_list/checkImportBillBom.json',    //请求地址    
  		     //提交参数组       
  		     params: {
  		    	 maintainType:maintainType, 
  		    	 oldBrandNo:oldBrandNo, 
  		    	 materialNo:materialNo, 
  		    	 oldBomPurpose:oldBomPurpose, 
  		    	 newBomPurpose:newBomPurpose, 
  		    	 newBrandNo:newBrandNo
  		     },
  		     //成功时回调       
  		     success: function(response, options) {       
  		        //获取响应的字符串
  		    	me.myMask.hide();
  		    	var result=response.responseText;
  		    	if (result!=""){
  		    		Hc.alert(result);
  					return false;
  		    	}
  		    	Hc.confirm('是否确定引入['+materialNo+"]BOM清单,引入后不能修改BOM头信息!",function(yn){
  		            if(yn=='no') {
  		                return;
  		            }else{
  		            	me.setBomHeadReadOnly(me,true);
  		                var menuTree = me.lookupReference('menutree');
  		                me.myMask = new Ext.LoadMask({
  		            	    msg    : "正在引入["+materialNo+"]BOM清单...",
  		            	    target : me.getView()
  		            	});
  		            	me.myMask.show();
  		                me.loadTreeStore(menuTree);
  		            }
  		        });
  		     } 
		});
    },
    setBomHeadReadOnly:function(me,bol){
    	var objlist= me.getObjList();
    	var materialNo = me.lookupReference("materialNo");
    	var maintainType = me.lookupReference("maintainType");
    	var oldBomPurpose = me.lookupReference("oldBomPurpose");
    	var oldBrandNo = me.lookupReference("oldBrandNo");
    	var newBomPurpose = me.lookupReference("newBomPurpose");
    	var newBrandNo = me.lookupReference("newBrandNo");
    	var remarks=me.lookupReference("remarks");
    	
    	materialNo.setDisabled(bol);
    	maintainType.setDisabled(bol);
    	oldBomPurpose.setDisabled(bol);
    	oldBrandNo.setDisabled(bol);
    	newBomPurpose.setDisabled(bol);
    	newBrandNo.setDisabled(bol);
    	remarks.setDisabled(bol);
    	objlist.btnOther1.setDisabled(bol);
    },
    onBtnOther2:function(btn){
    	this.callParent(arguments);
    	var me = this,
        tree = me.lookupReference('menutree');
		
		if (!tree.selection) {
			Hc.alert("请先选择一个成品或半成品再增加！");
			return false;
		}
		
		var win=Ext.create('Ext.window.Window', {
		    title: '请输入半成品编码',
		    height: 150,
		    width: 400,
		    layout: 'form',
		    modal:true,
		    defaultType:"textfield",  
		    labelWidth:55,
		    resizable:false,
		    items:[{
		    	xtype:'form',
		    	layout: 'form',
			    items:[{
			    	id:"materialNo1111",
					xtype:'searchhelpfield',
					fieldLabel : '半成品编码号',
					name:'materialNo',
					reference: 'materialNo',
					gridColumns:[{
					   dataIndex:'materialNo',
					   text:'物料编号',
					   flex:0.3
					},{
					   dataIndex:'materialCode',
					   text:'物料编码',
					   flex:0.3
					},{
					   dataIndex:'materialName',
					   text:'物料名称',
					   flex:0.3
					}],
					allowBlank:false,
					searchItems:[
									{
										fieldLabel : '半成品编号',
									    name:'materialNo',
									    flex:0.5
									 }
					             ],
					isAutoLoad:false,
					url:Hc.mdmPath + 'bas_material/list.json'
				},{
			    	xtype : 'extcombox',
			    	displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo',
			    	fieldLabel:"品牌",
			    	id:"brandNo",
			    	name:"brandNo",
			    	reference: 'brandNo',
	                allowBlank:false
			    }]
		    }],
		    buttons:[{
				text : '确定',  
				handler : function(btn){
					if(!(btn.up('window').down('form').isValid())) return;
					var materialNo=btn.up('window').down('form').getComponent("materialNo1111").getValue();
					var brandNo=btn.up('window').down('form').getComponent("brandNo").getValue();
					me.onImportComponent(materialNo,brandNo,me,win);
				}
		    },{
		    	text : '取消',
		    	handler : function(){  
					win.close();  
				}
		    }],
		    listeners: {
		    	show: function (me,eOpts ) {
		        }
		    }
		});
		win.show();
    },
    //引入半成品
    onImportComponent:function(materialNo,brandNo,me,obj){
    	me.myMask = new Ext.LoadMask({
    	    msg    : "正在查询半成品["+materialNo+"]是否存在...",
    	    target : obj
    	});
    	me.myMask.show();
    	Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkMaterial.json',    //请求地址    
    		     //提交参数组       
    		     params: {       
    		    	 materialNo:materialNo             
    		     }, 
    		     //成功时回调       
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	var result=response.responseText;
    		    	if (result=="0"){
    		    		Hc.alert("半成品编码:["+materialNo+"]不存在!");
    		    		me.myMask.hide();
    		    		return false;
    		    	}
    		    	else{
    		        	var materialNov=materialNo;
    		        	var oldBomPurpose=me.getConValue("oldBomPurpose");
    		        	var billNo=me.view.billNo;;
    		        	var tree = me.lookupReference('menutree');
    		    		var orderNo = tree.selection.data.orderNo;
    		    		var maintainType=me.getConValue("maintainType");
    		        	var newBomPurpose=me.getConValue("newBomPurpose");
    		        	var newBrandNo=me.getConValue("newBrandNo");
    		    		
    		        	Ext.Ajax.request({            
    		     		     url: Hc.mdmPath+'bill_bom_list/checkImportBillBom.json',    //请求地址    
    		     		     //提交参数组       
    		     		     params: {
    		     		    	 maintainType:maintainType, 
    		     		    	 oldBrandNo:brandNo, 
    		     		    	 materialNo:materialNo, 
    		     		    	 oldBomPurpose:oldBomPurpose, 
    		     		    	 newBomPurpose:newBomPurpose, 
    		     		    	 newBrandNo:newBrandNo,
    		     		    	 billNo:billNo,
    		     		    	 orderNo:orderNo
    		     		     },
    		     		     //成功时回调       
    		     		     success: function(response, options) {       
    		     		        //获取响应的字符串
    		     		    	me.myMask.hide();
    		     		    	var result=response.responseText;
    		     		    	if (result!=""){
    		     		    		Hc.alert(result);
    		     					return false;
    		     		    	}
    		     		    	var importStore = Ext.create('Hc_Common.store.Base', {
    	    		        		fields: ["billNo", "orderNo","materialNo"],
    	    		        	     proxy: {
    	    		        	         url: Hc.mdmPath+'bill_bom_list/importBillBom.json'
    	    		        	     }
    	    		        	});
    	    		        	importStore.proxy.extraParams['materialNo'] = materialNov;
    	    		        	importStore.proxy.extraParams['oldBomPurpose'] = oldBomPurpose;
    	    		        	importStore.proxy.extraParams['maintainType'] = maintainType;
    	    		        	importStore.proxy.extraParams['billNo'] = billNo;
    	    		        	importStore.proxy.extraParams['orderNo'] = orderNo;
    	    		        	importStore.proxy.extraParams['oldBrandNo'] = brandNo;
    	    		        	
    	    		        	importStore.load({
    	    		    		    scope: this,
    	    		    		    callback: function(records, operation, success) {
    	    		    		    	if (records.length>0)
    	    		    		    	{
    	    		    		    		var store=tree.store;
    	    		    		    		store.proxy.extraParams['billNo'] = billNo;
    	    		    		    		me.view.billNo=billNo;
    	    		    		    		tree.store.root.data.expanded = true;
    	    		    		    		store.load({
    	    		    		    			scope: this,
    	    		    		    		    callback: function(records, operation, success) {
    	    		    		    		    	me.myMask.hide();
    	    		    		    		    	obj.close();
    	    		    		    		    }
    	    		    		    		});
    	    		    		    	}else{
    	    		    		    		me.myMask.hide();
    	    		    		    		return false;
    	    		    		    	}
    	    		    		    }
    	    		        	});
    		     		     } 
    		        	});
    		    	}
    		    }       
    		});
    },
    /**设置物料只能编辑可用的尺码*/
    sizeFieldBeforeEdit: function (grid, e) {
        var uselist = grid._uselist;
        if (grid.mSizeIdx == -1)return;
        var fields = [];
        for (var i = 1; i < 21; i++) {
            fields.push('f' + i);
        }
        if (fields.indexOf(e.field) == -1)return;
        var materialNo = e.record.get('materialNo');
        if (Ext.isEmpty(materialNo)) return false;

        var usesize = Ext.Array.findBy(uselist, function (item) {
            return item.materialNo == materialNo;
        });
    },
    /**尺码横排处理grid表头*/
    setGridSizeCols: function (grid, store) {
        var sIdx = grid.mSizeIdx;
        if (sIdx == -1) return;
        var me = this,
            head = Hc.clone(grid._headlist),
            gc = Hc.clone(grid.vcolumn),
            i, j, tmpHead, field;
        var edit={
    		xtype : 'extcombox',
    		displaymember:'sizeCode',
			valuemember:'sizeCode',
    		displayvalue : Hc.mdmPath+"bas_size/listAll.json"
        };
        for (i = 1; i < 21; i++) {
            field = 'f' + i;
            if (!Ext.Array.findBy(head, function (item) {
                    return item[field] != '0'
                })) {
                for (j = 0; j < head.length; j++) {
                    tmpHead = head[j];
                    delete tmpHead[field];
                }
            }
        }
        if (head.length == 0) {
            grid.reconfigure(store, gc);
            me.gridHeadCls(grid);
            return;
        }

        try {
            var sizeCols = [],
                mSizeCol = gc[sIdx],
                uselist = grid._uselist || [];
            var  getcol = function (_field, _text, _column) {
                    _text = _text == '0' ? '&nbsp;' : (_text || '&nbsp;');
                    if (_column) {
                        return {
                            text: _text,
                            columns: [_column]
                        }
                    }
                    return {
                        dataIndex: _field,
                        text: _text,
                        width: 50,
                        editor: edit,
                        renderer: function (val, obj, record) {
                            if (Ext.Array.findBy(uselist, function (item) {
                                    return item.materialNo == record.get('materialNo') && (item[_field] != '0')
                                })) {
                                obj.tdCls = 'x-grid-input-cell';
                            }
                            return val == 0 ? '' : val;
                        }
                    }
                };

            if (head.length == 1) {
                tmpHead = head[0];
                for (i = 1; i < 21; i++) {
                    field = 'f' + i;
                    if (!tmpHead[field]) continue;
                    sizeCols.push(getcol(field, tmpHead[field]));
                }
            } else {
                var tmp;
                for (i = 1; i < 21; i++) {
                    tmp = {};
                    field = 'f' + i;
                    for (j = 0; j < head.length; j++) {
                        tmpHead = head[j];
                        if (!tmpHead[field]) continue;
                        if (j == 0) {
                            tmp = getcol(field, tmpHead[field]);
                        } else {
                            tmp = getcol(field, tmpHead[field], tmp);
                        }
                    }
                    if (Ext.Object.isEmpty(tmp)) continue;
                    sizeCols.push(tmp);
                }
            }
            Ext.Array.insert(gc, sIdx, sizeCols);
            Ext.Array.remove(gc, mSizeCol);
            grid.reconfigure(store, gc);
            me.gridHeadCls(grid);
        } catch (e) {
            Hc.alert('创建物料的尺码表头时出错');
        }
    },    
    /*审核单据*/
    onBtnBillAuditClick: function (btn) {
        var me = this;
        this.callParent(arguments);
    },
    onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();
        if (!objs) return;
		var store = objs.mastergrid.store;
		var storesize=objs.grid1.store;
		var selLength=sm.selected.items.length;
		if (selLength==1) {
			this.selectNode=sm.selected.items[0];
			var billNo=sm.selected.items[0].data.billNo;
			var orderNo=sm.selected.items[0].data.orderNo;
			store.proxy.extraParams.billNo = billNo;
			store.proxy.extraParams.orderNo = orderNo;
			store.load();
			
			storesize.proxy.extraParams.billNo = billNo;
			storesize.proxy.extraParams.orderNo = orderNo;
			storesize.load();
		}
	},
    //加载BOM下级节点
    loadTreeStore:function(tree){
    	var me = this;
    	var materialNov=this.getConValue("materialNo");
    	var oldBomPurpose=this.getConValue("oldBomPurpose");
    	var oldBrandNo=this.getConValue("oldBrandNo");
    	var maintainType=this.getConValue("maintainType");
    	var newBomPurpose=this.getConValue("newBomPurpose");
    	var newBrandNo=this.getConValue("newBrandNo");

    	var importStore = Ext.create('Hc_Common.store.Base', {
    		fields: ["billNo", "orderNo","materialNo"],
    	     proxy: {
    	         url: Hc.mdmPath+'bill_bom_list/importBillBom.json'
    	     }
    	});
    	importStore.proxy.extraParams['materialNo'] = materialNov;
    	importStore.proxy.extraParams['oldBomPurpose'] = oldBomPurpose;
    	importStore.proxy.extraParams['oldBrandNo'] = oldBrandNo;
    	importStore.proxy.extraParams['maintainType'] = maintainType;
    	importStore.proxy.extraParams['newBomPurpose'] = newBomPurpose;
    	importStore.proxy.extraParams['newBrandNo'] = newBrandNo;
    	
    	importStore.load({
		    scope: this,
		    callback: function(records, operation, success) {
		    	if (records.length>0)
		    	{
		    		var billNo=records[0].data["billNo"];
		    		var bv=records[0].data["bomStatus"];
		    		var vv=records[0].data["versionNo"];
		    		var form = me.getObj('commonbill')
		    		var con=Hc.getField(form, "billNo");
		    		con.setValue(billNo);
		    		var store=tree.store;
		    		store.proxy.extraParams['billNo'] = billNo;
		    		var bomStatus=this.lookupReference('bomStatus');
		    		bomStatus.setValue(bv);

		    		var versionNo=this.lookupReference("versionNo");
		    		versionNo.setValue(vv);
		    		
		    		me.view.billNo=billNo;
		    		tree.store.root.data.expanded = true;
		    		store.load({
		    			scope: this,
		    		    callback: function(records, operation, success) {
		    		    	me.myMask.hide();
		    		    }
		    		});
		    	}
		    	else{
		    		me.myMask.hide();
		    	}
		    }
    	});
    },
    //产生树根节点
    setRootNode:function(tree,matname){
    	var materialNo=this.getConValue(matname);
        var root = {
        	orderNo: 1,
            leaf: false,
            expanded: false,
			materialNo: materialNo
        };
        tree.setRootNode(root);
    },
    getBillItems:function(name,pv,msg){
    	var con = this.lookupReference(name);
		if (con) {
		    var v=con.getValue();
		    if (v==pv){
		    	Hc.alert(msg);
		    	con.focus();
		    	return false;
		    }
		    else{
		    	return true;
		    }
		}
		else{
			return false;
		}
    },
    getConValue:function(name){
    	var con = this.lookupReference(name);
		if (con) {
		    var v=con.getValue();
		    return v;
		}
		else{
			return null;
		}
    },
    getConText:function(name){
    	var con = this.lookupReference(name);
		if (con) {
		    var v=con.rawValue;
		    return v;
		}
		else{
			return null;
		}
    },
	onGrid1BeforeEdit:function(editor, obj){
		if(this.callParent(arguments)===false) return false;
		var me=this;
		if(me.checkFieldName(obj.field)) {
			var store = obj.column.getEditor().store;
			var record = obj.record; //当前尺码行数据
			var sizeTypeNo=record.get("newSizeTypeNo");
			store.proxy.extraParams['sizeTypeNo'] = sizeTypeNo;
			store.load();
    	}
	},
	onGrid1AfterEdit:function(editor, obj){
		if(this.callParent(arguments)===false) return false;
		var me=this;
		if(me.checkFieldName(obj.field)) {
			var record = obj.record; //当前尺码行数据
			var sizeValue=obj.value;
			var fieldName=obj.field;
			if (!me.checkSizeValue(sizeValue,fieldName,record)){
				Hc.alert("输入的尺码值:["+sizeValue+"]已经存在,不能输入!");
				record.set(obj.field,"");
				return false;
			}
    	}
	},
	//校验输入的尺码是否有重复,不重复返回true,重复返回false
	checkSizeValue:function(sizeValue,fieldName,record){
		if (sizeValue==""||sizeValue==null) return true;
		for(var i=1;i<=20;i++){
			var temp="f"+i.toString();
			if (temp==fieldName){
				continue;
			}else{
				var curSizeValue=record.get(temp);
				if (curSizeValue==sizeValue){
					return false;
				}else{
					continue;
				}
			}
		}
		return true;
	},
	checkFieldName:function(fieldname){
		for(var i=1;i<=20;i++){
			var temp="f"+i.toString();
			if (temp==fieldname){
				return true;
			}
		}
		return false;
	},
	onGridBeforeEdit:function(editor, obj){
		if(this.callParent(arguments)===false) return false;
		var me=this;
        var maintainType=me.getConValue("maintainType");
		if (maintainType!="1"){
			return false;
		}
		
        var objs = me.getObjList();
		var storeSize=objs.grid1.store; //尺码表数据
		var record = obj.record; //当前物料行数据
		var orderNo=record.get("orderNo");
    	if(obj.field == 'materialNo' || obj.field == 'orderNo') {
    		var havesize=me.onCheckSize(orderNo,storeSize);
    		if (havesize){
    			Hc.alert("序号:["+orderNo+"]已经生成替代表,请删除替代表在修改物料或者序号!");
				return false;
    		}
    	}
	},
    onGridAfterEdit:function(editor, obj)
    {
    	this.callParent(arguments);
    	var me=this;
		var record = obj.record; //当前物料行数据
		
    	if(obj.field == 'materialNo') {
			var materialNo = record.get('materialNo');
			if (obj.originalValue==materialNo){
				return;
			}
	    	var me =this;
	    	me.myMask = new Ext.LoadMask({
	    	    msg    : "正在查询和校验物料["+materialNo+"]...",
	    	    target : me.getView()
	    	});
	    	me.myMask.show();
	    	Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkMaterial.json',    //请求地址    
    		     //提交参数组
    		     params: {       
    		    	 materialNo:materialNo             
    		     }, 
    		     //成功时回调
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	me.myMask.hide();
    		    	var result=response.responseText;
    		    	if (result=="0"){
    		    		Hc.alert("物料编码:["+materialNo+"]不存在!");
    		    		record.set("materialNo","");
    		    		record.set("materialCode","");
    		    		record.set("materialName","");
    		    		record.set("sizeTypeNo","");
    		    		return;
    		    	}
    		    	else{
    		        	var materialNov=materialNo;
    		        	var oldBomPurpose=me.getConValue("oldBomPurpose");
    		        	var oldBrandNo=me.getConValue("oldBrandNo");
    		        	var billNo=me.view.billNo;
    		        	var tree = me.lookupReference('menutree');
    		    		var orderNo = tree.selection.data.orderNo;
    		    		var maintainType=me.getConValue("maintainType");
    		        	var newBomPurpose=me.getConValue("newBomPurpose");
    		        	var newBrandNo=me.getConValue("newBrandNo");
    		    		
    		        	Ext.Ajax.request({            
    		     		     url: Hc.mdmPath+'bill_bom_list/checkImportBillBom.json',    //请求地址    
    		     		     //提交参数组       
    		     		     params: {
    		     		    	 maintainType:maintainType, 
    		     		    	 oldBrandNo:oldBrandNo, 
    		     		    	 materialNo:materialNo, 
    		     		    	 oldBomPurpose:oldBomPurpose, 
    		     		    	 newBomPurpose:newBomPurpose, 
    		     		    	 newBrandNo:newBrandNo,
    		     		    	 billNo:billNo,
    		     		    	 orderNo:orderNo
    		     		     },
    		     		     //成功时回调       
    		     		     success: function(response, options) {       
    		     		        //获取响应的字符串
    		     		    	me.myMask.hide();
    		     		    	var result=response.responseText;
    		     		    	if (result!=""){
    		     		    		Hc.alert(result);
    		     		    		record.set("materialNo","");
    		     		    		record.set("materialCode","");
    		     		    		record.set("materialName","");
    		     		    		record.set("sizeTypeNo","");
    		     					return false;
    		     		    	}
    		     		     } 
    		        	});
    		    	}
    		    }  
	    	});
		}
    	
    	//输入序号验证
    	if(obj.field == 'orderNo') {
    		
    		var orderNo = record.get('orderNo');
    		if (obj.originalValue==orderNo){
    			return;
    		}
    		var billNo=record.get('billNo');
    		me.myMask = new Ext.LoadMask({
	    	    msg    : "正在查询和校验序号["+orderNo+"]...",
	    	    target : me.getView()
	    	});
    		me.myMask.show();
    		Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkBillOrderNo.json',    //请求地址    
    		     //提交参数组       
    		     params: {
    		    	 billNo:billNo,
    		    	 orderNo:orderNo
    		     },
    		     //成功时回调       
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	me.myMask.hide();
    		    	var result=response.responseText;
    		    	if (result=="1"){
    		    		Hc.alert("该单据序号["+orderNo+"]已经存在或者主成品的序号默认为1,也不能使用!");
    		    		record.set("orderNo",obj.originalValue);
    					return false;
    		    	}
    		     } 
    		});
    	}
    },
    //判断序号有没有替代表
    onCheckSize:function(orderNo,storeSize){
    	var index= storeSize.findExact("orderNo", orderNo);
		if (index>=0) {
			return true;
		}
		else {
			return false;
		}
    },
    //替代表事件
    onBtnOther3:function(btn){
    	this.callParent(arguments);
    	var me=this;
        var objs = me.getObjList();
        if (!objs) return;
        var sizeTypeNo=me.getConValue("sizeTypeNo"); //表头码组
		var storeList = objs.mastergrid.store; //物料表数据
		var storeSize=objs.grid1.store; //尺码表数据
		if (storeList.getCount() < 0) return;
		for (var i = 0; i < storeList.getCount(); i++) 
		{
			var record = storeList.getAt(i);
			var orderNo=record.get("orderNo");
			var newSizeTypeNo=record.get("sizeTypeNo"); //清单码组
			if (newSizeTypeNo==""){
				Hc.alert("序号:["+orderNo+"]的码组为空,不能生成替代表!");
				continue;
			}
			//表头码组和清单码组不一样,加入到尺码表网格
			if (sizeTypeNo!=newSizeTypeNo){
				if (storeSize.getCount()>0){
		    		var index= storeSize.findExact("orderNo", orderNo);
		    		if (index>=0) continue;
		    	}
				me.addListSize(sizeTypeNo,record,storeSize);
			}
		}
    },
    //增加尺码替代表
    addListSize:function(sizeTypeNo,record,storeSize){
		var model = storeSize.model;
		var newObj = model.create({_flag: 'A'});
		newObj.data["billNo"] = record.get("billNo");
		newObj.data["orderNo"] = record.get("orderNo");
		newObj.data["materialNo"] = record.get("materialNo");
		newObj.data["materialCode"] = record.get("materialCode");
		newObj.data["materialName"] = record.get("materialName");
		newObj.data["sizeTypeNo"] = sizeTypeNo; //表头码组
		newObj.data["newSizeTypeNo"] = record.get("sizeTypeNo"); //清单码组
		storeSize.add(newObj);
    },
    //删除物料
    onBtnDeleteClick: function (btn) {
    	var me=this;
    	var obj = this.workObject;
    	
        var objs = me.getObjList();
		var storeList = objs.mastergrid.store; //物料表数据
		var storeSize=objs.grid1.store; //尺码表数据
		
		//删除物料网格
		if (obj.viewModelKey=="mastergrid"){
			items = obj.getSelection(); //选中的物料网格数据
	        if (items.length < 1) {
	        	this.callParent(arguments);
	        	return;
	        }
	        if (storeSize.getCount()<1) {
	        	this.callParent(arguments);
	        	return;
	        }
	        Ext.Array.each(items, function (record) {
	        	var _flag = record.get('_flag');
	        	var orderNo=record.get("orderNo");
	        	
	        	var index= storeSize.findExact("orderNo", orderNo);
	        	if (index>=0) {
	        		var recordSize=storeSize.getAt(index);
		        	
		        	//如果物料是直接新增的，尺码表直接删除
		            if (_flag == 'A') {
		            	storeSize.remove(recordSize);
		            }else{
		            	recordSize.set('_flag', 'D');
		            }
	        	}
	        });
		}
        this.callParent(arguments);
    },
    afterCall:function(txtobj, newdata,record,context) {
    	//alert("aaa");
    },
    //取消修改
    onBtnCancelClick: function (btn) {
    	var me=this;
        var objs = me.getObjList();
		var storeSize=objs.grid1.store; //尺码表数据
		storeSize.rejectChanges();
        this.callParent(arguments);
    },
    //增加物料事件，对替代表无效
    onBtnAddClick: function (btn) {
    	var me=this;
    	var obj = this.workObject;
    	if (obj.viewModelKey=="grid1"){
    		return;
    	}
    	this.callParent(arguments);
    }
  });