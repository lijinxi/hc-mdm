/**
 * Description: 主框架应用程序入口
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
Ext.application({
    extend: 'Hc_mdm.Application',

    appFolder:'resources/app',
    name: 'Hc_mdm',


    init: function () {
	   console.info(location);
        var me = this,
            module = location.href.indexOf('#') > 0 ? location.href.split('#')[1] : 'bascity',
            className = Ext.ClassManager.getNameByAlias('widget.' + module);

        if(className) {
        	console.info("类名:"+className);
            me.autoCreateViewport = className;
        }else{
            Ext.Msg.alert('错误提示','URL出错,请检查是否已导入');
        }
        me.callParent();
    }
});
