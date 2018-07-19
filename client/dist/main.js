(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/src/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./client/src/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/src/app/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./client/src/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./client/src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./client/src/app/components/main/main.component.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employees/employees.component */ "./client/src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/review/review.component */ "./client/src/app/components/review/review.component.ts");
/* harmony import */ var _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/adduser/adduser.component */ "./client/src/app/components/adduser/adduser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        children: [
            { path: 'employees', component: _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"] },
            { path: '', redirectTo: '/employees', pathMatch: 'full' },
            { path: 'review', component: _components_review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"] },
        ],
    },
    { path: 'adduser', component: _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_7__["AdduserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./client/src/app/app.component.css":
/*!******************************************!*\
  !*** ./client/src/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/app.component.html":
/*!*******************************************!*\
  !*** ./client/src/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./client/src/app/app.component.ts":
/*!*****************************************!*\
  !*** ./client/src/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./client/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/src/app/app.module.ts":
/*!**************************************!*\
  !*** ./client/src/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth_guard */ "./client/src/app/auth_guard.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./client/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./client/src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./client/src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "./client/src/app/components/main/main.component.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employees/employees.component */ "./client/src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/review/review.component */ "./client/src/app/components/review/review.component.ts");
/* harmony import */ var _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/adduser/adduser.component */ "./client/src/app/components/adduser/adduser.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./client/src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import {employee} from './services/employee.sevice'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
                _components_review_review_component__WEBPACK_IMPORTED_MODULE_10__["ReviewComponent"],
                _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_11__["AdduserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["authService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/src/app/auth_guard.ts":
/*!**************************************!*\
  !*** ./client/src/app/auth_guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token'))
            return true;
        localStorage.removeItem('token');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./client/src/app/components/adduser/adduser.component.css":
/*!*****************************************************************!*\
  !*** ./client/src/app/components/adduser/adduser.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.product-navbar{\r\n    padding-left: 5%;\r\n    padding-right: 2%;\r\n    background-color: white !important;\r\n    \r\n}"

/***/ }),

/***/ "./client/src/app/components/adduser/adduser.component.html":
/*!******************************************************************!*\
  !*** ./client/src/app/components/adduser/adduser.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <nav class=\"navbar product-navbar\">\n\n    <span>\n      <img src=\"./assets/images/Back.svg\" alt=\"\" (click)=\"backClicked()\" style=\"cursor: pointer; height:18px;\">\n      <span></span> &nbsp; <span *ngIf=\"iscreateMode\"> Add Employee </span> <span *ngIf=\"!iscreateMode\"> Edit Employee </span> </span>\n    <span (click)=\"backClicked()\" class=\"float-right\" style=\"cursor: pointer;\">&#10006;</span>\n  </nav>\n  <div class=\"container mt-3\">\n    <form (ngSubmit)=\"save()\" #form=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-4 mt-3 mb-3\">\n          <div class=\"form-group\">\n            <label>\n              Employee Name\n            </label>\n            <input type=\"text\" [(ngModel)]=\"user.name\" class=\"form-control\"  name=\"name\" #name=\"ngModel\" required>\n            <span style=\"color:red\" *ngIf=\"name.invalid  && name.dirty\">name is mandatory</span>\n          </div>\n        </div>\n        <div class=\"col-md-4 mt-3 mb-3\">\n            <div class=\"form-group\">\n                <label>\n                 Email\n                </label>\n                <input [disabled]='!iscreateMode' type=\"text\" [(ngModel)]=\"user.email\" class=\"form-control\"  name=\"email\" #email=\"ngModel\" required>\n                <span style=\"color:red\" *ngIf=\"email.invalid  && email.dirty\">email is mandatory</span>\n              </div>\n        </div>\n        <div class=\"col-md-4 mt-3 mb-3\">\n            <div class=\"form-group\">\n                <label>\n                  Employee Mobile\n                </label>\n                <input type=\"number\" [(ngModel)]=\"user.mobile\" class=\"form-control\"  name=\"mobile\" #mobile=\"ngModel\" required>\n                <span style=\"color:red\" *ngIf=\"mobile.invalid  && mobile.dirty\">mobile number is mandatory</span>\n              </div>\n        </div>\n        <div class=\"col-md-4  mb-3\">\n            <div class=\"form-group\">\n                <label>\n                  Employee Role\n                </label>\n                <input type=\"text\"[(ngModel)]=\"user.role\" class=\"form-control\"  name=\"role\" #role=\"ngModel\" required>\n                <span style=\"color:red\" *ngIf=\"role.invalid  && role.dirty\">role is mandatory</span>\n              </div>\n        </div>\n        <div class=\"col-md-4  mb-3\">\n            <div class=\"form-group\" *ngIf=\"iscreateMode\">\n                <label>\n                  Employee password\n                </label>\n                <input type=\"password\" [(ngModel)]=\"user.pass1\" class=\"form-control\"  name=\"pass1\" #pass1=\"ngModel\" required>\n                <span style=\"color:red\" *ngIf=\"pass1.invalid  && pass1.dirty\">password is mandatory</span>\n              </div>\n        </div>\n        <div class=\"col-md-4  mb-3\">\n            <div class=\"form-group\" *ngIf=\"iscreateMode\">\n                <label>\n                  Employee Retype Password\n                </label>\n                <input type=\"password\" [(ngModel)]=\"user.pass2\" class=\"form-control\"  name=\"pass2\" #pass2=\"ngModel\" required>\n                <span style=\"color:red\" *ngIf=\"pass2.invalid  && pass2.dirty\">password is mandatory</span>\n              </div>\n        </div>\n        <div class=\"col-md-4  mb-3 float-right\">\n          <button type=\"submit\" [disabled]=\"form.invalid\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./client/src/app/components/adduser/adduser.component.ts":
/*!****************************************************************!*\
  !*** ./client/src/app/components/adduser/adduser.component.ts ***!
  \****************************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./client/src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(_location, authservice, route) {
        this._location = _location;
        this.authservice = authservice;
        this.route = route;
        this.user = {};
        this.iscreateMode = true;
    }
    AdduserComponent.prototype.ngOnInit = function () {
        this.fetchId();
    };
    AdduserComponent.prototype.save = function () {
        var _this = this;
        if (this.iscreateMode) {
            this.authservice.newuser(this.user).subscribe(function (response) {
                console.log(response);
                _this._location.back();
            }, function (response) {
            });
        }
        else {
            this.authservice.edituser(this.user).subscribe(function (response) {
                console.log(response);
                _this._location.back();
            }, function (response) {
            });
        }
    };
    AdduserComponent.prototype.backClicked = function () {
        this._location.back();
    };
    AdduserComponent.prototype.fetchId = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.queryParams = params;
            _this.getuser(_this.queryParams.id);
            if (_this.queryParams.id) {
                _this.iscreateMode = false;
            }
        });
    };
    AdduserComponent.prototype.getuser = function (id) {
        var _this = this;
        var payload = {};
        payload.id = id;
        this.authservice.getuser(payload).subscribe(function (Response) {
            console.log(Response);
            _this.user = Response;
        }, function (Response) {
        });
    };
    AdduserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./client/src/app/components/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./client/src/app/components/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./client/src/app/components/employees/employees.component.css":
/*!*********************************************************************!*\
  !*** ./client/src/app/components/employees/employees.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action{\r\n    border: 1px solid rgb(184, 182, 182);\r\n    cursor: pointer;\r\n    margin: 0 2px;\r\n    padding: 5px;\r\n}\r\n.add-user{\r\n    float: right;\r\n    margin-right: 20px;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n}\r\n.add-user span{\r\n    width: 80px;\r\n    border: 1px solid #ef4b6e;\r\n    padding: 5px 10px;\r\n    color: #ef4b6e;\r\n}\r\n.table{\r\n    border-bottom: 1px solid #dee2e6;\r\n  \r\n}\r\n.btn{\r\n    min-width: 100px;\r\n}"

/***/ }),

