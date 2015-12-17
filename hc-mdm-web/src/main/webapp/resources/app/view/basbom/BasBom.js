/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_size(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbom.BasBom', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basbom',
	requires: [
		'Hc_mdm.model.BasBom',
		'Hc_mdm.model.BasBomListSize',
		'Hc_mdm.view.basbom.BasBomController',
		'Hc_mdm.view.basbom.BasBomModel'
	],
	controller: 'basbom',
	viewModel: {
		type: 'basbom'
	},
	isAutoLoad: false,
	customLayout1: true,
	
	gridHasCreator:false,
	gridHasModifier:false,
	
	
	
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			searchItems:[
			      			{xtype: 'textfield', fieldLabel: '品牌', name: 'brandNo',
			      				xtype : "extcombox",
			      				displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
								displaymember:'brandCname',
								valuemember:'brandNo'
			      			},
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
							{xtype : 'extcombox',fieldLabel : 'BOM用途',name : 'bomPurpose',displayvalue : "S2=开发:STD=标准:SUB=委外:SPD=预测"},
							{xtype : 'extcombox',fieldLabel : 'BOM状态',name:"bomStatus",displayvalue : "0=编辑:1=审核:2=生效",reference: 'bomStatus'}
			      		],
			gridColumns:[
							{dataIndex: 'bomId', text: 'BOMID'},
							{dataIndex: 'materialNo', text: '物料编号'},
							{
								dataIndex: 'brandNo', 
								text: '品牌', 
								xtype:"bllookupedit",
								displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
								displaymember:'brandCname',
								valuemember:'brandNo'
							},
							{dataIndex: 'materialCode', text: '物料编码'},
							{dataIndex: 'materialName', text: '物料名称',width:120},
							{dataIndex: 'bomType', text: 'BOM分类',xtype : "bllookupedit",displayvalue : "1=标准BOM:2=配置BOM"},
							{
								dataIndex: 'bomPurpose', 
								text: 'BOM用途', 
								xtype : "bllookupedit",
								displayvalue : "S2=开发:STD=标准:STD=标准:SUB=委外:SPD=预测"
							},
							{dataIndex: 'versionNo', text: '版本号'},
							{dataIndex: 'bomStatus', text: 'BOM状态',xtype : "bllookupedit",displayvalue : "0=编辑:1=审核:2=生效"},
							{dataIndex: 'modifier',text: '最后修改人', width: 90},
                			{dataIndex: 'modifyTime', text: '最后修改时间',width: 140}
						],
		 	gridModel: 'Hc_mdm.model.BasBom',
		 	gridReadOnly: true,
		 	gridPrimaryKey: 'bomId',
		 	gridIsMaster:false,
			gridLoadUrl : Hc.mdmPath+'bas_bom/list.json',
			gridExportUrl : Hc.mdmPath+'bas_bom/do_export.json',
			gridEditModel: 'none',
				
			grid1Columns:[
			              {dataIndex: 'orderNo', text: '物料序号'},
			              {dataIndex: 'sizeTypeNo', text: '表头码组'},
			              {dataIndex: 'materialNo', text: '物料编号'},
			              {dataIndex: 'materialCode', text: '物料编码'},
			              {dataIndex: 'materialName', text: '物料名称'},
			              {dataIndex: 'newSizeTypeNo', text: '物料码组'}
			       		],
		   	grid1Model: 'Hc_mdm.model.BasBomListSize',
		   	grid1PrimaryKey:'orderNo',
		   	grid1Title:"",
		   	grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1LoadUrl: Hc.mdmPath + 'bas_bom_list/listSizeVo.json?selectVoName=SelectListByVoBasBomListSize',
		   	grid1MSizeIdx:6
		});

		var treepanel={ 
			xtype: 'treepanel',
			split: true,
			region:"west",
			width:500,
			reference: 'menutree',
			itemId: 'menutree',
			lines: true,
			rootVisible: false,
			columns: [
			          	{dataIndex: 'materialNo',width:200,xtype: 'treecolumn', text: '物料编号',anchor: '100%'},
						{dataIndex: 'orderNo', text: '序号'},
						{dataIndex: 'brandNo', text: '品牌'},
						{dataIndex: 'bomPurpose', text: 'BOM用途'},
						{dataIndex: 'dosageNumerator', text: '用量(分子)'},
						{dataIndex: 'dosageDenominator', text: '用量(分母)'},
						{dataIndex: 'pdTypeNo', text: '用途'},
						{dataIndex: 'storeNo', text: '预设仓库'},
						{dataIndex: 'isVirtual', text: '是否虚拟件'}
					],
			store:{
				model:'Hc_mdm.model.BasBomList',
				type:'treebase',
				autoLoad:false,
				rootVisible: false,
				proxy: {
				    type: 'ajax',
				    url:  Hc.mdmPath+'bas_bom_list/getBomList.json'
				},
				root: {
					id:0,
					text: 'root',
					orderNo: 0,
					materialNo: -1,
				    leaf: false,
				    expanded: false
				},
				//nodeParam:'orderNo',
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
        
        var panelchild={
    		xtype: "panel",
            region: 'center',
            layout:'border',
            items:[treepanel,me.grid1],
            border:false
       };

        var panel={
    		xtype: "panel",
            region: 'center',
            layout:'border',
            items:[con1,panelchild],
            border:false
        };
		me.items = [me.toolbar];
		me.items.push(me.searchPanel);
		me.items.push(panel);
		me.callParent();
	}
});
