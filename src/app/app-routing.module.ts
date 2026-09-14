import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';

const routes: Routes = [
  {path:'', redirectTo:'principalPage', pathMatch:'full'},
  {path: 'principalPage', component: PrincipalPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
