/**
 * Description: (default) All rights Reserved, Designed By Hc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-18 08:59:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascustomer.BasCustomer', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascustomer',
    requires: ['Hc_mdm.model.BasCustomer', 'Hc_mdm.view.bascustomer.BasCustomerController', 'Hc_mdm.view.bascustomer.BasCustomerModel', 'Hc_mdm.store.BasCity', 'Hc_mdm.store.BasCounty', 'Hc_mdm.store.BasCountry'],
    controller: 'bascustomer',
    viewModel: {
        type: 'bascustomer'
    },
    initComponent: function() {
        var me = this;
        countryEStore = Ext.create('Hc_mdm.store.BasCountry'),
        countryGStore = Ext.create('Hc_mdm.store.BasCountry'),
        provinceEStore = Ext.create('Hc_mdm.store.BasProvince'),
        provinceGStore = Ext.create('Hc_mdm.store.BasProvince'),
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '客户编号',
                name: 'customerNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '客户简称',
                name: 'customerName',
                maxLength: 100,
                enforceMaxLength: true
            },
            {
                xtype: 'combo',
                fieldLabel: '国家',
                name: 'countryNo',
                reference: 'countryCombo',
                editable: false,
                displayField: 'countryName',
                valueField: 'countryNo',
                store: countryEStore,
                renderer: function(value) {
                    var index = countryEStore.findExact('countryNo', value);
                    return index > -1 ? countryEStore.getAt(index).data.countryName: value;
                },
                listeners: {
                    'change': 'onChangecountryNo'
                }
            },
            {
                xtype: 'combo',
                fieldLabel: '省/州',
                name: 'provinceNo',
                reference: 'provinceCombo',
                editable: false,
                displayField: 'provinceLname',
                valueField: 'provinceNo',
                store: {
                    type: 'basestore',
                    fields: ['provinceNo', 'provinceLname'],
                    proxy: {
                        url: Hc.mdmPath + 'bas_province/listAll.json?enableFlag=1'
                    },
                    listeners: {
                        beforeload: function(store, pararms) {
                            if (!me.lookupReference('countryCombo').getValue()) {
                                me.lookupReference('provinceCombo').setReadOnly(true);
                                return false
                            }
                        }
                    }

                },
                listeners: {
                    'change': 'onChangeprovinceNo'
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: '地区',
                name: 'regionNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_region/listAll.json?enableFlag=1',
                displaymember: 'regionName',
                valuemember: 'regionNo'
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
                compareError: '结束日期不能小于开始日期,请重新选择' //比较不通过时，返回提示信息
            }],
            gridModel: 'Hc_mdm.model.BasCustomer',
            gridColumns: [{
                dataIndex: 'customerNo',
                text: '客户编号',
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
                dataIndex: 'customerName',
                text: '客户简称',
                editor: {
                    allowBlank: false,
                    maxLength: 100,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'customerLname',
                text: '客户全称',
                editor: {
                    allowBlank: false,
                    maxLength: 100,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'customerType',
                text: '客户类型',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=customer_type',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'customerLevel',
                text: '客户等级',
                editor: {
                    allowBlank: false
                },
                xtype: 'bllookupedit',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=customer_level',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'customerGroup',
                text: '客户群组',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=customer_group',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'countryNo',
                text: '国家',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                estore: countryEStore,
                gstore: countryGStore,
                displaymember: 'countryName',
                valuemember: 'countryNo'
            },
            {
                dataIndex: 'provinceNo',
                text: '省/州',
                width: 130,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                estore: provinceEStore,
                gstore: provinceGStore,
                displaymember: 'provinceLname',
                valuemember: 'provinceNo'
            },
            {
                dataIndex: 'regionNo',
                text: '地区',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_region/listAll.json?enableFlag=1',
                displaymember: 'regionName',
                valuemember: 'regionNo'
            },
            {
                dataIndex: 'language',
                text: '语言',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: true
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=language',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'settlementCompany',
                text: '结算公司编码',
                editor: {
                    maxLength: 20,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'bankName',
                text: '开户银行',
                editor: {
                    maxLength: 60,
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
                dataIndex: 'email',
                text: '电子邮箱',
                editor: {
                    vtype: 'email'
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
                dataIndex: 'currencyNo',
                text: '币别',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_currency/listAll.json?enableFlag=1',
                displaymember: 'currencyName',
                valuemember: 'currencyNo'
            },
            {
                dataIndex: 'paymentClauseNo',
                text: '收款条件',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_payment_clause/listAll.json?enableFlag=1',
                displaymember: 'paymentClauseName',
                valuemember: 'paymentClauseNo'
            },
            {
                dataIndex: 'paymentMethodNo',
                text: '结算方式',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_payment_method/listAll.json?enableFlag=1',
                displaymember: 'paymentMethodName',
                valuemember: 'paymentMethodNo'
            },
            {
                dataIndex: 'combineBill',
                text: '合并发票',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: true
                },
                displayvalue: "0=是:1=否"
            },
            {
                dataIndex: 'summaryBill',
                text: '汇总开票',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: true
                },
                displayvalue: "1=同一订单:2=同一付款人",
                hidden:true
            },
            {
                dataIndex: 'independentBill',
                text: '独立发票',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: true
                },
                displayvalue: "0=不:1=每个地址:2=每个发货通知"
            },
            {
                dataIndex: 'exchangeRateType',
                text: '汇率类型',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: true
                },
                displayvalue: "1=通用费率"
            },
            {
                dataIndex: 'taxRateNo',
                text: '增值税',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json?enableFlag=1',
                displaymember: 'taxRateName',
                valuemember: 'taxRateNo'
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
            gridPrimaryKey: 'customerNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_customer/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_customer/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_customer/do_export.json',
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