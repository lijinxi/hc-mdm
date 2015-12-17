/**
 * Description: BOM单据物料清单表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbomlist.BillBomList', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.billbomlist',
	requires: [
	   	'Hc_mdm.model.BillBom',
		'Hc_mdm.model.BillBomList',
		'Hc_mdm.view.billbomlist.BillBomListController',
		'Hc_mdm.view.billbomlist.BillBomListModel',
		'Hc_mdm.model.BillBomListSize'
	],
	controller: 'billbomlist',
	viewModel: {
		type: 'billbomlist'
	},

	customLayout2: true,
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			billItems: [
					
					{xtype : 'extcombox',fieldLabel : '维护类型',name : 'maintainType',reference:"maintainType",displayvalue : "1=修改:2=用途转换:3=状态变更:4=品牌转换",bind:{value:'{billRow.maintainType}'}},
					{
						 xtype:'searchhelpfield',
						 fieldLabel : '物料编号',
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
						},{
							  dataIndex:'sizeTypeNo',
							  text:'码组',
							  flex:0.3
						}],
						bind:{value:'{billRow.materialNo}'},
						searchItems:[
										{
											fieldLabel : '物料编码',
										    name:'materialCode',
										    flex:0.5
										 }
						             ],
						isAutoLoad:false,
						otherFields:"materialCode,materialName,sizeTypeNo",
						url:Hc.mdmPath + 'bas_material/list.json'
					},
					{xtype : 'textfield',fieldLabel : '物料编码',name : 'materialCode',reference:"materialCode",bind:{value:'{billRow.materialCode}'}},
					{xtype : 'textfield',fieldLabel : '物料名称',name : 'materialName',reference:"materialName",bind:{value:'{billRow.materialName}'}},
					{xtype : 'textfield',fieldLabel : '码组',reference: 'sizeTypeNo',name : 'sizeTypeNo',editable:false,bind:{value:'{billRow.sizeTypeNo}'}},
					{xtype : 'extcombox',fieldLabel : '原BOM用途',name : 'oldBomPurpose',reference:"oldBomPurpose",displayvalue : "S2=开发:STD=标准",bind:{value:'{billRow.oldBomPurpose}'}},
					{xtype : 'extcombox',fieldLabel : '新BOM用途',name : 'newBomPurpose',reference:"newBomPurpose",displayvalue : "STD=标准:SUB=委外:SPD=预测",bind:{value:'{billRow.newBomPurpose}'}},
					{
						xtype : 'extcombox',
						fieldLabel : '原品牌',
						name:"oldBrandNo",
						displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
						displaymember:'brandCname',
						valuemember:'brandNo',
						reference: 'oldBrandNo',
						bind:{value:'{billRow.oldBrandNo}'}
					},
					{
						xtype : 'extcombox',
						fieldLabel : '新品牌',
						name:"newBrandNo",
						displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
						displaymember:'brandCname',
						valuemember:'brandNo',
						reference: 'newBrandNo',
						bind:{value:'{billRow.newBrandNo}'}
					},
					{xtype : 'extcombox',fieldLabel : 'BOM状态',name:"bomStatus",displayvalue : "0=编辑:1=审核:2=生效",reference: 'bomStatus',bind:{value:'{billRow.bomStatus}'}},
					{xtype : 'textfield',fieldLabel : '版本号',reference: 'versionNo',name : 'versionNo',editable:false,bind:{value:'{billRow.versionNo}'}},
					{
						xtype : 'textfield',
						fieldLabel : '备注',
						name:"remarks",
						reference: 'remarks',
						//colspan : 4,
						//width:960,
						bind:{value:'{billRow.remarks}'},
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入字母或数字',
						maxLength:60,
						enforceMaxLength:true
					}
			],
			billLoadUrl: Hc.mdmPath + 'bill_bom/list.json',
			billSaveUrl: Hc.mdmPath + 'bill_bom/saveSizeHorizontalData.json',
			//billSaveUrl: Hc.mdmPath + 'bill_bom/saveMasterCustomerList.json',
			billAuditUrl:Hc.mdmPath + 'bill_bom/audit.json',
			billExportUrl:Hc.mdmPath + 'bill_bom/do_export.json',
			billModel: 'Hc_mdm.model.BillBom',
			billSubGrid:['mastergrid','grid1'],
            gridUnionKey:"billNo,orderNo",
            
			gridColumns: [	  
				{dataIndex: 'billNo', text: '单据号',hidden:true},
				{dataIndex: 'lineId', text: '行id', hidden:true},
				{
					dataIndex: 'orderNo', 
					text: '序号', 
					editor: {
						allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入正数、负数、小数
						regexText:'请输入正数'
					}
				},
				{
					dataIndex: 'brandNo', 
					text: '品牌',
					xtype:"bllookupedit",
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo',
					editor: {
						allowBlank: false
					}
				},
				{dataIndex: 'parentOrderNo', text: '上层序号',hidden:true},
				{
					dataIndex: 'materialNo', 
					text: '物料编号',
					editor:{
						xtype:'searchhelpfield',
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
						},{
							  dataIndex:'sizeTypeNo',
							  text:'码组',
							  flex:0.3
						}],
						searchItems:[
										{
											fieldLabel : '物料编码',
										    name:'materialCode',
										    flex:0.5
										 }
						             ],
						isAutoLoad:false,
						otherFields:"materialCode,materialName,sizeTypeNo",
						url:Hc.mdmPath + 'bas_material/list.json',
						allowBlank: false
					}
				},
				{dataIndex: 'materialCode',text : '物料编码'},
				{dataIndex: 'materialName',text : '物料名称'},
				{dataIndex: 'sizeTypeNo',text:"码组"},
				//{dataIndex: 'materialNo', text: '物料编号', editor: {allowBlank: false}},
				{
					dataIndex: 'bomPurpose', 
					text: 'BOM用途', 
					editor: {
						allowBlank: false
					},
					xtype : "bllookupedit",
					displayvalue : "S2=开发:STD=标准:SUB=委外:SPD=预测"
				},
				{
					dataIndex: 'dosageNumerator', 
					text: '用量(分子)', 
					editor: {
						allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入正数、负数、小数
						regexText:'请输入正数'
					}
				},
				{
					dataIndex: 'dosageDenominator', 
					text: '用量(分母)', 
					editor: {
						allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入正数、负数、小数
						regexText:'请输入正数'
					}
				},
				{
					dataIndex: 'pdTypeNo', 
					text: '用途',
					xtype:'bllookupedit',
     			   	displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=pd_type_no',
     			   	displaymember:'itemName',
     			   	valuemember:'itemCode',
					editor: {
						allowBlank: false
					}
				},
				{
					dataIndex: 'storeNo', 
					text: '预设仓库',
					editor: {
						allowBlank: false
					}
				},
				{
					dataIndex: 'isVirtual', 
					text: '是否虚拟件', 
					editor: {
						allowBlank: false
					},
					xtype : "bllookupedit",
					displayvalue : "0=否:1=是"
				},
				{
					dataIndex: 'updateFlag', 
					text: '修改标识',
					readOnly:true,
					xtype : "bllookupedit",
					displayvalue : "0=否:1=是"
				}
			],
			gridPrimaryKey: 'billNo',
			gridModel: 'Hc_mdm.model.BillBomList',
			gridLoadUrl: Hc.mdmPath + 'bill_bom_list/list.json',
			gridHasMark:false,
		   	gridHasCreator:false,
		   	gridHasModifier:false,
		   	gridHasAuditor:false,
		   	gridHasOrderNo:false,
		   	
			grid1Columns:[
			              {dataIndex: 'billNo', text: '单据号'},
			              {dataIndex: 'orderNo', text: '物料序号'},
			              {dataIndex: 'sizeTypeNo', text: '表头码组'},
			              {dataIndex: 'materialNo', text: '物料编号'},
			              {dataIndex: 'materialCode', text: '物料编码'},
			              {dataIndex: 'materialName', text: '物料名称'},
			              {dataIndex: 'newSizeTypeNo', text: '物料码组'}
			       		],
		   	grid1Model: 'Hc_mdm.model.BillBomListSize',
		   	grid1PrimaryKey:'orderNo',
		   	grid1Title:"",
		   	grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1SizeInputType:"string",
		   	grid1MConvertSize:1,
		   	grid1LoadUrl: Hc.mdmPath + 'bill_bom_list/listSizeVo.json?selectVoName=SelectListByVoBillBomListSize',
		   	grid1MSizeIdx:8
		});

		me.items = [me.billtoolbar];
        me.items.push(me.billPanel);
        me.items.push(me.toolbar);
        var treepanel={ 
					xtype: 'treepanel',
					region: 'west',
					split: true,
					reference: 'menutree',
					itemId: 'menutree',
					width: 250,
					batchUrl:Hc.mdmPath+'bill_bom/listsave.json',
					lines: true,
					rootVisible: false,
					columns: [{
					    xtype: 'treecolumn',
					    flex: 1,
					    dataIndex: 'materialCode',
					    text: "物料编码",
					    width: 130
					},{
						dataIndex: 'materialName',
						text: "物料名称",
						width: 120
					}],
					store:{
						model:'Hc_mdm.model.BillBomList',
					type:'treebase',
					autoLoad:false,
					rootVisible: false,
					proxy: {
					    type: 'ajax',
					    url:  Hc.mdmPath+'bill_bom_list/list.json'
					},
					root: {
						text: 'root',
						orderNo: 0,
						materialNo: -1,
					    leaf: false,
					    expanded: false
					},
					nodeParam:'orderNo',
					parentIdProperty:'parentOrderNo'
					},
					listeners: {
						'afteritemexpand': 'onAfterItemExpand',
						"selectionchange": "onTreeSelectionChange",
					}
				};
        
        var h=me.controller.getBodyHeight(0.4);
        var con1={
    		xtype:"panel",
    		height:h,
    		region:"north",
    		layout:'border',
    		items:[me.grid],
    		split:true,
    		border:false
        };

        var con2={
    		xtype:"panel",
    		region:"center",
    		layout:'border',
    		items:[me.grid1],
    		border:false
        };
        
        var panelchild={
    		xtype: "panel",
            region: 'center',
            layout:'border',
            items:[con1,con2],
            border:false
        };

        var panel = {
            xtype: "panel",
            region: 'center',
            layout:'border',
            items:[treepanel,panelchild],
            border:false
        };
        me.items.push(panel);
        me.items.push(me.statusPanel);
		this.callParent();
	}
});
