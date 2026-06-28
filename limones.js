let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 60;    
const ANCHO_PERSONAJE = 40;
const ANCHO_LIMON = 20;
const ALTURA_LIMON = 20;
let personajeX = canvas.width/2;
let limonX=250;
let limonY=5;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

function moverDerecha(){
    personajeX += 10;
    actualizarPantalla();
}

function moverIzquierda(){
    personajeX -= 10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO, canvas.width,ALTURA_SUELO);

}

function dibujarPersonaje() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon (){   
     ctx.fillStyle = "green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON); 

}

function bajarLimon(){
    limonY += 10;
    actualizarPantalla();
}