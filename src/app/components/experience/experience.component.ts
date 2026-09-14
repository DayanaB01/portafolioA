import { Component } from '@angular/core';
import { ExperienceEntry } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  entries: ExperienceEntry[] = [
    {
      period: 'Actualidad',
      title: 'Estudiante de Ingeniera Informática',
      description: 'Universidad de Caldas - Horario flexible para laborar.'
    },
    {
      period: '2024 — 2026',
      title: 'Desarrollador Full Stack',
      description: 'Independiente — Desarrollo de módulos web con Angular, React (NextJs), React Native, .NET, mantenimiento de bases de datos SQL Server, postgreSQL, además de herramientas como postman y participación en decisiones de arquitectura y diseño.'
    },
    {
      period: '2022 — 2023',
      title: 'Desarrolladora Junior',
      description: 'Algoritmo s.a / equipo — primeras contribuciones en proyectos .NET, Angular  Framework, soporte en consultas SQL y corrección de errores en producción.'
    },
    {
      period: '2020',
      title: 'Sistemas Informáticos — Tecnóloga en Sistemas Informáticos',
      description: 'Universidad de Caldas — Proyectos de desarrollo web.'
    }
  ];
  //type: 'work' | 'education' para dar orden
}
