import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'', redirectTo:'principalPage', pathMatch:'full'},
  {path: 'principalPage', component: PrincipalPageComponent},
  {path: 'projectsAll', component:ProjectsComponent},
  {path:'experience', component:ExperienceComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'navbar', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