/***/ "./client/src/app/components/employees/employees.component.html":
/*!**********************************************************************!*\
  !*** ./client/src/app/components/employees/employees.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid mt-3 pl-5 pr-5\">\n  <div>\n    <div class=\"add-user\" [routerLink]=\"['/adduser']\">\n   <span>  + add </span>\n    </div>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>User Name</th>\n          <th>designation</th>\n          <!-- <th>Report To</th> -->\n          <th>Email</th>\n          <th>Mobile Number</th>\n          <th> Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\" let item of userData \">\n          <td>{{item.name}}</td>\n          <td>{{item.role}}</td>\n          <!-- <td>prakhar</td> -->\n           <td>{{item.email}}</td>\n           <td>{{item.mobile}}</td>\n           <td><span (click)=\"edit(item._id)\" class=\"action\">Edit</span> <span data-toggle=\"modal\" data-target=\"#myModal\" class=\"action\" (click)=\"ondelete(item)\">Delete</span></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Delete Employee</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n        <div class=\"modal-body\" style=\"text-align: center;\"> \n          <span> Are you want delete Employee</span> <br>\n          <br>\n            <i style=\"font-size:24px;color:red\" class=\"fa fa-warning\"></i>\n\n        </div>\n        \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" style=\"background-color: gray;border-color: gray;\" data-dismiss=\"modal\">No</button>\n          <button class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"delete()\" > yes</button>\n        </div>\n        \n      </div>\n    </div>\n"

/***/ }),

