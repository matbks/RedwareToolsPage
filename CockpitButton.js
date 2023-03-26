sap.ui.define(["sap/ui/base/Object"], function (Object) {
  "use strict";

  return Object.extend(
    "creditblock.zadocreditblock.controller.RedwareTools.AddButtonOnSmartTable",
    {
      constructor: function (
        oParentView,
        SmartTable,
        EntitySet,
        JsonData,
        Icon,
        Action,
        ErrorMessage,
        SucessMessage
      ) {
        Object.apply(this);

        this.SmartTable = SmartTable;

        this.oParentView = oParentView;

        var oSmartTable = this.oParentView.byId(this.SmartTable);

        var oButton = new sap.m.Button({
            icon: Icon,
            click: Action
        })

        oSmartTable.setCustomToolbar(oButton);

        debugger;
      },
    }
  );
});
