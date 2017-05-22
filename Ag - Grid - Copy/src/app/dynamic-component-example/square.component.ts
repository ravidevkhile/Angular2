import {Component,OnDestroy} from '@angular/core';

import {ICellRendererAngularComp} from 'ag-grid-angular/main';

@Component({
    selector: 'square-cell',
    template: `{{valueSquared()}}`
})
export class SquareComponent implements ICellRendererAngularComp, OnDestroy {
    private params:any;

    agInit(params:any):void {
        this.params = params;
    }

    public valueSquared():number {
        return this.params.value * this.params.value;
    }

    ngOnDestroy() {
        console.log(`Destroying SquareComponent`);
    }
}