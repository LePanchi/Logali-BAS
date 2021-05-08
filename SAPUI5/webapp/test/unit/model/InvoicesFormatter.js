//@ts-nocheck 
sap.ui.define([
"MyNameSpace/SAPUI5/model/InvoicesFormatter",
"sap/ui/model/resource/ResourceModel"
], 
/**
 * 
 * @param {typeof MyNameSpace.SAPUI5.model.InvoicesFormatter } InvoicesFormatter
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
 */
function(InvoicesFormatter, ResourceModel) {
    'use strict';
    QUnit.module("Qinvoices Status", {
        beforeEach: function(){
            this._oResourceModel = new ResourceModel({
                bundleUrl : sap.ui.require.toUrl("MyNameSpace/SAPUI5") + "/i18n/i18n.properties"
            });
        },
        afterEach: function(){
            this._oResourceModel.destroy();
        }
    });
    QUnit.test("Should return the Invoice Status" , function(assert){
        let oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);
        let oViewStub = {
            getModel :  oModel
        };
        let oControllerStub = {
            getView : this.stub().returns(oViewStub)
        };
        let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStub);
        //Assert
        assert.strictEqual(fnIsolatedFormatter("A"),"New", "The invoice status for A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"),"In Progress", "The invoice status for B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"),"Done", "The invoice status for C is correct");
    });

});