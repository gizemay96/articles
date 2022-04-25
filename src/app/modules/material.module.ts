import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';



@NgModule({
     imports: [
          CommonModule,
          MatSidenavModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MomentDateModule

     ],
     declarations: [
     ],
     exports: [
          MatSidenavModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MomentDateModule
     ],
     providers: [
          {
               provide: MAT_DATE_FORMATS,
               useValue: {
                    parse: {
                         dateInput: ['l', 'LL'],
                    },
                    display: {
                         dateInput: 'L',
                         monthYearLabel: 'MMM YYYY',
                         dateA11yLabel: 'LL',
                         monthYearA11yLabel: 'MMMM YYYY',
                    },
               },
          },
     ]
})
export class AppMaterailModule { }
