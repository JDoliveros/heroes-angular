import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', this.index]);
  }

}
