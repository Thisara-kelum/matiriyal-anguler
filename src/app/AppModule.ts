import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; // Already imported
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MainHomeComponent } from './main-home/main-home.component'; // Ensure this is correctly declared here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EasyBookingComponent } from './easy-booking/easy-booking.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    CartComponent,
    MainHomeComponent,// Ensure this is correctly declared here

  ],
  imports: [
    AdminLoginComponent,
    AboutComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    EasyBookingComponent, // Assuming EasyBookingComponent is a module, otherwise, it should be imported
    MatProgressSpinnerModule,
    MatIconModule,
    NewsComponent

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
