/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_mdm.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_mdm',
    

    appFolder:'resources/app',

    init: function() {
        var me = this;
        console.info("执行力没有大按法点法");
       // me.setDefaultToken('bascity');
        Ext.setGlyphFontFamily('FontAwesome');
        Ext.QuickTips.init();
    },

    launch: function () {

    }
});

/**
 * Description: 会计期间信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasAccountPeriod', {
    extend: 'Ext.data.Model',
    alias: 'model.basaccountperiod',
    fields: [
        {name: 'accountYearMonth', text: '会计年月', type: 'string'},
        {name: 'beginDate', text: '开始日期', type: 'string'},
        {name: 'endDate', text: '结束日期', type: 'string'},
        {name: 'orderNo', text: '排列序号', type: 'string'},
        {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'string'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间', type: 'string'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间', type: 'string'},
        {name: 'remarks', text: '备注', type: 'string'}
    ]
});
/**
 * Description: 单据类型表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBillType', {
    extend: 'Ext.data.Model',
    alias: 'model.basbilltype',
     fields: [
         {name: 'billTypeNo', text: '单据类型编号', type: 'string'},
         {name: 'billTypeName', text: '单据类型名称', type: 'string'},
         {name: 'codeRuleNo', text: '编码规则编号', type: 'string'},
         {name: 'billGroup', text: '单据分组(取自数据字典 bill_group )', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_size(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBom', {
    extend: 'Ext.data.Model',
    alias: 'model.basbom',
     fields: [
         {name: 'bomId', text: 'BOMID', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'bomType', text: 'BOM分类(1=标准BOM 2=配置BOM)', type: 'int'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string'},
         {name: 'versionNo', text: '版本序号(1->n)', type: 'int'},
         {name: 'bomStatus', text: 'BOM状态(0=编辑 1=审核 2=生效)', type: 'int'},
         {name: 'modifier', text: '最后修改人', type: 'string'},
         {name: 'modifyTime', text: '最后修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'brandNo', text: '品牌', type: 'string'}
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBomList', {
    extend: 'Ext.data.Model',
    alias: 'model.basbomlist',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'bomId', text: 'BOMID', type: 'int'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'materialNo', text: '', type: 'string'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string',allowNull:true},
         {name: 'dosageNumerator', text: '用量(分子)', type: 'float',allowNull:true},
         {name: 'dosageDenominator', text: '用量(分母)', type: 'float',allowNull:true},
         {name: 'pdTypeNo', text: '用途(产品设计材料类别编号)', type: 'string',allowNull:true},
         {name: 'storeNo', text: '预设仓库(仓库编号)', type: 'string',allowNull:true},
         {name: 'isVirtual', text: '是否虚拟件(0=否 1=是)', type: 'int',allowNull:true}
         ],
         idProperty: 'orderNo',
         identifier: 'negative'
  });
/**
 * Description: BOM尺码横排
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      yu.jh
 * Createdate:  2015年4月25日下午3:10:40
 *
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 * 2015年4月25日     	yu.jh
 */
Ext.define('Hc_mdm.model.BasBomListSize', {
    extend: 'Hc_Common.model.MaterialSize',
    alias: 'model.basbomlistsize',
     fields: [
         {name: 'orderNo', text: '序号', type: 'int'},
		 {name: 'materialNo', text: '物料编号', type: 'string'},
		 {name: 'materialCode', text: '物料编码', type: 'string'},
		 {name: 'materialName', text: '物料名称', type: 'string'},
		 {name: 'newSizeTypeNo', text: '清单码组', type: 'string'},
         {name: 'sizeTypeNo', text: '表头码组', type: 'string'},
         {name: 'oldSizeNo', text: '表头码编号', type: 'string'},
         {name: 'newSizeNo', text: '清单码编号', type: 'string'}
         ]
  });
/**
 * Description: 品牌信息表(来源于集团主数据 org_organ_brand、org_organ_brand_detail )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBrand', {
    extend: 'Ext.data.Model',
    alias: 'model.basbrand',
     fields: [
         {name: 'brandId', text: '品牌id', type: 'int'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'brandCode', text: '品牌编码', type: 'string'},
         {name: 'brandEname', text: '品牌英文名', type: 'string'},
         {name: 'brandCname', text: '品牌中文名', type: 'string'},
         {name: 'brandCategory', text: '品牌类别', type: 'string'},
         {name: 'brandUpperNo', text: '品牌部编号', type: 'string'},
         {name: 'specialCode', text: '特征码', type: 'string'},
         {name: 'affiliation', text: '本部编码', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 品牌关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasBrandRelation', {
    extend: 'Ext.data.Model',
    alias: 'model.basbrandrelation',
     fields: [
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'companyNo', text: '公司编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
    
  });
﻿/**
 * Description: 类别信息表(来源于集团主数据 pro_category )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.bascategory',
     fields: [
         {name: 'categoryId', text: '类别id', type: 'int'},
         {name: 'categoryNo', text: '类别编号', type: 'string'},
         {name: 'categoryName', text: '类别名称', type: 'string'},
         {name: 'specialCode', text: '特征码', type: 'string'},
         {name: 'parentCategoryId', text: '上级类别', type: 'int'},
         {name: 'levelNo', text: '类别级别', type: 'int'},
         {name: 'searchCode', text: '类别路径', type: 'string'},
         {name: 'affiliation', text: '本部编码', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
    idProperty: 'categoryId',
    identifier: 'negative'
  });
/**
 * Description: 行政市信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCity', {
    extend: 'Ext.data.Model',
    alias: 'model.bascity',
     fields: [
         {name: 'cityNo', text: '行政市编号', type: 'string'},
         {name: 'cityName', text: '行政市名称', type: 'string'},
         {name: 'cityLname', text: '行政市详细名称', type: 'string'},
         {name: 'cityOpcode', text: '行政市特征码(3位字母或数字,同省下不可以重复)', type: 'string',defaultValue:'---'},
         {name: 'provinceNo', text: '所属行政省编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 编码规则配置表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCodeRule', {
    extend: 'Ext.data.Model',
    alias: 'model.bascoderule',
     fields: [
         {name: 'codeRuleNo', text: '编码规则编号', type: 'string'},
         {name: 'codeRuleName', text: '编码规则名称', type: 'string'},
         {name: 'codeRuleType', text: '规则类型', type: 'int'},
         {name: 'allowManualEdit', text: '允许手工编辑', type: 'int'},
         {name: 'keepContinuous', text: '保持连续编号', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 编码规则配置明细表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCodeRuleDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.bascoderuledtl',
     fields: [
         {name: 'codeRuleId', text: '编码规则明细ID', type: 'int'},
         {name: 'codeRuleNo', text: '编码规则编号', type: 'string'},
         {name: 'codeBeginPosition', text: '编码开始位置', type: 'int'},
         {name: 'codeEndPosition', text: '编码结束位置', type: 'int'},
         {name: 'charLength', text: '字符长度', type: 'int'},
         {name: 'codeType', text: '编码类型', type: 'int'},
         {name: 'constValue', text: '常量值', type: 'string'},
         {name: 'dateFormatValue', text: '日期格式化值', type: 'string'},
         {name: 'fieldValue', text: '字段值', type: 'string'},
         {name: 'cutBeginPosition', text: '字段截取开始位置', type: 'int'},
         {name: 'cutEndPosition', text: '字段截取结束位置', type: 'int'},
         {name: 'currentSerialDate', text: '当前流水日期', type: 'date'},
         {name: 'currentSerialNo', text: '当前流水号', type: 'int'},
         {name: 'resetMode', text: '重置方式', type: 'int'},
         {name: 'padChar', text: '补位符', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
         idProperty: 'orderNo',
         identifier: 'sequential'
  });
/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasColor', {
    extend: 'Ext.data.Model',
    alias: 'model.bascolor',

     fields: [
         {name: 'colorId', text: '颜色id(对应 color_id )', type: 'int'},
         {name: 'colorNo', text: '颜色编号(对应 color_no )', type: 'string'},
         {name: 'colorCode', text: '颜色编码(对应 color_code )', type: 'string'},
         {name: 'colorName', text: '颜色名称(对应 color_name )', type: 'string'},
         {name: 'colorSeriesCode', text: '色系编码(对应 color_series_no )', type: 'string'},
         {name: 'colorSeriesName', text: '色系名称(对应 color_series_name )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'},
         ]
  });
/**
 * Description: 公司信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:24:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCompany', {
    extend: 'Ext.data.Model',
    alias: 'model.bascompany',
     fields: [
         {name: 'companyNo', text: '公司编号', type: 'string'},
         {name: 'companyName', text: '公司名称', type: 'string'},
         {name: 'companyType', text: '公司类型(0=法人组织 1=利润中心)', type: 'int',defaultValue:1},
         {name: 'companyForm', text: '公司形态(数据字典 company_form )', type: 'string',defaultValue:'公司'},
         {name: 'regionNo', text: '地区编号', type: 'string'},
         {name: 'bankName', text: '开户银行', type: 'string'},
         {name: 'bankAccountCode', text: '银行账号', type: 'string'},
         {name: 'bankAccountName', text: '银行账户名', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'taxpayingNo', text: '税务登记号', type: 'string'},
         {name: 'taxLevel', text: '纳税级别(0=一般纳税人 1=小规模纳税人)', type: 'int'},
         {name: 'legalPerson', text: '法人代表', type: 'string'},
         {name: 'certificateCode', text: '营业证号', type: 'string'},
         {name: 'faxNo', text: '传真号', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'postCode', text: '邮政编码', type: 'string'},
         {name: 'provinceNo', text: '行政省编号', type: 'string'},
         {name: 'cityNo', text: '行政市编号', type: 'string'},
         {name: 'countyNo', text: '行政县编号', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'businessFunctions', text: '业务职能(2的倍数，每一位代表一项)', type: 'int'},
         {name: 'dataSource', text: '数据来源(0=主数据 1=工厂)', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 国家信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:16:04
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCountry', {
    extend: 'Ext.data.Model',
    alias: 'model.bascountry',
     fields: [
         {name: 'countryNo', text: '国家编号', type: 'string'},
         {name: 'countryName', text: '国家名称', type: 'string'},
         {name: 'currencyNo', text: '币别编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 行政县信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:43
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCounty', {
    extend: 'Ext.data.Model',
    alias: 'model.bascounty',
     fields: [
         {name: 'countyNo', text: '行政县编号', type: 'string'},
         {name: 'countyName', text: '行政县名称', type: 'string'},
         {name: 'countyLname', text: '行政县详细名称', type: 'string'},
         {name: 'countyOpcode', text: '行政县特征码(2位字母或数字,同城市下不可以重复)', type: 'string'},
         {name: 'cityNo', text: '所属行政市编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 币别信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 15:29:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCurrency', {
    extend: 'Ext.data.Model',
    alias: 'model.bascurrency',
     fields: [
         {name: 'currencyNo', text: '币别编号', type: 'string'},
         {name: 'currencyName', text: '币别名称', type: 'string'},
         {name: 'currencySymbol', text: '币别符号', type: 'string'},
         {name: 'isSymbolDisplay', text: '是否显示符号(0=否 1=是)', type: 'int'},
         {name: 'fomart', text: '显示格式', type: 'string'},
         {name: 'priceDigits', text: '单价小数位数', type: 'int'},
         {name: 'valueDigits', text: '金额小数位数', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-18 08:59:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasCustomer', {
    extend: 'Ext.data.Model',
    alias: 'model.bascustomer',
     fields: [
         {name: 'customerNo', text: '客户编号', type: 'string'},
         {name: 'customerCode', text: '客户编码', type: 'string'},
         {name: 'customerName', text: '客户简称', type: 'string'},
         {name: 'customerLname', text: '客户全称', type: 'string'},
         {name: 'customerType', text: '客户类型', type: 'string'},
         {name: 'customerLevel', text: '客户等级', type: 'string'},
         {name: 'customerGroup', text: '客户群组', type: 'string'},
         {name: 'regionNo', text: '地区编码', type: 'string'},
         {name: 'managingCityNo', text: '管理城市编码', type: 'string'},
         {name: 'bankName', text: '开户银行', type: 'string'},
         {name: 'bankAccountCode', text: '银行账号', type: 'string'},
         {name: 'bankAccountName', text: '银行账户名', type: 'string'},
         {name: 'taxpayingNo', text: '税务登记号', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'provinceNo', text: '行政省编号', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'currencyNo', text: '币别', type: 'string'},
         {name: 'paymentClauseNo', text: '收款条件编号', type: 'string'},
         {name: 'paymentMethodNo', text: '结算方式编号', type: 'string'},
         {name: 'combineBill', text: '合并发票(0=是 1=否)', type: 'int'},
         {name: 'summaryBill', text: '汇总开票(1=同一订单 2=同一付款人)', type: 'int',defaultValue:1},
         {name: 'independentBill', text: '独立发票(0=不 1=每个地址 2=每个发货通知)', type: 'int'},
         {name: 'exchangeRateType', text: '汇率类型(1=通用费率)', type: 'int',defaultValue:1},
         {name: 'taxRateNo', text: '增值税(数据取bas_tax_rate表，通过字段is_added_tax是否增值税区别)', type: 'string'},
         {name: 'countryNo', text: '国家', type: 'string'},
         {name: 'language', text: '语言', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 2=作废 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 送货地点表(来源于集团主数据仓库表 org_storage )(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDeliveryPoint', {
    extend: 'Ext.data.Model',
    alias: 'model.basdeliverypoint',
     fields: [
         {name: 'pointId', text: '送货地点ID(对应 storage_id )', type: 'int'},
         {name: 'pointNo', text: '送货地点编号(对应 storage_no )', type: 'string'},
         {name: 'pointCode', text: '送货地点编码(对应 storage_code )', type: 'string'},
         {name: 'pointName', text: '送货地点名称(对应 storage_name )', type: 'string'},
         {name: 'provinceNo', text: '行政省编号(对应 province_no )', type: 'string'},
         {name: 'cityNo', text: '行政市编号(对应 city_no )', type: 'string'},
         {name: 'countyNo', text: '行政县编号(对应 county_no )', type: 'string'},
         {name: 'regionNo', text: '地区编码(对应 region_no )', type: 'string'},
         {name: 'businessCityNo', text: '经营城市编号(对应 business_city_no )', type: 'string'},
         {name: 'storageType', text: '仓库类型(对应 storage_type )', type: 'string'},
         {name: 'storageLevel', text: '仓库级别(对应 storage_level )', type: 'string'},
         {name: 'areaTotal', text: '总面积(对应 area_total )', type: 'number'},
         {name: 'contacter', text: '联系人(对应 contact )', type: 'string'},
         {name: 'phoneNo', text: '电话(对应 telno )', type: 'string'},
         {name: 'mobileNo', text: '手机(对应 mobile_phone )', type: 'string'},
         {name: 'contactAddress', text: '联系地址(对应 address )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 2=作废 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'},
         ]
  });
/**
 * Description: 数据字典主表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDict', {
    extend: 'Ext.data.Model',
    alias: 'model.basdict',
    fields: [
        {name: 'dictId', text: 'Id', type: 'string'},
        {name: 'dictCode', text: '字典编号', type: 'string'},
        {name: 'dictName', text: '字典名称', type: 'string'},
        {name: 'appNo', text: '应用代号', type: 'int'},
        {name: 'dictLevel', text: '层级', type: 'int'},
        {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间', type: 'string'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间', type: 'string'},
        {name: 'remarks', text: '备注', type: 'string'}
    ]
});
/**
 * Description: 数据字典主表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDictDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.basdictdtl',
    fields: [
        {name: 'dictDtlId', text: 'Id', type: 'string'},
        {name: 'dictCode', text: '字典编号', type: 'string'},
        {name: 'dictId', text: 'Id', type: 'string'},
        {name: 'itemCode', text: '明细编码', type: 'string'},
        {name: 'itemName', text: '明细名称', type: 'string'},
        {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间', type: 'string'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间', type: 'string'},
        {name: 'remarks', text: '备注', type: 'string'}
    ]
});
/**
 * Description: 事业部信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:26:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasDivision', {
    extend: 'Ext.data.Model',
    alias: 'model.basdivision',
     fields: [
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'divisionName', text: '事业部名称', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'faxNo', text: '传真号', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'postCode', text: '邮政编码', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 厂区信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:08
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasFactory', {
    extend: 'Ext.data.Model',  
    alias: 'model.basfactory',
     fields: [
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'factoryName', text: '厂区名称', type: 'string'},
         {name: 'contacter', text: '联系人', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'faxNo', text: '传真号', type: 'string'},
         {name: 'email', text: '电子邮箱', type: 'string'},
         {name: 'postCode', text: '邮政编码', type: 'string'},
         {name: 'contactAddress', text: '联系地址', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 费用信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 14:34:52
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasFee', {
	extend : 'Ext.data.Model',
	alias : 'model.basfee',
	fields : [ {
		name : 'feeNo',
		text : '费用编号',
		type : 'string',
		allowNull : true
	}, {
		name : 'feeName',
		text : '费用名称',
		type : 'string'
	}, {
		name : 'taxRateNo',
		text : '税率编号',
		type : 'string'
	}, {
		name : 'feeCategory',
		text : '费用分类(取自数据字典 fee_category )',
		type : 'string'
	}, {
		name : 'subjectNo',
		text : '科目编号',
		type : 'int'
	}, {
		name : 'orderNo',
		text : '排列序号',
		type : 'int'
	}, {
		name : 'enableFlag',
		text : '启用状态(0=禁用 1=启用)',
		type : 'int'
	}, {
		name : 'creator',
		text : '建档人',
		type : 'string'
	}, {
		name : 'createTime',
		text : '建档时间'
	}, {
		name : 'modifier',
		text : '修改人',
		type : 'string'
	}, {
		name : 'modifyTime',
		text : '修改时间'
	}, {
		name : 'remarks',
		text : '备注',
		type : 'string'
	}]
});
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMajor', {
    extend: 'Ext.data.Model',
    alias: 'model.basmajor',
     fields: [
         {name: 'categoryNo', text: '', type: 'string'},
         {name: 'categoryId', text: '', type: 'int'},
         {name: 'categoryName', text: '', type: 'string'},
         {name: 'materialType', text: '', type: 'int'},
         {name: 'orderNo', text: '', type: 'int'},
         {name: 'creator', text: '', type: 'string'},
         {name: 'createTime', text: '', type: 'string'},
         {name: 'modifier', text: '', type: 'string'},
         {name: 'modifyTime', text: '', type: 'date'},
         {name: 'remarks', text: '', type: 'string'}
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });
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
/**
 * Description: 物料尺码表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMaterialSize', {
    extend: 'Ext.data.Model',
    alias: 'model.basmaterialsize',
     fields: [
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'barcode', text: '条码(产品货号+尺码=条码)', type: 'string'}
         ]
  });
/**
 * Description: 物料单位转换表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:55:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasMaterialUnitSwitch', {
    extend: 'Ext.data.Model',
    alias: 'model.basmaterialunitswitch',
     fields: [
         {name: 'switchId', text: '转换编号', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'unitNoA', text: 'a单位编号', type: 'string'},
         {name: 'unitNoB', text: 'b单位编号', type: 'string'},
         {name: 'qtyA', text: 'a单位数量', type: 'float'},
         {name: 'qtyB', text: 'b单位数量', type: 'float'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:'1'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
   
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-13 09:48:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasModel', {
    extend: 'Ext.data.Model',
    alias: 'model.basmodel',
     fields: [
         {name: 'modelId', text: '型体id', type: 'string'},
         {name: 'modelNo', text: '型体编码', type: 'string'},
         {name: 'modelName', text: '型体名称', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  
  });
/**
 * Description: 组织试图-grid(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-01 14:40:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasOrganizationGrid', {
    extend: 'Ext.data.Model',
    alias: 'model.BasOrganizationGrid',
     fields: [
         {name: 'orgNo', text: '编号', type: 'string'},
         {name: 'orgName', text: '名称', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 付款条件信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPaymentClauseFK', {
    extend: 'Ext.data.Model',
    alias: 'model.baspaymentclausefk',
     fields: [
         {name: 'paymentClauseNo', text: '付款条件编号', type: 'string'},
         {name: 'paymentClauseName', text: '付款条件名称', type: 'string'},
         {name: 'paymentClauseType', text: '付款条件类型', type: 'string', defaultValue:'1'},
         {name: 'creditDays', text: '信用天数', type: 'int'},
         {name: 'preferentialDays', text: '优惠天数', type: 'int'},
         {name: 'dueDateMethod', text: '到期日计算方式', type: 'string'},
         {name: 'preferentialRate', text: '优惠率/金额', type: 'number'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'preferentialWay', text: '优惠方式', type: 'string'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 收款条件信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPaymentClauseSK', {
    extend: 'Ext.data.Model',
    alias: 'model.baspaymentclausesk',
     fields: [
         {name: 'paymentClauseNo', text: '收款条件编号', type: 'string'},
         {name: 'paymentClauseName', text: '收款条件名称', type: 'string'},
         {name: 'paymentClauseType', text: '收款条件类型', type: 'string', defaultValue:'2',hidden:true},
         {name: 'creditDays', text: '信用天数', type: 'int'},
         {name: 'preferentialDays', text: '优惠天数', type: 'int'},
         {name: 'dueDateMethod', text: '到期日计算方式', type: 'string'},
         {name: 'preferentialRate', text: '优惠率/金额', type: 'number'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'preferentialWay', text: '优惠方式', type: 'string'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 结算方式信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 16:33:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPaymentMethod', {
	extend : 'Ext.data.Model',
	alias : 'model.baspaymentmethod',
	fields : [ {
		name : 'paymentMethodNo',
		text : '结算方式编号',
		type : 'string',
		allowNull : true
	}, {
		name : 'paymentMethodName',
		text : '结算方式名称',
		type : 'string'
	}, {
		name : 'orderNo',
		text : '排列序号',
		type : 'int'
	}, {
		name : 'enableFlag',
		text : '启用状态(0=禁用 1=启用)',
		type : 'int'
	}, {
		name : 'creator',
		text : '建档人',
		type : 'string'
	}, {
		name : 'createTime',
		text : '建档时间'
	}, {
		name : 'modifier',
		text : '修改人',
		type : 'string'
	}, {
		name : 'modifyTime',
		text : '修改时间'
	}, {
		name : 'remarks',
		text : '备注',
		type : 'string'
	}]
});
/**
 * Description: 行政省信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:56:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasProvince', {
    extend: 'Ext.data.Model',
    alias: 'model.basprovince',
     fields: [
         {name: 'provinceNo', text: '行政省编号', type: 'string'},
         {name: 'provinceName', text: '行政省名称', type: 'string'},
         {name: 'provinceLname', text: '行政省详细名称', type: 'string'},
         {name: 'provinceOpcode', text: '行政省特征码', type: 'string'},
         {name: 'countryNo', text: '国家编号', type: 'string'},
         {name: 'directControlled', text: '是否直辖市', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 采购组(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasPurchaseGroup', {
    extend: 'Ext.data.Model',
    alias: 'model.baspurchasegroup',
     fields: [
         {name: 'purchaseGroupNo', text: '采购组编号', type: 'string'},
         {name: 'purchaseGroupName', text: '采购组名称', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });
/**
 * Description: 地区信息表(来源于集团主数据 org_organ_region )(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 18:09:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasRegion', {
    extend: 'Ext.data.Model',
    alias: 'model.basregion',
     fields: [
         {name: 'regionId', text: '地区ID', type: 'int'},
         {name: 'regionNo', text: '地区编号', type: 'string'},
         {name: 'regionCode', text: '地区编码', type: 'string'},
         {name: 'regionName', text: '地区名称', type: 'string'},
         {name: 'countryNo', text: '国家编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用 2=作废)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 尺码信息表(来源于集团主数据 pro_size_detail )(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSize', {
    extend: 'Ext.data.Model',
    alias: 'model.bassize',
     fields: [
         {name: 'sizeId', text: '尺码id(对应 size_id )', type: 'int'},
         {name: 'sizeNo', text: '尺码编号(对应 size_no )', type: 'string'},
         {name: 'sizeCode', text: '尺码编码(对应 size_code )', type: 'string'},
         {name: 'sizeName', text: '尺码名称(对应 size_name )', type: 'string'},
         {name: 'sizeTypeNo', text: '尺码类别编号(对应 size_type_no )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'}
         ]
  });
/**
 * Description: 尺码类别信息表(来源于集团主数据 pro_size_attribute )(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSizeType', {
    extend: 'Ext.data.Model',
    alias: 'model.bassizetype',
     fields: [
         {name: 'sizeTypeId', text: '尺码类别id(对应 size_type_id )', type: 'int'},
         {name: 'sizeTypeNo', text: '尺码类别编号(对应 size_type_no )', type: 'string'},
         {name: 'sizeTypeCode', text: '尺码类别编码(对应 size_type_code )', type: 'string'},
         {name: 'sizeTypeName', text: '尺码类别名称(对应 size_type_name )', type: 'string'},
         {name: 'orderNo', text: '排列序号(对应 order_no )', type: 'int'},
         {name: 'enableFlag', text: '启用状态(对应 status 0=未生效 1=启用 )', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人(对应 editor )', type: 'string'},
         {name: 'modifyTime', text: '修改时间(对应 edittm )'},
         {name: 'remarks', text: '备注(对应 remarks )', type: 'string'}
         ]
});
/**
 * Description: 仓库信息表(来源于M3 MITWHL)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStore', {
    extend: 'Ext.data.Model',
    alias: 'model.basstore',
     fields: [
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'storeName', text: '仓库名称', type: 'string'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'storeType', text: '仓库类型(仓库属性 取数据字典 store_type)', type: 'string'},
         {name: 'isMaster', text: '是否主仓(0=否 1=是)', type: 'int',defaultValue:1},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 储位信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreCell', {
    extend: 'Ext.data.Model',
    alias: 'model.basstorecell',
     fields: [
         {name: 'lineId', text: 'ID主键', type: 'int'},
         {name: 'cellNo', text: '储位编号', type: 'string'},
         {name: 'cellCode', text: '储位编码', type: 'string'},
         {name: 'cellName', text: '储位名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},
         {name: 'roomNo', text: '库区编号', type: 'string'},
         {name: 'channelNo', text: '通道编号', type: 'string'},
         {name: 'categoryNo', text: '物料大类(类别编号)', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 通道信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreChannel', {
    extend: 'Ext.data.Model',
    alias: 'model.basstorechannel',
     fields: [
         {name: 'lineId', text: '主键', type: 'int'},
         {name: 'channelNo', text: '通道编号', type: 'string'},
         {name: 'channelName', text: '通道名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},        
         {name: 'roomNo', text: '库区编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 库区信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreRoom', {
    extend: 'Ext.data.Model',
    alias: 'model.basstoreroom',
     fields: [
         {name: 'lineId', text: '自增主键', type: 'int'},
         {name: 'roomNo', text: '库区编号', type: 'string'},
         {name: 'roomName', text: '库区名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},
         {name: 'roomType', text: '库区类型(数据字典 room_type )', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 仓区信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStoreZone', {
    extend: 'Ext.data.Model',
    alias: 'model.basstorezone',
     fields: [
         {name: 'lineId', text: '自增主键', type: 'int'},
         {name: 'zoneNo', text: '仓区编号', type: 'string'},
         {name: 'zoneName', text: '仓区名称', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-13 18:25:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasStyle', {
    extend: 'Ext.data.Model',
    alias: 'model.basstyle',
     fields: [
         {name: 'styleId', text: '款号id', type: 'int'},
         {name: 'modelNo', text: '形体编码', type: 'string'},
         {name: 'styleNo', text: '款号编码', type: 'string'},
         {name: 'styleName', text: '款号名称', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]    
  });
/**
 * Description: 供应商信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-23 15:10:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplier', {
    extend: 'Ext.data.Model',
    alias: 'model.bassupplier',
     fields: [
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'supplierName', text: '供应商名称', type: 'string'},
         {name: 'supplierSname', text: '供应商简称', type: 'string'},
         {name: 'supplierAddress', text: '供应商地址', type: 'string'},
         {name: 'countryNo', text: '国家代码', type: 'string'},
         {name: 'provinceNo', text: '省编号', type: 'string'},
         {name: 'postcodeNo', text: '邮政编码', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'phoneNo', text: '电话号码', type: 'string'},
         {name: 'faxNo', text: '传真号码', type: 'string'},
         {name: 'email', text: '邮件地址', type: 'string'},
         {name: 'website', text: '公司网站', type: 'string'},
         {name: 'supplierType', text: '供应商类型(供应商状态 supplier_type)', type: 'string'},
         {name: 'supplierStatus', text: '供应商状态(供应商状态 supplier_status)', type: 'string'},
         {name: 'factoryType', text: '厂商类别(取数据字典factory_type)', type: 'string'},
         {name: 'fixInDivision', text: '固定使用组织(0=否 1=是)', type: 'int'},
         {name: 'currencyNo', text: '订单币种(币别编号)', type: 'string'},
         {name: 'paymentClauseNo', text: '付款条件(bas_payment_clause)', type: 'string'},
         {name: 'paymentMethodNo', text: '付款方式(bas_payment_method)', type: 'string'},
         {name: 'taxpayingNo', text: '税务登记号', type: 'string'},
         {name: 'addRateNo', text: '增值税登记号', type: 'string'},
         {name: 'invoiceType', text: '发票类型(取自数据字典 invoice_type)', type: 'string'},
         {name: 'taxRateNo', text: '默认税率(bas_tax_rate)', type: 'string'},
         {name: 'financeAddress', text: '财务信函地址', type: 'string'},
         {name: 'lastInvoiceDate', text: '最近发票日期', type: 'date'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 供应商使用品牌(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-31 14:31:22
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplierBrand', {
    extend: 'Ext.data.Model',
    alias: 'model.bassupplierbrand',
     fields: [
         {name: 'brandId', text: '使用组织id', type: 'int'},
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]  
  });
/**
 * Description: 供应商联系人信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplierContacter', {
    extend: 'Ext.data.Model',
    alias: 'model.bassuppliercontacter',
     fields: [
         {name: 'contacterId', text: '联系人id', type: 'int'},
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'contacterCalled', text: '联系人称呼(取数据字典 contacter_called)', type: 'string'},
         {name: 'contacterName', text: '联系人姓名', type: 'string'},
         {name: 'contacterDept', text: '联系人部门(取数据字典 contacter_dept)', type: 'string'},
         {name: 'contacterDuty', text: '联系人职务(取数据字典 contacter_duty)', type: 'string'},
         {name: 'mobileNo', text: '手机号码', type: 'string'},
         {name: 'phoneNo', text: '电话号码', type: 'string'},
         {name: 'faxNo', text: '传真号码', type: 'string'},
         {name: 'email', text: '邮件地址', type: 'string'},
         {name: 'isDefault', text: '是否默认联系人(0=否 1=是)', type: 'int'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplierSupplyCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.bassuppliersupplycategory',
     fields: [
         {name: 'lineId', text: '行id', type: 'int'},
         {name: 'supplierNo', text: '供应商编号', type: 'string'},
         {name: 'categoryNo', text: '类别编号', type: 'string'},
         {name: 'purchaseType', text: '采购类型', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-15 18:24:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasSupplyCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.bassupplycategory',
     fields: [
         {name: 'categoryNo', text: '类别编号', type: 'string'},
         {name: 'categoryName', text: '类别名称', type: 'string'},
         {name: 'purchaseType', text: '采购类型', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue: 1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
    
  });
/**
 * Description: 税种信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:51:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasTaxCategory', {
	extend : 'Ext.data.Model',
	alias : 'model.bastaxcategory',
	fields : [ {
		name : 'taxCategoryNo',
		text : '税种编号',
		type : 'string'
	}, {
		name : 'taxCategoryName',
		text : '税种名称',
		type : 'string'
	}, {
		name : 'currencyNo',
		text : '币别编号',
		type : 'string'
	}, {
		name : 'orderNo',
		text : '排列序号',
		type : 'int'
	}, {
		name : 'enableFlag',
		text : '启用状态(0=禁用 1=启用)',
		type : 'int'
	}, {
		name : 'creator',
		text : '建档人',
		type : 'string'
	}, {
		name : 'createTime',
		text : '建档时间'
	}, {
		name : 'modifier',
		text : '修改人',
		type : 'string'
	}, {
		name : 'modifyTime',
		text : '修改时间'
	}, {
		name : 'remarks',
		text : '备注',
		type : 'string'
	}, ],
});
/**
 * Description: 税率信息表(app/model) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:52:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasTaxRate', {
	extend : 'Ext.data.Model',
	alias : 'model.bastaxrate',
	fields : [ {
		name : 'taxRateNo',
		text : '税率编号',
		type : 'string'
	}, {
		name : 'taxRateName',
		text : '税率名称',
		type : 'string'
	}, {
		name : 'taxRate',
		text : '税率(%)',
		type : 'number'
	}, {
		name : 'taxCategoryNo',
		text : '税种编号',
		type : 'string'
	}, {
		name : 'isAddedTax',
		text : '是否增值税(1=是 0=否)',
		type : 'int'
	}, {
		name : 'orderNo',
		text : '排列序号',
		type : 'int'
	}, {
		name : 'enableFlag',
		text : '启用状态(0=禁用 1=启用)',
		type : 'int'
	}, {
		name : 'creator',
		text : '建档人',
		type : 'string'
	}, {
		name : 'createTime',
		text : '建档时间'
	}, {
		name : 'modifier',
		text : '修改人',
		type : 'string'
	}, {
		name : 'modifyTime',
		text : '修改时间'
	}, {
		name : 'remarks',
		text : '备注',
		type : 'string'
	}],
});
/**
 * Description: 计量单位信息表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-14 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasUnit', {
    extend: 'Ext.data.Model',
    alias: 'model.basunit',
    fields: [
         {name: 'unitNo', text: '单位编号', type: 'string'},
         {name: 'unitName', text: '单位名称', type: 'string'},
         {name: 'specification', text: '规格', type: 'string'},
         {name: 'decimalDigits', text: '小数位数', type: 'int'},
         {name: 'flagMaterial', text: '物料单位标志', type: 'int'},
         {name: 'flagPurchase', text: '采购单位标志', type: 'int'},
         {name: 'flagBom', text: 'BOM单位标志', type: 'int'},
         {name: 'flagDeliver', text: '发运单位标志', type: 'int'},
         {name: 'flagQuality', text: '质检单位标志', type: 'int'},
         {name: 'enableFlag', text: '启用状态', type: 'int',defaultValue:1},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });


/**
 * Description: 计量单位转换表(通用)(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasUnitSwitch', {
    extend: 'Ext.data.Model',
    alias: 'model.basunitswitch',
     fields: [
         {name: 'switchId', text: '转换编号', type: 'int'},
         {name: 'unitNoA', text: 'a单位编号', type: 'string'},
         {name: 'unitNoB', text: 'b单位编号', type: 'string'},
         {name: 'qtyA', text: 'a单位数量', type: 'number'},
         {name: 'qtyB', text: 'b单位数量', type: 'number'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 工作中心(车间)信息表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:24
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BasWorkshop', {
    extend: 'Ext.data.Model',
    alias: 'model.basworkshop',
     fields: [
         {name: 'workshopNo', text: '工作中心编号', type: 'string'},
         {name: 'workshopName', text: '工作中心名称', type: 'string'},
         {name: 'companyNo', text: '公司', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'workshopType', text: '工作中心类型(数据字典 workshop_type )', type: 'string'},
         {name: 'workshopLeader', text: '工作中心负责人', type: 'string'},
         {name: 'deptNo', text: '部门编号(对应HR部门)', type: 'int',allowNull:true},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=未生效 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: bill_bom/bill_bom_list/bill_bom_list_size(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillBom', {
    extend: 'Ext.data.Model',
    alias: 'model.billbom',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'maintainType', text: '维护类型(1=修改2=用途转换3=状态变更)', type: 'int',allowNull:true},
         {name: 'materialNo', text: '物料编号(成品、半成品)', type: 'string'},
         {name: 'oldBrandNo', text: '老品牌', type: 'string',allowNull:true},
         {name: 'newBrandNo', text: '新品牌', type: 'string',allowNull:true},
         {name: 'oldBomPurpose', text: '原BOM用途(S2=开发 STD=标准)', type: 'string',allowNull:true},
         {name: 'newBomPurpose', text: '新BOM用途(STD=标准 SUB=委外 SPD=预测)', type: 'string',allowNull:true},
         {name: 'bomType', text: 'BOM分类(1=标准BOM 2=配置BOM)', type: 'int'},
         {name: 'versionNo', text: '版本序号(1->n)', type: 'int',allowNull:true},
         {name: 'bomStatus', text: 'BOM状态(0=编辑 1=审核 2=生效)', type: 'int',allowNull:true},
         {name: 'billStatus', text: '单据状态(0=编辑 1=审核)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},         
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: BOM单据物料清单表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillBomList', {
    extend: 'Ext.data.Model',
    alias: 'model.billbomlist',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'lineId', text: '行id(主键、隐藏)', type: 'int'},
         {name: 'orderNo', text: '序号', type: 'int',allowNull:true},
         {name: 'parentOrderNo', text: '上层序号', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'materialCode', text: '物料编号', type: 'string'},
         {name: 'materialName', text: '物料编号', type: 'string'},
         {name: 'sizeTypeNo', text: '物料编号', type: 'string'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string'},
         {name: 'dosageNumerator', text: '用量(分子)', type: 'number'},
         {name: 'dosageDenominator', text: '用量(分母)', type: 'number'},
         {name: 'pdTypeNo', text: '用途(产品设计材料类别编号)', type: 'string'},
         {name: 'storeNo', text: '预设仓库(仓库编号)', type: 'string'},
         {name: 'isVirtual', text: '是否虚拟件(0=否 1=是)', type: 'int'},
         {name: 'updateFlag', text: '修改标识(0=否 1=是)', type: 'int'},
         {name: 'replaceFlag',type: 'string'}
         ],
         idProperty: 'orderNo',
         identifier: 'negative'
  });
/**
 * Description: BOM尺码替代表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      yu.jh
 * Createdate:  2015年4月23日上午11:22:26
 *
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 * 2015年4月23日     	yu.jh
 */
Ext.define('Hc_mdm.model.BillBomListSize', {
    extend: 'Hc_Common.model.MaterialSize',
    alias: 'model.billbomlistsize',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'orderNo', text: '序号', type: 'int'},
		 {name: 'materialNo', text: '物料编号', type: 'string'},
		 {name: 'materialCode', text: '物料编码', type: 'string'},
		 {name: 'materialName', text: '物料名称', type: 'string'},
		 {name: 'newSizeTypeNo', text: '清单码组', type: 'string'},
         {name: 'sizeTypeNo', text: '表头码组', type: 'string'},
         {name: 'oldSizeNo', text: '表头码编号', type: 'string'},
         {name: 'newSizeNo', text: '清单码编号', type: 'string'}
         ]
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillMaterial', {
    extend: 'Ext.data.Model',
    alias: 'model.billmaterial',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'maintainType', text: '维护类型(0=新建 1=修改)', type: 'int'},
         {name: 'materialType', text: '物料类型(0=成品/半成品 1=原料)', type: 'int'},
         {name: 'operator', text: '操作人', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'billStatus', text: '单据状态', type: 'int',defaultValue:'10'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillMaterialDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.billmaterialdtl',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'lineId', text: '行id(主键、隐藏)', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'materialCode', text: '物料编码', type: 'string',defaultValue:'待编码'},
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
         {name: 'parentCategoryNo', text: '大类(取categroy到大类)', type: 'string'},
         {name: 'categoryNo', text: '小类(取categroy到小类)', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'productCode', text: '客户产品货号', type: 'string'},
         {name: 'manufacturer', text: '制造商', type: 'string'},
         {name: 'brandNo', text: '品牌编号(取bas_brand)', type: 'string'},
         {name: 'specialCode', text: '特征码', type: 'string'},
         {name: 'developmentTimes', text: '开发次数', type: 'int'},
         
         {name: 'lining', text: '里料(取数据字典 D:单里 M:毛里 R:绒里 F:仿毛里)', type: 'string'},
         {name: 'insoles', text: '衬里/内垫', type: 'string'},
         {name: 'outerBottom', text: '外底', type: 'string'},
         {name: 'style', text: '风格', type: 'string'},
         {name: 'salesChannels', text: '销售渠道(销售类型 0=零售 1=电商)', type: 'string'},
         {name: 'vampMaterial', text: '帮面材料', type: 'string'},
         {name: 'colorNo', text: '颜色(取bas_color)', type: 'string'},
         {name: 'genderType', text: '男/女鞋(F=女 M=男)', type: 'string'},
         {name: 'series', text: '系列(数据字典  )', type: 'string'},
         {name: 'joinOrderMetting', text: '是否参加订货会(0=否 1=是)', type: 'int'},
         {name: 'textures', text: '材质类别(数据字典)', type: 'string'},
         {name: 'normalUnit', text: '基本单位(取bas_unit表)', type: 'string'},
         
         {name: 'purchaseUnit', text: '采购单位(取bas_unit表)', type: 'string'},
         {name: 'purchaseGroup', text: '采购组', type: 'string'},
         {name: 'supplyCategoryNo', text: '供货类别', type: 'string'},
         
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'ifQc', text: '是否质检', type: 'int'}
     ]
  });
/**
 * Description: 物料尺码表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:03
 * @version 1.0.0
 */
Ext.define('Hc_mdm.model.BillMaterialSize', {
    extend: 'Ext.data.Model',
    alias: 'model.billmaterialsize',
     fields: [
         {name: 'billNo', text: '单据号', type: 'string'},
         {name: 'lineId', text: '行id(主键、隐藏)', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'barcode', text: '条码(产品货号+尺码=条码)', type: 'string'}
         ]
  });
/**
 * Description: 小类store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasCategory',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCategory',

    model:'Hc_mdm.model.BasCategory',
    proxy: {
        url: Hc.mdmPath+'bill_material_dtl/getCategory.json'  
    }
});

/**
 * Description: 公用行政市store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-30 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.store.BasCity',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCity',

    model:'Hc_mdm.model.BasCity',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_city/listAll.json?enableFlag=1'    
    }
});

/**
 * Description: 公用国家store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-15 
 */
Ext.define('Hc_mdm.store.BasCountry',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCountry',

    model:'Hc_mdm.model.BasCountry',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_country/listAll.json?enableFlag=1'    
    }
});

/**
 * Description: 公用行政县store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-30 14:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.store.BasCounty',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasCounty',

    model:'Hc_mdm.model.BasCounty',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_county/listAll.json?enableFlag=1'    
    }
});

/**
 * Description: 型体store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasModel',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasModel',

    model:'Hc_mdm.model.BasModel',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_model/listAll.json'    
    }
});

/**
 * Description: 大类store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasParentCategory',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasParentCategory',

    model:'Hc_mdm.model.BasCategory',
    proxy: {
        //url: Hc.mdmPath+'bill_material_dtl/getParentCategory.json?levelNo=1'
        //url:Hc.mdmPath + 'bas_category/listAll.json?parentCategoryId=1'
    	url:Hc.mdmPath + 'bas_major/listvo.json'
    }
});

/**
 * Description: 公用行政省store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-30 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.store.BasProvince',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasProvince',

    model:'Hc_mdm.model.BasProvince',
    proxy: {
        url: Hc.mdmPath+'bas_province/listAll.json?enableFlag=1'    
    }
});

/**
 * Description: 公用仓库store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-29 
 */
Ext.define('Hc_mdm.store.BasStore',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStore',

    model:'Hc_mdm.model.BasStore',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store/listAll.json'    
    }
});
/**
 * Description: 公用通道store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-30 
 */
Ext.define('Hc_mdm.store.BasStoreChannel',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStoreChannel',

    model:'Hc_mdm.model.BasStoreChannel',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store_channel/listAll.json'    
    }
});
/**
 * Description: 公用库区store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-30 
 */
Ext.define('Hc_mdm.store.BasStoreRoom',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStoreRoom',

    model:'Hc_mdm.model.BasStoreRoom',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store_room/listAll.json'    
    }
});
/**
 * Description: 公用仓区store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liaoxuan
 * @date:  2015-04-29 
 */
Ext.define('Hc_mdm.store.BasStoreZone',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStoreZone',

    model:'Hc_mdm.model.BasStoreZone',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_store_zone/listAll.json'    
    }
});
/**
 * Description: 款号store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyh
 * @date:  2015-04-23 
 */
Ext.define('Hc_mdm.store.BasStyle',{
    extend:'Hc_Common.store.NoajaxComBase',

    alias:'store.BasStyle',

    model:'Hc_mdm.model.BasStyle',
    autoLoad:true,
    proxy: {
        url: Hc.mdmPath+'bas_style/listAll.json'    
    }
});

/**
 * Description: 数据精灵
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/4/10 0010
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_mdm.ux.TreeSearchHelpField', {
    extend: 'Ext.form.field.Text',
    //xtype: 'treesearchhelpfield',
    alias:'widget.treesearchhelpfield',
    enableKeyEvents: true,

    //指定后端取数据的URL
    url: '',

    //指定弹出tree 列
    treeColumns: null,
    rootCategoryName:'类别维护',

    //指定弹出窗中的查询条件
    //searchItems: null,
    //searchColumn:4,
    //fieldWidth:'100%',

    winTitle: '选择器',
    winHeight:500,
    winWidth:700,
    isAutoLoad:true,

    //返回值写入其它的列（如有多个，用逗号分隔）
    otherFields: '',

    //通过哪个列的值去过滤(如有多个，用逗号分隔)
    fromFields: '',

    //字段映射对照，即当页面的字段名跟精灵中的字段名不同时，做一个对照表，如("id=dictId,text=dictName")
    fieldMap:'',

    listeners: {
        keydown: 'onKeyDown',
        keypress:'onKeyPress',
        blur:'onBlur',
        afterrender:'onrendered',
        change:'onChange',
        scope: 'this'
    },

    triggers:{
        search: {
            cls: 'x-form-search-trigger',
            weight: 1,
            handler: 'showSelectWin',
            scope: 'this'
        }
    },

    needCall:false,
    checkValue:true,

    initComponent: function () {
        var me = this;
        me.needCall = false;
        me.enableKeyEvents = true;
        me.callParent(arguments);
        me.oldValue = me.getValue();

        if(!me.treeColumns){
            me.getTrigger('search').hide();
        }
    },

    onrendered:function(){
        var me = this;
        if(me.inputEl) {
            me.inputEl.on('dblclick', function () {
            	//dwh
            	//判断当前组件是否可用
            	if(me.readOnly||me.canInput==false||me.isDisabled()==true){
            		return;
            	}
                me.showSelectWin();
            },me);
        }
    },

    onChange:function(){
        var me = this;
        if(me.up('grid')) return;
        if(Ext.isEmpty( me.getValue())){
            me.setOtherFieldsVal();
        }
    },

    /**弹出选择框*/
    showSelectWin: function () {
        var me = this;
        if (!me.treeColumns || !me.url || me.readOnly || me.disabled) return;
        var fields = [];
        Ext.each(me.treeColumns, function (column) {
            fields.push(column.dataIndex)
        });
        var store = Ext.create('Hc_Framework.store.TreeBase', {
            model:'Hc_mdm.model.BasCategory',
            fields: fields,
            autoLoad: false,
            proxy: {
                url: me.url
            },
            root: {
                id:0,
                categoryName: me.rootCategoryName,
                categoryId:0,
                expanded: false
            },
            nodeParam:'parentCategoryId',
            parentIdProperty:'parentCategoryId'
        });

        var params = me.getFromFieldsVal();
        if (!Ext.isEmpty(params)) {
            store.proxy.extraParams.queryCondition = JSON.stringify(params);
        }
        if (me.isAutoLoad) {
            store.load();
        }
        var items = [{
            xtype: 'treepanel',
            //border: false,
            region: 'center',
            columns: me.treeColumns,
            rootVisible: false,
            lines: true,
            itemId:'menutree',
            split: true,
            store: store,
            listeners: {
                itemdblclick: function (obj, record) {
                    me.needCall = false;
                    me.setOtherFieldsVal(record.data);
                    obj.up('window').close();
                }
            }
        }];

        var fn = function (btn) {
            var form = btn.up('form'),
                s = [].concat(params);
            if (!form.isValid()) return;
            var val = form.getValues();
            for (var field in val) {
                if (!Ext.isEmpty(val[field])) {
                    s.push({
                        property: field,
                        value: val[field],
                        operator: 15
                    });
                }
            }
            store.proxy.extraParams.queryCondition = JSON.stringify(s);
            store.reload();
        };

        var win = Ext.widget('window', {
            title: me.winTitle,
            width: me.winWidth,
            height: me.winHeight,
            modal: true,
            constrain:true,
            layout: 'border',
            closeAction: 'destroy',
            autoShow: true,
            items: items,
            bbar: ['->', {
                xtype: 'button',
                text: '确认',
                glyph: Hc.Icon.btnSave,
                handler: 'onReturnValue',
                scope: me
            }, {
                xtype: 'button',
                text: '取消',
                glyph: Hc.Icon.btnCancel,
                handler: function (btn) {
                    btn.up('window').close();
                }
            }]
        });

        var searchform = win.down('form'),
            objs = searchform && searchform.query('textfield,combo,datefield,numberfield');
        if(objs){
            Ext.each(objs,function(txt){
                txt.on('specialkey',function(obj,e){
                    if(e.ctrlKey && e.getKey()=== e.ENTER){
                        fn(obj);
                    }
                });
                
                //dwh 添加双击清空数据
                txt.labelEl.on('dblclick',function(obj,e){
                	
                	//dwh
                	//判断当前组件是否可用
                	if(txt.readOnly||txt.canInput==false||txt.isDisabled()==true){
                		return;
                	}
                	txt.setValue("");
                });
            })
        }
    },

    /**弹出框返回值*/
    onReturnValue: function (btn) {

        //me.setOtherFieldsVal(items[0].data);
        win.close();
    },

    /**数据发生变化时*/
    onBlur:function() {
        this.sendToServer();
    },

    /**按下回车键时*/
    onKeyDown: function (e) {
        var me = this;
        if (e.getKey() === e.ENTER || e.getKey() === e.TAB) {
            me.sendToServer();
        } else if (e.getKey() === e.F4) {
            me.showSelectWin();
        } else if (e.getKey() === e.BACKSPACE|| (e.ctrlKey && e.getKey()== e.V)) {
            me.needCall = true;
        }
    },

    onKeyPress:function(e){
        this.needCall = true;
    },

    getFieldMap:function(){
        var map=[],
            me = this;
        if(!me.fieldMap) return map;
        var list = me.fieldMap.split(',');
        Ext.each(list, function (item) {
            var keys = item.split('=');
            if(keys.length==2){
                var obj ={
                    s:keys[0],
                    t:keys[1]
                };
                map.push(obj)
            }
        });
        return map;
    },

    /**获取过滤条件*/
    getFromFieldsVal:function() {

        var me = this, params = [];

        if (!me.fromFields) return params;

        var fields = me.fromFields.split(','),
            context = me.up().context, val,
            form = me.up('form'),
            fieldmap = me.getFieldMap();
        if (context || form) {
            Ext.each(fields, function (f) {
                if (context) {
                    val = context.record.get(f);
                }
                if (!val && !form) {
                    var txt = Hc.getField(form, f);
                    if (txt) {
                        val = txt.getValue();
                    }
                }
                var map = Ext.Array.findBy(fieldmap, function (fm) {
                    return fm.s == f;
                });
                params.push({
                    property: (map && map.t) || f,
                    value: val || '',
                    operator: 10
                })
            });
        }

        return params;
    },

    /**提交后端，返回对应的记录*/
    sendToServer:function() {
        var me = this;
        if(!me.needCall || !me.checkValue) return;
        me.needCall = false;

        if (!me.url || Ext.isEmpty(me.getValue())) {
            me.setOtherFieldsVal();
            return;
        }

        var params = me.getFromFieldsVal(),
            val = me.getValue(),
            map = Ext.Array.findBy(me.getFieldMap(),function(fm){
                return fm.s == me.name;
            }),
            fname = map && map.t || me.name;

        params.push({
            property: fname,
            value: val,
            operator: 10
        });

        var options = {
            url: me.url,
            params: {
                queryCondition: JSON.stringify(params)
            },
            method: 'POST',
            success: function (d) {
                try {
                    var result = JSON.parse(d.responseText);
                    if (!result.list || result.list.length == 0) {
                        Hc.alert('输入【'+val+'】是无效的值', function () {
                            me.setOtherFieldsVal();
                        });

                    } else {
                        me.setOtherFieldsVal(result.list[0]);
                    }
                } catch (e) {
                    Hc.alert('输入值【'+val+'】后端验证失败', function () {
                        me.setOtherFieldsVal();
                    });

                }
            },
            failure: function () {
                Hc.alert('数据精灵验证失败，请联系管理员', function () {
                    me.setOtherFieldsVal();
                });
            }
        };
        Hc.callServer(options);
    },

    /**设置相关控件的值*/
    setOtherFieldsVal: function (itemInfo) {

        var me = this,
            form = me.up('form'),
            grid = me.up('grid'),
            context = me.up().context,
            record,
            fieldmap = me.getFieldMap();

        itemInfo = itemInfo || {};

        if (context) {
            record = context.record;
        } else if (form) {
            record = form.getRecord();
        }

        if(grid && context){
            grid.editingPlugin.startEdit(record,context.column);
        }

        if (me.afterCall(me, itemInfo, record, context) === false) return;

        var map = Ext.Array.findBy(fieldmap, function (fm) {
            return fm.s == me.name;
        }),
            fname = map &&map.t||me.name,
            selfValue = itemInfo[fname];

        if(selfValue==null) selfValue = me.oldValue;


        me.setValue(selfValue);
        if (context) {
            record.set(me.name, selfValue);
        }

        me.oldValue = me.getValue();

        if (!me.otherFields) return;

        var fields = me.otherFields.split(',');
        Ext.each(fields, function (field) {
            map = Ext.Array.findBy(fieldmap, function (fm) {
                return fm.s == field;
            });
            fname = map && map.t || field;
            if (context) {
                record.set(field, itemInfo[fname] || '');
            } else {
                var txt = Hc.getField(form, field);
                if (txt) {
                    txt.setValue(itemInfo[fname] || '');
                }
                if (record) {
                    record.set(field, itemInfo[fname] || '');
                }
            }
        });
    },
    /**返回值之后处理接口，由开发人员处理
     * txtobj ， 控件本身
     * newdata,  返回的记录值
     * record,   原记录值即 form，或　grid 绑定的行
     * context, 网格中编辑事件对应的 context
     * */
    afterCall:function(txtobj, newdata,record,context) {
    }
});
/**
 * Description: 会计期间信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basaccountperiod.BasAccountPeriod', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basaccountperiod',
	
	controller: 'basaccountperiod',
	viewModel: {
		type: 'basaccountperiod'
	},
	initComponent: function () {
		var me = this;

		Ext.apply(me, {
			searchItems: [
				{xtype: 'textfield', fieldLabel: '会计年月', name: 'accountYearMonth'}
			],

			gridColumns: [
				{dataIndex: 'accountYearMonth', text: '会计年月', editor: true},
				{dataIndex: 'beginDate', text: '开始日期', xtype:'datecolumn',editor:  true},
				{dataIndex: 'endDate', text: '结束日期',xtype:'datecolumn', editor: true},
				{dataIndex: 'orderNo', text: '排列序号', editor: true},
				{dataIndex: 'enableFlag', text: '启用状态(0=禁用 1=启用)', editor: true},
				{dataIndex: 'creator', text: '建档人'},
				{dataIndex: 'createTime', text: '建档时间'},
				{dataIndex: 'modifier', text: '修改人'},
				{dataIndex: 'modifyTime', text: '修改时间'},
				{dataIndex: 'remarks', text: '备注'}
			],
			gridModel: 'Hc_mdm.model.BasAccountPeriod',
			gridPrimaryKey: 'accountYearMonth',
			gridUnionKey: '',
			gridLoadUrl: Hc.mdmPath + 'bas_account_period/list.json',
			gridSaveUrl: Hc.mdmPath + 'bas_account_period/listsave.json',
			gridExportUrl: Hc.mdmPath + 'bas_account_period/do_export.json',
			gridImportUrl: Hc.mdmPath + 'bas_account_period/do_import.json'

		});

		me.callParent();
	}
});

/**
 * Description: 会计期间信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basaccountperiod.BasAccountPeriodController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basaccountperiod'
  });
/**
 * Description: 会计期间信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-10 08:50:09
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basaccountperiod.BasAccountPeriodModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',
	alias: 'viewmodel.basaccountperiod'

});
/**
 * Description: 单据类型表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbilltype.BasBillType', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbilltype',
	
	           controller: 'basbilltype',
	           viewModel: {
	        	   type: 'basbilltype'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   //添加查询条件
	        	   Ext.apply(me, {
	        		   searchItems: [{
	        			   xtype : 'textfield',
	        			   fieldLabel : '单据类型编号', 
	        			   name : 'billTypeNo'
	        		   },
	        		   {
	        			   xtype:'textfield',
	        			   fieldLabel:'单据类型名称',
	        			   name:'billTypeName'
	        		   },
	        		   {
	        			   fieldLabel : '单据分组',
	        			   name : 'billGroup',
	        			   xtype:'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=bill_group',
	        			   displaymember:'itemName',
	        			   valuemember:'itemCode'
	        		   }
	        		   ],

	        		   gridModel: 'Hc_mdm.model.BasBillType',
	        		   gridColumns: [
	        		                 {dataIndex: 'billTypeNo', text: '单据类型编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
	        		                 {dataIndex: 'billTypeName', text: '单据类型名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
	        		                 {dataIndex: 'codeRuleNo', text: '编码规则编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
	        		                 {
	        		                	 dataIndex : 'billGroup',
	        		                	 text : '单据分组',
	        		                	 xtype:'bllookupedit',
	        		                	 editable:false,
	        		                	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=bill_group',
	        		                	 displaymember:'itemName',
	        		                	 valuemember:'itemCode'
	        		                 },
	        		                 {dataIndex: 'orderNo', 
	        		                	 text: '排列序号', 
	        		                	 editor: {allowBlank: true,
	        		                		 xtype : 'numberfield'}
	        		                 },
	        		                 {
	        		                	 dataIndex : 'enableFlag',
	        		                	 text : '启用状态',
	        		                	 renderer : 'renderUseFlag',
	        		                	 editor : {
	        		                		 allowBlank : false,
	        		                		 xtype : 'combouseflag',
	        		                		 maxLength:30,
	        		                		 enforceMaxLength:true
	        		                	 }   
	        		                 }
	        		                 ],

	        		                 gridPrimaryKey: 'billTypeNo',
	        		                 gridUnionKey: '',

	        		                 gridLoadUrl: Hc.mdmPath+'bas_bill_type/list.json',
	        		                 gridSaveUrl: Hc.mdmPath+'bas_bill_type/batchOperate.json',
	        		                 gridExportUrl: Hc.mdmPath+'bas_bill_type/do_export.json',
	        		                 gridImportUrl: ''
	        		                 
	        		                 

	        	   });
	        	   me.callParent();	        	   
	           }
});

/**
 * Description: 单据类型表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbilltype.BasBillTypeController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basbilltype'
   
  });
/**
 * Description: 单据类型表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-26 14:51:54
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basbilltype.BasBillTypeModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basbilltype'
    	
  });
/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_size(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbom.BasBom', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basbom',
	
	controller: 'basbom',
	viewModel: {
		type: 'basbom'
	},
	isAutoLoad: false,
	customLayout1: true,
	
	gridHasCreator:false,
	gridHasModifier:false,
	
	
	
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			searchItems:[
			      			{xtype: 'textfield', fieldLabel: '品牌', name: 'brandNo',
			      				xtype : "extcombox",
			      				displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
								displaymember:'brandCname',
								valuemember:'brandNo'
			      			},
			      			{
								 xtype:'searchhelpfield',
								 fieldLabel : '物料编号',
								 name:'materialNo',
								 reference: 'materialNo',
								 gridColumns:[{
									  dataIndex:'materialNo',
									  text:'物料编号',
									  flex:0.3
								},{
									  dataIndex:'materialCode',
									  text:'物料编码',
									  flex:0.3
								},{
									  dataIndex:'materialName',
									  text:'物料名称',
									  flex:0.3
								},{
									  dataIndex:'sizeTypeNo',
									  text:'码组',
									  flex:0.3
								}],
								bind:{value:'{billRow.materialNo}'},
								searchItems:[
												{
													fieldLabel : '物料编码',
												    name:'materialCode',
												    flex:0.5
												 }
								             ],
								isAutoLoad:false,
								otherFields:"materialCode,materialName,sizeTypeNo",
								url:Hc.mdmPath + 'bas_material/list.json'
							},
							{xtype : 'extcombox',fieldLabel : 'BOM用途',name : 'bomPurpose',displayvalue : "S2=开发:STD=标准:SUB=委外:SPD=预测"},
							{xtype : 'extcombox',fieldLabel : 'BOM状态',name:"bomStatus",displayvalue : "0=编辑:1=审核:2=生效",reference: 'bomStatus'}
			      		],
			gridColumns:[
							{dataIndex: 'bomId', text: 'BOMID'},
							{dataIndex: 'materialNo', text: '物料编号'},
							{
								dataIndex: 'brandNo', 
								text: '品牌', 
								xtype:"bllookupedit",
								displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
								displaymember:'brandCname',
								valuemember:'brandNo'
							},
							{dataIndex: 'materialCode', text: '物料编码'},
							{dataIndex: 'materialName', text: '物料名称',width:120},
							{dataIndex: 'bomType', text: 'BOM分类',xtype : "bllookupedit",displayvalue : "1=标准BOM:2=配置BOM"},
							{
								dataIndex: 'bomPurpose', 
								text: 'BOM用途', 
								xtype : "bllookupedit",
								displayvalue : "S2=开发:STD=标准:STD=标准:SUB=委外:SPD=预测"
							},
							{dataIndex: 'versionNo', text: '版本号'},
							{dataIndex: 'bomStatus', text: 'BOM状态',xtype : "bllookupedit",displayvalue : "0=编辑:1=审核:2=生效"},
							{dataIndex: 'modifier',text: '最后修改人', width: 90},
                			{dataIndex: 'modifyTime', text: '最后修改时间',width: 140}
						],
		 	gridModel: 'Hc_mdm.model.BasBom',
		 	gridReadOnly: true,
		 	gridPrimaryKey: 'bomId',
		 	gridIsMaster:false,
			gridLoadUrl : Hc.mdmPath+'bas_bom/list.json',
			gridExportUrl : Hc.mdmPath+'bas_bom/do_export.json',
			gridEditModel: 'none',
				
			grid1Columns:[
			              {dataIndex: 'orderNo', text: '物料序号'},
			              {dataIndex: 'sizeTypeNo', text: '表头码组'},
			              {dataIndex: 'materialNo', text: '物料编号'},
			              {dataIndex: 'materialCode', text: '物料编码'},
			              {dataIndex: 'materialName', text: '物料名称'},
			              {dataIndex: 'newSizeTypeNo', text: '物料码组'}
			       		],
		   	grid1Model: 'Hc_mdm.model.BasBomListSize',
		   	grid1PrimaryKey:'orderNo',
		   	grid1Title:"",
		   	grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1LoadUrl: Hc.mdmPath + 'bas_bom_list/listSizeVo.json?selectVoName=SelectListByVoBasBomListSize',
		   	grid1MSizeIdx:6
		});

		var treepanel={ 
			xtype: 'treepanel',
			split: true,
			region:"west",
			width:500,
			reference: 'menutree',
			itemId: 'menutree',
			lines: true,
			rootVisible: false,
			columns: [
			          	{dataIndex: 'materialNo',width:200,xtype: 'treecolumn', text: '物料编号',anchor: '100%'},
						{dataIndex: 'orderNo', text: '序号'},
						{dataIndex: 'brandNo', text: '品牌'},
						{dataIndex: 'bomPurpose', text: 'BOM用途'},
						{dataIndex: 'dosageNumerator', text: '用量(分子)'},
						{dataIndex: 'dosageDenominator', text: '用量(分母)'},
						{dataIndex: 'pdTypeNo', text: '用途'},
						{dataIndex: 'storeNo', text: '预设仓库'},
						{dataIndex: 'isVirtual', text: '是否虚拟件'}
					],
			store:{
				model:'Hc_mdm.model.BasBomList',
				type:'treebase',
				autoLoad:false,
				rootVisible: false,
				proxy: {
				    type: 'ajax',
				    url:  Hc.mdmPath+'bas_bom_list/getBomList.json'
				},
				root: {
					id:0,
					text: 'root',
					orderNo: 0,
					materialNo: -1,
				    leaf: false,
				    expanded: false
				},
				//nodeParam:'orderNo',
				parentIdProperty:'parentOrderNo'
			},
			listeners: {
				'afteritemexpand': 'onAfterItemExpand',
				"selectionchange": "onTreeSelectionChange",
			}
		};

		var h=me.controller.getBodyHeight(0.4);
		
        var con1={
    		xtype:"panel",
    		height:h,
    		region:"north",
    		layout:'border',
    		items:[me.grid],
    		split:true,
    		border:false
        };
        
        var panelchild={
    		xtype: "panel",
            region: 'center',
            layout:'border',
            items:[treepanel,me.grid1],
            border:false
       };

        var panel={
    		xtype: "panel",
            region: 'center',
            layout:'border',
            items:[con1,panelchild],
            border:false
        };
		me.items = [me.toolbar];
		me.items.push(me.searchPanel);
		me.items.push(panel);
		me.callParent();
	}
});

/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_sizeController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbom.BasBomController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.basbom',
    onGridRowDblClick:function(view,record, tr, rowIndex, e){
    	var me=this;
    	var materialNo=record.data["materialNo"]; 
    	var brandNo=record.data["brandNo"]; 
    	var bomPurpose=record.data["bomPurpose"]; 
    	var isAllList=true;
    	var menuTree = me.lookupReference('menutree');
    	me.loadTree(menuTree,materialNo,brandNo,bomPurpose,isAllList);
    },
    onGrid1BeforeLoad:function(store,opt){
    	if(this.callParent(arguments)===false)return false;
    	if (this.lookupReference('menutree').store.getCount()==0) return false;
    },
    onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();
        if (!objs) return;
		var store = objs.mastergrid.store;
		var storesize=objs.grid1.store;
		var selLength=sm.selected.items.length;
		if (selLength==1) {
			if (sm.selected.items[0].data.leaf){
				return;
			}
			this.selectNode=sm.selected.items[0];
			var brandNo=sm.selected.items[0].data.brandNo;
			var materialNo=sm.selected.items[0].data.materialNo;
			var bomPurpose=sm.selected.items[0].data.bomPurpose;
			
			storesize.proxy.extraParams.brandNo = brandNo;
			storesize.proxy.extraParams.materialNo = materialNo;
			storesize.proxy.extraParams.bomPurpose = bomPurpose;
			storesize.reload();
			
			objs.grid1.view.refresh();
		}
	},
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},
    /**初始化按钮*/
    initToolbar: function (objList) {
    	this.callParent(arguments);
        var me = this;
        objList.btnAdd.setVisible(false);
        objList.btnPrint.setVisible(false);
        objList.btnExport.setVisible(false);
        objList.btnDelete.setVisible(false);
        objList.btnReset.setVisible(false);
        objList.btnCancel.setVisible(false);
        objList.btnSave.setVisible(false);
        objList.btnUndo.setVisible(false);
        objList.btnUndo.setVisible(false);
        objList.btnOther.setVisible(false);
        
        objList.commontoolsp1.setVisible(false);
        objList.commontoolsp2.setVisible(false);
        objList.commontoolsp3.setVisible(false);
        objList.commontoolsp4.setVisible(false);
        objList.commontoolsp5.setVisible(false);
        objList.commontoolsp6.setVisible(false);
    },
    //加载BOM树
    loadTree:function(tree,materialNo,brandNo,bomPurpose,isAllList){
    	var me = this;
		var store=tree.store;
		store.proxy.extraParams['materialNo'] = materialNo;
		store.proxy.extraParams['brandNo'] = brandNo;
		store.proxy.extraParams['bomPurpose'] = bomPurpose;
		store.proxy.extraParams['isAllList'] = isAllList;
		tree.store.root.data.expanded = true;
		store.load();
		tree.expandAll();  
    }
  });
/**
 * Description: bas_bom/bas_bom_list/bas_bom_list_sizeModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basbom.BasBomModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.basbom'
  });
/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbomlist.BasBomList', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbomlist',
	
	controller: 'basbomlist',
	viewModel: {
		type: 'basbomlist'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
			        {xtype : 'textfield',fieldLabel : '品牌',width : 200,labelAlign : 'right',labelWidth : 100,padding : 5,name : 'brandNo'},
					{xtype : 'textfield',fieldLabel : '物料编号',width : 200,labelAlign : 'right',labelWidth : 100,padding : 5,name : 'materialNo'},
					{xtype : 'extcombox',fieldLabel : 'BOM用途',labelAlign : 'right',labelWidth : 100,padding : 5,width : 200,name : 'bomPurpose',displayvalue : "S2=开发:STD=标准"}
							],
			gridModel: 'Hc_mdm.model.BasBomList',
			gridColumns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'bomId', text: 'BOMID', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '序号', editor: {allowBlank: false}},
				{dataIndex: 'brandNo', text: '品牌', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '物料编号', editor: {allowBlank: false}},
				{dataIndex: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', editor: {allowBlank: false}},
				{dataIndex: 'dosageNumerator', text: '用量(分子)', editor: {allowBlank: false}},
				{dataIndex: 'dosageDenominator', text: '用量(分母)', editor: {allowBlank: false}},
				{dataIndex: 'pdTypeNo', text: '用途(产品设计材料类别编号)', editor: {allowBlank: false}},
				{dataIndex: 'storeNo', text: '预设仓库(仓库编号)', editor: {allowBlank: false}},
				{dataIndex: 'isVirtual', text: '是否虚拟件(0=否 1=是)', editor: {allowBlank: false}},
			],
			gridPrimaryKey: 'lineId',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath+'bas_bom_list/getBomList.json',
			//gridLoadUrl: Hc.mdmPath+'bas_bom_list/getBomList.json?isAllList=true',
			//gridLoadUrl: Hc.mdmPath+'bas_bom_list/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_bom_list/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_bom_list/do_export.json',
			gridImportUrl: Hc.mdmPath+'',

			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'			
		});
		me.callParent();
	}
});

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbomlist.BasBomListController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basbomlist'
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-03 11:56:26
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basbomlist.BasBomListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basbomlist'
  });
/**
 * Description: 品牌信息表(来源于集团主数据 org_organ_brand、org_organ_brand_detail )(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbrand.BasBrand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbrand',
	
	controller: 'basbrand',
	viewModel: {
		type: 'basbrand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
					xtype : 'textfield',
					fieldLabel : '品牌编号',
					name : 'brandNo'
			},
			{
				xtype : 'textfield',
				fieldLabel : '品牌部编号',
				name : 'brandUpperNo'
			},
			{
				xtype : 'textfield',
				fieldLabel : '品牌中文名',
				name : 'brandCname'
			},
			{
				xtype : 'textfield',
				fieldLabel : '特征码',
				name : 'specialCode'
			}],
			gridModel: 'Hc_mdm.model.BasBrand',
			gridColumns: [
				{
					dataIndex: 'brandNo', text: '品牌编号', 
					editor: {allowBlank: false,maxLength:20,enforceMaxLength:true,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入字母或数字'
						}
				},
				{dataIndex: 'brandEname', text: '品牌英文名', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'brandCname', text: '品牌中文名', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'brandUpperNo', text: '品牌部编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
				{dataIndex: 'specialCode', text: '特征码', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
				//{dataIndex: 'enableFlag', text: '是否启用', editor: {allowBlank: false,xtype : 'comboyesno'},renderer : 'renderYesNo'},
				{
					dataIndex : 'enableFlag',
					text : '启用状态',
					renderer : 'renderUseFlag',
					editor : {
						allowBlank : false,
						xtype : 'combouseflag',
						maxLength:30,
						enforceMaxLength:true
					}
				}				
			],
			gridPrimaryKey: 'brandNo',
			gridUnionKey: '',
			
			gridLoadUrl: Hc.mdmPath+'bas_brand/list.json',
			gridSaveUrl: Hc.mdmPath+'bas_brand/batchOperate.json',
			gridExportUrl: Hc.mdmPath+'bas_brand/do_export.json',
			gridImportUrl: '',
				
			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'	
		});
		me.callParent();
	}
});

/**
 * Description: 品牌信息表(来源于集团主数据 org_organ_brand、org_organ_brand_detail )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbrand.BasBrandController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basbrand'
  });
/**
 * Description: 品牌信息表(来源于集团主数据 org_organ_brand、org_organ_brand_detail )Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-18 13:57:51
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basbrand.BasBrandModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basbrand'
   
  });
/**
 * Description: 品牌关系表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbrandrelation.BasBrandRelation', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basbrandrelation',
	
	           controller: 'basbrandrelation',
	           viewModel: {
	        	   type: 'basbrandrelation'
	           },
	           initComponent: function () {
	        	   var me= this;

	        	   //添加查询条件
	        	   Ext.apply(me, {
	        		   searchItems: [{
	        			   fieldLabel : '品牌', 
	        			   name : 'brandNo',
	        			   xtype : 'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
	        			   displaymember:'brandCname',
	        			   valuemember:'brandNo'

	        		   },{
	        			   fieldLabel : '事业部',
	        			   name : 'divisionNo',
	        			   xtype:'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_division/listAll.json',
	        			   displaymember:'divisionName',
	        			   valuemember:'divisionNo'

	        		   },{
	        			   fieldLabel : '公司',
	        			   name : 'companyNo',
	        			   xtype:'extcombox',
	        			   displayvalue:Hc.mdmPath+'bas_company/listAll.json',
	        			   displaymember:'companyName',
	        			   valuemember:'companyNo'

	        		   }],

	        		   //网格
	        		   gridModel: 'Hc_mdm.model.BasBrandRelation',
	        		   gridColumns: [
	        		                 {
	        		                	 dataIndex : 'brandNo',
	        		                	 text : '品牌',
	        		                	 editor: 
	        		                	 {
	        		                		 allowBlank: false,maxLength:20,enforceMaxLength:true
	        		                	 },
	        		                	 xtype:'bllookupedit',
	        		                	 displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
	        		                	 displaymember:'brandCname',
	        		                	 valuemember:'brandNo'
	        		                 },

	        		                 {
	        		                	 dataIndex : 'divisionNo',
	        		                	 text : '事业部',
	        		                	 editor: 
	        		                	 {
	        		                		 allowBlank: false,maxLength:10,enforceMaxLength:true
	        		                	 },
	        		                	 xtype:'bllookupedit',
	        		                	 displayvalue:Hc.mdmPath+'bas_division/listAll.json',
	        		                	 displaymember:'divisionName',
	        		                	 valuemember:'divisionNo'
	        		                 }, 
	        		                 {
	        		                	 dataIndex : 'companyNo',
	        		                	 text : '公司',
	        		                	 editor: 
	        		                	 {
	        		                		 allowBlank: false,maxLength:10,enforceMaxLength:true
	        		                	 },
	        		                	 width:130,
	        		                	 xtype:'bllookupedit',
	        		                	 displayvalue:Hc.mdmPath+'bas_company/listAll.json',
	        		                	 displaymember:'companyName',
	        		                	 valuemember:'companyNo'
	        		                 },
	        		                 {dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield'}},
	        		                 /*{dataIndex: 'remarks', text: '备注', editor: {maxLength:60,enforceMaxLength:true}},
	        		                 {dataIndex: 'creator', text: '建档人'},
	        		                 {dataIndex: 'createTime', text: '建档时间', width:140},
	        		                 {dataIndex: 'modifier', text: '修改人'},
	        		                 {dataIndex: 'modifyTime', text: '修改时间', width:140}*/

	        		                 ],
	        		                 //添加主键
	        		                 gridPrimaryKey: 'brandNo',
	        		                 gridUnionKey: '',

	        		                 //修改URL
	        		                 gridLoadUrl:  Hc.mdmPath+'bas_brand_relation/list.json',
	        		                 gridSaveUrl:  Hc.mdmPath+'bas_brand_relation/batchOperate.json',
	        		                 gridExportUrl: Hc.mdmPath+'bas_brand_relation/do_export.json',
	        		                 gridImportUrl: ''

	        	   });
	        	   me.callParent();
	           }
});

/**
 * Description: 品牌关系表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basbrandrelation.BasBrandRelationController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basbrandrelation'
  });
/**
 * Description: 品牌关系表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-03-31 10:06:36
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basbrandrelation.BasBrandRelationModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basbrandrelation'
    
  });
/**
 * Description: 类别信息表(来源于集团主数据 pro_category )(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascategory.BasCategory', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bascategory',
	
	controller: 'bascategory',
	viewModel: {
		type: 'bascategory'
	},
	initComponent: function () {
		var me= this;
 		
		Ext.apply(me, {
		
		gridModel: 'Hc_mdm.model.BasCategory',
		gridColumns: [
				{dataIndex: 'categoryName', text: '类别名称',  editor: {allowBlank: false},maxLength:30,enforceMaxLength:true},
				{xtype:'gridcolumn',dataIndex:'specialCode',text:'特征码',editor: {allowBlank: true,maxLength:20,enforceMaxLength:true}},
				{xtype:'gridcolumn',dataIndex:'parentCategoryId',text:'上级类别',hidden:true,hideable:false,editor:{allowBlank:false}},
				{xtype:'gridcolumn',dataIndex:'levelNo',text:'类别级别',hidden:true,hideable:false,editor:{allowBlank:false}},
				{xtype:'gridcolumn',dataIndex:'categoryId',text:'类别id'},
		        {xtype:'gridcolumn',dataIndex:'categoryNo',text:'类别编号'},
				{xtype:'gridcolumn',dataIndex:'searchCode',text:'类别路径'},
				{xtype:'gridcolumn',dataIndex: 'affiliation', text: '本部编码',hidden:true,hideable:false},
				{dataIndex: 'orderNo', text: '排列序号',editor: {allowBlank: true,xtype : 'numberfield'}},
	            {dataIndex: 'enableFlag',text: '启用状态',xtype: "bllookupedit",editor: {allowBlank: false},displayvalue: "0=禁用:1=启用"}
			],
			gridPrimaryKey: 'categoryId',
			gridLoadUrl: Hc.mdmPath+'bas_category/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_category/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_category/do_export.json',
			gridImportUrl: '',
			
			searchColumn: 0,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'SINGLE'
		});
		
		me.otherItems = [
		    {
            xtype: 'treepanel',
            region: 'west',
            split: true,
            reference: 'menutree',
            itemId: 'menutree',
            width: 300,
            //batchUrl:Hc.mdmPath+'bas_category/listsave.json',
            rootVisible: false,
            lines: true,
           // selType:'SINGLE',
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'categoryName',
                text: "类别维护",
                sortable: false,
                hideable: false

            }],
            store:{
                model:'Hc_mdm.model.BasCategory',
                type:'treebase',
                proxy: {
                    type: 'ajax',
                    url:  Hc.mdmPath+'bas_category/listAll.json'
                },
                root: {
                    id:0,
                    categoryName: '类别',
                    categoryId:0,
                    expanded: false
                },
                nodeParam:'parentCategoryId',
                parentIdProperty:'parentCategoryId'
            },
            listeners: {
                'selectionchange': 'onTreeSelectionChange',
                'afteritemexpand': 'onAfterItemExpand'
            }
        }];
		
		me.callParent();
	}
});

/**
 * Description: 类别信息表(来源于集团主数据 pro_category )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascategory.BasCategoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascategory',
    	
	init:function() {

		var me = this,
        objList = me.getObjList();

        if (!objList) return;

        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }

		me.callParent(arguments);
		
		//隐藏基类按钮和处理自定义按钮
		objList.btnSearch.setVisible(false);
		objList.btnReset.setVisible(false);
		objList.btnCopy.setVisible(false);
		objList.btnEdit.setVisible(false);
		objList.btnOther1.setVisible(true);
		objList.btnOther1.setText('刷新树');
		objList.btnOther1.setGlyph(Hc.Icon.btnRefresh);
	},
	  /*
	   * 重新刷新树的根节点
	   */
	  onRefreshTree:function(){
		    var me = this;
		    var tree = me.lookupReference('menutree');
		    var storeTree = tree.store;
		    
			storeTree.proxy.extraParams.parentCategoryId = 0;
			storeTree.load();
	   		delete storeTree.proxy.extraParams['parentCategoryId'];
	   		
	   		//如果重新刷新树的根节点则清空网格里的数据
	   		var objs = me.getObjList();
			var storeGrid = objs.mastergrid.store;
			delete storeGrid.proxy.extraParams['parentCategoryId'];
			storeGrid.proxy.extraParams.parentCategoryId = 0;
			storeGrid.load();
	  },
	/*
	 * 树节点选择改变
	 */
	onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();

        if (!objs) return;
        
		store = objs.mastergrid.store,
		
		selLength=sm.selected.items.length;
		
		if (selLength==1) {
			var categoryId=sm.selected.items[0].data.categoryId;
			store.proxy.extraParams.parentCategoryId = categoryId;
		}else{
			//store.proxy.extraParams.parentCategoryId = -1;
		}
		
		store.reload();
		
		if (this.canDelete() && objs.btnDelete) {
			objs.btnDelete.setDisabled(selections.length === 0);
		}
		if (this.canPrint() && objs.btnPrint) {
			objs.btnPrint.setDisabled(selections.length === 0);
		}
		if (this.canEdit() && objs.btnEdit) {
			objs.btnEdit.setDisabled(selections.length === 0);
		}
	},
	
	/*
	 * 树节点展开后
	 */
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},

	/*
	 * 新增给网格父类别给默认值
	 */
    initAddData: function (newObj) {
		var me = this,
        tree = me.lookupReference('menutree');
		
		if (!tree.selection) {
			Hc.alert("请先选择一个树节点再增加！");
			return false;
		}
		
		var categoryId = tree.selection.data.categoryId;
		var levelNo = tree.selection.data.levelNo;
		newObj.data.parentCategoryId = categoryId;
		newObj.data.levelNo = levelNo+1;
		newObj.data.enableFlag = 1;
		
    	
    }, 
    
    /* 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识*/
    onBtnDeleteClick: function (btn) {
        var obj = this.workObject,
            store = obj.getStore(),
            delflag = false,
            items = obj.getSelection();

        if (items.length < 1) return;
        if (obj.isReadOnly)return;
        if (this.checkDelete(items) === false) return;
        Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
                store.remove(record);
            } else {
                if (obj.isCanDelete) {
                	var category_no = record.get('categoryNo');
                	Ext.Ajax.request({            
           		     		url: Hc.mdmPath+'bas_category/checkDelete.json',
           		     	   async:false,
           		     		params: {       
           		     			categoryNo:category_no             
           		     		},    
           		     success: function(response, options) {    
           		    	var result=response.responseText;
           		    	if (result!=""){
           		    		Hc.alert(result);
           		    	}else{
                            record.set('_flag', 'D');
                            delflag = true;
           		    	}
           		    }       
           		}); 
                } else {
                    Hc.alert('此网格的数据不能删除');
                    return false;
                }
            }
        });
        if (delflag) {
            obj.view.refresh();
        }
    },
    
    /*
     * 增加删除判断
     */
   /* checkDelete: function (items) {
    	var obj = this.workObject,
    	delflag = false;
    	Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
                
            } else {
                if (obj.isCanDelete) {
                	var category_no = record.get('categoryNo');
                	Ext.Ajax.request({            
           		     		url: Hc.mdmPath+'bas_category/checkDelete.json',
           		     	   async:false,
           		     		params: {       
           		     			categoryNo:category_no             
           		     		},    
           		     success: function(response, options) {    
           		    	var result=response.responseText;
           		    	if (result!=""){
           		    		Hc.alert(result);
           		    		return false;
           		    	}
           		    }       
           		}); 
                } else {
                    Hc.alert('此网格的数据不能删除');
                    return false;
                }
            }
        });
    },*/
    
    /*
     * 数据保存后
     */
	afterSave:function(result,options) {
			var me = this;
			 me.callParent(arguments);
			 
	        var objs = me.getObjList();
			
	        if (!objs) return;
			
	        var tree = me.lookupReference('menutree'),
	        storeTree = tree.store,
	        storeGrid = objs.mastergrid.store;
			
	        var selNode = tree.selection;
			if (!selNode) return;

			var isLoad = 0;
			var childNodes = selNode.childNodes;
			for(j=0;j<childNodes.length;j++){
				var cNode = childNodes[j];
				if (cNode.data.expanded==true){
					isLoad=1;
					break;
				}
			}

			if (isLoad===1){
				me.onRefreshTree();
			}else{
				storeTree.reload();
			}
	  },
	  /*
	   * 刷新树按钮
	   */
	  onBtnOther1:function(btn){
		  this.onRefreshTree();
	  }
  });
/**
 * Description: 类别信息表(来源于集团主数据 pro_category )Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-18 15:09:30
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascategory.BasCategoryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    
    alias: 'viewmodel.bascategory'
    	
  });
/**
 * Description: 行政市信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-16 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascity.BasCity', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascity',
    
    controller: 'bascity',
    viewModel: {
        type: 'bascity'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '行政市编号',
                name: 'cityNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '行政市名称',
                name: 'cityName',
                maxLength: 15,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasCity',
            gridColumns: [{
                dataIndex: 'cityNo',
                text: '行政市编号',
                editor: {
                    allowBlank: false,
                    regex: /^[0-9a-zA-Z]+$/,
                    //只能输入字母、数字或者字母数字组合
                    regexText: '请输入字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'cityName',
                text: '行政市名称',
                editor: {
                    allowBlank: false,
                    maxLength: 15,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'cityLname',
                text: '行政市详细名称',
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
                dataIndex: 'cityOpcode',
                text: '行政市特征码',
                editor: {
                    vtype: 'alphanum',
                    //只能输入字母、数字或者字母数字组合
                    minLength: 3,
                    //最小长度
                    maxLength: 3,
                    //最大长度
                    allowBlank: false
                }
            },
            {
                dataIndex: 'provinceNo',
                text: '所属行政省',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                maxLength: 20,
                width: 120,
                enforceMaxLength: true,
                displayvalue: Hc.mdmPath + 'bas_province/listAll.json',
                displaymember: 'provinceLname',
                valuemember: 'provinceNo'
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
            gridPrimaryKey: 'cityNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_city/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_city/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_city/do_export.json',
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
/**
 * Description: 行政市信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:36
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascity.BasCityController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascity'
  });
/**
 * Description: 行政市信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 15:44:36
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascity.BasCityModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascity'
  });
/**
 * Description: 编码规则配置表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascoderule.BasCodeRule', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.bascoderule',
	
	controller: 'bascoderule',
	viewModel: {
		type: 'bascoderule'
	},
	isAutoLoad: false,
	searchItems:[
	      			{xtype: 'textfield', fieldLabel: '编码规则编号', name: 'codeRuleNo'},
	      			{xtype: 'textfield', fieldLabel: '编码规则名称', name: 'codeRuleName'}
	      		],
  	gridColumns:[
					{dataIndex: 'codeRuleNo', text: '编码规则编号', editor: {allowBlank: false,maxLength : 10,enforceMaxLength : true}},
					{dataIndex: 'codeRuleName', text: '编码规则名称', editor: {allowBlank: false,maxLength : 30,enforceMaxLength : true},width:150},
					{dataIndex: 'codeRuleType', text: '规则类型', editor: {allowBlank: false}},
					{dataIndex: 'allowManualEdit', text: '允许手工编辑', xtype:"bllookupedit",displayvalue:"0=不允许:1=允许"},
					{dataIndex: 'keepContinuous', text: '保持连续编号', xtype:"bllookupedit",displayvalue:"0=否:1=是"},
					{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
					{dataIndex: 'enableFlag', text: '启用状态',editor: {allowBlank: false},xtype:"gridcombouseflag"}
				],
	gridModel: 'Hc_mdm.model.BasCodeRule',
	gridPrimaryKey: 'codeRuleNo',
	gridSubGrid:['grid1'],
	gridLoadUrl : Hc.mdmPath+'bas_code_rule/list.json',
	gridSaveUrl : Hc.mdmPath+'bas_code_rule/saveMasterCustomerList.json',
	gridExportUrl : Hc.mdmPath+'bas_code_rule/do_export.json',

	grid1Columns:[
	              {dataIndex: 'codeRuleId', text: '编码规则明细ID',editor: {allowBlank: false},hidden:true},
	              {dataIndex: 'codeRuleNo', text: '编码规则编号',editor: {allowBlank: false,maxLength : 10,enforceMaxLength : true},hidden:true},
	              {dataIndex: 'codeBeginPosition', text: '编码开始位置',editor: {allowBlank: false}},
	              {dataIndex: 'codeEndPosition', text: '编码结束位置',editor: {allowBlank: false}},
	              {dataIndex: 'charLength', text: '字符长度'},
	              {dataIndex: 'codeType', text: '编码类型',xtype:"bllookupedit",displayvalue:"1=常量:2=取日期:3=取字段:4=流水号:5=手工录入"},
	              {dataIndex: 'constValue', text: '常量值',editor: {editable: true,maxLength : 10,enforceMaxLength : true}},
	              {dataIndex: 'dateFormatValue', text: '日期格式化值',editor: {editable: true,maxLength : 10,enforceMaxLength : true}},
	              {dataIndex: 'fieldValue', text: '字段值',editor: {editable: true,maxLength : 30,enforceMaxLength : true}},
	              {dataIndex: 'cutBeginPosition', text: '字段截取开始位置',editor: {allowBlank: true}},
	              {dataIndex: 'cutEndPosition', text: '字段截取结束位置',editor: {allowBlank: true}},
	              {dataIndex: 'currentSerialDate', text: '当前流水日期',editor: {allowBlank: true}},
	              {dataIndex: 'currentSerialNo', text: '当前流水号',editor: {allowBlank: true}},
	              {dataIndex: 'resetMode', text: '重置方式',xtype:"bllookupedit",displayvalue:"0=永不重置:1=按天重置:2=按月重置:3=按年重置"},
	              {dataIndex: 'padChar', text: '补位符',editor: {allowBlank: true}},
	              {dataIndex: 'orderNo', text: '排列序号',editor: {allowBlank: true}},
	              {dataIndex: 'enableFlag', text: '启用状态',editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"},
	              {dataIndex: 'creator', text: '建档人'},
	              {dataIndex: 'createTime', text: '建档时间',xtype: 'datecolumn',format:'Y-m-d H:m:s'},
	              {dataIndex: 'modifier', text: '修改人'},
	              {dataIndex: 'modifyTime', text: '修改时间',xtype: 'datecolumn',format:'Y-m-d H:m:s'}
	       		],
   	grid1Model: 'Hc_mdm.model.BasCodeRuleDtl',
   	grid1PrimaryKey:'codeRuleId',
   	grid1SupGrid:'mastergrid',
	grid1LoadUrl : Hc.mdmPath+'bas_code_rule_dtl/list.json',
	grid1ExportUrl : Hc.mdmPath+'bas_code_rule_dtl/do_export.json',  	
	initComponent: function () {
		var me = this;
		me.callParent();
	}
});

/**
 * Description: 编码规则配置表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascoderule.BasCodeRuleController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.bascoderule',
    init:function(){
        var me = this,
            objList= me.getObjList();
        me.callParent(arguments);
        //objList.grid1.on('beforeedit','onGrid1BeforeEdit',me);
    },
  //新增事件
    initAddData: function (newObj) {
    	var me = this;
    	me.callParent(arguments);
		newObj.data.codeType = 1;
		newObj.data.enableFlag = 1;
    },
    onGrid1BeforeEdit:function(editor, obj)
    {
    	//增加编辑前控制
		if(obj.field == 'constValue') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '1') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'dateFormatValue') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '2') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'fieldValue') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '3') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'currentSerialDate') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '4') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'currentSerialNo') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '4') { 
				return true; 
			}
			else{
				return false;
			}
		}
		if(obj.field == 'resetMode') {
			var record = obj.record;
			var codeType = record.get('codeType');
			if(codeType == '4') { 
				return true; 
			}
			else{
				return false;
			}
		}
    },
    onGrid1AfterEdit:function(editor, obj)
    {
    	if(obj.field == 'codeBeginPosition') {
			var record = obj.record;
			var codeBeginPosition = record.get('codeBeginPosition');
			var codeEndPosition = record.get('codeEndPosition');
			var charLength=codeEndPosition-codeBeginPosition+1;
			record.set("charLength",charLength);
		}
		if(obj.field == 'codeEndPosition') {
			var record = obj.record;
			var codeBeginPosition = record.get('codeBeginPosition');
			var codeEndPosition = record.get('codeEndPosition');
			var charLength=codeEndPosition-codeBeginPosition+1;
			if (charLength<0){
				Hc.alert("结束位置不能小于开始位置!");
				console.dir(obj);
			}else{
				record.set("charLength",charLength);
			}
		}
    }
  });
/**
 * Description: 编码规则配置表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-03-20 15:15:26
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascoderule.BasCodeRuleModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.bascoderule'
  });
/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )(default) All rights Reserved,
 * Designed ByHc Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascolor.BasColor', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascolor',
    
    controller: 'bascolor',
    viewModel: {
        type: 'bascolor'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                fieldLabel: '色系',
                name: 'colorSeriesName',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=color_series',
                displaymember: 'itemName',
                valuemember: 'itemName'
            },
            {
                xtype: 'textfield',
                fieldLabel: '颜色编号',
                name: 'colorNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '颜色名称',
                name: 'colorName',
                maxLength: 30,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasColor',
            gridColumns: [
            {
                dataIndex: 'colorSeriesName',
                text: '色系',
                editor: {
                    editable: false,
                    xtype: 'combo',
                    id: 'csCode',
                    displayField: 'displayName',
                    //显示给用户的字段
                    valueField: 'itemName',
                    //显示给用户的字段对应的值
                    store: {
                        type: 'basestore',
                        autoLoad: true,
                        fields: ['itemCode', 'itemName'],
                        proxy: {
                            url: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=color_series'
                        }
                    }
                }
            },

            {
                dataIndex: 'colorNo',
                text: '颜色编号',
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
                dataIndex: 'colorName',
                text: '颜色名称',
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
                    maxLength: 20,
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

            gridPrimaryKey: 'colorNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_color/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_color/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_color/do_export.json',
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
/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascolor.BasColorController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascolor',
    init: function() {
        this.callParent(arguments);
        this.getReferences().mastergrid.on('edit', this.gridEdit, this);
    },
    gridEdit: function(obj, e) {
        if (e.field == 'colorSeriesName') {
            var value = Ext.getCmp('csCode').getRawValue(); //获取下拉框当前显示的值
            lengths = value.length - e.value.length - 2;
            value = Ext.util.Format.substr(value, 0, lengths);
            e.record.set('colorSeriesCode', value); //自动填充色系名称
        }
    }

});
/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascolor.BasColorModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascolor'
  });
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
/**
 * Description: 公司信息表Controller All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 *  * 2015年4月6日
 * 
 * @date: 2015-03-16 10:24:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascompany.BasCompanyController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascompany',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.lookupReference('cityCombo').setReadOnly(true);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    //查询面板联动
    onChangeprovinceNo: function(obj, newval) {
        var provinceComboNo = this.lookupReference('provinceCombo').getValue();
        var cityCombo = this.lookupReference('cityCombo');
        if (provinceComboNo) {
            cityCombo.setValue('');
            cityCombo.setReadOnly(false);
            cityCombo.store.proxy.extraParams['provinceNo'] = provinceComboNo;
            cityCombo.store.load();
        } else {
            cityCombo.setReadOnly(true);
            cityCombo.setValue('');
        }
    },
    onChangecityNo: function(obj, newval, oldval) {
        var provinceComboNo = this.lookupReference('provinceCombo').getValue();
        if (!provinceComboNo) {
            obj.setValue('');
            return false;
        }
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'cityNo') {
            var record = e.record;
            var newProvinceNo = record.get('provinceNo');
            var cityno = record.get('cityNo');
            if (newProvinceNo == '') {
                Ext.Msg.alert('提示', '请先选择省份');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldProvinceNo = store.proxy.extraParams['provinceNo'];
                if (newProvinceNo != oldProvinceNo) {
                    store.proxy.extraParams.provinceNo = newProvinceNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(cityno);
                    });
                    store.load();
                }
            }

        }
        if (e.field == 'countyNo') {
            var record = e.record;
            var provinceNo = record.get('provinceNo');
            var newCityNo = record.get('cityNo');
            var countyno = record.get('countyNo');
            if (provinceNo == '' && newCityNo == '') {
                Ext.Msg.alert('提示', '请先选择省份、城市');
                return false;

            }
            if (provinceNo == '') {
                Ext.Msg.alert('提示', '请先选择省份');
                return false;
            } else if (newCityNo == '') {
                Ext.Msg.alert('提示', '请先选择城市');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldCityNo = store.proxy.extraParams['cityNo'];
                if (newCityNo != oldCityNo) {
                    store.proxy.extraParams.cityNo = newCityNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(countyno);
                    });
                    store.load();
                }
            }

        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'provinceNo') {
            var oldProvinceNo = e.originalValue;
            var newProvinceNo = e.value;
            if (oldProvinceNo != newProvinceNo) {
                var record = e.record;
                record.set('cityNo', '');
                record.set('countyNo', '');
            }

        }

        if (e.field == 'cityNo') {
            var oldcityNo = e.originalValue;
            var newcityNo = e.value;
            if (newcityNo != oldcityNo) {
                var record = e.record;
                record.set('countyNo', '');
            }

        }
    }
});
/**
 * Description: 公司信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:24:30
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascompany.BasCompanyModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascompany'
  });
/**
 * Description: 国家信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: lucheng
 * @date: 2015-03-16 15:16:04
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascountry.BasCountry', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.bascountry',
	
	             controller : 'bascountry',
	             viewModel : {
	            	 type : 'bascountry'
	             },
	             initComponent : function() {
	            	 var me = this;

	            	 Ext.apply(me, {
	            		 searchItems : [ {
	            			 xtype : 'textfield',
	            			 fieldLabel : '国家编号',
	            			 name : 'countryNo'
	            		 }, {
	            			 xtype : 'textfield',
	            			 fieldLabel : '国家名称',
	            			 name : 'countryName'
	            		 }, {
	            			 xtype : 'extcombox',
	            			 fieldLabel : '币别',
	            			 name : 'currencyNo',
	            			 displayvalue : Hc.mdmPath + 'bas_currency/list.json',
	            			 displaymember : 'currencyName',
	            			 valuemember : 'currencyNo'
	            		 } ],
	            		 gridModel : 'Hc_mdm.model.BasCountry',
	            		 gridColumns : [ {
	            			 dataIndex : 'countryNo',
	            			 text : '国家编号',
	            			 editor : {
	            				 allowBlank : false,
	            				 maxLength : 10,
	            				 enforceMaxLength : true,
	            				 regex : /^[0-9a-zA-Z]+$/, // 只能输入字母、数字或者字母数字组合
	            				 regexText : '请输入字母或数字'
	            			 }
	            		 }, {
	            			 dataIndex : 'countryName',
	            			 text : '国家名称',
	            			 editor : {
	            				 allowBlank : false,
	            				 maxLength : 20,
	            				 enforceMaxLength : true
	            			 }
	            		 }, {
	            			 dataIndex : 'currencyNo',
	            			 text : '币别',
	            			 editor : {
	            				 allowBlank : false,
	            				 maxLength : 10,
	            				 enforceMaxLength : true
	            			 },
	            			 xtype : 'bllookupedit',
	            			 displayvalue : Hc.mdmPath + 'bas_currency/list.json',
	            			 displaymember : 'currencyName',
	            			 valuemember : 'currencyNo'
	            		 }, {
	            			 dataIndex : 'orderNo',
	            			 text : '排列序号',
	            			 editor : {
	            				 allowBlank : true,
	            				 xtype : 'numberfield'
	            			 }
	            		 }, {
	            			 dataIndex : 'enableFlag',
	            			 text : '启用状态',
	            			 editor : {
	            				 allowBlank : false,
	            				 xtype : 'combouseflag',
	            				 maxLength : 11,
	            				 enforceMaxLength : true
	            			 },
	            			 renderer : 'renderUseFlag'
	            		 }

	            		 ],
	            		 gridPrimaryKey : 'countryNo',
	            		 gridUnionKey : '',

	            		 gridLoadUrl : Hc.mdmPath + 'bas_country/list.json',
	            		 gridSaveUrl : Hc.mdmPath + 'bas_country/batchOperate.json',
	            		 gridExportUrl : Hc.mdmPath + 'bas_country/do_export.json',
	            		 gridImportUrl : '',

	            		 searchColumn : 4,
	            		 gridEditModel : 'cell',
	            		 gridCanDrag : false,
	            		 gridCanEdit : true,
	            		 gridCanAdd : true,
	            		 gridCanDelete : true,
	            		 gridSelModel : 'MULTI'
	            	 });

	            	 me.callParent();
	             }
});

/**
 * Description: 国家信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:16:04
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascountry.BasCountryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascountry'
  });
/**
 * Description: 国家信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 15:16:04
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascountry.BasCountryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascountry'
    
  });
/**
 * Description: 行政县信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-17 08:12:43
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascounty.BasCounty', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.bascounty',
    
    controller: 'bascounty',
    viewModel: {
        type: 'bascounty'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '行政县编号',
                name: 'countyNo',
                maxLength: 20,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '行政县名称',
                name: 'countyName',
                maxLength: 15,
                enforceMaxLength: true
            }],
            gridModel: 'Hc_mdm.model.BasCounty',
            gridColumns: [{
                dataIndex: 'countyNo',
                text: '行政县编号',
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
                dataIndex: 'countyName',
                text: '行政县名称',
                editor: {
                    allowBlank: false,
                    maxLength: 15,
                    regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                    //只能输入字母、数字或中文或下划线
                    regexText: '请输入字母、数字、中文',
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'countyLname',
                text: '行政县详细名称',
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
                dataIndex: 'countyOpcode',
                text: '行政县特征码',
                editor: {
                    vtype: 'alphanum',
                    //只能输入字母、数字或者字母数字组合
                    minLength: 2,
                    //最小长度
                    maxLength: 2,
                    //最大长度
                    allowBlank: false
                }
            },
            {
                dataIndex: 'cityNo',
                text: '所属行政市',
                width: 120,
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_city/listAll.json',
                displaymember: 'cityName',
                valuemember: 'cityNo'
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
                renderer: 'renderUseFlag',
                text: '启用状态',
                editor: {
                    allowBlank: false,
                    xtype: 'combouseflag'
                }
            }],

            gridPrimaryKey: 'countyNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_county/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_county/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_county/do_export.json',
            gridImportUrl: '',

            searchColumn: 4,
            gridEditModel: 'cell',
            gridCanDrag: false,
            gridCanEdit: true,
            gridCanAdd: true,
            gridCanDelete: true,
            gridSelModel: 'MULTI'
        });

        me.callParent();
    }
});
/**
 * Description: 行政县信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:43
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascounty.BasCountyController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascounty'
  });
/**
 * Description: 行政县信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-17 08:12:43
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascounty.BasCountyModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascounty'   
  });
/**
 * Description: 币别信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 15:29:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascurrency.BasCurrency', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bascurrency',
	
	controller: 'bascurrency',
	viewModel: {
		type: 'bascurrency'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '币别编号',
				name: 'currencyNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '币别名称',
				name: 'currencyName'
			}
			],
			gridModel: 'Hc_mdm.model.BasCurrency',
			gridColumns: [
							{
								dataIndex: 'currencyNo',text: '币别编号', 
								editor: {allowBlank: false,maxLength:10,enforceMaxLength:true,
									regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
									regexText:'请输入字母或数字',
									}
							},
							{dataIndex: 'currencyName', text: '币别名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'currencySymbol', text: '币别符号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{
								dataIndex: 'isSymbolDisplay', 
								text: '是否显示符号', 
								editor: 
								{
									allowBlank: false,xtype: 'comboyesno',maxLength:11,enforceMaxLength:true
								},renderer: 'renderYesNo'
							},
							{dataIndex: 'fomart', text: '显示格式', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'priceDigits', text: '单价小数位数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'valueDigits', text: '金额小数位数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false,xtype: 'combouseflag',maxLength:11,enforceMaxLength:true},renderer: 'renderUseFlag'},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}}
						],
						gridPrimaryKey: 'currencyNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_currency/list.json',
						gridSaveUrl:  Hc.mdmPath+'bas_currency/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_currency/do_export.json',
						gridImportUrl: '',

						searchColumn: 4,
						gridEditModel: 'cell',
						gridCanDrag: false,
						gridCanEdit: true,
						gridCanAdd: true,
						gridCanDelete: true,
						gridSelModel: 'MULTI'
		});
		
		me.callParent();
	}
});

/**
 * Description: 币别信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 15:29:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascurrency.BasCurrencyController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascurrency'
  });
/**
 * Description: 币别信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-13 15:29:02
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascurrency.BasCurrencyModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascurrency'
    
  });
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
/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-18 08:59:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bascustomer.BasCustomerController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bascustomer',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.lookupReference('provinceCombo').setReadOnly(true);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    //查询面板联动
    onChangecountryNo: function(obj, newval) {
        var countryComboNo = this.lookupReference('countryCombo').getValue();
        var provinceCombo = this.lookupReference('provinceCombo');
        if (countryComboNo) {
            provinceCombo.setValue('');
            provinceCombo.setReadOnly(false);
            provinceCombo.store.proxy.extraParams['countryNo'] = countryComboNo;
            provinceCombo.store.load();
        } else {
            provinceCombo.setReadOnly(true);
            provinceCombo.setValue('');
        }
    },

    onChangeprovinceNo: function(obj, newval, oldval) {
        var countryComboNo = this.lookupReference('countryCombo').getValue();
        if (!countryComboNo) {
            obj.setValue('');
            return false;
        }
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'provinceNo') {
            var record = e.record;
            var newcountryNo = record.get('countryNo');
            var provinceNo = record.get('provinceNo');
            if (newcountryNo == '') {
                Ext.Msg.alert('提示', '请先选择国家');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldcountryNo = store.proxy.extraParams['countryNo'];
                if (newcountryNo != oldcountryNo) {
                    store.proxy.extraParams.countryNo = newcountryNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(provinceNo);
                    });
                    store.load();
                }
            }

        }

        if (e.field == 'paymentClauseNo') {
            var store = e.column.getEditor().store;
            store.proxy.extraParams.paymentClauseType = 2;
            store.load();
        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;

        if (e.field == 'countryNo') {
            var oldcountryNo = e.originalValue;
            var newcountryNo = e.value;
            if (oldcountryNo != newcountryNo) {
                var record = e.record;
                record.set('provinceNo', '');
            }

        }
    }
});
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-18 08:59:16
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bascustomer.BasCustomerModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bascustomer'
  });
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
/**
 * Description: 送货地点表(来源于集团主数据仓库表 org_storage )Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdeliverypoint.BasDeliveryPointController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basdeliverypoint',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.lookupReference('cityCombo').setReadOnly(true);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    //查询面板联动
    onChangeprovinceNo: function(obj, newval) {
        var provinceComboNo = this.lookupReference('provinceCombo').getValue();
        var cityCombo = this.lookupReference('cityCombo');
        if (provinceComboNo) {
            cityCombo.setValue('');
            cityCombo.setReadOnly(false);
            cityCombo.store.proxy.extraParams['provinceNo'] = provinceComboNo;
            cityCombo.store.load();
        } else {
            cityCombo.setReadOnly(true);
            cityCombo.setValue('');
        }
    },

    onChangecityNo: function(obj, newval, oldval) {
        var provinceComboNo = this.lookupReference('provinceCombo').getValue();
        if (!provinceComboNo) {
            obj.setValue('');
            return false;
        }
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'cityNo') {
            var record = e.record;
            var newProvinceNo = record.get('provinceNo');
            var cityno = record.get('cityNo');
            if (Ext.isEmpty(newProvinceNo)) {
                Ext.Msg.alert('提示', '请先选择省份');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldProvinceNo = store.proxy.extraParams['provinceNo'];
                if (newProvinceNo != oldProvinceNo) {
                    store.proxy.extraParams.provinceNo = newProvinceNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(cityno);
                    });
                    store.load();
                }
            }

        }
        if (e.field == 'countyNo') {
            var record = e.record;
            var provinceNo = record.get('provinceNo');
            var newCityNo = record.get('cityNo');
            var countyno = record.get('countyNo');
            if (Ext.isEmpty(provinceNo) && Ext.isEmpty(newCityNo)) {
                Ext.Msg.alert('提示', '请先选择省份、城市');
                return false;

            }
            if (Ext.isEmpty(provinceNo)) {
                Ext.Msg.alert('提示', '请先选择省份');
                return false;
            } else if (Ext.isEmpty(newCityNo)) {
                Ext.Msg.alert('提示', '请先选择城市');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldCityNo = store.proxy.extraParams['cityNo'];
                if (newCityNo != oldCityNo) {
                    store.proxy.extraParams.cityNo = newCityNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(countyno);
                    });
                    store.load();
                }
            }

        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {
        var me = this;
        if (me.callParent(arguments) === false) return false;
        if (e.field == 'provinceNo') {
            var oldProvinceNo = e.originalValue;
            var newProvinceNo = e.value;
            if (oldProvinceNo != newProvinceNo) {
                var record = e.record;
                record.set('cityNo', '');
                record.set('countyNo', '');
            }

        }

        if (e.field == 'cityNo') {
            var oldcityNo = e.originalValue;
            var newcityNo = e.value;
            if (newcityNo != oldcityNo) {
                var record = e.record;
                record.set('countyNo', '');
            }

        }

    }
});
/**
 * Description: 送货地点表(来源于集团主数据仓库表 org_storage )Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-19 16:22:19
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basdeliverypoint.BasDeliveryPointModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basdeliverypoint'
  });
/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )(default) All rights Reserved,
 * Designed ByHc Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: panzh
 * @date: 2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdict.BasDict', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basdict',
	

	controller: 'basdict',
	viewModel: {
		type: 'basdict'
	},

	searchItems: [
		{xtype: 'textfield', fieldLabel: '字典编号', name: 'dictCode'},
		{xtype: 'textfield', fieldLabel: '字典名称', name: 'dictName'}
	],
	gridColumns: [
		{dataIndex: 'dictCode', text: '字典编号', editor: {allowBlank: false}},
		{dataIndex: 'dictName', text: '字典名称', editor: true},
		{
			dataIndex: 'appNo',
			text: '应用代号',
			xtype:'bllookupedit',
			displayvalue:Hc.basePath + 'itg_application/list.json',
			displaymember:'appName',
			valuemember:'appNo'			
			},
		{dataIndex: 'dictLevel', text: '层级', editor: {xtype: 'numberfield'}},
		{
			dataIndex: 'enableFlag',
			text: '启用状态', 
			renderer : 'renderUseFlag',
			editor: {
				xtype : 'combouseflag',
				allowBlank : false
			}
		},
		{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield'}}
	],
	gridModel: 'Hc_mdm.model.BasDict',
	gridPrimaryKey: 'dictId',
	gridSubGrid: ['grid1'],
	gridSupGrid: '',
	gridLoadUrl: Hc.mdmPath + 'bas_dict/list.json',
	gridSaveUrl: Hc.mdmPath + 'bas_dict/saveMasterCustomerList.json',
	gridExportUrl: Hc.mdmPath + 'bas_dict/do_export.json',
	gridImportUrl: Hc.mdmPath + 'bas_dict/importExcel.json',
	
	// 定义导入服务信息
		
	gridcolNames:'dictCode,dictName,appNo,dictLevel,enableFlag,orderNo,creator,remarks',    // 指定导入列的名字（多个列用逗号隔开）（*必填项）
	gridmustArray:"true,true,true,true,true,true,true,true",   // （对应上面指定列的是否必填，多个用逗号隔开）（*必填项）
	gridisValidateAll:'Y',	// 是否要全部验证通过才导入（Y 或N）（*必填项）
	gridmainKey:'',	  // 验证有重复(填写属性名，多个用逗号隔开)
    
    
    // 公共验证条件(可以多个{},{},{})
	gridvalidationConditions:'[{ validationType:"unique", conditionValue:"dictCode",  validationModel:"BasDict"}]',
	
    					// { validationType:"isexist", conditionValue:"dictCode",validationModel:"BasDict"},
    	
    /*
	 * validationType:验证类型 --> unique：验证唯一 isexist：是否存在，不存在则不可导入
	 * conditionValue:验证的属性 --> 多个属性时用逗号隔开
	 *  validationModel:验证数据对应的entity名称
	 */
	

    
    // 定义导出服务
	gridfileName:'数据字典主表',       // 导出文件名，不填后台则会自动生成
	gridfileType:'xlsx',               // 导出文件类型  xls,xlsx,默认为xls格式
	gridexportColumns:'[{"field":"dictCode","title":"字典编号"},{"field":"dictName","title":"字典名称"},{"field": "appNo", "title": "应用代号"},{"field": "dictLevel", "title": "层级"},{"field": "enableFlag", "title": "启用状态"},{"field": "orderNo", "title": "排列序号"},{"field": "remarks", "title": "备注"},{"field": "creator", "title": "建档人"},{"field": "createTime", "title": "建档时间"}]',
    
    // gridexportColumns（*必填项）
    // field 需要导出的列
    // title 需要导出的列名
    
    
    
	grid1Columns: [
	    {dataIndex: 'dictCode', text: '字典编号', hidden: true, bind: {value:'{gridRow.dictCode}'}},	//网格列的绑定无效？？？
		{dataIndex: 'itemCode', text: '明细编码', editor: {allowBlank: false}},
		{dataIndex: 'itemName', text: '明细名称', editor: {allowBlank: false}},
		{
			dataIndex: 'enableFlag', 
			text: '启用状态', 
			renderer:'renderUseFlag',
			editor:
			{
				xtype : 'combouseflag',
				allowBlank : false
				}
		},
		{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield', allowBlank: true}}

	],
	grid1HasMark: true,
    grid1HasCreator: true,
    grid1HasModifier: true,
	
	grid1SubGrid: [],
	grid1SupGrid: 'mastergrid',
	grid1Model: 'Hc_mdm.model.BasDictDtl',
	grid1PrimaryKey: 'dictDtlId',
	grid1LoadUrl: Hc.mdmPath + 'bas_dict_dtl/list.json',
	grid1ExportUrl: Hc.mdmPath + 'bas_dict_dtl/do_export.json',
	grid1ImportUrl: Hc.mdmPath + 'bas_dict_dtl/importExcel.json',
	
	// 定义导入服务信息
	
	grid1colNames:'itemCode,itemName,enableFlag,orderNo,creator,remarks',   
	grid1mustArray:"true,true,true,true,true,true",   
	grid1isValidateAll:'Y',	
	grid1mainKey:'',	  
	grid1validationConditions:'[{ validationType:"unique", conditionValue:"dictId,itemCode",  validationModel:"BasDictDtl"}]',

    
    // 定义导出服务
	grid1fileName:'数据字典从表',       
	grid1fileType:'xlsx',               
	grid1exportColumns:'[{"field":"itemCode","title":"明细编码"},{"field":"itemName","title":"明细名称"},{"field": "orderNo", "title": "排列序号"},{"field": "remarks", "title": "备注"},{"field": "creator", "title": "建档人"},{"field": "createTime", "title": "建档时间"}]',
    
	//定义查看日志
	gridLogWinTitle: '数据字典-日志-主表',
    gridLogLoadUrl: Hc.mdmPath + 'log_dict/list.json',
    
    grid1LogWinTitle: '数据字典-日志-从表',
    grid1LogLoadUrl: Hc.mdmPath + 'log_dict_dtl/list.json',
  

	initComponent: function () {

		var me = this;
		me.callParent();
	}
});

/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdict.BasDictController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.basdict',

    init: function () {
        var me = this;
        me.callParent();
    },
	
	initAddData: function (newObj) {
	    var me = this,
	        objlist = me.getObjList(),
	        obj = me.workObject;
	
	    if (obj.isMaster && me.editingList.length > 0) {
	        Hc.alert('有一笔数据正在编辑，不能新增主表记录');
	        return false;
	    }
	    if (obj.supGrid) {
	        var item = objlist[obj.supGrid].getSelection()[0];
	        if (!item) {
	            Hc.alert('主表没有选中记录时，从表不能新增记录');
	            return false;
	        }
	        if (!item.phantom) {
	            var idField = objlist[obj.supGrid].primaryKey;
	            newObj.set(idField, item.get(idField));
	            newObj.set('dictCode', item.get('dictCode'));
	        }
	    }
	}
});
/**
 * Description: 颜色信息表(来源于集团主数据 pro_color )Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-13 09:39:53
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basdict.BasDictModel', {
	extend: 'Hc_Common.view.BaseMultiPageModel',
	alias: 'viewmodel.basdict'
});
/**
 * Description: 事业部信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:26:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdivision.BasDivision', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.basdivision',
    
    controller: 'basdivision',
    viewModel: {
        type: 'basdivision'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '事业部编号',
                name: 'divisionNo',
                maxLength: 10,
                enforceMaxLength: true
            },
            {
                xtype: 'textfield',
                fieldLabel: '事业部名称',
                name: 'divisionName',
                maxLength: 30,
                enforceMaxLength: true
            }],

            gridModel: 'Hc_mdm.model.BasDivision',
            gridColumns: [{
                dataIndex: 'divisionNo',
                text: '事业部编号',
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
                dataIndex: 'divisionName',
                text: '事业部名称',
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
            gridPrimaryKey: 'divisionNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.mdmPath + 'bas_division/list.json',
            gridSaveUrl: Hc.mdmPath + 'bas_division/batchOperate.json',
            gridExportUrl: Hc.mdmPath + 'bas_division/do_export.json',
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
/**
 * Description: 事业部信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:26:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basdivision.BasDivisionController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basdivision'
  });
/**
 * Description: 事业部信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:26:26
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basdivision.BasDivisionModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basdivision'
  });
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
/**
 * Description: 厂区信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:08
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basfactory.BasFactoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basfactory'
  });
/**
 * Description: 厂区信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-16 10:27:08
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basfactory.BasFactoryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basfactory'
  });
/**
 * Description: 费用信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 14:34:52
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basfee.BasFee', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.basfee',
	
	controller : 'basfee',
	viewModel : {
		type : 'basfee'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {

			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '费用编号',
				name : 'feeNo'
			},{
				xtype : 'textfield',
				fieldLabel : '费用名称',
				name : 'feeName'
			}],

			gridModel : 'Hc_mdm.model.BasFee',

			gridColumns : [ {
				dataIndex : 'feeNo',
				text : '费用编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入20位字母或数字',
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'feeName',
				text : '费用名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxRateNo',
				text : '税率名称',
				editor:{allowBlank:false},
				xtype:'bllookupedit',
				displayvalue:Hc.mdmPath+'bas_tax_rate/list.json',
				displaymember:'taxRateName',
				valuemember:'taxRateNo'
			}, {
				dataIndex : 'feeCategory',
				text : '费用分类',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'subjectNo',
				text : '科目编号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'orderNo',
				text : '排列序号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'enableFlag',
				text : '启用状态',
				editor : {
					allowBlank:false,
					xtype : 'comboyesno'
				},
				renderer : 'renderYesNo'
			} ],

			gridPrimaryKey : 'feeNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_fee/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_fee/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_fee/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 费用信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-16 14:34:52
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basfee.BasFeeController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basfee'
  });
/**
 * Description: 费用信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-16 14:34:52
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basfee.BasFeeModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basfee',
  });
/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmajor.BasMajor', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basmajor',
	
	controller: 'basmajor',
	viewModel: {
		type: 'basmajor'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'categoryNo', text: '', editor: {allowBlank: false}},
				{dataIndex: 'materialType', text: '', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_major/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmajor.BasMajorController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basmajor'
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-11 20:18:21
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basmajor.BasMajorModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basmajor',
    stores: {
    	commonstore:{
   			model:'Hc_mdm.model.BasMajor',
    		proxy: {
    		url: Hc.IntegPath + 'rest/bas_major/list.json'
    		}
   		 }
    }
  });
/**
 * Description: 物料信息表 bas_material/bas_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmaterial.BasMaterial', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basmaterial',
	
	
	controller: 'basmaterial',
	viewModel: {
		type: 'basmaterial'
	},
	
	isAutoLoad : false,
	customLayout1 : true,
	
	initComponent : function() {
		var me = this;
		Ext.apply(me,{
				searchItems: [
					{xtype: 'textfield', fieldLabel: '物料ID', name: 'materialNo'},
					{xtype: 'textfield', fieldLabel: '物料编码', name: 'materialCode'},
					{xtype: 'textfield', fieldLabel: '国际条码', name: 'barcodeEan'},
					{xtype: 'textfield', fieldLabel: '物料名称', name: 'materialName'}
				],
		      	gridColumns: [
		      	    		{dataIndex: 'materialNo', text: '物料ID'},
		      	    		{dataIndex: 'materialCode', text: '物料编码'},
		      	    		{dataIndex: 'barcodeEan', text: '国际条码',hidden:true},
		      	    		{dataIndex: 'materialName', text: '物料名称'},
		      	    		{dataIndex: 'specifications', text: '规格型号',hidden:true},
		      	    		{dataIndex: 'oldCode', text: '旧物料编码',hidden:true},
		      	    		{dataIndex: 'inventoryCategory',reference:'inventoryCategory', text: '存货类别',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
		      	            	displaymember:'itemName',
		      	            	valuemember:'itemCode',hidden:true},
		      	    		{
								dataIndex: 'sizeTypeNo', text: '码组',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_size_type/listAll.json',
		      	    		    displaymember:'sizeTypeName',
		      	    		    valuemember:'sizeTypeNo',readOnly:true
							},
	      					{dataIndex: 'parentCategoryNo', text: '大类',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bill_material_dtl/getParentCategory.json?type=NO',
	      					    displaymember:'categoryName',
	      					    valuemember:'categoryNo',
	      						readOnly:true
							},
	      					{dataIndex: 'categoryNo', text: '小类',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bill_material_dtl/getCategory.json?type=NO',
	      					    displaymember:'categoryName',
	      					    valuemember:'categoryNo',
								readOnly:true
							},
		      	    		{dataIndex: 'materialSource', text: '物料属性',
		      	        		xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=material_source',
		      	    		    displaymember:'itemName',
		      	    		    valuemember:'itemCode',readOnly:true},
		      	    		{
								dataIndex: 'taxRateNo', text: '税率编号',
		      	    	    	xtype:'bllookupedit',
		      	    	    	displayvalue:Hc.mdmPath+'bas_tax_rate/listAll.json',
		      	    			displaymember:'taxRateName',
		      	    			valuemember:'taxRateNo',hidden:true
							},
		      	    		{dataIndex: 'taxCategory', text: '税种',
		      	    			xtype:'bllookupedit',
		      	        		displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
		      	    			displaymember:'taxCategoryName',
		      	    			valuemember:'taxCategoryNo',hidden:true},	      	    		    
		      	    		{dataIndex: 'allowSale', text: '允许销售',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'allowDelegate', text: '允许委外',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'allowPurchase', text: '允许采购',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'allowProduce', text: '允许生产',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'materialStatus', text: '物料状态',xtype:'bllookupedit',displayvalue:"0=模板:1=释放",hidden:true},
		      	    		{dataIndex: 'enableFlag', text: '启用状态',xtype:'bllookupedit',displayvalue:"0=禁用:1=启用",hidden:true},
		      	    		{dataIndex: 'codeRuleNo', text: '编码规则',
		      	    			xtype:'bllookupedit',
		    					displayvalue:Hc.mdmPath+'bas_bill_type/listAll.json',
		    			        displaymember:'billTypeName',
		    			        valuemember:'billTypeNo',
		    			        editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'advicePrice', text: '参考单价',hidden:true},
		      	    		{dataIndex: 'currencyNo', text: '币别编号',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_currency/listAll.json',
		      	    	        displaymember:'currencyName',
		      	    	        valuemember:'currencyNo',hidden:true},
		      	    		{dataIndex: 'seasonNo', text: '年季',
		      	            	xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=season_no',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
	      					{dataIndex: 'modelNo', text: '型体',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bas_model/listAll.json',
	      				        displaymember:'modelName',
	      				        valuemember:'modelNo',
	      						editor: {allowBlank: false},hidden:true},		
	      					{dataIndex: 'styleNo', text: '款号',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bas_style/listAll.json',
	      				        displaymember:'styleName',
	      				        valuemember:'styleNo',
	      						editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'productCode', text: '客户产品货号',hidden:true},
		      	    		{dataIndex: 'manufacturer', text: '制造商',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
		      	    		{dataIndex: 'normalUnit', text: '基本单位',
	      	    	        	xtype:'bllookupedit',
	      	    				displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
	      	    		        displaymember:'unitName',
	      	    		        valuemember:'unitNo',readOnly:true
							},
							{dataIndex: 'materialType', 
								text: '物料类型',
								readOnly:true,
								xtype : "bllookupedit",
								displayvalue : "1=原料:2=半成品:3=成品"
							},
							{dataIndex: 'ifQc', 
								text: '是否质检',
								readOnly:true,
								xtype : "bllookupedit",
								displayvalue : "0=否:1=是"
							},
	      	  				{dataIndex: 'supplyCategoryNo', text: '供货类别',
	      	  					xtype:'bllookupedit',
	      	  					displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
	      	  			        displaymember:'categoryName',
	      	  			        valuemember:'categoryNo',
	      	  					editor: {allowBlank: true},hidden:true},	      	    		        
	      					{
								dataIndex: 'brandNo', text: '品牌',
	      		    			xtype:'bllookupedit',
	      		    			displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
	      					    displaymember:'brandEname',
	      					    valuemember:'brandNo',
	      		    			readOnly:true
							},
	      					{dataIndex: 'specialCode', text: '特征码',readOnly:true},
		      	    		{dataIndex: 'developmentTimes', text: '开发次数',hidden:true},
		    				{dataIndex: 'lining', text: '里料',
		    					xtype:'bllookupedit',
		    					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=lining',
		    			        displaymember:'itemName',
		    			        valuemember:'itemCode',
		    					editor: {allowBlank: true},hidden:true},				
		    				{dataIndex: 'insoles', text: '衬里/内垫',editor: {allowBlank: true},hidden:true},		      	    		
		      	    		{dataIndex: 'outerBottom', text: '外底',hidden:true},
		      	    		{dataIndex: 'style', text: '风格',hidden:true},
		      	    		{dataIndex: 'salesChannels', text: '销售渠道',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
		      	    		{dataIndex: 'vampMaterial', text: '帮面材料',hidden:true},
		      	    		{dataIndex: 'colorNo', text: '颜色',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_color/listAll.json',
		      	    	        displaymember:'colorName',
		      	    	        valuemember:'colorCode',readOnly:true
							},
		      	    		{dataIndex: 'genderType', text: '男/女鞋',xtype:'bllookupedit',displayvalue:"F=女:M=男",hidden:true},
		      	    		{dataIndex: 'series', text: '系列',hidden:true},
		      	    		{dataIndex: 'joinOrderMetting', text: '是否参加订货会',xtype:'bllookupedit',displayvalue:"0=否:1=是",hidden:true},
		      	    		{dataIndex: 'textures', text: '材质类别',
		      	    			xtype:'bllookupedit',
		      	    			displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=textures',
		      	    	        displaymember:'itemName',
		      	    	        valuemember:'itemCode',hidden:true},
	      					{dataIndex: 'purchaseUnit', text: '采购单位',
	      						xtype:'bllookupedit',
	      						displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
	      				        displaymember:'unitName',
	      				        valuemember:'unitNo',
	      						editor: {allowBlank: true},hidden:true},
	      					{dataIndex: 'purchaseGroup', text: '采购组', editor: {allowBlank: true},hidden:true},			      	    	        
		      	    		{dataIndex: 'orderNo', text: '排列序号',hidden:true}
							/*
		      	    		{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'modifier', text: '最后修改人', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'modifyTime', text: '最后修改时间', editor: {allowBlank: false},hidden:true},
		      	    		{dataIndex: 'remarks', text: '备注',hidden:true}
		      	    		*/
		      	    	],
		      	    	gridModel: 'Hc_mdm.model.BasMaterial',
		      	    	gridPrimaryKey: 'materialNo',
		      	    	gridSubGrid: ['grid2'],
		      	    	gridSupGrid: '',
		      	    	gridLoadUrl: Hc.mdmPath + 'bas_material/list.json',
		      	    	gridExportUrl: Hc.mdmPath + 'bas_material/do_export.json',
		      	    	
		      	    	grid2Columns: [
		      	    				{dataIndex: 'materialNo', text: '物料ID'},
		      	    				{dataIndex: 'orderNo', text: '排列序号'},
		      	    				{dataIndex: 'sizeNo', text: '尺码编号'}/*,
		      	    				{dataIndex: 'barcode', text: '条码'}*/
		      	    			],
		      	    	grid2SubGrid: [],
		      	    	grid2SupGrid: 'mastergrid',
		      	    	grid2Model: 'Hc_mdm.model.BasMaterialSize',
		      	    	grid2PrimaryKey: '',
		      	    	grid2LoadUrl: Hc.mdmPath + 'bas_material_size/list.json',
		      	    	grid2ExportUrl: Hc.mdmPath + 'bas_material_size/do_export.json'
		
				});

		//基本资料
		var editBasInfo = {
				title : '基本资料',
				xtype : 'container',
				reference: 'editBasInfo',
		    	layout:{type:'table',columns:4},
		    	defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
		    	   
				items : [
					{
						xtype : 'textfield',reference : 'materialNo',fieldLabel : '物料ID',
						bind : {value : '{gridRow.materialNo}'},
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入20位字母或数字',
						maxLength : 20,
						enforceMaxLength : true
					},
					 {
						 xtype : 'textfield',reference : 'materialCode',fieldLabel : '物料编码',
						 bind : {value : '{gridRow.materialCode}'},allowBlank:true,
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入30位字母或数字',
						 maxLength : 30,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'textfield',reference : 'materialName',fieldLabel : '物料名称',
						 bind : {value : '{gridRow.materialName}'},allowBlank:true,
						 maxLength : 60,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'extcombox',reference : 'sizeTypeNo',fieldLabel : '码组',
						 displayvalue:Hc.mdmPath+'bas_size_type/listAll.json',
						 displaymember:'sizeTypeName',
						 valuemember:'sizeTypeNo',
						 bind : {value : '{gridRow.sizeTypeNo}'}
					 },
					 {
						 xtype : 'extcombox',reference:'parentCategoryNo',fieldLabel : '大类',
						 displayvalue:Hc.mdmPath+'bill_material_dtl/getParentCategory.json?type=NO',
						 displaymember:'categoryName',
						 valuemember:'categoryNo',
						 bind : {value : '{gridRow.parentCategoryNo}'},allowBlank:true
					 },
					 {
						 xtype : 'extcombox',reference:'categoryNo',fieldLabel : '小类',
						 displayvalue:Hc.mdmPath+'bill_material_dtl/getCategory.json?type=NO',
						 displaymember:'categoryName',
						 valuemember:'categoryNo',
						 bind : {value : '{gridRow.categoryNo}'},allowBlank:true
					 },
					 {
						 xtype : 'extcombox',reference:'normalUnit',fieldLabel : '基本单位',
						 displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
						 displaymember:'unitName',
						 valuemember:'unitNo',
						 bind : {value : '{gridRow.normalUnit}'}
					 },
					 {
					 	 xtype : 'extcombox',reference:'materialType',fieldLabel : '物料类型',
						 displayvalue:"1=原料:2=半成品:3=成品",
						 bind : {value : '{gridRow.materialType}'}
					 },
					 {
						 xtype : 'extcombox',reference : 'materialSource',fieldLabel : '物料属性',
						 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=material_source',
						 displaymember:'itemName',
						 valuemember:'itemCode',
						 bind : {value : '{gridRow.materialSource}'}
					 },
					 {xtype : 'numberfield',reference:'advicePrice',fieldLabel : '参考单价',bind : {value : '{gridRow.advicePrice}'}},
					 {xtype : 'textfield',reference : 'specifications',fieldLabel : '规格型号',bind : {value : '{gridRow.specifications}'}},
					 {xtype : 'extcombox',reference : 'taxRateNo',fieldLabel : '税率',
						 displayvalue:Hc.mdmPath+'bas_tax_rate/listAll.json',
						 displaymember:'taxRateName',
						 valuemember:'taxRateNo',
						 bind : {value : '{gridRow.taxRateNo}'}},
					 {
						 xtype : 'textfield',reference : 'oldCode',fieldLabel : '旧物料编码',bind : {value : '{gridRow.oldCode}'},
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入30位字母或数字',
						 maxLength : 30,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'textfield',reference : 'barcodeEan',fieldLabel : '国际条码',bind : {value : '{gridRow.barcodeEan}'},
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入20位字母或数字',
						 maxLength : 20,
						 enforceMaxLength : true
					 },
					 {
						 xtype : 'extcombox',reference:'currencyNo',fieldLabel : '币别',
						 displayvalue:Hc.mdmPath+'bas_currency/listAll.json',
						 displaymember:'currencyName',
						 valuemember:'currencyNo',
						 bind : {value : '{gridRow.currencyNo}'}},
					 {
					 	 xtype : 'extcombox',reference:'ifQc',fieldLabel : '是否质检',
						 displayvalue:"0=否:1=是",
						 bind : {value : '{gridRow.ifQc}'}
					 },
					 /*{
						 xtype : 'extcombox',reference:'codeRuleNo',fieldLabel : '编码规则',allowBlank:true,
							displayvalue:Hc.mdmPath+'bas_bill_type/listAll.json',
							displaymember:'billTypeName',
							valuemember:'billTypeNo',
						 bind : {value : '{gridRow.codeRuleNo}'}
					 },*/
					 //{name: 'materialStatus',bind:{value:'{gridRow.materialStatus}'},reference : 'materialStatus', xtype: 'extcombox', fieldLabel: '物料状态',displayvalue:"0=模板:1=释放"},
					 {xtype : 'textfield',reference:'remarks',fieldLabel : '备注',bind : {value : '{gridRow.remarks}'},colspan:4},


					 {
						 xtype : 'extcombox',reference : 'inventoryCategory',fieldLabel : '存货类别',
						 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
						 displaymember:'itemName',
						 valuemember:'itemCode',
						 bind : {value : '{gridRow.inventoryCategory}'},hidden:true
					 },
					 {
						 xtype : 'extcombox',reference : 'taxCategory',fieldLabel : '税种',
						 displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
						 displaymember:'taxCategoryName',
						 valuemember:'taxCategoryNo',
						 bind : {value : '{gridRow.taxCategory}'},hidden:true
					 },
					 /*{xtype : 'checkbox',reference:'allowSale',fieldLabel : '允许销售',bind : {value : '{gridRow.allowSale}'}},
					 {xtype : 'checkbox',reference:'allowDelegate',fieldLabel : '允许委外',bind : {value : '{gridRow.allowDelegate}'}},//
					 {xtype : 'checkbox',reference:'allowPurchase',fieldLabel : '允许采购',bind : {value : '{gridRow.allowPurchase}'}},
					 {xtype : 'checkbox',reference:'allowProduce',fieldLabel : '允许生产',bind : {value : '{gridRow.allowProduce}'}},
					 {xtype : 'checkbox',reference:'materialStatus',fieldLabel : '物料状态',bind : {value : '{gridRow.materialStatus}'}},
					 {xtype : 'checkbox',reference:'enableFlag',fieldLabel : '启用状态',bind : {value : '{gridRow.enableFlag}'}},*/
					 {name: 'allowSale',bind:{value:'{gridRow.allowSale}'},reference : 'allowSale', xtype: 'extcombox', fieldLabel: '允许销售',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'allowDelegate',bind:{value:'{gridRow.allowDelegate}'},reference : 'allowDelegate', xtype: 'extcombox', fieldLabel: '允许委外',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'allowPurchase',bind:{value:'{gridRow.allowPurchase}'},reference : 'allowPurchase', xtype: 'extcombox', fieldLabel: '允许采购',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'allowProduce',bind:{value:'{gridRow.allowProduce}'},reference : 'allowProduce', xtype: 'extcombox', fieldLabel: '允许生产',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {name: 'enableFlag',bind:{value:'{gridRow.enableFlag}'},reference : 'enableFlag', xtype: 'extcombox', fieldLabel: '启用状态',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
					 {
						 xtype : 'textfield',reference:'productCode',fieldLabel : '客户产品货号',bind : {value : '{gridRow.productCode}'},
						 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						 regexText:'请输入20位字母或数字',
						 maxLength : 20,
						 enforceMaxLength : true,hidden:true
					 },
					 //{xtype : 'checkbox',reference:'joinOrderMetting',fieldLabel : '是否参加订货会',bind : {value : '{gridRow.joinOrderMetting}'}},
					 {name: 'joinOrderMetting',bind:{value:'{gridRow.joinOrderMetting}'},reference : 'joinOrderMetting', xtype: 'extcombox', fieldLabel: '是否参加订货会',displayvalue:"0=否:1=是",hidden:true},
					 {
						 xtype : 'textfield',reference:'orderNo',fieldLabel : '排列序号',bind : {value : '{gridRow.orderNo}'},
						 maxLength : 11,
						 enforceMaxLength : true,hidden:true
					 }
				]
		};
		editBasInfo.layout.columns = 4;
		
		var editMatInfo1 = {
				title : '原料属性',
				xtype : 'container',
				reference: 'editMatInfo1',
		    	layout:{type:'table',columns:4},
		    	defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
		    	
		    	items : [
					{
						xtype : 'extcombox',reference:'purchaseUnit',fieldLabel : '采购单位',
						 displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
						displaymember:'unitName',
						valuemember:'unitNo',
						 bind : {value : '{gridRow.purchaseUnit}'}},
					 {
						 xtype : 'extcombox',reference:'supplyCategoryNo',fieldLabel : '供货类别',
						 displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
						 displaymember:'categoryName',
						 valuemember:'categoryNo',
						 bind : {value : '{gridRow.supplyCategoryNo}'}},
					{xtype : 'textfield',reference:'purchaseGroup',fieldLabel : '采购组',bind : {value : '{gridRow.purchaseGroup}'}}
				]
		};
		editMatInfo1.layout.columns = 4;
		
		//成品半成品属性
		var editMaterialInfo1 = {
				title : '成品半成品属性',
				xtype : 'container',
				reference: 'editMaterialInfo1',
		    	layout:{type:'table',columns:4},
		    	defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
		    	
		    	items : [
				         {xtype : 'extcombox',reference : 'brandNo',fieldLabel : '品牌',
							 displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
						     displaymember:'brandEname',
						     valuemember:'brandNo',
							 bind : {value : '{gridRow.brandNo}'}},						
						 {xtype : 'textfield',reference:'specialCode',fieldLabel : '特征码',bind : {value : '{gridRow.specialCode}'},hidden:false},
				         {xtype : 'extcombox',reference:'colorNo',fieldLabel : '颜色',
				        	 displayvalue:Hc.mdmPath+'bas_color/listAll.json',
						     displaymember:'colorName',
						     valuemember:'colorCode',
				        	 bind : {value : '{gridRow.colorNo}'}},
				         {xtype : 'extcombox',reference:'seasonNo',fieldLabel : '年季',minChars:1,
			        		 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=season_no',
						     displaymember:'itemName',
						     valuemember:'itemCode',
			        		 bind : {value : '{gridRow.seasonNo}'}}, 
		        		 {xtype : 'extcombox',reference:'modelNo',fieldLabel : '型体',
				        	 displayvalue:Hc.mdmPath+'bas_model/listAll.json',
						     displaymember:'modelName',
						     valuemember:'modelNo',
				        	 bind : {value : '{gridRow.modelNo}'}},							 
				         {xtype : 'extcombox',reference:'styleNo',fieldLabel : '款号',
				        	 displayvalue:Hc.mdmPath+'bas_style/listAll.json',
						     displaymember:'styleName',
						     valuemember:'styleNo',
				        	 bind : {value : '{gridRow.styleNo}'}},
				         {xtype : 'extcombox',reference:'lining',fieldLabel : '里料',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=lining',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.lining}'}},
				         {xtype : 'extcombox',reference:'manufacturer',fieldLabel : '制造商',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.manufacturer}'}},
			        	 {
							 xtype : 'extcombox',reference:'genderType',fieldLabel : '男/女鞋',
							 bind : {value : '{gridRow.genderType}'},displayvalue:"F=女:M=男",allowBlank:true
						 },
				         {xtype : 'textfield',reference:'style',fieldLabel : '风格',bind : {value : '{gridRow.style}'}},
				         {xtype : 'textfield',reference:'series',fieldLabel : '系列',bind : {value : '{gridRow.series}'}},
				         {xtype : 'textfield',reference:'vampMaterial',fieldLabel : '帮面材料',bind : {value : '{gridRow.vampMaterial}'}},
						 {xtype : 'textfield',reference:'insoles',fieldLabel : '衬里/内垫',bind : {value : '{gridRow.insoles}'}},				         
				         {xtype : 'textfield',reference:'outerBottom',fieldLabel : '外底',bind : {value : '{gridRow.outerBottom}'}},
				         {
							 xtype : 'extcombox',reference:'textures',fieldLabel : '材质类别',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=textures',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.textures}'}
						 },
				         {xtype : 'extcombox',reference:'salesChannels',fieldLabel : '销售类型',
				        	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
					         displaymember:'itemName',
					         valuemember:'itemCode',
				        	 bind : {value : '{gridRow.salesChannels}'}
						 },
				         {
							 xtype : 'numberfield',reference:'developmentTimes',fieldLabel : '开发次数',
							 bind : {value : '{gridRow.developmentTimes}'},allowBlank:true
						 }
		    	        ]
		};
		editMaterialInfo1.layout.columns = 4;		
		
		// 自定义基类布局
		var alltabpanel = {
			xtype : "tabpanel",
			reference : 'tabpanel',
			region : 'south',
			height : 200,
			layout: {
				type: 'table',
				columns:4,
				align:'center'
			},
			split : true,
			autoDestroy : true,
			tabPosition : 'top',
			border : false,
			defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
			items : [
				{layout: 'fit', index: 0,border:0,bodyPadding:3,items:[editBasInfo],title:'基本资料'},
				{layout: 'fit', index: 1,border:0,bodyPadding:3,items:[editMatInfo1],title:'原料属性'},
				{layout: 'fit', index: 2,border:0,bodyPadding:3,items:[editMaterialInfo1],title:'成品半成品属性'},
				{layout: 'fit', index: 3,border:0,bodyPadding:3,items:[me.grid2],title:'尺码明细'}
			]
		};

		me.items = [ me.toolbar ];
		if (me.searchItems.length > 0) {
			me.items.push(me.searchPanel);
		}
		me.items.push(me.grid);
		me.items.push(alltabpanel);
		me.items = me.items.concat(me.otherItems);

		me.callParent();
		// console.dir(me.gridItems);
	}
});


/**
 * Description: 物料信息表 bas_material/bas_material_sizeController
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmaterial.BasMaterialController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.basmaterial',
    init: function () {
        var me = this;
        me.callParent();
        delete me.lookupReference('grid2').title;

        var list = this.lookupReference('tabpanel').query('textfield,numberfield,datefield,combo');
        Ext.each(list,function(cmp){
            me.setComponentReadOnly(cmp,true);
        });
        /*for(var i=0;i<me.lookupReference('editBasInfo').items.keys.length;i++){ 
        	//me.lookupReference('editMaterialInfo').items[i].setDisabled(true);
        	} */
    },

    /**
     * 设置控件是否只读
     * @param component 控件本身
     * @param isReadOny 是否只读
     */
    setComponentReadOnly : function(component,isReadOny){
        component.setReadOnly(isReadOny);
    },
    
    /**初始化按钮*/
    initToolbar: function (objList) {
        var me = this;
        me.callParent(arguments);
        
        if (objList.btnAdd) {
            objList.btnAdd.setVisible(false);
        }

        if (objList.btnPrint) {
            objList.btnPrint.setVisible(false);
        }

        if (objList.btnExport) {
            objList.btnExport.setVisible(false);
        }

        if (objList.btnDelete) {
            objList.btnDelete.setVisible(false);
        }
        
        if (objList.btnUndo) {
            objList.btnUndo.setVisible(false);
        }
        
        if (objList.btnCancel) {
            objList.btnCancel.setVisible(false);
        }
        
        if (objList.btnSave) {
            objList.btnSave.setVisible(false);
        }
    }
    
    });

/**
 * Description: 物料信息表 bas_material/bas_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-06 11:06:13
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basmaterial.BasMaterialModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.basmaterial'
  });
/**
 * Description: 物料单位转换表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Wangjc
 * @date:  2015-03-31 13:55:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitch', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basmaterialunitswitch',
	
	controller: 'basmaterialunitswitch',
	viewModel: {
		type: 'basmaterialunitswitch'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '物料编号',
				name: 'materialNo'
			}],
			gridModel: 'Hc_mdm.model.BasMaterialUnitSwitch',
			gridColumns: [
							{dataIndex: 'switchId', text: '转换编号', editor: {allowBlank: false,xtype:'numberfield', maxLength:11,enforceMaxLength:true},hidden:false},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype:'numberfield', maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'materialNo', text: '物料编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'unitNoA', text: 'a单位编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'unitNoB', text: 'b单位编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'qtyA', text: 'a单位数量', editor: {allowBlank: false,xtype:'numberfield', maxLength:12,enforceMaxLength:true}},
							{dataIndex: 'qtyB', text: 'b单位数量', editor: {allowBlank: false,xtype:'numberfield', maxLength:12,enforceMaxLength:true}},
							 {
								dataIndex : 'enableFlag',
								text : '启用状态',
								editor : {
									allowBlank:false,
									xtype : 'comboyesno'
								},
								renderer : 'renderYesNo'
					     },
							
			],
			gridPrimaryKey: 'switchId',
			gridUnionKey: '',

			gridLoadUrl:  Hc.mdmPath+'bas_material_unit_switch/list.json?',
			gridSaveUrl:  Hc.mdmPath+'bas_material_unit_switch/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_material_unit_switch/do_export.json',
			gridImportUrl: '',

			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 物料单位转换表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:55:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitchController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basmaterialunitswitch',
    initAddData: function (newObj) {
		  if(this.callParent(arguments)===false) return false;
		  }
  });
/**
 * Description: 物料单位转换表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-31 13:55:53
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitchModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basmaterialunitswitch'
    
  });
/**
 * Description: All rights Reserved, Designed ByHc Copyright: Copyright(C)
 * 2014-2015 Company: Wonhigh.
 * 
 * @author: pan.zh
 * @date: 2015-03-31 
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basorganizationview.BasOrganizationView', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.basorganizationview',
    

    controller: 'basorganizationview',
    viewModel: {
        type: 'basorganizationview'
    },
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            gridModel: 'Hc_mdm.model.BasOrganizationGrid',
            gridColumns: [{
                dataIndex: 'orgNo',
                text: '编号'
            },
            {
                dataIndex: 'orgName',
                text: '名称'
            },
            {
                dataIndex: 'divisionNo',
                text: '事业部',
                xtype: 'bllookupedit',
                displayvalue: Hc.mdmPath + 'bas_division/list.json',
                displaymember: 'divisionName',
                valuemember: 'divisionNo'
            },
            {
                dataIndex: 'factoryNo',
                text: '厂区',
                xtype: 'bllookupedit',
                displayvalue: Hc.mdmPath + 'bas_factory/list.json',
                displaymember: 'factoryName',
                valuemember: 'factoryNo'
            },
            {
                dataIndex: 'orderNo',
                text: '排列序号'
            },
            {
                dataIndex: 'enableFlag',
                text: '启用状态',
                xtype: 'gridcombouseflag'
            }],
            gridPrimaryKey: 'orgNo',
            gridLoadUrl: Hc.mdmPath + 'bas_org_view/list.json',
            gridExportUrl: Hc.mdmPath + 'bas_org_view/do_export.json',
            gridImportUrl: '',

            searchColumn: 0,
            gridEditModel: 'cell',
            gridReadOnly: true,
            gridCanDrag: false,
            gridCanEdit: true,
            gridCanAdd: true,
            gridCanDelete: true,
            gridSelModel: 'MULTI'
        });

        me.otherItems = [{
            xtype: 'panel',
            region: 'north',
            width: 300,
            height: 78,
            border: true,
            title: '组织视图',
            header: {
                height: 20,
                padding: 0
            },
            layout: {
                type: 'table',
                columns: 4,
                align: 'center'
            },
            defaults: {
                labelAlign: 'right',
                labelWidth: 80,
                padding: 15,
                width: 200
            },
            items: [{
                xtype: 'combo',
                reference: 'viewTypeCombo',
                editable: false,
                emptyText: "请选择",
                triggerAction: 'all',
                fieldLabel: '视图类型',
                name: 'viewType',
                queryMode: 'local',
                store: [[1, '事业部'], [2, '厂区'], [3, '事业部=》厂区'], [4, '厂区=》事业部']],
                renderer: function(val) {
                    return val;
                },
                listeners: {
                    'select': 'onChangeviewType',
                    afterrender: function(comb) {
                        comb.setValue('1');
                        comb.setRawValue('事业部');
                    }
                }
            },
            {
                xtype: 'combo',
                reference: 'showDataCombo',
                editable: false,
                emptyText: "请选择",
                triggerAction: 'all',
                fieldLabel: '展示数据',
                name: 'showData',
                queryMode: 'local',
                store: [[1, '全部'], [2, '车间'], [3, '仓库']],

                renderer: function(val) {
                    return val;
                },
                listeners: {
                    'select': 'onChangeshowData',
                    'afterrender': function(comb) {
                        comb.setValue('1');
                        comb.setRawValue('全部');
                    }
                }

            }]
        },
        {
            xtype: 'treepanel',
            region: 'west',
            split: true,
            reference: 'oviewtree',
            itemId: 'oviewtree',
            width: 300,
            rootVisible: false,
            lines: true,
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'text',
                text: "百丽集团",
                sortable: false,
                hideable: false

            }],
            store: {
                type: 'treebase',
                proxy: {
                    type: 'ajax',
                    url: Hc.mdmPath + 'bas_org_view/getOrgViewTree.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'children',
                        totalProperty: 'totalCount'
                    },
                    extraParams: {
                        Type1: 1
                    }
                },
                root: {
                    id: 0,
                    text: 'root',
                    expanded: true
                }
            },
            listeners: {
                'selectionchange': 'onTreeSelectionChange'
            }
        }];

        me.callParent();
    }
});
/**
 * Description: All rights Reserved, Designed ByHc Copyright: Copyright(C)
 * 2014-2015 Company: Wonhigh.
 * 
 * @author: pan.zh
 * @date: 2015-03-31 
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basorganizationview.BasOrganizationViewController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basorganizationview',
    init: function() {

        var me = this,
        objList = me.getObjList();
        if (!objList) return;
        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }
        me.callParent(arguments);
        //隐藏按钮
        objList.btnSearch.setVisible(false);
        objList.btnAdd.setVisible(false);
        objList.btnDelete.setVisible(false);
        objList.btnReset.setVisible(false);
        objList.btnCopy.setVisible(false);
        objList.btnEdit.setVisible(false);
        objList.btnSave.setVisible(false);
        objList.btnUndo.setVisible(false);
        objList.btnCancel.setVisible(false);
        objList.btnExport.setVisible(false);
        //隐藏分隔符
        me.lookupReference('commontoolsp1').hidden=true;
        me.lookupReference('commontoolsp2').hidden=true;
        me.lookupReference('commontoolsp3').hidden=true;
        me.lookupReference('commontoolsp4').hidden=true;
        me.lookupReference('commontoolsp5').hidden=true;

       
    },

    // 树节点选择改变
    onTreeSelectionChange: function(sm, selections) {
        var me = this,
        objs = me.getObjList();
        if (!objs) return;
        selLength = sm.selected.items.length;
        if (selLength == 1) {
            var id = sm.selected.items[0].data.id;
            var Type3 = sm.selected.items[0].data.others.Type3;
            me.reloadDataGrid(id, Type3);

        } else {

}
        if (this.canPrint() && objs.btnPrint) {
            objs.btnPrint.setDisabled(selections.length === 0);
        }

    },
    //试图类型改变事件
    onChangeviewType: function(obj, newval, oldval) {
        this.reloadMenuTree(true);
    },
    //展示数据改变事件
    onChangeshowData: function(obj, newval, oldval) {
        this.reloadDataGrid();

    },
    //刷新树
    reloadMenuTree: function(isRoot) {
        var me = this;
        var objs = me.getObjList();
        var viewType = this.lookupReference('viewTypeCombo').getValue();
        var oviewtree = this.lookupReference('oviewtree');
        if (isRoot) {
            oviewtree.store.proxy.extraParams['Type1'] = viewType;
            oviewtree.store.load();
            //改变树后清空网格数据
            var store = objs.mastergrid.store;
            store.removeAll();
        } else {
            oviewtree.store.reload();
        }
    },
    //刷新网格
    reloadDataGrid: function(treeId, Type3) {
        var me = this;
        objs = me.getObjList();
        if (!objs) return;
        store = objs.mastergrid.store;
        var showData = me.lookupReference('showDataCombo').getValue();
        var viewType = me.lookupReference('viewTypeCombo').getValue();
        if (treeId) {
            if (Type3 != 3) {
                store.proxy.extraParams['Type1'] = viewType;
                store.proxy.extraParams['Type2'] = showData;
                store.proxy.extraParams['Type3'] = Type3;
                store.proxy.extraParams.orgNo = treeId;
                store.reload();
            }
        } else {
            //判断当前是否选中有树节点
            var list = objs.oviewtree.getSelectionModel().getSelection();
            if (list.length < 1) {
                Ext.Msg.alert("提示", "请选择一个树节点");
            } else {
                var id = objs.oviewtree.getSelectionModel().selected.items[0].data.id;
                var Type3 = objs.oviewtree.getSelectionModel().selected.items[0].data.others.Type3;
                if (Type3 != 3) {
                    store.proxy.extraParams['Type1'] = viewType;
                    store.proxy.extraParams['Type2'] = showData;
                    store.proxy.extraParams['Type3'] = Type3;
                    store.proxy.extraParams.orgNo = id;
                    store.reload();
                }
            }
        }
    }

});
/**
 * Description: All rights Reserved, Designed ByHc Copyright: Copyright(C)
 * 2014-2015 Company: Wonhigh.
 * 
 * @author: pan.zh
 * @date: 2015-03-31 
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basorganizationview.BasOrganizationViewModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',
	alias: 'viewmodel.basorganizationview'
});
/**
 * Description: 收款条件信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentclausefk.BasPaymentClauseFK', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.baspaymentclausefk',
	
	controller: 'baspaymentclausefk',
	viewModel: {
		type: 'baspaymentclausefk'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '付款条件编号',
				name: 'paymentClauseNo'
			},{
				xtype: 'textfield',
				fieldLabel: '付款条件名称',
				name: 'paymentClauseName'
			}],
			gridModel: 'Hc_mdm.model.BasPaymentClauseFK',
			gridColumns: [
							{
								dataIndex: 'paymentClauseNo', text: '付款条件编号', 
								editor: {
									allowBlank: false,
									maxLength:10,enforceMaxLength:true,
									regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
									regexText:'请输入字母或数字'
									}
							},
							{dataIndex: 'paymentClauseName', text: '付款条件名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{xtype:'gridcolumn',dataIndex:'paymentClauseType',text:'收款条件类型',hidden:true,hideable:false, editor: {allowBlank: false}},
							{dataIndex: 'creditDays', text: '信用天数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'preferentialDays', text: '优惠天数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{
								dataIndex: 'dueDateMethod', 
								text: '到期日计算方式', 
								editor:
								{
									allowBlank: true,maxLength:20,enforceMaxLength:true
								},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=due_date_method',
								displaymember:'itemName',
								valuemember:'itemCode'
							},
							{dataIndex: 'preferentialRate', text: '优惠率/金额', editor: {allowBlank: true,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
							{
								dataIndex: 'preferentialWay', 
								text: '优惠方式', 
								editor: 
								{
									allowBlank: true,maxLength:20,enforceMaxLength:true
								},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=preferential_way',
								displaymember:'itemName',
								valuemember:'itemCode'
							},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {xtype: 'comboyesno',maxLength:11,enforceMaxLength:true,allowBlank:false}, renderer: 'renderYesNo'}
							
						],
						gridPrimaryKey: 'paymentClauseNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_payment_clause/list.json?paymentClauseType=1',
						gridSaveUrl:  Hc.mdmPath+'bas_payment_clause/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_payment_clause/do_export.json',
						gridImportUrl: '',

						searchColumn: 4,
						gridEditModel: 'cell',
						gridCanDrag: false,
						gridCanEdit: true,
						gridCanAdd: true,
						gridCanDelete: true,
						gridSelModel: 'MULTI'
		});
		
		me.callParent();
	}
});

/**
 * Description: 收款条件信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentclausefk.BasPaymentClauseFKController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.baspaymentclausefk',
    
    onGridAfterEdit: function (editor, e) {
		var me = this;
        if (e.field == 'preferentialDays') {
        	var record = e.record;
        	var preferentialdays = record.get('preferentialDays');
        	var creditdays = record.get('creditDays');
            
            if (preferentialdays > creditdays) {
            	Ext.MessageBox.alert('提示', '优惠天数不能大于信用天数');
            	record.set('preferentialDays','');
				 return;
            }
            else return;
        }
        
   }
  });
/**
 * Description: 付款条件信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.baspaymentclausefk.BasPaymentClauseFKModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.baspaymentclausefk'
    
  });
/**
 * Description: 收款条件信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSK', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.baspaymentclausesk',
	
	controller: 'baspaymentclausesk',
	viewModel: {
		type: 'baspaymentclausesk'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '收款条件编号',
				name: 'paymentClauseNo'
			},
			{
				xtype: 'textfield',
				fieldLabel: '收款条件名称',
				name: 'paymentClauseName'
			}],
			gridModel: 'Hc_mdm.model.BasPaymentClauseSK',
			gridColumns: [
							{
								dataIndex: 'paymentClauseNo', 
								text: '收款条件编号', 
								editor: 
								{
									allowBlank: false,maxLength:10,enforceMaxLength:true,
									regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
									regexText:'请输入字母或数字'
									}
							},
							{dataIndex: 'paymentClauseName', text: '收款条件名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{xtype:'gridcolumn',dataIndex:'paymentClauseType',text:'收款条件类型',hidden:true,hideable:false,editor:{allowBlank:false}},
							{dataIndex: 'creditDays', text: '信用天数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'preferentialDays', text: '优惠天数', editor: {allowBlank: false,maxLength:11,enforceMaxLength:true}},
							{
								dataIndex: 'dueDateMethod',
								text: '到期日计算方式', 
								editor: 
								{
									allowBlank: true,maxLength:20,enforceMaxLength:true
								},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=due_date_method',
								displaymember:'itemName',
								valuemember:'itemCode'
									
							},
							{dataIndex: 'preferentialRate', text: '优惠率/金额', editor: {allowBlank: true,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
							{
								dataIndex: 'preferentialWay', 
								text: '优惠方式', 
								editor: 
								{
									allowBlank: true,maxLength:20,enforceMaxLength:true
								},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=preferential_way',
								displaymember:'itemName',
								valuemember:'itemCode'
							},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {xtype: 'comboyesno',maxLength:11,enforceMaxLength:true,allowBlank:false}, renderer: 'renderYesNo'}
						],
						
						gridPrimaryKey: 'paymentClauseNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_payment_clause/list.json?paymentClauseType=2',
						gridSaveUrl:  Hc.mdmPath+'bas_payment_clause/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_payment_clause/do_export.json',
						gridImportUrl: '',

						searchColumn: 4,
						gridEditModel: 'cell',
						gridCanDrag: false,
						gridCanEdit: true,
						gridCanAdd: true,
						gridCanDelete: true,
						gridSelModel: 'MULTI'
		});
		
		me.callParent();
	}
});

/**
 * Description: 收款条件信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSKController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.baspaymentclausesk',

      onGridAfterEdit: function (editor, e) {
    		var me = this;
            if (e.field == 'preferentialDays') {
            	var record = e.record;
            	var preferentialdays = record.get('preferentialDays');
            	var creditdays = record.get('creditDays');
                
                if (preferentialdays > creditdays) {
                	Ext.MessageBox.alert('提示', '优惠天数不能大于信用天数');
                	record.set('preferentialDays','');
   				 return;
                }
                else return;
            }
            
       }
  });
/**
 * Description: 付款条件信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-16 09:44:50
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSKModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.baspaymentclausesk'
    
  });
/**
 * Description: 结算方式信息表(default) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-16 16:33:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentmethod.BasPaymentMethod', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.baspaymentmethod',
	
	controller : 'baspaymentmethod',
	viewModel : {
		type : 'baspaymentmethod'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '结算方式编号',
				name : 'paymentMethodNo'
			} ,{
				xtype : 'textfield',
				fieldLabel : '结算方式名称',
				name : 'paymentMethodName'
			}],

			gridModel : 'Hc_mdm.model.BasPaymentMethod',
			
			gridColumns : [ {
				dataIndex : 'paymentMethodNo',
				text : '结算方式编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'paymentMethodName',
				text : '结算方式名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'orderNo',
				text : '排列序号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'enableFlag',
				text : '启用状态',
				editor : {
					xtype : 'comboyesno',
					allowBlank:false
				},
				renderer : 'renderYesNo'
			} ],
			
			gridPrimaryKey : 'paymentMethodNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_payment_method/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_payment_method/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_payment_method/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 结算方式信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-16 16:33:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspaymentmethod.BasPaymentMethodController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.baspaymentmethod'
  });
/**
 * Description: 结算方式信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-16 16:33:59
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.baspaymentmethod.BasPaymentMethodModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.baspaymentmethod',
  });
/**
 * Description: 行政省信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:56:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basprovince.BasProvince', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basprovince',
	
	controller: 'basprovince',
	viewModel: {
		type: 'basprovince'
	},
	initComponent: function () {
		var me= this;
		
		Ext.apply(me, {
			
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '行政省编号',
				name: 'provinceNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '行政省名称',
				name: 'provinceName'
			},{
				xtype: 'textfield',
				fieldLabel: '行政省特征码',
				name: 'provinceOpcode'						
			}
			],
			gridModel: 'Hc_mdm.model.BasProvince',
			gridColumns: [
							{dataIndex: 'provinceNo', text: '行政省编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
							{dataIndex: 'provinceName', text: '行政省名称', editor: {allowBlank: false,maxLength:15,enforceMaxLength:true}},
							{dataIndex: 'provinceLname', text: '行政省详细名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
							{dataIndex: 'provinceOpcode', text: '行政省特征码', editor: {allowBlank: false,maxLength:2,enforceMaxLength:true}},
							{
								dataIndex: 'countryNo', 
								text: '国家编号', 
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_country/list.json',
					    		displaymember:'countryName',
					    		valuemember:'countryNo'	
							},
							{dataIndex: 'directControlled', text: '是否直辖市', editor: {xtype: 'comboyesno',maxLength:11,enforceMaxLength:true}, renderer: 'renderYesNo'},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank:false,xtype: 'combouseflag',maxLength:11,enforceMaxLength:true}, renderer: 'renderUseFlag'}
						],
						gridPrimaryKey: 'provinceNo',
						gridUnionKey: 'provinceName',

						gridLoadUrl:  Hc.mdmPath+'bas_province/list.json',
						gridSaveUrl:  Hc.mdmPath+'bas_province/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_province/do_export.json',
						gridImportUrl: '',

						searchColumn: 4,
						gridEditModel: 'cell',
						gridCanDrag: false,
						gridCanEdit: true,
						gridCanAdd: true,
						gridCanDelete: true,
						gridSelModel: 'MULTI'
		});
		
		me.callParent();
	}
});

/**
 * Description: 行政省信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:56:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basprovince.BasProvinceController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basprovince',
    
    /*复制记录按钮 (复制选中的行)*/
    onBtnCopyClick: function (btn) {
        var me = this,
            grid = me.workObject,
            store = me.workObject.store,
            idField = me.workObject.primaryKey,
            selection = me.workObject.getSelection(),
            newObj;
        if (selection.length < 1)return;
        if (!grid.isCanAdd || grid.isReadOnly) {
            Hc.alert('此网格不允许新增数据');
            return;
        }
        if(grid.isMaster && this.editingList.length>0){
            Hc.alert('您有一笔数据正在处理，不能复制主表记录');
            return;
        }
        Ext.Array.each(selection, function (item) {
            newObj = Ext.create(store.model);
            Ext.apply(newObj.data, item.data);
            newObj.set(idField, '');
            newObj.set('_flag', 'A');
            newObj.set('provinceName','');
            store.add(newObj);
        });
    },
    
  });
/**
 * Description: 行政省信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-16 15:56:16
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basprovince.BasProvinceModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basprovince'  
  });
/**
 * Description: 采购组(default) All rights Reserved, Designed By Hc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: user
 * @date: 2015-05-05 08:44:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspurchasegroup.BasPurchaseGroup', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.baspurchasegroup',
	
	controller : 'baspurchasegroup',
	viewModel : {
		type : 'baspurchasegroup'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			searchItems : [{
				xtype : 'textfield',
				fieldLabel : '采购组编号',
				name : 'purchaseGroupNo'
			}, {
				xtype : 'textfield',
				fieldLabel : '采购组名',
				name : 'purchaseGroupName'
			}],
			gridModel : 'Hc_mdm.model.BasPurchaseGroup',
			gridColumns : [
				 {dataIndex: 'purchaseGroupNo', text: '采购组编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'purchaseGroupName', text: '采购组名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         /*{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},*/
		         {
					dataIndex : 'enableFlag',
					text : '启用状态',
					renderer : 'renderUseFlag',
					editor : {
						allowBlank : false,
						xtype : 'combouseflag',
						maxLength:30,
						enforceMaxLength:true
					}
				}/*,
		         {dataIndex: 'creator', text: '建档人', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'modifier', text: '修改人', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		         {dataIndex: 'remarks', text: '备注', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}}*/
			],
			gridPrimaryKey : 'purchaseGroupNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath + 'bas_purchase_group/list.json',
			gridSaveUrl : Hc.mdmPath
					+ 'bas_purchase_group/batchOperate.json',
			gridExportUrl : Hc.mdmPath + 'bas_purchase_group/do_export.json',
			gridImportUrl : '',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 采购组Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.baspurchasegroup.BasPurchaseGroupController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.baspurchasegroup'
  });
/**
 * Description: 采购组Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-05-05 08:44:06
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.baspurchasegroup.BasPurchaseGroupModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.baspurchasegroup'
  });
/**
 * Description: 地区信息表(来源于集团主数据 org_organ_region )(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 18:09:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basregion.BasRegion', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basregion',
	
	controller: 'basregion',
	viewModel: {
		type: 'basregion'
	},
	initComponent: function () {
		var me= this;
		countryStore = Ext.create('Hc_Common.store.Base', {
            fields: ['countryNo', 'countryName'],
            autoLoad: true,
            //pageSize:5,
            proxy: {
                url: Hc.mdmPath + 'bas_country/listAll.json'
            }
		});
		Ext.apply(me, {
			searchItems : [{
				xtype : 'textfield',
				fieldLabel : '地区名称',
				name : 'regionName'
			},  {
				xtype : 'combo',
				fieldLabel : '国家编号',
				name : 'countryNo',
				editable:false,
				displayField:'countryName',
				valueField:'countryNo',   
				store: countryStore,
				renderer: function (value) {
                    var index = countryStore.findExact('countryNo', value);
                    return index > -1 ? countryStore.getAt(index).data.countryName : value;
                }
			}
			],
			
			gridModel: 'Hc_mdm.model.BasRegion',
			gridColumns: [
				{dataIndex: 'regionNo', text: '地区编号', editor: {allowBlank: false}},
				{dataIndex: 'regionName', text: '地区名称', editor: {allowBlank: false}},
				{dataIndex: 'countryNo', text: '国家编号', 
					editor : {
						allowBlank : false,
						xtype:'combo',
						editable:false,
						displayField:'countryName',
						valueField:'countryNo',
						store: countryStore
						},
						renderer: function (value) {
		                    var index = countryStore.findExact('countryNo', value);
		                    return index > -1 ? countryStore.getAt(index).data.countryName : value;
		                }
				},
				{dataIndex: 'orderNo', text: '排列序号', editor : {xtype:'numberfield',allowBlank : true}},
				{dataIndex: 'enableFlag', text: '启用状态', renderer : 'renderUseFlag',editor : {allowBlank : false,	xtype : 'combouseflag'}}
			],
			gridPrimaryKey: 'regionNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath + 'bas_region/list.json',
			gridSaveUrl: Hc.mdmPath + 'bas_region/batchOperate.json',
			gridExportUrl: Hc.mdmPath + 'bas_region/do_export.json',
			gridImportUrl: Hc.mdmPath + '',


			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});

		me.callParent();
	}
});

/**
 * Description: 地区信息表(来源于集团主数据 org_organ_region )Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 18:09:26
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basregion.BasRegionController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basregion'
  });
/**
 * Description: 地区信息表(来源于集团主数据 org_organ_region )Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-12 18:09:26
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basregion.BasRegionModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basregion'
  });
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
/**
 * Description: 尺码类别信息表(来源于集团主数据 pro_size_attribute )Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassizetype.BasSizeTypeController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.bassizetype' 
  });
/**
 * Description: 尺码类别信息表(来源于集团主数据 pro_size_attribute )Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:58
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bassizetype.BasSizeTypeModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.bassizetype'
  });
/**
 * Description: 仓库信息表(来源于M3 MITWHL)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstore.BasStore', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstore',
	
	controller: 'basstore',
	viewModel: {
		type: 'basstore'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '仓库编号',
				name: 'storeNo'
			},{
				xtype: 'textfield',
				fieldLabel: '仓库名称',
				name: 'storeName'
			}
			],
			gridModel: 'Hc_mdm.model.BasStore',
			gridColumns: [
							{dataIndex: 'storeNo', text: '仓库编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
							{dataIndex: 'storeName', text: '仓库名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
							{
								dataIndex: 'brandNo', 
								text: '品牌', 
								editor:{
										allowBlank:false
									},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_brand/list.json',
					    		displaymember:'brandCname',
					    		valuemember:'brandNo'
							},
							{
								dataIndex: 'factoryNo', 
								text: '厂区', 
								editor:{allowBlank:false},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_factory/list.json',
					    		displaymember:'factoryName',
					    		valuemember:'factoryNo'
							},
							{
								dataIndex: 'divisionNo',
								text: '事业部', 
								editor:{allowBlank:false},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_division/list.json',
					    		displaymember:'divisionName',
					    		valuemember:'divisionNo'
							},
							{dataIndex: 'storeType', text: '仓库类型',
								editor:{allowBlank:false},
								xtype:'bllookupedit',
								displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=store_type',
								displaymember:'itemName',
								valuemember:'itemCode'},					
							{
								dataIndex: 'isMaster', 
								text: '是否主仓', 
								editor: {
										allowBlank: false,
										xtype : 'comboyesno',
										maxLength:11,enforceMaxLength:true
										},
									renderer : 'renderYesNo'},
							{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false,xtype : 'combouseflag',maxLength:11,enforceMaxLength:true},renderer : 'renderUseFlag'},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}}
						],
						gridPrimaryKey: 'storeNo',
						gridUnionKey: '',

						gridLoadUrl:  Hc.mdmPath+'bas_store/list.json',
						gridSaveUrl:  Hc.mdmPath+'bas_store/batchOperate.json',
						gridExportUrl:Hc.mdmPath+'bas_store/do_export.json',
						gridImportUrl: '',

						searchColumn: 4,
						gridEditModel: 'cell',
						gridCanDrag: false,
						gridCanEdit: true,
						gridCanAdd: true,
						gridCanDelete: true,
						gridSelModel: 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 仓库信息表(来源于M3 MITWHL)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstore.BasStoreController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basstore'
  });
/**
 * Description: 仓库信息表(来源于M3 MITWHL)Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 10:02:32
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basstore.BasStoreModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basstore'
  });
/**
 * Description: 储位信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:06
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorecell.BasStoreCell', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstorecell',
	
	controller: 'basstorecell',
	viewModel: {
		type: 'basstorecell'
	},
	initComponent: function () {
		var me= this;
		storeEStore = Ext.create('Hc_mdm.store.BasStore'),
		storeGStore = Ext.create('Hc_mdm.store.BasStore'),
        zoneEStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        zoneGStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        roomEStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
        roomGStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
        channelEStore = Ext.create('Hc_mdm.store.BasStoreChannel'),
        channelGStore = Ext.create('Hc_mdm.store.BasStoreChannel'),
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '储位编号',
				name : 'cellNo'
			},{
				xtype : 'textfield',
				fieldLabel : '储位名称',
				name : 'cellName'
			},{
				xtype : 'textfield',
				fieldLabel : '通道编号',
				name : 'channelNo'
			},{
				xtype : 'textfield',
				fieldLabel : '通道名称',
				name : 'channelName'
			} ],

			gridModel : 'Hc_mdm.model.BasStoreCell',
			
			gridColumns: [
				{dataIndex: 'cellNo', text: '储位编号', 
					editor: {allowBlank: false,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入10位字母或数字',
						maxLength : 10,
						enforceMaxLength : true}},
				{dataIndex:'cellCode',text:'储位编码',
							editor: {allowBlank: false,
								regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
								regexText:'请输入5位字母或数字',
								maxLength : 5,
								enforceMaxLength : true}
				},
				{dataIndex: 'cellName', text: '储位名称',
						editor: {allowBlank: false},
						maxLength : 30,
						enforceMaxLength : true},
				{dataIndex:'storeNo',text:'仓库',	
						editor:{allowBlank:false							
						},
						xtype:'bllookupedit',
						//displayvalue:Hc.mdmPath+'bas_store/list.json',
						estore: storeEStore,
						gstore: storeGStore,
			    		displaymember:'storeName',
			    		valuemember:'storeNo'
				},
				{
					dataIndex:'zoneNo',text:'仓区',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_zone/list.json',
					estore: zoneEStore,
					gstore: zoneGStore,
		    		displaymember:'zoneName',
		    		valuemember:'zoneNo'
				},
				{
					dataIndex:'roomNo',text:'库区',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_room/list.json',
					estore: roomEStore,
					gstore: roomGStore,
		    		displaymember:'roomName',
		    		valuemember:'roomNo'
				},
				{dataIndex: 'channelNo', text: '通道编号',
							//editor: {allowBlank: false},
							//regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
							//regexText:'请输入10位字母或数字',
							//maxLength : 10,
							//enforceMaxLength : true
					xtype:'bllookupedit',
					estore: channelEStore,
					gstore: channelGStore,
		    		displaymember:'channelNo',
		    		valuemember:'channelNo'
				},
				//获取物料大类			
				{dataIndex: 'categoryNo', text: '物料大类', 
							 editor: {allowBlank: false},
							xtype:'bllookupedit',	
							displayvalue:Hc.mdmPath+'bas_category/listCategory.json?type=1',
				    		displaymember:'categoryName',
				    		valuemember:'categoryNo'
							},			
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"}
				
			],
			
			gridPrimaryKey : 'lineId',
			gridUnionKey : 'storeNo,cellNo',

			gridLoadUrl : Hc.mdmPath+'bas_store_cell/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_store_cell/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_store_cell/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 储位信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:06
 * @version 1.0.0
 * xiug
 */
Ext.define('Hc_mdm.view.basstorecell.BasStoreCellController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basstorecell',
    init:function(){
    	var me = this,objList= me.getObjList();
    	me.callParent(arguments);
    	me.workObject.on('edit','onGridAfterEdit',me);
    },
    onGridAfterEdit:function(editor, obj)
    {
    	if(obj.field == 'channelNo') {
			var record = obj.record;
			var channelNo = record.get('channelNo');
			var sstore = Ext.create('Hc_Common.store.Base', {
			    fields: ["channelNo", "channelName"],
                proxy:{
                    url:Hc.mdmPath+"bas_store_channel/list.json"
                }
			});
			
			sstore.proxy.extraParams["channelNo"]=channelNo;
			sstore.reload();
			sstore.reload({
			    scope: this,
			    callback: function(records, operation, success) {
			    	if (records.length>0)
			    	{
			    		obj.record.set('channelName',records[0].data.channelName);
			    	}
			    	else
			    	{
			    		obj.record.set('channelName',"");
			    	}
			    }
			});
		}
    	
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
    	var me = this;
    	me.callParent(arguments);
    	if (e.field == 'zoneNo') {
            var record = e.record;
            var newstoreNo = record.get('storeNo');
            var zoneNo = record.get('zoneNo');
            if (newstoreNo == '') {
                Ext.Msg.alert('提示', '请先选择仓库');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldstoreNo = store.proxy.extraParams['storeNo'];
                if (newstoreNo != oldstoreNo) {
                    store.proxy.extraParams.storeNo = newstoreNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(zoneNo);
                    });
                    store.load();
                }
            }

        }
        if (e.field == 'roomNo') {
            var record = e.record;
            var storeNo = record.get('storeNo');
            var newzoneNo = record.get('zoneNo');
            var roomNo = record.get('roomNo');
            if (newzoneNo == '') {
                Ext.Msg.alert('提示', '请先选择仓区');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldzoneNo = store.proxy.extraParams['zoneNo'];
                if (newzoneNo != oldzoneNo) {
                    store.proxy.extraParams.storeNo = storeNo;
                    store.proxy.extraParams.zoneNo = newzoneNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(roomNo);
                    });
                    store.load();
                }
            }
        }
        if (e.field == 'channelNo') {
            var record = e.record;
            var storeNo = record.get('storeNo');
            var zoneNo = record.get('zoneNo');
            var newroomNo = record.get('roomNo');
            var channelNo = record.get('channelNo');
            if (newroomNo == '') {
                Ext.Msg.alert('提示', '请先选择库区');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldroomNo = store.proxy.extraParams['roomNo'];
                if (newroomNo != oldroomNo) {
                    store.proxy.extraParams.storeNo = storeNo;
                    store.proxy.extraParams.zoneNo = zoneNo;
                    store.proxy.extraParams.roomNo = newroomNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(channelNo);
                    });
                    store.load();
                }
            }
        }
    },
    
    //编辑之后
    onGridAfterEdit: function(editor, e) {
    	var me = this;
    	me.callParent(arguments);

    	if (e.field == 'storeNo') {
            var oldstoreNo = e.originalValue;
            var newstoreNo = e.value;
            if (oldstoreNo != newstoreNo) {
                var record = e.record;
                record.set('zoneNo', '');
                record.set('roomNo', '');
                record.set('channelNo', '');
            }

        }
        if (e.field == 'zoneNo') {
            var oldzoneNo = e.originalValue;
            var newzoneNo = e.value;
            if (oldzoneNo != newzoneNo) {
                var record = e.record;
                record.set('roomNo', '');
                record.set('channelNo', '');
            }

        }
        if (e.field == 'roomNo') {
            var oldroomNo = e.originalValue;
            var newroomNo = e.value;
            if (oldroomNo != newroomNo) {
                var record = e.record;
                record.set('channelNo', '');
            }

        }
    }
  });
/**
 * Description: 储位信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 17:36:06
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basstorecell.BasStoreCellModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basstorecell',
  });
/**
 * Description: 通道信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorechannel.BasStoreChannel', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstorechannel',
	
	controller: 'basstorechannel',
	viewModel: {
		type: 'basstorechannel'
	},
	initComponent: function () {
		var me= this;
		storeEStore = Ext.create('Hc_mdm.store.BasStore'),
		storeGStore = Ext.create('Hc_mdm.store.BasStore'),
        zoneEStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        zoneGStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        roomEStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
        roomGStore = Ext.create('Hc_mdm.store.BasStoreRoom'),
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '通道编号',
				name : 'channelNo'
			},{
				xtype : 'textfield',
				fieldLabel : '通道名称',
				name : 'channelName'
			},{
				xtype : 'textfield',
				fieldLabel : '库区编号',
				name : 'roomNo'
			},{
				xtype : 'textfield',
				fieldLabel : '库区名称',
				name : 'roomName'
			} ],

			gridModel : 'Hc_mdm.model.BasStoreChannel',
			
			gridColumns: [
				{dataIndex: 'channelNo', text: '通道编号',
					editor: {allowBlank: false},
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true},
				{dataIndex: 'channelName', text: '通道名称',
						editor: {allowBlank: false},
						maxLength : 30,
						enforceMaxLength : true},
				{
					dataIndex: 'storeNo', 
					text: '仓库',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store/list.json',
					estore: storeEStore,
					gstore: storeGStore,
		    		displaymember:'storeName',
		    		valuemember:'storeNo'
				},
				{
					dataIndex: 'zoneNo',
					text: '仓区',
					editor:{allowBlank:false},
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_zone/list.json',
					estore: zoneEStore,
					gstore: zoneGStore,
		    		displaymember:'zoneName',
		    		valuemember:'zoneNo'
				},
				{dataIndex: 'roomNo', text: '库区编号', 
					xtype:'bllookupedit',
					//displayvalue:Hc.mdmPath+'bas_store_room/listAll.json',
					estore: roomEStore,
					gstore: roomGStore,
		    		displaymember:'roomNo',
		    		valuemember:'roomNo',
		    		editor: {allowBlank: false}
				},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"}			],
			
			gridPrimaryKey : 'lineId',
			gridUnionKey : 'storeNo,zoneNo,roomNo,channelNo',

			gridLoadUrl : Hc.mdmPath+'bas_store_channel/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_store_channel/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_store_channel/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 通道信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 * xiug
 */
Ext.define('Hc_mdm.view.basstorechannel.BasStoreChannelController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basstorechannel',
    init:function(){
    	var me = this,objList= me.getObjList();
    	me.callParent(arguments);
    	me.workObject.on('edit','onGridAfterEdit',me);
    },
    onGridAfterEdit:function(editor, obj)
    {
    	if(obj.field == 'roomNo') {
			var record = obj.record;
			var roomNo = record.get('roomNo');
			var sstore = Ext.create('Hc_Common.store.Base', {
			    fields: ["roomNo", "roomName"],
                proxy:{
                    url:Hc.mdmPath+"bas_store_room/list.json"
                }
			});
			
			sstore.proxy.extraParams["roomNo"]=roomNo;
			sstore.reload();
			sstore.reload({
			    scope: this,
			    callback: function(records, operation, success) {
			    	if (records.length>0)
			    	{
			    		obj.record.set('roomName',records[0].data.roomName);
			    	}
			    	else
			    	{
			    		obj.record.set('roomName',"");
			    	}
			    }
			});
		}
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
    	var me = this;
    	me.callParent(arguments);
        if (e.field == 'zoneNo') {
            var record = e.record;
            var newstoreNo = record.get('storeNo');
            var zoneNo = record.get('zoneNo');
            if (newstoreNo == '') {
                Ext.Msg.alert('提示', '请先选择仓库');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldstoreNo = store.proxy.extraParams['storeNo'];
                if (newstoreNo != oldstoreNo) {
                    store.proxy.extraParams.storeNo = newstoreNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(zoneNo);
                    });
                    store.load();
                }
            }

        }
        if (e.field == 'roomNo') {
            var record = e.record;
            var storeNo = record.get('storeNo');
            var newzoneNo = record.get('zoneNo');
            var roomNo = record.get('roomNo');
            if (newzoneNo == '') {
                Ext.Msg.alert('提示', '请先选择仓区');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldzoneNo2 = store.proxy.extraParams['zoneNo'];
                if (newzoneNo != oldzoneNo2) {
                    store.proxy.extraParams.storeNo = storeNo;
                    store.proxy.extraParams.zoneNo = newzoneNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(roomNo);
                    });
                    store.load();
                }
            }

        }
    },
    
    //编辑之后
    onGridAfterEdit: function(editor, e) {
    	var me = this;
    	me.callParent(arguments);

        if (e.field == 'storeNo') {
            var oldstoreNo = e.originalValue;
            var newstoreNo = e.value;
            if (oldstoreNo != newstoreNo) {
                var record = e.record;
                record.set('zoneNo', '');
                record.set('roomNo', '');
            }

        }
        if (e.field == 'zoneNo') {
            var oldzoneNo = e.originalValue;
            var newzoneNo = e.value;
            if (oldzoneNo != newzoneNo) {
                var record = e.record;
                record.set('roomNo', '');
            }

        }
    }
  });
/**
 * Description: 通道信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 16:34:47
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basstorechannel.BasStoreChannelModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basstorechannel',
  });
/**
 * Description: 库区信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstoreroom.BasStoreRoom', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstoreroom',
	
	controller: 'basstoreroom',
	viewModel: {
		type: 'basstoreroom'
	},
	initComponent: function () {
		var me= this;
		storeEStore = Ext.create('Hc_mdm.store.BasStore'),
		storeGStore = Ext.create('Hc_mdm.store.BasStore'),
        zoneEStore = Ext.create('Hc_mdm.store.BasStoreZone'),
        zoneGStore = Ext.create('Hc_mdm.store.BasStoreZone'),
		Ext.apply(me, {
			
			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '库区编号',
				name : 'roomNo'
			},{
				xtype : 'textfield',
				fieldLabel : '库区名称',
				name : 'roomName'
			},{
				xtype : 'textfield',
				fieldLabel : '仓区编号',
				name : 'zoneNo'
			},{
				xtype : 'textfield',
				fieldLabel : '仓区名称',
				name : 'zoneName'
			}, ],

			gridModel : 'Hc_mdm.model.BasStoreRoom',
			
			gridColumns: [
				{dataIndex: 'roomNo', text: '库区编号', 
					editor: {allowBlank: false,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入10位字母或数字',
						maxLength : 10,
						enforceMaxLength : true}
				},
				{dataIndex: 'roomName', text: '库区名称',
						editor: {allowBlank: false,
							maxLength : 30,
							enforceMaxLength : true}
				},
				{dataIndex:'storeNo',text:'仓库',
						editor:{allowBlank:false},
						xtype:'bllookupedit',
						//displayvalue:Hc.mdmPath+'bas_store/list.json',
						estore: storeEStore,
						gstore: storeGStore,
			    		displaymember:'storeName',
			    		valuemember:'storeNo'
				},
				
				{dataIndex: 'zoneNo', text: '仓区',
						editor: {allowBlank: false,
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入10位字母或数字',
						maxLength : 10,
						enforceMaxLength : true},
						xtype:'bllookupedit',
						//displayvalue:Hc.mdmPath+'bas_store_zone/list.json',
						estore: zoneEStore,
						gstore: zoneGStore,
			    		displaymember:'zoneName',
			    		valuemember:'zoneNo'
				},
				/*{dataIndex: 'zoneName', text: '仓区名称',
								editor:{
									maxLength : 20,
									enforceMaxLength : true}
				},*/
				{dataIndex: 'roomType', text: '库区类型',
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=room_type',
					displaymember:'itemName',
					valuemember:'itemCode',
					editor:{allowBlank:false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=禁用:1=启用"}
			],
			
			gridPrimaryKey : 'lineId',
			gridUnionKey : 'storeNo,zoneNo,roomNo',

			gridLoadUrl : Hc.mdmPath+'bas_store_room/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_store_room/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_store_room/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 库区信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 * xiug
 */
Ext.define('Hc_mdm.view.basstoreroom.BasStoreRoomController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basstoreroom',
    init:function(){
    	var me = this,objList= me.getObjList();
    	me.callParent(arguments);
    	//me.workObject.on('edit','onGridAfterEdit',me);
    	//me.lookupReference('zoneNo').setValue('32');
    },
    /* 新增数据时，初始化数据对象*/
    initAddData: function (newObj) {
    	var me = this,objList= me.getObjList();
    	me.callParent(arguments);
    	//me.workObject.on('edit','onGridAfterEdit',me);
    },
    /*onGridAfterEdit:function(editor, obj)
    {
    	if(obj.field == 'zoneNo') {
			var record = obj.record;
			var zoneNo = record.get('zoneNo');
			var sstore = Ext.create('Hc_Common.store.Base', {
			    fields: ["zoneNo", "zoneName"],
                proxy:{
                    url:Hc.mdmPath+"bas_store_zone/list.json"
                }
			});
			
			sstore.proxy.extraParams["zoneNo"]=zoneNo;
			sstore.reload();
			sstore.reload({
			    scope: this,
			    callback: function(records, operation, success) {
			    	if (records.length>0)
			    	{
			    		obj.record.set('zoneName',records[0].data.zoneName);
			    	}
			    	else
			    	{
			    		obj.record.set('zoneName',"");
			    	}
			    }
			});
		}
    }*/
    
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
    	var me = this;
    	me.callParent(arguments);
        if (e.field == 'zoneNo') {
            var record = e.record;
            var newstoreNo = record.get('storeNo');
            var zoneNo = record.get('zoneNo');
            if (newstoreNo == '') {
                Ext.Msg.alert('提示', '请先选择仓库');
                return false;
            } else {
                var store = e.column.getEditor().store;
                oldstoreNo = store.proxy.extraParams['storeNo'];
                if (newstoreNo != oldstoreNo) {
                    store.proxy.extraParams.storeNo = newstoreNo;
                    store.on("load",
                    function() {
                        e.column.getEditor().setValue(zoneNo);
                    });
                    store.load();
                }
            }

        }
    },
    
    //编辑之后
    onGridAfterEdit: function(editor, e) {
    	var me = this;
    	me.callParent(arguments);

        if (e.field == 'storeNo') {
            var oldstoreNo = e.originalValue;
            var newstoreNo = e.value;
            if (oldstoreNo != newstoreNo) {
                var record = e.record;
                record.set('zoneNo', '');
            }

        }
    }
  });
/**
 * Description: 库区信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-19 08:54:12
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basstoreroom.BasStoreRoomModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basstoreroom',
  });
/**
 * Description: 仓区信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorezone.BasStoreZone', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basstorezone',
	
	controller: 'basstorezone',
	viewModel: {
		type: 'basstorezone'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
				xtype : 'textfield',
				fieldLabel : '仓区编号',
				name : 'zoneNo'
		},{
			xtype : 'textfield',
			fieldLabel : '仓区名称',
			name : 'zoneName'
		},{
			xtype:'extcombox',
			fieldLabel:'仓库',
			name:'storeNo',
			displayvalue:Hc.mdmPath+'bas_store/list.json',
    		displaymember:'storeName',
    		valuemember:'storeNo'
		}
		],
		gridModel: 'Hc_mdm.model.BasStoreZone',
		gridColumns: [
						{dataIndex: 'zoneNo', text: '仓区编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
						{dataIndex: 'zoneName', text: '仓区名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
						{
							dataIndex: 'storeNo', text: '仓库', 
							xtype:'bllookupedit',
							displayvalue:Hc.mdmPath+'bas_store/list.json',
				    		displaymember:'storeName',
				    		valuemember:'storeNo',
				    		editor: {allowBlank: false}
						},
						{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield',maxLength:11,enforceMaxLength:true}},
						{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false,xtype : 'combouseflag',maxLength:11,enforceMaxLength:true},renderer : 'renderUseFlag'}
					],
					gridPrimaryKey: 'lineId',
					gridUnionKey: 'storeNo,zoneNo',
					
					gridLoadUrl: Hc.mdmPath+'bas_store_zone/list.json',
					gridSaveUrl: Hc.mdmPath+'bas_store_zone/batchOperate.json',
					gridExportUrl: Hc.mdmPath+'bas_store_zone/do_export.json',
					gridImportUrl: '',
						
					searchColumn: 4,
					gridEditModel: 'cell',
					gridCanDrag: false,
					gridCanEdit: true,
					gridCanAdd: true,
					gridCanDelete: true,
					gridSelModel: 'MULTI'	
		});
		
		me.callParent();
	}
});

/**
 * Description: 仓区信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstorezone.BasStoreZoneController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basstorezone'
  });
/**
 * Description: 仓区信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-20 13:32:42
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basstorezone.BasStoreZoneModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basstorezone'
    
  });
/**
 * Description: (default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-13 09:48:16
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstyle.BasStyle', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.basstyle',
	
	controller: 'basstyle',
	viewModel: {
		type: 'basstyle'
	},

		//查询条件
	searchItems: [
	      		{xtype: 'textfield', fieldLabel: '型体编号', name: 'modelNo'},
	      		{xtype: 'textfield', fieldLabel: '型体名称', name: 'modelName'}
	      	],


       //主表字段
	      	gridColumns: [
	      		{dataIndex: 'modelNo', text: '型体编码', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
	      		{dataIndex: 'modelName', text: '型体名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}}
	      		/*{dataIndex: 'remarks', text: '备注', editor: true,  },
	      		{dataIndex: 'creator', text: '建档人'},
	      		{dataIndex: 'createTime', text: '建档时间'},
	      		{dataIndex: 'modifier', text: '修改人'},
	      		{dataIndex: 'modifyTime', text: '修改时间'}*/
	      	],
	      	gridModel: 'Hc_mdm.model.BasModel',
	    	gridPrimaryKey: 'modelNo',
	    	gridSubGrid: ['grid1'],
	    	gridSupGrid: '',
	    	gridLoadUrl: Hc.mdmPath + 'bas_model/list.json',
	    	gridSaveUrl: Hc.mdmPath + 'bas_model/saveMasterCustomerList.json',
	    	gridExportUrl: Hc.mdmPath + 'bas_model/do_export.json',
	    	gridImportUrl: Hc.mdmPath + 'bas_model/importExcel.json',
	    	
      //从表字段
	    	grid1Columns: [
	    	       		{dataIndex: 'styleNo', text: '款号编码', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
	    	       		{dataIndex: 'modelNo', text: '型体编码',hidden:true},
	    	       		{dataIndex: 'styleName', text: '款号名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
	    	       		{dataIndex: 'creator', text: '创建人'},
	    	       		{dataIndex: 'createTime', text: '创建时间'},
	    	       		{dataIndex: 'modifier', text: '修改人'},
	    	       		{dataIndex: 'modifyTime', text: '修改时间'}
	    	       	],
	    	       	grid1SubGrid: [],
	    	       	grid1SupGrid: 'mastergrid',
	    	       	grid1Model: 'Hc_mdm.model.BasStyle',
	    	       	grid1PrimaryKey: 'styleNo',
	    	       	grid1LoadUrl: Hc.mdmPath + 'bas_style/list.json',
	    	       	grid1ExportUrl: Hc.mdmPath + 'bas_style/do_export.json',
	    	       	grid1ImportUrl: Hc.mdmPath + 'bas_style/importExcel.json',
	    	       	
	    	       	initComponent: function () {

	    	    		var me = this;
	    	    		me.callParent();
	    	    	}
});
/**
 * Description: Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-13 18:25:30
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basstyle.BasStyleController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.basstyle',
    	init: function () {
            var me = this;
            me.callParent();
        }
  });
/**
 * Description: Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:    he.xy
 * @date:  2015-04-13 18:25:30
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basstyle.BasStyleModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.basstyle',
    
  });
/**
 * Description: 供应商信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: lucheng
 * @date: 2015-03-23 15:10:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplier.BasSupplier', {
	extend : 'Hc_Common.view.BaseMultiPage',
	alias : 'widget.bassupplier',
	
	controller : 'bassupplier',
	viewModel : {
		type : 'bassupplier'
	},

	isAutoLoad : false,
	customLayout1 : true,

	initComponent : function() {
		var me = this;
		// 定义公共store
		var countryStore = Ext.create('Hc_mdm.model.BasCountry', {
					model : 'Hc_mdm.model.BasCountry',
					autoLoad : false,
					proxy : {
						url : Hc.mdmPath + 'bas_country/list.json'
					}
				});

		Ext.apply(me, {
			// 查询面板
			searchItems : [{
						xtype : 'textfield',
						fieldLabel : '供应商编号',
						labelAlign : 'right',
						name : 'supplierNo'
					}, {
						xtype : 'textfield',
						fieldLabel : '供应商名称',
						labelAlign : 'right',
						name : 'supplierName'
					}, {
						xtype : 'extcombox',
						fieldLabel : '供应商类型',
						labelAlign : 'right',
						name : 'supplierType',
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=supplier_type',
						displaymember : 'itemName',
						valuemember : 'itemCode'
					}, {
						xtype : 'extcombox',
						fieldLabel : '供应商状态',
						name : 'supplierStatus',
						labelAlign : 'right',
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=supplier_status',
						displaymember : 'itemName',
						valuemember : 'itemCode'
					}],

			// 主表网络
			gridColumns : [{
						dataIndex : 'supplierNo',
						text : '供应商编号',
						editor : {
							allowBlank : false
							// ,maxLength:20,enforceMaxLength:true
						}
					}, {
						dataIndex : 'supplierName',
						text : '供应商名称',
						editor : {
							allowBlank : false,
							maxLength : 60,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'supplierSname',
						text : '供应商简称',
						editor : {
							allowBlank : false,
							maxLength : 30,
							enforceMaxLength : true
						}
					},  /*{
						dataIndex : 'countryNo',
						text : '国家',
						editor : {
							allowBlank : true
						},
						xtype : 'bllookupedit',
						displayvalue : Hc.mdmPath + 'bas_country/list.json',
						// storeType:'Hc_mdm.model.BasCountry',
						displaymember : 'countryName',
						valuemember : 'countryNo'
					}, {
						dataIndex : 'provinceNo',
						text : '地区',
						xtype : 'bllookupedit',
						editor : {
							allowBlank : true
						},
						displayvalue : Hc.mdmPath + 'bas_region/list.json',
						displaymember : 'regionName',
						valuemember : 'regionNo'
					}, {
						dataIndex : 'postcodeNo',
						text : '邮政编码',
						editor : {
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'mobileNo',
						text : '手机号码',
						editor : {
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'phoneNo',
						text : '电话号码',
						editor : {
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'faxNo',
						text : '传真号码',
						editor : {
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'email',
						text : '邮件地址',
						editor : {
							maxLength : 40,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'website',
						text : '公司网站',
						editor : {
							maxLength : 50,
							enforceMaxLength : true
						}
					}, */{
						dataIndex : 'supplierType',
						text : '供应商类型',
						editor : {
							allowBlank : false
						},
						xtype : 'bllookupedit',
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=supplier_type',
						displaymember : 'itemName',
						valuemember : 'itemCode'
					},

					{
						dataIndex : 'supplierStatus',
						text : '供应商状态',
						editor : {
							allowBlank : false
						},
						xtype : 'bllookupedit',
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=supplier_status',
						displaymember : 'itemName',
						valuemember : 'itemCode'
					},

					{
						dataIndex : 'factoryType',
						text : '厂商类别',
						editor : {
							allowBlank : false
						},
						xtype : 'bllookupedit',
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=factory_type',
						displaymember : 'itemName',
						valuemember : 'itemCode'
					},
					{
						dataIndex : 'supplierAddress',
						text : '供应商地址',
						editor : {
							allowBlank : false,
							maxLength : 90,
							enforceMaxLength : true
						}
					},
					/*
					 * { dataIndex : 'fixInDivision', text : '固定使用组织', editor : {
					 * allowBlank : false }, xtype : "bllookupedit",
					 * displayvalue : "0=否:1=是" }, { dataIndex : 'currencyNo',
					 * text : '订单币种', editor : { allowBlank : false }, xtype :
					 * 'bllookupedit', displayvalue : Hc.mdmPath +
					 * 'bas_currency/list.json', displaymember : 'currencyName',
					 * valuemember : 'currencyNo' },
					 *  { dataIndex : 'paymentClauseNo', text : '付款条件', editor : {
					 * allowBlank : false }, xtype : 'bllookupedit',
					 * displayvalue : Hc.mdmPath +
					 * 'bas_payment_clause/list.json?paymentClauseType=1',
					 * displaymember : 'paymentClauseName', valuemember :
					 * 'paymentClauseNo' },
					 *  { dataIndex : 'paymentMethodNo', text : '付款方式', editor : {
					 * allowBlank : false }, xtype : 'bllookupedit',
					 * displayvalue : Hc.mdmPath +
					 * 'bas_payment_method/list.json', displaymember :
					 * 'paymentMethodName', valuemember : 'paymentMethodNo' },
					 *  { dataIndex : 'taxpayingNo', text : '税务登记号', editor : {
					 * maxLength:30,enforceMaxLength:true } }, { dataIndex :
					 * 'addRateNo', text : '增值税登记号', editor : {
					 * maxLength:30,enforceMaxLength:true } }, { dataIndex :
					 * 'invoiceType', text : '发票类型', xtype : 'bllookupedit',
					 * editor:{allowBlank:true}, displayvalue : Hc.mdmPath +
					 * 'bas_dict/getbasdictcombo.json?dictCode=invoice_type',
					 * displaymember : 'itemName', valuemember : 'itemCode' },
					 *  { dataIndex : 'taxRateNo', text : '默认税率',
					 * editor:{allowBlank:true}, xtype : 'bllookupedit',
					 * displayvalue : Hc.mdmPath + 'bas_tax_rate/list.json',
					 * displaymember : 'taxRateName', valuemember : 'taxRateNo' },
					 *  { dataIndex : 'financeAddress', text : '财务信函地址', editor : {
					 * maxLength:90,enforceMaxLength:true } }, { dataIndex :
					 * 'lastInvoiceDate', text : '最近发票日期',
					 * editor:{allowBlank:true}, xtype: 'datecolumn', format:
					 * 'Y-m-d' }, { dataIndex : 'orderNo', text : '排列序号',
					 * editor: {xtype : 'numberfield'} },
					 */
					{
						dataIndex : 'enableFlag',
						text : '启用状态',
						xtype : 'bllookupedit',
						editor : {
							allowBlank : false
						},
						displayvalue : "0=禁用:1=启用"
					}],
			gridModel : 'Hc_mdm.model.BasSupplier',
			gridPrimaryKey : 'supplierNo',
			gridSubGrid : ['grid1', 'grid2', 'grid3'],
			gridLoadUrl : Hc.mdmPath + 'bas_supplier/list.json',
			gridSaveUrl : Hc.mdmPath
					+ 'bas_supplier/saveMasterCustomerList.json',
			gridExportUrl : Hc.mdmPath + 'bas_supplier/do_export.json',
			gridImportUrl : '',

			// 从表1(采购组织)-->使用品牌
			grid1Columns : [{
						xtype : 'gridcolumn',
						dataIndex : 'brandId',
						text : '使用组织id',
						hidden : true,
						hideable : false
					}, {
						xtype : 'gridcolumn',
						dataIndex : 'supplierNo',
						text : '供应商编号',
						hidden : true,
						hideable : false
					}, {
						dataIndex : 'brandNo',
						text : '品牌编号',
						editor : {
							allowBlank : false
						},
						xtype : 'bllookupedit',
						displayvalue : Hc.mdmPath + 'bas_brand/list.json',
						displaymember : 'brandCname',
						valuemember : 'brandNo'
					}, {
						dataIndex : 'orderNo',
						text : '排列序号',
						editor : {
							xtype : 'numberfield'
						}
					}],
			grid1Model : 'Hc_mdm.model.BasSupplierBrand',
			grid1SupGrid : 'mastergrid',
			grid1PrimaryKey : 'brandId',
			grid1LoadUrl : Hc.mdmPath + 'bas_supplier_brand/list.json',
			grid1SaveUrl : Hc.mdmPath
					+ 'bas_supplier_brand/batchOperate.json',
			grid1ExportUrl : Hc.mdmPath
					+ 'bas_supplier_brand/do_export.json',
			grid1Title : "使用品牌",
			grid1ImportUrl : '',

			// 从表4(联系人)
			grid2Columns : [{
						xtype : 'gridcolumn',
						dataIndex : 'contacterId',
						text : '联系人id',
						hidden : true,
						hideable : false
					}, {
						xtype : 'gridcolumn',
						dataIndex : 'supplierNo',
						text : '供应商编号',
						hidden : true,
						hideable : false
					}, {
						dataIndex : 'contacterCalled',
						text : '联系人称呼',
						xtype : 'bllookupedit',
						editor : {
							allowBlank : true
						},
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=contacter_called',
						displaymember : 'itemName',
						valuemember : 'itemCode'
					},

					{
						dataIndex : 'contacterName',
						text : '联系人姓名',
						editor : {
							maxLength : 20,
							enforceMaxLength : true,
							allowBlank : true
						}
					},

					{
						dataIndex : 'contacterDept',
						text : '联系人部门',
						editor : {
							allowBlank : true,
							maxLength : 30,
							enforceMaxLength : true
						}
						// xtype : 'bllookupedit',
					// displayvalue : Hc.mdmPath
					// +
					// 'bas_dict/getbasdictcombo.json?dictCode=contacter_dept',
					// displaymember : 'itemName',
					// valuemember : 'itemCode'
				}	,

					{
						dataIndex : 'contacterDuty',
						text : '联系人职务',
						editor : {
							allowBlank : true,
							maxLength : 20,
							enforceMaxLength : true
						}
						// xtype : 'bllookupedit',
					// displayvalue : Hc.mdmPath
					// +
					// 'bas_dict/getbasdictcombo.json?dictCode=contacter_duty',
					// displaymember : 'itemName',
					// valuemember : 'itemCode'
				}	,

					{
						dataIndex : 'mobileNo',
						text : '手机号码',
						editor : {
							allowBlank : true,
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'phoneNo',
						text : '电话号码',
						editor : {
							allowBlank : true,
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'faxNo',
						text : '传真号码',
						editor : {
							allowBlank : true,
							maxLength : 20,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'email',
						text : '邮件地址',
						editor : {
							allowBlank : true,
							maxLength : 40,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'orderNo',
						text : '排列序号',
						editor : {
							xtype : 'numberfield',
						}
					}, {
						dataIndex : 'isDefault',
						text : '是否默认联系人',
						editor : {
							allowBlank : true,
							maxLength : 60,
							enforceMaxLength : true
						},
						xtype : "bllookupedit",
						displayvalue : "0=否:1=是"
					}],
			grid2Model : 'Hc_mdm.model.BasSupplierContacter',
			grid2PrimaryKey : 'contacterId',
			grid2SupGrid : 'mastergrid',
			grid2LoadUrl : Hc.mdmPath + 'bas_supplier_contacter/list.json',
			grid2SaveUrl : Hc.mdmPath
					+ 'bas_supplier_contacter/batchOperate.json',
			grid2ExportUrl : Hc.mdmPath
					+ 'bas_supplier_contacter/do_export.json',
			grid2Title : "联系人",
			grid2ImportUrl : '',
			// 从表3
			grid3Columns : [{
						dataIndex : 'lineId',
						text : '行id',
						hidden : true,
						hideable : false
					}, {
						dataIndex : 'orderNo',
						text : '排列序号'
						// editor: {xtype : 'numberfield'}
				}	,

					/*{
						dataIndex : 'supplierNo',
						text : '供应商编号'
					},*/ {
						dataIndex : 'categoryNo',
						text : '类别',
						editor : {
							allowBlank : false
						},
						xtype : 'bllookupedit',
						displayvalue : Hc.mdmPath + 'bas_supply_category/list.json',
						displaymember : 'categoryName',
						valuemember : 'categoryNo',
						reference : 'categoryNo'
					}, {
						 dataIndex : 'purchaseType',
	                	 text : '采购类型',
	                	 xtype:'bllookupedit',
	                	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=purchase_type',
	                	 displaymember:'itemName',
	                	 valuemember:'itemCode'
					}, {
						dataIndex : 'enableFlag',
						text : '启用状态',
						renderer : 'renderUseFlag',
						editor : {
							allowBlank : false,
							xtype : 'combouseflag',
							maxLength : 30,
							enforceMaxLength : true
						}
					}, {
						dataIndex : 'creator',
						text : '建档人'

					}, {
						dataIndex : 'createTime',
						text : '建档时间'

					}, {
						dataIndex : 'modifier',
						text : '修改人'

					}, {
						dataIndex : 'modifyTime',
						text : '修改时间'

					}/*
						 * ,{ dataIndex: 'remarks', text: '备注', editor:
						 * {maxLength:60,enforceMaxLength:true} },
						 */],

			grid3Model : 'Hc_mdm.model.BasSupplierSupplyCategory',
			grid3SupGrid : 'mastergrid',
			grid3PrimaryKey : 'lineId',
			grid3LoadUrl : Hc.mdmPath
					+ 'bas_supplier_supply_category/listvo.json',
			grid3SaveUrl : Hc.mdmPath
					+ 'bas_supplier_supply_category/batchOperate.json',
			grid3ExportUrl : Hc.mdmPath
					+ 'bas_supplier_supply_category/do_export.json',
			grid3Title : "供货类别",
			grid3ImportUrl : ''
		});

		// 统一处理自定义布局
		var editBaseInfo = {
			xtype : 'container',
			title : '基本信息',
			layout : {
				type : 'table',
				columns : 4
			},
			defaults : {
				labelAlign : 'right',
				labelWidth : 80,
				width : '100%'
			},
			items : [{
						dataIndex: 'supplierNo',
						xtype : 'textfield',
						reference : 'editpanelsupplierno',
						fieldLabel : '供应商编号',
						labelAlign : 'right',
						allowBlank : false,
						maxLength : 6,
						enforceMaxLength : true,
						// editor : {
						// allowBlank : false,maxLength:6,enforceMaxLength:true
						// },
						bind : {
							value : '{gridRow.supplierNo}'
						},
						canInput: false
					}, {
						xtype : 'textfield',
						fieldLabel : '供应商名称',
						labelAlign : 'right',
						allowBlank : false,
						bind : {
							value : '{gridRow.supplierName}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '简称',
						labelAlign : 'right',
						allowBlank : false,
						bind : {
							value : '{gridRow.supplierSname}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '供应商类型',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=supplier_type',
						displaymember : 'itemName',
						valuemember : 'itemCode',
						bind : {
							value : '{gridRow.supplierType}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '供应商状态',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=supplier_status',
						displaymember : 'itemName',
						valuemember : 'itemCode',
						bind : {
							value : '{gridRow.supplierStatus}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '国家',
						labelAlign : 'right',
						allowBlank : true,
						editor : {
							allowBlank : false
						},
						displayvalue : Hc.mdmPath + 'bas_country/list.json',
						// store:countryStore,
						displaymember : 'countryName',
						valuemember : 'countryNo',

						bind : {
							value : '{gridRow.countryNo}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '地区',
						labelAlign : 'right',
						allowBlank : true,
						displayvalue : Hc.mdmPath + 'bas_region/list.json',
						displaymember : 'regionName',
						valuemember : 'regionNo',
						bind : {
							value : '{gridRow.provinceNo}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '厂商类别',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : Hc.mdmPath
								+ 'bas_dict/getbasdictcombo.json?dictCode=factory_type',
						displaymember : 'itemName',
						valuemember : 'itemCode',
						bind : {
							value : '{gridRow.factoryType}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '邮政编码',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.postcodeNo}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '电话号码',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.phoneNo}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '传真号码',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.faxNo}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '手机号码',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.mobileNo}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '邮件地址',
						labelAlign : 'right',
						allowBlank : true,
						editor: {
						//regex:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
						regex:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
						regexText:'邮箱格式不正确'
							},
						bind : {
							value : '{gridRow.email}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '公司网址',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.website}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '供应商地址',
						labelAlign : 'right',
						allowBlank : false,
						// colspan : 2,
						bind : {
							value : '{gridRow.supplierAddress}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '是否限定品牌',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : "0=否:1=是",
						bind : {
							value : '{gridRow.fixInDivision}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '启用状态',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : "0=禁用:1=启用",
						bind : {
							value : '{gridRow.enableFlag}'
						}
					}, {
						dataIndex: 'creator',
						xtype : 'textfield',
						fieldLabel : '创建人',
						labelAlign : 'right',
						readOnly : true,
						bind : {
							value : '{gridRow.creator}'
						}
					}, {
						dataIndex: 'createTime',
						xtype : 'textfield',
						fieldLabel : '创建时间',
						labelAlign : 'right',
						readOnly : true,
						// format: 'Y-m-d H:m:s',
						bind : {
							value : '{gridRow.createTime}'
						}
					}, {
						dataIndex: 'modifier',
						xtype : 'textfield',
						fieldLabel : '修改人',
						labelAlign : 'right',
						readOnly : true,
						bind : {
							value : '{gridRow.modifier}'
						}
					}, {
						dataIndex: 'modifyTime',
						xtype : 'textfield',
						fieldLabel : '修改时间',
						labelAlign : 'right',
						readOnly : true,
						// format: 'Y-m-d H:m:s',
						bind : {
							value : '{gridRow.modifyTime}'
						}
					}]
		};

		var editFinanceInfo = {
			title : '财务信息',
			xtype : 'container',
			layout : {
				type : 'table',
				columns : 4
			},
			defaults : {
				labelAlign : 'right',
				labelWidth : 80,
				width : '100%'
			},
			items : [{
						xtype : 'extcombox',
						fieldLabel : '订单币种',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : Hc.mdmPath + 'bas_currency/list.json?enableFlag=1',
						displaymember : 'currencyName',
						valuemember : 'currencyNo',
						bind : {
							value : '{gridRow.currencyNo}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '税务登记号',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.taxpayingNo}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '付款条件',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : Hc.mdmPath
								+ 'bas_payment_clause/list.json?paymentClauseType=1&&enableFlag=1',
						displaymember : 'paymentClauseName',
						valuemember : 'paymentClauseNo',
						bind : {
							value : '{gridRow.paymentClauseNo}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '增值税登记号',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.addRateNo}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '付款方式',
						labelAlign : 'right',
						allowBlank : false,
						displayvalue : Hc.mdmPath
								+ 'bas_payment_method/list.json?enableFlag=1',
						displaymember : 'paymentMethodName',
						valuemember : 'paymentMethodNo',
						bind : {
							value : '{gridRow.paymentMethodNo}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '发票类型',
						labelAlign : 'right',
						allowBlank : true,
						displayvalue : Hc.mdmPath
						+ 'bas_dict/getbasdictcombo.json?dictCode=invoice_type&enableFlag=1',
						displaymember : 'itemName',
						valuemember : 'itemCode',
						bind : {
							value : '{gridRow.invoiceType}'
						}
					}, {
						xtype : 'extcombox',
						fieldLabel : '默认税率',
						labelAlign : 'right',
						allowBlank : true,
						displayvalue : Hc.mdmPath + 'bas_tax_rate/list.json?enableFlag=1',
						displaymember : 'taxRateName',
						valuemember : 'taxRateNo',
						bind : {
							value : '{gridRow.taxRateNo}'
						}
					},

					/*{
						xtype : 'textfield',
						fieldLabel : '职员邮件地址',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.employeeEmail}'
						}
					},*/ {
						xtype : 'datefield',
						fieldLabel : '最近发票日期',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.lastInvoiceDate}'
						}
					}, {
						xtype : 'textfield',
						fieldLabel : '财务信函地址',
						labelAlign : 'right',
						allowBlank : true,
						bind : {
							value : '{gridRow.financeAddress}'
						}
					}]
		};
		editBaseInfo.padding = 3;
		editFinanceInfo.padding = 3;
		// 自定义基类布局，增加主表的基本和财务信息编辑布局
		var alltabpanel = {
			xtype : "tabpanel",
			reference : 'tabpanel',
			region : 'south',
			height : 220,
			layout : {
				type : 'table',
				columns : 4
				// align:'center'
			},
			split : true,
			autoDestroy : true,
			tabPosition : 'top',
			border : false,
			// defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
			items : [editBaseInfo, editFinanceInfo, me.grid1, me.grid2,
					me.grid3]
		};

		me.items = [me.toolbar];
		if (me.searchItems.length > 0) {
			me.items.push(me.searchPanel);
		}
		me.items.push(me.grid);
		me.items.push(alltabpanel);
		me.items = me.items.concat(me.otherItems);

		me.callParent();
		// console.dir(me.gridItems);
	}
});
/**
 * Description: 供应商信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-03-23 15:10:51
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplier.BasSupplierController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.bassupplier',
    
    init: function(){
    	var me=this;
    	me.callParent();
    	me.setComponentReadOnly('tabpanel',true);
    },
    
    /**
     * 设置控件是否只读
     * @param {} list
     * @param {} isReadOnly
     */
    setComponentReadOnly: function(components,isReadOnly){
    	var me=this,
    	list = me.lookupReference(components).query('textfield,numberfield,datefield,combo');
    	Ext.each(list,function(component){
    		if(component.dataIndex!='creator' && component.dataIndex!='createTime' 
    			&& component.dataIndex!='modifier' && component.dataIndex!='modifyTime'
    			&& component.dataIndex!='supplierNo'){
    			component.setReadOnly(isReadOnly);
    		}
    	});
    },
    /*选择变化之后*/
    onGridSelectionChange: function (sender, e, index, eOpts) {
    	var me =this;
    	me.callParent(arguments);
        if (me.lookupReference('mastergrid').getSelection()&&me.lookupReference('mastergrid').getSelection().length>0)
        {
			me.setComponentReadOnly('tabpanel',false);
        }
        else
        {
			me.setComponentReadOnly('tabpanel',true);
        }
    },
    //查询前，删除从表记录
    onBtnSearchClick: function (btn) {
        var me = this;
        me.callParent(arguments);
    },
    
    gridSelectionChange: function (sender,e) {
		var me = this;
		 me.callParent(arguments);
		 var editPanelSupplierNo = me.lookupReference('editpanelsupplierno');
		 if (editPanelSupplierNo){
			 var selection = sender.selectionStart;
			 if(selection){
			 if (!selection.phantom){
				 editPanelSupplierNo.setReadOnly(true);
			 }else{
				 editPanelSupplierNo.setReadOnly(false);
			 }
		 }
		 }
    },
    checkKeyValue:function(e){
		var me = this;
		 me.callParent(arguments);
		 if(e.field == 'isDefault') {
				var record = e.record;
				var isDefault = record.get('isDefault');
				var _supplierNo = record.get('supplierNo');
				var contacterId = record.get('contacterId');
				if (isDefault==1){
	            	Ext.Ajax.request({            
	   		     		url: Hc.mdmPath+'bas_supplier/checkIsDefault.json',
	   		     	    async:false,
	   		     		params: {       
	   		     			supplierNo:_supplierNo
	   		     		},    
	   		     		success: function(response, options) {    
	   		     			var result=response.responseText;
	   		     			if (result!="0"){
	   		     				//Hc.alert(result);
	   		     				//record.set('isDefault')
	   		     			}
	   		     		}
	            	});
				}
	    	}
		 if(e.field=='categoryNo'){
			 //var me = this,
			 var grid = me.workObject,
			 store = grid.store,
			 datas = store.getData();	    	

			 var record = e.record;
			 var categoryNo = record.get('categoryNo');
			 var sameCount=0;
			 for(var i=0;i<(datas.length);i++){
				 if(categoryNo==datas.items[i].get('categoryNo')){
					 sameCount++;	
				 }
			 }
			 if(sameCount>=2){
				 Ext.Msg.alert("错误","类别不能重复");
				 record.set('categoryNo','');
				 return;
			 }
		 }


		 if(e.field=='brandNo'){
			 //var me = this,
			 var grid = me.workObject,
			 store = grid.store,
			 datas = store.getData();	    	

			 var record = e.record;
			 var brandNo = record.get('brandNo');
			 var sameCount=0;
			 for(var i=0;i<(datas.length);i++){
				 if(brandNo==datas.items[i].get('brandNo')){
					 sameCount++;	
				 }
			 }
			 if(sameCount>=2){
				 Ext.Msg.alert("错误","品牌编号不能重复");
				 record.set('brandNo','');
				 return;
			 }
		 }
		 
		
		 if(e.field=='contacterName'){
			 //var me = this,
			 var grid = me.workObject,
			 store = grid.store,
			 datas = store.getData();	    	

			 var record = e.record;
			 var orderNo = record.get('orderNo');
			 var sameCount=0;
			 for(var i=0;i<(datas.length);i++){
				 if(orderNo==datas.items[i].get('orderNo')){
					 sameCount++;	
				 }
			 }
			 if(sameCount>=2){
				 Ext.Msg.alert("错误","排列序号不能重复");
				 record.set('brandNo','');
				 return;
			 }
		 }
    },
    /*initAddData: function(newObj){
    	var me = this;
        if (me.workObject.hasOrderNo) {
            var ds = me.workObject.store,
                orderNo = (ds.max('orderNo') || 0) + 1;
            newObj.set('orderNo', orderNo);
        }
        me.callParent(arguments);
        return true;
    }*/
    /* 新增数据时，初始化数据对象*/
/*    initAddData: function (newObj) {
    	 var me = this,
         grid = me.workObject,
         store = grid.store,
         datas = store.getData();
    	 me.callParent(arguments);
   	   	 
    	 if(grid.reference=='grid2'){	 
    	 var maxOrderNo=0;
    	 for(var i=0;i<datas.length;i++){
    		 var orderNo = datas.items[i].get('orderNo');    		    		 
    		 if (orderNo>=maxOrderNo){
    			 maxOrderNo=orderNo;
    		 }
    	 }    	 
    	 newObj.set('orderNo',maxOrderNo+1);
    	 }
    	
    	var me = this;
    	var grid = me.workObject,
    	store = grid.store,
    	griddatas = store.getData();
    	me.callParent(arguments);
    	if(grid.reference=='grid2'){

    		var gridMaxOrderNo=0;//界面最大序列号
    		for(var i=0;i<griddatas.length;i++){
    			var orderNo = griddatas.items[i].get('orderNo');    		    		 
    			if (orderNo>=gridMaxOrderNo){
    				gridMaxOrderNo=orderNo;
    			}
    		}    	 

    	/*	var datas=newObj.getData();
    		var supplierNo=datas.supplierNo;
    		var url =Hc.mdmPath + 'bas_supplier/getvo.json?selectVoName=SelectOneModelByVoBasMaxOrderNo&mapperClassType=BasSupplierMapper';
    		url+='&supplierNo='+supplierNo;
    		this.callServer({
    			url:url,    			
    			success:function(response){
    				var ob = Ext.decode(response.responseText);
    				console.dir("返回值1111"+ob);
    				if(ob.entity !=null){
    					var maxOrderNo=parseInt(ob.entity.orderNo);//后台最大序列号
    					if(maxOrderNo<=gridMaxOrderNo){
    						maxOrderNo=gridMaxOrderNo
    					}
    					var nowOrderNo=maxOrderNo+1;
    					newObj.set('orderNo',nowOrderNo);
    				}else{

    					record.set('materialNo', 0);
    				}
    			}  		 			
    		});
    	}
    }*/
 
    //网格列编辑后
    onGrid3AfterEdit: function (editor, e) {
		var me = this;
        if (e.field == 'categoryNo') {
            var oldCategoryNo = e.originalValue;
            var newCategoryNo = e.value;
            if (oldCategoryNo != newCategoryNo) {
                var record = e.record;
                Ext.Ajax.request({
                    url: Hc.mdmPath + 'bas_supply_category/list.json',
                    params: {             
                    	categoryNo : e.value
                    },
                    method: 'GET',
                    success: function (response) {
                        var result = JSON.parse(response.responseText);
                        if (result.result.resultCode == "0" && result.list.length > 0) {
                            for(var i = 0 ; i < result.list.length ;i++){
		                        var vRec = result.list[0];
		                        record.set('purchaseType', vRec.purchaseType);
		                    }
                        } else {
                            record.set('materialNo', oldMaterialNo);
                            Ext.MessageBox.alert('提示', '没有找到物料编号为【' + newMaterialNo + '】的信息');
                        }
                    },
                    failure: function (response, opts) {
                        Ext.MessageBox.show({
                            title: '错误提示',
                            msg: response.responseText,
                            height: 300,
                            width: 400
                        });
                    }
                });
            }
        } 
        
        
        this.checkKeyValue(e);
        
        
    }
  });
/**
 * Description: 供应商信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-23 15:10:51
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bassupplier.BasSupplierModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.bassupplier'
  });
/**
 * Description: 供应商使用品牌(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-31 14:31:22
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplierbrand.BasSupplierBrand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassupplierbrand',
	
	controller: 'bassupplierbrand',
	viewModel: {
		type: 'bassupplierbrand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'brandId', text: '使用组织id', editor: {allowBlank: false}},
				{dataIndex: 'supplierNo', text: '供应商编号', editor: {allowBlank: false}},
				{dataIndex: 'brandNo', text: '品牌编号', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_supplier_brand/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 供应商使用品牌Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-31 14:31:22
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplierbrand.BasSupplierBrandController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bassupplierbrand'
  });
/**
 * Description: 供应商使用品牌Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-03-31 14:31:22
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bassupplierbrand.BasSupplierBrandModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bassupplierbrand'
  });
/**
 * Description: 供应商联系人信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliercontacter.BasSupplierContacter', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassuppliercontacter',
	
	controller: 'bassuppliercontacter',
	viewModel: {
		type: 'bassuppliercontacter'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: [{
				xtype: 'combo',
				width:'250',
				editable:false,
				triggerAction: 'all',
				fieldLabel: '所属项目编码',
				name: 'projectCode',
				displayField: 'projectName',
				valueField: 'projectCode',
				store: {
					type: 'itgproject',
					autoLoad: true
				}
			}]
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'contacterId', text: '联系人id', editor: {allowBlank: false}},
				{dataIndex: 'supplierNo', text: '供应商编号', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false}},
				{dataIndex: 'contacterCalled', text: '联系人称呼(取数据字典 contacter_called)', editor: {allowBlank: false}},
				{dataIndex: 'contacterName', text: '联系人姓名', editor: {allowBlank: false}},
				{dataIndex: 'contacterDept', text: '联系人部门(取数据字典 contacter_dept)', editor: {allowBlank: false}},
				{dataIndex: 'contacterDuty', text: '联系人职务(取数据字典 contacter_duty)', editor: {allowBlank: false}},
				{dataIndex: 'mobileNo', text: '手机号码', editor: {allowBlank: false}},
				{dataIndex: 'phoneNo', text: '电话号码', editor: {allowBlank: false}},
				{dataIndex: 'faxNo', text: '传真号码', editor: {allowBlank: false}},
				{dataIndex: 'email', text: '邮件地址', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_supplier_contacter/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 供应商联系人信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliercontacter.BasSupplierContacterController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bassuppliercontacter',
    
    init: function (){
		var me = this;
		 me.callParent(arguments);
    },
    checkKeyValue:function(e){
		var me = this;
		 me.callParent(arguments);
		 var a=e;
		 var b=0;
    },
    onGridAfterEdit:function(editor, obj)
    {
		var me = this;
		 me.callParent(arguments);
    	if(obj.field == 'isDefault') {
			var record = obj.record;
			var isDefault = record.get('isDefault');
			var supplierNo = record.get('supplierNo');
			var contacterId = record.get('contacterId');
			if (isDefault==1){
            	Ext.Ajax.request({            
   		     		url: Hc.mdmPath+'bas_supplier_contacter/checkIsDefault.json',
   		     	    async:false,
   		     		params: {       
   		     			supplierNo:category_no
   		     		},    
   		     		success: function(response, options) {    
   		     			var result=response.responseText;
   		     			if (result!="0"){
   		     				Hc.alert(result);
   		     				//record.set('isDefault')
   		     			}
   		     		}
            	});
			}
    	}
    }
  });
/**
 * Description: 供应商联系人信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-24 08:31:32
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bassuppliercontacter.BasSupplierContacterModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bassuppliercontacter'
  });
/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliersupplycategory.BasSupplierSupplyCategory', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassuppliersupplycategory',
	
	controller: 'bassuppliersupplycategory',
	viewModel: {
		type: 'bassuppliersupplycategory'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id', editor: {allowBlank: false}},
				{dataIndex: 'supplierNo', text: '供应商编号', editor: {allowBlank: false}},
				{dataIndex: 'categoryNo', text: '类别编号', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false}},
				{dataIndex: 'enableFlag', text: '启用状态', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bas_supplier_supply_category/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassuppliersupplycategory.BasSupplierSupplyCategoryController', {
    extend: 'Hc_mdm.view.BaseSimplePageController',
    alias: 'controller.bassuppliersupplycategory'
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-16 10:37:40
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bassuppliersupplycategory.BasSupplierSupplyCategoryModel', {
    extend: 'Hc_mdm.view.BaseSimplePageModel',
    alias: 'viewmodel.bassuppliersupplycategory',
  });
/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-15 18:24:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplycategory.BasSupplyCategory', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bassupplycategory',
	
	controller: 'bassupplycategory',
	viewModel: {
		type: 'bassupplycategory'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
			        	{
			        		xtype: 'textfield',
			        		fieldLabel: '类别编号',
			        		name: 'categoryNo'
			        	}, {
			        		xtype: 'textfield',
			        		fieldLabel: '类别名称',
			        		name: 'categoryName'
			        	},{
			        		/*fieldLabel : '采购类型',
			        		name : 'purchaseType',
			        		xtype:'extcombox',
			        		displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
			        		displaymember:'purchaseType',
			        		valuemember:'categoryNo',*/
			        		
			        		name : 'purchaseType',
							xtype : 'extcombox',
							fieldLabel : '采购类型',
							displayvalue : Hc.mdmPath
									+ 'bas_dict/getbasdictcombo.json?dictCode=purchase_type',
							displaymember : 'itemName',
							valuemember : 'itemCode'
			        	}
			        ],
	
		gridModel: 'Hc_mdm.model.BasSupplyCategory',
		gridColumns: [
		              {dataIndex: 'categoryNo', text: '类别编号', editor: {allowBlank: false,maxLength:10,enforceMaxLength:true}},
		              {dataIndex: 'categoryName', text: '类别名称', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
		              {
		              	 /*dataIndex: 'purchaseType', 
		              	 text: '采购类型', 
		              	 editor: {allowBlank: false}*/
		              	 dataIndex : 'purchaseType',
	                	 text : '采购类型',
	                	 editor: 
	                	 {
	                		 allowBlank: false,maxLength:10,enforceMaxLength:true
	                	 },
	                	 xtype:'bllookupedit',
	                	 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=purchase_type',
	                	 displaymember:'itemName',
	                	 valuemember:'itemCode'
		              },
		              {dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}},
		              {
		              	 dataIndex : 'enableFlag',
						 text : '启用状态',
						 xtype : 'bllookupedit',
						 editor : {
							 allowBlank : false
						 },
						 displayvalue : "0=禁用:1=启用"}
		             ],
			gridPrimaryKey: 'categoryNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath+'bas_supply_category/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_supply_category/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_supply_category/do_export.json',
			gridImportUrl: Hc.mdmPath+'',

			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-15 18:24:21
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bassupplycategory.BasSupplyCategoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bassupplycategory',
    
    // 网格列编辑后
	onGridAfterEdit : function(editor, e) {
	    var me = this;
	    store = me.lookupReference('mastergrid').store;
	    if (e.field == 'categoryName' && e.value != ''
	            && e.value != null) {
	        for (var i = 0; i < store.totalCount; i++) {
	            if (e.rowIdx == i)
	                continue;
	            var model = store.getAt(i);
	            if (model.get('categoryName') == e.value) {
	                Hc.alert("类别名称不能重复");
	                e.record.set('categoryName', '');
	                return;
	            }
	        }
	    }
	}
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-15 18:24:21
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bassupplycategory.BasSupplyCategoryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bassupplycategory',
    
  });
/**
 * Description: 税种信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:51:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bastaxcategory.BasTaxCategory', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.bastaxcategory',
	
	controller : 'bastaxcategory',
	viewModel : {
		type : 'bastaxcategory'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			
			searchItems : [ {
				xtype: 'textfield',
				fieldLabel: '税种编号',
				name: 'taxCategoryNo'
			} ,{
				xtype: 'textfield',
				fieldLabel: '税种名称',
				name: 'taxCategoryName'
			},{
   			 fieldLabel : '币别',
			 name : 'currencyNo',
    			 xtype:'extcombox',
    		 displayvalue:Hc.mdmPath+'bas_currency/list.json?enableFlag=1',
			 displaymember:'currencyName',
			 valuemember:'currencyNo'
		 }
			],

			gridModel : 'Hc_mdm.model.BasTaxCategory',
			
			gridColumns : [ {
				dataIndex : 'taxCategoryNo',
				text : '税种编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxCategoryName',
				text : '税种名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
				
			}, {
				dataIndex : 'currencyNo',
				text : '币别',
				editor : {
					allowBlank : false
				},
				xtype:'bllookupedit',
				displayvalue:Hc.mdmPath+'bas_currency/list.json?enableFlag=1',
				displaymember:'currencyName',
				valuemember:'currencyNo'
			}, {
				dataIndex : 'orderNo',
				text : '排列序号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'enableFlag',
				text : '启用状态',
				editor : {
					allowBlank:false,
					xtype : 'comboyesno'
				},
				renderer : 'renderYesNo'
			}],
			
			gridPrimaryKey : 'taxCategoryNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_tax_category/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_tax_category/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_tax_category/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 税种信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:51:58
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bastaxcategory.BasTaxCategoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bastaxcategory'
  });
/**
 * Description: 税种信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:51:58
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bastaxcategory.BasTaxCategoryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bastaxcategory'
  });
/**
 * Description: 税率信息表(default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: zhuyuanh
 * @date: 2015-03-13 14:52:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bastaxrate.BasTaxRate', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.bastaxrate',
	
	controller : 'bastaxrate',
	viewModel : {
		type : 'bastaxrate'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {

			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '税率编号',
				name : 'taxRateNo'
			} ,{
				xtype : 'textfield',
				fieldLabel : '税率名称',
				name : 'taxRateName'
			}],

			gridModel : 'Hc_mdm.model.BasTaxRate',

			gridColumns : [ {
				dataIndex : 'taxRateNo',
				text : '税率编号',
				editor : {
					allowBlank : false,
					regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入10位字母或数字',
					maxLength : 10,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxRateName',
				text : '税率名称',
				editor : {
					allowBlank : false,
					maxLength : 20,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'taxRate',
				text : '税率(%)',
				editor : {
					allowBlank : false
				}
			}, {
				dataIndex : 'taxCategoryNo',
				text : '税种',
				editor : {
					allowBlank : false
				},
				xtype:'bllookupedit',
				displayvalue:Hc.mdmPath+'bas_tax_category/list.json?enableFlag=1',
				displaymember:'taxCategoryName',
				valuemember:'taxCategoryNo'
			}, {
				dataIndex : 'isAddedTax',
				text : '是否增值税',
				editor : {
					allowBlank:false,
					xtype : 'comboyesno'
				},
				renderer : 'renderYesNo'
			}, {
				dataIndex : 'orderNo',
				text : '排列序号',
				editor : {
					allowBlank : true
				}
			}, {
				dataIndex : 'enableFlag',
				text : '启用状态',
				editor : {
					allowBlank:false,
					xtype : 'comboyesno'
				},
				renderer : 'renderYesNo'
			}],

			gridPrimaryKey : 'taxRateNo',
			gridUnionKey : '',

			gridLoadUrl : Hc.mdmPath+'bas_tax_rate/list.json',
			gridSaveUrl : Hc.mdmPath+'bas_tax_rate/batchOperate.json',
			gridExportUrl : Hc.mdmPath+'bas_tax_rate/do_export.json',
			gridImportUrl : Hc.mdmPath+'',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});

/**
 * Description: 税率信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:52:53
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.bastaxrate.BasTaxRateController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bastaxrate'
  });
/**
 * Description: 税率信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-03-13 14:52:53
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.bastaxrate.BasTaxRateModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bastaxrate'
  });
/**
 * Description: 计量单位信息表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-14 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basunit.BasUnit', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.basunit',
	
	controller: 'basunit',
	viewModel: {
		type: 'basunit'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {

			searchItems: [{
				xtype: 'textfield',
				fieldLabel: '单位编号',
				name: 'unitNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '单位名称',
				name: 'unitName'
			},{
				xtype: 'bldatetime',
				fieldLabel: '建档时间',
				name: 'createFromTime'
				//vtype:'compareTo',     //数据验证方式，compareTo
				//compareTo:'createToTime', // 被比较的输入框控件name
				//compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
				//compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
			},{
				xtype: 'bldatetime',
				fieldLabel: '   到     ',
				name: 'createToTime',
				vtype:'compareTo',     //数据验证方式，compareTo
				compareTo:'createFromTime', // 被比较的输入框控件name
				compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
				compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
			}
			],

			gridModel: 'Hc_mdm.model.BasUnit',
			gridColumns: [
							{dataIndex: 'unitNo', text: '单位编号', editor: {allowBlank: false,maxLength : 10,enforceMaxLength : true}},
							{dataIndex: 'unitName', text: '单位名称', editor: {allowBlank: false,maxLength : 20,enforceMaxLength : true}},
							{dataIndex: 'specification', text: '规格', editor: {allowBlank: false,maxLength : 20,enforceMaxLength : true}},
							{dataIndex: 'decimalDigits', text: '小数位数', editor: {allowBlank: false}},
							{dataIndex: 'flagMaterial', text: '物料单位标志', editor: {allowBlank: true}, xtype : 'gridcomboyesno'},
							{dataIndex: 'flagPurchase', text: '采购单位标志', editor: {allowBlank: true},xtype : 'gridcomboyesno'},
							{dataIndex: 'flagBom', text: 'BOM单位标志',editor: {allowBlank: true},xtype : 'gridcomboyesno'},
							{dataIndex: 'flagDeliver', text: '发运单位标志',editor: {allowBlank: true}, xtype : 'gridcomboyesno'},
							{dataIndex: 'flagQuality', text: '质检单位标志', editor: {allowBlank: true},xtype : 'gridcomboyesno'},
							{dataIndex: 'enableFlag', text: '启用状态',editor: {allowBlank: false},xtype:"gridcombouseflag"},
							{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true}}
						],
			gridPrimaryKey: 'unitNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.mdmPath+'bas_unit/list.json',
			gridSaveUrl:  Hc.mdmPath+'bas_unit/batchOperate.json',
			gridExportUrl:Hc.mdmPath+'bas_unit/do_export.json',
			gridImportUrl: Hc.mdmPath+'',

			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});

		me.callParent();
	}
});

/**
 * Description: 计量单位信息表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-14 15:51:46
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basunit.BasUnitController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basunit'
  });
/**
 * Description: 计量单位信息表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-03-14 15:51:46
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basunit.BasUnitModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basunit',
  });
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
/**
 * Description: 计量单位转换表(通用)Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:59
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basunitswitch.BasUnitSwitchController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basunitswitch'
  });
/**
 * Description: 计量单位转换表(通用)Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-20 08:48:59
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basunitswitch.BasUnitSwitchModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basunitswitch'
  });
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
/**
 * Description: 工作中心(车间)信息表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:24
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.basworkshop.BasWorkshopController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.basworkshop'
  });
/**
 * Description: 工作中心(车间)信息表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-23 16:15:24
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.basworkshop.BasWorkshopModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.basworkshop'
  });
/**
 * Description: bill_bom/bill_bom_list/bill_bom_list_size(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbom.BillBom', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billbom',
	
	controller: 'billbom',
	viewModel: {
		type: 'billbom'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
							{xtype : 'extcombox',fieldLabel : '维护类型',name : 'maintainType',displayvalue : "1=修改:2=用途转换:3=状态变更:4=品牌转换"},
							{xtype : 'extcombox',fieldLabel : '原品牌',name : 'oldBrandNo',displayvalue:Hc.mdmPath+'bas_brand/listAll.json',displaymember:'brandCname',valuemember:'brandNo'},
							{xtype : 'textfield',fieldLabel : '物料编码',name : 'materialCode'},
							{xtype : 'extcombox',fieldLabel : '原BOM用途',name : 'oldBomPurpose',displayvalue : "S2=开发:STD=标准"}
						],
			gridColumns: [
				{dataIndex: 'billNo', text: '单据编号'},
				{dataIndex: 'maintainType', text: '维护类型',xtype : "bllookupedit",displayvalue : "1=修改:2=用途转换:3=状态变更:4=品牌转换"},
				{dataIndex: 'materialNo', text: '物料编号'},
				{dataIndex: 'oldBomPurpose', text: '原BOM用途',xtype : "bllookupedit",displayvalue : "S2=开发:STD=标准"},
				{dataIndex: 'newBomPurpose', text: '新BOM用途',xtype : "bllookupedit",displayvalue : "STD=标准:SUB=委外:SPD=预测"},
				{
					dataIndex: 'oldBrandNo', 
					text: '原品牌',
					xtype:"bllookupedit",
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo'
				},
				{
					dataIndex: 'newBrandNo', 
					text: '新品牌',
					xtype:"bllookupedit",
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo'
				},
				{dataIndex: 'bomType', text: 'BOM分类',xtype : "bllookupedit",displayvalue : "1=标准BOM:2=配置BOM"},
				{dataIndex: 'versionNo', text: '版本序号'},
				{dataIndex: 'bomStatus', text: 'BOM状态',xtype : "bllookupedit",displayvalue : "0=编辑:1=审核:2=生效"},
				{dataIndex: 'operator', text: '操作人'},
				{dataIndex: 'creator', text: '建档人'},
				{dataIndex: 'createTime', text: '建档时间',width:140},
				{dataIndex: 'auditor', text: '审核人'},
				{dataIndex: 'auditTime', text: '审核时间',width:140},
				{dataIndex: 'billStatus', text: '单据状态',xtype : "bllookupedit",displayvalue : "0=编辑:1=审核"},
				{dataIndex: 'remarks', text: '备注'}
			],
			gridModel: 'Hc_mdm.model.BillBom',
			gridLoadUrl: Hc.mdmPath + 'bill_bom/list.json',
			dtlName:'billbomlist',
		   	gridHasMark:false,
		   	gridHasCreator:false,
		   	gridHasModifier:false,
		   	gridHasAuditor:false,
			showModel:'selftab'
		});
		me.callParent();
	}
});

/**
 * Description: bill_bom/bill_bom_list/bill_bom_list_sizeController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbom.BillBomController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.billbom'
  });
/**
 * Description: bill_bom/bill_bom_list/bill_bom_list_sizeModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     lucheng.
 * @author:     Administrator
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billbom.BillBomModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.billbom'
  });
/**
 * Description: BOM单据物料清单表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbomlist.BillBomList', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.billbomlist',
	
	controller: 'billbomlist',
	viewModel: {
		type: 'billbomlist'
	},

	customLayout2: true,
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			billItems: [
					
					{xtype : 'extcombox',fieldLabel : '维护类型',name : 'maintainType',reference:"maintainType",displayvalue : "1=修改:2=用途转换:3=状态变更:4=品牌转换",bind:{value:'{billRow.maintainType}'}},
					{
						 xtype:'searchhelpfield',
						 fieldLabel : '物料编号',
						 name:'materialNo',
						 reference: 'materialNo',
						 gridColumns:[{
							  dataIndex:'materialNo',
							  text:'物料编号',
							  flex:0.3
						},{
							  dataIndex:'materialCode',
							  text:'物料编码',
							  flex:0.3
						},{
							  dataIndex:'materialName',
							  text:'物料名称',
							  flex:0.3
						},{
							  dataIndex:'sizeTypeNo',
							  text:'码组',
							  flex:0.3
						}],
						bind:{value:'{billRow.materialNo}'},
						searchItems:[
										{
											fieldLabel : '物料编码',
										    name:'materialCode',
										    flex:0.5
										 }
						             ],
						isAutoLoad:false,
						otherFields:"materialCode,materialName,sizeTypeNo",
						url:Hc.mdmPath + 'bas_material/list.json'
					},
					{xtype : 'textfield',fieldLabel : '物料编码',name : 'materialCode',reference:"materialCode",bind:{value:'{billRow.materialCode}'}},
					{xtype : 'textfield',fieldLabel : '物料名称',name : 'materialName',reference:"materialName",bind:{value:'{billRow.materialName}'}},
					{xtype : 'textfield',fieldLabel : '码组',reference: 'sizeTypeNo',name : 'sizeTypeNo',editable:false,bind:{value:'{billRow.sizeTypeNo}'}},
					{xtype : 'extcombox',fieldLabel : '原BOM用途',name : 'oldBomPurpose',reference:"oldBomPurpose",displayvalue : "S2=开发:STD=标准",bind:{value:'{billRow.oldBomPurpose}'}},
					{xtype : 'extcombox',fieldLabel : '新BOM用途',name : 'newBomPurpose',reference:"newBomPurpose",displayvalue : "STD=标准:SUB=委外:SPD=预测",bind:{value:'{billRow.newBomPurpose}'}},
					{
						xtype : 'extcombox',
						fieldLabel : '原品牌',
						name:"oldBrandNo",
						displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
						displaymember:'brandCname',
						valuemember:'brandNo',
						reference: 'oldBrandNo',
						bind:{value:'{billRow.oldBrandNo}'}
					},
					{
						xtype : 'extcombox',
						fieldLabel : '新品牌',
						name:"newBrandNo",
						displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
						displaymember:'brandCname',
						valuemember:'brandNo',
						reference: 'newBrandNo',
						bind:{value:'{billRow.newBrandNo}'}
					},
					{xtype : 'extcombox',fieldLabel : 'BOM状态',name:"bomStatus",displayvalue : "0=编辑:1=审核:2=生效",reference: 'bomStatus',bind:{value:'{billRow.bomStatus}'}},
					{xtype : 'textfield',fieldLabel : '版本号',reference: 'versionNo',name : 'versionNo',editable:false,bind:{value:'{billRow.versionNo}'}},
					{
						xtype : 'textfield',
						fieldLabel : '备注',
						name:"remarks",
						reference: 'remarks',
						//colspan : 4,
						//width:960,
						bind:{value:'{billRow.remarks}'},
						regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
						regexText:'请输入字母或数字',
						maxLength:60,
						enforceMaxLength:true
					}
			],
			billLoadUrl: Hc.mdmPath + 'bill_bom/list.json',
			billSaveUrl: Hc.mdmPath + 'bill_bom/saveSizeHorizontalData.json',
			//billSaveUrl: Hc.mdmPath + 'bill_bom/saveMasterCustomerList.json',
			billAuditUrl:Hc.mdmPath + 'bill_bom/audit.json',
			billExportUrl:Hc.mdmPath + 'bill_bom/do_export.json',
			billModel: 'Hc_mdm.model.BillBom',
			billSubGrid:['mastergrid','grid1'],
            gridUnionKey:"billNo,orderNo",
            
			gridColumns: [	  
				{dataIndex: 'billNo', text: '单据号',hidden:true},
				{dataIndex: 'lineId', text: '行id', hidden:true},
				{
					dataIndex: 'orderNo', 
					text: '序号', 
					editor: {
						allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入正数、负数、小数
						regexText:'请输入正数'
					}
				},
				{
					dataIndex: 'brandNo', 
					text: '品牌',
					xtype:"bllookupedit",
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo',
					editor: {
						allowBlank: false
					}
				},
				{dataIndex: 'parentOrderNo', text: '上层序号',hidden:true},
				{
					dataIndex: 'materialNo', 
					text: '物料编号',
					editor:{
						xtype:'searchhelpfield',
						name:'materialNo',
						reference: 'materialNo',
						gridColumns:[{
						   dataIndex:'materialNo',
						   text:'物料编号',
						   flex:0.3
						},{
						   dataIndex:'materialCode',
						   text:'物料编码',
						   flex:0.3
						},{
						   dataIndex:'materialName',
						   text:'物料名称',
						   flex:0.3
						},{
							  dataIndex:'sizeTypeNo',
							  text:'码组',
							  flex:0.3
						}],
						searchItems:[
										{
											fieldLabel : '物料编码',
										    name:'materialCode',
										    flex:0.5
										 }
						             ],
						isAutoLoad:false,
						otherFields:"materialCode,materialName,sizeTypeNo",
						url:Hc.mdmPath + 'bas_material/list.json',
						allowBlank: false
					}
				},
				{dataIndex: 'materialCode',text : '物料编码'},
				{dataIndex: 'materialName',text : '物料名称'},
				{dataIndex: 'sizeTypeNo',text:"码组"},
				//{dataIndex: 'materialNo', text: '物料编号', editor: {allowBlank: false}},
				{
					dataIndex: 'bomPurpose', 
					text: 'BOM用途', 
					editor: {
						allowBlank: false
					},
					xtype : "bllookupedit",
					displayvalue : "S2=开发:STD=标准:SUB=委外:SPD=预测"
				},
				{
					dataIndex: 'dosageNumerator', 
					text: '用量(分子)', 
					editor: {
						allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入正数、负数、小数
						regexText:'请输入正数'
					}
				},
				{
					dataIndex: 'dosageDenominator', 
					text: '用量(分母)', 
					editor: {
						allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入正数、负数、小数
						regexText:'请输入正数'
					}
				},
				{
					dataIndex: 'pdTypeNo', 
					text: '用途',
					xtype:'bllookupedit',
     			   	displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=pd_type_no',
     			   	displaymember:'itemName',
     			   	valuemember:'itemCode',
					editor: {
						allowBlank: false
					}
				},
				{
					dataIndex: 'storeNo', 
					text: '预设仓库',
					editor: {
						allowBlank: false
					}
				},
				{
					dataIndex: 'isVirtual', 
					text: '是否虚拟件', 
					editor: {
						allowBlank: false
					},
					xtype : "bllookupedit",
					displayvalue : "0=否:1=是"
				},
				{
					dataIndex: 'updateFlag', 
					text: '修改标识',
					readOnly:true,
					xtype : "bllookupedit",
					displayvalue : "0=否:1=是"
				}
			],
			gridPrimaryKey: 'billNo',
			gridModel: 'Hc_mdm.model.BillBomList',
			gridLoadUrl: Hc.mdmPath + 'bill_bom_list/list.json',
			gridHasMark:false,
		   	gridHasCreator:false,
		   	gridHasModifier:false,
		   	gridHasAuditor:false,
		   	gridHasOrderNo:false,
		   	
			grid1Columns:[
			              {dataIndex: 'billNo', text: '单据号'},
			              {dataIndex: 'orderNo', text: '物料序号'},
			              {dataIndex: 'sizeTypeNo', text: '表头码组'},
			              {dataIndex: 'materialNo', text: '物料编号'},
			              {dataIndex: 'materialCode', text: '物料编码'},
			              {dataIndex: 'materialName', text: '物料名称'},
			              {dataIndex: 'newSizeTypeNo', text: '物料码组'}
			       		],
		   	grid1Model: 'Hc_mdm.model.BillBomListSize',
		   	grid1PrimaryKey:'orderNo',
		   	grid1Title:"",
		   	grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1SizeInputType:"string",
		   	grid1MConvertSize:1,
		   	grid1LoadUrl: Hc.mdmPath + 'bill_bom_list/listSizeVo.json?selectVoName=SelectListByVoBillBomListSize',
		   	grid1MSizeIdx:8
		});

		me.items = [me.billtoolbar];
        me.items.push(me.billPanel);
        me.items.push(me.toolbar);
        var treepanel={ 
					xtype: 'treepanel',
					region: 'west',
					split: true,
					reference: 'menutree',
					itemId: 'menutree',
					width: 250,
					batchUrl:Hc.mdmPath+'bill_bom/listsave.json',
					lines: true,
					rootVisible: false,
					columns: [{
					    xtype: 'treecolumn',
					    flex: 1,
					    dataIndex: 'materialCode',
					    text: "物料编码",
					    width: 130
					},{
						dataIndex: 'materialName',
						text: "物料名称",
						width: 120
					}],
					store:{
						model:'Hc_mdm.model.BillBomList',
					type:'treebase',
					autoLoad:false,
					rootVisible: false,
					proxy: {
					    type: 'ajax',
					    url:  Hc.mdmPath+'bill_bom_list/list.json'
					},
					root: {
						text: 'root',
						orderNo: 0,
						materialNo: -1,
					    leaf: false,
					    expanded: false
					},
					nodeParam:'orderNo',
					parentIdProperty:'parentOrderNo'
					},
					listeners: {
						'afteritemexpand': 'onAfterItemExpand',
						"selectionchange": "onTreeSelectionChange",
					}
				};
        
        var h=me.controller.getBodyHeight(0.4);
        var con1={
    		xtype:"panel",
    		height:h,
    		region:"north",
    		layout:'border',
    		items:[me.grid],
    		split:true,
    		border:false
        };

        var con2={
    		xtype:"panel",
    		region:"center",
    		layout:'border',
    		items:[me.grid1],
    		border:false
        };
        
        var panelchild={
    		xtype: "panel",
            region: 'center',
            layout:'border',
            items:[con1,con2],
            border:false
        };

        var panel = {
            xtype: "panel",
            region: 'center',
            layout:'border',
            items:[treepanel,panelchild],
            border:false
        };
        me.items.push(panel);
        me.items.push(me.statusPanel);
		this.callParent();
	}
});

/**
 * Description: BOM单据物料清单表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billbomlist.BillBomListController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.billbomlist',
    selectNode:null,
    myMask:null,
    init:function(){
        var me = this,objList= me.getObjList();
        me.callParent(arguments);
        me.setInit(me);
        //维护类型
        var maintainType=me.lookupReference('maintainType');
        maintainType.on("change",me.onChangeMaintainType,me);
    },
    setInit:function(me){
    	 if (me.view.billNo!=null&&me.view.billNo!=""){
         	me.setBomHeadReadOnly(me,true);
         }
     	//BOM状态
         var bomStatus=me.lookupReference('bomStatus');
         bomStatus.setDisabled(true);
         
         var versionNo=me.lookupReference('versionNo');
         versionNo.setDisabled(true);
         
         var materialCode=me.lookupReference('materialCode');
         materialCode.setDisabled(true);
         
         var materialName=me.lookupReference('materialName');
         materialName.setDisabled(true);
         
         var sizeTypeNo=me.lookupReference('sizeTypeNo');
         sizeTypeNo.setDisabled(true);
         
         //新品牌
         var newBrandNo=me.lookupReference('newBrandNo');
         newBrandNo.setDisabled(true);
         if (me.newbrandno==null){
         	newBrandNo.setValue(null);
         }

         //新BOM用途
         var newBomPurpose=this.lookupReference('newBomPurpose');
         newBomPurpose.setDisabled(true);
         if (me.newbompurpose==null){
         	newBomPurpose.setValue(null);
         }
    },
    setBtnStatus:function(me){
        var objlist= me.getObjList();
    	var maintainType=me.getConValue("maintainType");
    	if (maintainType=="1"){
    		objlist.btnDelete.setDisabled(false);
    	}else{
    		objlist.btnDelete.setDisabled(true);
    	}
    },
    /**网格选择中时，控制按钮可用状态、控制从表加载、给viewModel绑定数据*/
    gridSelectionChange: function (sender, e) {
        this.callParent(arguments);
        this.setBtnStatus(this);
    },
    /*更改单据页面控件状态*/
    setPageStatus:function(objlist) {
    	this.callParent(arguments);
    	this.setBtnStatus(this);
    },
    /**网格数据更新事件，控制按钮可用状态、更新网络编辑状态、更新页面编辑对象列表*/
    gridDataChanged: function (store, grid) {
    	this.callParent(arguments);
    	this.setBtnStatus(this);
    },
    onChangeBomStatus:function(me, newValue, oldValue, eOpts){
    	var form=this;
    	var objlist= form.getObjList();
    	var maintainType=form.getConValue("maintainType");

    	if (maintainType=="1"){
    		if (newValue=="1"){
    			objlist.btnAdd.setDisabled(true);
    			objlist.btnDelete.setDisabled(true);
    			objlist.btnOther1.setDisabled(true);
    			objlist.btnOther2.setDisabled(true);
    			objlist.btnBillSave.setDisabled(true);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);

    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);

    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);
    	        
	        	newBrandNo.setValue(null);
	        	newBomPurpose.setValue(null);
    		}
    		else{
    			objlist.btnAdd.setDisabled(false);
    			objlist.btnDelete.setDisabled(false);
    			objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(false);
    			objlist.btnBillSave.setDisabled(false);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);
    	        
    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);
    	        
    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);
    	        
    	        newBrandNo.setValue(null);
    	        newBomPurpose.setValue(null);
    		}
    	}
    	else if(maintainType=="2"){
    		objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(false);
	        
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        newBrandNo.setValue(null);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
	        
		}else if(maintainType=="4"){
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(false);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        newBomPurpose.setValue(null);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
		}else{
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
			//新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
	        
	        newBrandNo.setValue(null);
	        newBomPurpose.setValue(null);
		}
    },
    onChangeMaintainType:function(me, newValue, oldValue, eOpts){
    	var form=this;
    	var objlist= form.getObjList();
    	
    	if (form.view.billNo!=null&&form.view.billNo!=""){
    		if (newValue!="1"){
    			objlist.btnAdd.setDisabled(true);
    			objlist.btnDelete.setDisabled(true);
    			objlist.btnOther1.setDisabled(true);
    			objlist.btnOther2.setDisabled(true);
    			objlist.btnBillSave.setDisabled(true);
    		}else{
    			objlist.btnAdd.setDisabled(false);
    			objlist.btnDelete.setDisabled(false);
    			//objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(false);
    			objlist.btnBillSave.setDisabled(false);
    		}
        	return;
        }

    	var bomStatus=form.getConValue("bomStatus");
    	if (newValue=="1"){
    		if (bomStatus=="1"){
    			objlist.btnAdd.setDisabled(true);
    			objlist.btnDelete.setDisabled(true);
    			objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(true);
    			objlist.btnBillSave.setDisabled(true);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);

    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);
    	        
    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);
    	        
    	        newBrandNo.setValue(null);
    	        newBomPurpose.setValue(null);
    		}
    		else{
    			objlist.btnAdd.setDisabled(false);
    			objlist.btnDelete.setDisabled(false);
    			objlist.btnOther1.setDisabled(false);
    			objlist.btnOther2.setDisabled(false);
    			objlist.btnBillSave.setDisabled(false);
    			//新品牌
    	        var newBrandNo=this.lookupReference('newBrandNo');
    	        newBrandNo.setDisabled(true);
    	        
    	        //新BOM用途
    	        var newBomPurpose=this.lookupReference('newBomPurpose');
    	        newBomPurpose.setDisabled(true);
    	        
    	        //BOM状态
    	        var bomStatus=this.lookupReference('bomStatus');
    	        bomStatus.setDisabled(true);

	        	newBrandNo.setValue(null);
	        	newBomPurpose.setValue(null);
    		}
    	}
    	else if(newValue=="2"){
    		objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(false);
	        
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        newBrandNo.setValue(null);

	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);

		}else if(newValue=="4"){
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
	        //新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(false);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        newBomPurpose.setValue(null);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
		}else{
			objlist.btnAdd.setDisabled(true);
			objlist.btnDelete.setDisabled(true);
			objlist.btnOther1.setDisabled(false);
			objlist.btnOther2.setDisabled(true);
			objlist.btnBillSave.setDisabled(true);
			//新品牌
	        var newBrandNo=this.lookupReference('newBrandNo');
	        newBrandNo.setDisabled(true);
	        
	        //新BOM用途
	        var newBomPurpose=this.lookupReference('newBomPurpose');
	        newBomPurpose.setDisabled(true);
	        
	        //BOM状态
	        var bomStatus=this.lookupReference('bomStatus');
	        bomStatus.setDisabled(true);
	        
	        newBrandNo.setValue(null);
	        newBomPurpose.setValue(null);
		}
    },
    onCheckMaterialNo:function(obj, event, eOpts){
    	var materialNo=obj.getValue().trim();
    	var me =this;
    	me.myMask = new Ext.LoadMask({
    	    msg    : "正在查询物料["+materialNo+"]是否存在...",
    	    target : me.getView()
    	});
    	me.myMask.show();
    	Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkMaterial.json',    //请求地址    
    		     //提交参数组       
    		     params: {       
    		    	 materialNo:materialNo             
    		     }, 
    		     //成功时回调       
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	me.myMask.hide();
    		    	var result=response.responseText;
    		    	if (result=="0"){
    		    		Hc.alert("物料编码:["+materialNo+"]不存在!");
    		    		obj.setValue("");
    		    	}
    		    }       
    		});
    },
    onBtnSaveClick: function (btn) {
    	this.callParent(arguments);
    	var me=this;
		var form = me.getObj('commonbill')
		var con=Hc.getField(form, "billNo");
    	me.view.billNo=con.getValue();
    },
    onBindData:function(billNo){
    	var me=this;
    	this.callParent(arguments);
    	if (billNo!=""){
        	var store=this.lookupReference('menutree').store;
        	store.proxy.extraParams['billNo'] = billNo;
        	store.root.data.expanded = true;
        	store.load({
			    scope: this,
			    callback: function(records, operation, success) {
			    	if (this.selectNode!=null){
				    	var tree = this.lookupReference('menutree');
				    	tree.expandNode(this.selectNode);
						tree.getSelectionModel().select(this.selectNode);
			    	}
			    }
			});
    	}else{
        	var form = me.getObj('commonbill')
    		var con=Hc.getField(form, "billNo");
        	con.setValue("");
        	var maintainType = this.lookupReference("maintainType");
        	maintainType.setValue(1);
        	var tree = this.lookupReference('menutree');
        	var root=tree.getRootNode();
        	root.removeAll();
        	me.setNewBillStatus(me);
    	}
    },
    //新增事件
    initAddData: function (newObj) {
    	this.callParent(arguments);
		var me = this,tree = me.lookupReference('menutree');
		var obj = me.workObject;
		if (!tree.selection) {
			Hc.alert("请先选择一个成品或半成品再增加！");
			return false;
		}
		if (obj.viewModelKey=="mastergrid"){
			var orderNo = tree.selection.data.orderNo;
			var billNo= tree.selection.data.billNo;
			var brandNo=tree.selection.data.brandNo;
			var bomPurpose=tree.selection.data.bomPurpose;
			newObj.data.parentOrderNo = orderNo;
			newObj.data.brandNo = brandNo;
			newObj.data.bomPurpose = bomPurpose;
			newObj.data.billNo = billNo;
			newObj.data.orderNo=-1;
		}
    }, 
    onGrid1BeforeLoad:function(store,opt){
    	if(this.callParent(arguments)===false)return false;
    	
    	if (this.lookupReference('menutree').store.getCount()==0) return false;
    	if (this.selectNode==null) return false;
    	//if (this.lookupReference('menutree').getSelection().length==0) return false;
    },
    onGridBeforeLoad:function(store,opt){
    	if(this.callParent(arguments)===false)return false;
    	
    	if (this.lookupReference('menutree').store.getCount()==0) return false;
    	if (this.selectNode==null) return false;
    	//if (this.lookupReference('menutree').getSelection().length==0) return false;
    },
	setCommonToobar:function(objlist) {
		if (!objlist || objlist.length < 1)return;
        objlist.btnSearch.setVisible(false);
        objlist.btnExport.setVisible(false);
        objlist.btnPrint.setVisible(false);
        objlist.btnOther.setVisible(false);
        objlist.btnSave.setVisible(false);
        
        objlist.btnAdd.setVisible(true);
        objlist.btnAdd.setText('增加物料');
        objlist.btnAdd.setDisabled(true);
        
        objlist.btnDelete.setText('删除物料/替代表');
        objlist.btnDelete.setVisible(true);
        objlist.btnDelete.setDisabled(true);
        
		objlist.btnOther1.setVisible(true);
		objlist.btnOther1.setText('引入BOM');
		objlist.btnOther1.setDisabled(true);
		
		objlist.btnOther2.setVisible(true);
		objlist.btnOther2.setText('增加半成品BOM');
		objlist.btnOther2.setDisabled(true);
		
		objlist.btnOther3.setVisible(true);
		objlist.btnOther3.setText('生成替代表');
		objlist.btnOther3.setDisabled(false);

        for (var i = 3; i < 7; i ++) {
            var sp = objlist['commontoolsp'+i];
            if (sp) {
                sp.setVisible(false);
            }
        }
    },
    onBtnBillNewClick:function(btn){
    	this.callParent(arguments);
    	var me=this;

    },
    //新单时控制哪些可以输入
    setNewBillStatus:function(me){
    	var materialNo = me.lookupReference("materialNo");
    	var maintainType = me.lookupReference("maintainType");
    	var oldBomPurpose = me.lookupReference("oldBomPurpose");
    	var oldBrandNo = me.lookupReference("oldBrandNo");
    	var remarks=me.lookupReference("remarks");
    	
    	materialNo.setDisabled(false);
    	maintainType.setDisabled(false);
    	oldBomPurpose.setDisabled(false);
    	oldBrandNo.setDisabled(false);
    	remarks.setDisabled(false);
    },
    //保存前把保存状态置为更新
    beforeSave: function (data) {
    	this.callParent(arguments);
    	if (data.operateType=="inserted"){
    		data.operateType="updated";
    	}
    	return true;
    },
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},
    onBtnOther1:function(btn){
    	this.callParent(arguments);
    	var me = this;
    	if (!this.getBillItems("materialNo","","请选择物料编码")){
    		return;
    	}
    	if (!this.getBillItems("oldBomPurpose",null,"请选择老BOM用途")){
    		return;
    	}
    	if (!this.getBillItems("oldBrandNo",null,"请选择老品牌")){
    		return;
    	}
    	if (!this.getBillItems("maintainType",null,"请选择维护类型")){
    		return;
    	}
    	
    	var materialNo=this.getConValue("materialNo");
    	var maintainType=this.getConValue("maintainType");
    	var bomStatus=this.getConValue("bomStatus");
    	var newBomPurpose=this.getConValue("newBomPurpose");
    	var newBrandNo=this.getConValue("newBrandNo");
    	var oldBomPurpose=this.getConValue("oldBomPurpose");
    	var oldBrandNo=this.getConValue("oldBrandNo");
    	var oldBomPurposeText=this.getConText("oldBomPurpose");
    	var oldBrandNoText=this.getConText("oldBrandNo");

    	me.myMask = new Ext.LoadMask({
    	    msg    : "正在校验物料["+materialNo+"]BOM数据",
    	    target : me.getView()
    	});
    	me.myMask.show();

		Ext.Ajax.request({            
  		     url: Hc.mdmPath+'bill_bom_list/checkImportBillBom.json',    //请求地址    
  		     //提交参数组       
  		     params: {
  		    	 maintainType:maintainType, 
  		    	 oldBrandNo:oldBrandNo, 
  		    	 materialNo:materialNo, 
  		    	 oldBomPurpose:oldBomPurpose, 
  		    	 newBomPurpose:newBomPurpose, 
  		    	 newBrandNo:newBrandNo
  		     },
  		     //成功时回调       
  		     success: function(response, options) {       
  		        //获取响应的字符串
  		    	me.myMask.hide();
  		    	var result=response.responseText;
  		    	if (result!=""){
  		    		Hc.alert(result);
  					return false;
  		    	}
  		    	Hc.confirm('是否确定引入['+materialNo+"]BOM清单,引入后不能修改BOM头信息!",function(yn){
  		            if(yn=='no') {
  		                return;
  		            }else{
  		            	me.setBomHeadReadOnly(me,true);
  		                var menuTree = me.lookupReference('menutree');
  		                me.myMask = new Ext.LoadMask({
  		            	    msg    : "正在引入["+materialNo+"]BOM清单...",
  		            	    target : me.getView()
  		            	});
  		            	me.myMask.show();
  		                me.loadTreeStore(menuTree);
  		            }
  		        });
  		     } 
		});
    },
    setBomHeadReadOnly:function(me,bol){
    	var objlist= me.getObjList();
    	var materialNo = me.lookupReference("materialNo");
    	var maintainType = me.lookupReference("maintainType");
    	var oldBomPurpose = me.lookupReference("oldBomPurpose");
    	var oldBrandNo = me.lookupReference("oldBrandNo");
    	var newBomPurpose = me.lookupReference("newBomPurpose");
    	var newBrandNo = me.lookupReference("newBrandNo");
    	var remarks=me.lookupReference("remarks");
    	
    	materialNo.setDisabled(bol);
    	maintainType.setDisabled(bol);
    	oldBomPurpose.setDisabled(bol);
    	oldBrandNo.setDisabled(bol);
    	newBomPurpose.setDisabled(bol);
    	newBrandNo.setDisabled(bol);
    	remarks.setDisabled(bol);
    	objlist.btnOther1.setDisabled(bol);
    },
    onBtnOther2:function(btn){
    	this.callParent(arguments);
    	var me = this,
        tree = me.lookupReference('menutree');
		
		if (!tree.selection) {
			Hc.alert("请先选择一个成品或半成品再增加！");
			return false;
		}
		
		var win=Ext.create('Ext.window.Window', {
		    title: '请输入半成品编码',
		    height: 150,
		    width: 400,
		    layout: 'form',
		    modal:true,
		    defaultType:"textfield",  
		    labelWidth:55,
		    resizable:false,
		    items:[{
		    	xtype:'form',
		    	layout: 'form',
			    items:[{
			    	id:"materialNo1111",
					xtype:'searchhelpfield',
					fieldLabel : '半成品编码号',
					name:'materialNo',
					reference: 'materialNo',
					gridColumns:[{
					   dataIndex:'materialNo',
					   text:'物料编号',
					   flex:0.3
					},{
					   dataIndex:'materialCode',
					   text:'物料编码',
					   flex:0.3
					},{
					   dataIndex:'materialName',
					   text:'物料名称',
					   flex:0.3
					}],
					allowBlank:false,
					searchItems:[
									{
										fieldLabel : '半成品编号',
									    name:'materialNo',
									    flex:0.5
									 }
					             ],
					isAutoLoad:false,
					url:Hc.mdmPath + 'bas_material/list.json'
				},{
			    	xtype : 'extcombox',
			    	displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
					valuemember:'brandNo',
			    	fieldLabel:"品牌",
			    	id:"brandNo",
			    	name:"brandNo",
			    	reference: 'brandNo',
	                allowBlank:false
			    }]
		    }],
		    buttons:[{
				text : '确定',  
				handler : function(btn){
					if(!(btn.up('window').down('form').isValid())) return;
					var materialNo=btn.up('window').down('form').getComponent("materialNo1111").getValue();
					var brandNo=btn.up('window').down('form').getComponent("brandNo").getValue();
					me.onImportComponent(materialNo,brandNo,me,win);
				}
		    },{
		    	text : '取消',
		    	handler : function(){  
					win.close();  
				}
		    }],
		    listeners: {
		    	show: function (me,eOpts ) {
		        }
		    }
		});
		win.show();
    },
    //引入半成品
    onImportComponent:function(materialNo,brandNo,me,obj){
    	me.myMask = new Ext.LoadMask({
    	    msg    : "正在查询半成品["+materialNo+"]是否存在...",
    	    target : obj
    	});
    	me.myMask.show();
    	Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkMaterial.json',    //请求地址    
    		     //提交参数组       
    		     params: {       
    		    	 materialNo:materialNo             
    		     }, 
    		     //成功时回调       
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	var result=response.responseText;
    		    	if (result=="0"){
    		    		Hc.alert("半成品编码:["+materialNo+"]不存在!");
    		    		me.myMask.hide();
    		    		return false;
    		    	}
    		    	else{
    		        	var materialNov=materialNo;
    		        	var oldBomPurpose=me.getConValue("oldBomPurpose");
    		        	var billNo=me.view.billNo;;
    		        	var tree = me.lookupReference('menutree');
    		    		var orderNo = tree.selection.data.orderNo;
    		    		var maintainType=me.getConValue("maintainType");
    		        	var newBomPurpose=me.getConValue("newBomPurpose");
    		        	var newBrandNo=me.getConValue("newBrandNo");
    		    		
    		        	Ext.Ajax.request({            
    		     		     url: Hc.mdmPath+'bill_bom_list/checkImportBillBom.json',    //请求地址    
    		     		     //提交参数组       
    		     		     params: {
    		     		    	 maintainType:maintainType, 
    		     		    	 oldBrandNo:brandNo, 
    		     		    	 materialNo:materialNo, 
    		     		    	 oldBomPurpose:oldBomPurpose, 
    		     		    	 newBomPurpose:newBomPurpose, 
    		     		    	 newBrandNo:newBrandNo,
    		     		    	 billNo:billNo,
    		     		    	 orderNo:orderNo
    		     		     },
    		     		     //成功时回调       
    		     		     success: function(response, options) {       
    		     		        //获取响应的字符串
    		     		    	me.myMask.hide();
    		     		    	var result=response.responseText;
    		     		    	if (result!=""){
    		     		    		Hc.alert(result);
    		     					return false;
    		     		    	}
    		     		    	var importStore = Ext.create('Hc_Common.store.Base', {
    	    		        		fields: ["billNo", "orderNo","materialNo"],
    	    		        	     proxy: {
    	    		        	         url: Hc.mdmPath+'bill_bom_list/importBillBom.json'
    	    		        	     }
    	    		        	});
    	    		        	importStore.proxy.extraParams['materialNo'] = materialNov;
    	    		        	importStore.proxy.extraParams['oldBomPurpose'] = oldBomPurpose;
    	    		        	importStore.proxy.extraParams['maintainType'] = maintainType;
    	    		        	importStore.proxy.extraParams['billNo'] = billNo;
    	    		        	importStore.proxy.extraParams['orderNo'] = orderNo;
    	    		        	importStore.proxy.extraParams['oldBrandNo'] = brandNo;
    	    		        	
    	    		        	importStore.load({
    	    		    		    scope: this,
    	    		    		    callback: function(records, operation, success) {
    	    		    		    	if (records.length>0)
    	    		    		    	{
    	    		    		    		var store=tree.store;
    	    		    		    		store.proxy.extraParams['billNo'] = billNo;
    	    		    		    		me.view.billNo=billNo;
    	    		    		    		tree.store.root.data.expanded = true;
    	    		    		    		store.load({
    	    		    		    			scope: this,
    	    		    		    		    callback: function(records, operation, success) {
    	    		    		    		    	me.myMask.hide();
    	    		    		    		    	obj.close();
    	    		    		    		    }
    	    		    		    		});
    	    		    		    	}else{
    	    		    		    		me.myMask.hide();
    	    		    		    		return false;
    	    		    		    	}
    	    		    		    }
    	    		        	});
    		     		     } 
    		        	});
    		    	}
    		    }       
    		});
    },
    /**设置物料只能编辑可用的尺码*/
    sizeFieldBeforeEdit: function (grid, e) {
        var uselist = grid._uselist;
        if (grid.mSizeIdx == -1)return;
        var fields = [];
        for (var i = 1; i < 21; i++) {
            fields.push('f' + i);
        }
        if (fields.indexOf(e.field) == -1)return;
        var materialNo = e.record.get('materialNo');
        if (Ext.isEmpty(materialNo)) return false;

        var usesize = Ext.Array.findBy(uselist, function (item) {
            return item.materialNo == materialNo;
        });
    },
    /**尺码横排处理grid表头*/
    setGridSizeCols: function (grid, store) {
        var sIdx = grid.mSizeIdx;
        if (sIdx == -1) return;
        var me = this,
            head = Hc.clone(grid._headlist),
            gc = Hc.clone(grid.vcolumn),
            i, j, tmpHead, field;
        var edit={
    		xtype : 'extcombox',
    		displaymember:'sizeCode',
			valuemember:'sizeCode',
    		displayvalue : Hc.mdmPath+"bas_size/listAll.json"
        };
        for (i = 1; i < 21; i++) {
            field = 'f' + i;
            if (!Ext.Array.findBy(head, function (item) {
                    return item[field] != '0'
                })) {
                for (j = 0; j < head.length; j++) {
                    tmpHead = head[j];
                    delete tmpHead[field];
                }
            }
        }
        if (head.length == 0) {
            grid.reconfigure(store, gc);
            me.gridHeadCls(grid);
            return;
        }

        try {
            var sizeCols = [],
                mSizeCol = gc[sIdx],
                uselist = grid._uselist || [];
            var  getcol = function (_field, _text, _column) {
                    _text = _text == '0' ? '&nbsp;' : (_text || '&nbsp;');
                    if (_column) {
                        return {
                            text: _text,
                            columns: [_column]
                        }
                    }
                    return {
                        dataIndex: _field,
                        text: _text,
                        width: 50,
                        editor: edit,
                        renderer: function (val, obj, record) {
                            if (Ext.Array.findBy(uselist, function (item) {
                                    return item.materialNo == record.get('materialNo') && (item[_field] != '0')
                                })) {
                                obj.tdCls = 'x-grid-input-cell';
                            }
                            return val == 0 ? '' : val;
                        }
                    }
                };

            if (head.length == 1) {
                tmpHead = head[0];
                for (i = 1; i < 21; i++) {
                    field = 'f' + i;
                    if (!tmpHead[field]) continue;
                    sizeCols.push(getcol(field, tmpHead[field]));
                }
            } else {
                var tmp;
                for (i = 1; i < 21; i++) {
                    tmp = {};
                    field = 'f' + i;
                    for (j = 0; j < head.length; j++) {
                        tmpHead = head[j];
                        if (!tmpHead[field]) continue;
                        if (j == 0) {
                            tmp = getcol(field, tmpHead[field]);
                        } else {
                            tmp = getcol(field, tmpHead[field], tmp);
                        }
                    }
                    if (Ext.Object.isEmpty(tmp)) continue;
                    sizeCols.push(tmp);
                }
            }
            Ext.Array.insert(gc, sIdx, sizeCols);
            Ext.Array.remove(gc, mSizeCol);
            grid.reconfigure(store, gc);
            me.gridHeadCls(grid);
        } catch (e) {
            Hc.alert('创建物料的尺码表头时出错');
        }
    },    
    /*审核单据*/
    onBtnBillAuditClick: function (btn) {
        var me = this;
        this.callParent(arguments);
    },
    onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();
        if (!objs) return;
		var store = objs.mastergrid.store;
		var storesize=objs.grid1.store;
		var selLength=sm.selected.items.length;
		if (selLength==1) {
			this.selectNode=sm.selected.items[0];
			var billNo=sm.selected.items[0].data.billNo;
			var orderNo=sm.selected.items[0].data.orderNo;
			store.proxy.extraParams.billNo = billNo;
			store.proxy.extraParams.orderNo = orderNo;
			store.load();
			
			storesize.proxy.extraParams.billNo = billNo;
			storesize.proxy.extraParams.orderNo = orderNo;
			storesize.load();
		}
	},
    //加载BOM下级节点
    loadTreeStore:function(tree){
    	var me = this;
    	var materialNov=this.getConValue("materialNo");
    	var oldBomPurpose=this.getConValue("oldBomPurpose");
    	var oldBrandNo=this.getConValue("oldBrandNo");
    	var maintainType=this.getConValue("maintainType");
    	var newBomPurpose=this.getConValue("newBomPurpose");
    	var newBrandNo=this.getConValue("newBrandNo");

    	var importStore = Ext.create('Hc_Common.store.Base', {
    		fields: ["billNo", "orderNo","materialNo"],
    	     proxy: {
    	         url: Hc.mdmPath+'bill_bom_list/importBillBom.json'
    	     }
    	});
    	importStore.proxy.extraParams['materialNo'] = materialNov;
    	importStore.proxy.extraParams['oldBomPurpose'] = oldBomPurpose;
    	importStore.proxy.extraParams['oldBrandNo'] = oldBrandNo;
    	importStore.proxy.extraParams['maintainType'] = maintainType;
    	importStore.proxy.extraParams['newBomPurpose'] = newBomPurpose;
    	importStore.proxy.extraParams['newBrandNo'] = newBrandNo;
    	
    	importStore.load({
		    scope: this,
		    callback: function(records, operation, success) {
		    	if (records.length>0)
		    	{
		    		var billNo=records[0].data["billNo"];
		    		var bv=records[0].data["bomStatus"];
		    		var vv=records[0].data["versionNo"];
		    		var form = me.getObj('commonbill')
		    		var con=Hc.getField(form, "billNo");
		    		con.setValue(billNo);
		    		var store=tree.store;
		    		store.proxy.extraParams['billNo'] = billNo;
		    		var bomStatus=this.lookupReference('bomStatus');
		    		bomStatus.setValue(bv);

		    		var versionNo=this.lookupReference("versionNo");
		    		versionNo.setValue(vv);
		    		
		    		me.view.billNo=billNo;
		    		tree.store.root.data.expanded = true;
		    		store.load({
		    			scope: this,
		    		    callback: function(records, operation, success) {
		    		    	me.myMask.hide();
		    		    }
		    		});
		    	}
		    	else{
		    		me.myMask.hide();
		    	}
		    }
    	});
    },
    //产生树根节点
    setRootNode:function(tree,matname){
    	var materialNo=this.getConValue(matname);
        var root = {
        	orderNo: 1,
            leaf: false,
            expanded: false,
			materialNo: materialNo
        };
        tree.setRootNode(root);
    },
    getBillItems:function(name,pv,msg){
    	var con = this.lookupReference(name);
		if (con) {
		    var v=con.getValue();
		    if (v==pv){
		    	Hc.alert(msg);
		    	con.focus();
		    	return false;
		    }
		    else{
		    	return true;
		    }
		}
		else{
			return false;
		}
    },
    getConValue:function(name){
    	var con = this.lookupReference(name);
		if (con) {
		    var v=con.getValue();
		    return v;
		}
		else{
			return null;
		}
    },
    getConText:function(name){
    	var con = this.lookupReference(name);
		if (con) {
		    var v=con.rawValue;
		    return v;
		}
		else{
			return null;
		}
    },
	onGrid1BeforeEdit:function(editor, obj){
		if(this.callParent(arguments)===false) return false;
		var me=this;
		if(me.checkFieldName(obj.field)) {
			var store = obj.column.getEditor().store;
			var record = obj.record; //当前尺码行数据
			var sizeTypeNo=record.get("newSizeTypeNo");
			store.proxy.extraParams['sizeTypeNo'] = sizeTypeNo;
			store.load();
    	}
	},
	onGrid1AfterEdit:function(editor, obj){
		if(this.callParent(arguments)===false) return false;
		var me=this;
		if(me.checkFieldName(obj.field)) {
			var record = obj.record; //当前尺码行数据
			var sizeValue=obj.value;
			var fieldName=obj.field;
			if (!me.checkSizeValue(sizeValue,fieldName,record)){
				Hc.alert("输入的尺码值:["+sizeValue+"]已经存在,不能输入!");
				record.set(obj.field,"");
				return false;
			}
    	}
	},
	//校验输入的尺码是否有重复,不重复返回true,重复返回false
	checkSizeValue:function(sizeValue,fieldName,record){
		if (sizeValue==""||sizeValue==null) return true;
		for(var i=1;i<=20;i++){
			var temp="f"+i.toString();
			if (temp==fieldName){
				continue;
			}else{
				var curSizeValue=record.get(temp);
				if (curSizeValue==sizeValue){
					return false;
				}else{
					continue;
				}
			}
		}
		return true;
	},
	checkFieldName:function(fieldname){
		for(var i=1;i<=20;i++){
			var temp="f"+i.toString();
			if (temp==fieldname){
				return true;
			}
		}
		return false;
	},
	onGridBeforeEdit:function(editor, obj){
		if(this.callParent(arguments)===false) return false;
		var me=this;
        var maintainType=me.getConValue("maintainType");
		if (maintainType!="1"){
			return false;
		}
		
        var objs = me.getObjList();
		var storeSize=objs.grid1.store; //尺码表数据
		var record = obj.record; //当前物料行数据
		var orderNo=record.get("orderNo");
    	if(obj.field == 'materialNo' || obj.field == 'orderNo') {
    		var havesize=me.onCheckSize(orderNo,storeSize);
    		if (havesize){
    			Hc.alert("序号:["+orderNo+"]已经生成替代表,请删除替代表在修改物料或者序号!");
				return false;
    		}
    	}
	},
    onGridAfterEdit:function(editor, obj)
    {
    	this.callParent(arguments);
    	var me=this;
		var record = obj.record; //当前物料行数据
		
    	if(obj.field == 'materialNo') {
			var materialNo = record.get('materialNo');
			if (obj.originalValue==materialNo){
				return;
			}
	    	var me =this;
	    	me.myMask = new Ext.LoadMask({
	    	    msg    : "正在查询和校验物料["+materialNo+"]...",
	    	    target : me.getView()
	    	});
	    	me.myMask.show();
	    	Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkMaterial.json',    //请求地址    
    		     //提交参数组
    		     params: {       
    		    	 materialNo:materialNo             
    		     }, 
    		     //成功时回调
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	me.myMask.hide();
    		    	var result=response.responseText;
    		    	if (result=="0"){
    		    		Hc.alert("物料编码:["+materialNo+"]不存在!");
    		    		record.set("materialNo","");
    		    		record.set("materialCode","");
    		    		record.set("materialName","");
    		    		record.set("sizeTypeNo","");
    		    		return;
    		    	}
    		    	else{
    		        	var materialNov=materialNo;
    		        	var oldBomPurpose=me.getConValue("oldBomPurpose");
    		        	var oldBrandNo=me.getConValue("oldBrandNo");
    		        	var billNo=me.view.billNo;
    		        	var tree = me.lookupReference('menutree');
    		    		var orderNo = tree.selection.data.orderNo;
    		    		var maintainType=me.getConValue("maintainType");
    		        	var newBomPurpose=me.getConValue("newBomPurpose");
    		        	var newBrandNo=me.getConValue("newBrandNo");
    		    		
    		        	Ext.Ajax.request({            
    		     		     url: Hc.mdmPath+'bill_bom_list/checkImportBillBom.json',    //请求地址    
    		     		     //提交参数组       
    		     		     params: {
    		     		    	 maintainType:maintainType, 
    		     		    	 oldBrandNo:oldBrandNo, 
    		     		    	 materialNo:materialNo, 
    		     		    	 oldBomPurpose:oldBomPurpose, 
    		     		    	 newBomPurpose:newBomPurpose, 
    		     		    	 newBrandNo:newBrandNo,
    		     		    	 billNo:billNo,
    		     		    	 orderNo:orderNo
    		     		     },
    		     		     //成功时回调       
    		     		     success: function(response, options) {       
    		     		        //获取响应的字符串
    		     		    	me.myMask.hide();
    		     		    	var result=response.responseText;
    		     		    	if (result!=""){
    		     		    		Hc.alert(result);
    		     		    		record.set("materialNo","");
    		     		    		record.set("materialCode","");
    		     		    		record.set("materialName","");
    		     		    		record.set("sizeTypeNo","");
    		     					return false;
    		     		    	}
    		     		     } 
    		        	});
    		    	}
    		    }  
	    	});
		}
    	
    	//输入序号验证
    	if(obj.field == 'orderNo') {
    		
    		var orderNo = record.get('orderNo');
    		if (obj.originalValue==orderNo){
    			return;
    		}
    		var billNo=record.get('billNo');
    		me.myMask = new Ext.LoadMask({
	    	    msg    : "正在查询和校验序号["+orderNo+"]...",
	    	    target : me.getView()
	    	});
    		me.myMask.show();
    		Ext.Ajax.request({            
    		     url: Hc.mdmPath+'bill_bom_list/checkBillOrderNo.json',    //请求地址    
    		     //提交参数组       
    		     params: {
    		    	 billNo:billNo,
    		    	 orderNo:orderNo
    		     },
    		     //成功时回调       
    		     success: function(response, options) {       
    		        //获取响应的字符串
    		    	me.myMask.hide();
    		    	var result=response.responseText;
    		    	if (result=="1"){
    		    		Hc.alert("该单据序号["+orderNo+"]已经存在或者主成品的序号默认为1,也不能使用!");
    		    		record.set("orderNo",obj.originalValue);
    					return false;
    		    	}
    		     } 
    		});
    	}
    },
    //判断序号有没有替代表
    onCheckSize:function(orderNo,storeSize){
    	var index= storeSize.findExact("orderNo", orderNo);
		if (index>=0) {
			return true;
		}
		else {
			return false;
		}
    },
    //替代表事件
    onBtnOther3:function(btn){
    	this.callParent(arguments);
    	var me=this;
        var objs = me.getObjList();
        if (!objs) return;
        var sizeTypeNo=me.getConValue("sizeTypeNo"); //表头码组
		var storeList = objs.mastergrid.store; //物料表数据
		var storeSize=objs.grid1.store; //尺码表数据
		if (storeList.getCount() < 0) return;
		for (var i = 0; i < storeList.getCount(); i++) 
		{
			var record = storeList.getAt(i);
			var orderNo=record.get("orderNo");
			var newSizeTypeNo=record.get("sizeTypeNo"); //清单码组
			if (newSizeTypeNo==""){
				Hc.alert("序号:["+orderNo+"]的码组为空,不能生成替代表!");
				continue;
			}
			//表头码组和清单码组不一样,加入到尺码表网格
			if (sizeTypeNo!=newSizeTypeNo){
				if (storeSize.getCount()>0){
		    		var index= storeSize.findExact("orderNo", orderNo);
		    		if (index>=0) continue;
		    	}
				me.addListSize(sizeTypeNo,record,storeSize);
			}
		}
    },
    //增加尺码替代表
    addListSize:function(sizeTypeNo,record,storeSize){
		var model = storeSize.model;
		var newObj = model.create({_flag: 'A'});
		newObj.data["billNo"] = record.get("billNo");
		newObj.data["orderNo"] = record.get("orderNo");
		newObj.data["materialNo"] = record.get("materialNo");
		newObj.data["materialCode"] = record.get("materialCode");
		newObj.data["materialName"] = record.get("materialName");
		newObj.data["sizeTypeNo"] = sizeTypeNo; //表头码组
		newObj.data["newSizeTypeNo"] = record.get("sizeTypeNo"); //清单码组
		storeSize.add(newObj);
    },
    //删除物料
    onBtnDeleteClick: function (btn) {
    	var me=this;
    	var obj = this.workObject;
    	
        var objs = me.getObjList();
		var storeList = objs.mastergrid.store; //物料表数据
		var storeSize=objs.grid1.store; //尺码表数据
		
		//删除物料网格
		if (obj.viewModelKey=="mastergrid"){
			items = obj.getSelection(); //选中的物料网格数据
	        if (items.length < 1) {
	        	this.callParent(arguments);
	        	return;
	        }
	        if (storeSize.getCount()<1) {
	        	this.callParent(arguments);
	        	return;
	        }
	        Ext.Array.each(items, function (record) {
	        	var _flag = record.get('_flag');
	        	var orderNo=record.get("orderNo");
	        	
	        	var index= storeSize.findExact("orderNo", orderNo);
	        	if (index>=0) {
	        		var recordSize=storeSize.getAt(index);
		        	
		        	//如果物料是直接新增的，尺码表直接删除
		            if (_flag == 'A') {
		            	storeSize.remove(recordSize);
		            }else{
		            	recordSize.set('_flag', 'D');
		            }
	        	}
	        });
		}
        this.callParent(arguments);
    },
    afterCall:function(txtobj, newdata,record,context) {
    	//alert("aaa");
    },
    //取消修改
    onBtnCancelClick: function (btn) {
    	var me=this;
        var objs = me.getObjList();
		var storeSize=objs.grid1.store; //尺码表数据
		storeSize.rejectChanges();
        this.callParent(arguments);
    },
    //增加物料事件，对替代表无效
    onBtnAddClick: function (btn) {
    	var me=this;
    	var obj = this.workObject;
    	if (obj.viewModelKey=="grid1"){
    		return;
    	}
    	this.callParent(arguments);
    }
  });
/**
 * Description: BOM单据物料清单表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-04-02 13:40:07
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billbomlist.BillBomListModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.billbomlist'
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmat.BillMat', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billmat',
	
	controller: 'billmat',
	viewModel: {
		type: 'billmat'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
				{xtype: 'textfield',name: 'materialType',fieldLabel: '物料类型',hidden:true,value:1}
			],
			gridColumns: [
				{
					dataIndex: 'maintainType', text: '维护类型',
					xtype:'bllookupedit',displayvalue:"0=新建:1=修改"
				},
				{
					dataIndex: 'materialType', text: '物料类型',
					xtype:'bllookupedit',displayvalue:"1=原料:2=半成品:3=成品"
				}
			],
			gridModel: 'Hc_mdm.model.BillMaterial',
			gridLoadUrl: Hc.mdmPath + 'bill_material/list.json',
			dtlName:'billmatdtl',
			showModel:'selftab'
		});
		me.callParent();
	}
});

/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeController
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmat.BillMatController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.billmat'
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billmat.BillMatModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.billmat'
  });
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
/**
 * Description: 物料单据表
 * bill_material/bill_material_dtl/bill_material_sizeController All rights
 * Reserved, Designed ByHc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 *
 * @author: zhuyuanh
 * @date: 2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmatdtl.BillMatDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.billmatdtl',

    gridEditingList: [],
    init: function () {
        this.callParent(arguments);
        var me = this,
            objlist = me.getObjList(),
            form = objlist['commonbill'],
            record = form.getRecord();
        if (objlist['mastergrid']) {
            objlist['mastergrid'].store.on('update', me.onBillGridDataChange, me);
            objlist['mastergrid'].store.on('datachanged', me.onBillGridDataChange, me);
        }

        //码组选择控制
        me.lookupReference('sizeTypeNo').on('beforequery', function () {
            var hasSizes = me.lookupReference('grid2').store.count();
            if (hasSizes > 0) {
                Hc.alert('请先删除[尺码明细]再更换码组');
            }
            return (hasSizes == 0)
        });

        me.setComponentReadOnly('tabpanel', true);
        if (me.lookupReference('brandNo')) { //品牌事件
            me.lookupReference('brandNo').on('select', 'onChangeBrandNo', me);
        }

        //款号
        me.gridEditingList = [];

        //初始化
        //objlist['mastergrid'].readOnly = true;
        me.lookupReference('btnOther1').setText('批量尺码');
        me.lookupReference('btnOther1').setHidden(false);

        if (!record) return;
        record.set('materialType', '1');
    },

    //复制记录
    beforeCopy:function(newObj){
        var me = this;
        var maintainType = me.lookupReference('maintainType').getValue();
        if(maintainType == 1){
            Hc.alert('维护类型为【修改】状态，不允许复制!');
            return false;
        }
        //申请物料编码
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
            method: 'GET',
            params: {
                billtypeNo: '12401002'
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0") {
                    var materialNo = result.sheetIdCode;
                    newObj.set('materialNo', materialNo);
                    newObj.set('materialCode', '待编码');

                    //处理序号
                    if (me.workObject.hasOrderNo) {
                        var ds = me.workObject.store,
                            orderNo = (ds.max('orderNo') || 0) + 1;
                        newObj.set('orderNo', orderNo);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '申请物料编号失败!');
                    return false;
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
        return true;
    },
    /**
     * 导入配码
     * @param btn
     */
    onBtnOther1: function (btn) {
        var me = this;

        var store = me.lookupReference('grid2').store;
        var materialNo = me.lookupReference('materialNo').value;
        var model = store.model;
        var sizeTypeNoValue = me.lookupReference('sizeTypeNo').value;
        var billNo = me.getObjList()['commonbill'].getRecord().get('billNo');

        if (Ext.isEmpty(sizeTypeNoValue)) {
            Hc.alert('请先输入码组!');
            return;
        }
        if(store.getCount() > 0){
            Hc.alert('尺码明细已经存在尺码，不允许导入!');
            return;
        }
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_size/listAll.json',
            method: 'GET',
            params: {
                sizeTypeNo: sizeTypeNoValue
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;

                    for (var i = 0; i < vRec.length; i++) {
                        var data = model.create(vRec[i]);
                        data.set('_flag', 'A');
                        data.set('sizeNo', vRec[i].sizeNo);
                        data.set('barcode', vRec[i].sizeNo);
                        data.set('materialNo', materialNo);
                        data.set('billNo', billNo);
                        store.add(data);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '没有找到码组为【' + sizeTypeNoValue + '】的信息!');
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
    },
    onBtnBillNewClick: function (btn){
        var me = this;
        me.callParent(arguments);

        me.lookupReference('btnOther1').setDisabled(false);
        me.lookupReference('materialType').setValue('1');
    },
    /**
     * 设置控件是否只读
     * @param component 控件本身
     * @param isReadOny 是否只读
     */
    setComponentReadOnly: function (componentName, isReadOny) {
        var me = this;
        if(!me.lookupReference(componentName) || !me.lookupReference(componentName).query){
            return;
        }
        var list = me.lookupReference(componentName).query('textfield,numberfield,datefield,combo');
        var billStatus = me.lookupReference('billStatus').value;

        if(billStatus && billStatus == '20'){ //单据审核，则只读
            me.lookupReference('btnOther1').setDisabled(true);
            me.lookupReference('materialNo').setReadOnly(true);
            me.lookupReference('maintainType').setReadOnly(true);
            return;
        }
        Ext.each(list, function (cmp) {
            if(cmp.name == 'currencyNo'){
                cmp.setReadOnly(true);
            }else{
                cmp.setReadOnly(isReadOny);
            }
        });
    },
    /*从写保存之后方法*/
    afterSave: function (result, options) {
        var me = this;
        me.callParent(arguments);
        //me.lookupReference('grid2').view.refresh();
        me.setComponentReadOnly('tabpanel', true);
    },

    //品牌带出特征码
    onChangeBrandNo: function (obj, newval) {
        this.setSpecialCodeValue(null, null);
    },
    //面板大类联动小类
    onChangeParentCategoryNo: function (obj, newval) {
        var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
        var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
        var categoryNoCom = this.lookupReference('categoryNo');
        if (parentCategoryNo) {
            categoryNoCom.setValue('');
            //通过parentCategoryCode找到parentCategoryId
            var index = parentCategoryNoCom.store.findBy(function (record, id) {
                return record.get('categoryNo') == parentCategoryNo;
            });
            var record = parentCategoryNoCom.store.getAt(index);
            var parentCategoryId = record.get('categoryNo');

            categoryNoCom.store.proxy.extraParams['categoryNo'] = parentCategoryId;
            categoryNoCom.store.load();
        }
    },

    onChangeCategory: function (obj, newval, oldval) {
        var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
        if (!parentCategoryNo) {
            obj.setValue('');
            Ext.Msg.alert('提示', '请先选择大类');
            return false;
        }
    },

    //面板型体联动款号
    onChangeModelNo: function (obj, newval) {
        var modelNo = this.lookupReference('modelNo').getValue();
        var styleNoCom = this.lookupReference('styleNo');
        if (modelNo) {
            styleNoCom.setValue('');
            styleNoCom.store.proxy.extraParams['modelNo'] = modelNo;
            styleNoCom.store.load();
            //所选网格的款号也致空
            var row = this.lookupReference('mastergrid').getSelection()[0];
            row.set('styleNo', '')
        }
    },

    onChangeStyleNo: function (obj, newval, oldval) {
        var modelNo = this.lookupReference('modelNo').getValue();
        if (!modelNo) {
            obj.setValue('');
            //所选网格的款号也致空
            var row = this.lookupReference('mastergrid').getSelection()[0];
            row.set('styleNo', '');
            Ext.Msg.alert('提示', '请先选择型体');
            return false;
        }
    },

    /* grid编辑之前(联动控制) */
    onGridBeforeEdit: function (sender, e) {
        if (this.gridCannotEditKeyField(e) === false) return false;
        //大类联动小类
        if (e.field == 'categoryNo') {
            var record = e.record;
            var newparentCategoryNo = record.get('parentCategoryNo');
            var categoryNo = record.get('categoryNo');
            if (newparentCategoryNo == '') {
                Ext.Msg.alert('提示', '请先选择大类');
                return false;
            }
            else {
                var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
                //通过parentCategoryCode找到parentCategoryId
                var ind = parentCategoryNoCom.store.findBy(function (record, id) {
                    return record.get('categoryNo') == newparentCategoryNo;
                });
                var rec = parentCategoryNoCom.store.getAt(ind);
                var newparentCategoryId = rec.get('categoryId');

                var store = e.column.getEditor().store;
                var oldparentCategoryId = store.proxy.extraParams['parentCategoryId'];

                //通过parentCategoryId找到parentCategoryCode
                var index = parentCategoryNoCom.store.findBy(function (record, id) {
                    return record.get('categoryId') == oldparentCategoryId;
                });
                var record = parentCategoryNoCom.store.getAt(index);
                var oldparentCategoryNo = null;
                if (record) {
                    oldparentCategoryNo = record.get('categoryNo');
                }
                store.proxy.extraParams.parentCategoryId = newparentCategoryId;
                store.on("load", function () {
                    e.column.getEditor().setValue(categoryNo);
                });
                store.load();
            }
        }

        //型体联动款号
        if (e.field == 'styleNo') {
            var record = e.record;
            var newmodelNo = record.get('modelNo');
            var styleNo = record.get('styleNo');
            if (newmodelNo == '') {
                Ext.Msg.alert('提示', '请先选择型体');
                return false;
            }
            else {
                var store = e.column.getEditor().store;
                var oldmodelNo = store.proxy.extraParams['modelNo'];
                if (newmodelNo != oldmodelNo) {
                    store.proxy.extraParams.modelNo = newmodelNo;
                    store.on("load", function () {
                        e.column.getEditor().setValue(styleNo);
                    });
                    store.load();
                }
            }
        }

    },

    /*新增单据
     onBtnBillNewClick: function (btn) {
     var me=this;
     me.callParent(arguments);
     //me.lookupReference('materialType').setValue(0);
     },*/

    /*保存按钮状态
     gridDataChanged: function (store, grid)
     {
     var me=this;
     me.callParent(arguments);
     me.lookupReference('btnBillSave').setDisabled(me.lookupReference('btnSave').disabled);
     },*/

    /*控制主从输入*/
    initAddData: function (newobj) {
        var me = this,
            objlist = me.getObjList(),
            obj = me.workObject;

        //调用父类initAddData方法，产生序列号
        if (me.callParent(arguments) === false) return false;

        if (me.lookupReference('maintainType').getValue() == '') {
            Hc.alert('请先选择[维护类型]');
            return false;
        }

        if (obj.viewModelKey == "mastergrid" && me.gridEditingList.length > 0) {
            Hc.alert('有一笔数据正在编辑，不能新增主表记录');
            return false;
        }
        me.lookupReference('maintainType').setReadOnly(true);
        if (obj.viewModelKey == "mastergrid") {
            var maintainType = me.lookupReference('maintainType').value;
            if (maintainType == 1) {
                return;
            }
            Ext.Ajax.request({
                url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
                method: 'GET',
                params: {
                    billtypeNo: '12401501'
                },
                success: function (response) {
                    var result = JSON.parse(response.responseText);
                    if (result.result.resultCode == "0") {
                        var materialNo = result.sheetIdCode;
                        newobj.set('materialNo', materialNo);
                        newobj.set('materialCode', '待编码');
                        newobj.set('currencyNo', 'RMB');//默认币别-人民币
                    } else {
                        newobj.set('materialCode', '待编码');
                        Ext.MessageBox.alert('提示', '申请物料编号失败!');
                    }
                },
                failure: function (response, opt) {
                    Ext.MessageBox.show({
                        title: '错误提示',
                        msg: response.responseText,
                        height: 300,
                        width: 400
                    });
                }
            });
        }
        if (obj.supGrid) {
            var item = objlist[obj.supGrid].getSelection()[0];
            if (!item) {
                Hc.alert('主表没有选中记录时，从表不能新增记录');
                return false;
            }
            if (me.lookupReference('maintainType').getValue() == '1' &&
                (me.lookupReference('billNo').getValue() == '' || me.lookupReference('billNo').getValue() == '0')) {
                Hc.alert('请先填写[物料编号]或者[物料编码]');
                return false;
            }
            if (!item.phantom) {
                var idField = objlist[obj.supGrid].primaryKey;
                newobj.set(idField, item.get(idField));
            }
            newobj.set('materialNo', item.get('materialNo'));
        }
    },

    /*grid更新数据时*/
    onBillGridDataChange: function (store) {
        var me = this,
            reference = 'mastergrid',
            idx = me.getDirtyIndex(store);
        if (idx > -1) {
            Ext.Array.include(me.gridEditingList, reference);
        } else {
            Ext.Array.remove(me.gridEditingList, reference);
        }
    },

    /*选择变化之后*/
    onGridSelectionChange: function (sender, e, index, eOpts) {
        var me = this;
        me.callParent(arguments);

        if (me.lookupReference('mastergrid').getSelection() && me.lookupReference('mastergrid').getSelection().length > 0) {
            me.setComponentReadOnly('tabpanel', false); //设置控件不只读
            //查询配码信息

            var billStatus = me.lookupReference('billStatus').value;
            if(billStatus < 20){
                me.lookupReference('materialNo').setReadOnly(me.lookupReference('maintainType').getValue() == "0");
            }
        }
        else {
            me.setComponentReadOnly('tabpanel', true);
        }
        if (me.lookupReference('mastergrid').store.getCount() <= 0) {
            me.lookupReference('maintainType').setReadOnly(false);
        }else{
            me.lookupReference('maintainType').setReadOnly(true);
        }
    },

    onGrid2BeforeLoad:function(store,ops){
		if(this.callParent(arguments)===false) return false;
		var row= this.lookupReference('mastergrid').getSelection()[0];
		if(row){
			store.proxy.extraParams['materialNo']=	row.get('materialNo');
		}
	},

    /**
     * 获取配码明细
     */
    getSizeNos: function () {
        var me = this,
            grid = me.getObjList()['grid2'],
            store = grid.store,
            model = store.model;
        var sizeTypeNo = me.lookupReference('sizeTypeNo').value;

        //加载配码
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bill_material_size/listAll.json',
            method: 'GET',
            params: {
                basSizeType: sizeTypeNo
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;

                    for (var i = 0; i < vRec.length; i++) {
                        var _materialModel = model.create(vRec[i]);
                        store.add(_materialModel);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '配码明细加载不正确!');
                }
            },
            failure: function (response) {
                Hc.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 500
                });
            }
        });
    },

    beforeSave : function(params){
        var me  = this;
        me.callParent(arguments);
        if (!(me.getObj('editMaterialInfo').isValid())) return false;

        var store = me.getObjList()['mastergrid'].store;
        var isValSucc = true;
        var chima = true;
        //处理待编码规则
        for(var i = 0 ; i < store.getCount(); i++){
            var materialCode = store.getAt(i).get('materialCode');
            var advicePrice = store.getAt(i).get('advicePrice');
            if(advicePrice <= 0){
                isValSucc = false;
                break;
            }

            if(materialCode == '待编码'){
                var materialNo = store.getAt(i).get('materialNo');
                store.getAt(i).set('materialCode',materialNo);
            }
        }
        if(isValSucc == false){
            Hc.alert('参考单价必须大于零!');
            return false;
        }

        //尺码判断
        var grid2Store = me.getObjList()['grid2'].store,
            sizeTypeStore = me.lookupReference('sizeTypeNo').store,
            sizeTypeNo = me.lookupReference('sizeTypeNo').getValue(),
            sizeTypeModel = sizeTypeStore.getAt(sizeTypeStore.findExact('sizeTypeNo',sizeTypeNo));

        if(sizeTypeModel && sizeTypeModel.get('sizeTypeName') == '无尺码'){
            return true;
        }else{
            if(grid2Store.getCount() <= 0){
                Hc.alert('请录入尺码明细!');
                return false;
            }
        }
        return true;
    },
    /* grid编辑之后 */
    onGridAfterEdit: function (editor, e) {
        var me = this;
        //验证输入的是否所选码组下的配码
        if (e.field == 'productCode') {
            onProdTxtAfterEdit(null, null);
        }
        //品牌带出特征码
        if (e.field == 'brandNo') {
            me.setSpecialCodeValue(editor, e)
        }
        //大类联动小类
        if (e.field == 'parentCategoryNo') {
            var oldparentCategoryNo = e.originalValue;
            var newparentCategoryNo = e.value;
            if (oldparentCategoryNo != newparentCategoryNo) {
                var record = e.record;
                record.set('categoryNo', '');
            }

        }
        //型体联动款号
        if (e.field == 'modelNo') {
            var oldmodelNo = e.originalValue;
            var newmodelNo = e.value;
            if (oldmodelNo != newmodelNo) {
                var record = e.record;
                record.set('styleNo', '');
            }

        }

        this.checkKeyValue(e);
    },

    setSpecialCodeValue: function (editor, obj) {
        var store = Ext.create('Hc_Common.store.Base', {
            fields: ["brandCategory", "brandCname", "brandCode", "brandNo", "specialCode"],
            proxy: {
                url: Hc.mdmPath + "bas_brand/listAll.json"
            }
        });
        if (obj == null) {
            store.proxy.extraParams['brandNo'] = this.lookupReference('brandNo').getValue();
            store.reload({
                scope: this,
                callback: function (recs, oper, suc) {
                    if (recs.length > 0) {
                        this.lookupReference('specialCode').setValue(recs[0].data['specialCode']);
                        var row = this.lookupReference('mastergrid').getSelection()[0];
                        row.set('specialCode', recs[0].data['specialCode'])
                    }
                }
            });
        }
        else {
            var record = obj.record;
            var row = this.lookupReference('mastergrid').getSelection()[0];
            store.proxy.extraParams['brandNo'] = record.get('brandNo');
            store.reload({
                scope: this,
                callback: function (recs, oper, suc) {
                    if (recs.length > 0) {
                        record.set('specialCode', recs[0].data['specialCode']);
                    }
                    else {
                        record.set('brandNo', "");
                        record.set('specialCode', "");
                        Hc.alert("不存在此品牌");
                        return;
                    }
                }
            });
        }
    },

    /**
     * 验证配码是否存在
     * @param editor
     * @param obj
     */
    onGrid2AfterEdit: function (editor, obj) {
        var me = this;
        if (obj.field == 'sizeNo') {
            var oldSizeNo = obj.originalValue,
                newSizeNo = obj.value;

            if (newSizeNo) {
                me.checkSizeNo(oldSizeNo, newSizeNo, obj);
            }
        }
        this.checkKeyValue(obj);
    },
    /**
     * 网格数据加载
     * @param store
     * @param records
     * @param isOk
     * @param options
     */
    onGridLoaded: function (store, records, isOk, options){
        var me = this,
            store = me.getObjList()['mastergrid'].store;
        me.callParent(arguments);

        if(store && store.getCount() > 0){
            me.lookupReference('maintainType').setReadOnly(true);
        }else{
            me.lookupReference('maintainType').setReadOnly(false);
        }
    },
    /**
     * 验证配码
     * @param oldSizeNo 配码旧值
     * @param strSizeNo 配码新值
     * @param obj 对象
     */
    checkSizeNo: function (oldSizeNo, strSizeNo, obj) {
        var slRecord = obj.record;
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_size/listAll.json',
            method: 'GET',
            params: {
                sizeNo: strSizeNo
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;
                    slRecord.set('barcode', strSizeNo);
                } else {
                    slRecord.set('sizeNo', oldSizeNo);
                    Ext.MessageBox.alert('提示', '尺码不存在!');
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
    }
});
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billmatdtl.BillMatDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.billmatdtl'
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterial.BillMaterial', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billmaterial',
	
	controller: 'billmaterial',
	viewModel: {
		type: 'billmaterial'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
				{xtype: 'textfield',name: 'materialType',fieldLabel: '物料类型',hidden:true,value:3}
                          //{xtype: 'extcombox',name: 'materialType', fieldLabel: '物料类型',displayvalue:"0=成品/半成品",value:0,readOnly : true, hideTrigger : true,hidden:true},
						  //{xtype: 'textfield',name: 'billNo',fieldLabel: '单据编号',hidden:true}
						/*
						  {xtype: 'textfield',name: 'creator',fieldLabel: '建档人',hidden:true},
						  {xtype: 'textfield',name: 'auditor',fieldLabel: '审核人',hidden:true},
						  {
								xtype: 'bldatetime',
								fieldLabel: '建档时间',
								name: 'createFromTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'createToTime', // 被比较的输入框控件name
								compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
						  },{
								xtype: 'bldatetime',
								fieldLabel: '   到     ',
								name: 'createToTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'createFromTime', // 被比较的输入框控件name
								compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
						  },
						  {
								xtype: 'bldatetime',
								fieldLabel: '审核时间',
								name: 'auditFromTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'auditToTime', // 被比较的输入框控件name
								compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
							},{
								xtype: 'bldatetime',
								fieldLabel: '   到     ',
								name: 'auditToTime',
								vtype:'compareTo',     //数据验证方式，compareTo
								compareTo:'auditFromTime', // 被比较的输入框控件name
								compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
								compareError:'结束日期不能小于开始日期', //比较不通过时，返回提示信息
								hidden:true
							}
						  {xtype: 'extcombox',name: 'billStatus',fieldLabel: '单据状态',displayvalue:"0=编辑:1=审核",hidden:true}
						  */
						],
			gridColumns: [

				//{dataIndex: 'billNo', text: '单据号', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'maintainType', text: '维护类型', xtype:'bllookupedit',displayvalue:"0=新建:1=修改" },
				{dataIndex: 'materialType', text: '物料类型', xtype:'bllookupedit',displayvalue:"1=原料:2=半成品:3=成品"}
				/*{dataIndex: 'operator', text: '操作人', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'createTime', text: '建档时间',readOnly:true,width:140,hidden:true},
				{dataIndex: 'auditor', text: '审核人', editor: {allowBlank: false},hidden:true},
				{dataIndex: 'auditTime', text: '审核时间',readOnly:true,width:140,hidden:true},
				{dataIndex: 'billStatus', text: '单据状态', editor: {allowBlank: false},xtype:"bllookupedit",displayvalue:"0=编辑:1=审核",hidden:true},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false},hidden:true}
				*/
			],
			gridModel: 'Hc_mdm.model.BillMaterial',
			gridLoadUrl: Hc.mdmPath + 'bill_material/list.json',
			dtlName:'billmaterialdtl',
			showModel:'selftab'
		});
		me.callParent();
	}
});

/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeController
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterial.BillMaterialController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.billmaterial'
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billmaterial.BillMaterialModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.billmaterial'
  });
/**
 * Description: 物料单据表-->成品 bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialdtl.BillMaterialDtl', {
    extend: 'Hc_Common.view.BaseBillDetailPage',
    alias: 'widget.billmaterialdtl',
    
    controller: 'billmaterialdtl',
    viewModel: {
        type: 'billmaterialdtl'
    },

    initComponent: function () {
        var me = this,
        //型体联动款号
           // modelEStore = Ext.create('Hc_mdm.store.BasModel'),
            //modelGStore = Ext.create('Hc_mdm.store.BasModel'),
            //styleEStore = Ext.create('Hc_mdm.store.BasStyle'),
            //styleGStore = Ext.create('Hc_mdm.store.BasStyle'),
        //大类联动小类
            parentCategoryEStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            parentCategoryGStore = Ext.create('Hc_mdm.store.BasParentCategory'),
            categoryEStore = Ext.create('Hc_mdm.store.BasCategory'),
            categoryGStore = Ext.create('Hc_mdm.store.BasCategory');
            parentCategoryEStore.proxy.extraParams['materialType'] = 3;
            parentCategoryGStore.proxy.extraParams['materialType'] = 3;

        Ext.apply(me, {
            billType: '124005',
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
                    canInput: false
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
                //{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: false,editable:false},hidden:true},
                //{dataIndex: 'billNo', text: '单据号', editor: {allowBlank: true},hidden:true},
                {dataIndex: 'lineId', text: '行id', editor: {allowBlank: false}, hidden: true},
                {dataIndex: 'materialNo', text: '物料ID'},
                {dataIndex: 'materialCode', text: '物料编码'},
                {
                    dataIndex: 'materialName', text: '物料名称', hidden: false,
                    width: 140
                },
                {dataIndex: 'barcodeEan', text: '国际条码', editor: {allowBlank: true}, hidden: true},
                {
                    dataIndex: 'brandNo', text: '品牌',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                    displaymember: 'brandEname',
                    valuemember: 'brandNo',
                    readOnly: true
                },
                {dataIndex: 'specialCode', text: '特征码'},
                {
                    dataIndex: 'sizeTypeNo', text: '码组',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json',
                    displaymember: 'sizeTypeName',
                    valuemember: 'sizeTypeNo',
                    hidden: false, readOnly: true
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
                    dataIndex: 'colorNo', text: '颜色',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_color/listAll.json',
                    displaymember: 'colorName',
                    valuemember: 'colorCode',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'seasonNo', text: '年季',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    hidden: false,
                    readOnly: true
                },
                {
                    dataIndex: 'modelNo', text: '型体'
                   // xtype:'textfield'
                    //xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bas_model/listAll.json',
                    //estore: modelEStore,
                    //gstore: modelGStore,
                    //displaymember: 'modelName',
                    //valuemember: 'modelNo',
                    //hidden: false,
                    //readOnly: true
                },
                {
                    dataIndex: 'styleNo', text: '款号'
                    //xtype:'textfield'
                    //xtype: 'bllookupedit',
                    //displayvalue:Hc.mdmPath+'bas_style/listAll.json',
                    //estore: styleEStore,
                    //gstore: styleGStore,
                    //displaymember: 'styleName',
                    //valuemember: 'styleNo',
                    //readOnly: true
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
                /*{
                 dataIndex: 'supplyCategoryNo', text: '供货类别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_supply_category/listAll.json',
                 displaymember: 'categoryName',
                 valuemember: 'categoryNo',
                 editor: {allowBlank: true}, hidden: true
                 },*/

                //{dataIndex: 'specifications', text: '规格型号', editor: {allowBlank: true}, hidden: true},
                {dataIndex: 'oldCode', text: '旧物料编码'},
                /*{
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
                {
                    dataIndex: 'taxRateNo', text: '税率',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                    displaymember: 'taxRateName',
                    valuemember: 'taxRateNo',
                    readOnly: true
                },
                /*{
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
                 },*/
                {dataIndex: 'advicePrice', text: '参考单价', editor: {allowBlank: false}, hidden: true},
                {
                    dataIndex: 'currencyNo', text: '币别',
                    xtype: 'bllookupedit',
                    displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                    displaymember: 'currencyName',
                    valuemember: 'currencyNo',
                    editor: {allowBlank: false}, hidden: true
                },
                {dataIndex: 'productCode', text: '客户产品货号'},
                /*{
                 dataIndex: 'manufacturer', text: '制造商',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },*/
                //{dataIndex: 'developmentTimes', text: '开发次数', editor: {allowBlank: false}, hidden: true},
                /*{
                 dataIndex: 'lining', text: '里料',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=lining',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {dataIndex: 'insoles', text: '衬里/内垫', editor: {allowBlank: true}, hidden: true},
                 {dataIndex: 'outerBottom', text: '外底', editor: {allowBlank: true}, hidden: true},
                 {
                 dataIndex: 'style', text: '风格',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=style',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'salesChannels', text: '销售类型',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: false}, hidden: true
                 },
                 {dataIndex: 'vampMaterial', text: '帮面材料', editor: {allowBlank: true}, hidden: true},
                 {
                 dataIndex: 'genderType',
                 text: '男/女鞋',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "F=女:M=男",
                 hidden: true
                 },
                 {
                 dataIndex: 'series', text: '系列',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=series',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'joinOrderMetting',
                 text: '是否参加订货会',
                 editor: {allowBlank: false},
                 xtype: 'bllookupedit',
                 displayvalue: "0=否:1=是",
                 hidden: true
                 },
                 {
                 dataIndex: 'textures', text: '材质类别',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=textures',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: false}, hidden: true
                 },

                 {
                 dataIndex: 'purchaseUnit', text: '采购单位',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                 displaymember: 'unitName',
                 valuemember: 'unitNo',
                 editor: {allowBlank: true}, hidden: true
                 },
                 {
                 dataIndex: 'purchaseGroup', text: '采购组',
                 xtype: 'bllookupedit',
                 displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=purchaseGroup',
                 displaymember: 'itemName',
                 valuemember: 'itemCode',
                 editor: {allowBlank: true}, hidden: true
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

        var editMaterialInfo = {
            //title : '物料明细',
            xtype: 'form',
            reference: 'editMaterialInfo',
            //layout:{type:'table',columns:4,align:'center'},
            layout: {type: 'table', columns: 4},
            //defaults:{ labelAlign:'right',labelWidth:100,width:250,pading:5,margin:5},
            defaults: {labelAlign: 'right', labelWidth: 80, width: '100%'},
            collapsible: false,
            border: false,

            items: [
                {
                    xtype: 'textfield', fieldLabel: '行id',
                    bind: {value: '{gridRow.lineId}'}, hidden: true
                },
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
                    xtype: 'textfield',
                    reference: 'materialCode',
                    fieldLabel: '物料编码',
                    bind: {value: '{gridRow.materialCode}'},
                    allowBlank: false,
                    emptyText: '待编码',
                    name: 'materialCode'
                },
                {
                    xtype: 'textfield', reference: 'materialName', fieldLabel: '物料名称',
                    bind: {value: '{gridRow.materialName}'}, allowBlank: false,
                    colspan: 2, enforceMaxLength: true
                },
                {
                    xtype: 'textfield', reference: 'barcodeEan', fieldLabel: '国际条码',
                    bind: {value: '{gridRow.barcodeEan}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'brandNo', fieldLabel: '品牌',
                    displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                    displaymember: 'brandEname',
                    valuemember: 'brandNo',
                    bind: {value: '{gridRow.brandNo}'}, allowBlank: false
                },
                {
                    fieldLabel: '特征码', canInput: false, xtype: 'textfield',
                    bind: {value: '{gridRow.specialCode}'}, reference: 'specialCode',
                    canInput: false, name: 'specialCode'
                },
                {
                    xtype: 'extcombox', reference: 'sizeTypeNo', fieldLabel: '码组',
                    displayvalue: Hc.mdmPath + 'bas_size_type/listAll.json',
                    displaymember: 'sizeTypeName',
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
                    bind: {value: '{gridRow.parentCategoryNo}'}, allowBlank: false
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
                    xtype: 'extcombox', reference: 'colorNo', fieldLabel: '颜色',
                    displayvalue: Hc.mdmPath + 'bas_color/listAll.json',
                    displaymember: 'colorName',
                    valuemember: 'colorCode',
                    bind: {value: '{gridRow.colorNo}'},
                    allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'seasonNo', fieldLabel: '年季',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.seasonNo}'}, allowBlank: false
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
                }
                /*{
                 xtype : 'combo',
                 fieldLabel : '款号',
                 name : 'styleNo',
                 reference: 'styleNo',
                 editable:false,
                 displayField:'styleName',
                 valueField:'styleNo',
                 emptyText:"请先选择型体",
                 store:{
                 type:'basestore',
                 fields:['styleNo','styleName'],
                 proxy:{
                 url:Hc.mdmPath+'bas_style/listAll.json'
                 },
                 autoLoad: true,
                 listeners:{
                 beforequery:function(){
                 if(!me.lookupReference('modelNo').getValue()){
                 Ext.Msg.alert('提示','请先选择型体');
                 return false
                 }}
                 }

                 },
                 listeners:{
                 'select': 'onChangeStyleNo'
                 },
                 bind : {value : '{gridRow.styleNo}'},allowBlank:false
                 }*/,
                /*{
                    xtype: 'combo',
                    fieldLabel: '型体',
                    name: 'modelNo',
                    reference: 'modelNo',
                    editable: false,
                    displayField: 'modelName',
                    valueField: 'modelNo',
                    store: modelEStore,
                    renderer: function (value) {
                        var index = modelEStore.findExact('modelNo', value);
                        return index > -1 ? modelEStore.getAt(index).data.modelName : value;
                    },
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
                    xtype: 'extcombox', reference: 'lining', fieldLabel: '里料',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=lining',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.lining}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'manufacturer', fieldLabel: '制造商',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=manufacturer',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.manufacturer}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'genderType', fieldLabel: '男/女鞋',
                    bind: {value: '{gridRow.genderType}'}, displayvalue: "F=女:M=男", allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'style', fieldLabel: '风格',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=style',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.style}'}, allowBlank: false
                },

                {
                    xtype: 'extcombox', reference: 'series', fieldLabel: '系列',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=series',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.series}'}, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'vampMaterial', fieldLabel: '帮面材料',
                    bind: {value: '{gridRow.vampMaterial}'},
                    maxLength: 255, enforceMaxLength: true, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'insoles', fieldLabel: '衬里/内垫',
                    bind: {value: '{gridRow.insoles}'}, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'outerBottom', fieldLabel: '外底',
                    bind: {value: '{gridRow.outerBottom}'},
                    maxLength: 40, enforceMaxLength: true, allowBlank: false
                },

                {
                    xtype: 'extcombox', reference: 'textures', fieldLabel: '材质类别',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=textures',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.textures}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'salesChannels', fieldLabel: '销售类型',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=sales_channels',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.salesChannels}'}, allowBlank: false,
                    name: 'salesChannels'
                },
                {
                    xtype: 'textfield', reference: 'productCode', fieldLabel: '客户产品货号',
                    bind: {value: '{gridRow.productCode}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入20位字母或数字',
                    maxLength: 20,
                    enforceMaxLength: true, allowBlank: true
                },
                {
                    xtype: 'extcombox', reference: 'normalUnit', fieldLabel: '基本单位',
                    displayvalue: Hc.mdmPath + 'bas_unit/listAll.json',
                    displaymember: 'unitName',
                    valuemember: 'unitNo',
                    bind: {value: '{gridRow.normalUnit}'}, allowBlank: false
                },

                {
                    xtype: 'extcombox', reference: 'materialSource', fieldLabel: '物料属性',
                    displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=material_source',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
                    bind: {value: '{gridRow.materialSource}'}, allowBlank: false
                },
                {
                    xtype: 'numberfield', reference: 'advicePrice', fieldLabel: '参考单价',
                    bind: {value: '{gridRow.advicePrice}'}, allowBlank: false
                },
                {
                    xtype: 'textfield', reference: 'specifications', fieldLabel: '规格型号',
                    bind: {value: '{gridRow.specifications}'}, allowBlank: true,
                    maxLength: 30,
                    enforceMaxLength: true
                },
                {
                    xtype: 'extcombox', reference: 'taxRateNo', fieldLabel: '税率',
                    displayvalue: Hc.mdmPath + 'bas_tax_rate/listAll.json',
                    displaymember: 'taxRateName',
                    valuemember: 'taxRateNo',
                    bind: {value: '{gridRow.taxRateNo}'}, allowBlank: false
                },

                {
                    xtype: 'textfield', reference: 'oldCode', fieldLabel: '旧物料编码', bind: {value: '{gridRow.oldCode}'},
                    regex: /^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
                    regexText: '请输入30位字母或数字',
                    maxLength: 30,
                    enforceMaxLength: true
                },
                {
                    xtype: 'numberfield', reference: 'developmentTimes', fieldLabel: '开发次数',
                    bind: {value: '{gridRow.developmentTimes}'}, allowBlank: false
                },
                {
                    xtype: 'extcombox', reference: 'currencyNo', fieldLabel: '币别',
                    displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                    displaymember: 'currencyName',
                    valuemember: 'currencyNo',
                    bind: {value: '{gridRow.currencyNo}'},
                    canInput: false,
                    name: 'currencyNo'
                },
                /*
                 {
                 xtype: 'extcombox', reference: 'codeRuleNo', fieldLabel: '编码规则', allowBlank: false,
                 displayvalue: Hc.mdmPath + 'bas_bill_type/listAll.json?remarks=material',
                 displaymember: 'billTypeName',
                 valuemember: 'billTypeNo',
                 bind: {value: '{gridRow.codeRuleNo}'}
                 },*/
                /*{
                 xtype : 'textfield',reference:'orderNo',fieldLabel : '排列序号',
                 bind : {value : '{gridRow.orderNo}'},allowBlank:false,editable:false,
                 maxLength : 11,
                 enforceMaxLength : true
                 },*/

                /*
                 {xtype : 'extcombox',reference:'supplyCategoryNo',fieldLabel : '供货类别',
                 displayvalue:Hc.mdmPath+'bas_supply_category/listAll.json',
                 displaymember:'categoryName',
                 valuemember:'categoryNo',
                 bind : {value : '{gridRow.supplyCategoryNo}'}},*/
                /*
                 {xtype : 'extcombox',reference : 'inventoryCategory',fieldLabel : '存货类别',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=inventory_category',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.inventoryCategory}'},hidden:true},
                 {xtype : 'extcombox',reference : 'taxCategory',fieldLabel : '税种',
                 displayvalue:Hc.mdmPath+'bas_tax_category/listAll.json',
                 displaymember:'taxCategoryName',
                 valuemember:'taxCategoryNo',
                 bind : {value : '{gridRow.taxCategory}'},hidden:true},*/
                /*{xtype : 'checkbox',reference:'allowSale',fieldLabel : '允许销售',bind : {value : '{gridRow.allowSale}'}},
                 {xtype : 'checkbox',reference:'allowDelegate',fieldLabel : '允许委外',bind : {value : '{gridRow.allowDelegate}'}},//
                 {xtype : 'checkbox',reference:'allowPurchase',fieldLabel : '允许采购',bind : {value : '{gridRow.allowPurchase}'}},
                 {xtype : 'checkbox',reference:'allowProduce',fieldLabel : '允许生产',bind : {value : '{gridRow.allowProduce}'}},
                 {xtype : 'checkbox',reference:'materialStatus',fieldLabel : '物料状态',bind : {value : '{gridRow.materialStatus}'}},
                 {xtype : 'checkbox',reference:'enableFlag',fieldLabel : '启用状态',bind : {value : '{gridRow.enableFlag}'}},*/
                /*{name: 'allowSale',bind:{value:'{gridRow.allowSale}'},reference : 'allowSale', xtype: 'extcombox', fieldLabel: '允许销售',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'allowDelegate',bind:{value:'{gridRow.allowDelegate}'},reference : 'allowDelegate', xtype: 'extcombox', fieldLabel: '允许委外',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'allowPurchase',bind:{value:'{gridRow.allowPurchase}'},reference : 'allowPurchase', xtype: 'extcombox', fieldLabel: '允许采购',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'allowProduce',bind:{value:'{gridRow.allowProduce}'},reference : 'allowProduce', xtype: 'extcombox', fieldLabel: '允许生产',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 {name: 'materialStatus',bind:{value:'{gridRow.materialStatus}'},reference : 'materialStatus', xtype: 'extcombox', fieldLabel: '物料状态',displayvalue:"0=模板:1=释放",allowBlank:false,hidden:true},
                 {name: 'enableFlag',bind:{value:'{gridRow.enableFlag}'},reference : 'enableFlag', xtype: 'extcombox', fieldLabel: '启用状态',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},
                 */
                //{xtype : 'checkbox',reference:'joinOrderMetting',fieldLabel : '是否参加订货会',bind : {value : '{gridRow.joinOrderMetting}'}},
                //{name: 'joinOrderMetting',bind:{value:'{gridRow.joinOrderMetting}'},reference : 'joinOrderMetting', xtype: 'extcombox', fieldLabel: '是否参加订货会',displayvalue:"0=否:1=是",allowBlank:false,hidden:true},

                /*{xtype : 'extcombox',reference:'purchaseUnit',fieldLabel : '采购单位',
                 displayvalue:Hc.mdmPath+'bas_unit/listAll.json',
                 displaymember:'unitName',
                 valuemember:'unitNo',
                 bind : {value : '{gridRow.purchaseUnit}'}},
                 {xtype : 'extcombox',reference : 'purchaseGroup',fieldLabel : '采购组',
                 displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=purchaseGroup',
                 displaymember:'itemName',
                 valuemember:'itemCode',
                 bind : {value : '{gridRow.purchaseGroup}'},hidden:true},*/

                {
                    xtype: 'textfield', reference: 'remarks', fieldLabel: '备注', bind: {value: '{gridRow.remarks}'},
                    maxLength: 60, colspan: 3,
                    enforceMaxLength: true
                }
            ]
        };
        editMaterialInfo.layout.columns = 4;

        var bottomtabpanel = {
            xtype: "tabpanel",
            reference: "tabpanel",
            region: 'south',
            height: 280,
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

/**
 * Description: 物料单据表
 * bill_material/bill_material_dtl/bill_material_sizeController All rights
 * Reserved, Designed ByHc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 *
 * @author: zhuyuanh
 * @date: 2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialdtl.BillMaterialDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.billmaterialdtl',
    gridEditingList: [],
    init: function () {
        this.callParent(arguments);
        var me = this,
            objlist = me.getObjList(),
            form = objlist['commonbill'],
            record = form.getRecord();
        if (objlist['mastergrid']) {
            objlist['mastergrid'].store.on('update', me.onBillGridDataChange, me);
            objlist['mastergrid'].store.on('datachanged', me.onBillGridDataChange, me);
        }

        //码组选择控制
        me.lookupReference('sizeTypeNo').on('beforequery', function () {
            var hasSizes = me.lookupReference('grid2').store.count();
            if (hasSizes > 0) {
                Hc.alert('请先删除[尺码明细]再更换码组');
            }
            return (hasSizes == 0)
        });

        //初始加载,全部设置只读
        me.setComponentReadOnly('tabpanel', true);
        if (me.lookupReference('brandNo')) { //品牌事件
            me.lookupReference('brandNo').on('select', 'onChangeBrandNo', me);
        }

        //款号
        me.gridEditingList = [];

        //初始化
        //objlist['mastergrid'].readOnly = true;
        me.lookupReference('btnOther1').setText('批量尺码');
        me.lookupReference('btnOther1').setHidden(false);

        if (!record) return;
        record.set('materialType', '3');
    },
//复制记录
    beforeCopy:function(newObj){
        var me = this;
        var maintainType = me.lookupReference('maintainType').getValue();
        if(maintainType == 1){
            Hc.alert('维护类型为【修改】状态，不允许复制!');
            return false;
        }
        //申请物料编码
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
            method: 'GET',
            params: {
                billtypeNo: '12401002'
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0") {
                    var materialNo = result.sheetIdCode;
                    newObj.set('materialNo', materialNo);
                    newObj.set('materialCode', '待编码');

                    //处理序号
                    if (me.workObject.hasOrderNo) {
                        var ds = me.workObject.store,
                            orderNo = (ds.max('orderNo') || 0) + 1;
                        newObj.set('orderNo', orderNo);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '申请物料编号失败!');
                    return false;
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
        return true;
    },
    /**
     * 导入配码
     * @param btn
     */
    onBtnOther1: function (btn) {
        var me = this;

        var store = me.lookupReference('grid2').store;
        var materialNo = me.lookupReference('materialNo').value;
        var model = store.model;
        var sizeTypeNoValue = me.lookupReference('sizeTypeNo').value;
        var billNo = me.getObjList()['commonbill'].getRecord().get('billNo');

        if (Ext.isEmpty(sizeTypeNoValue)) {
            Hc.alert('请先输入码组!');
            return;
        }
        if(store.getCount() > 0){
            Hc.alert('尺码明细已经存在尺码，不允许导入!');
            return;
        }

        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_size/listAll.json',
            method: 'GET',
            params: {
                sizeTypeNo: sizeTypeNoValue
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;

                    for (var i = 0; i < vRec.length; i++) {
                        var data = model.create(vRec[i]);
                        data.set('_flag', 'A');
                        data.set('sizeNo', vRec[i].sizeNo);
                        data.set('barcode', vRec[i].sizeNo);
                        data.set('materialNo', materialNo);
                        data.set('billNo', billNo);
                        store.add(data);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '没有找到码组为【' + sizeTypeNoValue + '】的信息!');
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
    },
    //新单
    onBtnBillNewClick: function (btn){
        var me = this;
        me.callParent(arguments);

        me.lookupReference('btnOther1').setDisabled(false); //批量审批
        me.lookupReference('materialType').setValue('3');
    },

    /**
     * 设置控件是否只读
     * @param component 控件本身
     * @param isReadOny 是否只读
     */
    setComponentReadOnly: function (componentName, isReadOny) {
        var me = this;
        if(!me.lookupReference(componentName) || !me.lookupReference(componentName).query){
            return;
        }
        var list = me.lookupReference(componentName).query('textfield,numberfield,datefield,combo');
        var billStatus = me.lookupReference('billStatus').value;
        if (billStatus && billStatus == '20') { //单据审核，则只读
            me.lookupReference('btnOther1').setDisabled(true);
            me.lookupReference('materialNo').setReadOnly(true);
            me.lookupReference('maintainType').setReadOnly(true);
            return;
        }
        Ext.each(list, function (cmp) {
            if (cmp.name == 'currencyNo' || cmp.name == 'specialCode' || cmp.name == 'modelNo') {
                cmp.setReadOnly(true);
            } else {
                cmp.setReadOnly(isReadOny);
            }

        });
    },
    /*从写保存之后方法*/
    afterSave: function (result, options) {
        var me = this;
        me.callParent(arguments);
        //me.lookupReference('grid2').view.refresh();
        me.setComponentReadOnly('tabpanel', true);
    },

    //品牌带出特征码
    onChangeBrandNo: function (obj, newval) {
        this.setSpecialCodeValue(null, null);
    },

    //面板大类联动小类
    onChangeParentCategoryNo: function (obj, newval) {
        var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
        var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
        var categoryNoCom = this.lookupReference('categoryNo');
        if (parentCategoryNo) {
            categoryNoCom.setValue('');
            //通过parentCategoryCode找到parentCategoryId
            var index = parentCategoryNoCom.store.findBy(function (record, id) {
                return record.get('categoryNo') == parentCategoryNo;
            });
            var record = parentCategoryNoCom.store.getAt(index);
            var parentCategoryId = record.get('categoryNo');

            categoryNoCom.store.proxy.extraParams['categoryNo'] = parentCategoryId;
            categoryNoCom.store.load();
        }
    },

    onChangeCategory: function (obj, newval, oldval) {
        var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
        if (!parentCategoryNo) {
            obj.setValue('');
            Ext.Msg.alert('提示', '请先选择大类');
            return false;
        }
    },

    //面板型体联动款号
    onChangeModelNo: function (obj, newval) {
        var modelNo = this.lookupReference('modelNo').getValue();
        var styleNoCom = this.lookupReference('styleNo');
        if (modelNo) {
            styleNoCom.setValue('');
            styleNoCom.store.proxy.extraParams['modelNo'] = modelNo;
            styleNoCom.store.load();
            //所选网格的款号也致空
            var row = this.lookupReference('mastergrid').getSelection()[0];
            row.set('styleNo', '')
        }
    },

    onChangeStyleNo: function (obj, newval, oldval) {
        var modelNo = this.lookupReference('modelNo').getValue();
        if (!modelNo) {
            obj.setValue('');
            //所选网格的款号也致空
            var row = this.lookupReference('mastergrid').getSelection()[0];
            row.set('styleNo', '');
            Ext.Msg.alert('提示', '请先选择型体');
            return false;
        }
    },

    /* grid编辑之前(联动控制) */
    onGridBeforeEdit: function (sender, e) {
        if (this.gridCannotEditKeyField(e) === false) return false;
        //大类联动小类
        if (e.field == 'categoryNo') {
            var record = e.record;
            var newparentCategoryNo = record.get('parentCategoryNo');
            var categoryNo = record.get('categoryNo');
            if (newparentCategoryNo == '') {
                Ext.Msg.alert('提示', '请先选择大类');
                return false;
            }
            else {
                var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
                //通过parentCategoryCode找到parentCategoryId
                var ind = parentCategoryNoCom.store.findBy(function (record, id) {
                    return record.get('categoryNo') == newparentCategoryNo;
                });
                var rec = parentCategoryNoCom.store.getAt(ind);
                var newparentCategoryId = rec.get('categoryId');

                var store = e.column.getEditor().store;
                var oldparentCategoryId = store.proxy.extraParams['parentCategoryId'];

                //通过parentCategoryId找到parentCategoryCode
                var index = parentCategoryNoCom.store.findBy(function (record, id) {
                    return record.get('categoryId') == oldparentCategoryId;
                });
                var record = parentCategoryNoCom.store.getAt(index);
                var oldparentCategoryNo = null;
                if (record) {
                    oldparentCategoryNo = record.get('categoryNo');
                }
                store.proxy.extraParams.parentCategoryId = newparentCategoryId;
                store.on("load", function () {
                    e.column.getEditor().setValue(categoryNo);
                });
                store.load();
            }
        }

        //型体联动款号
        if (e.field == 'styleNo') {
            var record = e.record;
            var newmodelNo = record.get('modelNo');
            var styleNo = record.get('styleNo');
            if (newmodelNo == '') {
                Ext.Msg.alert('提示', '请先选择型体');
                return false;
            }
            else {
                var store = e.column.getEditor().store;
                var oldmodelNo = store.proxy.extraParams['modelNo'];
                if (newmodelNo != oldmodelNo) {
                    store.proxy.extraParams.modelNo = newmodelNo;
                    store.on("load", function () {
                        e.column.getEditor().setValue(styleNo);
                    });
                    store.load();
                }
            }
        }

    },

    /*新增单据
     onBtnBillNewClick: function (btn) {
     var me=this;
     me.callParent(arguments);
     //me.lookupReference('materialType').setValue(0);
     },*/

    /*保存按钮状态
     gridDataChanged: function (store, grid)
     {
     var me=this;
     me.callParent(arguments);
     me.lookupReference('btnBillSave').setDisabled(me.lookupReference('btnSave').disabled);
     },*/

    /*控制主从输入*/
    initAddData: function (newobj) {
        var me = this,
            objlist = me.getObjList(),
            obj = me.workObject;

        //调用父类initAddData方法，产生序列号
        if (me.callParent(arguments) === false) return false;

        if (me.lookupReference('maintainType').getValue() == '') {
            Hc.alert('请先选择[维护类型]');
            return false;
        }

        if (obj.viewModelKey == "mastergrid" && me.gridEditingList.length > 0) {
            Hc.alert('有一笔数据正在编辑，不能新增主表记录');
            return false;
        }
        me.lookupReference('maintainType').setReadOnly(true);
        if (obj.viewModelKey == "mastergrid") {
            var maintainType = me.lookupReference('maintainType').value;
            if (maintainType == 1) {
                return;
            }
            Ext.Ajax.request({
                url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
                method: 'GET',
                params: {
                    billtypeNo: '12400503'
                },
                success: function (response) {
                    var result = JSON.parse(response.responseText);
                    if (result.result.resultCode == "0") {
                        var materialNo = result.sheetIdCode;
                        newobj.set('materialNo', materialNo);
                        newobj.set('materialCode', '待编码');
                        newobj.set('currencyNo', 'RMB');//默认币别-人民币
                    } else {
                        newobj.set('materialCode', '待编码');
                        Ext.MessageBox.alert('提示', '申请物料编号失败!');
                    }
                },
                failure: function (response, opt) {
                    Ext.MessageBox.show({
                        title: '错误提示',
                        msg: response.responseText,
                        height: 300,
                        width: 400
                    });
                }
            });
        }
        if (obj.supGrid) {
            var item = objlist[obj.supGrid].getSelection()[0];
            if (!item) {
                Hc.alert('主表没有选中记录时，从表不能新增记录');
                return false;
            }
            if (!item.phantom) {
                var idField = objlist[obj.supGrid].primaryKey;
                newobj.set(idField, item.get(idField));
            }
            newobj.set('materialNo', item.get('materialNo'));
        }
    },

    /*grid更新数据时*/
    onBillGridDataChange: function (store) {
        var me = this,
            reference = 'mastergrid',
            idx = me.getDirtyIndex(store);
        if (idx > -1) {
            Ext.Array.include(me.gridEditingList, reference);
        } else {
            Ext.Array.remove(me.gridEditingList, reference);
        }
    },

    /*选择变化之后*/
    onGridSelectionChange: function (sender, e, index, eOpts) {
        var me = this;
        me.callParent(arguments);

        if (me.lookupReference('mastergrid').getSelection() && me.lookupReference('mastergrid').getSelection().length > 0) {
            me.setComponentReadOnly('tabpanel', false); //设置控件不只读
            //查询配码信息

            var billStatus = me.lookupReference('billStatus').value;
            if(billStatus < 20){
                me.lookupReference('materialNo').setReadOnly(me.lookupReference('maintainType').getValue() == "0");
            }
        }
        else {
            me.setComponentReadOnly('tabpanel', true);
        }
        if (me.lookupReference('mastergrid').store.getCount() <= 0) {
            me.lookupReference('maintainType').setReadOnly(false);
        }else{
            me.lookupReference('maintainType').setReadOnly(true);
        }
    },
    
    onGrid2BeforeLoad:function(store,ops){
		if(this.callParent(arguments)===false) return false;
		var row= this.lookupReference('mastergrid').getSelection()[0];
		if(row){
			store.proxy.extraParams['materialNo']=	row.get('materialNo');
		}
	},
    /**
     * 获取配码明细
     */
    getSizeNos: function () {
        var me = this,
            grid = me.getObjList()['grid2'],
            store = grid.store,
            model = store.model;
        var sizeTypeNo = me.lookupReference('sizeTypeNo').value;

        //加载配码
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bill_material_size/listAll.json',
            method: 'GET',
            params: {
                basSizeType: sizeTypeNo
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;

                    for (var i = 0; i < vRec.length; i++) {
                        var _materialModel = model.create(vRec[i]);
                        store.add(_materialModel);
                    }
                } else {
                    Ext.MessageBox.alert('提示', '配码明细加载不正确!');
                }
            },
            failure: function (response) {
                Hc.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 500
                });
            }
        });
    },

    beforeSave : function(params){
        var me  = this;
        me.callParent(arguments);
        if (!(me.getObj('editMaterialInfo').isValid())) return false;

        var store = me.getObjList()['mastergrid'].store;
        var isValSucc = true;
        //处理待编码规则
        for(var i = 0 ; i < store.getCount(); i++){
            var materialCode = store.getAt(i).get('materialCode');
            var advicePrice = store.getAt(i).get('advicePrice');
            var developTimes = store.getAt(i).get('developmentTimes');
            if(advicePrice < 0){
                isValSucc = false;
                Hc.alert('参考单价必须大于零!');
                break;
            }else if(developTimes < 0){
                isValSucc = false;
                Hc.alert('开发次数必须大于零!');
                break;
            }

            if(materialCode == '待编码'){
                var materialNo = store.getAt(i).get('materialNo');
                store.getAt(i).set('materialCode',materialNo);
            }
        }
        if(isValSucc == false){
            return false;
        }
        //尺码判断
        var grid2Store = me.getObjList()['grid2'].store,
            sizeTypeStore = me.lookupReference('sizeTypeNo').store,
            sizeTypeNo = me.lookupReference('sizeTypeNo').getValue(),
            sizeTypeModel = sizeTypeStore.getAt(sizeTypeStore.findExact('sizeTypeNo',sizeTypeNo));

        if(sizeTypeModel && sizeTypeModel.get('sizeTypeName') == '无尺码'){
            return true;
        }else{
            if(grid2Store.getCount() <= 0){
                Hc.alert('请录入尺码明细!');
                return false;
            }
        }
        return true;
    },

    /* grid编辑之后 */
    onGridAfterEdit: function (editor, e) {
        var me = this;
        //验证输入的是否所选码组下的配码
        if (e.field == 'productCode') {
            onProdTxtAfterEdit(null, null);
        }
        //品牌带出特征码
        if (e.field == 'brandNo') {
            me.setSpecialCodeValue(editor, e)
        }
        //大类联动小类
        if (e.field == 'parentCategoryNo') {
            var oldparentCategoryNo = e.originalValue;
            var newparentCategoryNo = e.value;
            if (oldparentCategoryNo != newparentCategoryNo) {
                var record = e.record;
                record.set('categoryNo', '');
            }

        }
        //型体联动款号
        if (e.field == 'modelNo') {
            var oldmodelNo = e.originalValue;
            var newmodelNo = e.value;
            if (oldmodelNo != newmodelNo) {
                var record = e.record;
                record.set('styleNo', '');
            }

        }
        this.checkKeyValue(e);
    },

    setSpecialCodeValue: function (editor, obj) {
        var store = Ext.create('Hc_Common.store.Base', {
            fields: ["brandCategory", "brandCname", "brandCode", "brandNo", "specialCode"],
            proxy: {
                url: Hc.mdmPath + "bas_brand/listAll.json"
            }
        });
        if (obj == null) {
            store.proxy.extraParams['brandNo'] = this.lookupReference('brandNo').getValue();
            store.reload({
                scope: this,
                callback: function (recs, oper, suc) {
                    if (recs.length > 0) {
                        this.lookupReference('specialCode').setValue(recs[0].data['specialCode']);
                        var row = this.lookupReference('mastergrid').getSelection()[0];
                        row.set('specialCode', recs[0].data['specialCode'])
                    }
                }
            });
        }
        else {
            var record = obj.record;
            var row = this.lookupReference('mastergrid').getSelection()[0];
            store.proxy.extraParams['brandNo'] = record.get('brandNo');
            store.reload({
                scope: this,
                callback: function (recs, oper, suc) {
                    if (recs.length > 0) {
                        record.set('specialCode', recs[0].data['specialCode']);
                    }
                    else {
                        record.set('brandNo', "");
                        record.set('specialCode', "");
                        Hc.alert("不存在此品牌");
                        return;
                    }
                }
            });
        }
    },

    /**
     * 验证配码是否存在
     * @param editor
     * @param obj
     */
    onGrid2AfterEdit: function (editor, obj) {
        var me = this;
        if (obj.field == 'sizeNo') {
            var oldSizeNo = obj.originalValue,
                newSizeNo = obj.value;

            if (newSizeNo) {
                me.checkSizeNo(oldSizeNo, newSizeNo, obj);
                return;
            }
        }
        this.checkKeyValue(obj);
    },

    /**
     * 网格数据加载
     * @param store
     * @param records
     * @param isOk
     * @param options
     */
    onGridLoaded: function (store, records, isOk, options){
        var me = this,
            store = me.getObjList()['mastergrid'].store;
        me.callParent(arguments);

        if(store && store.getCount() > 0){
            me.lookupReference('maintainType').setReadOnly(true);
        }else{
            me.lookupReference('maintainType').setReadOnly(false);
        }
    },
    /**
     * 验证配码
     * @param oldSizeNo 配码旧值
     * @param strSizeNo 配码新值
     * @param obj 对象
     */
    checkSizeNo: function (oldSizeNo, strSizeNo, obj) {
        var slRecord = obj.record;
        Ext.Ajax.request({
            url: Hc.mdmPath + 'bas_size/listAll.json',
            method: 'GET',
            params: {
                sizeNo: strSizeNo
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
                    var vRec = result.list;
                    slRecord.set('barcode', strSizeNo);
                } else {
                    slRecord.set('sizeNo', oldSizeNo);
                    Ext.MessageBox.alert('提示', '尺码不存在!');
                }
            },
            failure: function (response, opt) {
                Ext.MessageBox.show({
                    title: '错误提示',
                    msg: response.responseText,
                    height: 300,
                    width: 400
                });
            }
        });
    }
});
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billmaterialdtl.BillMaterialDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.billmaterialdtl'
  });
/**
 * Description: 物料单据表 --->半成品bill_material/bill_material_dtl/bill_material_size(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @update: 	Qiang Liu
 * @content:  物料优化
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialhalf.BillMaterialHalf', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.billmaterialhalf',
	
	controller: 'billmaterialhalf',
	viewModel: {
		type: 'billmaterialhalf'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,{
			searchItems: [
				{xtype: 'textfield',name: 'materialType',fieldLabel: '物料类型',hidden:true,value:2}
			],
			gridColumns: [
				{dataIndex: 'maintainType', text: '维护类型', xtype:'bllookupedit',displayvalue:"0=新建:1=修改" },
				{dataIndex: 'materialType', text: '物料类型', xtype:'bllookupedit',displayvalue:"1=原料:2=半成品:3=成品"}
			],
			gridModel: 'Hc_mdm.model.BillMaterial',
			gridLoadUrl: Hc.mdmPath + 'bill_material/list.json',
			dtlName:'billmaterialhalfdtl',
			showModel:'selftab'
		});
		me.callParent();
	}
});

/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeController
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialhalf.BillMaterialHalfController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.billmaterialhalf'
  });
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:01
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billmaterialhalf.BillMaterialHalfModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.billmaterialhalf'
  });
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

/**
 * Description: 物料单据表
 * bill_material/bill_material_dtl/bill_material_sizeController All rights
 * Reserved, Designed ByHc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 *
 * @author: zhuyuanh
 * @date: 2015-04-02 14:34:02
 * @version 1.0.0
 */
Ext.define('Hc_mdm.view.billmaterialhalfdtl.BillMaterialHalfDtlController', {
	extend: 'Hc_Common.view.BaseBillDetailPageController',
	alias: 'controller.billmaterialhalfdtl',
	gridEditingList: [],
	init: function () {
		this.callParent(arguments);
		var me = this,
			objlist = me.getObjList(),
			form = objlist['commonbill'],
			record = form.getRecord();
		if (objlist['mastergrid']) {
			objlist['mastergrid'].store.on('update', me.onBillGridDataChange, me);
			objlist['mastergrid'].store.on('datachanged', me.onBillGridDataChange, me);
		}

		//码组选择控制
		me.lookupReference('sizeTypeNo').on('beforequery', function () {
			var hasSizes = me.lookupReference('grid2').store.count();
			if (hasSizes > 0) {
				Hc.alert('请先删除[尺码明细]再更换码组');
			}
			return (hasSizes == 0)
		});

		//初始加载,全部设置只读
		me.setComponentReadOnly('tabpanel', true);
		if (me.lookupReference('brandNo')) { //品牌事件
			me.lookupReference('brandNo').on('select', 'onChangeBrandNo', me);
		}

		//款号
		me.gridEditingList = [];

		//初始化
		//objlist['mastergrid'].readOnly = true;
		me.lookupReference('btnOther1').setText('批量尺码');
		me.lookupReference('btnOther1').setHidden(false);

		if (!record) return;
		record.set('materialType', '2');
	},
//复制记录
	beforeCopy:function(newObj){
		var me = this;
		var maintainType = me.lookupReference('maintainType').getValue();
		if(maintainType == 1){
			Hc.alert('维护类型为【修改】状态，不允许复制!');
			return false;
		}
		//申请物料编码
		Ext.Ajax.request({
			url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
			method: 'GET',
			params: {
				billtypeNo: '12401002'
			},
			success: function (response) {
				var result = JSON.parse(response.responseText);
				if (result.result.resultCode == "0") {
					var materialNo = result.sheetIdCode;
					newObj.set('materialNo', materialNo);
					newObj.set('materialCode', '待编码');

					//处理序号
					if (me.workObject.hasOrderNo) {
						var ds = me.workObject.store,
							orderNo = (ds.max('orderNo') || 0) + 1;
						newObj.set('orderNo', orderNo);
					}
				} else {
					Ext.MessageBox.alert('提示', '申请物料编号失败!');
					return false;
				}
			},
			failure: function (response, opt) {
				Ext.MessageBox.show({
					title: '错误提示',
					msg: response.responseText,
					height: 300,
					width: 400
				});
			}
		});
		return true;
	},
	/**
	 * 导入配码
	 * @param btn
	 */
	onBtnOther1: function (btn) {
		var me = this;

		var store = me.lookupReference('grid2').store;
		var materialNo = me.lookupReference('materialNo').value;
		var model = store.model;
		var sizeTypeNoValue = me.lookupReference('sizeTypeNo').value;
		var billNo = me.getObjList()['commonbill'].getRecord().get('billNo');

		if (Ext.isEmpty(sizeTypeNoValue)) {
			Hc.alert('请先输入码组!');
			return;
		}
		if(store.getCount() > 0){
			Hc.alert('尺码明细已经存在尺码，不允许导入!');
			return;
		}

		Ext.Ajax.request({
			url: Hc.mdmPath + 'bas_size/listAll.json',
			method: 'GET',
			params: {
				sizeTypeNo: sizeTypeNoValue
			},
			success: function (response) {
				var result = JSON.parse(response.responseText);
				if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
					var vRec = result.list;

					for (var i = 0; i < vRec.length; i++) {
						var data = model.create(vRec[i]);
						data.set('_flag', 'A');
						data.set('sizeNo', vRec[i].sizeNo);
						data.set('barcode', vRec[i].sizeNo);
						data.set('materialNo', materialNo);
						data.set('billNo', billNo);
						store.add(data);
					}
				} else {
					Ext.MessageBox.alert('提示', '没有找到码组为【' + sizeTypeNoValue + '】的信息!');
				}
			},
			failure: function (response, opt) {
				Ext.MessageBox.show({
					title: '错误提示',
					msg: response.responseText,
					height: 300,
					width: 400
				});
			}
		});
	},

	onBtnBillNewClick: function (btn){
		var me = this;
		me.callParent(arguments);

		me.lookupReference('btnOther1').setDisabled(false);
		me.lookupReference('materialType').setValue('2');
	},
	/**
	 * 设置控件是否只读
	 * @param component 控件本身
	 * @param isReadOny 是否只读
	 */
	setComponentReadOnly: function (componentName, isReadOny) {
		var me = this;
		if(!me.lookupReference(componentName) || !me.lookupReference(componentName).query){
			return;
		}
		var list = me.lookupReference(componentName).query('textfield,numberfield,datefield,combo');
		var billStatus = me.lookupReference('billStatus').value;

		if(billStatus && billStatus == '20'){ //单据审核，则只读
			me.lookupReference('btnOther1').setDisabled(true);
			me.lookupReference('materialNo').setReadOnly(true);
			me.lookupReference('maintainType').setReadOnly(true);
			return;
		}
		Ext.each(list, function (cmp) {
			if(cmp.name == 'currencyNo' || cmp.name == 'specialCode' || cmp.name == 'modelNo'){
				cmp.setReadOnly(true);
			}else{
				cmp.setReadOnly(isReadOny);
			}
		});
	},
	/*从写保存之后方法*/
	afterSave: function (result, options) {
		var me = this;
		me.callParent(arguments);
		//me.lookupReference('grid2').view.refresh();
		me.setComponentReadOnly('tabpanel', true);
	},

	//品牌带出特征码
	onChangeBrandNo:function(obj,newval){
		this.setSpecialCodeValue(null,null);
	},

	//面板大类联动小类
	onChangeParentCategoryNo:function(obj,newval){
		var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
		var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
		var categoryNoCom = this.lookupReference('categoryNo');
		if(parentCategoryNo){
			categoryNoCom.setValue('');
			//通过parentCategoryCode找到parentCategoryId
			var index = parentCategoryNoCom.store.findBy(function(record,id){
				return record.get('categoryNo')==parentCategoryNo;
			});
			var record = parentCategoryNoCom.store.getAt(index);
			var parentCategoryId = record.get('categoryNo');

			categoryNoCom.store.proxy.extraParams['categoryNo'] = parentCategoryId;
			categoryNoCom.store.load();
		}
	},

	onChangeCategory:function(obj,newval,oldval){
		var parentCategoryNo = this.lookupReference('parentCategoryNo').getValue();
		if(!parentCategoryNo){
			obj.setValue('');
			Ext.Msg.alert('提示','请先选择大类');
			return false;
		}
	},

	//面板型体联动款号
	onChangeModelNo: function (obj, newval) {
		var modelNo = this.lookupReference('modelNo').getValue();
		var styleNoCom = this.lookupReference('styleNo');
		if (modelNo) {
			styleNoCom.setValue('');
			styleNoCom.store.proxy.extraParams['modelNo'] = modelNo;
			styleNoCom.store.load();
			//所选网格的款号也致空
			var row = this.lookupReference('mastergrid').getSelection()[0];
			row.set('styleNo', '')
		}
	},

	onChangeStyleNo: function (obj, newval, oldval) {
		var modelNo = this.lookupReference('modelNo').getValue();
		if (!modelNo) {
			obj.setValue('');
			//所选网格的款号也致空
			var row = this.lookupReference('mastergrid').getSelection()[0];
			row.set('styleNo', '');
			Ext.Msg.alert('提示', '请先选择型体');
			return false;
		}
	},

	/* grid编辑之前(联动控制) */
	onGridBeforeEdit: function (sender, e) {
		if (this.gridCannotEditKeyField(e) === false) return false;
		//大类联动小类
		if (e.field == 'categoryNo') {
			var record = e.record;
			var newparentCategoryNo = record.get('parentCategoryNo');
			var categoryNo = record.get('categoryNo');
			if (newparentCategoryNo == '') {
				Ext.Msg.alert('提示', '请先选择大类');
				return false;
			}
			else {
				var parentCategoryNoCom = this.lookupReference('parentCategoryNo');
				//通过parentCategoryCode找到parentCategoryId
				var ind = parentCategoryNoCom.store.findBy(function (record, id) {
					return record.get('categoryNo') == newparentCategoryNo;
				});
				var rec = parentCategoryNoCom.store.getAt(ind);
				var newparentCategoryId = rec.get('categoryId');

				var store = e.column.getEditor().store;
				var oldparentCategoryId = store.proxy.extraParams['parentCategoryId'];

				//通过parentCategoryId找到parentCategoryCode
				var index = parentCategoryNoCom.store.findBy(function (record, id) {
					return record.get('categoryId') == oldparentCategoryId;
				});
				var record = parentCategoryNoCom.store.getAt(index);
				var oldparentCategoryNo = null;
				if (record) {
					oldparentCategoryNo = record.get('categoryNo');
				}
				store.proxy.extraParams.parentCategoryId = newparentCategoryId;
				store.on("load", function () {
					e.column.getEditor().setValue(categoryNo);
				});
				store.load();
			}
		}

		//型体联动款号
		if (e.field == 'styleNo') {
			var record = e.record;
			var newmodelNo = record.get('modelNo');
			var styleNo = record.get('styleNo');
			if (newmodelNo == '') {
				Ext.Msg.alert('提示', '请先选择型体');
				return false;
			}
			else {
				var store = e.column.getEditor().store;
				var oldmodelNo = store.proxy.extraParams['modelNo'];
				if (newmodelNo != oldmodelNo) {
					store.proxy.extraParams.modelNo = newmodelNo;
					store.on("load", function () {
						e.column.getEditor().setValue(styleNo);
					});
					store.load();
				}
			}
		}

	},

	/*新增单据
	 onBtnBillNewClick: function (btn) {
	 var me=this;
	 me.callParent(arguments);
	 //me.lookupReference('materialType').setValue(0);
	 },*/

	/*保存按钮状态
	 gridDataChanged: function (store, grid)
	 {
	 var me=this;
	 me.callParent(arguments);
	 me.lookupReference('btnBillSave').setDisabled(me.lookupReference('btnSave').disabled);
	 },*/

	/*控制主从输入*/
	initAddData: function (newobj) {
		var me = this,
			objlist = me.getObjList(),
			obj = me.workObject;

		//调用父类initAddData方法，产生序列号
		if (me.callParent(arguments) === false) return false;

		if (me.lookupReference('maintainType').getValue() == '') {
			Hc.alert('请先选择[维护类型]');
			return false;
		}

		if (obj.viewModelKey == "mastergrid" && me.gridEditingList.length > 0) {
			Hc.alert('有一笔数据正在编辑，不能新增主表记录');
			return false;
		}
		me.lookupReference('maintainType').setReadOnly(true);
		if (obj.viewModelKey == "mastergrid") {
			var maintainType = me.lookupReference('maintainType').value;
			if (maintainType == 1) {
				return;
			}
			Ext.Ajax.request({
				url: Hc.mdmPath + 'bas_system_code/getSheetIdCode.json',
				method: 'GET',
				params: {
					billtypeNo: '12401002'
				},
				success: function (response) {
					var result = JSON.parse(response.responseText);
					if (result.result.resultCode == "0") {
						var materialNo = result.sheetIdCode;
						newobj.set('materialNo', materialNo);
						newobj.set('materialCode', '待编码');
						newobj.set('currencyNo', 'RMB');//默认币别-人民币
					} else {
						newobj.set('materialCode', '待编码');
						Ext.MessageBox.alert('提示', '申请物料编号失败!');
					}
				},
				failure: function (response, opt) {
					Ext.MessageBox.show({
						title: '错误提示',
						msg: response.responseText,
						height: 300,
						width: 400
					});
				}
			});
		}
		if (obj.supGrid) {
			var item = objlist[obj.supGrid].getSelection()[0];
			if (!item) {
				Hc.alert('主表没有选中记录时，从表不能新增记录');
				return false;
			}
			/*if (me.lookupReference('maintainType').getValue() == '1' &&
				(me.lookupReference('billNo').getValue() == '' || me.lookupReference('billNo').getValue() == '0')) {
				Hc.alert('请先填写[物料编号]或者[物料编码]');
				return false;
			}*/
			if (!item.phantom) {
				var idField = objlist[obj.supGrid].primaryKey;
				newobj.set(idField, item.get(idField));
			}
			newobj.set('materialNo', item.get('materialNo'));
		}
	},

	/*grid更新数据时*/
	onBillGridDataChange: function (store) {
		var me = this,
			reference = 'mastergrid',
			idx = me.getDirtyIndex(store);
		if (idx > -1) {
			Ext.Array.include(me.gridEditingList, reference);
		} else {
			Ext.Array.remove(me.gridEditingList, reference);
		}
	},

	/*选择变化之后*/
	onGridSelectionChange: function (sender, e, index, eOpts) {
		var me = this;
		if (me.lookupReference('mastergrid').getSelection() && me.lookupReference('mastergrid').getSelection().length > 0) {
			me.setComponentReadOnly('tabpanel', false); //设置控件不只读
			//查询配码信息
			
			var billStatus = me.lookupReference('billStatus').value;
			if(billStatus < 20){
				me.lookupReference('materialNo').setReadOnly(me.lookupReference('maintainType').getValue() == "0");
			}
		}
		else {
			me.setComponentReadOnly('tabpanel', true);
		}
		if (me.lookupReference('mastergrid').store.getCount() <= 0) {
			me.lookupReference('maintainType').setReadOnly(false);
		}else{
			me.lookupReference('maintainType').setReadOnly(true);
		}
		me.callParent(arguments);
	},

	/**
	 * 获取配码明细
	 */
	getSizeNos: function () {
		var me = this,
			grid = me.getObjList()['grid2'],
			store = grid.store,
			model = store.model;
		var sizeTypeNo = me.lookupReference('sizeTypeNo').value;

		//加载配码
		Ext.Ajax.request({
			url: Hc.mdmPath + 'bill_material_size/listAll.json',
			method: 'GET',
			params: {
				basSizeType: sizeTypeNo
			},
			success: function (response) {
				var result = JSON.parse(response.responseText);
				if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
					var vRec = result.list;

					for (var i = 0; i < vRec.length; i++) {
						var _materialModel = model.create(vRec[i]);
						store.add(_materialModel);
					}
				} else {
					Ext.MessageBox.alert('提示', '配码明细加载不正确!');
				}
			},
			failure: function (response) {
				Hc.show({
					title: '错误提示',
					msg: response.responseText,
					height: 300,
					width: 500
				});
			}
		});
	},

	beforeSave : function(params){
		var me  = this;
		me.callParent(arguments);
		if (!(me.getObj('editMaterialInfo').isValid())) return false;

		var store = me.getObjList()['mastergrid'].store;
		var isValSucc = true;
		//处理待编码规则
		for(var i = 0 ; i < store.getCount(); i++){
			var materialCode = store.getAt(i).get('materialCode');
			var advicePrice = store.getAt(i).get('advicePrice');
			if(advicePrice <= 0){
				isValSucc = false;
				break;
			}

			if(materialCode == '待编码'){
				var materialNo = store.getAt(i).get('materialNo');
				store.getAt(i).set('materialCode',materialNo);
			}
		}
		if(isValSucc == false){
			Hc.alert('参考单价必须大于零!');
			return false;
		}

		//尺码判断
		var grid2Store = me.getObjList()['grid2'].store,
			sizeTypeStore = me.lookupReference('sizeTypeNo').store,
			sizeTypeNo = me.lookupReference('sizeTypeNo').getValue(),
			sizeTypeModel = sizeTypeStore.getAt(sizeTypeStore.findExact('sizeTypeNo',sizeTypeNo));

		if(sizeTypeModel && sizeTypeModel.get('sizeTypeName') == '无尺码'){
			return true;
		}else{
			if(grid2Store.getCount() <= 0){
				Hc.alert('请录入尺码明细!');
				return false;
			}
		}
		return true;
	},

	/* grid编辑之后 */
	onGridAfterEdit: function (editor, e) {
		var me = this;
		//验证输入的是否所选码组下的配码
		if (e.field == 'productCode') {
			onProdTxtAfterEdit(null, null);
		}
		//品牌带出特征码
		if (e.field == 'brandNo') {
			me.setSpecialCodeValue(editor, e)
		}
		//大类联动小类
		if (e.field == 'parentCategoryNo') {
			var oldparentCategoryNo = e.originalValue;
			var newparentCategoryNo = e.value;
			if (oldparentCategoryNo != newparentCategoryNo) {
				var record = e.record;
				record.set('categoryNo', '');
			}

		}
		//型体联动款号
		if (e.field == 'modelNo') {
			var oldmodelNo = e.originalValue;
			var newmodelNo = e.value;
			if (oldmodelNo != newmodelNo) {
				var record = e.record;
				record.set('styleNo', '');
			}

		}
		this.checkKeyValue(e);
	},

	setSpecialCodeValue: function (editor, obj) {
		var store = Ext.create('Hc_Common.store.Base', {
			fields: ["brandCategory", "brandCname", "brandCode", "brandNo", "specialCode"],
			proxy: {
				url: Hc.mdmPath + "bas_brand/listAll.json"
			}
		});
		if (obj == null) {
			store.proxy.extraParams['brandNo'] = this.lookupReference('brandNo').getValue();
			store.reload({
				scope: this,
				callback: function (recs, oper, suc) {
					if (recs.length > 0) {
						this.lookupReference('specialCode').setValue(recs[0].data['specialCode']);
						var row = this.lookupReference('mastergrid').getSelection()[0];
						row.set('specialCode', recs[0].data['specialCode'])
					}
				}
			});
		}
		else {
			var record = obj.record;
			var row = this.lookupReference('mastergrid').getSelection()[0];
			store.proxy.extraParams['brandNo'] = record.get('brandNo');
			store.reload({
				scope: this,
				callback: function (recs, oper, suc) {
					if (recs.length > 0) {
						record.set('specialCode', recs[0].data['specialCode']);
					}
					else {
						record.set('brandNo', "");
						record.set('specialCode', "");
						Hc.alert("不存在此品牌");
						return;
					}
				}
			});
		}
	},
	
	onGrid2BeforeLoad:function(store,ops){
		if(this.callParent(arguments)===false) return false;
		var row= this.lookupReference('mastergrid').getSelection()[0];
		if(row){
			store.proxy.extraParams['materialNo']=	row.get('materialNo');
		}
	},

	/**
	 * 验证配码是否存在
	 * @param editor
	 * @param obj
	 */
	onGrid2AfterEdit: function (editor, obj) {
		var me = this;
		if (obj.field == 'sizeNo') {
			var oldSizeNo = obj.originalValue,
				newSizeNo = obj.value;

			if (newSizeNo) {
				me.checkSizeNo(oldSizeNo, newSizeNo, obj);
			}
		}
		this.checkKeyValue(obj);
	},
	/**
	 * 网格数据加载
	 * @param store
	 * @param records
	 * @param isOk
	 * @param options
	 */
	onGridLoaded: function (store, records, isOk, options){
		var me = this,
			store = me.getObjList()['mastergrid'].store;
		me.callParent(arguments);

		if(store && store.getCount() > 0){
			me.lookupReference('maintainType').setReadOnly(true);
		}else{
			me.lookupReference('maintainType').setReadOnly(false);
		}
	},
	/**
	 * 验证配码
	 * @param oldSizeNo 配码旧值
	 * @param strSizeNo 配码新值
	 * @param obj 对象
	 */
	checkSizeNo: function (oldSizeNo, strSizeNo, obj) {
		var slRecord = obj.record;
		Ext.Ajax.request({
			url: Hc.mdmPath + 'bas_size/listAll.json',
			method: 'GET',
			params: {
				sizeNo: strSizeNo
			},
			success: function (response) {
				var result = JSON.parse(response.responseText);
				if (result.result.resultCode == "0" && result.list && result.list.length > 0) {
					var vRec = result.list;
					slRecord.set('barcode', strSizeNo);
				} else {
					slRecord.set('sizeNo', oldSizeNo);
					Ext.MessageBox.alert('提示', '尺码不存在!');
				}
			},
			failure: function (response, opt) {
				Ext.MessageBox.show({
					title: '错误提示',
					msg: response.responseText,
					height: 300,
					width: 400
				});
			}
		});
	}
});
/**
 * Description: 物料单据表 bill_material/bill_material_dtl/bill_material_sizeModel
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhuyuanh
 * @date:  2015-04-02 14:34:02
 * @version 1.0.0
 */ 
Ext.define('Hc_mdm.view.billmaterialhalfdtl.BillMaterialHalfDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.billmaterialhalfdtl'
  });
