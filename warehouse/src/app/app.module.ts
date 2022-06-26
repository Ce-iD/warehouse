import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseCapacityComponent } from './warehouse-capacity/warehouse-capacity.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WarehouseEditComponent } from './warehouse/warehouse-edit.component';
import { WareComponent } from './ware/ware.component';
import { PersonComponent } from './person/person.component';
import {HttpClientModule} from "@angular/common/http";
import {PersonEditComponent} from "./person/person-edit.component";
import { HeaderToolsComponent } from './utility/header-tools/header-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    WarehouseComponent,
    WarehouseCapacityComponent,
    SidebarComponent,
    WarehouseEditComponent,
    WareComponent,
    PersonComponent,
    PersonComponent,
    PersonEditComponent,
    HeaderToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    PersonEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
