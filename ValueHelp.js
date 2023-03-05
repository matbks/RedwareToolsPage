sap.ui.define(
  [
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/SelectDialog",
    "sap/m/StandardListItem",
  ],
  function (Filter, FilterOperator, SelectDialog, StandardListItem) {
    "use strict";

    return {
      // initialize: function(oMainView){

        

      // },
      createSearchHelp: function (
        oParentView, // this.getView() de onde o value help é chamado
        title, // título da janela do value help
        entitySet, // entitySet que provém os dados do value hlep
        key, // chave value help ( valor que será utilizado, ex: código do BP )
        description, // descrição da chave do value help ( ex: Descrição do BP)
        oSource // oEvent.getSource() de onde o value help é chamado
      ) {
        debugger;
        this.oSource = oSource;
        this.key = key;
        this.description = description;

        // Criação do dialog
        var oSelectDialog = new SelectDialog({
          title: title,
          search: this._onValueHelpSearch.bind(this),
          confirm: this._onValueHelpClose.bind(this),
          cancel: this._onValueHelpClose.bind(this),
        });

        // Criação do template do item do dialog
        var oItemTemplate = new StandardListItem({
          title: "{" + key + "}",
          description: "{" + description + "}",
        });

        // Definição da coleção de items do dialog
        oSelectDialog.bindAggregation("items", entitySet, oItemTemplate);

        oParentView.addDependent(oSelectDialog);

        return oSelectDialog;
      },

      // createSettingsScreen: function () {
      //   // this.oSource = oSource;
      //   // this.key = key;
      //   // this.description = description;
        
      //   var title = this.getOwnerComponent()
      //                     .getModel("i18n")
      //                     .getResourceBundle()
      //                     .getText("Config");
      //   if (!title)

      //   title = "Configurações";

      //   // Criação do dialog
      //   var oSelectDialog = new SelectDialog({
      //     title: title,
      //     search: this._onValueHelpSearch.bind(this),
      //     confirm: this._onValueHelpClose.bind(this),
      //     cancel: this._onValueHelpClose.bind(this),
      //   }); 

      //   .addDependent(oSelectDialog);

      //   return oSelectDialog;
      // },

      _onValueHelpSearch: function (oEvent) {
        var sValue = oEvent.getParameter("value");
        var oFilterTitle = new Filter(
          this.key,
          FilterOperator.Contains,
          sValue
        );

        var oFilterDescription = new Filter(
          this.description,
          FilterOperator.Contains,
          sValue
        );

        var oFilters = new Filter({
          filters: [oFilterTitle, oFilterDescription],
          and: false,
        });

        oEvent.getSource().getBinding("items").filter(oFilters);
      },

      _onValueHelpClose: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");

        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem) {
          return;
        }

        this.oSource.setValue(oSelectedItem.getTitle());
      },
    };
  }
);
