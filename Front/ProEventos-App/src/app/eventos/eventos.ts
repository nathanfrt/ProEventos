import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, FormsModule, CollapseModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'],
})
export class Eventos implements OnInit {
  public eventos: any = [];
  private _filtroLista: string = '';


  public get filtroLista() {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventos = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) =>
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe({
      next: (response) => {
        this.eventos = response;
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.eventos = [
      {
        Tema: 'Angular',
        Local: 'São Paulo',
        DataEvento: '2023-10-01',
        QtdPessoas: 100,
        Lote: 'Lote 1',
        Descricao: 'Evento de Angular',
      },
      {
        Tema: 'React',
        Local: 'Rio de Janeiro',
        DataEvento: '2023-11-01',
        QtdPessoas: 150,
        Lote: 'Lote 2',
        Descricao: 'Evento de React',
      },
      {
        Tema: 'Vue.js',
        Local: 'Belo Horizonte',
        DataEvento: '2023-12-01',
        QtdPessoas: 200,
        Lote: 'Lote 3',
        Descricao: 'Evento de Vue.js',
      },
    ];
  }
}
