/**
 * Description: 公司信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:24:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascompany.BasCompany', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascompany',
    requires: ['Hc_mdm.model.BasCompany', 'Hc_mdm.view.bascompany.BasCompanyController', 'Hc_mdm.view.bascompany.BasCompanyModel', 'Hc_mdm.store.BasCity', 'Hc_mdm.store.BasCounty'],
    controller: 'bascompany',
    viewModel: {
        type: 'bascompany'
    },
    initComponent: function() {
        var me = this,
        provinceStore = Ext.create('Hc_mdm.store.BasProvince'),
        cityEStore = Ext.create('Hc_mdm.store.BasCity'),
        cityGStore = Ext.create('Hc_mdm.store.BasCity'),
        countyEStore = Ext.create('Hc_mdm.store.BasCounty'),
        countyGStore = Ext.create('Hc_mdm.store.BasCounty');
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '地区',
                name: 'regionNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_region/listAll.json',
                displaymember: 'regionName',
                valuemember: 'regionNo'
            },
            {
                xtype: 'combo',
                fieldLabel: '行政省',
                name: 'provinceNo',
                reference: 'provinceCombo',
                editable: false,
                displayField: 'provinceLname',
                valueField: 'provinceNo',
                store: provinceStore,
                renderer: function(value) {
                    var index = provinceStore.findExact('provinceNo', value);
                    return index > -1 ? provinceStore.getAt(index).data.provinceLname: value;
                },
                listeners: {
                    'change': 'onChangeprovinceNo'
                }
            },
            {
                xtype: 'combo',
                fieldLabel: '行政市',
                name: 'cityNo',
                reference: 'cityCombo',
                editable: false,
                displayField: 'cityName',
                valueField: 'cityNo',
                store: {
                    type: 'basestore',
                    fields: ['cityNo', 'cityName'],
                    proxy: {
                        url: Hc.mdmPath + 'bas_city/list.json?page=1&start=0&limit=50'

                    },
                    listeners: {
                        beforeload: function(store, pararms) {
                            if (!me.lookupReference('provinceCombo').getValue()) {
                                me.lookupReference('cityCombo').setReadOnly(true);
                                return false
                            }
                        }
                    }

                },
                listeners: {
                    'change': 'onChangecityNo'
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: '公司编号',
                name: 'companyNo',
                maxLength: 10,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '公司名称',
                name: 'companyName',
                maxLength: 30,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasCompany',
            gridColumns: [{
                dataIndex: 'companyNo',
                text: '公司编号',
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
                dataIndex: 'companyName',
                text: '公司名称',
                width: 130,
                editor: {
                    allowBlank: false,
                    maxLength: 30,
                    regex: /^[\u4e00-\u9fa5a-zA-Z0-9()（）]+$/,
                    //只能输入字母、数字或中文或中英文括号
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'companyType',
                text: '公司类型',
                editor: {
                    allowBlank: false
                },
                xtype: "bllookupedit",
                displayvalue: "1=利润中心:0=法人组织"
            },
            {
                dataIndex: 'companyForm',
                text: '公司形态',
                editor: {
                    allowBlank: true
                },
                xtype: 'bllookupedit',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=company_form',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'regionNo',
                text: '地区',
                editor: {
                    allowBlank: true
                },
                xtype: 'bllookupedit',
                displayvalue: Hc.mdmPath + 'bas_region/listAll.json',
                displaymember: 'regionName',
                valuemember: 'regionNo'
            },
            {
                dataIndex: 'bankName',
                text: '开户银行',
                editor: {
                    maxLength: 30,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'bankAccountCode',
                text: '银行账号',
                editor: {
                    maxLength: 30,
                    regex: /^[0-9]+$/,
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'bankAccountName',
                text: '银行账户名',
                editor: {
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
                dataIndex: 'taxpayingNo',
                text: '税务登记号',
                editor: {
                    maxLength: 30,
                    regex: /^[0-9]+$/,
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'taxLevel',
                text: '纳税级别',
                editor: {
                    allowBlank: false
                },
                xtype: "bllookupedit",
                displayvalue: "0=一般纳税人:1=小规模纳税人"

            },
            {
                dataIndex: 'legalPerson',
                text: '法人代表',
                editor: {
                    maxLength: 20,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'certificateCode',
                text: '营业证号',
                editor: {
                    maxLength: 30,
                    regex: /^[0-9]+$/,
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'faxNo',
                text: '传真号',
                editor: {
                    maxLength: 30,
                    regex: /^[0-9]+$/,
                    regexText: '请输入字母或数字',
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
                vtype: 'email',
                editor: {
                    maxLength: 20,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'provinceNo',
                text: '行政省',
                width: 130,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                estore: provinceStore,
                gstore: provinceStore,
                displaymember: 'provinceLname',
                valuemember: 'provinceNo'
            },
            {
                dataIndex: 'cityNo',
                text: '行政市',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                gstore: cityGStore,
                estore: cityEStore,
                displaymember: 'cityName',
                valuemember: 'cityNo'
            },
            {
                dataIndex: 'countyNo',
                text: '行政县',
                width: 130,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                gstore: countyGStore,
                estore: countyEStore,
                displaymember: 'countyName',
                valuemember: 'countyNo'

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
                dataIndex: 'businessFunctions',
                text: '业务职能',
                hidden: true,
                editor: {
                    xtype: 'combo',
                    multiSelect: true,
                    //selectOnFocus: true, 
                    emptyText: '请选择...',
                    store: [[1, '销售职能'], [1, '采购职能'], [1, '库存职能'], [1, '工厂职能'], [1, '质检职能'], [1, '结算职能'], [1, '资产职能'], [1, ' 资金职能'], [1, '收付职能']]
                },
                renderer: function(val) {
                    return val;
                }
            },
            {
                dataIndex: 'dataSource',
                text: '数据来源',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: true
                },
                displayvalue: "0=主数据:1=工厂"
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
            gridPrimaryKey: 'companyNo',
            gridUnionKey: '',
            gridLoadUrl: Hc.mdmPath + 'bas_company/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_company/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_company/do_export.json',
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