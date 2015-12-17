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