import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

navlinks = [
  {label: 'proyectos', target: 'Proyectos'},
  {label:'experiencia', target:'Experiencia'},
  {label:'skills', target:'Skills'},
  {label:'contacto', target:'Contacto'},
];

scrollTo(sectionId: string): void{
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({behavior: 'smooth'}) 
  }
}
}
