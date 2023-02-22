import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
<h1>{{title1}}</h1>
<h3>La base es: <strong>{{base}}</strong></h3>
<button (click)="acumular(base)">+5</button>
<span>{{numero}}</span>
<button (click)="acumular(base)">-5</button>
    `,
})
export class ContadorComponente {
    title = 'bases';
    title1: string = 'Hola Mundo';
    numero: number = 0;
    base: number = 5;
    acumular(valor: number) {
        this.numero+=valor;
    }
}