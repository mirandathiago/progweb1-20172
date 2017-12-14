function imprimePreco(nome,preco,imposto){
    
    let novovalor = imposto(preco);
    
document.write(nome+" - R$"+novovalor+"<br>");
    
}

let imposto1 = function(preco){
    return preco + (preco * 0.1);
}

let imposto2 = function(preco){
    
    let novovalor = preco + (preco * 0.1);
    return novovalor + (novovalor * 0.2);
    
}


 imprimePreco("Arroz",3.5,imposto1);
 imprimePreco("Calça",100,imposto2);
