"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var proficiencyFilter_1 = require('../filters/proficiencyFilter');
var skillFilter_1 = require('../filters/skillFilter');
var refData_1 = require('../data/refData');
// only import this if you are using the ag-Grid-Enterprise
require('ag-grid-enterprise/main');
var header_group_component_1 = require("../header-group-component/header-group.component");
var date_component_1 = require("../date-component/date.component");
var header_component_1 = require("../header-component/header.component");
var RichGridComponent = (function () {
    function RichGridComponent() {
        this.HeaderGroupComponent = header_group_component_1.HeaderGroupComponent;
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
        this.gridOptions.dateComponentFramework = date_component_1.DateComponent;
        this.gridOptions.defaultColDef = {
            headerComponentFramework: header_component_1.HeaderComponent,
            headerComponentParams: {
                menuIcon: 'fa-bars'
            }
        };
    }
    RichGridComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 200; i++) {
            var countryData = refData_1.default.countries[i % refData_1.default.countries.length];
            rowData.push({
                name: refData_1.default.firstNames[i % refData_1.default.firstNames.length] + ' ' + refData_1.default.lastNames[i % refData_1.default.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                dob: refData_1.default.DOBs[i % refData_1.default.DOBs.length],
                address: refData_1.default.addresses[i % refData_1.default.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: createRandomPhoneNumber(),
                landline: createRandomPhoneNumber()
            });
        }
        this.rowData = rowData;
    };
    RichGridComponent.prototype.createColumnDefs = function () {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Employee',
                headerGroupComponentFramework: header_group_component_1.HeaderGroupComponent,
                children: [
                    {
                        headerName: "Name", field: "name",
                        width: 150, pinned: true
                    },
                    {
                        headerName: "Country", field: "country", width: 150,
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: { cellRenderer: countryCellRenderer, cellHeight: 20 }, columnGroupShow: 'open'
                    },
                    {
                        headerName: "DOB", field: "dob", width: 120, pinned: true, cellRenderer: function (params) {
                            return pad(params.value.getDate(), 2) + '/' +
                                pad(params.value.getMonth() + 1, 2) + '/' +
                                params.value.getFullYear();
                        }, filter: 'date', columnGroupShow: 'open'
                    }
                ]
            },
            {
                headerName: 'IT Skills',
                children: [
                    {
                        headerName: "Skills",
                        width: 125,
                        suppressSorting: true,
                        cellRenderer: skillsCellRenderer,
                        filter: skillFilter_1.default
                    },
                    {
                        headerName: "Proficiency",
                        field: "proficiency",
                        width: 120,
                        cellRenderer: percentCellRenderer,
                        filter: proficiencyFilter_1.default
                    },
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    { headerName: "Mobile", field: "mobile", width: 150, filter: 'text' },
                    { headerName: "Land-line", field: "landline", width: 150, filter: 'text' },
                    { headerName: "Address", field: "address", width: 500, filter: 'text' }
                ]
            }
        ];
    };
    RichGridComponent.prototype.calculateRowCount = function () {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    };
    RichGridComponent.prototype.onModelUpdated = function () {
        console.log('onModelUpdated');
        this.calculateRowCount();
    };
    RichGridComponent.prototype.onReady = function () {
        console.log('onReady');
        this.calculateRowCount();
    };
    RichGridComponent.prototype.onCellClicked = function ($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    RichGridComponent.prototype.onCellValueChanged = function ($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    };
    RichGridComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    RichGridComponent.prototype.onCellContextMenu = function ($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    RichGridComponent.prototype.onCellFocused = function ($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    };
    RichGridComponent.prototype.onRowSelected = function ($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    };
    RichGridComponent.prototype.onSelectionChanged = function () {
        console.log('selectionChanged');
    };
    RichGridComponent.prototype.onBeforeFilterChanged = function () {
        console.log('beforeFilterChanged');
    };
    RichGridComponent.prototype.onAfterFilterChanged = function () {
        console.log('afterFilterChanged');
    };
    RichGridComponent.prototype.onFilterModified = function () {
        console.log('onFilterModified');
    };
    RichGridComponent.prototype.onBeforeSortChanged = function () {
        console.log('onBeforeSortChanged');
    };
    RichGridComponent.prototype.onAfterSortChanged = function () {
        console.log('onAfterSortChanged');
    };
    RichGridComponent.prototype.onVirtualRowRemoved = function ($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    };
    RichGridComponent.prototype.onRowClicked = function ($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    };
    RichGridComponent.prototype.onQuickFilterChanged = function ($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    };
    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    RichGridComponent.prototype.onColumnEvent = function ($event) {
        console.log('onColumnEvent: ' + $event);
    };
    RichGridComponent = __decorate([
        core_1.Component({
            selector: 'rich-grid',
            templateUrl: 'rich-grid.component.html',
            styleUrls: ['rich-grid.css', 'proficiency-renderer.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], RichGridComponent);
    return RichGridComponent;
}());
exports.RichGridComponent = RichGridComponent;
function skillsCellRenderer(params) {
    var data = params.data;
    var skills = [];
    refData_1.default.IT_SKILLS.forEach(function (skill) {
        if (data && data.skills && data.skills[skill]) {
            skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
        }
    });
    return skills.join(' ');
}
function countryCellRenderer(params) {
    var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + refData_1.default.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}
function createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}
function percentCellRenderer(params) {
    var value = params.value;
    var eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = 'red';
    }
    else if (value < 60) {
        eDivPercentBar.style.backgroundColor = '#ff9900';
    }
    else {
        eDivPercentBar.style.backgroundColor = '#00A000';
    }
    var eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = value + '%';
    var eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);
    return eOuterDiv;
}
//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
    var asString = num + "";
    while (asString.length < totalStringSize)
        asString = "0" + asString;
    return asString;
}
