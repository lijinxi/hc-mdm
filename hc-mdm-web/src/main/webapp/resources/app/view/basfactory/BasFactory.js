/**
 * Description: 厂区信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:08
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basfactory.BasFactory', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.basfactory',
    requires: ['Hc_mdm.model.BasFactory', 'Hc_mdm.view.basfactory.BasFactoryController', 'Hc_mdm.view.basfactory.BasFactoryModel'],
    controller: 'basfactory',
    viewModel: {
        type: 'basfactory'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '厂区编号',
                name: 'factoryNo',
                maxLength: 10,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '厂区名称',
                name: 'factoryName',
                maxLength: 30,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasFactory',
            gridColumns: [{
                dataIndex: 'factoryNo',
                text: '厂区编号',
                editor: {
                    allowBlank: false,
                    maxLength: 10,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'factoryName',
                text: '厂区名称',
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
                dataIndex: 'contacter',
                text: '联系人',
                editor: {
                    maxLength: 30,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'mobileNo',
                text: '手机号码',
                editor: {
                    maxLength: 20,
                    regex: /^[0-9]+$/,
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'faxNo',
                text: '传真号',
                editor: {
                    maxLength: 30,
                    regex: /^[0-9]+$/,
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'email',
                text: '电子邮箱',
                editor: {
                    vtype: 'email'
                }
            },
            {
                dataIndex: 'postCode',
                text: '邮政编码',
                editor: {
                    maxLength: 20,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'contactAddress',
                text: '联系地址',
                width: 300,
                editor: {
                    maxLength: 255,
                    enforceMaxLength: true
                }
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
            gridPrimaryKey: 'factoryNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_factory/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_factory/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_factory/do_export.json',
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