import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature-admin/feature-admin.module').then(m => m.FeatureAdminModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('./feature-analytics/feature-analytics.module').then(m => m.FeatureAnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
