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
    requires: [
        'Hc_mdm.view.basaccountperiod.BasAccountPeriod',
        'Hc_mdm.view.basunit.BasUnit',
        'Hc_mdm.view.bascurrency.BasCurrency',
        'Hc_mdm.view.basregion.BasRegion',
        'Hc_mdm.view.bascompany.BasCompany',
        'Hc_mdm.view.basfactory.BasFactory',
        'Hc_mdm.view.basdivision.BasDivision',
        'Hc_mdm.view.baspaymentclausesk.BasPaymentClauseSK',
        'Hc_mdm.view.baspaymentclausefk.BasPaymentClauseFK',
        'Hc_mdm.view.bascountry.BasCountry',
        'Hc_mdm.view.basprovince.BasProvince' ,
        'Hc_mdm.view.bascity.BasCity',
        'Hc_mdm.view.bascounty.BasCounty',
        'Hc_mdm.view.bascolor.BasColor',
        'Hc_mdm.view.bascustomer.BasCustomer',
        'Hc_mdm.view.basdict.BasDict',
        'Hc_mdm.view.bascoderule.BasCodeRule',
        'Hc_mdm.view.bascategory.BasCategory',
        'Hc_mdm.view.basstore.BasStore',
        'Hc_mdm.view.basbrand.BasBrand',
        'Hc_mdm.view.basstorezone.BasStoreZone',
        'Hc_mdm.view.basstorecell.BasStoreCell',
        'Hc_mdm.view.basstorechannel.BasStoreChannel',
        'Hc_mdm.view.basstoreroom.BasStoreRoom',
        'Hc_mdm.view.bastaxrate.BasTaxRate',
        'Hc_mdm.view.bastaxcategory.BasTaxCategory',
        'Hc_mdm.view.basfee.BasFee',
        'Hc_mdm.view.baspaymentmethod.BasPaymentMethod',
        'Hc_mdm.view.basmaterial.BasMaterial',
        'Hc_mdm.view.bassupplier.BasSupplier',
        'Hc_mdm.view.basworkshop.BasWorkshop',
        'Hc_mdm.view.basbilltype.BasBillType',
        'Hc_mdm.view.bassizetype.BasSizeType',
        'Hc_mdm.view.basdeliverypoint.BasDeliveryPoint',
        'Hc_mdm.view.basunitswitch.BasUnitSwitch',
        'Hc_mdm.view.basworkshop.BasWorkshop',
        'Hc_mdm.view.basmaterialunitswitch.BasMaterialUnitSwitch',
        'Hc_mdm.view.basbrandrelation.BasBrandRelation',
		'Hc_mdm.view.basorganizationview.BasOrganizationView',
		'Hc_mdm.view.billbom.BillBom',
		'Hc_mdm.view.billbomlist.BillBomList',
		'Hc_mdm.view.billmaterial.BillMaterial',
		'Hc_mdm.view.billmaterialdtl.BillMaterialDtl',
        'Hc_mdm.view.billmaterialhalf.BillMaterialHalf',
        'Hc_mdm.view.billmaterialhalfdtl.BillMaterialHalfDtl',
		'Hc_mdm.view.basbom.BasBom',
		'Hc_mdm.view.basbomlist.BasBomList',
		'Hc_mdm.view.billmat.BillMat',
		'Hc_mdm.view.billmatdtl.BillMatDtl',
		'Hc_mdm.view.basstyle.BasStyle',
		'Hc_mdm.view.bassupplycategory.BasSupplyCategory',
		'Hc_mdm.view.baspurchasegroup.BasPurchaseGroup'
    ],

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
