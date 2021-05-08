// @ts-nocheck
sap.ui.define([
    "MyNameSpace/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],
    /**
     * 
     * @param {typeof sap.ui.test.opaQunit} opaQunit 
     */
    function (mockserver, opaQunit) {
        'use strict';

        QUnit.module("Navigation");

        opaQunit("Should open the Hello Dialog", function (Given, When, Then) {
            //Initialize Mock Server
            mockserver.init();
            //Arrengements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "MyNameSpace.SAPUI5"
                }
            });
            //Actions
            When.onTheAppPage.iSayHelloDialogButton();
            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();
            //Cleanup
            Then.iTeardownMyApp();
        });
    });