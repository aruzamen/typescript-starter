export abstract class Animal {
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
