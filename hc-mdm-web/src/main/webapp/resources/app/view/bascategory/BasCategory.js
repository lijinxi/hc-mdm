/**
 * Description: 类别信息表(来源于集团主数据 pro_category )(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascategory.BasCategory', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bascategory',
	requires: [
		'Hc_mdm.model.BasCategory',
		'Hc_mdm.view.bascategory.BasCategoryController',
		'Hc_mdm.view.bascategory.BasCategoryModel'
	],
	controller: 'bascategory',
	viewModel: {
		type: 'bascategory'
	},
	initComponent: function () {
		var me= this;
 		
		Ext.apply(me, {
		
		gridModel: 'Hc_mdm.model.BasCategory',
		gridColumns: [
				{dataIndex: 'categoryName', text: '类别名称',  editor: {allowBlank: false},maxLength:30,enforceMaxLength:true},
				{xtype:'gridcolumn',dataIndex:'specialCode',text:'特征码',editor: {allowBlank: true,maxLength:20,enforceMaxLength:true}},
				{xtype:'gridcolumn',dataIndex:'parentCategoryId',text:'上级类别',hidden:true,hideable:false,editor:{allowBlank:false}},
				{xtype:'gridcolumn',dataIndex:'levelNo',text:'类别级别',hidden:true,hideable:false,editor:{allowBlank:false}},
				{xtype:'gridcolumn',dataIndex:'categoryId',text:'类别id'},
		        {xtype:'gridcolumn',dataIndex:'categoryNo',text:'类别编号'},
				{xtype:'gridcolumn',dataIndex:'searchCode',text:'类别路径'},
				{xtype:'gridcolumn',dataIndex: 'affiliation', text: '本部编码',hidden:true,hideable:false},
				{dataIndex: 'orderNo', text: '排列序号',editor: {allowBlank: true,xtype : 'numberfield'}},
	            {dataIndex: 'enableFlag',text: '启用状态',xtype: "bllookupedit",editor: {allowBlank: false},displayvalue: "0=禁用:1=启用"}
			],
			gridPrimaryKey: 'categoryId',
			gridLoadUrl: Hc.mdmPath+'bas_category/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_category/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_category/do_export.json',
			gridImportUrl: '',
			
			searchColumn: 0,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'SINGLE'
		});
		
		me.otherItems = [
		    {
            xtype: 'treepanel',
            region: 'west',
            split: true,
            reference: 'menutree',
            itemId: 'menutree',
            width: 300,
            //batchUrl:Hc.mdmPath+'bas_category/listsave.json',
            rootVisible: false,
            lines: true,
           // selType:'SINGLE',
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'categoryName',
                text: "类别维护",
                sortable: false,
                hideable: false

            }],
            store:{
                model:'Hc_mdm.model.BasCategory',
                type:'treebase',
                proxy: {
                    type: 'ajax',
                    url:  Hc.mdmPath+'bas_category/listAll.json'
                },
                root: {
                    id:0,
                    categoryName: '类别',
                    categoryId:0,
                    expanded: false
                },
                nodeParam:'parentCategoryId',
                parentIdProperty:'parentCategoryId'
            },
            listeners: {
                'selectionchange': 'onTreeSelectionChange',
                'afteritemexpand': 'onAfterItemExpand'
            }
        }];
		
		me.callParent();
	}
});
