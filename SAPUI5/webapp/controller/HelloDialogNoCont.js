sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"],
    /**
     * 
     * @param {sap.ui.base.ManagedObject} ManagedObject 
     * @param {typeof sap.ui.core.Fragment} Fragment
     */
    function (ManagedObject, Fragment) {
        "use strict"
        return ManagedObject.extend("MyNameSpace.SAPUI5.controller.HelloDialogNoCont", {
            constructor: function (oView) {
                this._oView = oView;
            },

            exit: function () {
                delete this._oView;
            },

            open: function () {
                const oView = this._oView;

                // create dialog lazily
                if (!oView.byId("myIdDialog")) {

                    let oFragmentController = {
                        onClickOk: function () {
                            oView.byId("myIdDialog").close();
                        },
                    };

                    // load asyncronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "MyNameSpace.SAPUI5.view.MyDialog",
                        controller: oFragmentController                                // Indicating the controller for the fragment
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("myIdDialog").open();
                }
            }
        });
    });