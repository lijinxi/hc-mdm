/**
 * Description: 行政市信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-16 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascity.BasCity', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascity',
    requires: ['Hc_mdm.model.BasCity', 'Hc_mdm.view.bascity.BasCityController', 'Hc_mdm.view.bascity.BasCityModel'],
    controller: 'bascity',
    viewModel: {
        type: 'bascity'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '行政市编号',
                name: 'cityNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '行政市名称',
                name: 'cityName',
                maxLength: 15,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasCity',
            gridColumns: [{
                dataIndex: 'cityNo',
                text: '行政市编号',
                editor: {
                    allowBlank: false,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'cityName',
                text: '行政市名称',
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
                dataIndex: 'cityLname',
                text: '行政市详细名称',
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
                dataIndex: 'cityOpcode',
                text: '行政市特征码',
                editor: {
                    vtype: 'alphanum',
                    //只能输入字母、数字或者字母数字组合
                    minLength: 3,
                    //最小长度
                    maxLength: 3,
                    //最大长度
                    allowBlank: false
                }
            },
            {
                dataIndex: 'provinceNo',
                text: '所属行政省',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                maxLength: 20,
                width: 120,
                enforceMaxLength: true,
                displayvalue: Hc.mdmPath + 'bas_province/listAll.json',
                displaymember: 'provinceLname',
                valuemember: 'provinceNo'
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
                text: '启用状态',
                renderer: 'renderUseFlag',
                editor: {
                    allowBlank: false,
                    xtype: 'combouseflag'
                }
            }],
            gridPrimaryKey: 'cityNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_city/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_city/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_city/do_export.json',
            gridImportUrl: '',

            searchColumn: 4,
            gridEditModel: 'cell',
            gridCanDrag: false,
            gridCanEdit: true,
            gridCanAdd: true,
            gridCanDelete: true,
            // "SINGLE" / "SIMPLE"/"MULTI" / "checkboxmodel"
            gridSelModel: 'MULTI'
        });

        me.callParent();
    }
});