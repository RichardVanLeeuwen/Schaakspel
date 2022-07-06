import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schaakbord',
  templateUrl: './schaakbord.component.html',
  styleUrls: ['./schaakbord.component.scss'],
})
export class SchaakbordComponent implements OnInit {
  vakken: number[] = [];
  kolommen: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.vakken[i] = i;
      this.kolommen[i] = i;
    };
  }
}
