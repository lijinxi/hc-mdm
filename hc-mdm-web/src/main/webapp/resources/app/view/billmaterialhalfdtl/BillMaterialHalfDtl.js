/**
 * Description: 物料单据表-->成品 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialhalfdtl.BillMaterialHalfDtl', {
    extend: 'Hc_Common.view.BaseBillDetailPage',
    alias: 'widget.billmaterialhalfdtl',
    requires: [
        'Hc_mdm.model.BillMaterial',
        'Hc_mdm.model.BillMaterialSize',
        'Hc_mdm.model.BillMaterialDtl',
        'Hc_mdm.view.billmaterialhalfdtl.BillMaterialHalfDtlController',
        'Hc_mdm.view.billmaterialhalfdtl.BillMaterialHalfDtlModel'
    ],
    controller: 'billmaterialhalfdtl',
    viewModel: {
        type: 'billmaterialhalfdtl'
    },

    initComponent: function () {
        var me = this,
        //型体联动款号
            //modelEStore = Ext.create('Hc_mdm.store.BasModel'),
            //modelGStore = Ext.create('Hc_mdm.store.BasModel'),
            //styleEStore = Ext.create('Hc_mdm.store.BasStyle'),
            //styleGStore = Ext.create('Hc_mdm.store.BasStyle'),
        //大类联动小类
            parentCategoryEStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            parentCategoryGStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            categoryEStore = Ext.create('Hc_mdm.store.BasCategory'),
            categoryGStore = Ext.create('Hc_mdm.store.BasCategory');
            parentCategoryEStore.proxy.extraParams['materialType'] = 2;
            parentCategoryGStore.proxy.extraParams['materialType'] = 2;

        Ext.apply(me, {
            billType: '124010',
            billItems: [
                //{name: 'billNo',bind:{value:'{billRow.billNo}'},reference : 'abillNo', xtype: 'textfield', fieldLabel: '单据编号',editable:false},
                {
                    name: 'maintainType', bind: {value: '{billRow.maintainType}'}, reference: 'maintainType',
                    xtype: 'extcombox', fieldLabel: '维护类型', displayvalue: "0=新建:1=修改", emptyText: "请选择",
                    allowBlank:false
                },
                {
                    name: 'materialType',
                    bind: {value: '{billRow.materialType}'},
                    reference: 'materialType',
                    xtype: 'extcombox',
                    fieldLabel: '物料类型',
                    displayvalue: "1=原料:2=半成品:3=成品",
                    canInput: false,
                    value: 2
                },
                {
                    name: 'billStatus',
                    bind: {value: '{billRow.billStatus}'},
                    xtype: 'extcombox',
                    allowBlank: false,
                    fieldLabel: '单据状态',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=bill_status',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    hidden: true,
                    reference: 'billStatus'
                },
                {name: 'remarks', bind: {value: '{billRow.remarks}'}, xtype: 'textfield', fieldLabel: '备注'}
            ],
            billLoadUrl: Hc.mdmPath + 'bill_material/list.json',
            billSaveUrl: Hc.mdmPath + 'bill_material/saveMasterCustomerList.json',
            billAuditUrl: Hc.mdmPath + 'bill_material/audit.json',
            billExportUrl: Hc.mdmPath + 'bill_material/do_export.json',
            billModel: 'Hc_mdm.model.BillMaterial',
            billSubGrid: ['mastergrid', 'grid2'],
            editStatus:10,

            gridColumns: [
                {dataIndex: 'lineId', text: '行id', hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'materialCode', text: '物料编码'},
                {
                    dataIndex: 'materialName', text: '物料名称', hidden: false,
                    width: 140
                },
                {
                    dataIndex: 'brandNo', text: '品牌',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                    displaymember: 'brandEname',
                    valuemember: 'brandNo',
                    hidden: false,
                    readOnly: true
                },
                {dataIndex: 'specialCode', text: '特征码'},
                {
                    dataIndex: 'sizeTypeNo', text: '码组',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json',
                    displaymember: 'sizeTypeName',
                    valuemember: 'sizeTypeNo',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'parentCategoryNo', text: '大类',
                    xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bill_material_dtl/getParentCategory.json?type=NO',
                    estore: parentCategoryEStore,
                    gstore: parentCategoryGStore,
                    displaymember: 'categoryName',
                    valuemember: 'categoryNo',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'categoryNo', text: '小类',
                    xtype: 'bllookupedit',
                    estore: categoryEStore,
                    gstore: categoryGStore,
                    displaymember: 'categoryName',
                    valuemember: 'categoryNo',
                    hidden: false,
                    readOnly: true
                },
                {dataIndex: 'advicePrice', text: '参考单价'},
                /*{
                    dataIndex: 'colorNo', text: '颜色',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_color/listAll.json',
                    displaymember: 'colorName',
                    valuemember: 'colorCode',
                    hidden: false,
                    readOnly: true
                },*/
                {
                    dataIndex: 'modelNo', text: '型体'
                    //xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bas_model/listAll.json',
                    //estore: modelEStore,
                    //gstore: modelGStore,
                   // displaymember: 'modelName',
                    //valuemember: 'modelNo',
                    //: false,
                    //readOnly: true
                },
                {
                    dataIndex: 'styleNo', text: '款号'
                    //xtype:'textfield'
                    /*xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bas_style/listAll.json',
                    estore: styleEStore,
                    gstore: styleGStore,
                    displaymember: 'styleName',
                    valuemember: 'styleNo',
                    readOnly: true
                    */
                },
                {
                    dataIndex: 'normalUnit', text: '基本单位',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'materialSource', text: '物料属性',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=material_source',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'taxRateNo', text: '税率',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                    displaymember: 'taxRateName',
                    valuemember: 'taxRateNo',
                    hidden: false,
                    readOnly: true
                },
                /*{
                 dataIndex: 'codeRuleNo', text: '编码规则',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo',
                 hidden: false,
                 readOnly:true
                 },*/
                {dataIndex: 'remarks', text: '备注', width: 140}
            ],
            gridPrimaryKey: 'lineId',
            gridModel: 'Hc_mdm.model.BillMaterialDtl',
            gridSubGrid: ['grid2'],
            gridLoadUrl: Hc.mdmPath + 'bill_material_dtl/list.json',

            //码组
            grid2Columns: [
                {dataIndex: 'lineId', text: '行id', editor: {allowBlank: true}, hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'sizeNo', text: '尺码', width: 140, editor: {allowBlank: false}},
                {dataIndex: 'barcode', text: '条码', width: 140, hidden: true}
            ],
            grid2Model: 'Hc_mdm.model.BillMaterialSize',
            grid2SupGrid: 'mastergrid',
            grid2PrimaryKey: 'lineId',
            grid2LoadUrl: Hc.mdmPath + 'bill_material_size/list.json',
            grid2UnionKey:'materialNo,sizeNo'
        });
        //物料明细
        var editMaterialInfo = {
            xtype: 'form',
            reference: 'editMaterialInfo',
            layout: {type: 'table', columns: 4},
            defaults: {labelAlign: 'right', labelWidth: 80, width: '100%'},
            collapsible: false,
            border: false,

            items: [
                {
                    xtype: 'textfield', fieldLabel: '行id',
                    bind: {value: '{gridRow.lineId}'}, hidden: true, name: 'lineId'
                },
                {
                    xtype: 'searchhelpfield', reference: 'materialNo', fieldLabel: '物料ID',
                    bind: {value: '{gridRow.materialNo}'}, allowBlank: false,
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字', maxLength: 20,
                    enforceMaxLength: true, name: 'materialNo',
                    isAutoLoad:false,
                    url: Hc.mdmPath + "bas_material/list.json?materialType=2",
                    otherFields: 'materialNo,materialCode,barcodeEan,materialName,specifications,oldCode,' +
                    'inventoryCategory,materialSource,taxRateNo,taxCategory,sizeTypeNo,allowSale,' +
                    'allowDelegate,allowPurchase,allowProduce,materialStatus,enableFlag,codeRuleNo,' +
                    'advicePrice,currencyNo,seasonNo,parentCategoryNo,categoryNo,modelNo,styleNo,' +
                    'productCode,manufacturer,brandNo,developmentTimes,lining,insoles,outerBottom,' +
                    'style,salesChannels,vampMaterial,colorNo,genderType,series,joinOrderMetting,' +
                    'textures,normalUnit,orderNo,remarks,specialCode,ifQc',
                    gridColumns: [
                        {
                            dataIndex: 'materialNo',
                            text: '物料ID',
                            width: 140
                        }, {
                            dataIndex: 'materialCode',
                            text: '物料编码'
                        }, {
                            dataIndex: 'materialName',
                            text: '物料名称',
                            width: 200
                        }
                    ],
                    searchItems: [
                        {name: 'materialNo', fieldLabel: '物料ID'},
                        {name: 'materialCode', fieldLabel: '物料编码'},
                        {name: 'materialName', fieldLabel: '物料名称'}
                    ],
                    winTitle: '选择物料',
                    winWidth: 480,
                    winHigh: 550
                },
                {
                    xtype: 'textfield', reference: 'materialCode', fieldLabel: '物料编码',
                    bind: {value: '{gridRow.materialCode}'}, allowBlank: false,
                    enforceMaxLength: true, name: 'materialCode'
                },
                {
                    xtype: 'textfield', reference: 'materialName', fieldLabel: '物料名称',
                    bind: {value: '{gridRow.materialName}'}, allowBlank: false,
                    colspan: 2, enforceMaxLength: true, name: 'materialName'
                },
                {
                    xtype: 'extcombox', reference: 'brandNo', fieldLabel: '品牌',
                    displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                    displaymember: 'brandEname',
                    valuemember: 'brandNo', name: 'brandNo',
                    bind: {value: '{gridRow.brandNo}'}, allowBlank: false
                },
                {
                    fieldLabel: '特征码', canInput: false, xtype: 'textfield', name: 'specialCode',
                    bind: {value: '{gridRow.specialCode}'}, reference: 'specialCode',
                    readOnly: true
                },
                {
                    xtype: 'extcombox', reference: 'sizeTypeNo', fieldLabel: '码组',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json',
                    displaymember: 'sizeTypeName', name: 'sizeTypeNo',
                    valuemember: 'sizeTypeNo',
                    bind: {value: '{gridRow.sizeTypeNo}'}, allowBlank: false
                },
                {
                    xtype: 'combo',
                    fieldLabel: '大类',
                    name: 'parentCategoryNo',
                    reference: 'parentCategoryNo',
                    editable: false,
                    displayField: 'categoryName',
                    valueField: 'categoryNo',
                    store: parentCategoryEStore,
                    renderer: function (value) {
                        var index = parentCategoryEStore.findExact('categoryNo', value);
                        return index > -1 ? parentCategoryEStore.getAt(index).data.categoryName : value;
                    },
                    listeners: {
                        'select': 'onChangeParentCategoryNo'
                    },
                    bind: {value: '{gridRow.parentCategoryNo}'}, allowBlank: false,
                    name: 'parentCategoryNo'
                },
                {
                    xtype: 'combo',
                    fieldLabel: '小类',
                    name: 'categoryNo',
                    reference: 'categoryNo',
                    editable: false,
                    displayField: 'categoryName',
                    valueField: 'categoryNo',
                    emptyText: "请先选择大类",
                    store: {
                        type: 'basestore',
                        fields: ['categoryNo', 'categoryName'],
                        proxy: {
                            url: Hc.mdmPath + 'bill_material_dtl/getCategory.json'
                        },
                        autoLoad: true,
                        listeners: {
                            beforequery: function () {
                                if (!me.lookupReference('parentCategoryNo').getValue()) {
                                    Ext.Msg.alert('提示', '请先选择大类');
                                    return false
                                }
                            }
                        }

                    },
                    listeners: {
                        'select': 'onChangeCategory'
                    },
                    bind: {value: '{gridRow.categoryNo}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'normalUnit', fieldLabel: '基本单位',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    bind: {value: '{gridRow.normalUnit}'}, allowBlank: false,
                    name: 'normalUnit'
                },
                {
                    xtype: 'searchhelpfield',
                    fieldLabel: '款号',
                    name: 'styleNo',
                    reference: 'styleNo',
                    url: Hc.mdmPath + 'bas_style/list.json',
                    otherFields: 'modelNo',
                    reference: 'styleNo',
                    isAutoLoad:false,
                    gridColumns: [
                        {
                            dataIndex: 'styleNo',
                            text: '款号编号',
                            flex:0.5
                        }, {
                            dataIndex: 'styleName',
                            text: '款号名称',
                            flex:0.5
                        }
                    ],
                    searchItems: [
                        {name: 'styleNo', fieldLabel: '款号编号'},
                        {name: 'styleName', fieldLabel: '款号名称'}
                    ],
                    winTitle: '选择款号',
                    winWidth: 480,
                    winHigh: 550,
                    bind: {value: '{gridRow.styleNo}'}, allowBlank: false
                },
                /*{
                    xtype: 'searchhelpfield',
                    fieldLabel: '型体',
                    name: 'modelNo',
                    reference: 'modelNo',
                    isAutoLoad:false,
                    url: Hc.mdmPath + 'bas_model/listAll.json',
                    gridColumns: [
                        {
                            dataIndex: 'modelId',
                            text: '编号',
                            width: 140
                        }, {
                            dataIndex: 'modelNo',
                            text: '编码'
                        }, {
                            dataIndex: 'modelName',
                            text: '名称',
                            width: 200
                        }
                    ],
                    searchItems: [
                        {name: 'modelId', fieldLabel: '编号'},
                        {name: 'modelNo', fieldLabel: '编码'},
                        {name: 'modelName', fieldLabel: '名称'}
                    ],
                    winTitle: '选择型体',
                    winWidth: 480,
                    winHigh: 550,
                    bind: {value: '{gridRow.modelNo}'}, allowBlank: false
                },*/
                {
                    xtype: 'textfield',
                    fieldLabel: '型体',
                    name: 'modelNo',
                    reference: 'modelNo',
                    bind: {value: '{gridRow.modelNo}'},
                    allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'materialSource', fieldLabel: '物料属性',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=material_source',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.materialSource}'}, allowBlank: false,
                    name: 'materialSource'
                },
                {
                    xtype: 'numberfield', reference: 'advicePrice', fieldLabel: '参考单价',
                    bind: {value: '{gridRow.advicePrice}'}, allowBlank: false,
                    name: 'advicePrice'
                },
                {
                    xtype: 'extcombox', reference: 'taxRateNo', fieldLabel: '税率',
                    displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                    displaymember: 'taxRateName',
                    valuemember: 'taxRateNo',
                    bind: {value: '{gridRow.taxRateNo}'}, allowBlank: false,
                    name: 'taxRateNo'
                },
                {
                    xtype: 'extcombox', reference: 'currencyNo', fieldLabel: '币别',
                    displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                    displaymember: 'currencyName',
                    valuemember: 'currencyNo',
                    bind: {value: '{gridRow.currencyNo}'}, canInput: false,
                    name: 'currencyNo', readOnly: true
                },
                {
                    xtype: 'textfield', reference: 'oldCode', fieldLabel: '旧物料编码', bind: {value: '{gridRow.oldCode}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入30位字母或数字',
                    maxLength: 30, name: 'oldCode',
                    enforceMaxLength: true
                },
                {
                    xtype: 'extcombox', reference: 'ifQc', fieldLabel: '是否质检', allowBlank: false,
                    displayvalue: "0=否:1=是", name: 'ifQc',
                    bind: {value: '{gridRow.ifQc}'}
                },
                /*{
                 xtype: 'extcombox', reference: 'codeRuleNo', fieldLabel: '编码规则', allowBlank: false,
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo', name: 'codeRuleNo',
                 bind: {value: '{gridRow.codeRuleNo}'}
                 },*/
                {
                    xtype: 'textfield', reference: 'remarks', fieldLabel: '备注', bind: {value: '{gridRow.remarks}'},
                    maxLength: 60, name: 'remarks', colspan: 2,
                    enforceMaxLength: true
                }
            ]
        };
        editMaterialInfo.layout.columns = 4;

        var bottomtabpanel = {
            xtype: "tabpanel",
            reference: "tabpanel",
            region: 'south',
            height: 180,
            split: true,
            autoDestroy: true,
            tabPosition: 'top',
            autoScroll: true,
            border: false,
            items: [
                {
                    layout: 'fit', index: 0, items: [editMaterialInfo], title: '物料明细',
                    autoScroll: true, border: 0, bodyPadding: 3
                },
                {layout: 'fit', index: 1, items: [me.grid2], title: '尺码明细', autoScroll: true, border: 0}
            ]
        };
        me.otherItems = [bottomtabpanel];

        me.callParent();
    }
});
