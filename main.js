class Persona {
    //constructor
    constructor(nombre = "", apellido = "") {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //atributos

    nombre
    apellido
    // edad
    // genero
    // estatura
    // peso
    // estadoCivil
    // etnia
    // n_doc

    //metodos

    hablar() { console.log(`Soy ${this.nombre} y ${this.apellido} es lo mejor!`); }
    comer() { }
    trabajar() { }
}

class Alumno extends Persona {
    estudiar() {

    }
}

let user = new Persona("Carlos", "React");
user.hablar();

let user2 = new Persona("Miguel", "PHP");
user2.hablar();

let p = new Promise((res, rej) => {
let x=true

if(x){
    res("Promesa exitosa");
}else{
    rej("Promesa fallida");
}
});
console.log(p);
//console.log(user);
// class persona {
//     constructor(id, nombre) {
//         this.id;
//         this.nombre;
//     }
// }


// class auto {
//     constructor(marca, placa, propietario) {
//         this.marca = marca;
//         this.placa = placa;
//         this.propietario = [propietario];
//     }

//     encender = () => {
//         console.log("Enciende");
//     }

//     apagar() {
//         console.log("Apaga");
//     }

//     acelerar(velocidad) {
//         this.velocidad = velocidad
//         console.log(`Velocidad ${velocidad}`);
//     }
//     cambioPropietario(propietario) {
//         this.propietario = [propietario, ...this.propietario]
//     }
// }

//instancias
// let objCamilo = new persona('1241241', 'Camilo');
// let objJuan = new persona('1241241', 'Juan');
// let auto1 = new auto('Audi', "qwe123", objCamilo);

// console.log(auto1);
// auto1.encender();
// auto1.apagar();
// auto1.acelerar("10Km");
// auto1.cambioPropietario(objJuan);
// let marca = 'BMW';

// let auto2 = new auto(marca, "asd321", "pablo");
// console.log(auto2);