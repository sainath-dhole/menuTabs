import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  /*{
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  }*/
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'country-codes',
    loadChildren: () => import('./pages/country-codes/country-codes.module').then( m => m.CountryCodesPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./pages/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('./pages/image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
  },
  {
    path: 'add-new-product',
    loadChildren: () => import('./pages/add-new-product/add-new-product.module').then( m => m.AddNewProductPageModule)
  },
  {
    path: 'view-products',
    loadChildren: () => import('./pages/view-products/view-products.module').then( m => m.ViewProductsPageModule)
  },
  /*{
    path: 'tab3',
    loadChildren: () => import('./pages/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },*/
 /* {
    path: 'first-with-tabs',
    loadChildren: () => import('./pages/first-with-tabs/first-with-tabs.module').then( m => m.FirstWithTabsPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./pages/second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
