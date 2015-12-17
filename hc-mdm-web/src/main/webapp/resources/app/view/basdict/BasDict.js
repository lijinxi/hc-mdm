/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )(default) All rights Reserved,
 * Designed ByHc Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdict.BasDict', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basdict',
	requires: [
		'Hc_mdm.model.BasDict',
		'Hc_mdm.model.BasDictDtl',
		'Hc_mdm.view.basdict.BasDictController',
		'Hc_mdm.view.basdict.BasDictModel'
	],

	controller: 'basdict',
	viewModel: {
		type: 'basdict'
	},

	searchItems: [
		{xtype: 'textfield', fieldLabel: '字典编号', name: 'dictCode'},
		{xtype: 'textfield', fieldLabel: '字典名称', name: 'dictName'}
	],
	gridColumns: [
		{dataIndex: 'dictCode', text: '字典编号', editor: {allowBlank: false}},
		{dataIndex: 'dictName', text: '字典名称', editor: true},
		{
			dataIndex: 'appNo',
			text: '应用代号',
			xtype:'bllookupedit',
			displayvalue:Hc.basePath + 'itg_application/list.json',
			displaymember:'appName',
			valuemember:'appNo'			
			},
		{dataIndex: 'dictLevel', text: '层级', editor: {xtype: 'numberfield'}},
		{
			dataIndex: 'enableFlag',
			text: '启用状态', 
			renderer : 'renderUseFlag',
			editor: {
				xtype : 'combouseflag',
				allowBlank : false
			}
		},
		{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield'}}
	],
	gridModel: 'Hc_mdm.model.BasDict',
	gridPrimaryKey: 'dictId',
	gridSubGrid: ['grid1'],
	gridSupGrid: '',
	gridLoadUrl: Hc.mdmPath + 'bas_dict/list.json',
	gridSaveUrl: Hc.mdmPath + 'bas_dict/saveMasterCustomerList.json',
	gridExportUrl: Hc.mdmPath + 'bas_dict/do_export.json',
	gridImportUrl: Hc.mdmPath + 'bas_dict/importExcel.json',
	
	// 定义导入服务信息
		
	gridcolNames:'dictCode,dictName,appNo,dictLevel,enableFlag,orderNo,creator,remarks',    // 指定导入列的名字（多个列用逗号隔开）（*必填项）
	gridmustArray:"true,true,true,true,true,true,true,true",   // （对应上面指定列的是否必填，多个用逗号隔开）（*必填项）
	gridisValidateAll:'Y',	// 是否要全部验证通过才导入（Y 或N）（*必填项）
	gridmainKey:'',	  // 验证有重复(填写属性名，多个用逗号隔开)
    
    
    // 公共验证条件(可以多个{},{},{})
	gridvalidationConditions:'[{ validationType:"unique", conditionValue:"dictCode",  validationModel:"BasDict"}]',
	
    					// { validationType:"isexist", conditionValue:"dictCode",validationModel:"BasDict"},
    	
    /*
	 * validationType:验证类型 --> unique：验证唯一 isexist：是否存在，不存在则不可导入
	 * conditionValue:验证的属性 --> 多个属性时用逗号隔开
	 *  validationModel:验证数据对应的entity名称
	 */
	

    
    // 定义导出服务
	gridfileName:'数据字典主表',       // 导出文件名，不填后台则会自动生成
	gridfileType:'xlsx',               // 导出文件类型  xls,xlsx,默认为xls格式
	gridexportColumns:'[{"field":"dictCode","title":"字典编号"},{"field":"dictName","title":"字典名称"},{"field": "appNo", "title": "应用代号"},{"field": "dictLevel", "title": "层级"},{"field": "enableFlag", "title": "启用状态"},{"field": "orderNo", "title": "排列序号"},{"field": "remarks", "title": "备注"},{"field": "creator", "title": "建档人"},{"field": "createTime", "title": "建档时间"}]',
    
    // gridexportColumns（*必填项）
    // field 需要导出的列
    // title 需要导出的列名
    
    
    
	grid1Columns: [
	    {dataIndex: 'dictCode', text: '字典编号', hidden: true, bind: {value:'{gridRow.dictCode}'}},	//网格列的绑定无效？？？
		{dataIndex: 'itemCode', text: '明细编码', editor: {allowBlank: false}},
		{dataIndex: 'itemName', text: '明细名称', editor: {allowBlank: false}},
		{
			dataIndex: 'enableFlag', 
			text: '启用状态', 
			renderer:'renderUseFlag',
			editor:
			{
				xtype : 'combouseflag',
				allowBlank : false
				}
		},
		{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield', allowBlank: true}}

	],
	grid1HasMark: true,
    grid1HasCreator: true,
    grid1HasModifier: true,
	
	grid1SubGrid: [],
	grid1SupGrid: 'mastergrid',
	grid1Model: 'Hc_mdm.model.BasDictDtl',
	grid1PrimaryKey: 'dictDtlId',
	grid1LoadUrl: Hc.mdmPath + 'bas_dict_dtl/list.json',
	grid1ExportUrl: Hc.mdmPath + 'bas_dict_dtl/do_export.json',
	grid1ImportUrl: Hc.mdmPath + 'bas_dict_dtl/importExcel.json',
	
	// 定义导入服务信息
	
	grid1colNames:'itemCode,itemName,enableFlag,orderNo,creator,remarks',   
	grid1mustArray:"true,true,true,true,true,true",   
	grid1isValidateAll:'Y',	
	grid1mainKey:'',	  
	grid1validationConditions:'[{ validationType:"unique", conditionValue:"dictId,itemCode",  validationModel:"BasDictDtl"}]',

    
    // 定义导出服务
	grid1fileName:'数据字典从表',       
	grid1fileType:'xlsx',               
	grid1exportColumns:'[{"field":"itemCode","title":"明细编码"},{"field":"itemName","title":"明细名称"},{"field": "orderNo", "title": "排列序号"},{"field": "remarks", "title": "备注"},{"field": "creator", "title": "建档人"},{"field": "createTime", "title": "建档时间"}]',
    
	//定义查看日志
	gridLogWinTitle: '数据字典-日志-主表',
    gridLogLoadUrl: Hc.mdmPath + 'log_dict/list.json',
    
    grid1LogWinTitle: '数据字典-日志-从表',
    grid1LogLoadUrl: Hc.mdmPath + 'log_dict_dtl/list.json',
  

	initComponent: function () {

		var me = this;
		me.callParent();
	}
});
