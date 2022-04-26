import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

@NgModule({
     imports: [
          CommonModule,
          RouterModule,
          MomentModule.forRoot({
               relativeTimeThresholdOptions: {
                 'm': 59
               }
             })
     ],
     declarations: [
          CardComponent
     ],
     exports: [
          CardComponent,
          MomentModule
     ]
})
export class SharedModule {}
