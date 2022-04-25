import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    data: {}
  },
  {
    path: 'create-article',
    loadChildren: () => import('./pages/create-article/create-article.module').then(m => m.CreateArticleModule),
    canActivate: [AuthGuardGuard],
    data: {}
  },
  {
    path: 'no-auth',
    loadChildren: () => import('./pages/no-auth/no-auth.module').then(m => m.NoAuthModule),
    data: {}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
