const btnUno = document.querySelector('#uno')
const btnDos = document.querySelector('#dos')
const btnTres = document.querySelector('#tres')
const btnCuatro = document.querySelector('#suma')
const btnCinco = document.querySelector('#cuatro ')
const btnSeis = document.querySelector('#cinco')
const btnSiete = document.querySelector('#seis')
const btnOcho = document.querySelector('#multi')
const btnNueve = document.querySelector('#siete')
const btnDies = document.querySelector('#ocho')
const btnOnce = document.querySelector('#nueve')
const btnDoce = document.querySelector('#divi')
const btnTrece = document.querySelector('#cero')
const btnCatocer = document.querySelector('#limpiar')
const btnQuince = document.querySelector('#igual')


btnUno.addEventListener ('click', () => {
   const valor= btnUno.textContent
})
    const suma = () => {
        valor 
    }




let numeroA;
let numeroB;

function btn_suma(caracter){
    numeroA = valorVisor;
    operaciones = "+";
    
    limpar();
}


function btn_multiplica(caracter){
  numeroA = valorVisor;
  operaciones = "*";
  
  limpar();
}

function btn_division(caracter){
  numeroA = valorVisor;
  operacao = "/";
  
  limpar();
}

function reset() {
    // limpar pantalla
    document.getElementById('pantalla').value = '';
    valorVisor = 0;
    operacao = "";
}
function limpar(){
    document.getElementById('pantalla').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {

    let total = 0;
    let ultimoTotal = 0;
      switch(operaciones){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('pantalla').value = total;
      valorVisor = ultimoTotal;

}