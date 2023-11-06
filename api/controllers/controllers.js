// export function saludar(){
//     console.log("HOLA");
// }

//LLAMADOS A LA API

export async function buscarPokemon(url){
    
    // const defaultUrl = "https://pokeapi.co/api/v2/pokemon/"


    let data  = await fetch(url || "https://pokeapi.co/api/v2/pokemon/")
    let datosPokemon = await data.json()// este resultado es un objeto

    //console.log(datosPokemon.results);
    //return datosPokemon.results
    let arrayPokemones = []

    for (let i = 0; i < datosPokemon.results.length; i++) {
        const pokemon = datosPokemon.results[i];
        // console.log("i= ", i);
        // console.log("Pokemon que estamos iterando:", pokemon.url);

        let urlPokemon = await fetch(pokemon.url)
        let urlPokemonParse = await urlPokemon.json()
        
        let pokemonFormateado = {
            id: urlPokemonParse.id,
            nombre: urlPokemonParse.name,
            tipos: urlPokemonParse.types,
            imagen: urlPokemonParse.sprites.other.dream_world.front_default
        } 

        arrayPokemones.push(pokemonFormateado)


        // console.log(pokemonFormateado);
    }

    return{
        previous: datosPokemon.previous,
        next: datosPokemon.next,
        arrayPokemones: arrayPokemones,
        
    };



// else if(url){

//     let data  = await fetch(url)
//     let datosPokemon = await data.json()// este resultado es un objeto

//     //console.log(datosPokemon.results);
//     //return datosPokemon.results
//     let arrayPokemones = []

//     for (let i = 0; i < datosPokemon.results.length; i++) {
//         const pokemon = datosPokemon.results[i];
//         // console.log("i= ", i);
//         // console.log("Pokemon que estamos iterando:", pokemon.url);

//         let urlPokemon = await fetch(pokemon.url)
//         let urlPokemonParse = await urlPokemon.json()
        
//         let pokemonFormateado = {
//             id: urlPokemonParse.id,
//             nombre: urlPokemonParse.name,
//             tipos: urlPokemonParse.types,
//             imagen: urlPokemonParse.sprites.other.dream_world.front_default
//         } 
        
//         arrayPokemones.push(pokemonFormateado)


//         // console.log(pokemonFormateado);
//     }

//     return{
//         previous:dataParseada.previous,
//         next:dataParseada.next,
//         Array: arrayPokemones,
        
//     };




    
} 



export async function buscarPokemonPorNombre(nombre){
    let data  = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    let dataParseada = await data.json();


    let pokemonFormateado = {
        id: dataParseada.id,
        nombre: dataParseada.name,
        tipos: dataParseada.types,
        imagen: dataParseada.sprites.other.dream_world.front_default,
    }; 
    //console.log(pokemonFormateado);
    //console.log(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    //return console.log(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    return pokemonFormateado;
}

export async function paginaSiguiente(){

}


export async function paginaAnterior(){

}


//buscarPokemon()

//buscarPokemonPorNombre()