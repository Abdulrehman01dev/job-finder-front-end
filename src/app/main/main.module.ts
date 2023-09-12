import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './routes/home/home.component';
import { SingleJobComponent } from './routes/home/single-job/single-job.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SingleJobComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
