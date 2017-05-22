import {Component} from '@angular/core';

import {GridOptions} from 'ag-grid/main';
import 'ag-grid-enterprise/main';
import {ChildMessageComponent} from "../dynamic-component-example/child-message.component";
@Component({
    selector: 'ag-group-row-renderer-component',
    templateUrl: 'group-row-renderer.component.html'
})
export class GroupRowComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{context: {
            componentParent: this
        }};
         this.gridOptions.rowSelection = 'single';
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.groupUseEntireRow = true;
        this.gridOptions.onGridReady = () => {
            this.gridOptions.api.sizeColumnsToFit();
        };
    }
    public methodFromParent(cell) {
        alert(`"Parent Component Method from ${cell}!`);
    }
    private createColumnDefs() {
        return [{ headerName: 'Actions',
          suppressMenu: true,
          suppressSorting: true,
            tooltipField: 'Actions',
          template:
            `
            <a href="#" data-action-type="view">
                      <span class="glyphicon glyphicon-envelope" data-action-type="view" ></span>
            </a>            
            <a href="#" data-action-type="remove">
                      <span class="glyphicon glyphicon-trash" data-action-type="remove" ></span>
            </a>
            `
        }, {
            headerName: "Child/Parent",
            field: "value",
            cellRendererFramework: ChildMessageComponent,
            colId: "params",
            width: 120
        },
            {
                headerName: 'Country',
                field: 'country',
                width: 100,
                rowGroupIndex: 0
            },
            {
                headerName: 'Name',
                field: 'name',
                width: 100
            },
            {
                headerName: 'Gold',
                field: 'gold',
                width: 100,
                aggFunc: 'sum'
            },
            {
                headerName: 'Silver',
                field: 'silver',
                width: 100,
                aggFunc: 'sum'
            },
            {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100,
                aggFunc: 'sum'
            },
        ];
    }

    private createRowData() {
        return [
            {country: 'United States', name: 'Bob', gold: 1, silver: 0, bronze: 0},
            {country: 'United States', name: 'Jack', gold: 0, silver: 1, bronze: 1},
            {country: 'United States', name: 'Sue', gold: 1, silver: 0, bronze: 1},
            {country: 'United Kingdom', name: 'Mary', gold: 1, silver: 1, bronze: 0},
            {country: 'United Kingdom', name: 'Tess', gold: 0, silver: 1, bronze: 1},
            {country: 'United Kingdom', name: 'John', gold: 0, silver: 2, bronze: 1},
            {country: 'Jamaica', name: 'Bob', gold: 1, silver: 1, bronze: 0},
            {country: 'Jamaica', name: 'Jack', gold: 1, silver: 1, bronze: 0},
            {country: 'Jamaica', name: 'Mary', gold: 1, silver: 1, bronze: 0},
            {country: 'South Africa', name: 'Bob', gold: 1, silver: 0, bronze: 1},
            {country: 'South Africa', name: 'Jack', gold: 1, silver: 0, bronze: 1},
            {country: 'South Africa', name: 'Mary', gold: 1, silver: 0, bronze: 1},
            {country: 'South Africa', name: 'John', gold: 1, silver: 0, bronze: 1},
            {country: 'New Zealand', name: 'Bob', gold: 1, silver: 0, bronze: 0},
            {country: 'New Zealand', name: 'Jack', gold: 0, silver: 1, bronze: 1},
            {country: 'New Zealand', name: 'Sue', gold: 1, silver: 0, bronze: 1},
            {country: 'Australia', name: 'Mary', gold: 1, silver: 1, bronze: 0},
            {country: 'Australia', name: 'Tess', gold: 0, silver: 1, bronze: 1},
            {country: 'Australia', name: 'John', gold: 0, silver: 2, bronze: 1},
            {country: 'Canada', name: 'Bob', gold: 1, silver: 1, bronze: 0},
            {country: 'Canada', name: 'Jack', gold: 1, silver: 1, bronze: 0},
            {country: 'Canada', name: 'Mary', gold: 1, silver: 1, bronze: 0},
            {country: 'Switzerland', name: 'Bob', gold: 1, silver: 0, bronze: 1},
            {country: 'Switzerland', name: 'Jack', gold: 1, silver: 0, bronze: 1},
            {country: 'Switzerland', name: 'Mary', gold: 1, silver: 0, bronze: 1},
            {country: 'Switzerland', name: 'John', gold: 1, silver: 0, bronze: 1},
            {country: 'Spain', name: 'Bob', gold: 1, silver: 0, bronze: 0},
            {country: 'Spain', name: 'Jack', gold: 0, silver: 1, bronze: 1},
            {country: 'Spain', name: 'Sue', gold: 1, silver: 0, bronze: 1},
            {country: 'Portugal', name: 'Mary', gold: 1, silver: 1, bronze: 0},
            {country: 'Portugal', name: 'Tess', gold: 0, silver: 1, bronze: 1},
            {country: 'Portugal', name: 'John', gold: 0, silver: 2, bronze: 1},
            {country: 'Zimbabwe', name: 'Bob', gold: 1, silver: 1, bronze: 0},
            {country: 'Zimbabwe', name: 'Jack', gold: 1, silver: 1, bronze: 0},
            {country: 'Zimbabwe', name: 'Mary', gold: 1, silver: 1, bronze: 0},
            {country: 'Brazil', name: 'Bob', gold: 1, silver: 0, bronze: 1},
            {country: 'Brazil', name: 'Jack', gold: 1, silver: 0, bronze: 1},
            {country: 'Brazil', name: 'Mary', gold: 1, silver: 0, bronze: 1},
            {country: 'Brazil', name: 'John', gold: 1, silver: 0, bronze: 1}        ];
    }
    public onRowClicked(e) {
                if (e.event.target !== undefined) {
            let data = e.data;
            let actionType = e.event.target.getAttribute('data-action-type');
            switch (actionType) {
                case 'view':
                    return this.onActionViewClick(data);
                case 'remove':
                    return this.onActionRemoveClick(data);
            }
        }
    }

    public onActionViewClick(data: any){
        debugger;
        console.log('View action clicked', data);
    }

    public onActionRemoveClick(data: any){
        console.log('Remove action clicked', data);
    }
}