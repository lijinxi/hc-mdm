/**
 * Description: 送货地点表(来源于集团主数据仓库表 org_storage )(default) All rights Reserved,
 * Designed By Hc Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-19 16:22:19
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdeliverypoint.BasDeliveryPoint', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.basdeliverypoint',
    requires: ['Hc_mdm.model.BasDeliveryPoint', 'Hc_mdm.view.basdeliverypoint.BasDeliveryPointController', 'Hc_mdm.view.basdeliverypoint.BasDeliveryPointModel', 'Hc_mdm.store.BasCity', 'Hc_mdm.store.BasCounty'],
    controller: 'basdeliverypoint',
    viewModel: {
        type: 'basdeliverypoint'
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
                displayvalue: Hc.mdmPath + 'bas_region/listAll.json?enableFlag=1',
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
                        url: Hc.mdmPath + 'bas_city/list.json?enableFlag=1&page=1&start=0&limit=50'

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
                fieldLabel: '送货地点编号',
                name: 'pointNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '送货地点名称',
                name: 'pointName',
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
            gridModel: 'Hc_mdm.model.BasColor',
            gridColumns: [{
                dataIndex: 'pointNo',
                text: '送货地点编号',
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
                dataIndex: 'pointName',
                text: '送货地点名称',
                width: 130,
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
                dataIndex: 'provinceNo',
                text: '行政省',
                width: 130,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
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
                    allowBlank: false
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
                    allowBlank: false
                },
                gstore: countyGStore,
                estore: countyEStore,
                displaymember: 'countyName',
                valuemember: 'countyNo'

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
                dataIndex: 'areaTotal',
                text: '总面积',
                editor: {
                    allowBlank: false,
                    xtype: 'numberfield',
                    maxLength: 12,
                    decimalPrecision:2,//保留小数位
                    minValue:1,
                    minText:'面积不能小于或等于0',
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
                dataIndex: 'phoneNo',
                text: '电话',
                editor: {
                    maxLength: 20,
                    regex: /^[0-9]+$/,
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'mobileNo',
                text: '手机',
                editor: {
                    maxLength: 20,
                    regex: /^[0-9]+$/,
                    regexText: '请输入数字',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'contactAddress',
                text: '联系地址',
                width: 300,
                editor: {
                    maxLength: 60,
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
            gridPrimaryKey: 'pointNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_delivery_point/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_delivery_point/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_delivery_point/do_export.json',
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