import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vak',
  templateUrl: './vak.component.html',
  styleUrls: ['./vak.component.scss']
})
export class VakComponent implements OnInit {
  @Input() xLoc = 0;
  @Input() yLoc = 0;
  achtergrondKleur = '';

  constructor() {
  }

  ngOnInit(): void {
    this.achtergrondKleur = ((this.xLoc + this.yLoc) % 2) == 1 ? "zwart" : "wit";
  }

}
