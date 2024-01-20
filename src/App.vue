<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Contador titulo="Contador1" :valor="10" />
  <Contador titulo="Contador2" :valor="calcularvalor()"/>

  <Contador titulo="Contador3" /> -->
  <!-- <Calculadora/> -->
  <!--  <pokemon/> -->
  <PokemonPage/>
  <!-- <div class="container" v-if="mostrarjuego">
    <h2>Puntaje:{{ puntaje }}</h2>
    <h2>Intento:{{ intento }}</h2>
    <div class="container2">
      <imagen :texto="texto1" :urlImg="url1" />
      <imagen :texto="texto2" :urlImg="url2" />
      <imagen :texto="texto3" :urlImg="url3" />
    </div>
    <button v-on:click="jugar">Jugar</button>
  </div>
  <div v-if="mostrarperdedor" class="container3">
    <h1>Haz utilizado tus 5 intentos</h1>
    <h1>El juego ha termindo, intentalo nuevamente</h1>
    <button v-on:click="reiniciar">Nuevo Juego</button>
  </div>
  <div v-if="mostrarganador" class="container4">
    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
    <button v-on:click="reiniciar">Nuevo Juego</button>
  </div> -->
</template>

<script>
/* import Contador from "./components/Contador.vue";
 */
//import Calculadora from "./components/Calculadora.vue";
//import Pregunta from "./components/Pregunta.vue"

//import pokemon from "./components/pokemon.vue";
import PokemonPage from "./pages/PokemonPage.vue";
//import imagen from "./components/imagen.vue";

export default {
  name: "App",
  components: {
    //Contador,
    //Calculadora,
    //Pregunta,
    //pokemon,
    PokemonPage,
/*     imagen,
 */  },
  /* data() {
    return {
      puntaje: 0,
      intento: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "xxxxxxxxxxxxx",
      texto2: "xxxxxxxxxxxxx",
      texto3: "xxxxxxxxxxxxx",
      mostrarganador: false,
      mostrarperdedor: false,
      mostrarjuego: true,
    };
  },
  methods: {
    async jugar() {
      //instancia 1
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;
      //instancia 2
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;
      //instancia 3
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },
    evaluarResultado() {
      this.intento++;
      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje += 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      }

      if (this.puntaje >= 10) {
        this.mostrarganador = true;
        this.mostrarjuego = false;
        this.mostrarperdedor = false;
      }

      if (this.intento === 5) {
        this.mostrarperdedor = true;
        this.mostrarganador = false;

        this.mostrarjuego = false;
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "xxxxxxxxxxxxx";
      this.texto2 = "xxxxxxxxxxxxx";
      this.texto3 = "xxxxxxxxxxxxx";
      this.mostrarganador = false;
      this.mostrarperdedor = false;
      this.mostrarjuego = true;
    },
  }, */
  /* methods: {
    calcularvalor() {
      return 5 + 5 * 10;
    },
  }, */
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*.container {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 200px);
}
h2 {
  grid-column: span 2;
}
.container2 {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(3, 500px);
  margin-left: 400px;
}
.container3 {
  color: red;
}
.container4 {
  color: blue;
}

button {
  grid-column: span 4;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
  border-radius: 4px;
}*/
</style>
