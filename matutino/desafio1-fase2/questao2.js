function calculaimposto(preco,taxa){
    
    let imposto = taxa / 100;
    let acrescimo = preco * imposto;
    let novovalor = preco + acrescimo;
    
    return novovalor;
    
}

function executaQuestao2(){

    var p = parseFloat( prompt("Digite o Preço") );
    var t = parseInt( prompt("Digite a taxa de Imposto") );

    let retorno = calculaimposto(p,t);
    alert(retorno);
    
    
}
