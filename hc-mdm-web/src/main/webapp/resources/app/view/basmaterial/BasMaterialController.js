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
