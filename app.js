// El principal objetivo de este desafío es
// fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let final = false;

let input = document.getElementById("valorUsuario");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

function agregarAmigo() {
    let valorDeUsuario = document.getElementById('valorUsuario').value;
    if (valorDeUsuario == '') {
       alert('Por favor, inserte un nombre.');
    } else {
        document.getElementById('valorUsuario').value = '';
        amigos.push(valorDeUsuario);
        listaAmigos();
        document.getElementById('botonSortear').removeAttribute('disabled');
    }
}

function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    let nuevaLista = '';
    for(let i = 0; i <= amigos.length - 1; i++){
        nuevaLista = '<li>' + amigos[i] + '</li>';
    }
    return lista.innerHTML += nuevaLista;
}
function sortearAmigo() {
    
    if (final == true){
        document.getElementById('botonAgregar').removeAttribute('disabled');
        condicionesIniciales();
        console.log(' final' + final);
        final = false;
    } else {
        let indiceAleatorio = 0;
        asignarTextoElemento('listaAmigos', '');
        indiceAleatorio = Math.floor(Math.random()* amigos.length);
        asignarTextoElemento('titulo',`El amigo secreto es: ${amigos[indiceAleatorio]}`);
        asignarTextoElemento('resultado', 'Para volver a jugar, pulsa nuevamente el botón.');
        document.getElementById('botonAgregar').setAttribute('disabled', true);
        final = true;
    }
    console.log(final);
    return;
}


function condicionesIniciales(){
    amigos = [];
    asignarTextoElemento('titulo', 'Digite el nombre de sus amigos');
    document.getElementById('botonSortear').setAttribute('disabled', true);
    asignarTextoElemento('resultado', '');
}
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
condicionesIniciales();

cssr