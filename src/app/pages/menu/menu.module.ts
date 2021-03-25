import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import {  RouterModule, Routes } from '@angular/router';

/*const routes: Routes=[
{
  path:'menu',
  component: MenuPage,
  children:[
    {
    path:'first',
    loadChildren: '../first-with-tabs/first-with-tabs.module'
    },
    {
      path:'second',
      loadChildren: ''
      }
  ]
  
}
];*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //RouterModule.forChild(routes)
   MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
