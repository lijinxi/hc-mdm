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