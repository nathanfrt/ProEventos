import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss']
})
export class Eventos implements OnInit {
  public eventos: any;

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
      }
    });

    // Mock de dados para testar a visualização
    this.eventos = [
      { Tema: 'Angular', Local: 'São Paulo' },
      { Tema: 'React', Local: 'Rio de Janeiro' }
    ];
  }
}
