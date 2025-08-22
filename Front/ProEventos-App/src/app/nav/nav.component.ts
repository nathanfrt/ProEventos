import { Component, OnInit } from '@angular/core';
import { CollapseDirective } from "ngx-bootstrap/collapse";

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [CollapseDirective]
})
export class NavComponent implements OnInit {
isCollapsed: any;

  constructor() { }

  ngOnInit() {
  }

}
