"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent(elementRef) {
        this.elementRef = elementRef;
    }
    HeaderComponent.prototype.agInit = function (params) {
        this.params = params;
        this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
        this.onSortChanged();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying HeaderComponent");
    };
    HeaderComponent.prototype.onMenuClick = function () {
        this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
    };
    HeaderComponent.prototype.onSortRequested = function (order, event) {
        this.params.setSort(order, event.shiftKey);
    };
    ;
    HeaderComponent.prototype.onSortChanged = function () {
        if (this.params.column.isSortAscending()) {
            this.sorted = 'asc';
        }
        else if (this.params.column.isSortDescending()) {
            this.sorted = 'desc';
        }
        else {
            this.sorted = '';
        }
    };
    ;
    HeaderComponent.prototype.querySelector = function (selector) {
        return this.elementRef.nativeElement.querySelector('.customHeaderMenuButton', selector);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            templateUrl: 'header.component.html',
            styleUrls: ['header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
