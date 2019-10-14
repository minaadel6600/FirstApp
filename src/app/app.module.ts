import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from 'ng-starrating';
import { AppComponent } from './app.component';
import { TestComComponent } from './test-com/test-com.component';   
import { RestService } from 'src/rest.service'; 
import { FirstServService } from './first-serv.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { SummaryPipe } from './summary.pipe';
import { InputFormatDirective } from './input-format.directive';
import { VaildationCompComponent } from './vaildation-comp/vaildation-comp.component';
import { CustomFormsModule } from 'ng2-validation' 
import { CommonModule } from '@angular/common';
import { TestApiComponent } from './test-api/test-api.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProcuctsComponent } from './Components/procucts/procucts.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { RrPipe } from './rr.pipe';
import { HideTextPipe } from './Pipes/hide-text.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TestComComponent,
    FavoriteIconComponent,
    SummaryPipe,
    InputFormatDirective,
    VaildationCompComponent,
    TestApiComponent,
    NavBarComponent,
    ProcuctsComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ShoppingCartComponent,
    RrPipe,
    HideTextPipe
    
  ],
  imports: [
    BrowserModule, RatingModule,
    AppRoutingModule,
    NoopAnimationsModule ,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,NgbModule
    
  ],
  providers: [FirstServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
