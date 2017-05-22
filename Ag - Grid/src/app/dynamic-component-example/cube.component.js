"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CubeComponent = (function () {
    function CubeComponent() {
    }
    // called on init
    CubeComponent.prototype.agInit = function (params) {
        this.params = params;
        this.cubed = this.params.data.value * this.params.data.value * this.params.data.value;
    };
    // called when the cell is refreshed
    CubeComponent.prototype.refresh = function (params) {
        this.params = params;
        this.cubed = this.params.data.value * this.params.data.value * this.params.data.value;
    };
    CubeComponent.prototype.valueCubed = function () {
        return this.cubed;
    };
    CubeComponent = __decorate([
        core_1.Component({
            selector: 'cube-cell',
            template: "{{valueCubed()}}"
        })
    ], CubeComponent);
    return CubeComponent;
}());
exports.CubeComponent = CubeComponent;
