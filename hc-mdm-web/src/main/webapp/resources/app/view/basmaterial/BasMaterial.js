/**
 * Description: 物料信息表 bas_material/bas_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmaterial.BasMaterial', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basmaterial',
	requires: [
		'Hc_mdm.model.BasMaterial',
		'Hc_mdm.model.BasMaterialSize',
		'Hc_mdm.view.basmaterial.BasMaterialController',
		'Hc_mdm.view.basmaterial.BasMaterialModel'
	],
	
	controller: 'basmaterial',
	viewModel: {
		type: 'basmaterial'
	},
	
	isAutoLoad : false,
	customLayout1 : true,
	
	initComponent : function() {
		var me = this;
		Ext.apply(me,{
				searchItems: [
					{xtype: 'textfield', fieldLabel: '物料ID', name: 'materialNo'},
					{xtype: 'textfield', fieldLabel: '物料编码', name: 'materialCode'},
					{xtype: 'textfield', fieldLabel: '国际条码', name: 'barcodeEan'},
					{xtype: 'textfield', fieldLabel: '物料名称', name: 'materialName'}
				],
		      	gridColumns: [
		      	    		{dataIndex: 'materialNo', text: '物料ID'},
		      	    		{dataIndex: 'materialCode', text: '物料编码'},
		      	    		{dataIndex: 'barcodeEan', text: '国际条码',hidden:true},
		      	    		{dataIndex: 'materialName', text: '物料名称'},
		      	    		{dataIndex: 'specifications', text: '规格型号',hidden:true},
		      	    		{dataIndex: 'oldCode', text: '旧物料编码',hidden:true},
		      	    		{dataIndex: 'inventoryCategory',reference:'inventoryCategory', text: '存货类别',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
		      	            	displaymember:'itemName',
		      	            	valuemember:'itemCode',hidden:true},
		      	    		{
								dataIndex: 'sizeTypeNo', text: '码组',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_size_type/listAll.json',
		      	    		    displaymember:'sizeTypeName',
		      	    		    valuemember:'sizeTypeNo',readOnly:true
							},
	      					{dataIndex: 'parentCategoryNo', text: '大类',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bill_material_dtl/getParentCategory.json?type=NO',
	      					    displaymember:'categoryName',
	      					    valuemember:'categoryNo',
	      						readOnly:true
							},
	      					{dataIndex: 'categoryNo', text: '小类',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bill_material_dtl/getCategory.json?type=NO',
	      					    displaymember:'categoryName',
	      					    valuemember:'categoryNo',
								readOnly:true
							},
		      	    		{dataIndex: 'materialSource', text: '物料属性',
		      	        		xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=material_source',
		      	    		    displaymember:'itemName',
		      	    		    valuemember:'itemCode',readOnly:true},
		      	    		{
								dataIndex: 'taxRateNo', text: '税率编号',
		      	    	    	xtype:'bllookupedit',
		      	    	    	displayvalue:Hc.mdmPath+'bas_tax_rate/listAll.json',
		      	    			displaymember:'taxRateName',
		      	    			valuemember:'taxRateNo',hidden:true
							},
		      	    		{dataIndex: 'taxCategory', text: '税种',
		      	    			xtype:'bllookupedit',
		      	        		displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
		      	    			displaymember:'taxCategoryName',
		      	    			valuemember:'taxCategoryNo',hidden:true},	      	    		    
		      	    		{dataIndex: 'allowSale', text: '允许销售',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'allowDelegate', text: '允许委外',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'allowPurchase', text: '允许采购',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'allowProduce', text: '允许生产',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'materialStatus', text: '物料状态',xtype:'bllookupedit',displayvalue:"0=模板:1=释放",hidden:true},
		      	    		{dataIndex: 'enableFlag', text: '启用状态',xtype:'bllookupedit',displayvalue:"0=禁用:1=启用",hidden:true},
		      	    		{dataIndex: 'codeRuleNo', text: '编码规则',
		      	    			xtype:'bllookupedit',
		    					displayvalue:Hc.mdmPath+'bas_bill_type/listAll.json',
		    			        displaymember:'billTypeName',
		    			        valuemember:'billTypeNo',
		    			        editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'advicePrice', text: '参考单价',hidden:true},
		      	    		{dataIndex: 'currencyNo', text: '币别编号',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_currency/listAll.json',
		      	    	        displaymember:'currencyName',
		      	    	        valuemember:'currencyNo',hidden:true},
		      	    		{dataIndex: 'seasonNo', text: '年季',
		      	            	xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=season_no',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
	      					{dataIndex: 'modelNo', text: '型体',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bas_model/listAll.json',
	      				        displaymember:'modelName',
	      				        valuemember:'modelNo',
	      						editor: {allowBlank: false},hidden:true},		
	      					{dataIndex: 'styleNo', text: '款号',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bas_style/listAll.json',
	      				        displaymember:'styleName',
	      				        valuemember:'styleNo',
	      						editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'productCode', text: '客户产品货号',hidden:true},
		      	    		{dataIndex: 'manufacturer', text: '制造商',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
		      	    		{dataIndex: 'normalUnit', text: '基本单位',
	      	    	        	xtype:'bllookupedit',
	      	    				displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
	      	    		        displaymember:'unitName',
	      	    		        valuemember:'unitNo',readOnly:true
							},
							{dataIndex: 'materialType', 
								text: '物料类型',
								readOnly:true,
								xtype : "bllookupedit",
								displayvalue : "1=原料:2=半成品:3=成品"
							},
							{dataIndex: 'ifQc', 
								text: '是否质检',
								readOnly:true,
								xtype : "bllookupedit",
								displayvalue : "0=否:1=是"
							},
	      	  				{dataIndex: 'supplyCategoryNo', text: '供货类别',
	      	  					xtype:'bllookupedit',
	      	  					displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
	      	  			        displaymember:'categoryName',
	      	  			        valuemember:'categoryNo',
	      	  					editor: {allowBlank: true},hidden:true},	      	    		        
	      					{
								dataIndex: 'brandNo', text: '品牌',
	      		    			xtype:'bllookupedit',
	      		    			displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
	      					    displaymember:'brandEname',
	      					    valuemember:'brandNo',
	      		    			readOnly:true
							},
	      					{dataIndex: 'specialCode', text: '特征码',readOnly:true},
		      	    		{dataIndex: 'developmentTimes', text: '开发次数',hidden:true},
		    				{dataIndex: 'lining', text: '里料',
		    					xtype:'bllookupedit',
		    					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=lining',
		    			        displaymember:'itemName',
		    			        valuemember:'itemCode',
		    					editor: {allowBlank: true},hidden:true},				
		    				{dataIndex: 'insoles', text: '衬里/内垫',editor: {allowBlank: true},hidden:true},		      	    		
		      	    		{dataIndex: 'outerBottom', text: '外底',hidden:true},
		      	    		{dataIndex: 'style', text: '风格',hidden:true},
		      	    		{dataIndex: 'salesChannels', text: '销售渠道',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
		      	    		{dataIndex: 'vampMaterial', text: '帮面材料',hidden:true},
		      	    		{dataIndex: 'colorNo', text: '颜色',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_color/listAll.json',
		      	    	        displaymember:'colorName',
		      	    	        valuemember:'colorCode',readOnly:true
							},
		      	    		{dataIndex: 'genderType', text: '男/女鞋',xtype:'bllookupedit',displayvalue:"F=女:M=男",hidden:true},
		      	    		{dataIndex: 'series', text: '系列',hidden:true},
		      	    		{dataIndex: 'joinOrderMetting', text: '是否参加订货会',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'textures', text: '材质类别',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=textures',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
	      					{dataIndex: 'purchaseUnit', text: '采购单位',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
	      				        displaymember:'unitName',
	      				        valuemember:'unitNo',
	      						editor: {allowBlank: true},hidden:true},
	      					{dataIndex: 'purchaseGroup', text: '采购组', editor: {allowBlank: true},hidden:true},			      	    	        
		      	    		{dataIndex: 'orderNo', text: '排列序号',hidden:true}
							/*
		      	    		{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'modifier', text: '最后修改人', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'modifyTime', text: '最后修改时间', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'remarks', text: '备注',hidden:true}
		      	    		*/
		      	    	],
		      	    	gridModel: 'Hc_mdm.model.BasMaterial',
		      	    	gridPrimaryKey: 'materialNo',
		      	    	gridSubGrid: ['grid2'],
		      	    	gridSupGrid: '',
		      	    	gridLoadUrl: Hc.mdmPath + 'bas_material/list.json',
		      	    	gridExportUrl: Hc.mdmPath + 'bas_material/do_export.json',
		      	    	
		      	    	grid2Columns: [
		      	    				{dataIndex: 'materialNo', text: '物料ID'},
		      	    				{dataIndex: 'orderNo', text: '排列序号'},
		      	    				{dataIndex: 'sizeNo', text: '尺码编号'}/*,
		      	    				{dataIndex: 'barcode', text: '条码'}*/
		      	    			],
		      	    	grid2SubGrid: [],
		      	    	grid2SupGrid: 'mastergrid',
		      	    	grid2Model: 'Hc_mdm.model.BasMaterialSize',
		      	    	grid2PrimaryKey: '',
		      	    	grid2LoadUrl: Hc.mdmPath + 'bas_material_size/list.json',
		      	    	grid2ExportUrl: Hc.mdmPath + 'bas_material_size/do_export.json'
		
				});

		//基本资料
		var editBasInfo = {
				title : '基本资料',
				xtype : 'container',
				reference: 'editBasInfo',
		    	layout:{type:'table',columns:4},
		    	defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
		    	   
				items : [
					{
						xtype : 'textfield',reference : 'materialNo',fieldLabel : '物料ID',
						bind : {value : '{gridRow.materialNo}'},
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入20位字母或数字',
						maxLength : 20,
						enforceMaxLength : true
					},
					 {
						 xtype : 'textfield',reference : 'materialCode',fieldLabel : '物料编码',
						 bind : {value : '{gridRow.materialCode}'},allowBlank:true,
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入30位字母或数字',
						 maxLength : 30,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'textfield',reference : 'materialName',fieldLabel : '物料名称',
						 bind : {value : '{gridRow.materialName}'},allowBlank:true,
						 maxLength : 60,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'extcombox',reference : 'sizeTypeNo',fieldLabel : '码组',
						 displayvalue:Hc.mdmPath+'bas_size_type/listAll.json',
						 displaymember:'sizeTypeName',
						 valuemember:'sizeTypeNo',
						 bind : {value : '{gridRow.sizeTypeNo}'}
					 },
					 {
						 xtype : 'extcombox',reference:'parentCategoryNo',fieldLabel : '大类',
						 displayvalue:Hc.mdmPath+'bill_material_dtl/getParentCategory.json?type=NO',
						 displaymember:'categoryName',
						 valuemember:'categoryNo',
						 bind : {value : '{gridRow.parentCategoryNo}'},allowBlank:true
					 },
					 {
						 xtype : 'extcombox',reference:'categoryNo',fieldLabel : '小类',
						 displayvalue:Hc.mdmPath+'bill_material_dtl/getCategory.json?type=NO',
						 displaymember:'categoryName',
						 valuemember:'categoryNo',
						 bind : {value : '{gridRow.categoryNo}'},allowBlank:true
					 },
					 {
						 xtype : 'extcombox',reference:'normalUnit',fieldLabel : '基本单位',
						 displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
						 displaymember:'unitName',
						 valuemember:'unitNo',
						 bind : {value : '{gridRow.normalUnit}'}
					 },
					 {
					 	 xtype : 'extcombox',reference:'materialType',fieldLabel : '物料类型',
						 displayvalue:"1=原料:2=半成品:3=成品",
						 bind : {value : '{gridRow.materialType}'}
					 },
					 {
						 xtype : 'extcombox',reference : 'materialSource',fieldLabel : '物料属性',
						 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=material_source',
						 displaymember:'itemName',
						 valuemember:'itemCode',
						 bind : {value : '{gridRow.materialSource}'}
					 },
					 {xtype : 'numberfield',reference:'advicePrice',fieldLabel : '参考单价',bind : {value : '{gridRow.advicePrice}'}},
					 {xtype : 'textfield',reference : 'specifications',fieldLabel : '规格型号',bind : {value : '{gridRow.specifications}'}},
					 {xtype : 'extcombox',reference : 'taxRateNo',fieldLabel : '税率',
						 displayvalue:Hc.mdmPath+'bas_tax_rate/listAll.json',
						 displaymember:'taxRateName',
						 valuemember:'taxRateNo',
						 bind : {value : '{gridRow.taxRateNo}'}},
					 {
						 xtype : 'textfield',reference : 'oldCode',fieldLabel : '旧物料编码',bind : {value : '{gridRow.oldCode}'},
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入30位字母或数字',
						 maxLength : 30,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'textfield',reference : 'barcodeEan',fieldLabel : '国际条码',bind : {value : '{gridRow.barcodeEan}'},
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入20位字母或数字',
						 maxLength : 20,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'extcombox',reference:'currencyNo',fieldLabel : '币别',
						 displayvalue:Hc.mdmPath+'bas_currency/listAll.json',
						 displaymember:'currencyName',
						 valuemember:'currencyNo',
						 bind : {value : '{gridRow.currencyNo}'}},
					 {
					 	 xtype : 'extcombox',reference:'ifQc',fieldLabel : '是否质检',
						 displayvalue:"0=否:1=是",
						 bind : {value : '{gridRow.ifQc}'}
					 },
					 /*{
						 xtype : 'extcombox',reference:'codeRuleNo',fieldLabel : '编码规则',allowBlank:true,
							displayvalue:Hc.mdmPath+'bas_bill_type/listAll.json',
							displaymember:'billTypeName',
							valuemember:'billTypeNo',
						 bind : {value : '{gridRow.codeRuleNo}'}
					 },*/
					 //{name: 'materialStatus',bind:{value:'{gridRow.materialStatus}'},reference : 'materialStatus', xtype: 'extcombox', fieldLabel: '物料状态',displayvalue:"0=模板:1=释放"},
					 {xtype : 'textfield',reference:'remarks',fieldLabel : '备注',bind : {value : '{gridRow.remarks}'},colspan:4},


					 {
						 xtype : 'extcombox',reference : 'inventoryCategory',fieldLabel : '存货类别',
						 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
						 displaymember:'itemName',
						 valuemember:'itemCode',
						 bind : {value : '{gridRow.inventoryCategory}'},hidden:true
					 },
					 {
						 xtype : 'extcombox',reference : 'taxCategory',fieldLabel : '税种',
						 displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
						 displaymember:'taxCategoryName',
						 valuemember:'taxCategoryNo',
						 bind : {value : '{gridRow.taxCategory}'},hidden:true
					 },
					 /*{xtype : 'checkbox',reference:'allowSale',fieldLabel : '允许销售',bind : {value : '{gridRow.allowSale}'}},
					 {xtype : 'checkbox',reference:'allowDelegate',fieldLabel : '允许委外',bind : {value : '{gridRow.allowDelegate}'}},//
					 {xtype : 'checkbox',reference:'allowPurchase',fieldLabel : '允许采购',bind : {value : '{gridRow.allowPurchase}'}},
					 {xtype : 'checkbox',reference:'allowProduce',fieldLabel : '允许生产',bind : {value : '{gridRow.allowProduce}'}},
					 {xtype : 'checkbox',reference:'materialStatus',fieldLabel : '物料状态',bind : {value : '{gridRow.materialStatus}'}},
					 {xtype : 'checkbox',reference:'enableFlag',fieldLabel : '启用状态',bind : {value : '{gridRow.enableFlag}'}},*/
					 {name: 'allowSale',bind:{value:'{gridRow.allowSale}'},reference : 'allowSale', xtype: 'extcombox', fieldLabel: '允许销售',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'allowDelegate',bind:{value:'{gridRow.allowDelegate}'},reference : 'allowDelegate', xtype: 'extcombox', fieldLabel: '允许委外',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'allowPurchase',bind:{value:'{gridRow.allowPurchase}'},reference : 'allowPurchase', xtype: 'extcombox', fieldLabel: '允许采购',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'allowProduce',bind:{value:'{gridRow.allowProduce}'},reference : 'allowProduce', xtype: 'extcombox', fieldLabel: '允许生产',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'enableFlag',bind:{value:'{gridRow.enableFlag}'},reference : 'enableFlag', xtype: 'extcombox', fieldLabel: '启用状态',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {
						 xtype : 'textfield',reference:'productCode',fieldLabel : '客户产品货号',bind : {value : '{gridRow.productCode}'},
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入20位字母或数字',
						 maxLength : 20,
						 enforceMaxLength : true,hidden:true
					 },
					 //{xtype : 'checkbox',reference:'joinOrderMetting',fieldLabel : '是否参加订货会',bind : {value : '{gridRow.joinOrderMetting}'}},
					 {name: 'joinOrderMetting',bind:{value:'{gridRow.joinOrderMetting}'},reference : 'joinOrderMetting', xtype: 'extcombox', fieldLabel: '是否参加订货会',displayvalue:"0=否:1=是",hidden:true},
					 {
						 xtype : 'textfield',reference:'orderNo',fieldLabel : '排列序号',bind : {value : '{gridRow.orderNo}'},
						 maxLength : 11,
						 enforceMaxLength : true,hidden:true
					 }
				]
		};
		editBasInfo.layout.columns = 4;
		
		var editMatInfo1 = {
				title : '原料属性',
				xtype : 'container',
				reference: 'editMatInfo1',
		    	layout:{type:'table',columns:4},
		    	defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
		    	
		    	items : [
					{
						xtype : 'extcombox',reference:'purchaseUnit',fieldLabel : '采购单位',
						 displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
						displaymember:'unitName',
						valuemember:'unitNo',
						 bind : {value : '{gridRow.purchaseUnit}'}},
					 {
						 xtype : 'extcombox',reference:'supplyCategoryNo',fieldLabel : '供货类别',
						 displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
						 displaymember:'categoryName',
						 valuemember:'categoryNo',
						 bind : {value : '{gridRow.supplyCategoryNo}'}},
					{xtype : 'textfield',reference:'purchaseGroup',fieldLabel : '采购组',bind : {value : '{gridRow.purchaseGroup}'}}
				]
		};
		editMatInfo1.layout.columns = 4;
		
		//成品半成品属性
		var editMaterialInfo1 = {
				title : '成品半成品属性',
				xtype : 'container',
				reference: 'editMaterialInfo1',
		    	layout:{type:'table',columns:4},
		    	defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
		    	
		    	items : [
				         {xtype : 'extcombox',reference : 'brandNo',fieldLabel : '品牌',
							 displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
						     displaymember:'brandEname',
						     valuemember:'brandNo',
							 bind : {value : '{gridRow.brandNo}'}},						
						 {xtype : 'textfield',reference:'specialCode',fieldLabel : '特征码',bind : {value : '{gridRow.specialCode}'},hidden:false},
				         {xtype : 'extcombox',reference:'colorNo',fieldLabel : '颜色',
				        	 displayvalue:Hc.mdmPath+'bas_color/listAll.json',
						     displaymember:'colorName',
						     valuemember:'colorCode',
				        	 bind : {value : '{gridRow.colorNo}'}},
				         {xtype : 'extcombox',reference:'seasonNo',fieldLabel : '年季',minChars:1,
			        		 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=season_no',
						     displaymember:'itemName',
						     valuemember:'itemCode',
			        		 bind : {value : '{gridRow.seasonNo}'}}, 
		        		 {xtype : 'extcombox',reference:'modelNo',fieldLabel : '型体',
				        	 displayvalue:Hc.mdmPath+'bas_model/listAll.json',
						     displaymember:'modelName',
						     valuemember:'modelNo',
				        	 bind : {value : '{gridRow.modelNo}'}},							 
				         {xtype : 'extcombox',reference:'styleNo',fieldLabel : '款号',
				        	 displayvalue:Hc.mdmPath+'bas_style/listAll.json',
						     displaymember:'styleName',
						     valuemember:'styleNo',
				        	 bind : {value : '{gridRow.styleNo}'}},
				         {xtype : 'extcombox',reference:'lining',fieldLabel : '里料',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=lining',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.lining}'}},
				         {xtype : 'extcombox',reference:'manufacturer',fieldLabel : '制造商',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.manufacturer}'}},
			        	 {
							 xtype : 'extcombox',reference:'genderType',fieldLabel : '男/女鞋',
							 bind : {value : '{gridRow.genderType}'},displayvalue:"F=女:M=男",allowBlank:true
						 },
				         {xtype : 'textfield',reference:'style',fieldLabel : '风格',bind : {value : '{gridRow.style}'}},
				         {xtype : 'textfield',reference:'series',fieldLabel : '系列',bind : {value : '{gridRow.series}'}},
				         {xtype : 'textfield',reference:'vampMaterial',fieldLabel : '帮面材料',bind : {value : '{gridRow.vampMaterial}'}},
						 {xtype : 'textfield',reference:'insoles',fieldLabel : '衬里/内垫',bind : {value : '{gridRow.insoles}'}},				         
				         {xtype : 'textfield',reference:'outerBottom',fieldLabel : '外底',bind : {value : '{gridRow.outerBottom}'}},
				         {
							 xtype : 'extcombox',reference:'textures',fieldLabel : '材质类别',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=textures',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.textures}'}
						 },
				         {xtype : 'extcombox',reference:'salesChannels',fieldLabel : '销售类型',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.salesChannels}'}
						 },
				         {
							 xtype : 'numberfield',reference:'developmentTimes',fieldLabel : '开发次数',
							 bind : {value : '{gridRow.developmentTimes}'},allowBlank:true
						 }
		    	        ]
		};
		editMaterialInfo1.layout.columns = 4;		
		
		// 自定义基类布局
		var alltabpanel = {
			xtype : "tabpanel",
			reference : 'tabpanel',
			region : 'south',
			height : 200,
			layout: {
				type: 'table',
				columns:4,
				align:'center'
			},
			split : true,
			autoDestroy : true,
			tabPosition : 'top',
			border : false,
			defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
			items : [
				{layout: 'fit', index: 0,border:0,bodyPadding:3,items:[editBasInfo],title:'基本资料'},
				{layout: 'fit', index: 1,border:0,bodyPadding:3,items:[editMatInfo1],title:'原料属性'},
				{layout: 'fit', index: 2,border:0,bodyPadding:3,items:[editMaterialInfo1],title:'成品半成品属性'},
				{layout: 'fit', index: 3,border:0,bodyPadding:3,items:[me.grid2],title:'尺码明细'}
			]
		};

		me.items = [ me.toolbar ];
		if (me.searchItems.length > 0) {
			me.items.push(me.searchPanel);
		}
		me.items.push(me.grid);
		me.items.push(alltabpanel);
		me.items = me.items.concat(me.otherItems);

		me.callParent();
		// console.dir(me.gridItems);
	}
});

