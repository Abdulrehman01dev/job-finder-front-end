import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MainComponent } from './main.component';
import { SingleJobComponent } from './routes/home/single-job/single-job.component';


const routes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: '', component: HomeComponent },
    {path: 'job/:id', component: SingleJobComponent}, 
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
