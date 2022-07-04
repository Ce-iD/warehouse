import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {WarehouseInventoryComponent} from './warehouse-inventory/warehouse-inventory.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {WarehouseEditComponent} from './warehouse/warehouse-edit.component';
import {WareComponent} from './ware/ware.component';
import {PersonComponent} from './person/person.component';
import {HttpClientModule} from "@angular/common/http";
import {PersonEditComponent} from "./person/person-edit.component";
import {WarehouseResponsibleComponent} from './warehouse-responsible/warehouse-responsible.component';
import {WarehouseResponsibleEditComponent} from './warehouse-responsible/warehouse-responsible-edit.component';
import {WareEditComponent} from './ware/ware-edit.component';
import {HeaderToolsComponent} from "./general/utility/header-tools/header-tools.component";
import {BaseInformationComponent} from "./general/reference/base-information/base-information.component";
import {BaseInformationEditComponent} from "./general/reference/base-information/base-information-edit.component";
import {TreeComponent} from "./general/utility/tree/tree.component";
import {WarehouseInventoryEditComponent} from './warehouse-inventory/warehouse-inventory-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    WarehouseComponent,
    WarehouseInventoryComponent,
    SidebarComponent,
    WarehouseEditComponent,
    WareComponent,
    PersonComponent,
    PersonComponent,
    PersonEditComponent,
    HeaderToolsComponent,
    WarehouseResponsibleComponent,
    WarehouseResponsibleEditComponent,
    WareEditComponent,
    BaseInformationComponent,
    BaseInformationEditComponent,
    TreeComponent,
    WarehouseInventoryEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
    PersonEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
