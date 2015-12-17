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