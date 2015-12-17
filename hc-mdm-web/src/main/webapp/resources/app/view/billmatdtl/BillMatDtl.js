/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmatdtl.BillMatDtl', {
    extend: 'Hc_Common.view.BaseBillDetailPage',
    alias: 'widget.billmatdtl',
    requires: [
        'Hc_mdm.model.BillMaterial',
        'Hc_mdm.model.BillMaterialSize',
        'Hc_mdm.model.BillMaterialDtl',
        'Hc_mdm.view.billmatdtl.BillMatDtlController',
        'Hc_mdm.view.billmatdtl.BillMatDtlModel',
        'Hc_mdm.ux.TreeSearchHelpField'
    ],
    controller: 'billmatdtl',
    viewModel: {
        type: 'billmatdtl'
    },

    initComponent: function () {
        var me = this,
        //大类联动小类
            parentCategoryEStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            parentCategoryGStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            categoryEStore = Ext.create('Hc_mdm.store.BasCategory'),
            categoryGStore = Ext.create('Hc_mdm.store.BasCategory');
            parentCategoryEStore.proxy.extraParams['materialType'] = 1;
            parentCategoryGStore.proxy.extraParams['materialType'] = 1;

        Ext.apply(me, {
            billType: '124015',
            billItems: [
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
                    value: 1
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
            //hasStatus2: true, 去掉最高状态
            editStatus:10,

            gridColumns: [
                {dataIndex: 'lineId', text: '行id', editor: {allowBlank: false}, hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'materialCode', text: '物料编码'},
                {dataIndex: 'materialName', text: '物料名称', width: 200},
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
                    //displayvalue:Hc.mdmPath+'bill_material_dtl/getCategory.json?type=NO',
                    estore: categoryEStore,
                    gstore: categoryGStore,
                    displaymember: 'categoryName',
                    valuemember: 'categoryNo',
                    hidden: false,
                    readOnly: true
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
                    dataIndex: 'supplyCategoryNo', text: '供货类别',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_supply_category/listAll.json',
                    displaymember: 'categoryName',
                    valuemember: 'categoryNo',
                    hidden: false,
                    readOnly: true
                },
                /*
                 {dataIndex: 'barcodeEan', text: '国际条码', editor: {allowBlank: true}, hidden: true},
                 {dataIndex: 'specifications', text: '规格型号', editor: {allowBlank: true}, hidden: true},
                 {dataIndex: 'oldCode', text: '旧物料编码', editor: {allowBlank: true}, hidden: true},
                 {
                 dataIndex: 'inventoryCategory', text: '存货类别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/
                {
                    dataIndex: 'materialSource', text: '物料属性',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=material_source',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    readOnly: true
                },
                /*{
                 dataIndex: 'taxRateNo', text: '税率',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                 displaymember: 'taxRateName',
                 valuemember: 'taxRateNo',
                 editor: {allowBlank: false}, hidden: true
                 },
                 {
                 dataIndex: 'taxCategory', text: '税种',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_tax_category/listAll.json',
                 displaymember: 'taxCategoryName',
                 valuemember: 'taxCategoryNo',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'allowSale',
                 text: '允许销售',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'allowDelegate',
                 text: '允许委外',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'allowPurchase',
                 text: '允许采购',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'allowProduce',
                 text: '允许生产',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'materialStatus',
                 text: '物料状态',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=模板:1=释放",
                 hidden: true
                 },
                 {
                 dataIndex: 'enableFlag',
                 text: '启用状态',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'codeRuleNo', text: '编码规则',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo',
                 editor: {allowBlank: false}, hidden: true
                 },
                 {dataIndex: 'advicePrice', text: '参考单价', editor: {allowBlank: false}, hidden: true},
                 {
                 dataIndex: 'currencyNo', text: '币别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                 displaymember: 'currencyName',
                 valuemember: 'currencyNo',
                 editor: {allowBlank: false}, hidden: true
                 },
                 {
                 dataIndex: 'seasonNo', text: '年季',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/
                /*{dataIndex: 'modelNo', text: '型体', editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'styleNo', text: '款号', editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'productCode', text: '客户产品货号', editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'manufacturer', text: '制造商',
                 xtype:'bllookupedit',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'brandNo', text: '品牌',editor: {allowBlank: false},hidden:true},
                 //{dataIndex: 'specialCode', text: '特征码',editor: {allowBlank: false},hidden:false},待添加此字段
                 {dataIndex: 'developmentTimes', text: '开发次数', editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'lining', text: '里料',
                 xtype:'bllookupedit',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=lining',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'insoles', text: '衬里/内垫',editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'outerBottom', text: '外底',editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'style', text: '风格',
                 xtype:'bllookupedit',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=style',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'salesChannels', text: '销售渠道',
                 xtype:'bllookupedit',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'vampMaterial', text: '帮面材料', editor: {allowBlank: false},hidden:true},*/
                /*{
                 dataIndex: 'colorNo', text: '颜色',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_color/listAll.json',
                 displaymember: 'colorName',
                 valuemember: 'colorCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'genderType',
                 text: '男/女鞋',
                 editor: {allowBlank: true},
                 xtype: 'bllookupedit',
                 displayvalue: "F=女:M=男",
                 hidden: true
                 },*/
                /*{dataIndex: 'series', text: '系列',
                 xtype:'bllookupedit',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=series',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 editor: {allowBlank: false},hidden:true},
                 {dataIndex: 'joinOrderMetting', text: '是否参加订货会', editor: {allowBlank: false},xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
                 {dataIndex: 'textures', text: '材质类别',
                 xtype:'bllookupedit',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=textures',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 editor: {allowBlank: false},hidden:true},*/
                {
                    dataIndex: 'purchaseUnit', text: '采购单位',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    readOnly: true
                },
                /*{
                 dataIndex: 'purchaseGroup', text: '采购组',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=purchaseGroup',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/
                {
                    dataIndex: 'ifQc',
                    text: '是否质检',
                    //editor: {allowBlank: false},
                    xtype: 'bllookupedit',
                    displayvalue: '0=否:1=是',
                    readOnly:true
                },
                {dataIndex: 'remarks', text: '备注', width: 140}
            ],
            gridPrimaryKey: 'lineId',
            gridModel: 'Hc_mdm.model.BillMaterialDtl',
            gridSubGrid: ['grid2'],
            gridLoadUrl: Hc.mdmPath + 'bill_material_dtl/list.json',
            gridSaveUrl: Hc.mdmPath + 'bill_material_dtl/batchOperate.json',

            //码组
            grid2Columns: [
                {dataIndex: 'lineId', text: '行id(主键、隐藏)', editor: {allowBlank: true}, hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: false}},
                {
                    dataIndex: 'barcode', text: '条码', editor: {allowBlank: true},
                    width: 140, hidden: true
                }
            ],
            grid2Model: 'Hc_mdm.model.BillMaterialSize',
            grid2SupGrid: 'mastergrid',
            //grid2PrimaryKey : 'lineId',
            grid2LoadUrl: Hc.mdmPath + 'bill_material_size/list.json',
            grid2SaveUrl: Hc.mdmPath + 'bill_material_size/batchOperate.json',
            grid2UnionKey:'materialNo,sizeNo'
        });
        Ext.apply(me.grid2, {batchUrl: me.grid2SaveUrl});

        var editMaterialInfo = {
            xtype: 'form',
            reference: 'editMaterialInfo',
            layout: {type: 'table', columns: 4},
            defaults: {labelAlign: 'right', labelWidth: 80, width: '100%'},
            collapsible: false,
            border: false,
            items: [
                {xtype: 'textfield', fieldLabel: '行id', bind: {value: '{gridRow.lineId}'}, hidden: true},
                {
                    xtype: 'searchhelpfield', reference: 'materialNo', fieldLabel: '物料ID',
                    bind: {value: '{gridRow.materialNo}'}, allowBlank: false,
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字', maxLength: 20,
                    enforceMaxLength: true, name: 'materialNo',
                    isAutoLoad:false,
                    url: Hc.mdmPath + "bas_material/list.json?materialType=1",
                    otherFields: 'materialNo,materialCode,barcodeEan,materialName,specifications,oldCode,' +
                    'inventoryCategory,materialSource,taxRateNo,taxCategory,sizeTypeNo,allowSale,' +
                    'allowDelegate,allowPurchase,allowProduce,materialStatus,enableFlag,codeRuleNo,' +
                    'advicePrice,currencyNo,seasonNo,parentCategoryNo,categoryNo,modelNo,styleNo,' +
                    'productCode,manufacturer,brandNo,developmentTimes,lining,insoles,outerBottom,' +
                    'style,salesChannels,vampMaterial,colorNo,genderType,series,joinOrderMetting,' +
                    'textures,normalUnit,orderNo,remarks,specialCode,supplyCategoryNo,purchaseUnit,' +
                    'purchaseGroup,ifQc',
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
                    xtype: 'textfield',
                    reference: 'materialCode',
                    fieldLabel: '物料编码',
                    bind: {value: '{gridRow.materialCode}'},
                    allowBlank: false,
                    //regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    //regexText: '请输入30位字母或数字',
                    //maxLength: 30,
                    //enforceMaxLength: true,
                    name: 'materialCode'
                },
                {
                    xtype: 'textfield', reference: 'materialName', fieldLabel: '物料名称',
                    bind: {value: '{gridRow.materialName}'}, allowBlank: false,
                    colspan: 2,
                    maxLength: 60,
                    enforceMaxLength: true,
                    name: 'materialName'
                },
                {
                    xtype: 'extcombox', reference: 'sizeTypeNo', fieldLabel: '码组',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json?enableFlag=1',
                    displaymember: 'sizeTypeName',
                    valuemember: 'sizeTypeNo',
                    bind: {value: '{gridRow.sizeTypeNo}'}, allowBlank: false,
                    name: 'sizeTypeNo'
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
                        select: 'onChangeParentCategoryNo'
                    },
                    bind: {value: '{gridRow.parentCategoryNo}'}, allowBlank: false
                },
                /*{
                    xtype: 'treesearchhelpfield',
                    fieldLabel: '大类',
                    name: 'parentCategoryNo',
                    reference: 'parentCategoryNo',
                    editable: false,
                    bind: {value: '{gridRow.parentCategoryNo}'}, allowBlank: false,
                    url:Hc.mdmPath+'bas_category/listAll.json',
                    treeColumns:[
                        {
                            xtype: 'treecolumn',
                            flex: 1,
                            dataIndex: 'categoryName',
                            text: "类别维护",
                            sortable: false,
                            hideable: false
                        }
                    ]
                },*/
                {
                    xtype: 'ddlfield',
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
                    xtype: 'extcombox', reference: 'supplyCategoryNo', fieldLabel: '供货类别',
                    displayvalue: Hc.mdmPath + 'bas_supply_category/listAll.json',
                    displaymember: 'categoryName', allowBlank: false,
                    valuemember: 'categoryNo',
                    bind: {value: '{gridRow.supplyCategoryNo}'},
                    name: 'supplyCategoryNo'
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
                    xtype: 'extcombox', reference: 'purchaseUnit', fieldLabel: '采购单位',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    bind: {value: '{gridRow.purchaseUnit}'}, allowBlank: false,
                    name: 'purchaseUnit'
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
                    xtype: 'numberfield',
                    reference: 'advicePrice',
                    fieldLabel: '参考单价',
                    bind: {value: '{gridRow.advicePrice}'},
                    allowBlank: false,
                    name: 'advicePrice'
                },
                {
                    xtype: 'textfield',
                    reference: 'specifications',
                    fieldLabel: '规格型号',
                    bind: {value: '{gridRow.specifications}'},
                    allowBlank: true,
                    maxLength: 30,
                    enforceMaxLength: true,
                    name: 'specifications'
                },
                {
                    xtype: 'extcombox', reference: 'purchaseGroup', fieldLabel: '采购组',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=purchaseGroup',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.purchaseGroup}'}, allowBlank: false,
                    name: 'purchaseGroup'
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
                    xtype: 'textfield', reference: 'oldCode', fieldLabel: '旧物料编码', bind: {value: '{gridRow.oldCode}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入30位字母或数字',
                    maxLength: 30,
                    enforceMaxLength: true,
                    name: 'oldCode'
                },
                {
                    xtype: 'textfield',
                    reference: 'barcodeEan',
                    fieldLabel: '国际条码',
                    bind: {value: '{gridRow.barcodeEan}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true,
                    name: 'barcodeEan'
                },
                {
                    xtype: 'extcombox', reference: 'currencyNo', fieldLabel: '币别',
                    displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                    displaymember: 'currencyName',
                    valuemember: 'currencyNo',
                    bind: {value: '{gridRow.currencyNo}'}, allowBlank: false,
                    name: 'currencyNo', canInput: false
                },
                {
                    xtype: 'extcombox', reference: 'ifQc', fieldLabel: '是否质检', allowBlank: false,
                    displayvalue: '1=是:0=否', name: 'ifQc',
                    bind: {value: '{gridRow.ifQc}'}
                },
                /*{
                 xtype: 'extcombox', reference: 'codeRuleNo', fieldLabel: '编码规则',
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo',
                 bind: {value: '{gridRow.codeRuleNo}'}, allowBlank: false,
                 name:'codeRuleNo'
                 },*/
                /*{
                 xtype: 'textfield', reference: 'orderNo', fieldLabel: '序号',
                 bind: {value: '{gridRow.orderNo}'}, allowBlank: false, canInput: false,
                 maxLength: 11, enforceMaxLength: true
                 },*/
                {
                    xtype: 'textfield', reference: 'remarks', fieldLabel: '备注',
                    bind: {value: '{gridRow.remarks}'},
                    maxLength: 60, enforceMaxLength: true,
                    name: 'remarks'
                }
                /*{xtype : 'extcombox',reference : 'inventoryCategory',fieldLabel : '存货类别',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.inventoryCategory}'}},
                 {xtype : 'extcombox',reference : 'taxCategory',fieldLabel : '税种',
                 displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
                 displaymember:'taxCategoryName',
                 valuemember:'taxCategoryNo',
                 bind : {value : '{gridRow.taxCategory}'}},
                 {xtype : 'checkbox',reference:'allowSale',fieldLabel : '允许销售',bind : {value : '{gridRow.allowSale}'}},
                 {xtype : 'checkbox',reference:'allowDelegate',fieldLabel : '允许委外',bind : {value : '{gridRow.allowDelegate}'}},
                 {xtype : 'checkbox',reference:'allowPurchase',fieldLabel : '允许采购',bind : {value : '{gridRow.allowPurchase}'}},
                 {xtype : 'checkbox',reference:'allowProduce',fieldLabel : '允许生产',bind : {value : '{gridRow.allowProduce}'}},
                 {xtype : 'checkbox',reference:'materialStatus',fieldLabel : '物料状态',bind : {value : '{gridRow.materialStatus}'}},
                 {xtype : 'checkbox',reference:'enableFlag',fieldLabel : '启用状态',bind : {value : '{gridRow.enableFlag}'}},*/
                /*{xtype : 'textfield',reference:'modelNo',fieldLabel : '型体',bind : {value : '{gridRow.modelNo}'}},
                 {xtype : 'textfield',reference:'styleNo',fieldLabel : '款号',bind : {value : '{gridRow.styleNo}'}},
                 {xtype : 'textfield',reference:'productCode',fieldLabel : '客户产品货号',bind : {value : '{gridRow.productCode}'}},
                 {xtype : 'extcombox',reference:'manufacturer',fieldLabel : '制造商',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.manufacturer}'}},
                 {xtype : 'textfield',reference:'brandNo',fieldLabel : '品牌编号',bind : {value : '{gridRow.brandNo}'}},
                 {xtype : 'textfield',reference:'developmentTimes',fieldLabel : '开发次数',bind : {value : '{gridRow.developmentTimes}'}},
                 {xtype : 'extcombox',reference:'lining',fieldLabel : '里料',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=lining',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.lining}'}},
                 {xtype : 'textfield',reference:'insoles',fieldLabel : '衬里/内垫',bind : {value : '{gridRow.insoles}'}},
                 {xtype : 'textfield',reference:'outerBottom',fieldLabel : '外底',bind : {value : '{gridRow.outerBottom}'}},
                 {xtype : 'extcombox',reference:'style',fieldLabel : '风格',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=style',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.style}'}},
                 {xtype : 'extcombox',reference:'salesChannels',fieldLabel : '销售类型',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.salesChannels}'}},
                 {xtype : 'textfield',reference:'vampMaterial',fieldLabel : '帮面材料',bind : {value : '{gridRow.vampMaterial}'}},*/
                /*{xtype : 'extcombox',reference:'series',fieldLabel : '系列',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=series',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.series}'},allowBlank:false},
                 {xtype : 'checkbox',reference:'joinOrderMetting',fieldLabel : '是否参加订货会',bind : {value : '{gridRow.joinOrderMetting}'}},
                 {xtype : 'extcombox',reference:'textures',fieldLabel : '材质类别',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=textures',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.textures}'}},*/
            ]
        };
        editMaterialInfo.layout.columns = 4;

        var bottomtabpanel = {
            xtype: "tabpanel",
            region: 'south',
            reference: 'tabpanel',
            height: 180,
            split: true,
            autoDestroy: true,
            tabPosition: 'top',
            autoScroll: true,
            border: false,
            items: [
                {
                    layout: 'fit',
                    index: 0,
                    items: [editMaterialInfo],
                    title: '物料明细',
                    autoScroll: true,
                    border: 0,
                    bodyPadding: 3
                },
                {layout: 'fit', index: 1, items: [me.grid2], title: '尺码明细', autoScroll: true, border: 0}
            ]
        };
        me.otherItems = [bottomtabpanel];

        me.callParent();
    }
});