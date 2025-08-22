import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Eventos } from './eventos/eventos';
import { Palestrantes } from './palestrantes/palestrantes';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Eventos, Palestrantes, CommonModule, NavComponent, CollapseModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('ProEventos-App');
}
