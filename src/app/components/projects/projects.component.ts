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
      title: 'Sistema de Gestión Gastronomica',
      tagline: 'Base de datos + procedimientos almacenados',
      description: 'Sistema que permite almacenar recetas gastrónomicas. Estructurado desde cero, para almacenar, crear, ver, editar recetas que el usuario desee desde su propia cuenta.',
      details: [
        { label: 'Base de Datos', value: 'Firebase' },
        { label: 'procedimientos', value: 'crear, actualizar, leer, eliminar recetas' },
        { label: 'rol', value: 'Fronted-Backend-BD' }
      ],
      tech: ['Firebase', 'Angular', 'Booststrap'],
      repoUrl: 'https://github.com/DayanaB01/RecetasOn',
      demoUrl: 'https://dayanab01.github.io/RecetasOn/'
    },
    {
      hash: '7b2d84f',
      title: 'Plataforma de Turismo',
      tagline: 'Angular + API REST en .NET',
      description: 'Aplicación web para visualisación de lugares turisticos, rutas y planes de diversión, autenticando usurios y clientes, además consumo de API REST propia.',
      details: [
        { label: 'frontend', value: 'Angular, componentes reutilizables, Angular Material' },
        { label: '', value: '.NET Web API' },
        { label: 'Base de Datos', value: 'SQL - SQL server' },
        { label: 'rol', value: 'Desarrolladora full Stack' },
      ],
      tech: ['Angular', '.NET Web API', 'SQL Server', 'Angular Material'],
      repoUrl: 'https://github.com/DayanaB01/Frontend_ET',
      demoUrl: ''
    },
    {
      hash: 'c19a067',
      title: 'Web Creador de campañas Marketing',
      tagline: 'React + backend Mongo BD + stripe',
      description: 'Plataforma web para creadores de campañas, utilizados en meta, tiktok, y otras plataformas. Utilizando API de IA',
      details: [
        { label: 'frontend', value: 'React' },
        { label: 'backend', value: 'MongoDb, API IA, + plataforma de pago Stripe' },
        { label: 'rol', value: 'Desarrolladora full Stack' }
      ],
      tech: ['NextJs', 'MongoBD', 'IA', 'Stripe'],
      repoUrl: 'https://github.com/DayanaB01/CeliumLab',
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
