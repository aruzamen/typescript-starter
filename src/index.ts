// import { Animal } from "./model/animal";
// import { Gato } from "./model/gato";

import  { Animal, Gato, PI, helloWorldTS } from "./model";

let helloWorld:string = 'Hello TypeScript world!';
let numberContainer:number = 2;

console.log(helloWorld);

var animal1 = new Gato('Misifu');
animal1.mover();
animal1.mover(5);

var gato: Animal = new Gato('Mauricio');

gato.nombre = 'Tom';

//polimorfismo
gato.mover();
(<Gato>gato).mover(3);
(gato as Gato).mover(5);

console.log("PI constant", PI);
helloWorldTS();