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