/***/ "./client/src/app/components/employees/employees.component.ts":
/*!********************************************************************!*\
  !*** ./client/src/app/components/employees/employees.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.userData = [];
        this.deleteid = {};
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getusers();
    };
    EmployeesComponent.prototype.delete = function () {
        var _this = this;
        this.authservice.deleteuser(this.deleteid).subscribe(function (response) {
            _this.getusers();
        }, function (response) {
        });
    };
    EmployeesComponent.prototype.ondelete = function (item) {
        this.deleteid = item;
    };
    EmployeesComponent.prototype.getusers = function () {
        var _this = this;
        this.authservice.getusers().subscribe(function (response) {
            _this.userData = response;
        }, function (response) {
        });
    };
    EmployeesComponent.prototype.edit = function (id) {
        console.log("hfghghf");
        this.router.navigate(['/adduser'], { queryParams: { id: id } });
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./client/src/app/components/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./client/src/app/components/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./client/src/app/components/login/login.component.css":
/*!*************************************************************!*\
  !*** ./client/src/app/components/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.login{\r\n    position: relative;\r\n}\r\n.login .row{\r\n    align-items: center!important;\r\n    margin: 0\r\n}\r\n.bgimage{\r\n    background: url(/assets/images/login.png);\r\n    background-size: 100% 100%;\r\n    height: 100vh;\r\n  \r\n  \r\n}\r\n.modal-header\r\n{\r\n    background-color:#f5f7f9!important\r\n}\r\n.pl-2{\r\n    padding-left: 0.1rem !important;\r\n}\r\n.col-md-8 {\r\n    flex: 0 0 64.666667%;\r\n    max-width: 64.666667%;\r\n}\r\n.plr{\r\n    padding: 0 40px;\r\n}\r\n.login-btn{\r\n    width: 100%;\r\n    height: 60px;\r\n    border: none;\r\nborder-radius: 2px;\r\nfont-size: 18px;\r\n}\r\n.foyr-pink {\r\n    color: #ef4b6e !important;\r\n\r\n}\r\n.form-group{\r\n    position:relative\r\n}\r\n.inputCheck{\r\n    border-top:none;\r\n    border-left:none;\r\n    border-right: none;\r\n    text-transform: lowercase;\r\n}\r\nlabel{\r\n    color:#999; \r\n    font-size:16px;\r\n    font-weight:normal;\r\n    position:absolute;\r\n    pointer-events:none;\r\n    left:14px;\r\n    top:10px;\r\n    transition:0.2s ease all; \r\n    -moz-transition:0.2s ease all; \r\n    -webkit-transition:0.2s ease all;\r\n  }\r\n.inputCheck:focus\t{ \r\n    box-shadow: unset ;\r\n    border: none;\r\n    outline: none;\r\n}\r\n/* active state */\r\n.inputCheck:focus ~ label, input:valid ~ label \t\t{\r\n    top:-20px;\r\n    font-size:14px;\r\n    color:#ef4b6e;\r\n    box-shadow: unset;\r\n   \r\n  }\r\n.bar \t{ position:relative; display:block; width:100%; }\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:#ef4b6e; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n.bar:before {\r\n  left:50%;\r\n}\r\n.bar:after {\r\n  right:50%; \r\n}\r\n/* active state */\r\n.inputCheck:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n/* /////////////// */\r\n.remember{\r\n    font-size: 14px;\r\n}\r\n.checkbefore{\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 15px;\r\n    height: 14px;\r\n    width: 14px;\r\n   \r\n    border: 1px solid rgba(0,0,0,0.54);\r\n    border-radius: 2px;\r\n   }\r\n.checkmark {\r\n    background-color: #ef4b6e;\r\n    border: none;\r\n}\r\n.row{\r\n    background-color: #f5f7f9;\r\n}\r\n.form-control{\r\n    background-color: #f5f7f9 !important;\r\n}\r\n.checkmark:after {\r\n    left: 5px;\r\n    top: 1px;\r\n    width: 4px;\r\n    height: 9px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    content: \"\";\r\n    position: absolute;\r\n }\r\ninput{\r\n     outline: unset;\r\n }\r\n.mt-6{\r\n     margin-top: 6rem;\r\n }\r\n.mt-4{\r\n     margin-left: 8%;\r\n     margin-right: 5%;\r\n     padding-top: 10px;\r\n }\r\n.forgot-model-footer{\r\n   justify-content: center;\r\n }\r\n.forgot-model-footer button{\r\n     min-width: 150px;\r\n }\r\n.error-msg{\r\n     color:red;\r\n     font-size:14px;\r\n     padding-left: 5px;\r\n }\r\n"

/***/ }),

