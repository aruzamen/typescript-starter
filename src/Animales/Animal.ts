abstract class Animal {
    private _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        if(nombre.length <= 3) {
            console.error('\n[Error]. El nombre es muy corto');
            return;
        }
        this._nombre = nombre;
    }

    abstract mover(): void;
}

class Gato extends Animal {
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

var animal1 = new Gato('Misifu');
animal1.mover();
animal1.mover(5);

var gato: Animal = new Gato('Mauricio');

gato.nombre = 'Tom';

//polimorfismo
gato.mover();
(<Gato>gato).mover(3);
(gato as Gato).mover(5);