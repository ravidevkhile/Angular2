import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
import {SquareComponent} from "./dynamic-component-example/square.component";
import {ParamsComponent} from "./dynamic-component-example/params.component";
import {CubeComponent} from "./dynamic-component-example/cube.component";
import {CurrencyComponent} from "./dynamic-component-example/currency.component";
import {ChildMessageComponent} from "./dynamic-component-example/child-message.component";
// rich grid
import {RichGridComponent} from "./rich-grid-example/rich-grid.component";
import {DateComponent} from "./date-component/date.component";
import {HeaderComponent} from "./header-component/header.component";
import {HeaderGroupComponent} from "./header-group-component/header-group.component";
import {GroupRowComponent} from "./grouped-row-example/group-row-renderer.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                DateComponent,
                HeaderComponent,
                HeaderGroupComponent,SquareComponent,
                CubeComponent,
                ParamsComponent,
                CurrencyComponent,
                ChildMessageComponent
            ]
        )
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent,GroupRowComponent,
        SquareComponent,
        CubeComponent,
        ParamsComponent,
        CurrencyComponent,
        ChildMessageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
