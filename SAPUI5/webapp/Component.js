// @ts-nocheck
sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "MyNameSpace/SAPUI5/model/Models",
        "sap/ui/model/resource/ResourceModel",
        "./controller/HelloDialogNoCont",
        "sap/ui/Device"
    ],
    /**
     *  @param {typeof sap.ui.core.UIComponent} UIComponent
     *  @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     *  @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Models, ResourceModel, HelloDialogNoCont, Device)

    {
        return UIComponent.extend("MyNameSpace.SAPUI5.Component", {

            metadata: {
                manifest : 'json'
                // "rootView": {
                //     "viewName": "MyNameSpace.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());
                //set i18n model on the view
                //Not required anymore because of this.getRouter().initialize();
                //var i18nModel = new ResourceModel({ bundleName: "MyNameSpace.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");

                //Set the device model
                this.setModel(Models.createDeviceModel(), "device");

                this._helloDialog = new HelloDialogNoCont(this.getRootControl());

                this.getRouter().initialize();
            },

            exit: function() {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            },


            getContentDensityClass: function() {
                if(!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact"; 
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy"; 
                }
                return this._sContentDensityClass;
            }
        });
    }
);