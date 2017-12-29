webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shop_shop_component__ = __webpack_require__("../../../../../src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basket_basket_component__ = __webpack_require__("../../../../../src/app/basket/basket.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'store',
        component: __WEBPACK_IMPORTED_MODULE_5__shop_shop_component__["a" /* ShopComponent */]
    },
    {
        path: 'details/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* DetailsComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_6__checkout_checkout_component__["a" /* CheckoutComponent */]
    },
    {
        path: 'basket',
        component: __WEBPACK_IMPORTED_MODULE_7__basket_basket_component__["a" /* BasketComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"topbar\">\n    <div class=\"container\"> \n      <div class=\"topbar__content row\">\n        <div class=\"col-sm-4 hidden-xs\">\n        </div>\n        <div class=\"col-sm-4 topbar__logo\"><a href=\"\"><img src=\"http://via.placeholder.com/80x81\" alt=\"\" class=\"topbar__logo__normal\"><img src=\"\" alt=\"\" class=\"topbar__logo__small\"></a></div>\n        <div class=\"col-sm-4 center hidden-xs\">\n          <div class=\"topbar__cart\"><a href=\"/basket\" class=\"btn btn-transparent\"><i class=\"fa fa-shopping-cart\"></i><span>{{ numCartItems }} Items in cart</span></a></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div role=\"navigation\" class=\"navbar navbar-light\">\n    <div class=\"container\">\n      <div id=\"navigation\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"active dropdown\" href=\"\">Home</a></li>\n          <li><a href=\"store\">Shop</a></li>\n          <li><a href=\"contact\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n    <div class=\"footer__block\">\n      <div class=\"container\">\n        <div class=\"row\">\n          \n          <div class=\"col-md-4 col-sm-6\">\n            <h4>Let's be Friends</h4>\n            <p class=\"social\"><a href=\"\" data-animate-hover=\"pulse\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a><a href=\"\" data-animate-hover=\"pulse\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a><a href=\"\" data-animate-hover=\"pulse\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a><a href=\"\" data-animate-hover=\"pulse\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></p>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"row text-center\">\n              <div class=\"col\">\n                <h4>Locations</h4>\n                <p>234 Sample St.<br>New York, NY 12345</p>\n                <p>USA</p>\n                <p>+1 222 333 4444</p>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"col-md-4 col-sm-6\">\n            <h4>News and Updates</h4>\n            <p>Sign up to get the latest on sales, new releases and more …</p>\n            <form class=\"footer__newsletter\">\n              <div class=\"input-group\">\n                <input type=\"text\" placeholder=\"Enter your email address\" class=\"form-control\"><span class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-send\"></i></button></span>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer__copyright\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n              <p>Photos are used under <a href=\"https://www.pexels.com/photo-license/\">Pexels' CC0 License.</a><br>(Free for personal and commercial use with no attribution required)</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_cookieService) {
        this._cookieService = _cookieService;
        this.title = 'app';
        this.numCartItems = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.numCartItems = this.getCartCount();
    };
    AppComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    AppComponent.prototype.getCartCount = function () {
        return Object.keys(this._cookieService.getAll()).length;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]],
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipe_search__ = __webpack_require__("../../../../../src/app/pipe.search.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipe_sort__ = __webpack_require__("../../../../../src/app/pipe.sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shop_shop_component__ = __webpack_require__("../../../../../src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__basket_basket_component__ = __webpack_require__("../../../../../src/app/basket/basket.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipe_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipe_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_12__shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_13__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__basket_basket_component__["a" /* BasketComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <ul class=\"breadcrumb col-centered\">\n      <li><a href=\"index.html\">Home</a></li>\n      <li>Shopping cart</li>\n    </ul>\n    <div class=\"row page-top\">\n      <div class=\"col-sm-10 offset-sm-1\">\n        <h1>Shopping cart</h1>\n        <p class=\"text-muted\">You currently have {{ numCartItems }} item(s) in your cart. </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div id=\"basket\" class=\"col-md-9\">\n      <div class=\"card\">\n        <form method=\"post\" action=\"checkout1.html\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Product</th>\n                  <th>Quantity</th>\n                  <th>Unit price</th>\n                  <th>Discount</th>\n                  <th colspan=\"2\">Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of cartItems\">\n                  <td><a href=\"details/{{ item.id }}\">{{item.name}}</a></td>\n                  <td><input #quantity type=\"number\" value=\"{{ item.quantity }}\" class=\"form-control\" (change)=\"updateCart(item.id, quantity.value)\"></td>\n                  <td>${{ item.price }}</td>\n                  <td>$0</td>\n                  <td>${{ item.total }}</td>\n                  <td><a href=\"basket\" (click)=\"removeCookie(item.id)\"><i class=\"fa fa-trash-o\"></i></a></td>\n                </tr>\n              </tbody>\n            </table>\n          <div class=\"card-footer\">\n            <div class=\"pull-left\"><a href=\"store\" class=\"btn btn-secondary\"><i class=\"fa fa-chevron-left\"></i> Continue shopping</a></div>\n            <div class=\"pull-right\">\n              <button type=\"submit\" class=\"btn btn-primary\"><a href=\"checkout\">Proceed to checkout<i class=\"fa fa-chevron-right\"></i></a></button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <div id=\"order-summary\" class=\"card\">\n        <div class=\"card-header\">\n          <h3>Order summary</h3>\n        </div>\n        <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n        <div class=\"table-responsive\"> \n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>Order subtotal</td>\n                <th>${{ cartTotal }}</th>\n              </tr>\n              <tr>\n                <td>Shipping and handling</td>\n                <th>$0</th>\n              </tr>\n              <tr>\n                <td>Tax</td>\n                <th>$0</th>\n              </tr>\n              <tr class=\"total\">\n                <td>Total</td>\n                <th>${{ cartTotal }}</th>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Coupon code</h4>\n        </div>\n        <p class=\"text-muted\">If you have a coupon code, please enter it in the box below.</p>\n        <form>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\"><span class=\"input-group-btn\">\n              <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-gift\"></i></button></span>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketComponent = (function () {
    function BasketComponent(_cookieService, _data) {
        this._cookieService = _cookieService;
        this._data = _data;
        this.cartItems = [];
        this.cartTotal = 0;
        this.numCartItems = 0;
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    BasketComponent.prototype.getCart = function () {
        this.cartItems = [];
        this.cartItemCookie = this.getAllCookies();
        this.numCartItems = this.getCookieCount(this.cartItemCookie);
        this.getItems();
    };
    BasketComponent.prototype.updateCart = function (_id, _value) {
        this.setCookie(_id, _value);
        this.getCart();
    };
    BasketComponent.prototype.getItems = function () {
        for (var key in this.cartItemCookie) {
            var quantity = this.getCookie(key);
            var itemData = this._data.getItem(key);
            var total = parseInt(quantity) * itemData.price;
            var item = {
                "id": key,
                "quantity": quantity,
                "name": itemData.name,
                "price": itemData.price,
                "total": total
            };
            this.cartItems.push(item);
            this.cartTotal += total;
        }
    };
    BasketComponent.prototype.getCookieCount = function (_cookie) {
        return Object.keys(_cookie).length;
    };
    BasketComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    BasketComponent.prototype.getAllCookies = function () {
        return this._cookieService.getAll();
    };
    BasketComponent.prototype.setCookie = function (cookieName, cookieVal) {
        this._cookieService.put(cookieName, cookieVal);
    };
    BasketComponent.prototype.removeCookie = function (_cookie) {
        this._cookieService.remove(_cookie);
    };
    BasketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basket',
            template: __webpack_require__("../../../../../src/app/basket/basket.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]],
            styles: [__webpack_require__("../../../../../src/app/basket/basket.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], BasketComponent);
    return BasketComponent;
}());



/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <ul class=\"breadcrumb col-centered\">\n      <li><a href=\"index.html\">Home</a></li>\n      <li>Checkout - Address </li>\n    </ul>\n  </div>\n  <div class=\"row page-top\">\n    <div class=\"col-sm-6 offset-sm-3\">\n      <h1>Checkout - Address</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div id=\"checkout\" class=\"col-md-12\">\n      <div class=\"box\">\n        <form method=\"post\" action=\"checkout2.html\">\n          <ul class=\"nav nav-pills nav-justified\">\n            <li class=\"active\"><a href=\"#\"><i class=\"fa fa-map-marker\"></i><br>Address</a></li>\n            <li class=\"disabled\"><a href=\"#\"><i class=\"fa fa-truck\"></i><br>Delivery Method</a></li>\n            <li class=\"disabled\"><a href=\"#\"><i class=\"fa fa-money\"></i><br>Payment Method</a></li>\n            <li class=\"disabled\"><a href=\"#\"><i class=\"fa fa-eye\"></i><br>Order Review</a></li>\n          </ul>\n          <div class=\"content\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"firstname\">Firstname</label>\n                  <input type=\"text\" id=\"firstname\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"lastname\">Lastname</label>\n                  <input type=\"text\" id=\"lastname\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"Company\">Company</label>\n                  <input type=\"text\" id=\"Company\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"Street\">Street</label>\n                  <input type=\"text\" id=\"Street\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"City\">City</label>\n                  <input type=\"text\" id=\"City\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"ZIP\">ZIP</label>\n                  <input type=\"text\" id=\"ZIP\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"State\">State</label>\n                  <input type=\"text\" id=\"State\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"Country\">Country</label>\n                  <input type=\"text\" id=\"Country\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"Telephone\">Telephone</label>\n                  <input type=\"text\" id=\"Telephone\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"Email\">Email</label>\n                  <input type=\"text\" id=\"Email\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-footer\">\n            <div class=\"pull-left\"><a href=\"basket\" class=\"btn btn-default\"><i class=\"fa fa-chevron-left\"></i>Back to basket</a></div>\n            <div class=\"pull-right\">\n              <button type=\"submit\" class=\"btn btn-primary\">Continue to Delivery Method<i class=\"fa fa-chevron-right\"></i></button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"container\">\n  <div class=\"row\"> \n    <div class=\"col-md-12 col-centered\">\n      <ul class=\"breadcrumb\">\n        <li><a href=\"index.html\">Home</a></li>\n        <li>Contact</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row margin-bottom\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"heading\">\n        <h2>We are here to help you</h2>\n      </div>\n      <p class=\"lead text-center\">\n        Are you curious about something? Do you have some kind of problem with our products? Feel free to contact us with any of the options below.\n      </p>\n      <p class=\"text-center\">Our customer service center is available for you 24/7.</p>\n    </div>\n  </div>\n  <div class=\"row margin-bottom\">\n    <div class=\"col-md-4\">\n      <div class=\"box-simple\">\n        <div class=\"icon\"><i class=\"fa fa-map-marker\"></i></div>\n        <h3>Address</h3>\n        <p>234 Sample St.<br>New York, NY 12345<br>USA</p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"box-simple\">\n        <div class=\"icon\"><i class=\"fa fa-phone\"></i></div>\n        <h3>Call center</h3>\n        <p><strong>+1 222 333 4444</strong></p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"box-simple\">\n        <div class=\"icon\"><i class=\"fa fa-envelope\"></i></div>\n        <h3>Electronic support</h3>\n        <p><strong><a href=\"mailto:\">support@samplestore.com</a></strong></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row text-center margin-bottom\">\n    <div class=\"col-md-12\">\n      <div class=\"heading\">\n        <h2>Contact form</h2>\n      </div>\n    </div>\n    <div class=\"col-md-8 offset-md-2\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"firstname\">Firstname</label>\n              <input id=\"firstname\" type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"lastname\">Lastname</label>\n              <input id=\"lastname\" type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input id=\"email\" type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"subject\">Subject</label>\n              <input id=\"subject\" type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"message\">Message</label>\n              <textarea id=\"message\" class=\"form-control\"></textarea>\n            </div>\n          </div>\n          <div class=\"col-sm-12 text-center\">\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-envelope-o\"></i> Send message</button>\n          </div>\n        </div>\n        <!-- /.row-->\n      </form>\n    </div>\n  </div>\n  <!-- /.row-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.items = [
            {
                "id": 1,
                "name": "Donut",
                "desc": "A doughnut or donut is a type of fried dough confectionery or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.",
                "price": "2",
                "rating": 3.2,
                "imageFolder": "donut",
                "details": "Fancy donut",
                "type": [
                    "chocolate",
                    "vanilla",
                    "strawberry"
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "Dry yeast",
                    "Whole milk",
                    "Bread flour",
                    "Egg",
                    "Sugar",
                    "Salt",
                    "Butter"
                ]
            }, {
                "id": 2,
                "name": "Cake",
                "desc": "Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.",
                "price": "7",
                "rating": 4.5,
                "imageFolder": "cake",
                "details": "Fancy cakes",
                "type": [
                    "chocolate",
                    "vanilla",
                    "strawberry"
                ],
                "ingredients": [
                    "Sugar",
                    "Flour",
                    "Baking powder",
                    "Butter",
                    "Milk",
                    "Eggs"
                ]
            }, {
                "id": 3,
                "name": "Pie",
                "desc": "A pie is a baked dish which is usually made of a pastry dough casing that covers or completely contains a filling of various sweet or savoury ingredients.",
                "price": "5",
                "rating": 4,
                "imageFolder": "pie",
                "details": "Fancy pies",
                "type": [
                    "chocolate",
                    "vanilla",
                    "strawberry"
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "All-purpose flour",
                    "Sugar",
                    "Salt",
                    "Butter",
                    "Egg",
                    "Lemon",
                    "Cinnamon",
                    "Nutmeg"
                ]
            }, {
                "id": 4,
                "name": "Cream Puff",
                "desc": "A cream puff is a filled French choux pastry ball with a typically sweet and moist filling of whipped cream, custard, pastry cream, ice cream, or (particularly in the US)[citation needed] sour cream. The puffs may be decorated or left plain or garnished with chocolate sauce, caramel, or a dusting of powdered sugar. Savory profiterole are also made, filled with pureed meats, cheese, and so on. These were formerly common garnishes for soups.",
                "price": "2",
                "rating": 5,
                "imageFolder": "creampuff",
                "details": "Fancy creampuffs",
                "type": [
                    "chocolate",
                    "vanilla",
                    "strawberry"
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "Vanilla pudding",
                    "Heavy cream",
                    "Milk",
                    "All-purpose flour",
                    "Eggs",
                    "Butter",
                    "Water"
                ]
            }, {
                "id": 5,
                "name": "Cookie",
                "desc": "A cookie is a baked or cooked food that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.",
                "price": "2",
                "rating": 3,
                "imageFolder": "cookie",
                "details": "Fancy cookies",
                "type": [
                    "Chocolate",
                    "Oatmeal"
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "Granulated sugar",
                    "Brown sugar",
                    "Butter",
                    "Vanilla",
                    "Egg",
                    "All-purpose flour",
                    "Baking soda",
                    "Salt"
                ]
            }, {
                "id": 6,
                "name": "Bread",
                "desc": "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been popular around the world and is one of the oldest artificial foods, having been of importance since the dawn of agriculture.",
                "price": "2",
                "rating": 4,
                "imageFolder": "bread",
                "details": "Fancy bread",
                "type": [
                    "",
                    "",
                    ""
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "Active dry yeast",
                    "Water",
                    "Sugar",
                    "Salt",
                    "All-purpose flour"
                ]
            }, {
                "id": 7,
                "name": "Bagel",
                "desc": "A bagel is a bread product originating in the Jewish communities of Poland. It is traditionally shaped by hand into the form of a ring from yeasted wheat dough, roughly hand-sized, that is first boiled for a short time in water and then baked. The result is a dense, chewy, doughy interior with a browned and sometimes crisp exterior. Bagels are often topped with seeds baked on the outer crust, with the traditional ones being poppy or sesame seeds. Some may have salt sprinkled on their surface, and there are different dough types, such as whole-grain or rye.",
                "price": "2",
                "rating": 2.3,
                "imageFolder": "bagel",
                "details": "Freshly baked fancy bagels",
                "type": [
                    "",
                    "",
                    ""
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "Bread flour",
                    "Active dry yeast",
                    "White sugar",
                    "Salt",
                    "Water"
                ]
            }, {
                "id": 8,
                "name": "Custard",
                "desc": "Custard is a variety of culinary preparations based on a cooked mixture of milk or cream and egg yolk. Depending on how much egg or thickener is used, custard may vary in consistency from a thin pouring sauce (crème anglaise) to a thick pastry cream (French: crème pâtissière) used to fill éclairs. Most common custards are used as desserts or dessert sauces and typically include sugar and vanilla. Sometimes flour, corn starch, or gelatin is added as in pastry cream or crème pâtissière.",
                "price": "2",
                "rating": 1,
                "imageFolder": "custard",
                "details": "Fancy custard topped with fruits",
                "type": [
                    "Chocolate",
                    "Vanilla",
                    "Strawberry"
                ],
                "category": [
                    "",
                    "",
                    ""
                ],
                "ingredients": [
                    "Milk",
                    "Cornstarch",
                    "Sugar",
                    "Eggs"
                ]
            }
        ];
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    DataService.prototype.getItem = function (id) {
        //Array starts at 0 so we need to subtract 1
        return this.items[id - 1];
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb col-centered\">\n        <li>\n          <a href=\"\">Home </a>\n        </li>\n        <li>\n          <a href=\"/store\">Shop </a>\n        </li>\n        <li>{{ item.name }}</li>\n      </ul>\n      <div class=\"row page-top col-centered\">\n        <div class=\"col-sm-6\">\n          <h1 class=\"product__heading\">{{ item.name }}</h1>\n          <p class=\"text-muted\">{{ item.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row product__main\">\n        <div class=\"col-sm-5 offset-sm-1\">\n          <div class=\"mainImage\">\n            <!--<img src=\"assets/img/detailbig1.jpg\" alt=\"\" class=\"img-fluid\">-->\n            <ngb-carousel>\n              <ng-template ngbSlide>\n                <img src=\"../assets/product_images/{{ item.imageFolder }}/1.jpeg\" alt=\"\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img src=\"../assets/product_images/{{ item.imageFolder }}/2.jpeg\" alt=\"\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img src=\"../assets/product_images/{{ item.imageFolder }}/3.jpeg\" alt=\"\">\n              </ng-template>\n            </ngb-carousel>\n          </div>\n          <!--\n          <div class=\"ribbon sale\">\n            <div class=\"theribbon\">SALE</div>\n            <div class=\"ribbon-background\"></div>\n          </div>-->\n          <div class=\"ribbon new\">\n            <div class=\"theribbon\">NEW</div>\n            <div class=\"ribbon-background\"></div>\n          </div>\n          <div class=\"row product__thumbs\">\n            <!--<div class=\"col-xs-4\">\n              <a href=\"assets/img/detailbig1.jpg\" class=\"thumb\">\n                <img src=\"assets/img/detailsmall1.jpg\" alt=\"\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-xs-4\">\n              <a href=\"assets/img/detailbig2.jpg\" class=\"thumb\">\n                <img src=\"assets/img/detailsmall2.jpg\" alt=\"\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-xs-4\">\n              <a href=\"assets/img/detailbig3.jpg\" class=\"thumb\">\n                <img src=\"assets/img/detailsmall3.jpg\" alt=\"\" class=\"img-fluid\">\n              </a>\n            </div>-->\n          </div>\n        </div>\n        <div class=\"col-sm-4 offset-sm-1\">\n          <form>\n            <p class=\"price\">${{ item.price }}</p>\n            <div class=\"row\">\n              <div class=\"col-md-6 offset-md-3\">\n                <!--\n                <div class=\"form-group\">\n                  <label for=\"size\">Choose your size</label>\n                  <select id=\"size\" class=\"form-control\">\n                    <option>Small</option>\n                    <option>Medium</option>\n                  </select>\n                </div>-->\n                <div class=\"form-group\">\n                  <label for=\"quantity\">Quantity</label>\n                  <input #quantity type=\"number\" value=\"1\" id=\"quantity\" class=\"form-control\" required>\n                </div>\n              </div>\n            </div>\n            <p class=\"text-center\" >\n              <!-- Hide \"Add to Cart\" button when clicked and show success-->\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"setCookie(item.id, quantity.value)\" *ngIf=\"!buttonWasClicked\">\n                <i class=\"fa fa-shopping-cart\"></i>&nbsp;Add to cart</button>\n\n              <button class=\"btn btn-success\" *ngIf=\"buttonWasClicked\" disabled>\n                  <i class=\"fa fa-check\"></i>&nbsp;Success</button>\n            </p>\n          </form>\n          <!-- Star rating -->\n          <div class=\"col-centered\">\n            <ng-template #t let-fill=\"fill\">\n              <span *ngIf=\"fill === 100\" class=\"star full\">&#10025;</span>\n              <span *ngIf=\"fill === 0\" class=\"star\">&#10025;</span>\n              <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n                <span class=\"half\" [style.width.%]=\"fill\">&#10025;</span>&#10025;\n              </span>\n            </ng-template>\n\n            <ngb-rating [(rate)]=\"currentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n          </div>\n          <div class=\"product__details\">\n            <h4>Product details</h4>\n            <p>{{ item.details }}</p>\n            <h4>Ingredients</h4>\n            <ul>\n              <li *ngFor=\"let ingredient of item.ingredients\">{{ ingredient }}</li>\n            </ul>\n            <h4>Size</h4>\n            <ul>\n              <li>2 in</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsComponent = (function () {
    function DetailsComponent(route, router, _data, _cookieService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._data = _data;
        this._cookieService = _cookieService;
        this.title = 'app';
        //Current star rating(set default to 0)
        this.currentRate = 0;
        this.quantity = 0;
        //Set a toggle for the add cart button so we can display a success button when the user adds an item to the cart
        this.buttonWasClicked = false;
        this.route.params.subscribe(function (res) { return _this.item = _this._data.getItem(res.id); });
        this.currentRate = this.item.rating;
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.goHome = function () {
        this.router.navigate(['']);
    };
    DetailsComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    DetailsComponent.prototype.setCookie = function (cookieName, cookieVal) {
        this._cookieService.put(cookieName, cookieVal);
        this.buttonWasClicked = true;
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details/details.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbRatingConfig */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <section>\n    <div class=\"row\">\n      <ngb-carousel class=\"carousel slide col-sm-10 offset-sm-1\">\n        <ng-template ngbSlide>\n          <img src=\"http://via.placeholder.com/900x500\" alt=\"\" class=\"img-fluid\">\n          <div class=\"carousel-caption\">\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"http://via.placeholder.com/900x500\" alt=\"\" class=\"img-fluid\">\n          <div class=\"carousel-caption\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img src=\"http://via.placeholder.com/900x500\" alt=\"\" class=\"img-fluid\">\n          <div class=\"carousel-caption\">\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-6\"><a href=\"#\"><img src=\"http://via.placeholder.com/555x369\" alt=\"\" class=\"img-fluid img-border\"></a></div>\n      <div class=\"col-sm-6\"><a href=\"#\"><img src=\"http://via.placeholder.com/555x369\" alt=\"\" class=\"img-fluid img-border\"></a></div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-6\"><a href=\"#\"><img src=\"http://via.placeholder.com/555x369\" alt=\"\" class=\"img-fluid img-border\"></a></div>\n      <div class=\"col-sm-6\"><a href=\"#\"><img src=\"http://via.placeholder.com/555x369\" alt=\"\" class=\"img-fluid img-border\"></a></div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(_data, config) {
        this._data = _data;
        //Carousel configuration
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipe.search.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (pipeData, pipeModifier) {
        return pipeData.filter(function (eachItem) {
            return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()); // || 
            //eachItem['desc'].toLowerCase().includes(pipeModifier.toLowerCase()); 
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipe.sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (pipeData, args) {
        pipeData.sort(function (a, b) {
            if (args == "pricelowhi") {
                if (a.price > b.price) {
                    return -1;
                }
                else if (a.price < b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (args == "pricehilow") {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (args == "toprated") {
                if (a.rating > b.rating) {
                    return -1;
                }
                else if (a.rating < b.rating) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a.id < b.id) {
                    return -1;
                }
                else if (a.id > b.id) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
        return pipeData;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"breadcrumb col-centered\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>Shop</li>\n      </ul>\n      <div class=\"row page-top\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <h1>Shop</h1>\n          <p class=\"text-muted\">We sell only the best goods</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!--\n    <div class=\"col-md-3\">\n      <div class=\"panel panel-default sidebar-menu\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Types</h3>\n        </div>\n        <div class=\"panel-body\">\n          <ul class=\"nav nav-pills nav-stacked category-menu\">\n            <li>\n              <ul>\n                <li>\n                  <a href=\"category.html\">All</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Pastry</a>\n                </li>\n                <li>\n                  <a href=\"category.html\">Sweets</a>\n                </li>\n                <li>\n                  <a href=\"category.html\"></a>\n                </li>\n                <li>\n                  <a href=\"category.html\"></a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"panel panel-default sidebar-menu\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Flavors\n            <a class=\"btn btn-xs btn-danger pull-right\" href=\"#\">\n              <i class=\"fa fa-times-circle\"></i>\n              <span class=\"hidden-sm\">Clear</span>\n            </a>\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <form>\n            <div class=\"form-control\"></div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\">\n                <span class=\"colour white\"></span>White ()\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\">\n                <span class=\"colour blue\"></span>Blue ()\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\">\n                <span class=\"colour green\"></span>Green ()\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\">\n                <span class=\"colour yellow\"></span>Yellow ()\n              </label>\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\">\n                <span class=\"colour red\"></span>Red ()\n              </label>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>-->\n    <div class=\"col-md-12\">\n      <div class=\"info-bar\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4\">\n            <form class=\"search\">\n              <input id=\"typeahead-focus\" type=\"text\" class=\"form-control search-input\" name=\"item\" placeholder=\"Search\" [(ngModel)]=\"query\"\n            [ngbTypeahead]=\"search\" #instance=\"ngbTypeahead\" />\n            </form>\n          </div>\n          <div class=\"col-sm-12 col-md-8\">\n            <div class=\"row\">\n              <div class=\"form-inline\">\n                <div class=\"col-md-12 col-sm-12\">\n                  <div class=\"products-sort-by\">\n                    <strong>Sort by</strong>\n                    <select class=\"form-control\" [(ngModel)]=\"sortValue\" name=\"sort\" id=\"sort\">\n                      <option value=\"0\" [selected]=\"0\" selected=\"selected\">Default</option>\n                      <option value=\"pricehilow\" [selected]=\"pricehilow\">Price: Low to High</option>\n                      <option value=\"pricelowhi\" [selected]=\"pricelowhi\">Price: High to Low</option>\n                      <option value=\"toprated\" [selected]=\"toprated\">Top Rated</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row products\">\n        <!-- product-->\n        <div class=\"col-md-4 col-sm-6\" *ngFor=\"let item of (items | search: query | sort: sortValue)\">\n          <div class=\"product\">\n            <div class=\"image\">\n              <a href=\"details/{{ item.id }}\">\n                <img src=\"../assets/product_images/{{ item.imageFolder }}/1.jpeg\" alt=\"\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"text\">\n              <h3>\n                <a href=\"details/{{ item.id }}\">{{ item.name }}</a>\n              </h3>\n              <p class=\"price\">${{ item.price }}</p>\n              <!-- star rating -->\n              <ng-template #t let-fill=\"fill\">\n                <span *ngIf=\"fill === 100\" class=\"star full\">&#10025;</span>\n                <span *ngIf=\"fill === 0\" class=\"star\">&#10025;</span>\n                <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n                  <span class=\"half\" [style.width.%]=\"fill\">&#10025;</span>&#10025;\n                </span>\n              </ng-template>\n\n              <ngb-rating rate=\"{{ item.rating }}\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n              <!-- /star rating-->\n            </div>\n          </div>\n        </div>\n        <!-- /product-->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var products = [];
var ShopComponent = (function () {
    function ShopComponent(_data) {
        this._data = _data;
        this.itemCount = 0;
        this.items = [];
        this.query = '';
        this.sortValue = '0';
        this.currentRate = 0;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : products.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.items = this._data.getItems();
        this.itemCount = this.items.length;
        for (var itemNum in this.items) {
            products.push(this.items[itemNum].name);
        }
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__("../../../../../src/app/shop/shop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/shop.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map