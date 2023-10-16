import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatTableModule,
    MatProgressSpinnerModule,
		DataTablesModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatTableModule,
    MatProgressSpinnerModule,
	DataTablesModule
  ],
})
export class MaterialModule {}
