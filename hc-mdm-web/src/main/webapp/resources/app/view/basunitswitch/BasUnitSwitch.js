/**
 * Description: 计量单位转换表(通用)(default) All rights Reserved, Designed By Hc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: jinwen
 * @date: 2015-03-20 08:48:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basunitswitch.BasUnitSwitch', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.basunitswitch',
    requires: ['Hc_mdm.model.BasUnitSwitch', 'Hc_mdm.view.basunitswitch.BasUnitSwitchController', 'Hc_mdm.view.basunitswitch.BasUnitSwitchModel'],
    controller: 'basunitswitch',
    viewModel: {
        type: 'basunitswitch'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                fieldLabel: '单位',
                name: 'unitNoA',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                displaymember: 'unitName',
                valuemember: 'unitNo'
            },
            {
                fieldLabel: '转换单位',
                name: 'unitNoB',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                displaymember: 'unitName',
                valuemember: 'unitNo'

            },
            {
                xtype: 'datefield',
                fieldLabel: '创建时间',
                name: 'createFromTime',
                vtype: 'compareTo',
                //数据验证方式，compareTo
                compareTo: 'createToTime',
                // 被比较的输入框控件name
                compareType: '<=',
                // 比较方式，有>=,<=,>,<,= 默认为等于
                compareError: '开始日期不能大于结束日期,请重新选择' //比较不通过时，返回提示信息
            },
            {
                xtype: 'datefield',
                fieldLabel: '   至     ',
                name: 'createToTime',
                vtype: 'compareTo',
                //数据验证方式，compareTo
                compareTo: 'createFromTime',
                // 被比较的输入框控件name
                compareType: '>=',
                // 比较方式，有>=,<=,>,<,= 默认为等于
                compareError: '结束日期不能小于开始日期' //比较不通过时，返回提示信息
            }],
            gridModel: 'Hc_mdm.model.BasUnitSwitch',
            gridColumns: [{
                dataIndex: 'unitNoA',
                text: '单位',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                displaymember: 'unitName',
                valuemember: 'unitNo'
            },
            {
                dataIndex: 'unitNoB',
                text: '转换单位',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                displaymember: 'unitName',
                valuemember: 'unitNo'

            },
            {
                dataIndex: 'qtyA',
                text: '数量',
                editor: {
                    allowBlank: false,
                    maxLength: 12,
                    regex: /^(\-|\+)?\d+(\.\d+)?$/,
                    //只能输入正数、负数、小数
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'qtyB',
                text: '转换数量',
                editor: {
                    allowBlank: false,
                    maxLength: 12,
                    regex: /^(\-|\+)?\d+(\.\d+)?$/,
                    //只能输入正数、负数、小数
                    regexText: '请输入数字',
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
            gridPrimaryKey: 'switchId',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_unit_switch/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_unit_switch/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_unit_switch/do_export.json',
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