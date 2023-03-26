sap.ui.define([], function () {
  "use strict";
  return {
    run: function (oEvent, oSelectedItem) {
      if (
        // oSelectedItem.getTitle() == "5001160" ||
        oSelectedItem.getTitle() == "5000002" ||
        oSelectedItem.getTitle() == "5006970" ||
        oSelectedItem.getTitle() == "5001161" ||
        oSelectedItem.getTitle() == "5006969" ||
        oSelectedItem.getTitle() == "5001159" ||
        oSelectedItem.getTitle() == "5006971"
      ) {
        var trasngenia_dropdwon = oEvent
          .getSource()
          .getParent()
          .byId("Transgenia");

        switch (oSelectedItem.getTitle()) {
          // case "5001160":
          case "5000002":
            trasngenia_dropdwon.addItem(
              new sap.ui.core.Item({
                key: "TID",
                text: "Intacta",
              })
            );

            trasngenia_dropdwon.addItem(
              new sap.ui.core.Item({
                key: "TNI",
                text: "Não Intacta",
              })
            );

            break;

          //TID - INTACTA DECLARADA; TIT - INTACTA TESTADA; TNI - NEGATIVO INTACTA;

          case "5006970":
            trasngenia_dropdwon.addItem(
              new sap.ui.core.Item({
                key: "TID",
                text: "Intacta",
              })
            );

            trasngenia_dropdwon.addItem(
              new sap.ui.core.Item({
                key: "TNI",
                text: "Não Intacta",
              })
            );

            break;

          case "5001161":
            break;

          case "5006969":
            break;

          case "5006969":
            break;

          case "5001159":
            break;

          case "5006971":
            break;
        }
      }
    },
  };
});
