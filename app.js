alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto)
 let escolhido = prompt('Escolha um número entre 1 e 10');

if (numeroSecreto == escolhido) {
    alert(`Parabéns! Você descobriu o número secreto: ${numeroSecreto}`);
} else{
    alert('Voce errou :(')
}
