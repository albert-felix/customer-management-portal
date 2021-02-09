import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent, canActivate: [AdminGuard]},
  {path: 'new-customer', component: CustomerNewComponent, canActivate: [AdminGuard]},
  {path: 'customer-detail/:id', component: CustomerDetailComponent, canActivate: [AdminGuard]},
  {path: 'edit-customer', component: CustomerEditComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }