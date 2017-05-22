"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// ag-grid
var main_1 = require("ag-grid-angular/main");
// application
var app_component_1 = require("./app.component");
var square_component_1 = require("./dynamic-component-example/square.component");
var params_component_1 = require("./dynamic-component-example/params.component");
var cube_component_1 = require("./dynamic-component-example/cube.component");
var currency_component_1 = require("./dynamic-component-example/currency.component");
var child_message_component_1 = require("./dynamic-component-example/child-message.component");
// rich grid
var rich_grid_component_1 = require("./rich-grid-example/rich-grid.component");
var date_component_1 = require("./date-component/date.component");
var header_component_1 = require("./header-component/header.component");
var header_group_component_1 = require("./header-group-component/header-group.component");
var group_row_renderer_component_1 = require("./grouped-row-example/group-row-renderer.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                main_1.AgGridModule.withComponents([
                    date_component_1.DateComponent,
                    header_component_1.HeaderComponent,
                    header_group_component_1.HeaderGroupComponent, square_component_1.SquareComponent,
                    cube_component_1.CubeComponent,
                    params_component_1.ParamsComponent,
                    currency_component_1.CurrencyComponent,
                    child_message_component_1.ChildMessageComponent
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                rich_grid_component_1.RichGridComponent,
                date_component_1.DateComponent,
                header_component_1.HeaderComponent,
                header_group_component_1.HeaderGroupComponent, group_row_renderer_component_1.GroupRowComponent,
                square_component_1.SquareComponent,
                cube_component_1.CubeComponent,
                params_component_1.ParamsComponent,
                currency_component_1.CurrencyComponent,
                child_message_component_1.ChildMessageComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
