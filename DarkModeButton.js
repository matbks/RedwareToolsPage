// sap.ui.define(
//   [
//     "sap/ui/base/Object",
//     "sap/m/SelectDialog",
//     "sap/m/Menu",
//     "sap/m/RadioButton",
//     "sap/m/RadioButtonGroup",
//   ],
//   function (Object, SelectDialog, Menu, RadioButton, RadioButtonGroup) {
//     "use strict";

//     return Object.extend(
//       "creditblock.zadocreditblock.controller.RedwareTools.ConfigScreen",
//       {
//         constructor: function (oParentView) {
//           Object.apply(this);

//           this._oParentView = oParentView;

//           this._configScreen = this._buildConfigScreen(this._oParentView);

//           var oSemanticFullscreenPage = oParentView.byId("myFullscreenPage");

//           var oButton = new sap.m.Button({
//             // text: "My Button",
//             icon: "sap-icon://action-settings",
//             press: function () {
//               this._configScreen
//                 .getContent()[0]
//                 .getButtons()
//                 .forEach((button) => {
//                   if (localStorage.getItem("SapTheme")) {                  

//                       this._actualTheme =
//                       localStorage.getItem("SapTheme") == "sap_fiori_3"
//                         ? "whiteModeButton"
//                         : "darkModeButton"; 
//                   }
//                   if (button.sId == this._actualTheme) { button.setSelected(true) }
//                 });
//               this._configScreen.open();
//             }.bind(this),
//           });

//           if (localStorage.getItem("SapTheme")) {
//             sap.ui
//               .getCore()
//               .applyTheme(localStorage.getItem("SapTheme"));
//           }

//           oSemanticFullscreenPage.addCustomHeaderContent(oButton);
//         },

//         _buildConfigScreen: function (oParentView) {
//           var oConfigScreen = new sap.m.Dialog({
//             title: "Configurações",
//             contentWidth: "50px",
//             contentHeight: "50px",
//             resizable: true,
//             draggable: true,
//             content: new sap.m.RadioButtonGroup({
//               columns: 2,
//               buttons: [
//                 new sap.m.RadioButton({
//                   id:"darkModeButton",
//                   text: "Dark Mode",
//                   select: function () {
//                     sap.ui.getCore().applyTheme("sap_fiori_3_dark");
//                     localStorage.setItem("SapTheme", "sap_fiori_3_dark");
//                   }.bind(this),
//                 }),
//                 new sap.m.RadioButton({
//                   id:"whiteModeButton",
//                   text: "White Mode",
//                   select: function () {
//                     sap.ui.getCore().applyTheme("sap_fiori_3");
//                     localStorage.setItem("SapTheme", "sap_fiori_3");
//                   }.bind(this),
//                 }),
//               ],
//             }),

//             beginButton: new sap.m.Button({
//               type: sap.m.ButtonType.Emphasized,
//               text: "OK",
//               press: function () {
//                 oConfigScreen.close();
//               }.bind(this),
//             }),

//             endButton: new sap.m.Button({
//               text: "Close",
//               press: function () {
//                 oConfigScreen.close();
//               }.bind(this),
//             }),
//           });
 
//           oParentView.addDependent(oConfigScreen);

//           return oConfigScreen;
//         },
//       }
//     );
//   }
// );


sap.ui.define(
  [
    "sap/ui/base/Object",
    "sap/m/SelectDialog",
    "sap/m/Menu",
    "sap/m/RadioButton",
    "sap/m/RadioButtonGroup",
  ],
  function (Object, SelectDialog, Menu, RadioButton, RadioButtonGroup) {
    "use strict";

    return Object.extend(
      "creditblock.zadocreditblock.controller.RedwareTools.ConfigScreen",
      {
        constructor: function (oParentView) {
          Object.apply(this);

          this._oParentView = oParentView;

          this._configScreen = this._buildConfigScreen(this._oParentView);

          var oSemanticFullscreenPage = oParentView.byId("myFullscreenPage");

          // Helper function to get the correct icon based on the theme
          var getLightBulbIcon = function () {
            var theme = localStorage.getItem("SapTheme");
            return theme === "sap_fiori_3" ? "sap-icon://lightbulb" : "sap-icon://lightbulb-o";
          };

          var oButton = new sap.m.Button({
            icon: getLightBulbIcon(),
            press: function () {
              this._configScreen
                .getContent()[0]
                .getButtons()
                .forEach((button) => {
                  if (localStorage.getItem("SapTheme")) {
                    this._actualTheme =
                      localStorage.getItem("SapTheme") == "sap_fiori_3"
                        ? "whiteModeButton"
                        : "darkModeButton";
                  }
                  if (button.sId == this._actualTheme) { button.setSelected(true) }
                });
              this._configScreen.open();
            }.bind(this),
          });

          if (localStorage.getItem("SapTheme")) {
            sap.ui
              .getCore()
              .applyTheme(localStorage.getItem("SapTheme"));
          }

          oSemanticFullscreenPage.addCustomHeaderContent(oButton);
        },

        _buildConfigScreen: function (oParentView) {
          var oConfigScreen = new sap.m.Dialog({
            title: "Configurações",
            contentWidth: "50px",
            contentHeight: "50px",
            resizable: true,
            draggable: true,
            content: new sap.m.RadioButtonGroup({
              columns: 2,
              buttons: [
                new sap.m.RadioButton({
                  id:"darkModeButton",
                  text: "Dark Mode",
                  select: function () {
                    sap.ui.getCore().applyTheme("sap_fiori_3_dark");
                    localStorage.setItem("SapTheme", "sap_fiori_3_dark");
                  }.bind(this),
                }),
                new sap.m.RadioButton({
                  id:"whiteModeButton",
                  text: "White Mode",
                  select: function () {
                    sap.ui.getCore().applyTheme("sap_fiori_3");
                    localStorage.setItem("SapTheme", "sap_fiori_3");
                  }.bind(this),
                }),
              ],
            }),

            beginButton: new sap.m.Button({
              type: sap.m.ButtonType.Emphasized,
              text: "OK",
              press: function () {
                oConfigScreen.close();
              }.bind(this),
            }),

            endButton: new sap.m.Button({
              text: "Close",
              press: function () {
                oConfigScreen.close();
              }.bind(this),
            }),
          });
 
          oParentView.addDependent(oConfigScreen);

          return oConfigScreen;
        },
      }
    );
  }
);

