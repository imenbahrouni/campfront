import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './users/user-add/user-add.component';
import { ManagementComponent } from './users/management/management.component';
import { BoutiqueManagementComponent } from './boutique/boutique-management/boutique-management.component';
import { PanierComponent } from './boutique/panier/panier.component';

const routes: Routes = [
  {
    path: 'users/add',
    component: UserAddComponent
  },
  {
    path: 'users/edit/:id',
    component: UserAddComponent
  },
  {
    path: 'users',
    component: ManagementComponent
  }
  ,
  {
    path: 'boutique',
    component: BoutiqueManagementComponent
  },
  {
    path: 'boutique/panier',
    component: PanierComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