/***/ "./client/src/app/components/login/login.component.html":
/*!**************************************************************!*\
  !*** ./client/src/app/components/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\n<div class=\"row\">\n  <div class=\"col-md-8 \">\n    <div class=\"bgimage\">\n\n    </div>\n  </div>\n  <div class=\"col-md-4 plr mb-3\">\n    <form (ngSubmit)=\"login()\" >\n      <div class=\"col mb-5\">\n        <h2 style=\"text-align:center\">Employee Review</h2>\n      </div>\n      <div class=\"col-md-12 mt-3\">\n        <div class=\"form-group \">\n\n          <input [(ngModel)]=\"model.email\" type=\"text\" class=\"form-control inputCheck\" id=\"email\" name=\"email\" #email=\"ngModel\" required>\n          <label class=\"placeholder\" for=\"email\">Email </label>\n          <span class=\"bar\"></span>\n          <!-- <span  *ngIf=\"iswrong\" class=\"error-msg\">Invalid User</span> -->\n        </div>\n        <div class=\"form-group mt-5\">\n          <input [(ngModel)]=\"model.password\" type=\"password\" class=\"form-control inputCheck\" name=\"password\" #password=\"ngModel\" required>\n          <label class=\"placeholder\" for=\"pwd\">Password</label>\n          <span class=\"bar\"></span>\n          <!-- <span *ngIf=\"iswrong\" class=\"error-msg\">Invalid Credentials</span> -->\n        </div>\n      </div>\n      <!-- <div class=\"col-md-12 mt-5\">\n        <div class=\"row\">\n          <div class=\"col-md-6 remember\" style=\"padding-left: 35px\">\n            <span class=\"checkbefore\" (click)=\"rememberme($event)\"></span> Remember Me</div>\n          <div class=\"col-md-6 remember\">\n            <div class=\"float-right foyr-pink\" data-toggle=\"modal\" data-target=\"#myModal\" style=\"cursor: pointer;\">Forgot password ?</div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-12 mt-5\">\n        <button class=\"submit\" class=\"login-btn foyr-bg-pink\"> Login</button>\n      </div>\n  \n    </form>\n  </div>\n</div>\n</section>"

/***/ }),

