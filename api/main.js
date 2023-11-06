import { buscarPokemon, buscarPokemonPorNombre } from "./controllers/controllers.js";

let root = document.getElementById("root")

let botonBusqueda = document.getElementById("buscar-pokemon")
let barraBusqueda = document.getElementById("barra-busqueda")

let previousBtn = document.getElementById("previous")
let nextBtn = document.getElementById("next")

root.innerHTML = "<img src='https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_1280.png'>"



let previousUrl = "";
let nextUrl = "";





async function MostrarPokemon(url) {
    let objetoPokemon = await buscarPokemon(url)
    //let objetoPokemon = await buscarPokemon(url)
    previousUrl = objetoPokemon.previous
    nextUrl = objetoPokemon.next
  


    let html = "";
    objetoPokemon.arrayPokemones.forEach((pokemon) => {

        let cardPokemon = `<div class="card">
        <span class="info-pokemon">${pokemon.nombre}</span>
        <span class="info-pokemon">${pokemon.id}</span>
        <span class="info-pokemon">${pokemon.tipos[0].type.name}</span>
        <img class="img-pokemon" src="${pokemon.imagen}">
        </div>`
        html += cardPokemon
        
    });

    root.innerHTML = html
    // console.log(pokemones);
    
}




MostrarPokemon()

// add event listener que va a ver que escribo en el input y ejecuta el buscar x nombre

//buscarPokemonPorNombre()

//



botonBusqueda.addEventListener("click", async function (event) {
    event.preventDefault()
   
     let pokemonBuscado = await buscarPokemonPorNombre(barraBusqueda.value)
     
     let cardPokemon = `<div class="card">
     <span>${pokemonBuscado.nombre}</span>
     <span>${pokemonBuscado.id}</span>
     <span>${pokemonBuscado.tipos[0].type.name}</span>
     <img class="img-pokemon" src="${pokemonBuscado.imagen}">
     </div>`
     
     root.innerHTML = cardPokemon;
 });

 
// add event listener que va a ver que booton le doy clic y accionara a otra pagina



previousBtn.addEventListener("click", async () => {
   
    MostrarPokemon(previousUrl)

})


nextBtn.addEventListener("click", async () => {
  
    MostrarPokemon(nextUrl)

})