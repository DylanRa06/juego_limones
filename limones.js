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

let puntos = 0;
let vidas = 3;
let velocidadCaida = 200;
let intervalo;

function iniciar(){
    canvas = document.getElementById("areaJuego");
    ctx = canvas.getContext("2d");
    personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
    personajeY = canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE);
    
    actualizarPantalla();
    aparecerLimon();
    
    intervalo = setInterval(bajarLimon, velocidadCaida);
}

function moverDerecha(){
    if (vidas > 0 && puntos < 10) {
        personajeX += 10;
        actualizarPantalla();
        detectarColision();
    }
}

function moverIzquierda(){
    if (vidas > 0 && puntos < 10) {
        personajeX -= 10;
        actualizarPantalla();
        detectarColision();
    }
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
    detectarPiso();
}

function reiniciarJuego(){
    clearInterval(intervalo);
    puntos = 0;
    vidas = 3;
    velocidadCaida = 200;
    limonY = 5;
    
    document.getElementById("txtPuntaje").innerText = puntos;
    document.getElementById("txtVidas").innerText = vidas;
    
    iniciar();
}   

function detectarColision(){
    if(limonX < personajeX + ANCHO_PERSONAJE &&
       limonX + ANCHO_LIMON > personajeX &&
       limonY < personajeY + ALTURA_PERSONAJE &&
       limonY + ALTURA_LIMON > personajeY){
        
        puntos += 1; 
        document.getElementById("txtPuntaje").innerText = puntos;

        if(puntos == 3) {
            clearInterval(intervalo);
            velocidadCaida = 100;
            intervalo = setInterval(bajarLimon, velocidadCaida);
        } else if(puntos == 6) {
            clearInterval(intervalo);
            velocidadCaida = 50;
            intervalo = setInterval(bajarLimon, velocidadCaida);
        } else if(puntos == 10) {
            clearInterval(intervalo); 
            alert("¡TIENES LOS LIMONES, AHORA TE FALTA SAL Y TEQUILA! 🍋🇲🇽");
            return;
        }

        aparecerLimon();
    }
}

function aparecerLimon(){
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}

function detectarPiso(){
    if(limonY + ALTURA_LIMON >= canvas.height - ALTURA_SUELO){
        vidas -= 1;
        document.getElementById("txtVidas").innerText = vidas;
        
        if(vidas == 0){
            clearInterval(intervalo); 
            alert("GAME OVER");
        } else {
            aparecerLimon();
        }
    }
}