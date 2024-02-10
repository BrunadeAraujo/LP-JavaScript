alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let escolhido;
let tentativas = 1;

while (escolhido != numeroSecreto) {
    escolhido = parseInt(prompt('Escolha um número entre 1 e 100'));

    if (numeroSecreto == escolhido) {
        break;
    } else {
        if (numeroSecreto > escolhido) {
            alert(`O número secreto é maior que ${escolhido}`);
        } else {
            alert(`O número secreto é menor que ${escolhido}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
