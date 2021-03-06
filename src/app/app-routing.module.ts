import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from "./Shared/fallback-route";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';




const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'cards', component:CardsComponent},
  {path:'cards/:type', component: CardsComponent},
  {path:'charts',
    loadChildren:'./charts/charts.module#ChartsModule'
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
