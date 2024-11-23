import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RemediesComponent } from './remedies/remedies.component';
import { HealthtipsComponent } from './healthtips/healthtips.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'remedies',component:RemediesComponent},
  {path:'healthtips',component:HealthtipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
