let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hola desafio';

function botonConsole() {
    alert('El botton fue clicado');
}

function amoJs() {
    alert('Yo amo JS');
}
function nombreCiudad()
{
    let ciudad = prompt("Ingresa una ciudad de Brazil");
    
    alert("Estuve en  " + ciudad + " y me acorde de ti");
}

function sumaDeDos()
{
    let numeroUno = parseInt(prompt("Ingresa un el primer numero"));
    let numeroDos = parseInt(prompt("Ingresa el segundo numero"));
    let total = numeroUno + numeroDos;
    alert("La suma de " + numeroUno + " y " + numeroDos + " es " + total );
}