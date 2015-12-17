/**
 * Description: (default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-13 09:48:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstyle.BasStyle', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basstyle',
	requires: [
		'Hc_mdm.model.BasStyle',
		'Hc_mdm.model.BasModel',
		'Hc_mdm.view.basstyle.BasStyleController',
		'Hc_mdm.view.basstyle.BasStyleModel'
	],
	controller: 'basstyle',
	viewModel: {
		type: 'basstyle'
	},

		//查询条件
	searchItems: [
	      		{xtype: 'textfield', fieldLabel: '型体编号', name: 'modelNo'},
	      		{xtype: 'textfield', fieldLabel: '型体名称', name: 'modelName'}
	      	],


       //主表字段
	      	gridColumns: [
	      		{dataIndex: 'modelNo', text: '型体编码', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
	      		{dataIndex: 'modelName', text: '型体名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}}
	      		/*{dataIndex: 'remarks', text: '备注', editor: true,  },
	      		{dataIndex: 'creator', text: '建档人'},
	      		{dataIndex: 'createTime', text: '建档时间'},
	      		{dataIndex: 'modifier', text: '修改人'},
	      		{dataIndex: 'modifyTime', text: '修改时间'}*/
	      	],
	      	gridModel: 'Hc_mdm.model.BasModel',
	    	gridPrimaryKey: 'modelNo',
	    	gridSubGrid: ['grid1'],
	    	gridSupGrid: '',
	    	gridLoadUrl: Hc.mdmPath + 'bas_model/list.json',
	    	gridSaveUrl: Hc.mdmPath + 'bas_model/saveMasterCustomerList.json',
	    	gridExportUrl: Hc.mdmPath + 'bas_model/do_export.json',
	    	gridImportUrl: Hc.mdmPath + 'bas_model/importExcel.json',
	    	
      //从表字段
	    	grid1Columns: [
	    	       		{dataIndex: 'styleNo', text: '款号编码', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
	    	       		{dataIndex: 'modelNo', text: '型体编码',hidden:true},
	    	       		{dataIndex: 'styleName', text: '款号名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
	    	       		{dataIndex: 'creator', text: '创建人'},
	    	       		{dataIndex: 'createTime', text: '创建时间'},
	    	       		{dataIndex: 'modifier', text: '修改人'},
	    	       		{dataIndex: 'modifyTime', text: '修改时间'}
	    	       	],
	    	       	grid1SubGrid: [],
	    	       	grid1SupGrid: 'mastergrid',
	    	       	grid1Model: 'Hc_mdm.model.BasStyle',
	    	       	grid1PrimaryKey: 'styleNo',
	    	       	grid1LoadUrl: Hc.mdmPath + 'bas_style/list.json',
	    	       	grid1ExportUrl: Hc.mdmPath + 'bas_style/do_export.json',
	    	       	grid1ImportUrl: Hc.mdmPath + 'bas_style/importExcel.json',
	    	       	
	    	       	initComponent: function () {

	    	    		var me = this;
	    	    		me.callParent();
	    	    	}
});