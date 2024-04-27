import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'overnight',
    loadChildren: () => import('./overnight/overnight.module').then( m => m.OvernightPageModule)
  },  {
    path: 'view-data',
    loadChildren: () => import('./view-data/view-data.module').then( m => m.ViewDataPageModule)
  },
  {
    path: 'sleepiness',
    loadChildren: () => import('./sleepiness/sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
