import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';
// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/agenda Web icon.jpg',
      alt: "Projeto Agenda Web",
      title: "Agenda Web",
      with:'160px',
      height: '155px',
      description: '<p>Conheça meu primeiro projeto de CRUD com Angular framework e mais...</p> <p>O projeto consiste em uma plataforma de agenda de contatos de simples manuseio apresentando a proposta de CRUD onde o usuário pode criar contatos, alterar e deletar de uma forma simples e prática!</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/LordHiperion/agendaProject',
        },
      ],
    },
  ]);

//  public openDialog(data: IProjects) {
//     this.#dialog.open(DialogProjectsComponent, {
//       data,
//       panelClass: EDialogPanelClass.PROJECTS
//     });
//   }
// }

}
