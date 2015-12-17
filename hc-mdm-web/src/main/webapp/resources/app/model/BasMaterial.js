/**
 * Description: 物料信息表 bas_material/bas_material_size(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMaterial', {
    extend: 'Ext.data.Model',
    alias: 'model.basmaterial',
     fields: [
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'materialCode', text: '物料编码', type: 'string'},
         {name: 'barcodeEan', text: '国际条码', type: 'string'},
         {name: 'materialName', text: '物料名称', type: 'string'},
         {name: 'specifications', text: '规格型号', type: 'string'},
         {name: 'oldCode', text: '旧物料编码(旧系统编码或者重新编号的情况)', type: 'string'},
         {name: 'inventoryCategory', text: '存货类别(取数据字典 inventory_category)', type: 'string'},
         {name: 'materialSource', text: '物料属性(数据字典)', type: 'string'},
         {name: 'taxRateNo', text: '税率编号(数据字典)', type: 'string'},
         {name: 'taxCategory', text: '税分类(取数据字典 tax_category)', type: 'string'},
         {name: 'sizeTypeNo', text: '码组(取bas_size_type)', type: 'string'},
         {name: 'allowSale', text: '允许销售(0=否 1=是)', type: 'int'},
         {name: 'allowDelegate', text: '允许委外(0=否 1=是)', type: 'int'},
         {name: 'allowPurchase', text: '允许采购(0=否 1=是)', type: 'int'},
         {name: 'allowProduce', text: '允许生产(0=否 1=是)', type: 'int'},
         {name: 'materialStatus', text: '物料状态(0=模版 1=释放)', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int'},
         {name: 'codeRuleNo', text: '编码规则(取bas_code_rule)', type: 'string'},
         {name: 'advicePrice', text: '参考单价', type: 'string'},
         {name: 'currencyNo', text: '币别编号(取bas_currency表)', type: 'string'},
         {name: 'seasonNo', text: '年季(取数据字典 season_no )', type: 'string'},
         {name: 'categoryNo', text: '小类(取categroy到小类)', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'productCode', text: '客户产品货号', type: 'string'},
         {name: 'manufacturer', text: '制造商', type: 'string'},
         {name: 'brandNo', text: '品牌编号(取bas_brand)', type: 'string'},
         {name: 'developmentTimes', text: '开发次数', type: 'int'},
         {name: 'outerBottom', text: '衬里/内垫-外底(对应 outer_bottom )', type: 'string'},
         {name: 'style', text: '风格', type: 'string'},
         {name: 'salesChannels', text: '销售渠道(销售类型 0=零售 1=电商)', type: 'int'},
         {name: 'vampMaterial', text: '帮面材料', type: 'string'},
         {name: 'colorNo', text: '颜色(取bas_color)', type: 'string'},
         {name: 'genderType', text: '男/女鞋(F=女 M=男)', type: 'string'},
         {name: 'series', text: '系列(数据字典  )', type: 'string'},
         {name: 'joinOrderMetting', text: '是否参加订货会(0=否 1=是)', type: 'int'},
         {name: 'textures', text: '材质类别(数据字典)', type: 'string'},
         {name: 'normalUnit', text: '基本单位(取bas_unit表)', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'materialType', text: '物料类型(0=成品/半成品 1=原料)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '最后修改人', type: 'string'},
         {name: 'modifyTime', text: '最后修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'parentCategoryNo', text: '大类(取categroy到大类)', type: 'string'},
         {name: 'specialCode', text: '特征码', type: 'string'},
         {name: 'lining', text: '里料(取数据字典 D:单里 M:毛里 R:绒里 F:仿毛里)', type: 'string'},
         {name: 'insoles', text: '衬里/内垫', type: 'string'},
         {name: 'purchaseUnit', text: '采购单位(取bas_unit表)', type: 'string'},
         {name: 'purchaseGroup', text: '采购组', type: 'string'},
         {name: 'supplyCategoryNo', text: '供货类别', type: 'string'},
         {name: 'ifQc', text: '是否质检', type: 'int'}
         ]
  });