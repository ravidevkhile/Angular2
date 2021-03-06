"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderGroupComponent = (function () {
    function HeaderGroupComponent() {
    }
    HeaderGroupComponent.prototype.agInit = function (params) {
        this.params = params;
        this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChanged.bind(this));
    };
    HeaderGroupComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying HeaderComponent");
    };
    HeaderGroupComponent.prototype.expandOrCollapse = function () {
        this.params.setExpanded(!this.expanded);
    };
    ;
    HeaderGroupComponent.prototype.onExpandChanged = function () {
        this.expanded = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
    };
    HeaderGroupComponent = __decorate([
        core_1.Component({
            templateUrl: 'header-group.component.html',
            styleUrls: ['header-group.component.css']
        })
    ], HeaderGroupComponent);
    return HeaderGroupComponent;
}());
exports.HeaderGroupComponent = HeaderGroupComponent;
