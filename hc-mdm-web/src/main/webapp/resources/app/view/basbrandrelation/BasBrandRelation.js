/**
 * Description: 品牌关系表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbrandrelation.BasBrandRelation', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbrandrelation',
	requires: [
	           'Hc_mdm.model.BasBrandRelation',
	           'Hc_mdm.view.basbrandrelation.BasBrandRelationController',
	           'Hc_mdm.view.basbrandrelation.BasBrandRelationModel'
	           ],
	           controller: 'basbrandrelation',
	           viewModel: {
	        	   type: 'basbrandrelation'
	           },
	           initComponent: function () {
	        	   var me= this;

	        	   //添加查询条件
	        	   Ext.apply(me, {
	        		   searchItems: [{
	        			   fieldLabel : '品牌', 
	        			   name : 'brandNo',
	        			   xtype : 'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
	        			   displaymember:'brandCname',
	        			   valuemember:'brandNo'

	        		   },{
	        			   fieldLabel : '事业部',
	        			   name : 'divisionNo',
	        			   xtype:'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_division/listAll.json',
	        			   displaymember:'divisionName',
	        			   valuemember:'divisionNo'

	        		   },{
	        			   fieldLabel : '公司',
	        			   name : 'companyNo',
	        			   xtype:'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_company/listAll.json',
	        			   displaymember:'companyName',
	        			   valuemember:'companyNo'

	        		   }],

	        		   //网格
	        		   gridModel: 'Hc_mdm.model.BasBrandRelation',
	        		   gridColumns: [
	        		                 {
	        		                	 dataIndex : 'brandNo',
	        		                	 text : '品牌',
	        		                	 editor: 
	        		                	 {
	        		                		 allowBlank: false,maxLength:20,enforceMaxLength:true
	        		                	 },
	        		                	 xtype:'bllookupedit',
	        		                	 displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
	        		                	 displaymember:'brandCname',
	        		                	 valuemember:'brandNo'
	        		                 },

	        		                 {
	        		                	 dataIndex : 'divisionNo',
	        		                	 text : '事业部',
	        		                	 editor: 
	        		                	 {
	        		                		 allowBlank: false,maxLength:10,enforceMaxLength:true
	        		                	 },
	        		                	 xtype:'bllookupedit',
	        		                	 displayvalue:Hc.mdmPath+'bas_division/listAll.json',
	        		                	 displaymember:'divisionName',
	        		                	 valuemember:'divisionNo'
	        		                 }, 
	        		                 {
	        		                	 dataIndex : 'companyNo',
	        		                	 text : '公司',
	        		                	 editor: 
	        		                	 {
	        		                		 allowBlank: false,maxLength:10,enforceMaxLength:true
	        		                	 },
	        		                	 width:130,
	        		                	 xtype:'bllookupedit',
	        		                	 displayvalue:Hc.mdmPath+'bas_company/listAll.json',
	        		                	 displaymember:'companyName',
	        		                	 valuemember:'companyNo'
	        		                 },
	        		                 {dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield'}},
	        		                 /*{dataIndex: 'remarks', text: '备注', editor: {maxLength:60,enforceMaxLength:true}},
	        		                 {dataIndex: 'creator', text: '建档人'},
	        		                 {dataIndex: 'createTime', text: '建档时间', width:140},
	        		                 {dataIndex: 'modifier', text: '修改人'},
	        		                 {dataIndex: 'modifyTime', text: '修改时间', width:140}*/

	        		                 ],
	        		                 //添加主键
	        		                 gridPrimaryKey: 'brandNo',
	        		                 gridUnionKey: '',

	        		                 //修改URL
	        		                 gridLoadUrl:  Hc.mdmPath+'bas_brand_relation/list.json',
	        		                 gridSaveUrl:  Hc.mdmPath+'bas_brand_relation/batchOperate.json',
	        		                 gridExportUrl: Hc.mdmPath+'bas_brand_relation/do_export.json',
	        		                 gridImportUrl: ''

	        	   });
	        	   me.callParent();
	           }
});
