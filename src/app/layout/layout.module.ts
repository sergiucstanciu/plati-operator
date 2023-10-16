import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		component: LayoutComponent,
	}
]

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
    NavbarModule,
    SidenavModule
  ],
  exports: [RouterModule],
})
export class LayoutModule { }
