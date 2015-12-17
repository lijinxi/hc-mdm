/**
 * Description: 地区信息表(来源于集团主数据 org_organ_region )(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 18:09:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basregion.BasRegion', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basregion',
	requires: [
		'Hc_mdm.model.BasRegion',
		'Hc_mdm.view.basregion.BasRegionController',
		'Hc_mdm.view.basregion.BasRegionModel'
	],
	controller: 'basregion',
	viewModel: {
		type: 'basregion'
	},
	initComponent: function () {
		var me= this;
		countryStore = Ext.create('Hc_Common.store.Base', {
            fields: ['countryNo', 'countryName'],
            autoLoad: true,
            //pageSize:5,
            proxy: {
                url: Hc.mdmPath + 'bas_country/listAll.json'
            }
		});
		Ext.apply(me, {
			searchItems : [{
				xtype : 'textfield',
				fieldLabel : '地区名称',
				name : 'regionName'
			},  {
				xtype : 'combo',
				fieldLabel : '国家编号',
				name : 'countryNo',
				editable:false,
				displayField:'countryName',
				valueField:'countryNo',   
				store: countryStore,
				renderer: function (value) {
                    var index = countryStore.findExact('countryNo', value);
                    return index > -1 ? countryStore.getAt(index).data.countryName : value;
                }
			}
			],
			
			gridModel: 'Hc_mdm.model.BasRegion',
			gridColumns: [
				{dataIndex: 'regionNo', text: '地区编号', editor: {allowBlank: false}},
				{dataIndex: 'regionName', text: '地区名称', editor: {allowBlank: false}},
				{dataIndex: 'countryNo', text: '国家编号', 
					editor : {
						allowBlank : false,
						xtype:'combo',
						editable:false,
						displayField:'countryName',
						valueField:'countryNo',
						store: countryStore
						},
						renderer: function (value) {
		                    var index = countryStore.findExact('countryNo', value);
		                    return index > -1 ? countryStore.getAt(index).data.countryName : value;
		                }
				},
				{dataIndex: 'orderNo', text: '排列序号', editor : {xtype:'numberfield',allowBlank : true}},
				{dataIndex: 'enableFlag', text: '启用状态', renderer : 'renderUseFlag',editor : {allowBlank : false,	xtype : 'combouseflag'}}
			],
			gridPrimaryKey: 'regionNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath + 'bas_region/list.json',
			gridSaveUrl: Hc.mdmPath + 'bas_region/batchOperate.json',
			gridExportUrl: Hc.mdmPath + 'bas_region/do_export.json',
			gridImportUrl: Hc.mdmPath + '',


			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});

		me.callParent();
	}
});
