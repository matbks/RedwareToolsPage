sap.ui.define(
  [
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/SelectDialog",
    "sap/m/StandardListItem",
    "./BadiOnClose",
  ],
  function (Filter,
	FilterOperator,
	SelectDialog,
	StandardListItem,
	OnCloseValueHelpBadi) {
    "use strict";

    return {
      createSearchHelp: function (
        oParentView, // this.getView() de onde o value help é chamado
        title, // título da janela do value help
        entitySet, // entitySet que provém os dados do value hlep
        key, // chave value help ( valor que será utilizado, ex: código do BP )
        description, // descrição da chave do value help ( ex: Descrição do BP)
        oSource, // oEvent.getSource() de onde o value help é chamado,
        helpColumns,
        OnCloseValueHelpBadi,
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

        // oSelectDialog.getBinding("items").attachEventOnce("updateFinished", function() {
        //   this.oSearchField.focus()
        // });

        // oSelectDialog.onAfterRendering(): function() {
        //   // this._focusSearchField();
        //   setTimeout(function(){
        //     var oSearchField = sap.ui.getCore().byId(oSelectDialog.getId() + "-searchField");
        //     if (oSearchField) {
        //       oSearchField.focus();
        //     }
        //   }, 0);
        // }.bind(this)

        if (helpColumns) {
          helpColumns;
        } else {
          // Criação do template do item do dialog
          var oItemTemplate = new StandardListItem({
            title: "{" + key + "}",
            description: "{" + description + "}",
          });
        }

        // Definição da coleção de items do dialog
        oSelectDialog.bindAggregation("items", entitySet, oItemTemplate);

        oParentView.addDependent(oSelectDialog);

        // oSelectDialog._oSearchField.focus();

        return oSelectDialog;
      },

      // _focusSearchField: function(oSearchField) {
      //          if (oSearchField) {
      //     oSearchField.focus();
      //   }
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

        OnCloseValueHelpBadi.run(oEvent, oSelectedItem);

        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem) {
          return;
        }
 
      },
    };
  }
);
