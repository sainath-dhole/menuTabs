import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'first',
        loadChildren: () => import('../first-with-tabs/first-with-tabs.module').then( m => m.FirstWithTabsPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../second/second.module').then( m => m.SecondPageModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('../image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
      },
      {
        path: 'add-new-product',
        loadChildren: () => import('../add-new-product/add-new-product.module').then( m => m.AddNewProductPageModule)
      },
      {
        path: 'view-products',
        loadChildren: () => import('../view-products/view-products.module').then( m => m.ViewProductsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
