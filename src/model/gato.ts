import { Animal } from "./animal";
export class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    ronronear() {
        console.log('ronroneando')
    }

    mover(distancia: number = 1) {
        console.log('Caminando y ronroneando...');
        console.log(`${this.nombre} se movio ${distancia}m.`)
    }
}