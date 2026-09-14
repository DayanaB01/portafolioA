import { Component } from '@angular/core';
import {Project} from '../../models/project.model'
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
openProjectHash: string | null = 'a3f9e1c'; // primero abierto por defecto

  projects: Project[] = [
    {
      hash: 'a3f9e1c',
      title: 'Sistema de Gestión Académica',
      tagline: 'Base de datos + procedimientos almacenados',
      description: 'Sistema de matrículas y calificaciones para una institución educativa. Modelado relacional desde cero, con procedimientos almacenados para cálculo de promedios y reportes, y control de concurrencia en inscripciones.',
      details: [
        { label: 'tablas', value: '14, normalizadas a 3FN' },
        { label: 'procedimientos', value: 'promedios, reportes, matrícula' },
        { label: 'rol', value: 'diseño de modelo + backend' }
      ],
      tech: ['SQL Server', 'T-SQL', '.NET C#', 'Entity Framework'],
      repoUrl: 'https://github.com/tu-usuario/gestion-academica',
      demoUrl: ''
    },
    {
      hash: '7b2d84f',
      title: 'Plataforma de Inventario Web',
      tagline: 'Angular + API REST en .NET',
      description: 'Aplicación web para control de inventario y pedidos, con autenticación por roles, dashboard de indicadores en tiempo real y consumo de API REST propia.',
      details: [
        { label: 'frontend', value: 'Angular, RxJS, componentes reutilizables' },
        { label: 'backend', value: '.NET Web API, JWT auth' },
        { label: 'rol', value: 'desarrollo full stack' }
      ],
      tech: ['Angular', '.NET Web API', 'SQL Server', 'JWT'],
      repoUrl: 'https://github.com/tu-usuario/inventario-web',
      demoUrl: 'https://inventario-demo.tu-dominio.com'
    },
    {
      hash: 'c19a067',
      title: 'App Móvil de Seguimiento de Tareas',
      tagline: 'React Native + backend compartido',
      description: 'Aplicación móvil multiplataforma para gestión de tareas de equipo, sincronizada con el mismo backend .NET de la plataforma web, demostrando reutilización de arquitectura.',
      details: [
        { label: 'frontend', value: 'React Native, navegación por stack' },
        { label: 'backend', value: 'API .NET compartida, notificaciones push' },
        { label: 'rol', value: 'desarrollo móvil + integración API' }
      ],
      tech: ['React Native', '.NET Web API', 'SQL Server'],
      repoUrl: 'https://github.com/tu-usuario/tareas-app',
      demoUrl: ''
    }
  ];

  toggleProject(hash: string): void {
    this.openProjectHash = this.openProjectHash === hash ? null : hash;
  }

  isOpen(hash: string): boolean {
    return this.openProjectHash === hash;
  }
}
