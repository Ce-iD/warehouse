import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BaseInformationComponent } from './general/reference/base-information/base-information.component';
import {LoginComponent} from "./login/login.component";
import {PersonComponent} from './person/person.component';
import {WareComponent} from './ware/ware.component';
import {WarehouseInventoryComponent} from './warehouse-inventory/warehouse-inventory.component';
import { WarehouseResponsibleComponent } from './warehouse-responsible/warehouse-responsible.component';
import {WarehouseComponent} from './warehouse/warehouse.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'person', component: PersonComponent},
  {path: 'warehouse', component: WarehouseComponent},
  {path: 'warehouseCapacity', component: WarehouseInventoryComponent},
  {path: 'ware', component: WareComponent},
  {path: 'warehouseResponsible', component: WarehouseResponsibleComponent},
  {path: 'baseInformation', component: BaseInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
