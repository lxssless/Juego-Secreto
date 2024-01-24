let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos}${(intentos ===1) ? ' vez':' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else { if(numeroSecreto>numeroUsuario){
        asignarTextoElemento('p','Oops fallaste, el numero secreto es mayor');
        intentos++;
    } else{
        asignarTextoElemento('p','Oops fallaste, el numero secreto es menor');
        intentos++;
    }
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function genNumeroSecreto(){
    let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo)+1);
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Alcanzaste el maximo de numeros secretos');
        return;
    } else{
    //si el numero generado esta en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return genNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
intentos=1;
numeroSecreto=genNumeroSecreto();
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo} `);
return;
}

function reiniciarJuego(){
    //-limpiar caja
    limpiarCaja();
    //indicar intervalo de numeros
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    return;
}