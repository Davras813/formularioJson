class persona {
    constructor(id, nombre) {
        this.id;
        this.nombre;
    }
}


class auto {
    constructor(marca, placa, propietario) {
        this.marca = marca;
        this.placa = placa;
        this.propietario = [propietario];
    }

    encender = () => {
        console.log("Enciende");
    }

    apagar() {
        console.log("Apaga");
    }

    acelerar(velocidad) {
        this.velocidad = velocidad
        console.log(`Velocidad ${velocidad}`);
    }
    cambioPropietario(propietario){
        this.propietario=[propietario, ...this.propietario]
    }
}

//instancias
let objCamilo=new persona('1241241', 'Camilo');
let objJuan=new persona('1241241', 'Juan');
let auto1 = new auto('Audi', "qwe123", objCamilo);

console.log(auto1);
auto1.encender();
auto1.apagar();
auto1.acelerar("10Km");
auto1.cambioPropietario(objJuan);
// let marca = 'BMW';

// let auto2 = new auto(marca, "asd321", "pablo");
// console.log(auto2);