import { Component, signal } from '@angular/core';
//import { text } from 'stream/consumers';
import { IExperience } from '../../interface/IExperience.interface';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [KnowledgeComponent,MatTooltip],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary:{
        strong:'Agenda Web',
        p: 'Projeto Pessoal de CRUD iniciado e Finalizado em 2023'
      },
      text:'<p>Projeto com interface simples para apresentar operação de CRUD com base em uma agenda de contatos.</p> <p>A plataforma um sistema de Login usando credencias de contas Google Auth para mais facil gerenciamento de credencias.</p> <p>Nesse projeto foi utilizado Framework Angular v14.2, HTML5, CSS3, JavaScript, TypeScript, BootStrap framework, Google Authentication.</p>'
    }
  ])
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular2+',
      title: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Ícone de conhecimento de Bootstrap',
      title: 'Bootstrap'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
      title: 'HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3',
      title: 'CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript',
      title: 'JavaScript'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de SASS',
      title: 'SASS'
    },
    {
      src: 'assets/icons/knowledge/google.svg',
      alt: 'Ícone de conhecimento em Google Authentication',
      title: 'Google Auth'
    },

  ])
}
