function insert(num){
    const numero = document.getElementById('resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = numero + num ;
}

function clean(){
    document.querySelector('#resultado').innerHTML = "";
}

function back(){
    const resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    const resultado = document.querySelector('#resultado').innerHTML;
    if (resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado);
    }
    else {
        document.querySelector('#resultado').innerHTML = "Nada..";
    }
}