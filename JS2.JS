const boton = document.createElement('button');
boton.innerText = 'Lista de mascotas';
const resultado = document.getElementById('resultado');
function cambiarColorEncima() {
    boton.style.backgroundColor = 'blue';}
    function restaurarColorOriginal() {
        setTimeout(function () {
            boton.style.backgroundColor = ''; }, 2000);}
            boton.addEventListener('mouseover', cambiarColorEncima);
            boton.addEventListener('mouseout', restaurarColorOriginal);
resultado.appendChild(boton);
boton.onclick = filtrarMascota;
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

function filtrarEspecie(mascota) {
    return datosBusqueda.especie ? mascota.especie == datosBusqueda.especie : mascota;
}

function filtrarRaza(mascota) {
    return datosBusqueda.raza ? mascota.raza == datosBusqueda.raza : mascota;
}

function filtrarEdad(mascota) {
    return datosBusqueda.edad ? mascota.edad == datosBusqueda.edad : mascota;
}

function filtrarTamaño(mascota) {
    return datosBusqueda.tamaño ? mascota.tamaño == datosBusqueda.tamaño : mascota;
}

function filtrarGenero(mascota) {
    return datosBusqueda.genero ? mascota.genero == datosBusqueda.genero : mascota;
}


function filtrarMascota(){
    let resultado = mascotas.filter(filtrarEspecie).filter(filtrarRaza).filter(filtrarEdad).filter(filtrarTamaño).filter(filtrarGenero);
    mostrarMascotas(resultado)
}


function mostrarMascotas(mascotas){
mascotas.forEach (mascota =>{
document.write("<p>" + mascota.especie + " " + mascota.raza + " " + mascota.edad + " " + mascota.tamaño + " " + mascota.genero + "</p>")
})
}




