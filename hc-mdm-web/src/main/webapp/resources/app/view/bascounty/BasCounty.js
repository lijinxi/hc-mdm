/**
 * Description: 行政县信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-17 08:12:43
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascounty.BasCounty', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascounty',
    requires: ['Hc_mdm.model.BasCounty', 'Hc_mdm.view.bascounty.BasCountyController', 'Hc_mdm.view.bascounty.BasCountyModel'],
    controller: 'bascounty',
    viewModel: {
        type: 'bascounty'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '行政县编号',
                name: 'countyNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '行政县名称',
                name: 'countyName',
                maxLength: 15,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasCounty',
            gridColumns: [{
                dataIndex: 'countyNo',
                text: '行政县编号',
                editor: {
                    allowBlank: false,
                    maxLength: 20,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'countyName',
                text: '行政县名称',
                editor: {
                    allowBlank: false,
                    maxLength: 15,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'countyLname',
                text: '行政县详细名称',
                editor: {
                    allowBlank: false,
                    maxLength: 30,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'countyOpcode',
                text: '行政县特征码',
                editor: {
                    vtype: 'alphanum',
                    //只能输入字母、数字或者字母数字组合
                    minLength: 2,
                    //最小长度
                    maxLength: 2,
                    //最大长度
                    allowBlank: false
                }
            },
            {
                dataIndex: 'cityNo',
                text: '所属行政市',
                width: 120,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_city/listAll.json',
                displaymember: 'cityName',
                valuemember: 'cityNo'
            },
            {
                dataIndex: 'orderNo',
                text: '排列序号',
                editor: {
                    xtype: 'numberfield',
                    maxLength: 11,
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'enableFlag',
                renderer: 'renderUseFlag',
                text: '启用状态',
                editor: {
                    allowBlank: false,
                    xtype: 'combouseflag'
                }
            }],

            gridPrimaryKey: 'countyNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_county/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_county/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_county/do_export.json',
            gridImportUrl: '',

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