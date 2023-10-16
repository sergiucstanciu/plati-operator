import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlatiOnlineComponent } from './components/plati-online/plati-online.component';
import { InterogariPlatiComponent } from './components/interogari-plati/interogari-plati.component';
import { AmenziAchitateComponent } from './components/amenzi-achitate/amenzi-achitate.component';
import { TaxeNedebitateAchitateComponent } from './components/taxe-nedebitate-achitate/taxe-nedebitate-achitate.component';
import { TipuriAmenziComponent } from './components/tipuri-amenzi/tipuri-amenzi.component';
import { TipuriTaxeNedebitateComponent } from './components/tipuri-taxe-nedebitate/tipuri-taxe-nedebitate.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: DashboardComponent
      },
      {
        path:'plati-online',
        component: PlatiOnlineComponent,
      },
      {
        path: 'interogari-plati',
        component: InterogariPlatiComponent,
      },
      {
        path: 'amenzi-achitate',
        component: AmenziAchitateComponent,
      },
      {
        path: 'taxe-nedebitate-achitate',
        component: TaxeNedebitateAchitateComponent,
      },
      {
        path: 'tipuri-amenzi',
        component: TipuriAmenziComponent,
      },
      {
        path: 'tipuri-taxe-nedebitate',
        component: TipuriTaxeNedebitateComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
