sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("project1.controller.View1", {
			onInit: function () {

			},
			myFactoryFunction:function(sid, ocontext){
				debugger;

				var unitPrice = ocontext.getProperty("UnitPrice");
				if(unitPrice > 20){
					return new sap.m.ColumnListItem({
						cells:[
							new sap.m.Text({
								text:"{m1>OrderId}"
							}),
							new sap.m.Text({
								text:"{m1>ProductId}"
							}),
							new sap.m.Text({
								text:"{m1>ProductName}"
							}),
							
							new sap.m.Text({
								text:"{m1>UnitPrice}"
							}),
							new sap.m.Text({
								text:"{m1>Quantity}"
							}).addStyleClass("redClass")

						]
					});
				}else if(unitPrice < 20 ){
                     return new sap.m.ColumnListItem({
						 cells:[
							 new sap.m.Text({
								 text:"{m1>OrderId}"
							 }),
							 new sap.m.Text({
								 text:"{m1>ProductId}"
							 }),
							 new sap.m.Text({
								 text:"{m1>ProductName}"
							 }),
							 new sap.m.Text({
								 text:"{m1>UnitPrice}"
							 }),
							 new sap.m.Text({
								 text:"{m1>Quantity}"
							 }).addStyleClass("GreenClass")
						 ]
					 });
				}


			}
		
		
		
		});
	});
