import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailChararterComponent } from './components/detail-chararter/detail-chararter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detalle/:url', component: DetailChararterComponent},
  {path: '""', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
