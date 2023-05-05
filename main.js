
//let nombre ="Legolas";

//let edad= 23;


//et concatencacion= nombre + "" + edad;


/*let datos = document.getElementById("datos");

datos.innerHTML=`<h1>Soy el div de los datos</h1>
                 <h2> Mi nombre es: ${nombre}</h2>
                 <h2> Mi edad es: ${edad}</h2>`;


if(edad >=18){
    datos.innerHTML += '<h1> Eres mayor de edad </h1>';

}else{
    datos.innerHTML += '<h2> Eres menor de edad </h2>';
}


for(let i=0; i<100; i++){
    datos.innerHTML += "<h2> Estamos en el año:"+i;
}*/


/*function MostrarNombre(nombre,edad){
    let datos = `<h1>Soy el div de los datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h2> Mi edad es: ${edad}</h2>`;

    return datos;
}



function imprimir(){
    let datos= document.getElementById("datos");
    datos.innerHTML=MostrarNombre(nombre,edad);
}


imprimir();

let nombres= ['Legolas','Aragon','Gandalf'];


nombres.forEach(function(nombres){

    document.write(nombres+ '<br/>');
})*/


async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data;
}


async function init(){
    const firstPokemon = await getPokemon(150);
    console.log(firstPokemon.name);
    window.pokemon.textContent = firstPokemon.name;
}
init();