/***/ "./client/src/app/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./client/src/app/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./client/src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.model);
        this.authservice.login(this.model).subscribe(function (response) {
        }, function (response) {
        });
        this.router.navigate(['/']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./login.component.html */ "./client/src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./client/src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./client/src/app/components/main/main.component.css":
/*!***********************************************************!*\
  !*** ./client/src/app/components/main/main.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.main{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top:0;\r\n    z-index: 1000;\r\n}\r\n.nav-bar{\r\n    max-height: 48px;\r\n}\r\n.bgcolor-grey{\r\n    background-color: white;\r\n    /* background-color: grey; */\r\n    padding: 5px 0;\r\n    position: relative;\r\n}\r\n.text-captalize{\r\n    text-transform: capitalize\r\n}\r\n.productMaster-header-text{\r\n    font-weight: 600;\r\n    font-size: 1.4vw;\r\n    margin: 0 3vw;\r\n}\r\n.header-searchbar{\r\n    width:30vw;\r\n margin-right:-2px;\r\n    padding: 4px;\r\n    border: 1px solid #f5f7f9;\r\n    text-transform: lowercase;\r\n   \r\n}\r\n.user-container{\r\n   float: right;\r\n   padding: 0px 30px;\r\n   padding-top: 5px;\r\n   cursor: pointer;\r\n}\r\n.user-container-logo{\r\n    height: 28px;\r\n    width: 28px;\r\n    border-radius:2px;\r\n    border: 1px solid rgb(66, 65, 65);\r\n}\r\n.headernav2{\r\n  border-top:2px solid white;\r\n  box-shadow: 0px 0px 0px 3px aliceblue;\r\n}\r\n.headernav2 .navbar-collapse {\r\n    text-align: center;\r\n}\r\n.headernav2 .navbar-collapse a{\r\n    color:black;\r\n    display: inline;\r\n}\r\n.headernav2 .navbar-collapse ul{\r\n    margin: 0 10px;\r\n\r\n}\r\n.headernav2 .navbar-collapse ul li{\r\n    margin: 0 2vw;\r\n    font-size: 18px;\r\n    height: 100%;\r\n}\r\n.headernav2 .navbar-collapse ul li i{\r\n   \r\n    margin-top: 2px;\r\n}\r\nli a:hover{\r\n    color:#ef4b6e!important;\r\n}\r\na:focus{\r\n    color:#ef4b6e!important;\r\n}\r\nli a:active{\r\n    color:#ef4b6e!important;\r\n}\r\n.active{\r\n    color:#ef4b6e!important;\r\n}\r\n.btn{\r\n    border-radius:2px;\r\n}\r\n.nav-item:hover{\r\n    color:#ef4b6e!important;\r\n}"

/***/ }),

/***/ "./client/src/app/components/main/main.component.html":
/*!************************************************************!*\
  !*** ./client/src/app/components/main/main.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"background-color: #f5f7f9;color:rgba(0,0,0,0.87);\">\n<nav class=\"navbar navbar-expand-sm bgcolor-grey nav-bar\">\n  <span class=\"text-captalize productMaster-header-text\">Employee Review</span>\n \n</nav>\n<nav class=\"navbar navbar-expand-sm bgcolor-grey headernav2\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse \" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav \">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/employees']\"> Employees</a>\n        <!-- <i class=\"fa fa-angle-down\"></i> -->\n      </li>\n\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/review']\">Review</a>\n        <!-- <i class=\"fa fa-angle-down\"></i> -->\n      </li>\n\n    </ul>\n  </div>\n\n \n</nav>\n<router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./client/src/app/components/main/main.component.ts":
/*!**********************************************************!*\
  !*** ./client/src/app/components/main/main.component.ts ***!
  \**********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Router, ActivatedRoute } from '@angular/router';
var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./client/src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./client/src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./client/src/app/components/review/review.component.css":
/*!***************************************************************!*\
  !*** ./client/src/app/components/review/review.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-white{\r\n  background-color: white;\r\n  border-color: rgb(211, 208, 208);\r\n  color: black\r\n}\r\n.show>.btn-primary.dropdown-toggle{\r\n    color: black;\r\n    border: none;\r\n}\r\n.btn:focus{\r\nbox-shadow: unset;\r\n}\r\n.submit{\r\n    position: absolute;\r\n    left: 5px;\r\n    bottom: 20px;\r\n}\r\n.submit_button{\r\n    width: 100px;\r\n    margin: 10px 0;\r\n    margin-bottom: 0;\r\n    background-color: transparent;\r\n    color: #f63d60;\r\n    border: 1px solid #f63d60;\r\n    padding: 4px 0;\r\n    cursor: pointer;\r\n}\r\n.submit-color{\r\n    border: 1px solid #33a3a3;\r\n    color: #33a3a3;\r\n}\r\n.fa-star{\r\n    color: gray;\r\n    margin-right: 5px;\r\n}\r\n.rate{\r\n    color:#f63d60;\r\n}"

/***/ }),

