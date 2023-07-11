// Utilizando para pesquisar e encontrar ou não encontar utilizando FIND
//Elementos já referenciados
const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");
//Criando um array numéricos

//const elementos_array = [10, 5, 8, 2, 9, 15, 20];
const elementos_array = ["html","css","javascript","mysql"];

// mostrar o array na página com tag p array
p_array.innerHTML = "[ " + elementos_array + " ]"; //recebendo todos os números que estão dentro do array e mostrando na página

//Pesquisando ao clicar no botão btnPesquisar utlizando evento click
//escutando um elemento de click com arrow function
btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = `Valor não encontrado`;//Quando tiver vazio ou não encontrar o que foi digitado
  //através do elemento do array
 const rest =  elementos_array.find((elemento, indice) => {//find serve para pesquisar em um array
    if(elemento.toUpperCase() == txt_pesquisar.value.toUpperCase()){
        //mostrar resultado na página
        resultado.innerHTML = `Valor encontrado ${elemento} na posição ${indice}`;
        return elemento;
    }
    
  });
  console.log(rest);
 
});
