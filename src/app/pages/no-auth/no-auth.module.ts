import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAuthComponent } from './no-auth.component';
import { NoAuthRoutingModule } from './no-auth-routing.module';

@NgModule({
     imports: [
          CommonModule,
          NoAuthRoutingModule
     ],
     declarations: [NoAuthComponent],
})
export class NoAuthModule {

}
