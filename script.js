let lista = ["MARIA,ARBOL"];
let palabra = lista[Math.floor(Math.random()*lista.length)];
let intentos = 6; 

const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es"
fetch(API)
    .then(responde => responde.json())
    .then(responde => {
        console.log(responde)
        palabra = responde[0].toUpperCase()
        console.log(palabra)
    })
    .catch(err => palabra = lista [Math.floor(Math.random()*lista.length)]);

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar);

function intentar(){
    
    const INTENTO = leerIntento();

    if (INTENTO == ""){
        console.log("vacio")
        return

    } else if (INTENTO.length !== 5){
        alert("La palabra debe contener 5 letras")
        return 

    } else{
    if (INTENTO == palabra){
        terminar ("<h1>¡Felicidades, ganaste!</h1>")
        //return //
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    for (let i in palabra){
        const SPAN = document.createElement("span")
        SPAN.className = "letter"; 
        if (palabra[i] == INTENTO[i]){
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "green"
        }
        else if (palabra.includes (INTENTO[i])){
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "yellow"
        }
        else {
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "grey"
        }
        ROW.appendChild(SPAN)
    } 
    GRID.appendChild(ROW)
    intentos--
    if (intentos==0){
        terminar ("<h1>:( Intentalo de Nuevo</h1>")
    }}
}

function leerIntento(){
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase( )
    return intento

} 

function terminar(mensaje){
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = mensaje;
    BOTON.disabled = true

}


