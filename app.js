// El principal objetivo de este desafío es
// fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let valorDeUsuario = document.getElementById('valorUsuario').value;
    if (valorDeUsuario == '') {
       alert('Por favor, inserte un nombre');
    } else {
        document.getElementById('valorUsuario').value = '';
        amigos.push(valorDeUsuario);
        listaAmigos();
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
    let indiceAleatorio = 0;
    if (amigos == ''){
        alert('Inserte un nombre');
    } else {
        document.getElementById('listaAmigos').innerHTML = "";
        indiceAleatorio = Math.floor(Math.random()* amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es ${amigos[indiceAleatorio]}`;
    } return;
}