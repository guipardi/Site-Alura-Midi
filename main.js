/* 
Primeira coisa sobre arquivos JS, é onde deve ficar a tag de impotação no HTML. 
Se, o arquivo JS, precisa e interage com classes, tags ou ids, o arquivo DEVE ficar antes do fechamento da TAG body
Caso contrário, o arquivo pode ficar na TAG head
*/


/* Como buscar um arquivo dentro do seu html */
// document -> Para acessar o arquivo todo html
// .querySelector('classe ou id ou tag') -> Para buscar esse elemento

//Entao:

/* document.querySelector('.tecla_pom') /* Buscaondo a tecla POM */


/* Criando a funcao que irá tocar o som, quando o botao for clicado */

/* const tocaSomPom = () => {
    document.querySelector('#som_tecla_pom').play()
  } */


/* Como atribuir esse som ao click do batao */
//Primeiro acessamos o botao
//Depois dentro do botao, adicionamos o atributo onclick, que vai armazenar a funcao
//Ou seja quando o botao for clicado, vai chamar a funcao tocaSomPom
//E nao podemos colocar o parentes apos o nome da funcao nesse caso, pois se colocassemos, a funcao seria chamada na hora que o codigo ler essa linha
/* document.querySelector('.tecla_pom').onclick = tocaSomPom */


/*
  Ao invés de criar um document.querySelector('seletor') para cada botao, podemos utilizar o document.querySelectorAll('seletor')
  Esse irá pegar todos os elementos que que possuem o seletor passado como parametro
*/

//Criando uma variavel para armazenar todas as teclas em uma lista

/* const listaDeTeclas = document.querySelectorAll('.tecla') */

//Acessando o primeiro elemento desta lista e tocando seu som a partir de uma funcao ja criada:

/* listaDeTeclas[0].tocaSomPom */

//Para acessar todos os elementos desta lista podemos usar o for, ou o while, nesse caso usaremos o while

/* let i = 0

while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = tocaSomPom
  i = i + 1
  /* Porem nesse caso todos os botoes, vao tocar o som pom 
} */

//Agora vou criar a mesma funcao, com o mesmo while, so que usando parametro na funcao

/* const tocaSom = (idDoSom) => {
  document.querySelector(idDoSom).play()
} 

let i = 0; */

/* while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = tocaSom('#som_tecla_psh')

  i = i + 1;
} */

//Porem quando eu abro os parentes apos o nome de uma funcao eu invoco ele imediatamente, e isso ocasiona um erro
//Entao como passar parametros para uma funcao sem que ela seja chamada imedianamente -> Funcoes Anonimas

/* while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = function () {
    tocaSom('#som_tecla_psh');
  }
  i = i + 1;
} */





//Agora vamos para parte final do codigo, já montando todo ele denovo

/* const listaDeTeclas = document.querySelectorAll('.tecla');

const tocaSom = (idDoSomQueVaiSerTocado) => {
  document.querySelector(idDoSomQueVaiSerTocado).play();
}
 */
//Usando while

/* let i = 0;

while (i < listaDeTeclas.length) {
  let tecla = listaDeTeclas[i];
  let instrumento = tecla.classList[1]; /* É sempre, no nosso HTML, a segunda classe que possui o nome do instrumeto 
  let parametroTocaSom = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(parametroTocaSom)
  }

  i += 1
} */

//Usando for

/* for (let j = 0; j < listaDeTeclas.length; j++) {
  let tecla = listaDeTeclas[j];
  let instrumento = tecla.classList[1]; /* É sempre, no nosso HTML, a segunda classe que possui o nome instrumento 
  let parametroTocaSom = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(parametroTocaSom)
  }
}
 */

//Adicionando classe com o JS

//Primeiro seleciona o elemento em que deseja adcionar a classe

//Depois acessa a classList com a funcao add

//No caso do codigo ficaria assim :



/* for (let j = 0; j < listaDeTeclas.length; j++) {
  let tecla = listaDeTeclas[j];
  let instrumento = tecla.classList[1];
  let parametroTocaSom = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(parametroTocaSom)
  }

  tecla.onkeydown = function () {
    tecla.classList.add('ativa')
  }
} */



//Removendo classe com o JS

//Mesmos passos de adicionar
//E depois ja temos o codigo final


const listaDeTeclas = document.querySelectorAll('.tecla');

const tocaSom = (idDoSomQueVaiSerTocado) => {
  elemento = document.querySelector(idDoSomQueVaiSerTocado)

  if (elemento === null) {
    console.log('Elemento Inválido')
  } else {
    if (elemento.localName != 'audio') {
      console.log('Elemento Inválido')
    } else {
      elemento.play()
    }
  }
}


for (let j = 0; j < listaDeTeclas.length; j++) {
  let tecla = listaDeTeclas[j];
  let instrumento = tecla.classList[1];
  let parametroTocaSom = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(parametroTocaSom)
  }

  tecla.onkeydown = function (event) {
    /* Esse event é um parametro que o JS, já da que fornece caracteristicas do evento, a que vamos usar agora é o .code, que pega o nome da tecla que foi apertada ou solta */
    if (event.code === 'Space' || event.code == 'Enter') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function (event) {
    if (event.code === 'Space' || event.code === 'Enter'){
      tecla.classList.remove('ativa')
    }
  }
}
