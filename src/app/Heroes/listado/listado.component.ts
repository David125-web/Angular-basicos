import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=['spiderman','ironman','batman','superman'];
  heroeBorrado:string[] = [];
  BorrandoHeroe()
  {
    this.heroeBorrado.push(this.heroes.shift() || '');
     
  }  
}
