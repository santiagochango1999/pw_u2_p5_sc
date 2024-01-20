


  
/* const obtenerIDPokemon = () => {
    const pokemonArr = Array.from(Array(600));
    console.log(pokemonArr);
} */


const obtenerIDPokemon = () => {
    const pokemon1 = obtenerAleatorio(600);
    const pokemon2 = obtenerAleatorio(600);
    const pokemon3 = obtenerAleatorio(600);
    const pokemon4 = obtenerAleatorio(600);
    const pokemonArr = [pokemon1, pokemon2, pokemon3, pokemon4];
    console.log(pokemonArr);
    return pokemonArr;
}

const obtenerNombresPokemon = async ([ p1, p2, p3, p4 ]) => {
    const nombre1 = await consultarNombre(p1);
    const nombre2 = await consultarNombre(p2);
    const nombre3 = await consultarNombre(p3);
    const nombre4 = await consultarNombre(p4);

    const pk1={
        id:p1,
        nombre:nombre1
    }
    const pk2={
        id:p2,
        nombre:nombre2
    }
    const pk3={
        id:p3,
        nombre:nombre3
    }
    const pk4={
        id:p4,
        nombre:nombre4
    }

    const arreglo=[pk1,pk2,pk3,pk4];
    console.log("nuevo")
    console.log(arreglo);
    return arreglo;

}

const obtenerPokemon=async()=>{
    const arregloid=obtenerIDPokemon();
    return await obtenerNombresPokemon(arregloid);
}

async function consultarNombre(id) {
    const data = await consumirApi(id);
    return data.name;
}

const consumirApi = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
}

const obtenerPokemonFachada = async() => {
      return await obtenerPokemon()
}

function obtenerAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}

export default obtenerPokemonFachada

