const maiorValor = 1000;
const menorValor = 0;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor +1);
}

console.log("O Número Secreto é:", numeroSecreto);

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;