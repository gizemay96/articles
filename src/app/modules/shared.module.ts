import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
     imports: [
          CommonModule,
          RouterModule
     ],
     declarations: [
          CardComponent
     ],
     exports: [
          CardComponent
     ]
})
export class SharedModule {}
