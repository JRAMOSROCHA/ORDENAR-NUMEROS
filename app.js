let vetorNumeros = [];

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextonaTela('h1', 'Ordenação de 3 números');
    exibirTextonaTela('p', 'Clique em um dos botões abaixo');
}

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarOpcao1(){
    for (var i=0; i<=2; i++) {
        vetorNumeros[i] = Number(prompt(`Digite o ${i+1}º número: `));
    }
    ordenarVetor();
}

function ordenarVetor(){
    vetorNumeros.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
});
console.log(`Os números ordenados são: ${vetorNumeros}!`);
alert(`Os números ordenados são: ${vetorNumeros}!`);
}   