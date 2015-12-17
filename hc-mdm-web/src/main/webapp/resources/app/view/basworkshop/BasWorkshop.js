/**
 * Description: 工作中心(车间)信息表(default) All rights Reserved, Designed By Hc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-23 16:15:24
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basworkshop.BasWorkshop', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.basworkshop',
    requires: ['Hc_mdm.model.BasWorkshop', 'Hc_mdm.view.basworkshop.BasWorkshopController', 'Hc_mdm.view.basworkshop.BasWorkshopModel'],
    controller: 'basworkshop',
    viewModel: {
        type: 'basworkshop'
    },
    initComponent: function() {
        var me = this,
        companyStore = Ext.create('Hc_Common.store.Base', {
            fields: ['companyNo', 'companyName'],
            autoLoad: true,
            proxy: {
                url: Hc.mdmPath + 'bas_company/listAll.json'
            }
        });
        companyStore.proxy.extraParams.companyType = 0,
        Ext.apply(me, {
            searchItems: [{
                fieldLabel: '事业部',
                name: 'divisionNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_division/listAll.json',
                displaymember: 'divisionName',
                valuemember: 'divisionNo'
            },
            {
                fieldLabel: '厂区',
                name: 'factoryNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
                displaymember: 'factoryName',
                valuemember: 'factoryNo'
            },
            {
                xtype: 'textfield',
                fieldLabel: '车间编号',
                name: 'workshopNo',
                maxLength: 10,
                enforceMaxLength: true

            },
            {
                xtype: 'textfield',
                fieldLabel: '车间名称',
                name: 'workshopName',
                maxLength: 30,
                enforceMaxLength: true

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
            gridModel: 'Hc_mdm.model.BasWorkshop',
            gridColumns: [{
                dataIndex: 'workshopNo',
                text: '车间编号',
                editor: {
                    allowBlank: false,
                    maxLength: 10,
                    enforceMaxLength: true,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'workshopName',
                text: '车间名称',
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
                dataIndex: 'companyNo',
                text: '公司',
                width: 130,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                estore: companyStore,
                gstore: companyStore,
                displaymember: 'companyName',
                valuemember: 'companyNo'
            },
            {
                dataIndex: 'factoryNo',
                text: '厂区',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
                displaymember: 'factoryName',
                valuemember: 'factoryNo'
            },
            {
                dataIndex: 'divisionNo',
                text: '事业部',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_division/listAll.json',
                displaymember: 'divisionName',
                valuemember: 'divisionNo'
            },
            {
                dataIndex: 'workshopType',
                text: '车间类型',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'workshopLeader',
                text: '车间负责人',
                editor: {
                    maxLength: 20,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'deptNo',
                text: 'HR部门编码 ',
                editor: {
                    xtype: 'searchhelpfield',
                    //数据精灵类
                    winTitle: '选择HR部门',
                    //弹出框标题，默认为"选择器"
                    gridColumns: [{ //弹出框网格的列
                        dataIndex: 'deptNo',
                        text: 'HR部门编码',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'deptName',
                        text: 'HR部门名称   ',
                        flex: 0.5
                    }],
                    searchItems: [{
                        name: 'deptNo',
                        fieldLabel: 'HR部门编码'
                    },
                    {
                        name: 'deptName',
                        fieldLabel: 'HR部门名称'
                    }],
                    //弹出框的查询面板
                    otherFields: 'deptName',
                    url: Hc.basePath + 'itg_department/listAll.json' //后端的服务URL
                }
            },
            {
                dataIndex: 'deptName',
                text: 'HR部门名称',
                width:180
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
            gridPrimaryKey: 'workshopNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_workshop/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_workshop/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_workshop/do_export.json',
            gridImportUrl: '',
            searchColumn: 4,
            gridEditColumn: 4,
            //gridEditHeight:100,自定义高度
            gridEditItems: [{
                xtype: 'extcombox',
                bind: {
                    value: '{gridRow.companyNo}'
                },
                fieldLabel: '公司',
                allowBlank: false,
                store: companyStore,
                displaymember: 'companyName',
                valuemember: 'companyNo'
            },
            {
                xtype: 'extcombox',
                bind: {
                    value: '{gridRow.divisionNo}'
                },
                fieldLabel: '事业部',
                allowBlank: false,
                displayvalue: Hc.mdmPath + 'bas_division/listAll.json',
                displaymember: 'divisionName',
                valuemember: 'divisionNo'
            },
            {
                xtype: 'extcombox',
                bind: {
                    value: '{gridRow.factoryNo}'
                },
                fieldLabel: '厂区',
                allowBlank: false,
                displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
                displaymember: 'factoryName',
                valuemember: 'factoryNo'
            },

            {
                xtype: 'textfield',
                reference: 'pWorkshopNo',
                bind: {
                    value: '{gridRow.workshopNo}'
                },
                fieldLabel: '车间编号',
                allowBlank: false,
                maxLength: 10,
                enforceMaxLength: true,
                regex: /^[0-9a-zA-Z]+$/,
                //只能输入字母、数字或者字母数字组合
                regexText: '请输入字母或数字'
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.workshopName}'
                },
                fieldLabel: '车间名称',
                allowBlank: false,
                maxLength: 30,
                enforceMaxLength: true,
                regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                //只能输入字母、数字或中文或下划线
                regexText: '请输入字母、数字、中文'
            },
            {
                xtype: 'extcombox',
                bind: {
                    value: '{gridRow.workshopType}'
                },
                fieldLabel: '车间类型',
                allowBlank: true,
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.workshopLeader}'
                },
                fieldLabel: '车间负责人',
                allowBlank: true,
                maxLength: 20,
                enforceMaxLength: true,
                regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                //只能输入字母、数字或中文或下划线
                regexText: '请输入字母、数字、中文'
            },
            {
                bind: {
                    value: '{gridRow.deptNo}'
                },
                fieldLabel: 'HR部门编码',
                name: 'deptNo',
                xtype: 'searchhelpfield',
                //数据精灵类
                winTitle: '选择HR部门',
                //弹出框标题，默认为"选择器"
                gridColumns: [{ //弹出框网格的列
                    dataIndex: 'deptNo',
                    text: 'HR部门编码',
                    flex: 0.5
                },
                {
                    dataIndex: 'deptName',
                    text: 'HR部门名称',
                    flex: 0.5
                }],
                searchItems: [{
                    name: 'deptNo',
                    fieldLabel: 'HR部门编码'
                },
                {
                    name: 'deptName',
                    fieldLabel: 'HR部门名称'
                }],
                //弹出框的查询面板
                otherFields: 'deptName',
                url: Hc.basePath + 'itg_department/listAll.json' //后端的服务URL
            },
            {
                bind: {
                    value: '{gridRow.deptName}'
                },
                xtype: 'textfield',
                fieldLabel: 'HR部门名称',
                name: 'deptName',
                readOnly: true,
                editable: false
            },
            {
                xtype: 'numberfield',
                bind: {
                    value: '{gridRow.orderNo}'
                },
                fieldLabel: '排列序号'
            },
            {
                xtype: "extcombox",
                bind: {
                    value: '{gridRow.enableFlag}'
                },
                fieldLabel: '启用状态',
                allowBlank: false,
                displayvalue: "0=禁用:1=启用"
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.remarks}'
                },
                fieldLabel: '备注',
                maxLength: 60,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.creator}'
                },
                readOnly: true,
                fieldLabel: '建档人'
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.createTime}'
                },
                readOnly: true,
                fieldLabel: '建档时间'
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.modifier}'
                },
                readOnly: true,
                fieldLabel: '修改人'
            },
            {
                xtype: 'textfield',
                bind: {
                    value: '{gridRow.modifyTime}'
                },
                readOnly: true,
                fieldLabel: '修改时间'
            }]
        });

        me.callParent();

    }
});