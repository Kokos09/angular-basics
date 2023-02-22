import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['IronMan', 'Spiderman', 'Thor', 'Hulk', 'BlackWidow'];
  heroeBorrado:string='';
  public borrarHeore(): string {
    return this.heroeBorrado = this.heroes.shift()||'';
  }
}
