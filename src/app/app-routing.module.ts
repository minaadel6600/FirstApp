import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcuctsComponent } from './Components/procucts/procucts.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path:'products' , component:ProcuctsComponent} , 
  {path:'admin-products' , component:AdminProductsComponent} , 
  {path:'orders' , component:MyOrdersComponent} , 
  {path:'admin-orders' , component:AdminOrdersComponent} ,
  {path:'shopping-cart' , component:ShoppingCartComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


