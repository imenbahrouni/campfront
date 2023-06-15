import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './general/navbar/navbar.component';
import { ManagementComponent } from './users/management/management.component';
import { BoutiqueManagementComponent } from './boutique/boutique-management/boutique-management.component';
import { PanierComponent } from './boutique/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    NavbarComponent,
    ManagementComponent,
    BoutiqueManagementComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