/***/ "./client/src/app/components/review/review.component.html":
/*!****************************************************************!*\
  !*** ./client/src/app/components/review/review.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid mt-3 pl-5 pr-5\">\n  <div>\n    <div class=\"dropdown\">\n      <button type=\"button\" class=\"btn  dropdown-toggle bg-white\" data-toggle=\"dropdown\">\n        Select Employee\n      </button>\n      <div class=\"dropdown-menu\">\n        <div class=\"dropdown-item\" *ngFor=\" let item of userData \" (click)=\"empid(item._id)\">{{item.email}}</div>\n\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-md-12\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Subject</label>\n                      <input class=\"form-control\" [(ngModel)]='reviewData.subject' name=\"subject\" #subject='ngModel' type=\"text\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Rating</label> \n                      <div>\n                      <span *ngFor='let i of ratting'>\n                        <i class=\"fa fa-star \" (click)=\"review($event,i)\"></i>\n                      </span>\n                    </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label> Description</label>\n                  <textarea class=\"form-control\" rows=\"4\"  [(ngModel)]='reviewData.description' name=\"description\" #description='ngModel'></textarea>\n                </div>\n              </div>\n              <div class=\"col-md-2\" style=\"position: relative;\">\n                <div class=\"submit\">\n                  <button (click)=\"submit()\"  class=\"submit_button submit-color \"> submit</button>\n                  <br>\n                  <button class=\"submit_button \"> cancel</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./client/src/app/components/review/review.component.ts":
/*!**************************************************************!*\
  !*** ./client/src/app/components/review/review.component.ts ***!
  \**************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(authservice) {
        this.authservice = authservice;
        this.userData = [];
        this.ratting = [0, 1, 2, 3, 4];
        this.reviewData = {};
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.getusers();
    };
    ReviewComponent.prototype.getusers = function () {
        var _this = this;
        this.authservice.getusers().subscribe(function (response) {
            _this.userData = response;
        }, function (response) {
        });
    };
    ReviewComponent.prototype.empid = function (id) {
        console.log(id);
        this.reviewData._id = id;
    };
    ReviewComponent.prototype.review = function (event, index) {
        var reviewclass = document.getElementsByClassName('fa-star ');
        for (var i = 0; i < this.ratting.length; i++) {
            reviewclass[i].classList.remove('rate');
        }
        for (var j = 0; j <= index; j++) {
            reviewclass[j].classList.add('rate');
        }
        this.score = index + 1;
        this.reviewData.ratting = this.score;
    };
    ReviewComponent.prototype.submit = function () {
        this.authservice.Review(this.reviewData).subscribe(function (response) {
            console.log(response);
        }, function (response) {
        });
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./client/src/app/components/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./client/src/app/components/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["authService"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./client/src/app/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./client/src/app/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs/Observable';
var url = 'http://localhost:3000/api/';
var authService = /** @class */ (function () {
    function authService(http) {
        this.http = http;
    }
    authService.prototype.login = function (payload) {
        return this.http.post(url, payload);
    };
    authService.prototype.getusers = function () {
        return this.http.get(url + 'user');
    };
    authService.prototype.deleteuser = function (payload) {
        return this.http.delete(url + 'user', { params: payload });
    };
    authService.prototype.Review = function (payload) {
        return this.http.post(url + 'feedback', payload);
    };
    authService.prototype.newuser = function (payload) {
        return this.http.post(url + 'user', payload);
    };
    authService.prototype.edituser = function (payload) {
        return this.http.put(url + 'user', payload);
    };
    authService.prototype.getuser = function (payload) {
        return this.http.get(url + 'user/byid', { params: payload });
    };
    authService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], authService);
    return authService;
}());

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs/Observable';
// const url:string='http://localhost:3000/api/';
// @Injectable()
//  export class employee{
//     constructor(private http: HttpClient) { }
//     login(payload:any)
//     // : Observable<any>
//     {
//         return this.http.post<any>(url,payload);
//     }
//  }


/***/ }),

/***/ "./client/src/environments/environment.ts":
/*!************************************************!*\
  !*** ./client/src/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./client/src/main.ts":
/*!****************************!*\
  !*** ./client/src/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./client/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./client/src/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\employee_review_project\client\src\main.ts */"./client/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map