<template>
  <div class="container">
    <div class="calculadora">
      <div id="muestra" class="display">{{ resultado }}</div>
      <button v-on:click="reset()" class="bt_s">&#8705;</button>
      <button v-on:click="borrar()">&#10229;</button>
      <button v-on:click="operacion('/')">/</button>
      <button v-on:click="ingresa('7')">7</button>
      <button v-on:click="ingresa('8')">8</button>
      <button v-on:click="ingresa('9')">9</button>
      <button v-on:click="operacion('*')">&#215;</button>
      <button v-on:click="ingresa('4')">4</button>
      <button v-on:click="ingresa('5')">5</button>
      <button v-on:click="ingresa('6')">6</button>
      <button v-on:click="operacion('-')">&#8208;</button>
      <button v-on:click="ingresa('1')">1</button>
      <button v-on:click="ingresa('2')">2</button>
      <button v-on:click="ingresa('3')">3</button>
      <button v-on:click="operacion('+')">&#43;</button>
      <button v-on:click="ingresa('0')" class="bt_s">0</button>
      <button onclick="">&#183;</button>
      <button v-on:click="igual()">&#61;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: "0",
      num2: null,
      p: null,
      resultado: "0",
      di:"0",
    };
  },
  methods: {
    reset() {
      this.num1 = "0";
      this.num2 = null;
      this.p = null;
      this.resultado = "0";
    },

    operacion(op) {
      switch (op) {
        case "+":
          this.p = "+";
          this.resultado = this.resultado + "+";
          break;
        case "-":
          this.p = "-";
          this.resultado = this.resultado + "-";
          break;
        case "x":
          this.p = "x";
          this.resultado = this.resultado + "x";
          break;
        case "/":
          this.p = "/";
          this.resultado = this.resultado + "/";
          break;
      }
    },
    borrar() {
      if (this.p === null) {
        this.num1 = this.num1.length > 1 ? this.num1.slice(0, -1) : "0";
        this.actualiza();
      }
    },
    igual() {
      if (this.p !== null) {
        const numero1 = parseFloat(this.num1);
        const numero2 = parseFloat(this.num2);
        switch (this.p) {
          case "+":
            this.resultado = this.resultado + "=" +(numero1 + numero2).toString();
            break;
          case "-":
            this.resultado = this.resultado + "=" +(numero1 - numero2).toString();
            break;
          case "x":
            this.resultado = this.resultado + "=" +(numero1 * numero2).toString();
            break;
          case "/":
            this.resultado = this.resultado + "=" +(numero1 / numero2).toString();
            break;
        }
        this.num1 = this.resultado;
        this.num2 = null;
        this.p = null;
      }
    },
    ingresa(digito) {
      if (this.p === null) {
        this.num1 = this.num1 === "0" ? digito : this.num1 + digito;
      } else {
        this.num2 = this.num2 === null ? digito : this.num2 + digito;
      }
      this.di=digito;
      this.actualiza();
    },
    actualiza() {
      if (this.num1 === "0" && this.num2 === null) {
        this.resultado = "0";
      } else if (this.p === null) {
        this.resultado = this.num1;
      } else if (this.num2 === null) {
        this.resultado = this.num1;
      } else if (this.num1 !== "0" && this.num2 !== null) {
        this.resultado = this.resultado+this.di;
      } 

    },
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 150px repeat(6, 50px);
  background-color: #00916e;
  padding: 15px;
  margin: 200px 50px;
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px #00000033;
}
.display {
  display: grid;
  grid-column: span 4;
  padding: 15px;
  margin: 10px 10px 20px 20px;
  background-color: #363636;
  border-radius: 32px;
  text-align: right;
  box-shadow: 0px 0px 0px 10px #00000033;
}

button {
  margin: 5px;
  padding: 0px;
  border-radius: 20px;
  border: none;
  background-color: #00916e;
  box-shadow: 5px 5px 10px 2px #00000040;
  font-size: 25px;
  cursor: pointer;
}
button:hover {
  background-color: #46d2b2;
}
.bt_s {
  grid-column: span 2;
}
.display:hover {
  background-color: #5a5959;
}

body {
  background-color: #224870;
}

* {
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
button:focus {
  background-color: #d24652;
}
</style>