import { Component } from '@angular/core';

interface ContactLink{
  label: string;
  url: string;
  style: 'primary' | 'ghost';
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  links: ContactLink[] = [
    { label: 'Enviar correo', url: 'mailto:dayanabeta08@gmail.com', style: 'primary' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dayana-betancur-ga%C3%B1%C3%A1n/', style: 'ghost' },
    { label: 'GitHub', url: 'https://github.com/DayanaB01', style: 'ghost' }
  ];
}
