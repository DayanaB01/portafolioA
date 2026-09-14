import { Component } from '@angular/core';

interface StackBadge {
  label: string;
  highlighted:boolean;
}

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent {
  fullName = 'Dayana Betancur Gañán';

navlinks = [
  {label: 'proyectos', target: 'proyectos'},
  {label:'experiencia', target:'experiencia'},
  {label:'skills', target:'skills'},
  {label:'contacto', target:'contacto'},
];
stack: StackBadge[] = [
    { label: 'Angular', highlighted: true },
    { label: 'React', highlighted: false },
    { label: 'React Native', highlighted: false },
    { label: '.NET / C#', highlighted: true },
    { label: 'SQL Server', highlighted: true }
];
scrollTo(sectionId: string): void{
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({behavior: 'smooth'}) 
  }
}

downloadCV():void{
  window.open('/assets/TecnoSistemas_DayanaBetancur.pdf', '_blank');
}

scrollToProjects():void{
  document.getElementById('proyectos')?.scrollIntoView({behavior:'smooth'});
}
}
