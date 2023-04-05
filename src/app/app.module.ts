import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsertableComponent } from './usertable/usertable.component';
import{HttpClientModule} from '@angular/common/http';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { FormsModule } from '@angular/forms';
import { PolicydetailsComponent } from './policydetails/policydetails.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    AddnewuserComponent,
    PolicydetailsComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
