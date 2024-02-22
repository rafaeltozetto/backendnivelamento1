let nome;
nome = prompt("digite o seu nome:");
console.log(nome);
window.alert("olá ${nome}!");
let numero = number.parseint(math.random()*10 + 1);
let tentativas = 0;
let palpite = 0;


while((palpite != numero)&&(tentativas <5)){
    palpite = prompt("digite um numero:");
    tentativas++;
    if(palpite > numero){
        window.alert("voçê errou! o numero é menor que ${palpite}. tente outra vez");
    }else{
        if(palpite < numero)
        window.alert("voçê errou! o numero é maior que ${palpite}. tente outra vez");
    }
}

if(numero == palpite){
    let palavratentativa = tentativas==1 ? "tentativa" : "tentativas"
}