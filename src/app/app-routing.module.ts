import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from 'my-module-a/src/app/menu/menu.component';

const routes: Routes = [
  { path: 'chartjs', loadChildren: () => import('my-module-a').then(m => m.ChartjsModule) },
  { path: 'flot', loadChildren: () => import('my-module-a').then(m => m.FlotModule) },
  { path: 'inline', loadChildren: () => import('my-module-a').then(m => m.InlineModule) },
  { path: 'uplot', loadChildren: () => import('my-module-a').then(m => m.UplotModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
