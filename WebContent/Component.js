
sap.ui.core.UIComponent.extend("smax.batch26.splitApp.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
})