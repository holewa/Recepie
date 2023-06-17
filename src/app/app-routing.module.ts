import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LaggTillRecepetComponent} from './lagg-till-recepet/lagg-till-recepet.component';
import { CommonModule } from '@angular/common';
import {LaggTillIngridienserComponent} from './lagg-till-ingridienser/lagg-till-ingridienser.component';

const routes: Routes = [
  {
    path: 'laggtillrecept',
    component: LaggTillRecepetComponent
  },
  {
    path: 'laggtillingridienser',
    component: LaggTillIngridienserComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
