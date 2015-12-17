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