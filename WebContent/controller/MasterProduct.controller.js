sap.ui.controller("smax.batch26.splitApp.controller.MasterProduct", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MasterProduct
*/
	onInit: function() {
        
		//getting the reference of List
		var olist = this.getView().byId("idList");
		
		// Once the list is loaded with data fire press event of first selection
		
		olist.attachUpdateFinished(function(){
		//	debugger;
			this.getView().byId("idList").getItems()[0].firePress();
			
			
		}, this);
		
		
	},
 
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MasterProduct
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MasterProduct
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MasterProduct
*/
//	onExit: function() {
//
//	}
	
	onItemSelection : function(oEvent){
		//debugger;
		var prodID = oEvent.getSource().getTitle();
	
		this.getOwnerComponent().getRouter(this).navTo("detail", {pid : prodID});
		
	}

});