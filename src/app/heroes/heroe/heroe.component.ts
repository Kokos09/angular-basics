import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    titulo: string = 'Heroe';
    private edad: number = 35;
    private nombre: string = 'IronMan';

    public get Nombre(): string {
        return `${this.nombre}`;
    }

    public get Edad(): string {
        return `${this.edad}`;
    }

    public cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    public cambiarEdad(): void {
        this.edad = 45;
    }
}