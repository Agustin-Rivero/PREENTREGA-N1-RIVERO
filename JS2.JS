class Mascota {
    constructor(especie, raza, edad, tamaño, genero) {
        this.especie = especie;
        this.raza = raza;
        this.edad = edad;
        this.tamaño = tamaño;
        this.genero = genero;
    }
}

const mascotas = [];
mascotas.push(new Mascota("perro","golden", "joven" , "grande", "macho"));
mascotas.push(new Mascota("perro","labrador", "adulto" , "mediano", "hembra"));
mascotas.push(new Mascota("perro","galgo", "cachorro" , "chico", "hembra"));
mascotas.push(new Mascota("gato","siames","joven" , "chico", "macho"));
mascotas.push(new Mascota("gato","persa", "joven" , "chico", "macho"));

let especie = prompt("Solicitar especie")
let raza = prompt("Solicitar raza")
let edad = prompt("Solicitar edad")
let tamaño = prompt("Solicitar tamaño")
let genero = prompt("Solicitar genero")


const datosBusqueda = {
    especie: especie,
	raza: raza,
	edad: edad,
	tamaño: tamaño,
    genero: genero
}

function filtrarEspecie(mascota){
    if(datosBusqueda.especie){
        return mascota.especie == datosBusqueda.especie
    }
    return mascota;
}

function filtrarRaza(mascota){
    if(datosBusqueda.raza){
        return mascota.raza == datosBusqueda.raza
    }
    return mascota;
}

function filtrarEdad(mascota){
    if(datosBusqueda.edad){
        return mascota.edad == datosBusqueda.edad
    }
    return mascota;
}

function filtrarTamaño(mascota){
    if(datosBusqueda.tamaño){
        return mascota.tamaño == datosBusqueda.tamaño
    }
    return mascota;
}

function filtrarGenero(mascota){
    if(datosBusqueda.genero){
        return mascota.genero == datosBusqueda.genero
    }
    return mascota;
}


function filtrarMascota(){
    let resultado = mascotas.filter(filtrarEspecie).filter(filtrarRaza).filter(filtrarEdad).filter(filtrarTamaño).filter(filtrarGenero);
    mostrarMascotas(resultado)
}
filtrarMascota();

function mostrarMascotas(mascotas){
mascotas.forEach (mascota =>{
document.write("<p>" + mascota.especie + " " + mascota.raza + " " + mascota.edad + " " + mascota.tamaño + " " + mascota.genero + "</p>")
})
}