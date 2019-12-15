function initModel() {
	var sUrl = "/campaign/sap/opu/odata/sap/API_MKT_CAMPAIGN_SRV;v&#x3D;0002/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}