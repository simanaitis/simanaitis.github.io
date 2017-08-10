webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-left-auto{\r\n    margin-left: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    Product catalog\r\n    <app-update-catalog class=\"margin-left-auto\"></app-update-catalog>\r\n</md-toolbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalog_catalog_module__ = __webpack_require__("../../../../../src/app/catalog/catalog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__catalog_update_catalog_update_catalog_component__ = __webpack_require__("../../../../../src/app/catalog/update-catalog/update-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers__ = __webpack_require__("../../../../../src/app/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__catalog_load_catalog_data_load_catalog_data_effects__ = __webpack_require__("../../../../../src/app/catalog/load-catalog-data/load-catalog-data.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__catalog_update_catalog_update_catalog_component__["a" /* UpdateCatalogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__catalog_catalog_module__["a" /* CatalogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* ROUTES */], { useHash: false, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["a" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["a" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_11__catalog_load_catalog_data_load_catalog_data_effects__["a" /* CatalogEffect */]]),
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            [
                (function () {
                    function DataResolver() {
                    }
                    DataResolver.prototype.resolve = function (route, state) { };
                    return DataResolver;
                }())
            ]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__catalog_catalog_routes__ = __webpack_require__("../../../../../src/app/catalog/catalog.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });

var ROUTES = __WEBPACK_IMPORTED_MODULE_0__catalog_catalog_routes__["a" /* CATALOG_ROUTES */].slice();
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__load_catalog_data_load_catalog_data_component__ = __webpack_require__("../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_container_component__ = __webpack_require__("../../../../../src/app/catalog/catalog/catalog-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_overview_product_overview_component__ = __webpack_require__("../../../../../src/app/catalog/product-overview/product-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalog_search_search_component__ = __webpack_require__("../../../../../src/app/catalog/catalog/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalog_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/catalog/catalog/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {MdTableModule} from '@angular/material'

var CatalogModule = (function () {
    function CatalogModule() {
    }
    return CatalogModule;
}());
CatalogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_cdk__["_0" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdProgressBarModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__load_catalog_data_load_catalog_data_component__["a" /* LoadCatalogDataComponent */],
            __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_container_component__["a" /* CatalogContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__product_overview_product_overview_component__["a" /* ProductOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__catalog_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__catalog_product_list_product_list_component__["a" /* ProductListComponent */],
        ],
    })
], CatalogModule);

//# sourceMappingURL=catalog.module.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__load_catalog_data_load_catalog_data_component__ = __webpack_require__("../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_catalog_container_component__ = __webpack_require__("../../../../../src/app/catalog/catalog/catalog-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_overview_product_overview_component__ = __webpack_require__("../../../../../src/app/catalog/product-overview/product-overview.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATALOG_ROUTES; });



var CATALOG_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__load_catalog_data_load_catalog_data_component__["a" /* LoadCatalogDataComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_1__catalog_catalog_container_component__["a" /* CatalogContainerComponent */] },
    { path: 'catalog/:productId/overview', component: __WEBPACK_IMPORTED_MODULE_2__product_overview_product_overview_component__["a" /* ProductOverviewComponent */] },
];
//# sourceMappingURL=catalog.routes.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/catalog-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_PRODUCTS_SUCCESS; });
/* unused harmony export LOAD_PRODUCTS_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadProductsSuccess; });
/* unused harmony export LoadProductsFail */
var LOAD_PRODUCTS = '[Product] load';
var LOAD_PRODUCTS_SUCCESS = '[Product] load success';
var LOAD_PRODUCTS_FAILURE = '[Product] load failure';
var LoadProducts = (function () {
    function LoadProducts(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS;
    }
    return LoadProducts;
}());

var LoadProductsSuccess = (function () {
    function LoadProductsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS_SUCCESS;
    }
    return LoadProductsSuccess;
}());

var LoadProductsFail = (function () {
    function LoadProductsFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS_SUCCESS;
    }
    return LoadProductsFail;
}());

