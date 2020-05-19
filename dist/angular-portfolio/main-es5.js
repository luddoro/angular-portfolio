function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./webdev/webdev.component */
    "./src/app/webdev/webdev.component.ts");
    /* harmony import */


    var _devops_devops_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./devops/devops.component */
    "./src/app/devops/devops.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'webdev',
      component: _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_3__["WebdevComponent"]
    }, {
      path: 'devops',
      component: _devops_devops_component__WEBPACK_IMPORTED_MODULE_4__["DevopsComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./webdev/webdev.component */
    "./src/app/webdev/webdev.component.ts");
    /* harmony import */


    var _devops_devops_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./devops/devops.component */
    "./src/app/devops/devops.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./infoblock/infoblock.component */
    "./src/app/infoblock/infoblock.component.ts");
    /* harmony import */


    var _centerwrapper_centerwrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./centerwrapper/centerwrapper.component */
    "./src/app/centerwrapper/centerwrapper.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_11__["WebdevComponent"], _devops_devops_component__WEBPACK_IMPORTED_MODULE_12__["DevopsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_14__["InfoblockComponent"], _centerwrapper_centerwrapper_component__WEBPACK_IMPORTED_MODULE_15__["CenterwrapperComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _webdev_webdev_component__WEBPACK_IMPORTED_MODULE_11__["WebdevComponent"], _devops_devops_component__WEBPACK_IMPORTED_MODULE_12__["DevopsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_14__["InfoblockComponent"], _centerwrapper_centerwrapper_component__WEBPACK_IMPORTED_MODULE_15__["CenterwrapperComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        cardTitle: "cardTitle",
        cardSubtitle: "cardSubtitle",
        cardImage: "cardImage",
        cardContent: "cardContent",
        githubButtonText: "githubButtonText",
        githubButtonLink: "githubButtonLink",
        websiteButtonText: "websiteButtonText",
        websiteButtonLink: "websiteButtonLink"
      },
      decls: 13,
      vars: 8,
      consts: [["mat-card-image", "", 3, "src"], ["mat-raised-button", "", "target", "_blank", 3, "href"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardSubtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.cardImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.githubButtonLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.githubButtonText, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.websiteButtonLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.websiteButtonText);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  margin-top: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 1000px;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: gray;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Db2RlL0FuZ3VsYXIvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBRENBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG5cdG1heC1oZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuXHRjb2xvcjogZ3JheTtcclxufVxyXG5hIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0bWFyZ2luOiA1cHg7XHJcbn1cclxuIiwibWF0LWNhcmQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        cardTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        githubButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        githubButtonLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        websiteButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        websiteButtonLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/centerwrapper/centerwrapper.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/centerwrapper/centerwrapper.component.ts ***!
    \**********************************************************/

  /*! exports provided: CenterwrapperComponent */

  /***/
  function srcAppCenterwrapperCenterwrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CenterwrapperComponent", function () {
      return CenterwrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var CenterwrapperComponent = /*#__PURE__*/function () {
      function CenterwrapperComponent() {
        _classCallCheck(this, CenterwrapperComponent);
      }

      _createClass(CenterwrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CenterwrapperComponent;
    }();

    CenterwrapperComponent.ɵfac = function CenterwrapperComponent_Factory(t) {
      return new (t || CenterwrapperComponent)();
    };

    CenterwrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CenterwrapperComponent,
      selectors: [["centerwrapper"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "container"], [1, "row", "justify-center"]],
      template: function CenterwrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: 100vw;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Db2RlL0FuZ3VsYXIvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9jZW50ZXJ3cmFwcGVyL2NlbnRlcndyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NlbnRlcndyYXBwZXIvY2VudGVyd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jZW50ZXJ3cmFwcGVyL2NlbnRlcndyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2wtMTIge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uanVzdGlmeS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbC0xMiB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterwrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'centerwrapper',
          templateUrl: './centerwrapper.component.html',
          styleUrls: ['./centerwrapper.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../infoblock/infoblock.component */
    "./src/app/infoblock/infoblock.component.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 3,
      vars: 3,
      consts: [[1, "row", "justify-center"], [1, "col-12"], [3, "title", "paragraph", "secondParagraph"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "infoblock", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Kontakta mig")("paragraph", "Mina kontaktuppgifter \xE4r: ")("secondParagraph", "Email: luddenr1@live.se Telefonnummer: 0705500203");
        }
      },
      directives: [_infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_1__["InfoblockComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/devops/devops.component.ts":
  /*!********************************************!*\
    !*** ./src/app/devops/devops.component.ts ***!
    \********************************************/

  /*! exports provided: DevopsComponent */

  /***/
  function srcAppDevopsDevopsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevopsComponent", function () {
      return DevopsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    var DevopsComponent = /*#__PURE__*/function () {
      function DevopsComponent() {
        _classCallCheck(this, DevopsComponent);
      }

      _createClass(DevopsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DevopsComponent;
    }();

    DevopsComponent.ɵfac = function DevopsComponent_Factory(t) {
      return new (t || DevopsComponent)();
    };

    DevopsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DevopsComponent,
      selectors: [["app-devops"]],
      decls: 5,
      vars: 10,
      consts: [[1, "container"], [1, "row", "justify-center"], [1, "col-8"], [3, "cardTitle", "cardSubtitle", "cardImage", "cardContent"], [3, "cardTitle", "cardSubtitle", "cardImage", "cardContent", "websiteButtonText", "websiteButtonLink"]],
      template: function DevopsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Linux - Ubuntu")("cardSubtitle", "Erfarenhet")("cardImage", "../../assets/ubuntulogo.svg")("cardContent", "Jag har under min utbildning p\xE5 NTI f\xE5tt arbeta mycket med Linuxbaserade system, jag driftade v\xE5r klass server d\xE4r vi satte upp virtuella maskiner f\xF6r att hosta webbplatser. Jag har f\xE5tt l\xE4ra mig att s\xE4tta upp hemsidor i apache2, Nginx, Node, Laravel etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "Certifiering - MTA")("cardSubtitle", "MTA")("cardImage", "../../assets/MTAlogo.png")("cardContent", "Jag har en certifikation inom s\xE4kerhetst\xE4nk kring servrar, MTA Security Fundamentals. Den handlar t.ex. om olika typer av malware, h\xE5rdande av servrar, olika typer av attacker & hur man f\xF6rsvarar mot dem med mera.")("websiteButtonText", "Certifiering")("websiteButtonLink", "https://www.youracclaim.com/users/ludvig-bjorkman/badges");
        }
      },
      directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rldm9wcy9kZXZvcHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevopsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-devops',
          templateUrl: './devops.component.html',
          styleUrls: ['./devops.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../infoblock/infoblock.component */
    "./src/app/infoblock/infoblock.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 3,
      consts: [[1, "row", "justify-center"], [1, "col-12"], [3, "title", "paragraph", "secondParagraph"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "infoblock", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ludvig Bj\xF6rkman")("paragraph", "Hej!")("secondParagraph", "Mitt namn \xE4r Ludvig Bj\xF6rkman, jag \xE4r 19 \xE5r gammal och jag har just slutf\xF6rt min utbildning som Gymnasieingenj\xF6r p\xE5 NTI Gymnasiet Ume\xE5. Under utbildningen har vi f\xE5tt l\xE4ra oss att jobba agilt med webbutveckling och samarbeta i lag. Jag har \xE4ven g\xE5tt inritkningen serverdrift, d\xE4r jag fick l\xE4ra mig att hantera linuxsystem, s\xE4tta upp webservrar och hantera virtuella maskiner. Om du vill se de projekt jag jobbat p\xE5 s\xE5 finns de under Webdev, och Devops i sidomenyn.");
        }
      },
      directives: [_infoblock_infoblock_component__WEBPACK_IMPORTED_MODULE_1__["InfoblockComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/infoblock/infoblock.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/infoblock/infoblock.component.ts ***!
    \**************************************************/

  /*! exports provided: InfoblockComponent */

  /***/
  function srcAppInfoblockInfoblockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoblockComponent", function () {
      return InfoblockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _centerwrapper_centerwrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../centerwrapper/centerwrapper.component */
    "./src/app/centerwrapper/centerwrapper.component.ts");

    var InfoblockComponent = /*#__PURE__*/function () {
      function InfoblockComponent() {
        _classCallCheck(this, InfoblockComponent);
      }

      _createClass(InfoblockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoblockComponent;
    }();

    InfoblockComponent.ɵfac = function InfoblockComponent_Factory(t) {
      return new (t || InfoblockComponent)();
    };

    InfoblockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoblockComponent,
      selectors: [["infoblock"]],
      inputs: {
        title: "title",
        paragraph: "paragraph",
        secondParagraph: "secondParagraph",
        image: "image"
      },
      decls: 12,
      vars: 3,
      consts: [[1, "col-4"], [1, "text"], [1, "image"], ["src", "../../assets/thatpicture.png"]],
      template: function InfoblockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "centerwrapper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.paragraph, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondParagraph);
        }
      },
      directives: [_centerwrapper_centerwrapper_component__WEBPACK_IMPORTED_MODULE_1__["CenterwrapperComponent"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  border-radius: 5px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Db2RlL0FuZ3VsYXIvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9pbmZvYmxvY2svaW5mb2Jsb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmZvYmxvY2svaW5mb2Jsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaW5mb2Jsb2NrL2luZm9ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnRleHQgLmltYWdlIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7fVxyXG59XHJcbiIsImltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoblockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'infoblock',
          templateUrl: './infoblock.component.html',
          styleUrls: ['./infoblock.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paragraph: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        secondParagraph: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/webdev"];
    };

    var _c2 = function _c2() {
      return ["/devops"];
    };

    var _c3 = function _c3() {
      return ["/contact"];
    };

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(iconRegistry, sanitizer) {
        _classCallCheck(this, SidebarComponent);

        iconRegistry.addSvgIcon('HomeIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/moon.svg'));
        iconRegistry.addSvgIcon('WebdevIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/alien.svg'));
        iconRegistry.addSvgIcon('DevopsIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/space.svg'));
        iconRegistry.addSvgIcon('ContactIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shuttle.svg'));
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 22,
      vars: 8,
      consts: [[1, "sidebar"], [1, "sidebar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["svgIcon", "HomeIcon"], [1, "link-text"], ["svgIcon", "WebdevIcon"], ["svgIcon", "DevopsIcon"], ["svgIcon", "ContactIcon"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Webdev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DevOps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Kontakta mig");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 100vh;\n  position: fixed;\n  background-color: #23232e;\n  transition: width 200ms ease;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sidebar[_ngcontent-%COMP%]:hover {\n  width: 16rem;\n}\n\n.sidebar[_ngcontent-%COMP%]:hover   .link-text[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.nav-link[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 5rem;\n  color: #b6b6b6;\n  text-decoration: none;\n  -webkit-filter: grayscale(100%) opacity(0.7);\n          filter: grayscale(100%) opacity(0.7);\n  transition: 600ms;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  -webkit-filter: grayscale(0%) opacity(1);\n          filter: grayscale(0%) opacity(1);\n  background: #141418;\n  color: #ececec;\n}\n\n.link-text[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 1rem;\n}\n\n.nav-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  min-width: 3rem;\n  margin: 0.15rem;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.fa-primary[_ngcontent-%COMP%] {\n  color: #ff7eee;\n}\n\n.fa-secondary[_ngcontent-%COMP%] {\n  color: #df49a6;\n}\n\n.fa-primary[_ngcontent-%COMP%], .fa-secondary[_ngcontent-%COMP%] {\n  transition: 600ms;\n}\n\n@media only screen and (max-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    bottom: 0;\n    width: 100vw;\n    height: 5rem;\n  }\n\n  .sidebar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .sidebar[_ngcontent-%COMP%]:hover {\n    transition: none;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Db2RlL0FuZ3VsYXIvYW5ndWxhci1wb3J0Zm9saW8vc3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQVRtQjtFQVVuQiw0QkFBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0FDTkY7O0FEU0E7OztFQUdFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQTFDcUI7RUEyQ3JCLHFCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLGlCQXpDaUI7QUNtQ25COztBRFNBO0VBQ0Usd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLG1CQS9DcUI7RUFnRHJCLGNBbER1QjtBQzRDekI7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURVQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBOztFQUVFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ1BGOztFRFVBO0lBQ0UsbUJBQUE7RUNQRjs7RURVQTtJQUNFLGdCQUFBO0VDUEY7O0VEVUE7SUFDRSx1QkFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2lkZWJhci10ZXh0LXByaW1hcnk6ICNiNmI2YjY7XG4kc2lkZWJhci10ZXh0LXNlY29uZGFyeTogI2VjZWNlYztcbiRzaWRlYmFyLWJnLXByaW1hcnk6ICMyMzIzMmU7XG4kc2lkZWJhci1iZy1zZWNvbmRhcnk6ICMxNDE0MTg7XG4kdHJhbnNpdGlvbi1zcGVlZDogNjAwbXM7XG5cblxuLnNpZGViYXIge1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1iZy1wcmltYXJ5O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBlYXNlO1xufVxuXG4uc2lkZWJhci1uYXYge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyOmhvdmVyIHtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4uc2lkZWJhcjpob3ZlciAubGluay10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGluayxcbnNwYW4sXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1cmVtO1xuICBjb2xvcjogJHNpZGViYXItdGV4dC1wcmltYXJ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KTtcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tc3BlZWQ7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xuICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1iZy1zZWNvbmRhcnk7XG4gIGNvbG9yOiAkc2lkZWJhci10ZXh0LXNlY29uZGFyeTtcbn1cblxuLmxpbmstdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5cbi5uYXYtbGluayBzdmcge1xuICBtaW4td2lkdGg6IDNyZW07XG4gIG1hcmdpbjogMC4xNXJlbTtcbn1cblxubWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmZhLXByaW1hcnkge1xuICBjb2xvcjogI2ZmN2VlZTtcbn1cblxuLmZhLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZGY0OWE2O1xufVxuXG4uZmEtcHJpbWFyeSxcbi5mYS1zZWNvbmRhcnkge1xuICB0cmFuc2l0aW9uOiAoJHRyYW5zaXRpb24tc3BlZWQpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNXJlbTtcbiAgfVxuXG4gIC5zaWRlYmFyLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5zaWRlYmFyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIiwiLnNpZGViYXIge1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzJlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBlYXNlO1xufVxuXG4uc2lkZWJhci1uYXYge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyOmhvdmVyIHtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4uc2lkZWJhcjpob3ZlciAubGluay10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGluayxcbnNwYW4sXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1cmVtO1xuICBjb2xvcjogI2I2YjZiNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNyk7XG4gIHRyYW5zaXRpb246IDYwMG1zO1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcbiAgYmFja2dyb3VuZDogIzE0MTQxODtcbiAgY29sb3I6ICNlY2VjZWM7XG59XG5cbi5saW5rLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm5hdi1saW5rIHN2ZyB7XG4gIG1pbi13aWR0aDogM3JlbTtcbiAgbWFyZ2luOiAwLjE1cmVtO1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZmEtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmY3ZWVlO1xufVxuXG4uZmEtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICNkZjQ5YTY7XG59XG5cbi5mYS1wcmltYXJ5LFxuLmZhLXNlY29uZGFyeSB7XG4gIHRyYW5zaXRpb246IDYwMG1zO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNXJlbTtcbiAgfVxuXG4gIC5zaWRlYmFyLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5zaWRlYmFyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/webdev/webdev.component.ts":
  /*!********************************************!*\
    !*** ./src/app/webdev/webdev.component.ts ***!
    \********************************************/

  /*! exports provided: WebdevComponent */

  /***/
  function srcAppWebdevWebdevComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebdevComponent", function () {
      return WebdevComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    var WebdevComponent = /*#__PURE__*/function () {
      function WebdevComponent() {
        _classCallCheck(this, WebdevComponent);
      }

      _createClass(WebdevComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WebdevComponent;
    }();

    WebdevComponent.ɵfac = function WebdevComponent_Factory(t) {
      return new (t || WebdevComponent)();
    };

    WebdevComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebdevComponent,
      selectors: [["app-webdev"]],
      decls: 5,
      vars: 16,
      consts: [[1, "container"], [1, "row", "justify-center"], [1, "col-8"], [3, "cardTitle", "cardSubtitle", "cardImage", "cardContent", "githubButtonText", "githubButtonLink", "websiteButtonText", "websiteButtonLink"]],
      template: function WebdevComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "App - NTILan")("cardSubtitle", "PWA")("cardImage", "../../assets/NTILan1.png")("cardContent", "Jag utvecklade tillsammans med tv\xE5 andra klasskamrater en PWA. Den var skriven i VueJS och NUXT, samt Laravel f\xF6r dess backend. Vi jobbade med Scrum principer och jobbade agilt.")("githubButtonText", "Github")("githubButtonLink", "https://github.com/TE4-Umea/lan-frontend")("websiteButtonText", "Hemsida")("websiteButtonLink", "https://lan.umea-ntig.se/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", "App - Rankone.global")("cardSubtitle", "HybridApp")("cardImage", "../../assets/r1.png")("cardContent", "Under min praktik p\xE5 RankOne.global s\xE5 var min uppgift att ompaketera deras hemsida som en app, detta utf\xF6rdes med en cross platform app skriven i @Ionic/React.")("githubButtonText", "Github")("githubButtonLink", "https://www.github.com")("websiteButtonText", "Hemsida")("websiteButtonLink", "https://www.rankone.global");
        }
      },
      directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYmRldi93ZWJkZXYuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebdevComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-webdev',
          templateUrl: './webdev.component.html',
          styleUrls: ['./webdev.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/d/Code/Angular/angular-portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map