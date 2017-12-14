
function imprimeProduto(nome,valor,imposto){
    
    valor = imposto(valor);
    
    document.write("Produto: "+nome+"Valor:R$"+valor);    
    
}

let imposto1 = function(valor){
    return valor + (valor * 0.1);
}

let impostoDiferente = function(valor){
    
    valor = valor + (valor * 0.1);
    return valor + (valor * 0.2);
    
}

imprimeProduto("Arroz",3.50,imposto1);
imprimeProduto("Calça",100,impostoDiferente);
