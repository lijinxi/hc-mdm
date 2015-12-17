/**
 * Description: 尺码类别信息表(来源于集团主数据 pro_size_attribute )(default) All rights
 * Reserved, Designed By Hc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 * 
 * @author: jinwen
 * @date: 2015-03-20 08:48:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassizetype.BasSizeType', {
    extend: 'Hc_Common.view.BaseMultiPage',
    alias: 'widget.bassizetype',
    requires: ['Hc_mdm.model.BasSizeType', 'Hc_mdm.model.BasSize', 'Hc_mdm.view.bassizetype.BasSizeTypeController', 'Hc_mdm.view.bassizetype.BasSizeTypeModel'],
    controller: 'bassizetype',
    viewModel: {
        type: 'bassizetype'
    },

    isAutoLoad: false,

    searchItems: [{
        xtype: 'textfield',
        fieldLabel: '尺码类别编号',
        name: 'sizeTypeNo',
        maxLength: 20,
        enforceMaxLength: true
    },
    {
        xtype: 'textfield',
        fieldLabel: '尺码类别名称',
        name: 'sizeTypeName',
        maxLength: 30,
        enforceMaxLength: true
    }],
    gridColumns: [
    {
        dataIndex: 'sizeTypeNo',
        text: '尺码类别编号',
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
        dataIndex: 'sizeTypeName',
        text: '尺码类别名称',
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
            maxLength: 11,
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

    gridModel: 'Hc_mdm.model.BasSizeType',
    gridPrimaryKey: 'sizeTypeNo',
    gridSubGrid: ['grid1'],
    gridSupGrid: '',
    gridLoadUrl: Hc.mdmPath + 'bas_size_type/list.json',
    gridSaveUrl: Hc.mdmPath + 'bas_size_type/saveMasterCustomerList.json',
    gridExportUrl: Hc.mdmPath + 'bas_size_type/do_export.json',
    gridImportUrl: '',

    grid1Columns: [
    {
        dataIndex: 'sizeNo',
        text: '尺码编号',
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
        dataIndex: 'sizeName',
        text: '尺码名称',
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
    grid1HasMark: true,
    grid1HasCreator: true,
    grid1HasModifier: true,
    
    grid1Model: 'Hc_mdm.model.BasSize',
    grid1PrimaryKey: 'sizeId',
    grid1UnionKey: 'sizeNo,sizeTypeNo',
    grid1SubGrid: [],
    grid1SupGrid: 'mastergrid',
    grid1LoadUrl: Hc.mdmPath + 'bas_size/list.json',
    grid1ExportUrl: Hc.mdmPath + 'bas_size/do_export.json',
    grid1ImportUrl: '',
    initComponent: function() {
        var me = this;
        me.callParent();
    }
});