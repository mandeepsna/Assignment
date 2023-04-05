import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsertableComponent } from './usertable/usertable.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { PolicydetailsComponent } from './policydetails/policydetails.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path:' ' ,component:UsertableComponent ,pathMatch:'full' },
  {path:'EmployeeList' ,component:UsertableComponent},
  {path:'addnewuser',component:AddnewuserComponent},
  {path:'MedicalDetails',component:PolicydetailsComponent},
  {path:'Charts',component:ChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
