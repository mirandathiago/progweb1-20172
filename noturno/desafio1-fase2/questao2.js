function somaImposto(preco,taxa){
    
    let imposto = taxa / 100;
    let novopreco = (preco * imposto) + preco;
    
    return novopreco;
    
}

function executaQuestao2(){

let p = parseFloat( prompt("Digite o Preço") );
let t = parseInt( prompt("Digite o imposto") );

let retorno = somaImposto(p,t);

alert("O valor a ser pago é "+retorno);
    
}