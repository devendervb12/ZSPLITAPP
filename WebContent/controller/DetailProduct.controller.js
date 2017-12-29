sap.ui.controller("smax.batch26.splitApp.controller.DetailProduct", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.DetailProduct
*/
	onInit: function() {
		
		this.getOwnerComponent().getRouter(this).getRoute("detail").attachPatternMatched(function(oEvent){
			
			var productID = oEvent.getParameters().arguments.pid;
			
			this.getView().bindElement("/ProductSet('"+productID+"')");
			
		},this)

	},
     
	onCreate : function(){
		
		var oDialog = new sap.m.Dialog({
			title : "Create Product",
			content : [
				new sap.m.Label({ text : "Product ID"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Description"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Category"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Supplier ID"}),
				new sap.m.Input()
			],
			buttons : [
				new sap.m.Button({ text : "Save and Close", press : function(oEvent){
					//collect the data
					
					var data = {
						ProductID : oEvent.getSource().getParent().getContent()[1].getValue(),
						Name : oEvent.getSource().getParent().getContent()[3].getValue(),
						Description : oEvent.getSource().getParent().getContent()[5].getValue(),
						Category : oEvent.getSource().getParent().getContent()[7].getValue(),
						SupplierID : oEvent.getSource().getParent().getContent()[9].getValue()
					}					
					//save data in SAP
					debugger;				
					var oModel = this.getOwnerComponent().getModel();
					
					oModel.create("/ProductSet", data, {
						success : function(){ 
							sap.m.MessageToast.show("Data Saved")
						}
					})
					
					                         
					                               oEvent.getSource().getParent().close();
				                }.bind(this)}),
			
				                
				                
				                
				                
				                
				                
				                
				                
				                new sap.m.Button({ text : "Cancel", press : function(oEvent){
																oEvent.getSource().getParent().close();			
												} })
			]
		});
		
	
		oDialog.open();
	}


});