// @ts-nocheck
sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/base/Log"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.base.Log} Log
     */
    function (Controller, MessageToast, Log) {

        return Controller.extend("MyNameSpace.SAPUI5.controller.HelloPanel", {

            onInit: function () { },

            onBeforeRendering: function () {
                window.message = 'Log message - onBeforeRendering';
                Log.info(window.message);
                Log.error(window.message);
            },

            onAfterRendering: function () {
               // debugger;
            },

            onShowHello: function () {
                // read text i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            },
        });
    }
);