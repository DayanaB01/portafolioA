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
      period: '2024 — actualidad',
      title: 'Desarrollador Full Stack',
      description: 'Empresa / equipo — desarrollo de módulos web con Angular y .NET, mantenimiento de bases de datos SQL Server y participación en decisiones de arquitectura.'
    },
    {
      period: '2023 — 2024',
      title: 'Desarrollador Junior',
      description: 'Empresa / equipo — primeras contribuciones en proyectos .NET, soporte en consultas SQL y corrección de errores en producción.'
    },
    {
      period: '2022',
      title: 'Ingeniero en Sistemas — título obtenido',
      description: 'Universidad / institución — proyecto de grado relacionado con bases de datos y desarrollo web.'
    }
  ];

  //type: 'work' | 'education' para dar orden
}
