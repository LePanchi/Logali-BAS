// @ts-nocheck
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "MyNameSpace/SAPUI5/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});