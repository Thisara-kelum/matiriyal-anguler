import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { EasyBookingComponent } from './easy-booking/easy-booking.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ServicesComponent } from './services/services.component';
import { BookingComponent } from './booking/booking.component';
import { NewMemberRegisterComponent } from './new-member-register/new-member-register.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product-page/:name',component:ProductPageComponent},
  {path:'product-detail/:name/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'main-home',component:MainHomeComponent},
  {path:'Easy-booking',component:EasyBookingComponent},
  {path:'about',component:AboutComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'services',component:ServicesComponent},
  {path:'booking',component:BookingComponent},
  {path:'new-member-register',component:NewMemberRegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'news',component:NewsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
