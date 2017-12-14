function calculaValor(preco,atraso){
    
    if(atraso == 0){
        let desconto = preco * 0.05;
        preco = preco - desconto;
    }else{
        
        let multa = preco * 0.03;
        let juros = (preco * 0.005) * atraso;
        preco = preco + multa + juros;
        
    }
    
    return preco;
    
}

function executaQuestao3(){

    let preco = parseFloat( prompt("Digite Preço") );
    let dias = parseInt( prompt("Digite dias em atraso") );

    let novopreco = calculaValor(preco,dias);
    alert("O valor a ser pago é: "+novopreco);

}