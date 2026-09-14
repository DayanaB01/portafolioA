import { Component } from '@angular/core';

interface StackBadge {
  label: string;
  highlighted:boolean;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  fullName = 'Dayana Betancur Gañán';

  stack: StackBadge[] = [
    { label: 'Angular', highlighted: true },
    { label: 'React', highlighted: false },
    { label: 'React Native', highlighted: true },
    { label: '.NET / C#', highlighted: true },
    { label: 'SQL Server', highlighted: true }
];
downloadCV():void{
  window.open('/assets/TecnoSistemas_DayanaBetancur.pdf', '_blank');
}

scrollToProjects():void{
  document.getElementById('proyectos')?.scrollIntoView({behavior:'smooth'});
}
}