//# sourceMappingURL=catalog-actions.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/catalog-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/catalog-container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>\n<app-product-list></app-product-list>\n"

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/catalog-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogContainerComponent = (function () {
    function CatalogContainerComponent() {
    }
    CatalogContainerComponent.prototype.ngOnInit = function () {
    };
    return CatalogContainerComponent;
}());
CatalogContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-catalog-container',
        template: __webpack_require__("../../../../../src/app/catalog/catalog/catalog-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalog/catalog/catalog-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CatalogContainerComponent);

//# sourceMappingURL=catalog-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/catalog-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/catalog/catalog-actions.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loaded: false,
    products: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__catalog_actions__["a" /* LOAD_PRODUCTS */]: {
            return __assign({}, state, { loaded: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__catalog_actions__["c" /* LOAD_PRODUCTS_SUCCESS */]: {
            return {
                loaded: true,
                products: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=catalog-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-list works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/catalog/catalog/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalog/catalog/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductListComponent);

//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n\n  <md-input-container class=\"example-full-width\">\n    <input mdInput #message maxlength=\"256\" placeholder=\"Search for product\">\n    <md-hint align=\"start\">Use name, SKU, description or metadata </md-hint>\n  </md-input-container>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/catalog/catalog/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/catalog/catalog/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalog/catalog/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n\nGetting application ready"

/***/ }),

/***/ "../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/catalog/catalog-actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadCatalogDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadCatalogDataComponent = (function () {
    // TODO figure out what the fuck asynch pipe is
    function LoadCatalogDataComponent(_store) {
        this._store = _store;
        _store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__catalog_catalog_actions__["d" /* LoadProducts */]({}));
        _store.select('catalog').subscribe(function (catalog) {
            if (catalog.loaded) {
                console.log('loaded');
            }
        });
    }
    LoadCatalogDataComponent.prototype.ngOnInit = function () {
    };
    return LoadCatalogDataComponent;
}());
LoadCatalogDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-load-catalog-data',
        template: __webpack_require__("../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalog/load-catalog-data/load-catalog-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */]) === "function" && _a || Object])
], LoadCatalogDataComponent);

var _a;
//# sourceMappingURL=load-catalog-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/load-catalog-data/load-catalog-data.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalog_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/catalog/catalog-actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogEffect; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatalogEffect = (function () {
    function CatalogEffect(_http, _actions$) {
        var _this = this;
        this._http = _http;
        this._actions$ = _actions$;
        this.loadCatalog$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_6__catalog_catalog_actions__["a" /* LOAD_PRODUCTS */])
            .map(function (action) { return action; })
            .switchMap(function (payload) {
            return _this.handleLoad()
                .map(function (res) {
                return new __WEBPACK_IMPORTED_MODULE_6__catalog_catalog_actions__["b" /* LoadProductsSuccess */](res.json());
            });
            // .catch( ( e ) => of( new LoadProductsFail( e ) ) );
        });
    }
    CatalogEffect.prototype.handleLoad = function () {
        return [];
    };
    return CatalogEffect;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], CatalogEffect.prototype, "loadCatalog$", void 0);
CatalogEffect = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object])
], CatalogEffect);

var _a, _b;
//# sourceMappingURL=load-catalog-data.effects.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/product-overview/product-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/product-overview/product-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-overview works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/catalog/product-overview/product-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductOverviewComponent = (function () {
    function ProductOverviewComponent() {
    }
    ProductOverviewComponent.prototype.ngOnInit = function () {
    };
    return ProductOverviewComponent;
}());
ProductOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-product-overview',
        template: __webpack_require__("../../../../../src/app/catalog/product-overview/product-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalog/product-overview/product-overview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductOverviewComponent);

//# sourceMappingURL=product-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/update-catalog/update-catalog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/update-catalog/update-catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-raised-button color=\"accent\" class=\"margin-left-auto\">Update data</button>"

/***/ }),

/***/ "../../../../../src/app/catalog/update-catalog/update-catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateCatalogComponent = (function () {
    function UpdateCatalogComponent() {
    }
    UpdateCatalogComponent.prototype.ngOnInit = function () {
    };
    return UpdateCatalogComponent;
}());
UpdateCatalogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-update-catalog',
        template: __webpack_require__("../../../../../src/app/catalog/update-catalog/update-catalog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/catalog/update-catalog/update-catalog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UpdateCatalogComponent);

//# sourceMappingURL=update-catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__catalog_catalog_catalog_reducer__ = __webpack_require__("../../../../../src/app/catalog/catalog/catalog-reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });

var reducers = {
    catalog: __WEBPACK_IMPORTED_MODULE_0__catalog_catalog_catalog_reducer__["a" /* reducer */]
};
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map