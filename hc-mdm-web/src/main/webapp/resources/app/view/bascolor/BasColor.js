/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )(default) All rights Reserved,
 * Designed ByHc Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascolor.BasColor', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascolor',
    requires: ['Hc_mdm.model.BasColor', 'Hc_mdm.view.bascolor.BasColorController', 'Hc_mdm.view.bascolor.BasColorModel'],
    controller: 'bascolor',
    viewModel: {
        type: 'bascolor'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                fieldLabel: '色系',
                name: 'colorSeriesName',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=color_series',
                displaymember: 'itemName',
                valuemember: 'itemName'
            },
            {
                xtype: 'textfield',
                fieldLabel: '颜色编号',
                name: 'colorNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '颜色名称',
                name: 'colorName',
                maxLength: 30,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasColor',
            gridColumns: [
            {
                dataIndex: 'colorSeriesName',
                text: '色系',
                editor: {
                    editable: false,
                    xtype: 'combo',
                    id: 'csCode',
                    displayField: 'displayName',
                    //显示给用户的字段
                    valueField: 'itemName',
                    //显示给用户的字段对应的值
                    store: {
                        type: 'basestore',
                        autoLoad: true,
                        fields: ['itemCode', 'itemName'],
                        proxy: {
                            url: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=color_series'
                        }
                    }
                }
            },

            {
                dataIndex: 'colorNo',
                text: '颜色编号',
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
                dataIndex: 'colorName',
                text: '颜色名称',
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
                dataIndex: 'orderNo',
                text: '排列序号',
                editor: {
                    xtype: 'numberfield',
                    maxLength: 20,
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'enableFlag',
                text: '启用状态',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: false
                },
                displayvalue: "0=禁用:1=启用"
            }],

            gridPrimaryKey: 'colorNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_color/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_color/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_color/do_export.json',
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