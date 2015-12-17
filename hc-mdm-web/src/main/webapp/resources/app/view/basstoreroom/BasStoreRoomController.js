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