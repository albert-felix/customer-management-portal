import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'new-customer', component: CustomerNewComponent},
  {path: 'customer-detail/:id', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
