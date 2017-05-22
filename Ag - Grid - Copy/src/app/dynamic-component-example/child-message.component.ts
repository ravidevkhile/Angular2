import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'child-cell',
    template: `<a href="#" data-action-type="view">
        <span class="glyphicon glyphicon-envelope" data-action-type="view" (click)="invokeRemove()"></span>
    </a>
    <a href="#" data-action-type="remove">
        <span class="glyphicon glyphicon-trash" data-action-type="remove" (click)="invokeView(params.node.data.name)">{{params.node.data.name}}</span>
    </a><span><button style="height: 20px" (click)="invokeParentMethod()">Invoke Parent</button></span>`
})
export class ChildMessageComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        debugger;
        this.params = params;
    }

    public invokeParentMethod() {
        debugger;
        this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.data.country}, Col: ${this.params.colDef.headerName}`)
    }
    public invokeView(data) {
        debugger;
        this.params.context.componentParent.methodFromParent(`View: ${data}, Col: ${this.params.colDef.headerName}`)
    }public invokeRemove() {
    debugger;
    this.params.context.componentParent.methodFromParent(`Remove: ${this.params.node.data.country}, Col: ${this.params.colDef.headerName}`)
}
}