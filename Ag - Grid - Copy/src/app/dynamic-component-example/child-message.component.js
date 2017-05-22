"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ChildMessageComponent = (function () {
    function ChildMessageComponent() {
    }
    ChildMessageComponent.prototype.agInit = function (params) {
        debugger;
        this.params = params;
    };
    ChildMessageComponent.prototype.invokeParentMethod = function () {
        debugger;
        this.params.context.componentParent.methodFromParent("Row: " + this.params.node.data.country + ", Col: " + this.params.colDef.headerName);
    };
    ChildMessageComponent.prototype.invokeView = function (data) {
        debugger;
        this.params.context.componentParent.methodFromParent("View: " + data + ", Col: " + this.params.colDef.headerName);
    };
    ChildMessageComponent.prototype.invokeRemove = function () {
        debugger;
        this.params.context.componentParent.methodFromParent("Remove: " + this.params.node.data.country + ", Col: " + this.params.colDef.headerName);
    };
    ChildMessageComponent = __decorate([
        core_1.Component({
            selector: 'child-cell',
            template: "<a href=\"#\" data-action-type=\"view\">\n        <span class=\"glyphicon glyphicon-envelope\" data-action-type=\"view\" (click)=\"invokeRemove()\"></span>\n    </a>\n    <a href=\"#\" data-action-type=\"remove\">\n        <span class=\"glyphicon glyphicon-trash\" data-action-type=\"remove\" (click)=\"invokeView(params.node.data.name)\">{{params.node.data.name}}</span>\n    </a><span><button style=\"height: 20px\" (click)=\"invokeParentMethod()\">Invoke Parent</button></span>"
        })
    ], ChildMessageComponent);
    return ChildMessageComponent;
}());
exports.ChildMessageComponent = ChildMessageComponent;
