import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RetriveComponent } from './retrive/retrive.component';

const routes: Routes = [
  {
    path: 'create', component:CreateComponent
  },
  {
    path: 'retrive', component:RetriveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
