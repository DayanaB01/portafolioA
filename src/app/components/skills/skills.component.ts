import { Component } from '@angular/core';
import { SkillCategory } from 'src/app/models/skill-category.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      label: 'frontend',
      items: ['Angular', 'React', 'React Native', 'TypeScript / JavaScript']
    },
    {
      label: 'backend',
      items: ['.NET / C#', 'API REST', 'Entity Framework', 'Autenticación JWT']
    },
    {
      label: 'datos',
      items: ['SQL Server', 'T-SQL avanzado', 'Modelado relacional', 'Procedimientos almacenados']
    }
  ];
}
