import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'', redirectTo:'principalPage', pathMatch:'full'},
  {path: 'principalPage', component: PrincipalPageComponent},
  {path: 'projectsAll', component:ProjectsComponent},
  {path:'experience', component:ExperienceComponent},
  {path: 'skills', component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
