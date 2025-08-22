import { Component, Injectable, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from "./eventos/eventos";
import { Palestrantes } from "./palestrantes/palestrantes";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Eventos, Palestrantes, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProEventos-App');
}
