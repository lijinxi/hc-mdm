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
	requires : ['Hc_mdm.model.BasSupplier',
			'Hc_mdm.model.BasSupplierBrand',
			'Hc_mdm.model.BasSupplierContacter',
			'Hc_mdm.model.BasSupplier',
			'Hc_mdm.model.BasSupplierSupplyCategory',
			'Hc_mdm.view.bassupplier.BasSupplierController',
			'Hc_mdm.view.bassupplier.BasSupplierModel'],
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