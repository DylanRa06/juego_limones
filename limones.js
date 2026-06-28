let canvas;
let ctx;
const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 60;    
const ANCHO_PERSONAJE = 40;
const ANCHO_LIMON = 20;
const ALTURA_LIMON = 20;
let personajeX = 250;
let personajeY = 320;
let limonX = 250;
let limonY = 5;

function iniciar(){
    canvas = document.getElementById("areaJuego");
    ctx = canvas.getContext("2d");
    personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
    personajeY = canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE);
    actualizarPantalla();
    aparecerLimon();
}

function moverDerecha(){
    personajeX += 10;
    actualizarPantalla();
    detectarColision();
}

function moverIzquierda(){
    personajeX -= 10;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarLimon (){   
     ctx.fillStyle = "green";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTURA_LIMON); 
}

function bajarLimon(){
    limonY += 10;
    actualizarPantalla();
    detectarColision(); 
}

function reiniciarJuego(){
    personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
    limonX = 250;
    limonY = 5;
    actualizarPantalla();
}   

function detectarColision(){
    if(limonX < personajeX + ANCHO_PERSONAJE &&
       limonX + ANCHO_LIMON > personajeX &&
       limonY < personajeY + ALTURA_PERSONAJE &&
       limonY + ALTURA_LIMON > personajeY){
        alert("Has atrapado el limon");
    }
}


function  aparecerLimon(){

    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}