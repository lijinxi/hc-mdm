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
    requires: ['Hc_mdm.model.BasOrganizationGrid', 'Hc_mdm.view.basorganizationview.BasOrganizationViewController', 'Hc_mdm.view.basorganizationview.BasOrganizationViewModel'],

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